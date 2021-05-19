import { InitialTypeUser, } from "./type";
import { initialState } from "./index";
import { actionTypes } from "../actionTypes";

export function handleUserInfoAction(user: InitialTypeUser) {
  return {
    type: actionTypes.USER_INFO,
    user
  }
}
export function handleUserLogoutAction() {
  return {
    type: actionTypes.USER_OUT,
    user: initialState
  }
}
