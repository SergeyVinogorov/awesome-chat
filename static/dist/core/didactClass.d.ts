declare function createElement(type: string, config: any, ...args: any): {
    type: string;
    props: any;
};
declare function render(element: any, container: HTMLElement | Node | null): void;
declare class Component {
    render(): void;
    props: any;
    state: any;
    __internalInstance: any;
    constructor(props: any);
    setState(partialState: any | {}): void;
    forceUpdate(): void;
}
declare const Didact: {
    createElement: typeof createElement;
    render: typeof render;
    Component: typeof Component;
};
export default Didact;
