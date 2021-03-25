import { ErrorType } from "../types/appTypes";
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
