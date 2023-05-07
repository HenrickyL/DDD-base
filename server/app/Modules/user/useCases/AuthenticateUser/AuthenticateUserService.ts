import { JWT } from "@core/infra/jwt";
import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { AuthenticatedResponse } from "@core/domain/DTOs";
import { AuthenticateUserRequest } from "@core/domain/DTOs/userDTO";
import { InvalidUsernameOrPasswordError } from "../../errors";

export class AuthenticateUserService {
  constructor(private usersRepository: IUsersRepository) {}
  async execute({
    username,
    password,
  }: AuthenticateUserRequest): Promise<AuthenticatedResponse> 
  {
    const user = await this.usersRepository.findByUsername(username)
    if (!user) {
      throw new InvalidUsernameOrPasswordError()
    }
    const isPasswordValid = await user.password.comparePassword(password)
    if (isPasswordValid === false) {
      throw new InvalidUsernameOrPasswordError()
    }
    const { token } = JWT.signUser(user)

    return {
      userId: user.id,
      username: username,
      token
    }
  }
}