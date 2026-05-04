import User from '@models/user.model';
import { Optional, ForeignKey } from 'sequelize';

export interface iTokenAttributes {
  id?: number;
  userId: ForeignKey<User['id']>;
  refreshToken: string;
}

export interface iTokenCreationAttributes extends Optional<iTokenAttributes, 'id'> {}
