import {
    LoginPageController,
    UserPageOptions,
} from '../controllers/LoginPageController';
import Didact from '../core/didactClass';
import { Fieldset } from './components/Fieldset/index';

export const LoginPageView = <P extends UserPageOptions>(
    ctrl: LoginPageController<P>
) => {
    const attriubutes = {
        action: '#',
        className: 'mf-form',
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

    return Didact.createElement('div', {className:"mf-page mf-center-block"}, [
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
              Didact.createElement(
                  'input',
                  {
                      className: 'mf-button mf-submit',
                      value: 'Авторизоваться',
                      type: 'submit',
                  },
                  ''
              ),
              Didact.createElement(
                  'a',
                  {
                      className: 'mf-page-link mf-page-link--top-indent',
                      href: '/registration',
                  },
                  'Нет аккаунта?'
              ),
          ]),
      ]),
    errorView()
    ])
};
