import Didact from "./didactClass";
export default class Route {
    private _pathname;
    private _blockClass;
    private _block;
    private _props;
    constructor(pathname: string, view: typeof Didact.Component, props: any);
    navigate(pathname: string): void;
    leave(): void;
    match(pathname: string): boolean;
    render(): void;
}
