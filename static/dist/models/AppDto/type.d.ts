export declare type ErrorType = {
    type: ErrorTypeOfType;
    message: string;
    isError: boolean;
    show: boolean;
};
export declare enum ErrorTypeOfType {
    success = "mf-success",
    info = "mf-info",
    warning = "mf-warning",
    error = "mf-error"
}
export declare type InitialTypeApp = {
    errorApp: ErrorType;
    isAuth: boolean;
    loading: boolean;
};
export interface PassedType {
    type: string;
    auth?: boolean;
    error?: boolean;
    loading?: boolean;
}
