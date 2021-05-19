import { Nullable } from "../types/roteTypes";
interface RouterInterface {
    __instance: RouterInterface;
    routes: string[];
    history: History;
    _currentRoute: Nullable<any>;
    use(pathname: string, block: UserPageOptions): RouterInterface;
    start(): void;
    _onRoute(pathname: string): void;
    go(pathname: string, title: string): void;
    getRoute(pathname: string): string;
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
    __instance: RouterInterface;
    constructor();
    use(pathname: string, block: any): RouterInterface;
    start(): void;
    _onRoute(pathname: string): void;
    go(pathname: string, title: string): void;
    getRoute(pathname: string): any;
}
export default Router;
