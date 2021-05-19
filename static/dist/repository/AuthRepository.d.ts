import { loginType } from "../types/loginTypes";
import { signUpType, BodyType, RespError } from "../types/repositoryTypes";
export declare class AuthRepository {
    signIn(params: loginType): Promise<BodyType | RespError>;
    signUp(params: signUpType): Promise<BodyType | RespError>;
    logOut(): Promise<BodyType>;
    getUserInfo(): Promise<string | RespError>;
}
