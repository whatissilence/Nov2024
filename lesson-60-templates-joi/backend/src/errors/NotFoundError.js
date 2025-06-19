export default class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFound";
    this.statusCode = 404;
  }

}