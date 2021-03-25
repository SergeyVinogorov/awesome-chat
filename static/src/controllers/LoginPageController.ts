import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../components/BaseComponent';
import { LoginPageView } from '../view/LoginPageView';
import { LoginDto } from '../models/LoginDto';

import { InputStateType, InputValue } from "../types/formTypes";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export class LoginPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {

    public readonly view = LoginPageView;

    public loginState = new LoginDto()

    public validatorService: PageFormValidatorService = new PageFormValidatorService();

    get getState() {
        return this.loginState.getState()
    }

    _handelValidate(event: InputValue, type: string, name: string) {
        let resultValidate: InputStateType = this.validatorService.validateValue(
            event.value,
            type
        );
        switch (name) {
            case 'login':
              this.loginState.login = resultValidate;
                break;
            case 'pass':
                this.loginState.password = resultValidate;
                break;
            default:
                break;
        }
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
        this.loginState.login = this.validatorService.validateValue(
            this.loginState.login.value,
            'email'
        );
        this.loginState.password = this.validatorService.validateValue(
            this.loginState.password.value,
            'password'
        );

        if (this.loginState.login.isValid && this.loginState.password.isValid) {
            const formData: any = new FormData();
            formData.append('login', this.loginState.login.value);
            formData.append('password', this.loginState.password.value);
            console.log('login: ', formData.get('login'));
            console.log('password: ', formData.get('password'));
        }
        this.forceUpdate();
    }
}
