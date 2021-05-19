import { InitialLoginType, PassedType } from "./type";
import { actionTypes } from "../actionTypes";



const initialState: InitialLoginType = {
  login: {
    value: '',
    isValid: true,
  },
  password: {
    value: '',
    isValid: true,
  }
}

export default function loginReducer(state = initialState, action: PassedType) {
  switch (action.type) {
    case actionTypes.SIGN_IN_ITEM:
      return Object.assign({}, action.value)
    default:
      return state
  }
}
