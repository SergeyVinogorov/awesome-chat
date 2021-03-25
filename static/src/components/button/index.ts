import Didact from '../../core/didactClass';

type ItemElement = {
    type: string;
    props: any;
};

type ButtonProps = {
    type: string;
    className: string;
    onclick?: () => void;
    children: Array<ItemElement> | string;
};
export class Button extends Didact.Component {
    _props: ButtonProps;
    constructor(props: ButtonProps) {
        super(props);
        this._props = props;
    }
    render() {
        const { type, className, onclick, children } = this._props;
        return Didact.createElement(
            'button',
            {
                type,
                className,
                onclick,
            },
            children
        );
    }
}
