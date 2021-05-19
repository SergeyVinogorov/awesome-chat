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
import { AuthServise } from '../services/AuthServise.js';
import { BaseComponent } from '../view/components/BaseComponent.js';
import { RegistrationPageView } from '../view/RegistrationPageView.js';
import { getState, dispatch } from "../models/models.js";
// import { handleSignUpAction } from '../models/RegistrationDto/actions.js';
import { handleErrorAction } from "../models/AppDto/actions.js";
import { isEqual } from "../utils/isEqual.js";
var RegistrationPageController = /** @class */ (function (_super) {
    __extends(RegistrationPageController, _super);
    function RegistrationPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.view = RegistrationPageView;
        _this.auth = new AuthServise();
        _this.store = getState();
        _this.validatorService = new PageFormValidatorService();
        _this.handlerCloseToast = function () {
            var currTest = Object.assign({}, _this.store);
            currTest.appReducer.errorApp.show = false;
            dispatch(handleErrorAction(currTest.appReducer.errorApp));
            _this.store = getState();
        };
        return _this;
    }
    RegistrationPageController.prototype.activate = function () {
        this.setState({
            firstName: {
                value: '',
                isValid: true,
            },
            lastName: {
                value: '',
                isValid: true,
            },
            login: {
                value: '',
                isValid: true,
            },
            mail: {
                value: '',
                isValid: true,
            },
            phone: {
                value: '',
                isValid: true,
            },
            password: {
                value: '',
                isValid: true,
            },
            passwordRepeat: {
                value: '',
                isValid: true,
            },
        });
    };
    RegistrationPageController.prototype._handelValidate = function (event, type, name) {
        var resultValidate = this.validatorService.validateValue(event.value, type);
        var result = {};
        result[name] = resultValidate;
        var newState = Object.assign({}, this.state, result);
        this.setState(newState);
        this.forceUpdate();
        // const localState: InitialRegistrationType = Object.assign({}, this.store.signUpReducer, result)
        // dispatch(handleSignUpAction(localState))
        // this.store = getState()
    };
    RegistrationPageController.prototype.handleOnInput = function (event, type, name) {
        this._handelValidate(event, type, name);
    };
    RegistrationPageController.prototype.handleOnBlur = function (event, type, name) {
        this._handelValidate(event, type, name);
    };
    RegistrationPageController.prototype.handelCheckPassword = function (password, passwordRepeat) {
        return isEqual(password, passwordRepeat);
    };
    RegistrationPageController.prototype.handleFormData = function (e) {
        e.preventDefault();
        // const methodStore = this.store.signUpReducer
        var methodStore = this.state;
        var firstName = this.validatorService.validateValue(methodStore.firstName.value, 'text');
        var lastName = this.validatorService.validateValue(methodStore.lastName.value, 'text');
        var login = this.validatorService.validateValue(methodStore.login.value, 'email');
        var mail = this.validatorService.validateValue(methodStore.mail.value, 'email');
        var phone = this.validatorService.validateValue(methodStore.phone.value, 'tel');
        var password = this.validatorService.validateValue(methodStore.password.value, 'password');
        var passwordRepeat = this.validatorService.validateValue(methodStore.passwordRepeat.value, 'password');
        if (firstName.isValid &&
            lastName.isValid &&
            login.isValid &&
            mail.isValid &&
            phone.isValid &&
            password.isValid &&
            passwordRepeat.isValid &&
            this.handelCheckPassword(password.value, passwordRepeat.value)) {
            var params = {
                first_name: firstName.value,
                second_name: lastName.value,
                login: login.value,
                email: mail.value,
                password: password.value,
                phone: phone.value,
            };
            this.auth.signUp(params);
        }
    };
    return RegistrationPageController;
}(BaseComponent));
export { RegistrationPageController };
//{"id":13540}
// email: "VinogorichS@yandex.ru"
// first_name: "Сергей"
// login: "VinogorichS@yandex.ru"
// password: "testuser"
// phone: "89676430819"
// second_name: "VINOGOROV"
//# sourceMappingURL=RegistrationPageController.js.map