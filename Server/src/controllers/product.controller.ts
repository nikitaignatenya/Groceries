import { buildResponse } from '@helpers/response';
import { NextFunction, Request, Response } from 'express';
import { ProductService } from '@services/product-services/product.service';
export class ProductControoller {
  private productService = new ProductService();
  constructor() {}
  public getRecipesData = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const recipesData = await this.productService.getRecipesData();
      buildResponse(res, 200, recipesData);
    } catch (error) {
      next(error);
    }
  };
  public createRecipe = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { imageUrl, title, cuisinesType, foodPreference, complexityType, cookingTime } = req.body;

      const recipeData = await this.productService.createRecipe(imageUrl, title, cuisinesType, foodPreference, complexityType, cookingTime);
      buildResponse(res, 200, recipeData);
    } catch (error) {
      next(error);
    }
  };
}
