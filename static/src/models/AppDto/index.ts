import { ErrorTypeOfType, InitialTypeApp, PassedType } from "./type";
import { actionTypes } from "../actionTypes";

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

export default function appReducer(state = initialState, action: PassedType) {
  switch (action.type) {
    case actionTypes.ERROR_TRIGGER:
      return Object.assign({}, state, action.error)
    case actionTypes.AUTH_TRIGGER:
      return Object.assign({}, state, action.auth)
    case actionTypes.LOAD_TRIGGER:
      return Object.assign({}, state, action.loading)
    default:
      return state
  }
}
