export interface iValidationMessage {
  type: string;
  value: string;
  msg: string;
  path: string;
  location: string;
}

export interface iHttpException {
  id: number;
  message: string;
}

export class HttpException extends Error {
  public status: number;
  public message: string;
  public id: number;
  public validationErrors: Array<iValidationMessage>;
  constructor(status: number, obj: iHttpException, validationErrors?: any) {
    super(obj.message);
    this.validationErrors = validationErrors;
    this.status = status;
    this.message = obj.message;
    this.id = obj.id;
  }
}
