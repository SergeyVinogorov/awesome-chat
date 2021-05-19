import combineReducers from "../core/combineReducers.js";
import userReducer from "./UserDto/UserDto.js";
import appReducer from "./AppDto/AppDto.js";
import loginReducer from "./LoginDto/LoginDto.js";
import signUpReducer from "./RegistrationDto/RegistrationDto.js";
export var rootReducer = combineReducers({
    appReducer: appReducer,
    userReducer: userReducer,
    loginReducer: loginReducer,
    signUpReducer: signUpReducer
});
var state;
var listeners = [];
function getState() {
    return state;
}
function subscribe(listener) {
    listeners.push(listener);
    // listener()
    dispatch({});
    return function unsubscribe() {
        var index = listeners.indexOf(listener);
        listeners.splice(index, 1);
    };
}
function dispatch(action) {
    state = rootReducer(state, action);
    listeners.forEach(function (listener) { return listener(); });
}
// dispatch({})
function Async(cb, request) {
    request(cb);
}
var thunk = function (cb, request, delay) {
    if (delay) {
        return setTimeout(function () {
            Async(cb, request);
        }, delay);
    }
    Async(cb, request);
};
var validateAction = function (action) {
    if (!action || typeof action !== 'object' || Array.isArray(action)) {
        throw new Error('Action must be an object!');
    }
    if (typeof action.type === 'undefined') {
        throw new Error('Action must have a type!');
    }
};
var createStore = function (reducer, middleware) {
    var state;
    var subscribers = [];
    var coreDispatch = function (action) {
        validateAction(action);
        state = reducer(state, action);
        subscribers.forEach(function (handler) { return handler(); });
    };
    var getState = function () { return state; };
    var store = {
        dispatch: coreDispatch,
        getState: getState,
        subscribe: function (handler) {
            subscribers.push(handler);
            return function () {
                var index = subscribers.indexOf(handler);
                if (index > 0) {
                    subscribers.splice(index, 1);
                }
            };
        }
    };
    if (middleware) {
        var dispatch_1 = function (action) { return store.dispatch(action); };
        store.dispatch = middleware({
            dispatch: dispatch_1,
            getState: getState
        })(coreDispatch);
    }
    coreDispatch({ type: '@@redux/INIT' });
    return store;
};
var delayMiddleware = function () { return function (next) { return function (action) {
    setTimeout(function () {
        next(action);
    }, 1000);
}; }; };
export { dispatch, subscribe, getState, thunk, createStore, delayMiddleware };
//# sourceMappingURL=models.js.map