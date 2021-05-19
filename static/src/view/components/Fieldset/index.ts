import Didact from '../../../core/didactClass';

type FormFieldsetProps = {
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
    isRepeat?: boolean
};

type InputStateType = {
    value: string;
    isValid: boolean;
};

type ElementType = {
    type: typeof Didact.Component | string;
    props: any;
};
const REPEAT = 'passwordRepeat'
export class Fieldset extends Didact.Component {
    errorClassName: string = 'mf-form__error visually-hidden';
    isError: boolean = false;

    constructor(props: FormFieldsetProps) {
        super(props);
    }

    initChild = () => {
      if(this.props.name === REPEAT) {
        this.errorClassName = this.props.isRepeat
          ? 'mf-form__error visually-hidden'
          : 'mf-form__error';
      }else{
        this.errorClassName = this.props.state?.isValid
            ? 'mf-form__error visually-hidden'
            : 'mf-form__error';
      }
        const {
            id,
            name,
            type,
            placeholder = ' ',
            classNameLabel = 'mf-form__label',
            classNameInput = 'mf-form__input',
            nameLabel,
            isSetting,
            control,
        } = this.props;

        const result: Array<ElementType> = [];
        const input = Didact.createElement(
            'input',
            {
                type: type,
                id: id,
                name: name,
                placeholder: placeholder,
                className: classNameInput,
                oninput: (e: Event) => {
                    const target = e.target as HTMLInputElement;
                    control.handleOnInput(target, type, name);
                },
                onblur: (e: Event) => {
                    const target = e.target as HTMLInputElement;
                    control.handleOnBlur(target, type, name);
                },
            },
            ''
        );

        const label = Didact.createElement(
            'label',
            {
                className: classNameLabel,
                htmlFor: id,
            },
            nameLabel
        );

        const errorMessage = Didact.createElement(
            'div',
            { className: this.errorClassName },
            this.props.message
        );
        if (isSetting) {
            result.push(label, input, errorMessage);
        } else {
            result.push(input, label, errorMessage);
        }
        return result;
    };

    render() {
        return Didact.createElement(
            'fieldset',
            { className: this.props.className },
            this.initChild()
        );
    }
}
