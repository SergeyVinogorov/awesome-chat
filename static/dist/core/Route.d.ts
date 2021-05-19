import Didact from "./didactClass";
export default class Route {
    private _pathname;
    private _blockClass;
    constructor(pathname: string, view: typeof Didact.Component);
    navigate(pathname: string): void;
    leave(): void;
    match(pathname: string): boolean;
    render(): void;
}
