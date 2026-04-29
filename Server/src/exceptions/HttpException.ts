export interface iHttpException {
  id: number;
  message: string;
}

export class HttpException extends Error {
  public status;
  public message;
  public id;
  constructor(status: number, obj: iHttpException) {
    super(obj.message);
    this.status = status;
    this.message = obj.message;
    this.id = obj.id;
  }
}
