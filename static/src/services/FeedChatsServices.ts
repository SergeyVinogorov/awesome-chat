import { getState, stateType } from "../models/models";
import { router } from "../index";
import { REGISTRATION } from "../core/constants";

export class FeedChatService {
  private globalStore: stateType;
  constructor(){
    this.globalStore = getState()
    this.init()
  }
  init() {
  if(!this.globalStore.appReducer.isAuth && window.location.pathname !== REGISTRATION) {
    router.start();
    router.go('/login', 'Страница входа')
  }
  }
}