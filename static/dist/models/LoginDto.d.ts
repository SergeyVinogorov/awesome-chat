import { InputStateType } from "../types/loginTypes";
export declare class LoginDto {
    login: InputStateType;
    password: InputStateType;
    getState(): {
        login: InputStateType;
        password: InputStateType;
    };
}
