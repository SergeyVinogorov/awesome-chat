import { InputStateType } from "../types/loginTypes";
export declare class LoginDto {
    userState: InputStateType;
    id: number;
    first_name: string | null;
    second_name: string | null;
    display_name: string | null;
    login: string | null;
    email: string | null;
    phone: string | null;
    avatar: string | null;
    getState(): {
        id: number;
        first_name: string | null;
        second_name: string | null;
        display_name: string | null;
        login: string | null;
        email: string | null;
        phone: string | null;
        avatar: string | null;
    };
}
