import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../components/BaseComponent';
import { LoginDto } from '../models/LoginDto';
import { InputValue } from "../types/formTypes";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class LoginPageController<P extends UserPageOptions> extends BaseComponent<P> {
    readonly view: <P_1 extends UserPageOptions>(ctrl: LoginPageController<P_1>) => {
        type: string;
        props: any;
    };
    loginState: LoginDto;
    validatorService: PageFormValidatorService;
    get getState(): {
        login: import("../types/loginTypes").InputStateType;
        password: import("../types/loginTypes").InputStateType;
    };
    _handelValidate(event: InputValue, type: string, name: string): void;
    handleOnInput(event: InputValue, type: string, name: string): void;
    handleOnBlur(event: InputValue, type: string, name: string): void;
    handleFormData(e: Event): void;
}
