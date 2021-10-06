import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { ICreateUserRepository } from 'src/aplication/ports/user/create-user.interface';
import { User } from 'src/domain/entities/user/user.entity';
import { IUser } from 'src/domain/shared/interfaces/user/IUser.interface';
import { PrismaService } from '../service/prisma.service';

@Injectable()
export class UserRepository implements ICreateUserRepository<IUser> {
  constructor(private prisma: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<IUser> {
    const { id, name } = await this.prisma.user.create({ data });
    return new User({ name, id });
  }
}
