import Didact from '../core/didactClass.js';
import { Fieldset } from './components/Fieldset/index.js';
export var LoginPageView = function (ctrl) {
    var attriubutes = {
        action: '#',
        className: 'mf-form',
        id: 'mfForm',
        name: 'mfForm',
        method: 'POST',
        onsubmit: function (e) { return ctrl.handleFormData(e); },
    };
    var errorView = function () {
        var _a, _b, _c;
        var isShow = (_a = ctrl.store) === null || _a === void 0 ? void 0 : _a.appReducer.errorApp.show;
        var message = (_b = ctrl.store) === null || _b === void 0 ? void 0 : _b.appReducer.errorApp.message;
        var type = (_c = ctrl.store) === null || _c === void 0 ? void 0 : _c.appReducer.errorApp.type;
        return isShow ? ctrl.handelerError(message, ctrl.handlerCloseToast, type) : '';
    };
    return Didact.createElement('div', { className: "mf-page mf-center-block" }, [
        Didact.createElement('form', attriubutes, [
            Didact.createElement('div', { className: 'mf-form__body' }, [
                Didact.createElement('h2', { className: 'mf-form__title' }, 'Вход'),
                new Fieldset({
                    id: 'loginInput',
                    nameLabel: 'Почта',
                    message: 'Не корректно написано',
                    type: 'email',
                    name: 'login',
                    typeStore: 'login',
                    className: 'mf-form__field',
                    control: ctrl,
                    state: ctrl.state.login,
                }),
                new Fieldset({
                    id: 'loginPassword',
                    nameLabel: 'Пароль',
                    message: 'Не корректно написано',
                    type: 'password',
                    name: 'password',
                    typeStore: 'password',
                    className: 'mf-form__field',
                    control: ctrl,
                    state: ctrl.state.password,
                }),
            ]),
            Didact.createElement('div', { className: 'mf-form__footer' }, [
                Didact.createElement('input', {
                    className: 'mf-button mf-submit',
                    value: 'Авторизоваться',
                    type: 'submit',
                }, ''),
                Didact.createElement('a', {
                    className: 'mf-page-link mf-page-link--top-indent',
                    href: '/registration',
                }, 'Нет аккаунта?'),
            ]),
        ]),
        errorView()
    ]);
};
//# sourceMappingURL=LoginPageView.js.map