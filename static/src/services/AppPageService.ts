// import { getState, stateType } from "../models/models";

// import { REGISTRATION } from "../core/constants";
// import { router } from "../index";
export class AppPageService {

  // private globalStore: stateType;

  constructor(){
    // this.globalStore = getState()
    this.init()
  }

  init() {
    // if(!this.globalStore.appReducer.isAuth && window.location.pathname !== REGISTRATION) {
    //   router.go('/login', 'Страница входа')
    // }else{
    //  router.go('/chats', "Страница чатов")
    // }
  }

}
