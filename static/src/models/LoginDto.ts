import { InputStateType } from "../types/loginTypes";

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
