import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../components/BaseComponent';
import { RegistrationDto } from '../models/RegistrationDto';
import { InputStateType, InputValue } from "../types/formTypes";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class RegistrationPageController<P extends UserPageOptions> extends BaseComponent<P> {
    readonly view: <P_1 extends UserPageOptions>(ctrl: RegistrationPageController<P_1>) => {
        type: string;
        props: any;
    };
    registrationState: RegistrationDto;
    validatorService: PageFormValidatorService;
    get getState(): {
        firstName: import("../types/loginTypes").InputStateType;
        lastName: import("../types/loginTypes").InputStateType;
        login: import("../types/loginTypes").InputStateType;
        mail: import("../types/loginTypes").InputStateType;
        phone: import("../types/loginTypes").InputStateType;
        password: import("../types/loginTypes").InputStateType;
    };
    _handelValidate(event: InputValue, type: string, name: string): InputStateType;
    handleOnInput(event: InputValue, type: string, name: string): void;
    handleOnBlur(event: InputValue, type: string, name: string): void;
    handleFormData(e: Event): void;
}
