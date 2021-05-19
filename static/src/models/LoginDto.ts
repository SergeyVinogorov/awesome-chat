import { InputStateType } from "../types/loginTypes";


export type InitialLoginType = {
  login: InputStateType,
  password: InputStateType
}

const SIGN_IN_ITEM = 'SIGN_IN_ITEM';

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

interface PassedType {
  type: string,
  value: InitialLoginType,
}

export function handleSignInItem(value: InputStateType) {
  return {
    type: SIGN_IN_ITEM,
    value
  }
}

export default function loginReducer(state = initialState, action: PassedType) {
  switch (action.type) {
    case SIGN_IN_ITEM:
      return Object.assign({}, action.value)
    default:
      return state
  }
}
export class LoginDto {

  public login: InputStateType = {
        value: '',
        isValid: true,
    };

  public password: InputStateType = {
        value: '',
        isValid: true,
    };

  getState() {
    let result = {
      login: this.login,
      password: this.password,
    };
  return result;
  }
}
