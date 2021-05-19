import { isEqual } from '../utils/isEqual.js';
import Didact from "./didactClass.js";
var Route = /** @class */ (function () {
    function Route(pathname, view) {
        this._pathname = pathname;
        this._blockClass = view;
    }
    Route.prototype.navigate = function (pathname) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    };
    Route.prototype.leave = function () {
        var mainBlock = document.getElementById('app');
        if (mainBlock) {
            mainBlock.innerHTML = '';
        }
    };
    Route.prototype.match = function (pathname) {
        return isEqual(pathname, this._pathname);
    };
    Route.prototype.render = function () {
        return Didact.render(new this._blockClass({}), document.getElementById('app'));
    };
    return Route;
}());
export default Route;
//# sourceMappingURL=Route.js.map