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
import { LoginPageView } from '../view/LoginPageView.js';
import { LoginDto } from '../models/LoginDto.js';
var LoginPageController = /** @class */ (function (_super) {
    __extends(LoginPageController, _super);
    function LoginPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = LoginPageView;
        _this.loginState = new LoginDto();
        _this.validatorService = new PageFormValidatorService();
        return _this;
    }
    Object.defineProperty(LoginPageController.prototype, "getState", {
        get: function () {
            return this.loginState.getState();
        },
        enumerable: false,
        configurable: true
    });
    LoginPageController.prototype._handelValidate = function (event, type, name) {
        var resultValidate = this.validatorService.validateValue(event.value, type);
        switch (name) {
            case 'login':
                this.loginState.login = resultValidate;
                break;
            case 'pass':
                this.loginState.password = resultValidate;
                break;
            default:
                break;
        }
    };
    LoginPageController.prototype.handleOnInput = function (event, type, name) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    };
    LoginPageController.prototype.handleOnBlur = function (event, type, name) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    };
    LoginPageController.prototype.handleFormData = function (e) {
        e.preventDefault();
        this.loginState.login = this.validatorService.validateValue(this.loginState.login.value, 'email');
        this.loginState.password = this.validatorService.validateValue(this.loginState.password.value, 'password');
        if (this.loginState.login.isValid && this.loginState.password.isValid) {
            var formData = new FormData();
            formData.append('login', this.loginState.login.value);
            formData.append('password', this.loginState.password.value);
            console.log('login: ', formData.get('login'));
            console.log('password: ', formData.get('password'));
        }
        this.forceUpdate();
    };
    return LoginPageController;
}(BaseComponent));
export { LoginPageController };
//# sourceMappingURL=LoginPageController.js.map