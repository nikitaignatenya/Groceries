import { ForeignKey, Model, DataTypes } from 'sequelize';
import { sequelize } from '@config/database.config';
import { iInstrictionsRecipesAttributes, iInstrictionsRecipesCreationAttributes } from '@interfaces/product-interfaces/instructions.model.interface';
import Recipe from './recipes.model';

export class RecipeInstructions
  extends Model<iInstrictionsRecipesCreationAttributes, iInstrictionsRecipesAttributes>
  implements iInstrictionsRecipesAttributes
{
  public id?: number;
  recipeId?: ForeignKey<Recipe['id']>;
  public title?: string;
}

RecipeInstructions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'recipes',
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'recipes_instructions',
    timestamps: true,
  },
);

export default RecipeInstructions;
