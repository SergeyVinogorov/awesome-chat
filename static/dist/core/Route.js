import { isEqual } from '../utils/isEqual.js';
import Didact from "./didactClass.js";
var Route = /** @class */ (function () {
    function Route(pathname, view, props) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }
    Route.prototype.navigate = function (pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
            console.log(this._props);
        }
    };
    Route.prototype.leave = function () {
        if (this._block) {
            var mainBlock = document.getElementById('app');
            if (mainBlock) {
                mainBlock.innerHTML = '';
            }
        }
    };
    Route.prototype.match = function (pathname) {
        return isEqual(pathname, this._pathname);
    };
    Route.prototype.render = function () {
        console.log(this._blockClass);
        console.log(document.getElementById('app'));
        Didact.render(new this._blockClass({}), document.getElementById('app'));
    };
    return Route;
}());
export default Route;
//# sourceMappingURL=Route.js.map