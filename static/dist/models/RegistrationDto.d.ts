import { InputStateType } from "../types/loginTypes";
export declare class RegistrationDto {
    firstName: InputStateType;
    lastName: InputStateType;
    login: InputStateType;
    mail: InputStateType;
    phone: InputStateType;
    password: InputStateType;
    passwordRepeat: InputStateType;
    getState(): {
        firstName: InputStateType;
        lastName: InputStateType;
        login: InputStateType;
        mail: InputStateType;
        phone: InputStateType;
        password: InputStateType;
    };
    handelCheckPassword(): boolean;
}
