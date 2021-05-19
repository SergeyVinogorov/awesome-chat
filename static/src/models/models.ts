import combineReducers from "../core/combineReducers";

import userReducer from "./UserDto/UserDto";
import appReducer from "./AppDto/AppDto";
import loginReducer from "./LoginDto/LoginDto";
import signUpReducer from "./RegistrationDto/RegistrationDto";

import { InitialTypeUser } from "./UserDto/type";
import { InitialLoginType } from "./LoginDto/type";
import { InitialTypeApp } from "./AppDto/type";
import { InitialRegistrationType } from "./RegistrationDto/type";

export type stateType = {
  appReducer: InitialTypeApp,
  userReducer: InitialTypeUser,
  loginReducer: InitialLoginType
  signUpReducer: InitialRegistrationType
}


export const rootReducer = combineReducers({
  appReducer,
  userReducer,
  loginReducer,
  signUpReducer
});

let state: stateType;
let listeners: Array<Function> = []

function getState() {
    return state
}

function subscribe(listener: Function) {
  listeners.push(listener)
  // listener()
  dispatch({})
  return function unsubscribe() {
      var index = listeners.indexOf(listener)
      listeners.splice(index, 1)
  }
}

function dispatch(action: Object) {
  state = rootReducer(state, action)
  listeners.forEach(listener => listener())
}

// dispatch({})

function Async(cb: Function, request: Function) {
  request(cb);
}

const thunk = function(cb: Function, request: Function, delay: number) {
  if (delay) {
    return setTimeout(() => {
      Async(cb, request);
    }, delay);
  }
  Async(cb, request);
};





const validateAction = (action: any) => {
  if (!action || typeof action !== 'object' || Array.isArray(action)) {
    throw new Error('Action must be an object!');
  }
  if (typeof action.type === 'undefined') {
    throw new Error('Action must have a type!');
  }
};

const createStore = (reducer: Function, middleware: Function) => {
  let state: any;
  const subscribers: Array <Function> = [];
  const coreDispatch = (action: any) => {
    validateAction(action);
    state = reducer(state, action);
    subscribers.forEach(handler => handler());
  };
  const getState = () => state;
  const store = {
    dispatch: coreDispatch,
    getState,
    subscribe: (handler: any) => {
      subscribers.push(handler);
      return () => {
        const index = subscribers.indexOf(handler);
        if (index > 0) {
          subscribers.splice(index, 1);
        }
      };
    }
  };
  if (middleware) {
    const dispatch = (action: any) => store.dispatch(action);
    store.dispatch = middleware({
      dispatch,
      getState
    })(coreDispatch);
  }
  coreDispatch({type: '@@redux/INIT'});
  return store;
};

const delayMiddleware = () => (next: any) => (action:any) => {
  setTimeout(() => {
    next(action);
  }, 1000);
};


export { dispatch, subscribe, getState, thunk, createStore, delayMiddleware }
