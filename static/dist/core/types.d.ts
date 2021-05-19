export declare enum METHOD {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
}
export declare type Options = {
    method: string;
    url: string;
    params?: string | any;
    headers?: any;
};
export declare type OptionsNoMethod = Omit<Options, "method">;
