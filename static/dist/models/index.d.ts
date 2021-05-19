import { InitialTypeUser } from "./UserDto";
import { InitialLoginType } from "./LoginDto/type";
import { InitialTypeApp } from "./AppDto/type";
import { InitialRegistrationType } from "./RegistrationDto/type";
export declare type stateType = {
    appReducer: InitialTypeApp;
    userReducer: InitialTypeUser;
    loginReducer: InitialLoginType;
    signUpReducer: InitialRegistrationType;
};
export declare const rootReducer: (state: any, action: any) => any;
declare function getState(): stateType;
declare function subscribe(listener: Function): () => void;
declare function dispatch(action: Object): void;
declare const thunk: (cb: Function, request: Function, delay: number) => number | undefined;
declare const createStore: (reducer: Function, middleware: Function) => {
    dispatch: (action: any) => void;
    getState: () => any;
    subscribe: (handler: any) => () => void;
};
declare const delayMiddleware: () => (next: any) => (action: any) => void;
export { dispatch, subscribe, getState, thunk, createStore, delayMiddleware };
