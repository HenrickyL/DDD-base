import { IMapper } from "@core/infra/IMapper";
import { User } from "@prisma/client";
import { UserResponse } from "@core/domain/DTOs/userDTO";
import { Password } from "../domain/middleware/Password";
import { IUser } from '@core/domain/entities';


export class UserMapper implements IMapper<IUser, User, UserResponse>{
  private static _instance : UserMapper;
  public static  instance():UserMapper{
    if(!UserMapper._instance){
      UserMapper._instance = new UserMapper()
    }
    return UserMapper._instance;
  }
  private constructor(){}
  toEntity(model: User): IUser {
    const current = {
      id: model.id,
      username: model.username,
      password: Password.create(model.password, true),
      email: model.email,
      name: model.name,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt
    }
    return current
  }
  async toModelAsync(entity: IUser): Promise<User> {
    return {
      id: entity.id,
      username: entity.username,
      email: entity.email,
      name: entity.name,
      password: await entity.password.getHashedValue(),
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }

  toModel(entity: IUser): User{
    return {
      id: entity.id,
      username: entity.username,
      name: entity.name,
      password: entity.password.value,
      email: entity.email,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }
  
  toResponse(entity: IUser): UserResponse {
    return {
      id: entity.id,
      username: entity.username,
      name:entity.name,
      email: entity.email,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt
    }
  }
}
