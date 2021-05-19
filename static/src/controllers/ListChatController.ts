import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../view/components/BaseComponent';
import { ListChatPageView } from '../view/ListChatPageView';

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

export class ListChatPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {
    public view = ListChatPageView
    public validatorService = new PageFormValidatorService();

    constructor(props: any) {
      super(props)
    }

    handleSearch(value: string) {
        console.log(value);
    }
}
