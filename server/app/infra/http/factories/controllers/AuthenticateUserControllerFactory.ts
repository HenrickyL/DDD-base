import { PrismaUsersRepository } from "@modules/user/repositories/prisma/PrismaUserRepository"
import { AuthenticateUserService } from "@modules/user/useCases/AuthenticateUser/AuthenticateUserService"
import AuthenticateUserController from "@modules/user/useCases/AuthenticateUser/AuthenticateUserController";
import { IController } from 'app/core/infra/IController';
import { AuthenticateUserRequest } from "@core/domain/DTOs/userDTO";
import { AuthenticatedResponse } from "@core/domain/DTOs";

export function makeAuthenticateUserController(): IController<AuthenticateUserRequest, AuthenticatedResponse> {
  const prismaUsersRepository = new PrismaUsersRepository()
  const authenticateUser = new AuthenticateUserService(prismaUsersRepository)
  const authenticateUserController = new AuthenticateUserController(
    authenticateUser
  )
  return authenticateUserController
}
