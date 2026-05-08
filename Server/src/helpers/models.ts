import User from '@models/user-models/user.model';
import Token from '@models/user-models/token.model';
import Recipe from '@models/product-models/recipes.model';
import RecipeIngredients from '@models/product-models/ingredients.model';
import RecipeInstructions from '@models/product-models/instructions.model';

export const initializeModels = async () => {
  await User.sync({ alter: true });
  await Token.sync({ alter: true });
  await Recipe.sync({ alter: true });
  await RecipeIngredients.sync({ alter: true });
  await RecipeInstructions.sync({ alter: true });
};
