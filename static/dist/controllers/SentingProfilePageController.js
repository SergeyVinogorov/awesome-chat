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
import { BaseComponent } from '../view/components/BaseComponent.js';
import { SettingProfilePageView } from '../view/SettingProfilePageView.js';
var SettingProfilePageController = /** @class */ (function (_super) {
    __extends(SettingProfilePageController, _super);
    function SettingProfilePageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = SettingProfilePageView;
        _this._firstName = {
            value: '',
            isValid: true,
        };
        _this._lastName = {
            value: '',
            isValid: true,
        };
        _this._displayName = {
            value: '',
            isValid: true,
        };
        _this._login = {
            value: '',
            isValid: true,
        };
        _this._mail = {
            value: '',
            isValid: true,
        };
        _this._phone = {
            value: '',
            isValid: true,
        };
        _this._avatar = {
            value: '',
            isValid: true,
        };
        _this._password = {
            value: '',
            isValid: true,
        };
        _this._newPassword = {
            value: '',
            isValid: true,
        };
        _this.validatorService = new PageFormValidatorService();
        return _this;
    }
    Object.defineProperty(SettingProfilePageController.prototype, "getState", {
        get: function () {
            var result = {
                firstName: this._firstName,
                lastName: this._lastName,
                displayName: this._displayName,
                login: this._login,
                mail: this._mail,
                phone: this._phone,
                avatar: this._avatar,
                password: this._password,
                newPassword: this._newPassword,
            };
            return result;
        },
        enumerable: false,
        configurable: true
    });
    SettingProfilePageController.prototype._handelValidate = function (event, type, name) {
        var resultValidate = this.validatorService.validateValue(event.value, type);
        switch (name) {
            case 'firstName':
                this._firstName = resultValidate;
                break;
            case 'lastName':
                this._lastName = resultValidate;
                break;
            case 'displayName':
                this._displayName = resultValidate;
                break;
            case 'login':
                this._login = resultValidate;
                break;
            case 'mail':
                this._mail = resultValidate;
                break;
            case 'phone':
                this._phone = resultValidate;
                break;
            case 'avatar':
                this._avatar = resultValidate;
                break;
            case 'pass':
                this._password = resultValidate;
                break;
            case 'newpass':
                this._newPassword = resultValidate;
                break;
            default:
                break;
        }
        return resultValidate;
    };
    SettingProfilePageController.prototype.handleOnInput = function (event, type, name) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    };
    SettingProfilePageController.prototype.handleOnBlur = function (event, type, name) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    };
    SettingProfilePageController.prototype.handleFormData = function (e) {
        e.preventDefault();
        this._firstName = this.validatorService.validateValue(this._firstName.value, 'text');
        this._lastName = this.validatorService.validateValue(this._lastName.value, 'text');
        this._displayName = this.validatorService.validateValue(this._displayName.value, 'text');
        this._login = this.validatorService.validateValue(this._login.value, 'email');
        this._mail = this.validatorService.validateValue(this._mail.value, 'email');
        this._phone = this.validatorService.validateValue(this._phone.value, 'tel');
        this._avatar = this.validatorService.validateValue(this._avatar.value, 'text');
        this._password = this.validatorService.validateValue(this._password.value, 'password');
        this._newPassword = this.validatorService.validateValue(this._newPassword.value, 'password');
        if (this._firstName.isValid &&
            this._lastName.isValid &&
            this._displayName.isValid &&
            this._login.isValid &&
            this._mail.isValid &&
            this._phone.isValid &&
            this._avatar.isValid &&
            this._password.isValid &&
            this._newPassword.isValid) {
            var formData = new FormData();
            formData.append('firstName', this._firstName.value);
            formData.append('lastName', this._lastName.value);
            formData.append('login', this._login.value);
            formData.append('mail', this._mail.value);
            formData.append('phone', this._phone.value);
            console.log('firstName: ', formData.get('firstName'));
            console.log('lastName: ', formData.get('lastName'));
            console.log('login: ', formData.get('login'));
            console.log('phone: ', formData.get('phone'));
        }
        this.forceUpdate();
    };
    return SettingProfilePageController;
}(BaseComponent));
export { SettingProfilePageController };
//# sourceMappingURL=SentingProfilePageController.js.map