import { Password } from "@modules/user/domain/middleware/Password"
import { IAccount } from "./IAccount"
import { IEntity } from '.';

export interface IUser extends IEntity{
  username: string
  password: Password
  name:     string
  email:    string
}