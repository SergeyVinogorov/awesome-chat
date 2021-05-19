import { BaseComponent } from '../view/components/BaseComponent';
import { NotFoundPageView } from '../view/NotFoundRageView';
import { ServerErrorPageView } from '../view/ServerErrorPaveView';

export interface UserPageOptions {
    notFound?: boolean;
}
export class ErrorPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {
    constructor(props: P) {
        super(props);
        if (props.notFound) {
            this.view = NotFoundPageView;
        } else {
            this.view = ServerErrorPageView;
        }
    }

    public readonly view: Function | any = '';
}
