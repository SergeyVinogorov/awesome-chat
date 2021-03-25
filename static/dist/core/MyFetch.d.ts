declare type paramsFunc<T, P> = {
    method: string;
    url: string;
    headers?: T;
    params?: P;
};
export declare class MyFetch {
    _xhr: XMLHttpRequest;
    makeRequest(opts: paramsFunc<any, any>): Promise<unknown>;
}
export {};
