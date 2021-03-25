import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../components/BaseComponent';
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class ListChatPageController<P extends UserPageOptions> extends BaseComponent<P> {
    readonly view: <P_1 extends UserPageOptions>(ctrl: ListChatPageController<P_1>) => {
        type: string;
        props: any;
    };
    validatorService: PageFormValidatorService;
    handleSearch(value: string): void;
}
