import { getState } from "../models/models.js";
import { router } from "../index.js";
import { REGISTRATION } from "../core/constants.js";
var FeedChatService = /** @class */ (function () {
    function FeedChatService() {
        this.globalStore = getState();
        this.init();
    }
    FeedChatService.prototype.init = function () {
        if (!this.globalStore.appReducer.isAuth && window.location.pathname !== REGISTRATION) {
            router.start();
            router.go('/login', 'Страница входа');
        }
    };
    return FeedChatService;
}());
export { FeedChatService };
//# sourceMappingURL=FeedChatsServices.js.map