import { ForeignKey, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.config';
import { TokenCreationAttributes, TokenAttributes } from '@interfaces/token.model.interface';
import User from './user.model';
export class Token extends Model<TokenAttributes, TokenCreationAttributes> implements TokenAttributes {
  public id: number;
  public userId: ForeignKey<User['id']>;
  public refreshToken: string;
}

Token.init(
  {
    id: {
      type: DataTypes.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'Token',
    underscored: true,
  },
);

export default Token;
