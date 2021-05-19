import { InputStateType } from "../types/loginTypes";
export declare type InitialLoginType = {
    login: InputStateType;
    password: InputStateType;
};
interface PassedType {
    type: string;
    value: InitialLoginType;
}
export declare function handleSignInItem(value: InputStateType): {
    type: string;
    value: InputStateType;
};
export default function loginReducer(state: InitialLoginType | undefined, action: PassedType): InitialLoginType;
export declare class LoginDto {
    login: InputStateType;
    password: InputStateType;
    getState(): {
        login: InputStateType;
        password: InputStateType;
    };
}
export {};
