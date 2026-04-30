export interface iUserDto {
  email: string;
  id: number;
  isActivated: boolean;
}

export class UserDto implements iUserDto {
  public email: string;
  public id: number;
  public isActivated: boolean;
  constructor(model) {
    this.email = model.email;
    this.id = model.id;
    this.isActivated = model.isActivated;
  }
}
