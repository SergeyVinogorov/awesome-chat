import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../components/BaseComponent';
import { ListChatPageView } from '../view/ListChatPageView';

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

export class ListChatPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {
    public readonly view = ListChatPageView;

    public validatorService: PageFormValidatorService = new PageFormValidatorService();

    handleSearch(value: string) {
        console.log(value);
    }
}
