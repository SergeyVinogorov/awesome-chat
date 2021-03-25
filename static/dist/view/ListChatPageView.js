import Didact from '../core/didactClass.js';
import { ListChatContainer } from '../components/ListChatContainer/index.js';
export var ListChatPageView = function (ctrl) {
    var allChats = [
        {
            link: './',
            name: 'Поиск',
            text: 'Изображение',
            time: '10:49',
            count: '2',
        },
        {
            link: './',
            name: 'тет-а-теты',
            text: 'И Human Interface Guidelines и Material Design рекомендуют...',
            time: '10:49',
            count: '1',
        },
        {
            link: './',
            name: 'Киноклуб',
            text: 'Изображение',
            time: '10:49',
            count: '5',
        },
    ];
    return Didact.createElement('div', { className: 'mf-page' }, [
        Didact.createElement('div', { className: 'mf-side-bar' }, [
            Didact.createElement('div', { className: 'mf-side-bar__header' }, [
                Didact.createElement('a', {
                    href: '../../settings-profile.html',
                    className: 'mf-side-bar__link',
                }, [
                    'Профиль',
                    Didact.createElement('img', {
                        src: './images/svg/shevron.svg',
                        alt: 'Иконка для ссылки на страницу профиль',
                    }, ''),
                ]),
                Didact.createElement('button', {
                    type: 'button',
                    className: 'mf-side-bar__button',
                    onclick: function () { return ctrl.handleSearch('all'); },
                }, [
                    Didact.createElement('img', {
                        src: './images/svg/search.svg',
                        alt: 'Иконка поиска',
                    }, ''),
                    Didact.createElement('span', { className: 'mf-side-bar__button-text' }, 'Поиск'),
                ]),
            ]),
            Didact.createElement('ul', { className: 'mf-side-bar__list' }, ListChatContainer({ arrayChats: allChats })),
        ]),
        Didact.createElement('main', { className: 'mf-chat mf-center-block' }, [
            Didact.createElement('p', { className: 'mf-chat-message' }, 'Выберите чат чтобы отправить сообщение'),
        ]),
    ]);
};
//# sourceMappingURL=ListChatPageView.js.map