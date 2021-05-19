import Didact from '../../../core/didactClass';

type ListItemProps = {
    name: string;
    text: string;
    time: string;
    count: string;
    link: string;
};

export const ListItem = (props: ListItemProps) => {
    const { name, text, time, count, link } = props;
    return Didact.createElement('li', { className: 'mf-side-bar__list-item' }, [
        Didact.createElement('a', { className: 'mf-item', href: link }, [
            Didact.createElement('div', { className: 'mf-item__image' }, ''),
            Didact.createElement('div', { className: 'mf-item__short-text' }, [
                Didact.createElement('p', { className: 'mf-item__name' }, name),
                Didact.createElement('p', { className: 'mf-item__text' }, text),
            ]),
            Didact.createElement('div', { className: 'mf-item__detail' }, [
                Didact.createElement(
                    'div',
                    { className: 'mf-item__time' },
                    time
                ),
                Didact.createElement(
                    'div',
                    { className: 'mf-item__actual-message' },
                    [Didact.createElement('span', {}, count)]
                ),
            ]),
        ]),
    ]);
};
