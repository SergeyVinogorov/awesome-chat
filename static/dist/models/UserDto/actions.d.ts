import { InitialTypeUser } from "./type";
export declare function handleUserInfoAction(user: InitialTypeUser): {
    type: string;
    user: InitialTypeUser;
};
export declare function handleUserLogoutAction(): {
    type: string;
    user: InitialTypeUser;
};
