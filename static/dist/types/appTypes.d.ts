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
