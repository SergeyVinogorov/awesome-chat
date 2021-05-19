import { ErrorType } from "./type";
import { actionTypes } from "../actionTypes";

export function handleErrorAction(error: ErrorType) {
  return {
    type: actionTypes.ERROR_TRIGGER,
    error
  }
}

export function handleAuthAction(auth: boolean) {
  return {
    type: actionTypes.AUTH_TRIGGER,
    auth: {
      isAuth: auth
    }
  }
}
export function handleLoadingAction(load: boolean) {
  return {
    type: actionTypes.AUTH_TRIGGER,
    loading: {
      loading: load
    }
  }
}
