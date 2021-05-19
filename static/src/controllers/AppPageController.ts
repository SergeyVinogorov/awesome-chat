import { AppPageView } from "../view/AppPageView";
import { AppPageService } from "../services/AppPageService";
import { BaseComponent } from "../view/components/BaseComponent";

export interface UserPageOptions {
    param1?: number;
    param2?: string;
}

export class AppPageController<
    P extends UserPageOptions
> extends BaseComponent<P> {
  public readonly view = AppPageView;
  public appService: AppPageService = new AppPageService()

}
