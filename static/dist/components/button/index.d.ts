import Didact from '../../core/didactClass';
declare type ItemElement = {
    type: string;
    props: any;
};
declare type ButtonProps = {
    type: string;
    className: string;
    onclick?: () => void;
    children: Array<ItemElement> | string;
};
export declare class Button extends Didact.Component {
    _props: ButtonProps;
    constructor(props: ButtonProps);
    render(): {
        type: string;
        props: any;
    };
}
export {};
