import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from 'src/aplication/use-cases/user/create-user';
import { CreateUserDto } from '../dtos/user/create-user.vm';
import { UserVm } from '../dtos/user/user.vm';

@Controller('users')
export class UsersController {
  constructor(private readonly createUser: CreateUser) {}

  @Post()
  async create(@Body() user: CreateUserDto) {
    const newUser = await this.createUser.execute(
      CreateUserDto.fromViewModel(user),
    );
    return UserVm.toViewModel(newUser);
  }
}
