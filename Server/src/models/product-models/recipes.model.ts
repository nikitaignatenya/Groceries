import { Model, DataTypes } from 'sequelize';
import { sequelize } from '@config/database.config';
import { iRecipesCreationAttributes, iRecipesAttributes } from '@interfaces/product-interfaces/recipes.model.interface';

export class Recipe extends Model<iRecipesAttributes, iRecipesCreationAttributes> implements iRecipesAttributes {
  public id?: number;
  public imageUrl?: string;
  public title?: string;
  public cuisinesType?: string;
  public foodPreference?: string;
  public cookingTime?: number;
  public сomplexityType?: string;
  public createdAt?: Date;
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    cuisinesType: {
      type: DataTypes.STRING,
    },
    foodPreference: {
      type: DataTypes.STRING,
    },
    cookingTime: {
      type: DataTypes.INTEGER,
    },
    complexityType: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: 'recipes',
    timestamps: true,
  },
);

export default Recipe;
