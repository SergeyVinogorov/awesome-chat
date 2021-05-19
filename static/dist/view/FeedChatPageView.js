import Didact from '../core/didactClass.js';
import { ListChatContainer } from './components/ListChatContainer/index.js';
import { Button } from './components/button/index.js';
export var FeedChatPageView = function (ctrl) {
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
                new Button({
                    type: 'button',
                    className: 'mf-side-bar__button',
                    onclick: function () { return ctrl.handleSearch('right'); },
                    children: [
                        Didact.createElement('img', {
                            src: './images/svg/search.svg',
                            alt: 'Иконка поиска',
                        }, ''),
                        Didact.createElement('span', { className: 'mf-side-bar__button-text' }, 'Поиск'),
                    ],
                }),
            ]),
            Didact.createElement('ul', { className: 'mf-side-bar__list' }, ListChatContainer({ arrayChats: allChats })),
        ]),
        Didact.createElement('main', { className: 'mf-chat' }, [
            Didact.createElement('div', { className: 'mf-chat__header' }, [
                Didact.createElement('div', { className: 'mf-chat__companion' }, [
                    Didact.createElement('div', { className: 'mf-chat__companion-image' }, ''),
                    Didact.createElement('div', {}, [
                        Didact.createElement('h5', { className: 'mf-chat__companion-title' }, 'Вадим'),
                        Didact.createElement('p', { className: 'mf-chat__companion-text' }, 'Был 5 минут назад'),
                    ]),
                ]),
                Didact.createElement('img', {
                    className: 'mf-chat__settings',
                    src: './images/svg/three-dots.svg',
                    alt: 'Иконка открытия меню настройки',
                }, ''),
            ]),
            Didact.createElement('div', { className: 'mf-chat__body' }, [
                Didact.createElement('p', { className: 'mf-chat__time' }, '19 июня'),
                Didact.createElement('p', { className: 'mf-chat__message' }, [
                    'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.	Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро',
                    Didact.createElement('span', { className: 'mf-chat__message-time' }, '11:56'),
                ]),
                Didact.createElement('div', { className: 'mf-chat__image-message' }, [
                    Didact.createElement('img', { src: './images/camera.jpg', alt: 'моя камера' }, ''),
                    Didact.createElement('span', { className: 'mf-chat__message-time' }, '11:58'),
                ]),
                Didact.createElement('div', { className: 'mf-chat__answer' }, [
                    Didact.createElement('p', { className: 'mf-chat__answer-text' }, 'Круто!'),
                    Didact.createElement('span', {}, [
                        Didact.createElement('img', {
                            src: './images/svg/viewed.svg',
                            alt: 'Иконка просмотренное',
                        }, ''),
                    ]),
                    Didact.createElement('p', { className: 'mf-chat__answer-time' }, '12:00'),
                ]),
            ]),
            Didact.createElement('div', { className: 'mf-chat__footer' }, [
                Didact.createElement('form', { className: 'mf-chat__form' }, [
                    Didact.createElement('img', {
                        className: 'mf-chat__form-setting',
                        src: './images/svg/clip.svg',
                        alt: 'Иконка кнопки добавить файлы для сообщения',
                    }, '12:00'),
                    Didact.createElement('input', {
                        className: 'mf-chat__form-message',
                        type: 'text',
                        placeholder: 'Сообщение',
                        name: 'message',
                        oninput: function (e) {
                            var target = e.target;
                            var validated = ctrl.handleOnInput(target, 'text');
                            console.log(validated);
                        },
                    }, '12:00'),
                    new Button({
                        type: 'submit',
                        className: 'mf-chat__answer-time',
                        children: [
                            Didact.createElement('img', {
                                src: './images/svg/arrow.svg',
                                alt: 'Иконка кнопки отправить сообщение',
                            }),
                        ],
                    }),
                ]),
            ]),
        ]),
    ]);
};
//# sourceMappingURL=FeedChatPageView.js.map