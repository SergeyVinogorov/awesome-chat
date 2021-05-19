import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../view/components/BaseComponent';
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class ListChatPageController<P extends UserPageOptions> extends BaseComponent<P> {
    view: <P_1 extends UserPageOptions>(ctrl: ListChatPageController<P_1>) => {
        type: string;
        props: any;
    };
    validatorService: PageFormValidatorService;
    constructor(props: any);
    handleSearch(value: string): void;
}
