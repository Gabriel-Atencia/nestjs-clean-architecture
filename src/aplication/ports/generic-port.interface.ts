export interface IGenericPort<T> {
  create(data: T): Promise<T>;
}
