import { isEqual } from "../utils/isEqual.js";
var RegistrationDto = /** @class */ (function () {
    function RegistrationDto() {
        this.firstName = {
            value: '',
            isValid: true,
        };
        this.lastName = {
            value: '',
            isValid: true,
        };
        this.login = {
            value: '',
            isValid: true,
        };
        this.mail = {
            value: '',
            isValid: true,
        };
        this.phone = {
            value: '',
            isValid: true,
        };
        this.password = {
            value: '',
            isValid: true,
        };
        this.passwordRepeat = {
            value: '',
            isValid: true,
        };
    }
    RegistrationDto.prototype.getState = function () {
        var result = {
            firstName: this.firstName,
            lastName: this.lastName,
            login: this.login,
            mail: this.mail,
            phone: this.phone,
            password: this.password,
        };
        return result;
    };
    RegistrationDto.prototype.handelCheckPassword = function () {
        return isEqual(this.password.value, this.passwordRepeat.value);
    };
    return RegistrationDto;
}());
export { RegistrationDto };
//# sourceMappingURL=RegistrationDto.js.map