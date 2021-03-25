import { Nullable } from "../types/roteTypes";
interface RouterInterface {
    __instance: RouterInterface;
    routes: string[];
    history: History;
    _currentRoute: Nullable<any>;
    use(pathname: string, block: UserPageOptions): RouterInterface;
    start(): void;
    _onRoute(pathname: string): void;
    go(pathname: string): void;
}
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
declare class Router implements RouterInterface {
    routes: any[];
    history: History;
    _currentRoute: Nullable<any>;
    static __instance: any;
    private _rootQuery;
    __instance: RouterInterface;
    constructor();
    use(pathname: string, block: any): RouterInterface;
    start(): void;
    _onRoute(pathname: string): void;
    go(pathname: string): void;
    getRoute(pathname: string): any;
}
export default Router;
