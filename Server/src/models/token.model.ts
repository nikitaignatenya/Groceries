import { ForeignKey, DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/database.config';
import { iTokenCreationAttributes, iTokenAttributes } from '@interfaces/token.model.interface';
import User from './user.model';
export class Token extends Model<iTokenAttributes, iTokenCreationAttributes> implements iTokenAttributes {
  public  id!: number;
  public userId!: ForeignKey<User['id']>;
  public refreshToken!: string;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      // allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    refreshToken: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tokens',
    // underscored: true,
  },
);

export default Token;
