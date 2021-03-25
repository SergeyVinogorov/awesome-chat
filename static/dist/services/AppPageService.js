var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Router from "../core/Router.js";
import { ErrorPageController } from '../controllers/ErrorPageController.js';
import { LoginPageController } from '../controllers/LoginPageController.js';
import { RegistrationPageController } from '../controllers/RegistrationPageController.js';
import { ListChatPageController } from '../controllers/ListChatController.js';
import { FeedChatPageController } from '../controllers/FeedChatController.js';
import { SettingProfilePageController } from '../controllers/SentingProfilePageController.js';
import { AppDto } from "../models/AppDto.js";
import { Service } from "../core/ServiceDecorator.js";
var AppPageService = /** @class */ (function () {
    function AppPageService() {
        this.globalState = new AppDto();
        this.router = new Router();
        this.router.use('/', FeedChatPageController);
        this.router.use('/login', LoginPageController);
        this.router.use('/registration', RegistrationPageController);
        this.router.use('/list-chats', ListChatPageController);
        this.router.use('/settings', SettingProfilePageController);
        this.router.use('/notFound', ErrorPageController);
        this.router.start();
        this.init();
    }
    AppPageService.prototype.init = function () {
        if (!this.globalState.isAuth) {
            this.router.go('/login');
        }
    };
    AppPageService.prototype.handleError = function (stateError) {
        this.globalState.stateError = stateError;
    };
    AppPageService.prototype.handleAuth = function (stateAuth) {
        this.globalState.stateIsAuth = stateAuth;
        if (!stateAuth) {
            this.router.go('/login');
        }
    };
    AppPageService.prototype.handleState = function () {
        return this.globalState.stateAppp;
    };
    AppPageService = __decorate([
        Service(),
        __metadata("design:paramtypes", [])
    ], AppPageService);
    return AppPageService;
}());
export { AppPageService };
//# sourceMappingURL=AppPageService.js.map