import { RecipesDto } from '@dtos/product.dto';
import { HttpException } from '@exceptions/HttpException';
import { ExceptionTypeProduct } from '@exceptions/productExceptions.type';
import { ProductRepository } from '@repositories/product-repositories/product.repositories';

export class ProductService {
  private productRepository = new ProductRepository();
  public async getRecipesData() {
    const recipes = await this.productRepository.getRecipesData();
    if (!recipes) throw new HttpException(404, ExceptionTypeProduct.DB_PRODUCTS_GET_NOT_GOT);
    return recipes;
  }
  public async createRecipe(
    imageUrl: string,
    title: string,
    cuisinesType: string,
    foodPreference: string,
    complexityType: string,
    cookingTime: number,
  ): Promise<any> {
    const recipe = await this.productRepository.createRecipe(imageUrl, title, cuisinesType, foodPreference, complexityType, cookingTime);
    if (!recipe) throw new HttpException(404, ExceptionTypeProduct.DB_PRODUCTS_GET_NOT_GOT);
    const recipeDto = new RecipesDto(recipe);
    return recipeDto;
  }
}
