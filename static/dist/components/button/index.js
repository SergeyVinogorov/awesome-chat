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
import Didact from '../../core/didactClass.js';
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this._props = props;
        return _this;
    }
    Button.prototype.render = function () {
        var _a = this._props, type = _a.type, className = _a.className, onclick = _a.onclick, children = _a.children;
        return Didact.createElement('button', {
            type: type,
            className: className,
            onclick: onclick,
        }, children);
    };
    return Button;
}(Didact.Component));
export { Button };
//# sourceMappingURL=index.js.map