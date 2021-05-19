import { Options, OptionsNoMethod } from "./types";
export default class HTTP {
    private path;
    constructor(path: string);
    get(options: OptionsNoMethod): Promise<any>;
    post(options: OptionsNoMethod): Promise<any>;
    put(options: OptionsNoMethod): Promise<any>;
    delete(options: OptionsNoMethod): Promise<any>;
    request(options: Options): Promise<any>;
}
