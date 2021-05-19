import { AuthRepository } from "../repository/AuthRepository";
import { loginType } from "../types/loginTypes";
import { signUpType } from "../types/repositoryTypes";
export declare class AuthServise {
    authApi: AuthRepository;
    signIn(params: loginType): Promise<void>;
    signUp(params: signUpType): Promise<void>;
    signOut(): Promise<void>;
}
