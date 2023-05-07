import { Password } from "@modules/user/domain/middleware/Password";
import { Username } from "@modules/user/domain/middleware/Username";
import { UserMapper } from "@modules/user/mapper/UserMapper";
import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { RegisterUserRequest, UserResponse} from "@core/domain/DTOs/userDTO";

export class RegisterUserService {
  private mapper: UserMapper = UserMapper.instance()
  constructor(
    private usersRepository: IUsersRepository
    ) {}

  async execute({
    username,
    password,
    name,
    email
  }: RegisterUserRequest): Promise<UserResponse> 
  {
    await this.usersRepository.validateUsernameNotExist(username)
    
    const response = await this.usersRepository.create({
        username: Username.create(username),
        password: Password.create(password),
        name: name,
        email: email.toLowerCase()
    })
    return this.mapper.toResponse(response)
  }
}