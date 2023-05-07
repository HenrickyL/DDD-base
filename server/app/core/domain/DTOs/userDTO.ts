

export type RegisterUserRequest = {
  username: string
  email:    string
  password: string
  name:     string
}

export type UserResponse = {
  id: string
  username: string
  name: string
  email: string
  createdAt: Date
  updatedAt?: Date
}

export type AuthenticateUserRequest = {
  username: string
  password: string
}

export interface AuthenticatedUserSessionsData {
  inSessionUserId: string
  InSessionUsername: string
  token: string
}


export interface AuthTokenPayload {
  exp: number
  sub: string
}