import { HttpException } from '@exceptions/HttpException';
import { ExceptionTypeProduct } from '@exceptions/productExceptions.type';
import Recipe from '@models/product-models/recipes.model';

export class ProductRepository {
  public async getRecipesData() {
    try {
      const recipes = Recipe.findAll();
      if (!recipes) throw new HttpException(404, ExceptionTypeProduct.DB_PRODUCTS_GET_NOT_GOT);
      return recipes;
    } catch (error) {
      throw new HttpException(404, ExceptionTypeProduct.DB_PRODUCTS_GET_NOT_GOT);
    }
  }
  public async createRecipe(
    imageUrl: string,
    title: string,
    cuisinesType: string,
    foodPreference: string,
    complexityType: string,
    cookingTime: number,
  ): Promise<any> {
    try {
      const recipeCheck = await Recipe.findOne({ where: { title: title } });
      if (recipeCheck) throw new HttpException(404, ExceptionTypeProduct.DB_PRODUCTS_CREATE_NOT_CREATE);
      const recipe = await Recipe.create({
        imageUrl: imageUrl,
        title: title,
        cuisinesType: cuisinesType,
        foodPreference: foodPreference,
        complexityType: complexityType,
        cookingTime: cookingTime,
      });
      return recipe;
    } catch (error) {
      throw new HttpException(404, ExceptionTypeProduct.DB_PRODUCTS_CREATE_NOT_CREATE);
    }
  }
}
