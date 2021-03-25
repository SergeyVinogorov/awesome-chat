import { LoginPageController, UserPageOptions } from '../controllers/LoginPageController';
export declare const LoginPageView: <P extends UserPageOptions>(ctrl: LoginPageController<P>) => {
    type: string;
    props: any;
};
