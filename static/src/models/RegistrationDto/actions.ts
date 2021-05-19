import { InitialRegistrationType } from "./type";
import { actionTypes } from "../actionTypes";

export function handleSignUpAction(value: InitialRegistrationType) {
  return {
    type: actionTypes.SIGN_UP_ITEM,
    value
  }
}
