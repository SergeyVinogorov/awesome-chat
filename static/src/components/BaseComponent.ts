import Didact from '../core/didactClass';

export class BaseComponent<P> extends Didact.Component {
    public view?: (ctrl: this, props: P) => Function | any;

    constructor(props: P) {
        super(props);
        this.activate && this.activate();
    }

    public activate(): void {
        // метод для переопределения
    }
    public update() {}

    render() {
      console.log(this.view);

        if (this.view) {
            return this.view(this, this.props);
        } else {
            return Didact.createElement(
                'div',
                {},
                'Представление не определено'
            );
        }
    }
}
