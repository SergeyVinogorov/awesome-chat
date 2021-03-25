import Didact from '../core/didactClass';


export const AppPageView = () => {
  return Didact.createElement('div', {className: 'mf-page mf-center-block'}, [
    Didact.createElement('main', {className: 'mf-main'}, [
      Didact.createElement('a', {href: './login'}, 'Логин'),
      Didact.createElement('a', {href: './registration'}, 'Страница регистрации'),
      Didact.createElement('a', {href: './list-chat'}, 'Список чатов'),
      Didact.createElement('a', {href: './feed-chat'}, 'Лента переписки'),
      Didact.createElement('a', {href: './settings-profile'}, 'Настройки пользователя'),
      Didact.createElement('a', {href: './404'}, 'Страница 404'),
      Didact.createElement('a', {href: './500'}, 'Страница 500'),
    ])
  ])
}
