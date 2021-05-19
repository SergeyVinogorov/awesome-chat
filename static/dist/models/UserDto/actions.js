import { initialState } from "./index.js";
import { actionTypes } from "../actionTypes.js";
export function handleUserInfoAction(user) {
    return {
        type: actionTypes.USER_INFO,
        user: user
    };
}
export function handleUserLogoutAction() {
    return {
        type: actionTypes.USER_OUT,
        user: initialState
    };
}
//# sourceMappingURL=actions.js.map