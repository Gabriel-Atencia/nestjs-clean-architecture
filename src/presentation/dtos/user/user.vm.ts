import { Expose, plainToClass } from 'class-transformer';
import { User } from 'src/domain/entities/user/user.entity';

export class UserVm {
  @Expose()
  id: string;

  @Expose()
  name: string;

  static toViewModel(user: User) {
    return plainToClass(UserVm, user, { excludeExtraneousValues: true });
  }
}
