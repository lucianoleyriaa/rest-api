

export class BadRequestException extends Error {
  public statusCode: number = 404;

  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }

}