import { AppPageService } from "../services/AppPageService";
import { BaseComponent } from "../view/components/BaseComponent";
export interface UserPageOptions {
    param1?: number;
    param2?: string;
}
export declare class AppPageController<P extends UserPageOptions> extends BaseComponent<P> {
    readonly view: () => {
        type: string;
        props: any;
    };
    appService: AppPageService;
}
