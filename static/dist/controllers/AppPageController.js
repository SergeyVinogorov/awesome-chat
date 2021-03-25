import { AppPageView } from "../view/AppPageView.js";
import { AppPageService } from "../services/AppPageService.js";
var AppPageController = /** @class */ (function () {
    function AppPageController() {
        this.view = AppPageView;
        this.appService = new AppPageService();
    }
    AppPageController.prototype.render = function () {
        return this.view();
    };
    return AppPageController;
}());
export { AppPageController };
//# sourceMappingURL=AppPageController.js.map