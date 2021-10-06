import { Inject, Injectable } from '@nestjs/common';
import { ICreateUserRepository } from 'src/aplication/ports/user/create-user.interface';
import { User } from 'src/domain/entities/user/user.entity';
import { UserRepository } from 'src/infrastructure/databases/prisma/repositories/user.repository';

@Injectable()
export class CreateUser {
  constructor(
    @Inject(UserRepository.name)
    private readonly createUserRepository: ICreateUserRepository<User>,
  ) {}

  async execute(user: User): Promise<User> {
    return this.createUserRepository.createUser(user);
  }
}
