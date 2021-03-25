import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../components/BaseComponent';

import { RegistrationPageView } from '../view/RegistrationPageView';

import { RegistrationDto } from '../models/RegistrationDto';

import { InputStateType, InputValue } from "../types/formTypes";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

export class RegistrationPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {

    public readonly view = RegistrationPageView;

    public registrationState: RegistrationDto = new RegistrationDto()

    public validatorService: PageFormValidatorService = new PageFormValidatorService();

    get getState() {
        return this.registrationState.getState()
    }

    _handelValidate(event: InputValue, type: string, name: string) {
        let resultValidate: InputStateType = this.validatorService.validateValue(
            event.value,
            type
        );

        switch (name) {
          case 'firstName':
              this.registrationState.firstName = resultValidate;
              break;
          case 'lastName':
              this.registrationState.lastName = resultValidate;
              break;
          case 'login':
              this.registrationState.login = resultValidate;
              break;
          case 'mail':
              this.registrationState.mail = resultValidate;
              break;
          case 'phone':
              this.registrationState.phone = resultValidate;
              break;
          case 'password':
              this.registrationState.password = resultValidate;
              break;
          case 'passwordRepeat':
              this.registrationState.passwordRepeat = resultValidate;
              break;
          default:
              break;
        }
        return resultValidate;
    }

    handleOnInput(event: InputValue, type: string, name: string) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    }
    handleOnBlur(event: InputValue, type: string, name: string) {
        this._handelValidate(event, type, name);
        this.forceUpdate();
    }
    handleFormData(e: Event) {
        e.preventDefault();
        this._handelValidate(this.registrationState.firstName, 'text', 'firstName')
        this._handelValidate(this.registrationState.lastName, 'text', 'lastName')
        this._handelValidate(this.registrationState.login, 'email', 'login')
        this._handelValidate(this.registrationState.mail, 'email', 'mail')
        this._handelValidate(this.registrationState.phone, 'tel', 'phone')
        this._handelValidate(this.registrationState.password, 'password', 'password')

        if (
            this.registrationState.firstName.isValid &&
            this.registrationState.lastName.isValid &&
            this.registrationState.login.isValid &&
            this.registrationState.mail.isValid &&
            this.registrationState.phone.isValid &&
            this.registrationState.password.isValid
        ) {
            const formData = new FormData();
            formData.append('firstName', this.registrationState.firstName.value);
            formData.append('lastName', this.registrationState.lastName.value);
            formData.append('login', this.registrationState.login.value);
            formData.append('mail', this.registrationState.mail.value);
            formData.append('phone', this.registrationState.phone.value);
            console.log('firstName: ', formData.get('firstName'));
            console.log('lastName: ', formData.get('lastName'));
            console.log('login: ', formData.get('login'));
            console.log('phone: ', formData.get('phone'));
        }
        this.forceUpdate();
    }
}
