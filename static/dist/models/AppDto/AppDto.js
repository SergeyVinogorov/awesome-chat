import { ErrorTypeOfType } from "./type.js";
import { actionTypes } from "../actionTypes.js";
var initialState = {
    errorApp: {
        type: ErrorTypeOfType.info,
        message: 'ok',
        isError: false,
        show: false
    },
    isAuth: false,
    loading: false
};
export default function appReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case actionTypes.ERROR_TRIGGER:
            return Object.assign({}, state, action.error);
        case actionTypes.AUTH_TRIGGER:
            return Object.assign({}, state, action.auth);
        case actionTypes.LOAD_TRIGGER:
            return Object.assign({}, state, action.loading);
        default:
            return state;
    }
}
//# sourceMappingURL=AppDto.js.map