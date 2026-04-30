import { iUserDto } from '@dtos/user.dto';
import { Optional } from 'sequelize';
export interface iUserAttributes {
  id?: number;
  email: string;
  password: string;
  name: string;
  isActivated: boolean;
  activatedLink: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface iUserCreationAttributes extends Optional<iUserAttributes, 'id'> {}

export interface iUser {
  accessToken: string;
  refreshToken: string;
  user: iUserDto;
}
