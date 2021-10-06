import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/domain/entities/user/user.entity';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  static fromViewModel(dto: CreateUserDto): User {
    return new User({ name: dto.name });
  }
}
