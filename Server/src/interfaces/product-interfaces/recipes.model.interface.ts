import { Optional } from 'sequelize';

export interface iRecipesAttributes {
  id?: number;
  imageUrl?: string;
  title?: string;
  cuisinesType?: string;
  foodPreference?: string;
  cookingTime?: number;
  complexityType?: string;
  createdAt?: Date;
}
export interface iRecipesCreationAttributes extends Optional<iRecipesAttributes, 'id'> {}
