/**
 * A simple validation error class.
 *
 * @remarks
 * This class adds no basic functionality to the standard
 * `Error` class yet.
 *
 * @alpha
 * @experimental
 */
export default class ValidationError extends Error {
  constructor(msg: string) {
    // Call the Error constructor to pass the message to the base Error class
    super(msg);

    // Set the error's name for error output
    this.name = "Validation Error";
  }


  /**
   * Provides a string representation of a ValidationError.
   *
   * @remarks
   * The `toString()` method represents a ValidationError object
   * as a string, for more readable output.
   */
  override toString(): string {
    return `${this.name}: ${this.message}`;
  }
}
