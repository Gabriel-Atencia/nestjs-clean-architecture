import { IUser } from 'src/domain/shared/interfaces/user/IUser.interface';
import { TUser } from './user.type';

export class User implements IUser {
  id: string;
  name: string;

  constructor(user: TUser) {
    this.name = user.name;
    this.id = user.id;
  }

  equals(entity: IUser): boolean {
    return this.id === entity.id;
  }
}
