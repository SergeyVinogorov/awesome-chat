var USER_INFO = 'USER_INFO';
var USER_OUT = 'USER_OUT';
var initialState = {
    userInfo: {
        id: null,
        first_name: null,
        second_name: null,
        display_name: null,
        login: null,
        email: null,
        phone: null,
        avatar: null
    }
};
export function handleUserInfo(user) {
    return {
        type: USER_INFO,
        user: user
    };
}
export function handleUserLogout() {
    return {
        type: USER_OUT,
        user: initialState
    };
}
export default function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case USER_INFO:
            return Object.assign({}, action.user);
        case USER_OUT:
            return Object.assign({}, action.user);
        default:
            return state;
    }
}
var UserDto = /** @class */ (function () {
    function UserDto() {
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
    UserDto.prototype.getState = function () {
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
    return UserDto;
}());
export { UserDto };
//# sourceMappingURL=UserDto.js.map