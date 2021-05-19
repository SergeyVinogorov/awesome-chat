export type InputStateType = {
    value: string;
    isValid: boolean;
};

export type InitialLoginType = {
  login: InputStateType,
  password: InputStateType
}

export type PassedType = {
  type: string,
  value: InitialLoginType,
}
