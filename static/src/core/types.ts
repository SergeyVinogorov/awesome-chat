export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
};


export type Options = {
  method: string,
  url: string,
  params?: string | any,
  headers?: any
}

export type OptionsNoMethod = Omit<Options, "method">;
