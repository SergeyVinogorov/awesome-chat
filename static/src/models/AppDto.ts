import { ErrorType, ErrorTypeOfType } from "../types/appTypes";

export type InitialTypeApp = {
  errorApp: ErrorType,
  isAuth: boolean,
  loading: boolean
}
interface PassedType {
  type: string,
  auth?: boolean,
  error?: boolean,
  loading?: boolean
}

const ERROR_TRIGGER = 'ERROR_TRIGGER';
const AUTH_TRIGGER = 'AUTH_TRIGGER';
const LOAD_TRIGGER = 'LOAD_TRIGGER';

const initialState: InitialTypeApp = {
  errorApp: {
    type: ErrorTypeOfType.info,
    message: 'ok',
    isError: false,
    show: false
  },
  isAuth: false,
  loading: false
}

//TODO error param should be object ErrorType
export function handleError(error: ErrorType) {
  return {
    type: ERROR_TRIGGER,
    error
  }
}

export function handleAuth(auth: boolean) {
  return {
    type: AUTH_TRIGGER,
    auth: {
      isAuth: auth
    }
  }
}
export function handleLoading(load: boolean) {
  return {
    type: AUTH_TRIGGER,
    loading: {
      loading: load
    }
  }
}

export default function appReducer(state = initialState, action: PassedType) {
  switch (action.type) {
    case ERROR_TRIGGER:
      return Object.assign({}, state, action.error)
    case AUTH_TRIGGER:
      return Object.assign({}, state, action.auth)
    case LOAD_TRIGGER:
      return Object.assign({}, state, action.loading)
    default:
      return state
  }
}
export class AppDto {

  public errorApp: ErrorType = {
    type: ErrorTypeOfType.info,
    message: 'ok',
    isError: false,
    show: false
  }

  public isAuth: boolean = false

  get stateAppp() {
    let result = {
      isAuth: this.isAuth,
      errorApp: this.errorApp,
    };
    return result;
  }

  set stateError(state: ErrorType) {
    this.errorApp = state
  }

  set stateIsAuth(state: boolean) {
    this.isAuth = state
  }

}
