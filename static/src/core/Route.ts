import { isEqual } from '../utils/isEqual';
import Didact from "./didactClass";
export default class Route {
	private _pathname: string;
	private _blockClass: typeof Didact.Component;
  constructor(pathname: string, view: typeof Didact.Component) {
      this._pathname = pathname;
      this._blockClass = view;
  }

  navigate(pathname: string) {
      if (this.match(pathname)) {
          this._pathname = pathname;
          this.render();
      }
  }

  leave() {
    const mainBlock: HTMLElement | null = document.getElementById('app')
    if (mainBlock) {
      mainBlock.innerHTML = ''
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    return Didact.render(new this._blockClass({}), document.getElementById('app'));
  }
}
