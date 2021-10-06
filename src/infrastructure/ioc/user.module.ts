import { Module } from '@nestjs/common';
import { CreateUser } from 'src/aplication/use-cases/user/create-user';
import { UsersController } from 'src/presentation/controllers/user.controller';
import { PrismaModule } from '../databases/prisma/prisma.module';
import { UserRepository } from '../databases/prisma/repositories/user.repository';
@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [
    CreateUser,
    { provide: UserRepository.name, useClass: UserRepository },
  ],
})
export class UserModule {}
