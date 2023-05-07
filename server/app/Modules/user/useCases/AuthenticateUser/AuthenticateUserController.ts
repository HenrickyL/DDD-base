import { IController } from "@core/infra/IController";
import { AuthenticatedResponse } from "@core/domain/DTOs";
import { AuthenticateUserRequest } from "@core/domain/DTOs/userDTO";
import { HttpResponse, ok } from "@core/domain/HttpResponses";
import { AuthenticateUserService } from "./AuthenticateUserService";

export default class AuthenticateUserController implements IController<AuthenticateUserRequest, AuthenticatedResponse> {

  constructor(private authUser: AuthenticateUserService){}

  async handle(request: AuthenticateUserRequest): Promise<HttpResponse<AuthenticatedResponse>>{
      const result = await this.authUser.execute(request)
      return ok(result)
  }

}