import { BaseComponent } from '../components/BaseComponent';
export interface UserPageOptions {
    notFound?: boolean;
}
export declare class ErrorPageController<P extends UserPageOptions> extends BaseComponent<P> {
    constructor(props: P);
    readonly view: Function | any;
}
