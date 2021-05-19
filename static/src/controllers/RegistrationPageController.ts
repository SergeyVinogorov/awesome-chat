import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { AuthServise } from '../services/AuthServise';

import { BaseComponent } from '../view/components/BaseComponent';
import { RegistrationPageView } from '../view/RegistrationPageView';

import { getState, dispatch } from "../models/models";
// import { handleSignUpAction } from '../models/RegistrationDto/actions';
import { handleErrorAction} from "../models/AppDto/actions";

import { InputStateType, InputValue } from "../types/formTypes";
import { InitialRegistrationType } from "../models/RegistrationDto/type";

import { isEqual } from "../utils/isEqual";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

type validateStore = {
  firstName?: InputStateType,
  lastName?: InputStateType,
  login?: InputStateType,
  mail?: InputStateType,
  phone?: InputStateType
  password?: InputStateType,
  passwordRepeat?: InputStateType
}
export class RegistrationPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {
    public readonly view = RegistrationPageView;
    public auth = new AuthServise()
    public store = getState()

    public validatorService: PageFormValidatorService = new PageFormValidatorService();

    activate(){
      this.setState({
        firstName: {
          value: '',
          isValid: true,
        },
        lastName: {
          value: '',
          isValid: true,
        },
        login: {
          value: '',
          isValid: true,
        },
        mail: {
          value: '',
          isValid: true,
        },
        phone: {
          value: '',
          isValid: true,
        },
        password: {
          value: '',
          isValid: true,
        },
        passwordRepeat: {
          value: '',
          isValid: true,
        },
      })
    }

    handlerCloseToast = () => {
     let currTest = Object.assign({},this.store)
     currTest.appReducer.errorApp.show = false
     dispatch(handleErrorAction(currTest.appReducer.errorApp))
     this.store = getState()
    }

    _handelValidate(event: InputValue, type: string, name: keyof InitialRegistrationType) {
        let resultValidate: InputStateType = this.validatorService.validateValue(
            event.value,
            type
        );
        const result: validateStore = {}
        result[name] = resultValidate
        const newState = Object.assign({}, this.state, result)
        this.setState(newState)
        this.forceUpdate()
        // const localState: InitialRegistrationType = Object.assign({}, this.store.signUpReducer, result)
        // dispatch(handleSignUpAction(localState))
        // this.store = getState()
    }

    handleOnInput(event: InputValue, type: string, name: keyof InitialRegistrationType) {
        this._handelValidate(event, type, name);
    }
    handleOnBlur(event: InputValue, type: string, name: keyof InitialRegistrationType) {
        this._handelValidate(event, type, name);
    }

    handelCheckPassword(password: string, passwordRepeat: string){
      return isEqual(password, passwordRepeat)
    }

    handleFormData(e: Event) {
      e.preventDefault();
      // const methodStore = this.store.signUpReducer
      const methodStore = this.state;
      const firstName = this.validatorService.validateValue(
          methodStore.firstName.value,
          'text'
      );
      const lastName = this.validatorService.validateValue(
          methodStore.lastName.value,
          'text'
      );
      const login = this.validatorService.validateValue(
          methodStore.login.value,
          'email'
      );
      const mail = this.validatorService.validateValue(
          methodStore.mail.value,
          'email'
      );
      const phone = this.validatorService.validateValue(
          methodStore.phone.value,
          'tel'
      );
      const password = this.validatorService.validateValue(
          methodStore.password.value,
          'password'
      );
      const passwordRepeat = this.validatorService.validateValue(
          methodStore.passwordRepeat.value,
          'password'
      );
      if (
          firstName.isValid &&
          lastName.isValid &&
          login.isValid &&
          mail.isValid &&
          phone.isValid &&
          password.isValid &&
          passwordRepeat.isValid &&
          this.handelCheckPassword(password.value, passwordRepeat.value)
      ) {
          let params = {
            first_name: firstName.value,
            second_name: lastName.value,
            login: login.value,
            email: mail.value,
            password: password.value,
            phone: phone.value,
          }
          this.auth.signUp(params)
      }
    }
}
//{"id":13540}
// email: "VinogorichS@yandex.ru"
// first_name: "Сергей"
// login: "VinogorichS@yandex.ru"
// password: "testuser"
// phone: "89676430819"
// second_name: "VINOGOROV"
