import { isEqual } from '../utils/isEqual';
import Didact from "./didactClass";

export default class Route {
	private _pathname: string;
	private _blockClass: typeof Didact.Component;
	private _block: any;
	private _props: any;
  constructor(pathname: string, view: typeof Didact.Component, props: any) {
      this._pathname = pathname;
      this._blockClass = view;
      this._block = null;
      this._props = props;
  }

  navigate(pathname: string) {
      if (this.match(pathname)) {
          this._pathname = pathname;
          this.render();
          console.log(this._props);
      }
  }

  leave() {
      if (this._block) {
        const mainBlock: HTMLElement | null = document.getElementById('app')
        if (mainBlock) {
          mainBlock.innerHTML = ''
        }
      }
  }

  match(pathname: string) {
      return isEqual(pathname, this._pathname);
  }

  render() {
    console.log(this._blockClass);
    console.log(document.getElementById('app'));

    Didact.render(new this._blockClass({}), document.getElementById('app'));
  }
}
