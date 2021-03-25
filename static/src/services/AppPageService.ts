import Router from "../core/Router";

import { ErrorPageController } from '../controllers/ErrorPageController';
import { LoginPageController } from '../controllers/LoginPageController';
import { RegistrationPageController } from '../controllers/RegistrationPageController';
import { ListChatPageController } from '../controllers/ListChatController';
import { FeedChatPageController } from '../controllers/FeedChatController';
import { SettingProfilePageController } from '../controllers/SentingProfilePageController';

import { AppDto } from "../models/AppDto";

import { ErrorType } from "../types/appTypes";

import { Service } from "../core/ServiceDecorator";

@Service()
export class AppPageService {
  private globalState: AppDto = new AppDto()
  private router: Router

  constructor(){
    this.router = new Router()
    this.router.use('/', FeedChatPageController);
    this.router.use('/login', LoginPageController);
    this.router.use('/registration', RegistrationPageController);
    this.router.use('/list-chats', ListChatPageController);
    this.router.use('/settings', SettingProfilePageController);
    this.router.use('/notFound', ErrorPageController);
    this.router.start();
    this.init()
  }
  init() {
    if(!this.globalState.isAuth) {
      this.router.go('/login')
    }
  }

  handleError(stateError: ErrorType) {
    this.globalState.stateError = stateError
  }

  handleAuth(stateAuth: boolean) {
    this.globalState.stateIsAuth = stateAuth
    if(!stateAuth) {
      this.router.go('/login')
    }
  }

  handleState(){
    return this.globalState.stateAppp
  }

}
