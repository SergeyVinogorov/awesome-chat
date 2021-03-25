import { ErrorType, ErrorTypeOfType } from "../types/appTypes";

export class AppDto {

  public errorApp: ErrorType = {
    type: ErrorTypeOfType.info,
    message: 'ok',
    isExist: false

  }
  public isAuth: boolean = false

  get stateAppp() {
    let result = {
      isAuth: this.isAuth,
      errorApp: this.errorApp
    };
  return result;
  }

  set stateError(state: ErrorType) {
    this.errorApp = state
  }
  set stateIsAuth(state: boolean) {
    this.isAuth = state
  }
}
