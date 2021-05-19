import HTTP from "../core/http";
import { loginType } from "../types/loginTypes";
import { signUpType, BodyType, RespError } from "../types/repositoryTypes";

const authApiInstance = new HTTP('api/v2')

export class AuthRepository {

  public async signIn(params:loginType): Promise<BodyType | RespError>  {
    const response = await authApiInstance.post({ params: params, url: '/auth/signin'})
    return await response;
  }
  public async signUp(params:signUpType): Promise<BodyType | RespError> {
    const response = await authApiInstance.post({params: params, url: '/auth/signup'})
    return await response;
  }

  public async logOut(): Promise<BodyType> {
    const response = await authApiInstance.post({url: '/auth/logout'})
    return await response;
  }

  public async getUserInfo(): Promise<string | RespError> {
    const response = await authApiInstance.get({url:'/auth/user'});
    return await response;
  }
}
