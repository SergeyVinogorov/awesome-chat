import Didact from '../../../core/didactClass.js';
export var ListItem = function (props) {
    var name = props.name, text = props.text, time = props.time, count = props.count, link = props.link;
    return Didact.createElement('li', { className: 'mf-side-bar__list-item' }, [
        Didact.createElement('a', { className: 'mf-item', href: link }, [
            Didact.createElement('div', { className: 'mf-item__image' }, ''),
            Didact.createElement('div', { className: 'mf-item__short-text' }, [
                Didact.createElement('p', { className: 'mf-item__name' }, name),
                Didact.createElement('p', { className: 'mf-item__text' }, text),
            ]),
            Didact.createElement('div', { className: 'mf-item__detail' }, [
                Didact.createElement('div', { className: 'mf-item__time' }, time),
                Didact.createElement('div', { className: 'mf-item__actual-message' }, [Didact.createElement('span', {}, count)]),
            ]),
        ]),
    ]);
};
//# sourceMappingURL=index.js.map