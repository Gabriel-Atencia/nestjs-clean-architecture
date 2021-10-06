export interface IUser {
  id: string;
  name: string;

  equals(entity: IUser): boolean;
}
