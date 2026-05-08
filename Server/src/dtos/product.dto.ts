export interface iRecipesDto {
  imageUrl?: string;
  title?: string;
  cuisinesType?: string;
  foodPreference?: string;
  cookingTime?: string;
}

export class RecipesDto implements iRecipesDto {
  public imageUrl?: string;
  public title?: string;
  public cuisinesType?: string;
  public foodPreference?: string;
  public complexityType?: string;
  public cookingTime?: string;
  constructor(model: any) {
    this.imageUrl = model.dataValues.imageUrl;
    this.title = model.dataValues.title;
    this.cuisinesType = model.dataValues.cuisinesType;
    this.foodPreference = model.dataValues.foodPreference;
    this.complexityType = model.dataValues.complexityType;
    this.cookingTime = model.dataValues.cookingTime;
  }
}
