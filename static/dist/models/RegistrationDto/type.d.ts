export declare type InputStateType = {
    value: string;
    isValid: boolean;
};
export declare type InitialRegistrationType = {
    firstName: InputStateType;
    lastName: InputStateType;
    mail: InputStateType;
    phone: InputStateType;
    login: InputStateType;
    password: InputStateType;
    passwordRepeat: InputStateType;
};
export declare type InitialRegistrationTypeAlias = {
    firstName?: InputStateType;
    lastName?: InputStateType;
    mail?: InputStateType;
    phone?: InputStateType;
    login?: InputStateType;
    password?: InputStateType;
    passwordRepeat?: InputStateType;
};
export declare type PassedType = {
    type: string;
    value: InitialRegistrationType;
};
