import Router from 'express';
import { ProductControoller } from '@controllers/product.controller';
import { authMiddleware } from '@middlewares/auth.middleware';
export class ProductRoute {
  private productController = new ProductControoller();
  public router = Router();
  private pathRecipes = 'recipes';
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes(): void {
    this.router.get(`/${this.pathRecipes}/`, authMiddleware, this.productController.getRecipesData);
    // this.router.get(`/${this.path}/:id`);
    this.router.post(`/${this.pathRecipes}/create/`, authMiddleware, this.productController.createRecipe);
    // this.router.post(`/${this.path}/remove/:id`);
    // this.router.put(`/${this.path}/update/:id`);
  }
}
