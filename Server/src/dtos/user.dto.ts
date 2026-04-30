

export class UserDto {
  public email: string;
  public id: number;
  public isActivated: boolean;
  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }
}
