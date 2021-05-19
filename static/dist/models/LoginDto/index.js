import { actionTypes } from "../actionTypes.js";
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
export default function loginReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.SIGN_IN_ITEM:
            return Object.assign({}, action.value);
        default:
            return state;
    }
}
//# sourceMappingURL=index.js.map