import { dispatch } from "../models/models";
import { router } from "../index";

import { AuthRepository } from "../repository/AuthRepository";

import { handleUserInfoAction, handleUserLogoutAction} from "../models/UserDto/actions";
import { handleAuthAction, handleErrorAction } from "../models/AppDto/actions";
import { ErrorTypeOfType } from "../models/AppDto/type";

import { loginType } from "../types/loginTypes";
import { signUpType } from "../types/repositoryTypes";

export class AuthServise {
  public authApi = new AuthRepository()

  async signIn(params: loginType){
    return await this.authApi.signIn(params)
    .then(data => {
      return data
    })
    .then(() =>{
      this.authApi.getUserInfo()
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
          router.go('/chats', "Страница чатов")
        })
    })
    .catch(err => {
      const errorApp = {
        type: ErrorTypeOfType.error,
        message: err.statusText.reason,
        isError: true,
        show: true
      }
      handleErrorAction(errorApp)
    })
  }
  async signUp(params: signUpType){
    await this.authApi.signUp(params)
      .then(data => {
        return data;
      })
      .then(()=> {
        return this.authApi.getUserInfo()
        .then((info: string) => {
          return info
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
      })
      .catch(err => {
        console.log(err);
      })
  }
  signOut() {
    return this.authApi.logOut()
      .then(() => {
        dispatch(handleUserLogoutAction())
        dispatch(handleAuthAction(true))
      })
      .catch(err => {
        console.log(err);
      })
  }
}
