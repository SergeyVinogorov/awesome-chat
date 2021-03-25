import Didact from '../../core/didactClass';
declare type FormFieldsetProps = {
    id: string;
    name: string;
    message?: string;
    type: string;
    placeholder?: string;
    className: string;
    classNameLabel?: string;
    classNameInput?: string;
    nameLabel: string;
    setParentStore?: (store: object, type: string) => any;
    typeStore: string;
    isSetting?: boolean;
    control?: any;
    state?: InputStateType;
};
declare type InputStateType = {
    value: string;
    isValid: boolean;
};
declare type ElementType = {
    type: typeof Didact.Component | string;
    props: any;
};
export declare class Fieldset extends Didact.Component {
    errorClassName: string;
    isError: boolean;
    constructor(props: FormFieldsetProps);
    initChild: () => ElementType[];
    render(): {
        type: string;
        props: any;
    };
}
export {};
