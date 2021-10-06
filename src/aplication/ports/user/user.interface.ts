import { IGenericPort } from '../generic-port.interface';

export interface IUserRepository<T> extends IGenericPort<T> {
  create<T>(user: T): Promise<T>;
}
