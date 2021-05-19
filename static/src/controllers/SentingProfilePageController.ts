import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../view/components/BaseComponent';
import { SettingProfilePageView } from '../view/SettingProfilePageView';

type InputStateType = {
    value: string;
    isValid: boolean;
};

type InputValue = {
    value: string;
};

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

export class SettingProfilePageController<
    P extends UserPageOptions
> extends BaseComponent<P> {
    public readonly view = SettingProfilePageView;

    _firstName: InputStateType = {
        value: '',
        isValid: true,
    };
    _lastName: InputStateType = {
        value: '',
        isValid: true,
    };
    _displayName: InputStateType = {
        value: '',
        isValid: true,
    };
    _login: InputStateType = {
        value: '',
        isValid: true,
    };
    _mail: InputStateType = {
        value: '',
        isValid: true,
    };
    _phone: InputStateType = {
        value: '',
        isValid: true,
    };
    _avatar: InputStateType = {
        value: '',
        isValid: true,
    };
    _password: InputStateType = {
        value: '',
        isValid: true,
    };
    _newPassword: InputStateType = {
        value: '',
        isValid: true,
    };
    public validatorService: PageFormValidatorService = new PageFormValidatorService();

    get getState() {
        let result = {
            firstName: this._firstName,
            lastName: this._lastName,
            displayName: this._displayName,
            login: this._login,
            mail: this._mail,
            phone: this._phone,
            avatar: this._avatar,
            password: this._password,
            newPassword: this._newPassword,
        };
        return result;
    }

    _handelValidate(event: InputValue, type: string, name: string) {
        let resultValidate: InputStateType = this.validatorService.validateValue(
            event.value,
            type
        );

        switch (name) {
            case 'firstName':
                this._firstName = resultValidate;
                break;
            case 'lastName':
                this._lastName = resultValidate;
                break;
            case 'displayName':
                this._displayName = resultValidate;
                break;
            case 'login':
                this._login = resultValidate;
                break;
            case 'mail':
                this._mail = resultValidate;
                break;
            case 'phone':
                this._phone = resultValidate;
                break;
            case 'avatar':
                this._avatar = resultValidate;
                break;
            case 'pass':
                this._password = resultValidate;
                break;
            case 'newpass':
                this._newPassword = resultValidate;
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
        this._firstName = this.validatorService.validateValue(
            this._firstName.value,
            'text'
        );
        this._lastName = this.validatorService.validateValue(
            this._lastName.value,
            'text'
        );
        this._displayName = this.validatorService.validateValue(
            this._displayName.value,
            'text'
        );
        this._login = this.validatorService.validateValue(
            this._login.value,
            'email'
        );
        this._mail = this.validatorService.validateValue(
            this._mail.value,
            'email'
        );
        this._phone = this.validatorService.validateValue(
            this._phone.value,
            'tel'
        );
        this._avatar = this.validatorService.validateValue(
            this._avatar.value,
            'text'
        );
        this._password = this.validatorService.validateValue(
            this._password.value,
            'password'
        );
        this._newPassword = this.validatorService.validateValue(
            this._newPassword.value,
            'password'
        );
        if (
            this._firstName.isValid &&
            this._lastName.isValid &&
            this._displayName.isValid &&
            this._login.isValid &&
            this._mail.isValid &&
            this._phone.isValid &&
            this._avatar.isValid &&
            this._password.isValid &&
            this._newPassword.isValid
        ) {
            const formData = new FormData();
            formData.append('firstName', this._firstName.value);
            formData.append('lastName', this._lastName.value);
            formData.append('login', this._login.value);
            formData.append('mail', this._mail.value);
            formData.append('phone', this._phone.value);
            console.log('firstName: ', formData.get('firstName'));
            console.log('lastName: ', formData.get('lastName'));
            console.log('login: ', formData.get('login'));
            console.log('phone: ', formData.get('phone'));
        }
        this.forceUpdate();
    }
}
