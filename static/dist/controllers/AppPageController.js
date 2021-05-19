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
import { AppPageView } from "../view/AppPageView.js";
import { AppPageService } from "../services/AppPageService.js";
import { BaseComponent } from "../view/components/BaseComponent.js";
var AppPageController = /** @class */ (function (_super) {
    __extends(AppPageController, _super);
    function AppPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = AppPageView;
        _this.appService = new AppPageService();
        return _this;
    }
    return AppPageController;
}(BaseComponent));
export { AppPageController };
//# sourceMappingURL=AppPageController.js.map