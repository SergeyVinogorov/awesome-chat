export type ErrorType = {
  type: ErrorTypeOfType,
  message: string,
  isExist: boolean
}

export enum ErrorTypeOfType {
  warning = 'warning',
  info = 'info',
  error = 'error'
}
