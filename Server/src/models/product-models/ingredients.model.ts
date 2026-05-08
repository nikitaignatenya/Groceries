import { ForeignKey, Model, DataTypes } from 'sequelize';
import { sequelize } from '@config/database.config';
import { iIngredientsRecipesAttributes, iIngredientsRecipesCreationAttributes } from '@interfaces/product-interfaces/ingredients.model.interface';
import Recipe from './recipes.model';

export class RecipeIngredients
  extends Model<iIngredientsRecipesAttributes, iIngredientsRecipesCreationAttributes>
  implements iIngredientsRecipesAttributes
{
  public id?: number;
  recipeId?: ForeignKey<Recipe['id']>;
  public title?: string;
}

RecipeIngredients.init(
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
    tableName: 'recipes_ingredients',
    timestamps: true,
  },
);

export default RecipeIngredients;
