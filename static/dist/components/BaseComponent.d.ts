import Didact from '../core/didactClass';
export declare class BaseComponent<P> extends Didact.Component {
    view?: (ctrl: this, props: P) => Function | any;
    constructor(props: P);
    activate(): void;
    update(): void;
    render(): any;
}
