export type userInfoType = {
    id: number,
    first_name: string | null,
    second_name: string | null,
    display_name: string | null,
    login: string | null,
    email: string | null,
    phone: string | null,
    avatar: string | null,
}

export type BodyType = 'ok';

export type RespError = {
  reason: string
}

export type userInfoTypeNoId = Omit<userInfoType, "id">;

export type signUpType = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
}
