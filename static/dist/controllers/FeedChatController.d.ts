import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../components/BaseComponent';
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
declare type InputStateType = {
    value: string;
    isValid: boolean;
};
declare type InputValue = {
    value: string;
};
export declare class FeedChatPageController<P extends UserPageOptions> extends BaseComponent<P> {
    readonly view: <P_1 extends UserPageOptions>(ctrl: FeedChatPageController<P_1>) => {
        type: string;
        props: any;
    };
    validatorService: PageFormValidatorService;
    handleSearch(value: string): void;
    handleOnInput(event: InputValue, type: string): InputStateType;
}
export {};
