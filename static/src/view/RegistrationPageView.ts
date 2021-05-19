import {
    RegistrationPageController,
    UserPageOptions,
} from '../controllers/RegistrationPageController';
import Didact from '../core/didactClass';
import { Fieldset } from './components/Fieldset/index';

export const RegistrationPageView = <P extends UserPageOptions>(
    ctrl: RegistrationPageController<P>
) => {
    const attriubutes = {
        action: '#',
        className: 'mf-form mf-form--height',
        id: 'mfForm',
        name: 'mfForm',
        method: 'POST',
        onsubmit: (e: Event) => ctrl.handleFormData(e),
    };

    const errorView = () => {
      let isShow: boolean = ctrl.store?.appReducer.errorApp.show
      let message: string = ctrl.store?.appReducer.errorApp.message
      let type: string = ctrl.store?.appReducer.errorApp.type
      return isShow ? ctrl.handelerError(message, ctrl.handlerCloseToast, type) : ''
    }
    const messagePasswordRepeat = () => {
     return ctrl.handelCheckPassword(ctrl.state.password.value, ctrl.state.passwordRepeat.value)
    }

    return Didact.createElement('div', {className:"mf-page mf-center-block"}, [
      Didact.createElement('form', attriubutes, [
        Didact.createElement('div', { className: 'mf-form__body' }, [
            Didact.createElement(
                'h2',
                { className: 'mf-form__title' },
                'Регистрация'
            ),
            new Fieldset({
                id: 'nameInput',
                nameLabel: 'Имя',
                message: 'Не корректно написано',
                type: 'text',
                name: 'firstName',
                typeStore: 'name',
                className: 'mf-form__field',
                control: ctrl,
                state: ctrl.state.firstName,
            }),
            new Fieldset({
                id: 'surnameInput',
                nameLabel: 'Фамилия',
                message: 'Не корректно написано',
                type: 'text',
                name: 'lastName',
                typeStore: 'secondName',
                className: 'mf-form__field',
                control: ctrl,
                state: ctrl.state.lastName,
            }),
            new Fieldset({
                id: 'loginInput',
                nameLabel: 'Логин',
                message: 'Не корректно написано',
                type: 'email',
                name: 'login',
                typeStore: 'login',
                className: 'mf-form__field',
                control: ctrl,
                state: ctrl.state.login,
            }),
            new Fieldset({
                id: 'mailInput',
                nameLabel: 'Почта',
                message: 'Не корректно написано',
                type: 'email',
                name: 'mail',
                typeStore: 'mail',
                className: 'mf-form__field',
                control: ctrl,
                state: ctrl.state.mail,
            }),
            new Fieldset({
                id: 'phoneInput',
                nameLabel: 'Телефон',
                message: 'Не корректно введены данные',
                type: 'tel',
                name: 'phone',
                typeStore: 'phone',
                className: 'mf-form__field',
                control: ctrl,
                state: ctrl.state.phone,
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
            new Fieldset({
                id: 'loginPassword',
                nameLabel: 'Пароль (ещё раз)',
                message: 'Пароли не совпадают',
                type: 'password',
                name: 'passwordRepeat',
                typeStore: 'password',
                className: 'mf-form__field',
                control: ctrl,
                state: ctrl.state.passwordRepeat,
                isRepeat: messagePasswordRepeat()
            }),
        ]),
        Didact.createElement('div', { className: 'mf-form__footer' }, [
            Didact.createElement(
                'input',
                {
                    className: 'mf-button mf-submit',
                    value: 'Зарегистрироваться',
                    type: 'submit',
                },
                ''
            ),
            Didact.createElement(
                'a',
                {
                    className: 'mf-page-link mf-page-link--top-indent',
                    href: '../../login.html',
                },
                'Войти'
            ),
        ]),
    ]),
      errorView()
    ])
};
