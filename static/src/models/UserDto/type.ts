export type InitialTypeUser = {
  userInfo: {
    id: number | null,
    first_name: string | null,
    second_name: string | null,
    display_name: string | null,
    login: string | null,
    email: string | null,
    phone: string | null,
    avatar: string | null,
  }
}
export interface PassedType {
  type: string,
  user?: InitialTypeUser,
}
