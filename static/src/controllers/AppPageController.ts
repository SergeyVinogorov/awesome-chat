import { AppPageView } from "../view/AppPageView";
import { AppPageService } from "../services/AppPageService";

export class AppPageController {

  public readonly view = AppPageView;
  public appService: AppPageService = new AppPageService()

  render() {
    return this.view()
  }
}
