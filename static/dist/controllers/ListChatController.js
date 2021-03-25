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
import { PageFormValidatorService } from '../services/PageFormValidatorService.js';
import { BaseComponent } from '../components/BaseComponent.js';
import { ListChatPageView } from '../view/ListChatPageView.js';
var ListChatPageController = /** @class */ (function (_super) {
    __extends(ListChatPageController, _super);
    function ListChatPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = ListChatPageView;
        _this.validatorService = new PageFormValidatorService();
        return _this;
    }
    ListChatPageController.prototype.handleSearch = function (value) {
        console.log(value);
    };
    return ListChatPageController;
}(BaseComponent));
export { ListChatPageController };
//# sourceMappingURL=ListChatController.js.map