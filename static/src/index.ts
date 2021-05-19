import Didact from "./core/didactClass";

import { subscribe, dispatch } from "./models/models";
import { handleUserInfoAction } from "./models/UserDto/actions";
import { handleAuthAction } from "./models/AppDto/actions";

import { AuthRepository } from "./repository/AuthRepository";

import { AppPageController } from "./controllers/AppPageController";
import { ErrorPageController } from './controllers/ErrorPageController';
import { LoginPageController } from './controllers/LoginPageController';
import { RegistrationPageController } from './controllers/RegistrationPageController';
import { ListChatPageController } from './controllers/ListChatController';
import { FeedChatPageController } from './controllers/FeedChatController';
import { SettingProfilePageController } from './controllers/SentingProfilePageController';

import Router from "./core/Router";

export const router: Router = new Router()
const authApi: AuthRepository = new AuthRepository()

router.use('/', FeedChatPageController);
router.use('/login', LoginPageController);
router.use('/registration', RegistrationPageController);
router.use('/chats', ListChatPageController);
router.use('/settings', SettingProfilePageController);
router.use('/notFound', ErrorPageController);
router.start()

authApi.getUserInfo()
  .then((info: string) => {
    return info;
  })
  .then((data: string) => {
    const respUser = JSON.parse(data)
    const user = {
      userInfo: {
        ...respUser
      }
    }
    dispatch(handleUserInfoAction(user))
    dispatch(handleAuthAction(true))
  })

subscribe(()=>{
  Didact.render(
    new AppPageController({}),
    document.getElementById('app'))
  }
)
