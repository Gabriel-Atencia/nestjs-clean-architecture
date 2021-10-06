export interface ICreateUserRepository<T> {
  createUser(user: T): Promise<T>;
}
