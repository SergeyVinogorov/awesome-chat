var LoginDto = /** @class */ (function () {
    function LoginDto() {
        this.login = {
            value: '',
            isValid: true,
        };
        this.password = {
            value: '',
            isValid: true,
        };
    }
    LoginDto.prototype.getState = function () {
        var result = {
            login: this.login,
            password: this.password,
        };
        return result;
    };
    return LoginDto;
}());
export { LoginDto };
//# sourceMappingURL=LoginDto.js.map