export default class ValidationError extends Error {
  constructor(msg: string) {
    // Call the Error constructor to pass the message to the base Error class
    super(msg);

    // Set the error's name for error output
    this.name = "ValidationError";
  }
}
