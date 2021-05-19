import { PageFormValidatorService } from '../services/PageFormValidatorService';
import { BaseComponent } from '../view/components/BaseComponent';
import { FeedChatPageView } from '../view/FeedChatPageView';

// import { AppPageService } from "../services/AppPageService";
// import { Injector } from "../core/Injector";

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
type InputStateType = {
    value: string;
    isValid: boolean;
};

type InputValue = {
    value: string;
};

export class FeedChatPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {
  public readonly view = FeedChatPageView;

  // public appService: AppPageService;

  public validatorService: PageFormValidatorService = new PageFormValidatorService();

  handleSearch(value: string) {
      console.log(value);
  }

  handleOnInput(event: InputValue, type: string) {
      const isCorrect: InputStateType = this.validatorService.validateValue(
          event.value,
          type
      );
      return isCorrect;
  }
}
