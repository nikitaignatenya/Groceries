import { Optional } from 'sequelize';
export interface UserAttributes {
  id?: number;
  email: string;
  password: string;
  name: string;
  isActivated: boolean;
  activatedLink: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
