import { InitialLoginType } from "./type";
import { actionTypes } from "../actionTypes";

export function handleSignInAction(value: InitialLoginType) {
  return {
    type: actionTypes.SIGN_IN_ITEM,
    value
  }
}
