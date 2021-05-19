import Didact from '../../core/didactClass';
export class BaseComponent<P> extends Didact.Component {
    public view?: (ctrl: this, props: P) => Function | any;

    constructor(props: P) {
        super(props);
        this.activate && this.activate()
    }

    activate() {

    }

    public handelerLoading(){
      return Didact.createElement('div', {className: "loader"}, [
        Didact.createElement('div', {
          className: "loader__element"
        }
        )
      ])
    }
    public handelerError(text: string, callback: Function, type: string){
      setTimeout(() => {
        callback()
      }, 3000);
      return Didact.createElement('div', {className: `mf-error-toast ${type}`}, [
        Didact.createElement('div', {
          className: "error-toast__element"
        },
        [
          Didact.createElement('p', {},
          text
          ),
          Didact.createElement('span', {
            className: 'error-toast__close',
            onclick: () => callback()
        }
          )
        ]
        )
      ])
    }
    public update() {}

    render() {
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
