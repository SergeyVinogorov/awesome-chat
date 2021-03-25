import Didact from '../core/didactClass.js';
export var NotFoundPageView = function () {
    return Didact.createElement('div', { className: 'mf-page mf-center-block' }, [
        Didact.createElement('main', {}, [
            Didact.createElement('h1', { className: 'mf-page-h1' }, '404'),
            Didact.createElement('h2', { className: 'mf-page-h2 mf-page-h2--indent' }, 'Не туда попали'),
            Didact.createElement('a', { href: './', className: 'mf-page-link' }, 'Назад к чатам'),
        ])
    ]);
};
//# sourceMappingURL=NotFoundRageView.js.map