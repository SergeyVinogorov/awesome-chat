var SIGN_IN_ITEM = 'SIGN_IN_ITEM';
var initialState = {
    login: {
        value: '',
        isValid: true,
    },
    password: {
        value: '',
        isValid: true,
    }
};
export function handleSignInItem(value) {
    return {
        type: SIGN_IN_ITEM,
        value: value
    };
}
export default function loginReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SIGN_IN_ITEM:
            return Object.assign({}, action.value);
        default:
            return state;
    }
}
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