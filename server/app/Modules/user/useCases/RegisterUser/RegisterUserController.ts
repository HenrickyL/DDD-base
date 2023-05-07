import { IController } from "@core/infra/IController";
import { RegisterUserRequest, UserResponse } from "@core/domain/DTOs/userDTO";
import { HttpResponse, created} from "@core/domain/HttpResponses";
import { RegisterUserService } from "./RegisterUserService";
import {  } from "@core/domain/HttpResponses";

export default class RegisterUserController implements IController<RegisterUserRequest, UserResponse> {

  constructor(private useCase: RegisterUserService){}

  async handle(request: RegisterUserRequest): Promise<HttpResponse<UserResponse>>{
      const result = await this.useCase.execute(request)
      return created<UserResponse>(result)
  }
}