// import { getState, stateType } from "../models/models.js";
// import { REGISTRATION } from "../core/constants.js";
// import { router } from "../index.js";
var AppPageService = /** @class */ (function () {
    // private globalStore: stateType;
    function AppPageService() {
        // this.globalStore = getState()
        this.init();
    }
    AppPageService.prototype.init = function () {
        // if(!this.globalStore.appReducer.isAuth && window.location.pathname !== REGISTRATION) {
        //   router.go('/login', 'Страница входа')
        // }else{
        //  router.go('/chats', "Страница чатов")
        // }
    };
    return AppPageService;
}());
export { AppPageService };
//# sourceMappingURL=AppPageService.js.map