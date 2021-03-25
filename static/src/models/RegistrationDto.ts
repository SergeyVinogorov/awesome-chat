import { InputStateType } from "../types/loginTypes";
import { isEqual } from "../utils/isEqual";

export class RegistrationDto {

  public firstName: InputStateType = {
      value: '',
      isValid: true,
  };
  public lastName: InputStateType = {
      value: '',
      isValid: true,
  };
  public login: InputStateType = {
      value: '',
      isValid: true,
  };
  public mail: InputStateType = {
      value: '',
      isValid: true,
  };
  public phone: InputStateType = {
      value: '',
      isValid: true,
  };
  public password: InputStateType = {
      value: '',
      isValid: true,
  };
  public passwordRepeat: InputStateType = {
      value: '',
      isValid: true,
  };

  getState() {
    const result = {
        firstName: this.firstName,
        lastName: this.lastName,
        login: this.login,
        mail: this.mail,
        phone: this.phone,
        password: this.password,
    };
    return result;
  }
  handelCheckPassword(){
    return isEqual(this.password.value, this.passwordRepeat.value)
  }
}
