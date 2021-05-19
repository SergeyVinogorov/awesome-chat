import { InitialRegistrationType, PassedType } from "./type";
import { actionTypes } from "../actionTypes";

const initialState: InitialRegistrationType = {
  firstName: {
    value: '',
    isValid: true,
  },
  lastName: {
    value: '',
    isValid: true,
  },
  login: {
    value: '',
    isValid: true,
  },
  mail: {
    value: '',
    isValid: true,
  },
  phone: {
    value: '',
    isValid: true,
  },
  password: {
    value: '',
    isValid: true,
  },
  passwordRepeat: {
    value: '',
    isValid: true,
  },
}

export default function signUpReducer(state = initialState, action: PassedType) {
  switch (action.type) {
    case actionTypes.SIGN_UP_ITEM:
      return Object.assign({}, action.value)
    default:
      return state
  }
}
