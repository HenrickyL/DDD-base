export type AuthenticatedMiddlewareRequest = {
  accessToken?: string,
  authorization: string
}


export type AuthenticatedResponse = {
  userId: string,
  username: string,
  token: string
}