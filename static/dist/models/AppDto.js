import { ErrorTypeOfType } from "../types/appTypes.js";
var ERROR_TRIGGER = 'ERROR_TRIGGER';
var AUTH_TRIGGER = 'AUTH_TRIGGER';
var LOAD_TRIGGER = 'LOAD_TRIGGER';
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
//TODO error param should be object ErrorType
export function handleError(error) {
    return {
        type: ERROR_TRIGGER,
        error: error
    };
}
export function handleAuth(auth) {
    return {
        type: AUTH_TRIGGER,
        auth: {
            isAuth: auth
        }
    };
}
export function handleLoading(load) {
    return {
        type: AUTH_TRIGGER,
        loading: {
            loading: load
        }
    };
}
export default function appReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case ERROR_TRIGGER:
            return Object.assign({}, state, action.error);
        case AUTH_TRIGGER:
            return Object.assign({}, state, action.auth);
        case LOAD_TRIGGER:
            return Object.assign({}, state, action.loading);
        default:
            return state;
    }
}
var AppDto = /** @class */ (function () {
    function AppDto() {
        this.errorApp = {
            type: ErrorTypeOfType.info,
            message: 'ok',
            isError: false,
            show: false
        };
        this.isAuth = false;
    }
    Object.defineProperty(AppDto.prototype, "stateAppp", {
        get: function () {
            var result = {
                isAuth: this.isAuth,
                errorApp: this.errorApp,
            };
            return result;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppDto.prototype, "stateError", {
        set: function (state) {
            this.errorApp = state;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppDto.prototype, "stateIsAuth", {
        set: function (state) {
            this.isAuth = state;
        },
        enumerable: false,
        configurable: true
    });
    return AppDto;
}());
export { AppDto };
//# sourceMappingURL=AppDto.js.map