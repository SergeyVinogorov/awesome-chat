var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import Didact from '../core/didactClass.js';
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.activate && _this.activate();
        return _this;
    }
    BaseComponent.prototype.activate = function () {
        // метод для переопределения
    };
    BaseComponent.prototype.update = function () { };
    BaseComponent.prototype.render = function () {
        console.log(this.view);
        if (this.view) {
            return this.view(this, this.props);
        }
        else {
            return Didact.createElement('div', {}, 'Представление не определено');
        }
    };
    return BaseComponent;
}(Didact.Component));
export { BaseComponent };
//# sourceMappingURL=BaseComponent.js.map