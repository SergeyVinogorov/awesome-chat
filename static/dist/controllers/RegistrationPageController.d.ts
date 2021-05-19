import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { AuthServise } from '../services/AuthServise';
import { BaseComponent } from '../view/components/BaseComponent';
import { InputValue } from "../types/formTypes";
import { InitialRegistrationType } from "../models/RegistrationDto/type";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class RegistrationPageController<P extends UserPageOptions> extends BaseComponent<P> {
    readonly view: <P_1 extends UserPageOptions>(ctrl: RegistrationPageController<P_1>) => {
        type: string;
        props: any;
    };
    auth: AuthServise;
    store: import("../models/models").stateType;
    validatorService: PageFormValidatorService;
    activate(): void;
    handlerCloseToast: () => void;
    _handelValidate(event: InputValue, type: string, name: keyof InitialRegistrationType): void;
    handleOnInput(event: InputValue, type: string, name: keyof InitialRegistrationType): void;
    handleOnBlur(event: InputValue, type: string, name: keyof InitialRegistrationType): void;
    handelCheckPassword(password: string, passwordRepeat: string): boolean;
    handleFormData(e: Event): void;
}
