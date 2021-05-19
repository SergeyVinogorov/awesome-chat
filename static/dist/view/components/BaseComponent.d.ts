import Didact from '../../core/didactClass';
export declare class BaseComponent<P> extends Didact.Component {
    view?: (ctrl: this, props: P) => Function | any;
    constructor(props: P);
    activate(): void;
    handelerLoading(): {
        type: string;
        props: any;
    };
    handelerError(text: string, callback: Function, type: string): {
        type: string;
        props: any;
    };
    update(): void;
    render(): any;
}
