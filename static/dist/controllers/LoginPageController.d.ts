import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { AuthServise } from '../services/AuthServise';
import { BaseComponent } from '../view/components/BaseComponent';
import { stateType } from "../models/models";
import { InputValue } from "../types/formTypes";
import { InitialLoginType } from "../models/LoginDto/type";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class LoginPageController<P extends UserPageOptions> extends BaseComponent<P> {
    view: <P_1 extends UserPageOptions>(ctrl: LoginPageController<P_1>) => {
        type: string;
        props: any;
    };
    auth: AuthServise;
    store: stateType;
    validatorService: PageFormValidatorService;
    constructor(props: any);
    init(): void;
    activate(): void;
    handlerCloseToast: () => void;
    private handleValidate;
    handleOnInput(event: InputValue, type: string, name: keyof InitialLoginType): void;
    handleOnBlur(event: InputValue, type: string, name: keyof InitialLoginType): void;
    handleFormData(e: Event): Promise<void>;
}
