import User from '@models/user.model';
import { Optional, ForeignKey } from 'sequelize';

export interface TokenAttributes {
  id: number;
  userId: ForeignKey<User['id']>;
  refreshToken: string;
}

export interface TokenCreationAttributes extends Optional<TokenAttributes, 'id'> {}
