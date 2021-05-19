import { actionTypes } from "../actionTypes.js";
export function handleErrorAction(error) {
    return {
        type: actionTypes.ERROR_TRIGGER,
        error: error
    };
}
export function handleAuthAction(auth) {
    return {
        type: actionTypes.AUTH_TRIGGER,
        auth: {
            isAuth: auth
        }
    };
}
export function handleLoadingAction(load) {
    return {
        type: actionTypes.AUTH_TRIGGER,
        loading: {
            loading: load
        }
    };
}
//# sourceMappingURL=actions.js.map