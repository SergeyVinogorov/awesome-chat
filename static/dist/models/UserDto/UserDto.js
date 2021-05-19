import { actionTypes } from "../actionTypes.js";
export var initialState = {
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
export default function userReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.USER_INFO:
            return Object.assign({}, action.user);
        case actionTypes.USER_OUT:
            return Object.assign({}, action.user);
        default:
            return state;
    }
}
//# sourceMappingURL=UserDto.js.map