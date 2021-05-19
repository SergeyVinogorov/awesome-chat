type InstantiateType = {
    dom: Node;
    element: ChildrenAlias;
    childInstance: InstantiateType;
    childInstances?: any;
    publicInstance?: any;
};

type ChildrenAlias = Function | [] | {} | Node | Array<Function | string>;

type ElementType = {
    type: typeof Component;
    props: any;
};

let rootInstance: any | null = null;
const TEXT_ELEMENT = 'TEXT_ELEMENT';

function createElement(type: string, config: any, ...args: any) {
    const props = Object.assign({}, config);
    const hasChildren = args.length > 0;
    const rawChildren = hasChildren ? [].concat(...args) : [];
    props.children = rawChildren
        .filter((c) => c != null && c !== false)
        .map((c: Object | string) =>
            c instanceof Object ? c : createTextElement(c)
        );
    return { type, props };
}

function createTextElement(value: string) {
    return createElement(TEXT_ELEMENT, { nodeValue: value });
}

function render(element: any, container: HTMLElement | Node | null) {
    const prevInstance = rootInstance;
    const nextInstance = reconcile(container, prevInstance, element);
    rootInstance = nextInstance;
}

function reconcile(
    parentDom: HTMLElement | Node | any,
    instance: any,
    element: ChildrenAlias | any
) {
    if (instance == null) {
        // Create instance
        const newInstance = instantiate(element);

        parentDom.appendChild(newInstance.dom);
        return newInstance;
    } else if (element == null) {
        // Remove instance
        parentDom.removeChild(instance.dom);
        return null;
    } else if (instance.element.type !== element.type) {
        // Replace instance
        const newInstance = instantiate(element);
        parentDom.replaceChild(newInstance.dom, instance.dom);
        return newInstance;
    } else if (typeof element.type === 'string') {
        // Update instance
        updateDomProperties(
            instance.dom,
            instance.element.props,
            element.props
        );
        instance.childInstances = reconcileChildren(instance, element);
        instance.element = element;
        return instance;
    } else {
        //Update composite instance
        instance.publicInstance.props = element.props;
        const childElement = instance.publicInstance.render();
        const oldChildInstance = instance.childInstance;
        const childInstance = reconcile(
            parentDom,
            oldChildInstance,
            childElement
        );
        instance.dom = childInstance.dom;
        instance.childInstance = childInstance;
        instance.element = element;
        return instance;
    }
}

function reconcileChildren(instance: InstantiateType, element: any) {
    const dom = instance.dom;
    const childInstances = instance.childInstances;
    const nextChildElements = element.props.children || [];
    const newChildInstances = [];
    const count = Math.max(childInstances.length, nextChildElements.length);
    for (let i = 0; i < count; i++) {
        const childInstance = childInstances[i];
        const childElement = nextChildElements[i];
        const newChildInstance = reconcile(dom, childInstance, childElement);
        newChildInstances.push(newChildInstance);
    }
    return newChildInstances.filter((instance) => instance != null);
}

function instantiate(element: ChildrenAlias | any): InstantiateType {
    const { type, props } = element;
    const isDomElement = typeof type === 'string';
    if (isDomElement) {
        // Instantiate DOM element
        const isTextElement = type === TEXT_ELEMENT;
        const dom = isTextElement
            ? document.createTextNode('')
            : document.createElement(type);

        updateDomProperties(dom, [], props);

        const childElements = props.children || [];
        const childInstances = childElements.map(instantiate);
        const childDoms = childInstances.map(
            (childInstance: any) => childInstance.dom
        );
        childDoms.forEach((childDom: any) => dom.appendChild(childDom));

        const instance: any = { dom, element, childInstances };
        return instance;
    } else {
        // Instantiate component element
        const instance: any = {};
        const publicInstance = createPublicInstance(element, instance);

        const childElement = publicInstance.render();
        const childInstance = instantiate(childElement);
        const dom = childInstance.dom;

        Object.assign(instance, {
            dom,
            element,
            childInstance,
            publicInstance,
        });
        return instance;
    }
}

function updateDomProperties(dom: any, prevProps: any, nextProps: any) {
    const isEvent = (name: string) => name.startsWith('on');
    const isAttribute = (name: string) => !isEvent(name) && name != 'children';

    // Remove event listeners
    Object.keys(prevProps)
        .filter(isEvent)
        .forEach((name: string) => {
            const eventType = name.toLowerCase().substring(2);
            dom.removeEventListener(eventType, prevProps[name]);
        });

    // Remove attributes
    Object.keys(prevProps)
        .filter(isAttribute)
        .forEach((name: string) => {
            dom[name] = null;
        });

    // Set attributes
    Object.keys(nextProps)
        .filter(isAttribute)
        .forEach((name: string) => {
            dom[name] = nextProps[name];
        });

    // Add event listeners
    Object.keys(nextProps)
        .filter(isEvent)
        .forEach((name: string) => {
            const eventType = name.toLowerCase().substring(2);
            dom.addEventListener(eventType, nextProps[name]);
        });
}
function createPublicInstance(
    element: ElementType | any,
    internalInstance: any
) {
    const { type, props } = element;
    let publicInstance = null;
    if (type) {
        publicInstance = new type(props);
    } else {
        publicInstance = element;
    }
    publicInstance.__internalInstance = internalInstance;
    return publicInstance;
}

class Component {
    render() {
        throw new Error('Method not implemented.');
    }
    props: any;
    state: any;
    __internalInstance: any;
    constructor(props: any) {
        this.props = props;
        this.state = this.state || {};
    }

    setState(partialState: any | {}) {
        this.state = Object.assign({}, this.state, partialState);
        // updateInstance(this.__internalInstance);
    }
    forceUpdate() {
        updateInstance(this.__internalInstance);
    }
}

function updateInstance(internalInstance: InstantiateType) {
    const parentDom = internalInstance.dom.parentNode;
    const element = internalInstance.element;
    reconcile(parentDom, internalInstance, element);
}

const Didact = {
    createElement,
    render,
    Component,
};

export default Didact;
