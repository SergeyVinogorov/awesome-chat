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
import { BaseComponent } from '../view/components/BaseComponent.js';
import { NotFoundPageView } from '../view/NotFoundRageView.js';
import { ServerErrorPageView } from '../view/ServerErrorPaveView.js';
var ErrorPageController = /** @class */ (function (_super) {
    __extends(ErrorPageController, _super);
    function ErrorPageController(props) {
        var _this = _super.call(this, props) || this;
        _this.view = '';
        if (props.notFound) {
            _this.view = NotFoundPageView;
        }
        else {
            _this.view = ServerErrorPageView;
        }
        return _this;
    }
    return ErrorPageController;
}(BaseComponent));
export { ErrorPageController };
//# sourceMappingURL=ErrorPageController.js.map