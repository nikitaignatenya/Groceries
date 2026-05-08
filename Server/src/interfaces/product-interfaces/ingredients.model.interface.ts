import { Optional, ForeignKey } from 'sequelize';
import Recipe from '@models/product-models/recipes.model';

export interface iIngredientsRecipesAttributes {
  id?: number;
  recipeId?: ForeignKey<Recipe['id']>;
  title?: string;
}

export interface iIngredientsRecipesCreationAttributes extends Optional<iIngredientsRecipesAttributes, 'id'> {}
