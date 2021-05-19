import { actionTypes } from "../actionTypes.js";
var initialState = {
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
};
export default function signUpReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.SIGN_UP_ITEM:
            return Object.assign({}, action.value);
        default:
            return state;
    }
}
//# sourceMappingURL=RegistrationDto.js.map