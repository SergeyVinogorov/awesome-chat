export declare type InputStateType = {
    value: string;
    isValid: boolean;
};
export interface ValidInterface {
    isValid: (field: string) => Boolean;
}
export declare class HasEmptyInterface implements ValidInterface {
    isValid(filed: string): boolean;
}
export declare class MaxInterface implements ValidInterface {
    max: number;
    constructor(max: number);
    isValid(filed: string): boolean;
}
export declare class MinInterface implements ValidInterface {
    min: number;
    constructor(min: number);
    isValid(filed: string): boolean;
}
export declare class PatternInterface implements ValidInterface {
    regex: RegExp;
    constructor(regex: RegExp);
    isValid(filed: string): boolean;
}
export declare type fieldProp = {
    field: string;
    id: string;
    idError: string;
    nameField: string;
};
