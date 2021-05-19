import { InputStateType } from "../types/loginTypes";
export declare type InitialTypeUser = {
    userInfo: {
        id: number | null;
        first_name: string | null;
        second_name: string | null;
        display_name: string | null;
        login: string | null;
        email: string | null;
        phone: string | null;
        avatar: string | null;
    };
};
interface PassedType {
    type: string;
    user?: InitialTypeUser;
}
export declare function handleUserInfo(user: InitialTypeUser): {
    type: string;
    user: InitialTypeUser;
};
export declare function handleUserLogout(): {
    type: string;
    user: InitialTypeUser;
};
export default function userReducer(state: InitialTypeUser | undefined, action: PassedType): InitialTypeUser;
export declare class UserDto {
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
export {};
