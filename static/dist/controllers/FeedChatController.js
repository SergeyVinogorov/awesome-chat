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
import { FeedChatPageView } from '../view/FeedChatPageView.js';
var FeedChatPageController = /** @class */ (function (_super) {
    __extends(FeedChatPageController, _super);
    function FeedChatPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = FeedChatPageView;
        // public appService: AppPageService;
        _this.validatorService = new PageFormValidatorService();
        return _this;
    }
    FeedChatPageController.prototype.handleSearch = function (value) {
        console.log(value);
    };
    FeedChatPageController.prototype.handleOnInput = function (event, type) {
        var isCorrect = this.validatorService.validateValue(event.value, type);
        return isCorrect;
    };
    return FeedChatPageController;
}(BaseComponent));
export { FeedChatPageController };
//# sourceMappingURL=FeedChatController.js.map