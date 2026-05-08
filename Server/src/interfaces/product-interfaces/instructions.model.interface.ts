import { Optional, ForeignKey } from 'sequelize';
import Recipe from '@models/product-models/recipes.model';

export interface iInstrictionsRecipesAttributes {
  id?: number;
  recipeId?: ForeignKey<Recipe['id']>;
  title?: string;
}

export interface iInstrictionsRecipesCreationAttributes extends Optional<iInstrictionsRecipesAttributes, 'id'> {}
