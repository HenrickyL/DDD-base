import { IController } from "@core/infra/IController";
import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository";
import RegisterUserController from "@modules/user/useCases/RegisterUser/RegisterUserController";
import { RegisterUserService } from "@modules/user/useCases/RegisterUser/RegisterUserService";
import { RegisterUserRequest, UserResponse } from "@core/domain/DTOs/userDTO";

export function makeRegisterUserController(): IController<RegisterUserRequest, UserResponse> {
    const prismaUsersRepository = new PrismaUsersRepository()
    const authenticateUser = new RegisterUserService(prismaUsersRepository)
    const authenticateUserController = new RegisterUserController(
      authenticateUser
    )
    return authenticateUserController
  }