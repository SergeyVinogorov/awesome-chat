import { Nullable } from "../types/roteTypes";
import Route from "./Route";



interface RouterInterface {
	__instance: RouterInterface
	routes: string []
	history: History
	_currentRoute: Nullable<any>;
	use(pathname: string, block: UserPageOptions): RouterInterface
	start(): void
	_onRoute(pathname: string):void
	go(pathname:string, title: string):void
	getRoute(pathname: string):string
}

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

class Router implements RouterInterface {
	routes: any[];
	history: History;
	_currentRoute: Nullable<any>;
	static __instance: any;
	__instance: RouterInterface;
  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: string, block: any): RouterInterface {
    const route = new Route(pathname, block);
    this.routes.push(route);
    return this;
  }

  start() {
    window.onpopstate = ((event: any ) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }
    this._currentRoute = route
    route.render();
  }

  go(pathname: string, title: string) {
    this.history.pushState({}, title, pathname);
    this._onRoute(pathname);
  }

  getRoute(pathname: string):any {
    return this.routes.find(route => route.match(pathname))
  }

}

export default Router;
