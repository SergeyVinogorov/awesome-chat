import { InputStateType } from "../types/loginTypes";

export type InitialTypeUser = {
  userInfo: {
    id: number | null,
    first_name: string | null,
    second_name: string | null,
    display_name: string | null,
    login: string | null,
    email: string | null,
    phone: string | null,
    avatar: string | null,
  }
}
interface PassedType {
  type: string,
  user?: InitialTypeUser,
}

const USER_INFO = 'USER_INFO';
const USER_OUT = 'USER_OUT';

const initialState: InitialTypeUser = {
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

export function handleUserInfo(user: InitialTypeUser) {
  return {
    type: USER_INFO,
    user
  }
}
export function handleUserLogout() {
  return {
    type: USER_OUT,
    user: initialState
  }
}

export default function userReducer(state = initialState, action: PassedType) {
  switch (action.type) {
    case USER_INFO:
      return Object.assign({}, action.user)
    case USER_OUT:
      return Object.assign({}, action.user)
    default:
      return state
  }
}

export class UserDto {

  public userState: InputStateType = {
        value: '',
        isValid: true,
    };

  public id: number = 0
  public first_name: string | null = null
  public second_name: string | null = null
  public display_name: string | null = null
  public login: string | null = null
  public email: string | null = null
  public phone: string | null = null
  public avatar: string | null = null

  getState() {
    let result = {
      id: this.id,
      first_name: this.first_name,
      second_name: this.second_name,
      display_name: this.display_name,
      login: this.login,
      email: this.email,
      phone: this.phone,
      avatar: this.avatar
    };
  return result;
  }
}
