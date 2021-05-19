import { ErrorType } from "../types/appTypes";
export declare type InitialTypeApp = {
    errorApp: ErrorType;
    isAuth: boolean;
    loading: boolean;
};
interface PassedType {
    type: string;
    auth?: boolean;
    error?: boolean;
    loading?: boolean;
}
export declare function handleError(error: ErrorType): {
    type: string;
    error: ErrorType;
};
export declare function handleAuth(auth: boolean): {
    type: string;
    auth: {
        isAuth: boolean;
    };
};
export declare function handleLoading(load: boolean): {
    type: string;
    loading: {
        loading: boolean;
    };
};
export default function appReducer(state: InitialTypeApp | undefined, action: PassedType): InitialTypeApp;
export declare class AppDto {
    errorApp: ErrorType;
    isAuth: boolean;
    get stateAppp(): {
        isAuth: boolean;
        errorApp: ErrorType;
    };
    set stateError(state: ErrorType);
    set stateIsAuth(state: boolean);
}
export {};
