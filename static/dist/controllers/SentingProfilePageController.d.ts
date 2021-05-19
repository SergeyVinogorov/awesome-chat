import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../view/components/BaseComponent';
declare type InputStateType = {
    value: string;
    isValid: boolean;
};
declare type InputValue = {
    value: string;
};
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class SettingProfilePageController<P extends UserPageOptions> extends BaseComponent<P> {
    readonly view: <P_1 extends UserPageOptions>(ctrl: SettingProfilePageController<P_1>) => {
        type: string;
        props: any;
    };
    _firstName: InputStateType;
    _lastName: InputStateType;
    _displayName: InputStateType;
    _login: InputStateType;
    _mail: InputStateType;
    _phone: InputStateType;
    _avatar: InputStateType;
    _password: InputStateType;
    _newPassword: InputStateType;
    validatorService: PageFormValidatorService;
    get getState(): {
        firstName: InputStateType;
        lastName: InputStateType;
        displayName: InputStateType;
        login: InputStateType;
        mail: InputStateType;
        phone: InputStateType;
        avatar: InputStateType;
        password: InputStateType;
        newPassword: InputStateType;
    };
    _handelValidate(event: InputValue, type: string, name: string): InputStateType;
    handleOnInput(event: InputValue, type: string, name: string): void;
    handleOnBlur(event: InputValue, type: string, name: string): void;
    handleFormData(e: Event): void;
}
export {};
