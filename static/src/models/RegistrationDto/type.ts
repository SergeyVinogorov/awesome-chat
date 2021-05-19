export type InputStateType = {
    value: string;
    isValid: boolean;
};

export type InitialRegistrationType = {
  firstName: InputStateType,
  lastName: InputStateType,
  mail: InputStateType,
  phone: InputStateType,
  login: InputStateType,
  password: InputStateType
  passwordRepeat: InputStateType
}
export type InitialRegistrationTypeAlias = {
  firstName?: InputStateType,
  lastName?: InputStateType,
  mail?: InputStateType,
  phone?: InputStateType,
  login?: InputStateType,
  password?: InputStateType
  passwordRepeat?: InputStateType
}

export type PassedType = {
  type: string,
  value: InitialRegistrationType,
}
