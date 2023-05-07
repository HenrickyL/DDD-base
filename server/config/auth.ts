import { AuthenticatedUserSessionsData } from "@core/domain/DTOs/userDTO";
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand';
dotenvExpand.expand(dotenv.config())
interface IAuth{
  port: string
  secretKey: string
  expireIn: string
}
export const auth : IAuth = {
  port: process.env.API_PORT || process.env.PORT,
  secretKey: process.env.APP_SECRET,
  expireIn: `${10 * 60}s` 
};
export const appUrl:string = `'http://${process.env.DOMAIN}:${auth.port}'`
export abstract class InSection{
    static auth: AuthenticatedUserSessionsData

    static IsEqualUsername(username: string): boolean{
      return this.auth.InSessionUsername.toLocaleLowerCase() == username.toLocaleLowerCase()
    }
}