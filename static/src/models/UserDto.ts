import { InputStateType } from "../types/loginTypes";

export class LoginDto {

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
