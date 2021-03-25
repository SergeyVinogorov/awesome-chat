import { AppPageService } from "../services/AppPageService";
export declare class AppPageController {
    readonly view: () => {
        type: string;
        props: any;
    };
    appService: AppPageService;
    render(): {
        type: string;
        props: any;
    };
}
