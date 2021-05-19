import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { AuthServise } from '../services/AuthServise';

import { BaseComponent } from '../view/components/BaseComponent';
import { LoginPageView } from '../view/LoginPageView';

import { getState, dispatch, stateType } from "../models/models";
// import { handleSignInAction } from '../models/LoginDto/actions';
import { handleError } from "../models/AppDto";

// import { router } from "../index";

import { InputStateType, InputValue } from "../types/formTypes";
import { InitialLoginType } from "../models/LoginDto/type";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

type validateStore = {
  login?: InputStateType,
  password?: InputStateType
}
export class LoginPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {

    public view = LoginPageView
    public auth: AuthServise = new AuthServise()
    public store: stateType;
    public validatorService: PageFormValidatorService = new PageFormValidatorService();
    constructor(props: any) {
      super(props)
      this.store = getState();
      this.init()
    }
    init(){
      // if(this.store.appReducer.isAuth) {
      //   router.go('/chats', 'Страница чатов')
      // }
    }

    activate(){
      this.setState({
        login: {
          value: '',
          isValid: true,
        },
        password: {
          value: '',
          isValid: true,
        }
      })
    }

    handlerCloseToast = () => {
     let currTest = Object.assign({}, this.store)
     currTest.appReducer.errorApp.show = false
     dispatch(handleError(currTest.appReducer.errorApp))
    }

    private handleValidate(event: InputValue, type: string, name: keyof InitialLoginType) {
        let resultValidate: InputStateType = this.validatorService.validateValue(
            event.value,
            type
        );
        const result: validateStore = {}
        result[name] = resultValidate
        const newState = Object.assign({}, this.state, result)
        this.setState(newState)
        this.forceUpdate()
        // const localState: InitialLoginType = Object.assign({}, this.store.loginReducer, result)
        // dispatch(handleSignInAction(localState))
        // this.store = getState()
    }

    handleOnInput(event: InputValue, type: string, name: keyof InitialLoginType) {
        this.handleValidate(event, type, name);
    }

    handleOnBlur(event: InputValue, type: string, name: keyof InitialLoginType) {
        this.handleValidate(event, type, name);
    }

    async handleFormData(e: Event) {
      e.preventDefault();
      // const methodStore = this.store.loginReducer
      const methodStore = this.state
      const login = this.validatorService.validateValue(
          methodStore.login.value,
          'email'
      );
      const password = this.validatorService.validateValue(
          methodStore.password.value,
          'password'
      );

      if (login.isValid && password.isValid) {
        let params = {
          login: login.value,
          password: password.value
        }
        await this.auth.signIn(params)
      }

    }
}
