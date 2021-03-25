var LoginDto = /** @class */ (function () {
    function LoginDto() {
        this.userState = {
            value: '',
            isValid: true,
        };
        this.id = 0;
        this.first_name = null;
        this.second_name = null;
        this.display_name = null;
        this.login = null;
        this.email = null;
        this.phone = null;
        this.avatar = null;
    }
    LoginDto.prototype.getState = function () {
        var result = {
            id: this.id,
            first_name: this.first_name,
            second_name: this.second_name,
            display_name: this.display_name,
            login: this.login,
            email: this.email,
            phone: this.phone,
            avatar: this.avatar
        };
        return result;
    };
    return LoginDto;
}());
export { LoginDto };
//# sourceMappingURL=UserDto.js.map