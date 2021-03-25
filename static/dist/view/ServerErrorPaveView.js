import Didact from '../core/didactClass.js';
export var ServerErrorPageView = function () {
    return Didact.createElement('div', { className: 'mf-page mf-center-block' }, [
        Didact.createElement('main', {}, [
            Didact.createElement('h1', { className: 'mf-page-h1' }, '500'),
            Didact.createElement('h2', { className: 'mf-page-h2 mf-page-h2--indent' }, 'Мы уже фиксим'),
            Didact.createElement('a', { href: './', className: 'mf-page-link' }, 'Назад к чатам'),
        ])
    ]);
};
//# sourceMappingURL=ServerErrorPaveView.js.map