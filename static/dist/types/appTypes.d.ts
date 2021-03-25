export declare type ErrorType = {
    type: ErrorTypeOfType;
    message: string;
    isExist: boolean;
};
export declare enum ErrorTypeOfType {
    warning = "warning",
    info = "info",
    error = "error"
}
