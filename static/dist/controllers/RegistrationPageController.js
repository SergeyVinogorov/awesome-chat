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
import { RegistrationPageView } from '../view/RegistrationPageView.js';
import { RegistrationDto } from '../models/RegistrationDto.js';
var RegistrationPageController = /** @class */ (function (_super) {
    __extends(RegistrationPageController, _super);
    function RegistrationPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = RegistrationPageView;
        _this.registrationState = new RegistrationDto();
        _this.validatorService = new PageFormValidatorService();
        return _this;
    }
    Object.defineProperty(RegistrationPageController.prototype, "getState", {
        get: function () {
            return this.registrationState.getState();
        },
        enumerable: false,
        configurable: true
    });
    RegistrationPageController.prototype._handelValidate = function (event, type, name) {
        var resultValidate = this.validatorService.validateValue(event.value, type);
        switch (name) {
            case 'firstName':
                this.registrationState.firstName = resultValidate;
                break;
            case 'lastName':
                this.registrationState.lastName = resultValidate;
                break;
            case 'login':
                this.registrationState.login = resultValidate;
                break;
            case 'mail':
                this.registrationState.mail = resultValidate;
                break;
            case 'phone':
                this.registrationState.phone = resultValidate;
                break;
            case 'password':
                this.registrationState.password = resultValidate;
                break;
            case 'passwordRepeat':
                this.registrationState.passwordRepeat = resultValidate;
                break;
            default:
                break;
        }
        return resultValidate;
    };
    RegistrationPageController.prototype.handleOnInput = function (event, type, name) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    };
    RegistrationPageController.prototype.handleOnBlur = function (event, type, name) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    };
    RegistrationPageController.prototype.handleFormData = function (e) {
        e.preventDefault();
        this._handelValidate(this.registrationState.firstName, 'text', 'firstName');
        this._handelValidate(this.registrationState.lastName, 'text', 'lastName');
        this._handelValidate(this.registrationState.login, 'email', 'login');
        this._handelValidate(this.registrationState.mail, 'email', 'mail');
        this._handelValidate(this.registrationState.phone, 'tel', 'phone');
        this._handelValidate(this.registrationState.password, 'password', 'password');
        if (this.registrationState.firstName.isValid &&
            this.registrationState.lastName.isValid &&
            this.registrationState.login.isValid &&
            this.registrationState.mail.isValid &&
            this.registrationState.phone.isValid &&
            this.registrationState.password.isValid) {
            var formData = new FormData();
            formData.append('firstName', this.registrationState.firstName.value);
            formData.append('lastName', this.registrationState.lastName.value);
            formData.append('login', this.registrationState.login.value);
            formData.append('mail', this.registrationState.mail.value);
            formData.append('phone', this.registrationState.phone.value);
            console.log('firstName: ', formData.get('firstName'));
            console.log('lastName: ', formData.get('lastName'));
            console.log('login: ', formData.get('login'));
            console.log('phone: ', formData.get('phone'));
        }
        this.forceUpdate();
    };
    return RegistrationPageController;
}(BaseComponent));
export { RegistrationPageController };
//# sourceMappingURL=RegistrationPageController.js.map