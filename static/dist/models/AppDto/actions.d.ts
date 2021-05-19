import { ErrorType } from "./type";
export declare function handleErrorAction(error: ErrorType): {
    type: string;
    error: ErrorType;
};
export declare function handleAuthAction(auth: boolean): {
    type: string;
    auth: {
        isAuth: boolean;
    };
};
export declare function handleLoadingAction(load: boolean): {
    type: string;
    loading: {
        loading: boolean;
    };
};
