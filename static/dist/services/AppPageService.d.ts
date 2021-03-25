import { ErrorType } from "../types/appTypes";
export declare class AppPageService {
    private globalState;
    private router;
    constructor();
    init(): void;
    handleError(stateError: ErrorType): void;
    handleAuth(stateAuth: boolean): void;
    handleState(): {
        isAuth: boolean;
        errorApp: ErrorType;
    };
}
