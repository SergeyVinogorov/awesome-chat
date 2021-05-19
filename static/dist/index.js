var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import Didact from "./core/didactClass.js";
import { subscribe, dispatch } from "./models/models.js";
import { handleUserInfoAction } from "./models/UserDto/actions.js";
import { handleAuthAction } from "./models/AppDto/actions.js";
import { AuthRepository } from "./repository/AuthRepository.js";
import { AppPageController } from "./controllers/AppPageController.js";
import { ErrorPageController } from './controllers/ErrorPageController.js';
import { LoginPageController } from './controllers/LoginPageController.js';
import { RegistrationPageController } from './controllers/RegistrationPageController.js';
import { ListChatPageController } from './controllers/ListChatController.js';
import { FeedChatPageController } from './controllers/FeedChatController.js';
import { SettingProfilePageController } from './controllers/SentingProfilePageController.js';
import Router from "./core/Router.js";
export var router = new Router();
var authApi = new AuthRepository();
router.use('/', FeedChatPageController);
router.use('/login', LoginPageController);
router.use('/registration', RegistrationPageController);
router.use('/chats', ListChatPageController);
router.use('/settings', SettingProfilePageController);
router.use('/notFound', ErrorPageController);
router.start();
authApi.getUserInfo()
    .then(function (info) {
    return info;
})
    .then(function (data) {
    var respUser = JSON.parse(data);
    var user = {
        userInfo: __assign({}, respUser)
    };
    dispatch(handleUserInfoAction(user));
    dispatch(handleAuthAction(true));
});
subscribe(function () {
    Didact.render(new AppPageController({}), document.getElementById('app'));
});
//# sourceMappingURL=index.js.map