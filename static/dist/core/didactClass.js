var rootInstance = null;
var TEXT_ELEMENT = 'TEXT_ELEMENT';
function createElement(type, config) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var props = Object.assign({}, config);
    var hasChildren = args.length > 0;
    var rawChildren = hasChildren ? [].concat.apply([], args) : [];
    props.children = rawChildren
        .filter(function (c) { return c != null && c !== false; })
        .map(function (c) {
        return c instanceof Object ? c : createTextElement(c);
    });
    return { type: type, props: props };
}
function createTextElement(value) {
    return createElement(TEXT_ELEMENT, { nodeValue: value });
}
function render(element, container) {
    var prevInstance = rootInstance;
    var nextInstance = reconcile(container, prevInstance, element);
    rootInstance = nextInstance;
}
function reconcile(parentDom, instance, element) {
    if (instance == null) {
        // Create instance
        var newInstance = instantiate(element);
        parentDom.appendChild(newInstance.dom);
        return newInstance;
    }
    else if (element == null) {
        // Remove instance
        parentDom.removeChild(instance.dom);
        return null;
    }
    else if (instance.element.type !== element.type) {
        // Replace instance
        var newInstance = instantiate(element);
        parentDom.replaceChild(newInstance.dom, instance.dom);
        return newInstance;
    }
    else if (typeof element.type === 'string') {
        // Update instance
        updateDomProperties(instance.dom, instance.element.props, element.props);
        instance.childInstances = reconcileChildren(instance, element);
        instance.element = element;
        return instance;
    }
    else {
        //Update composite instance
        instance.publicInstance.props = element.props;
        var childElement = instance.publicInstance.render();
        var oldChildInstance = instance.childInstance;
        var childInstance = reconcile(parentDom, oldChildInstance, childElement);
        instance.dom = childInstance.dom;
        instance.childInstance = childInstance;
        instance.element = element;
        return instance;
    }
}
function reconcileChildren(instance, element) {
    var dom = instance.dom;
    var childInstances = instance.childInstances;
    var nextChildElements = element.props.children || [];
    var newChildInstances = [];
    var count = Math.max(childInstances.length, nextChildElements.length);
    for (var i = 0; i < count; i++) {
        var childInstance = childInstances[i];
        var childElement = nextChildElements[i];
        var newChildInstance = reconcile(dom, childInstance, childElement);
        newChildInstances.push(newChildInstance);
    }
    return newChildInstances.filter(function (instance) { return instance != null; });
}
function instantiate(element) {
    var type = element.type, props = element.props;
    var isDomElement = typeof type === 'string';
    if (isDomElement) {
        // Instantiate DOM element
        var isTextElement = type === TEXT_ELEMENT;
        var dom_1 = isTextElement
            ? document.createTextNode('')
            : document.createElement(type);
        updateDomProperties(dom_1, [], props);
        var childElements = props.children || [];
        var childInstances = childElements.map(instantiate);
        var childDoms = childInstances.map(function (childInstance) { return childInstance.dom; });
        childDoms.forEach(function (childDom) { return dom_1.appendChild(childDom); });
        var instance = { dom: dom_1, element: element, childInstances: childInstances };
        return instance;
    }
    else {
        // Instantiate component element
        var instance = {};
        var publicInstance = createPublicInstance(element, instance);
        var childElement = publicInstance.render();
        var childInstance = instantiate(childElement);
        var dom = childInstance.dom;
        Object.assign(instance, {
            dom: dom,
            element: element,
            childInstance: childInstance,
            publicInstance: publicInstance,
        });
        return instance;
    }
}
function updateDomProperties(dom, prevProps, nextProps) {
    var isEvent = function (name) { return name.startsWith('on'); };
    var isAttribute = function (name) { return !isEvent(name) && name != 'children'; };
    // Remove event listeners
    Object.keys(prevProps)
        .filter(isEvent)
        .forEach(function (name) {
        var eventType = name.toLowerCase().substring(2);
        dom.removeEventListener(eventType, prevProps[name]);
    });
    // Remove attributes
    Object.keys(prevProps)
        .filter(isAttribute)
        .forEach(function (name) {
        dom[name] = null;
    });
    // Set attributes
    Object.keys(nextProps)
        .filter(isAttribute)
        .forEach(function (name) {
        dom[name] = nextProps[name];
    });
    // Add event listeners
    Object.keys(nextProps)
        .filter(isEvent)
        .forEach(function (name) {
        var eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, nextProps[name]);
    });
}
function createPublicInstance(element, internalInstance) {
    var type = element.type, props = element.props;
    var publicInstance = null;
    if (type) {
        publicInstance = new type(props);
    }
    else {
        publicInstance = element;
    }
    publicInstance.__internalInstance = internalInstance;
    return publicInstance;
}
var Component = /** @class */ (function () {
    function Component(props) {
        this.props = props;
        this.state = this.state || {};
    }
    Component.prototype.render = function () {
        throw new Error('Method not implemented.');
    };
    Component.prototype.setState = function (partialState) {
        this.state = Object.assign({}, this.state, partialState);
        updateInstance(this.__internalInstance);
    };
    Component.prototype.forceUpdate = function () {
        updateInstance(this.__internalInstance);
    };
    return Component;
}());
function updateInstance(internalInstance) {
    var parentDom = internalInstance.dom.parentNode;
    var element = internalInstance.element;
    reconcile(parentDom, internalInstance, element);
}
var Didact = {
    createElement: createElement,
    render: render,
    Component: Component,
};
export default Didact;
//# sourceMappingURL=didactClass.js.map