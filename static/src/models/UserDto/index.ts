import { InitialTypeUser, PassedType } from "./type";
import { actionTypes } from "../actionTypes";


export const initialState: InitialTypeUser = {
  userInfo: {
    id: null,
    first_name: null,
    second_name: null,
    display_name: null,
    login: null,
    email: null,
    phone: null,
    avatar: null
  }
}

export default function userReducer(state = initialState, action: PassedType) {
  switch (action.type) {
    case actionTypes.USER_INFO:
      return Object.assign({}, action.user)
    case actionTypes.USER_OUT:
      return Object.assign({}, action.user)
    default:
      return state
  }
}
