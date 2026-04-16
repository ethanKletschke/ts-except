import ValidationError from "./ValidationError";

/**
 * Thrown when a string's length doesn't match a given length
 * requirement.
 *
 * @remarks
 * The `LengthError` class, which extends the `ValidationError`
 * class, is intended to be thrown when a string's length does not
 * match that of a given length.
 *
 * @example
 * ```js
 * // Hypothetical import statement, subject to change
 * import { LengthError } from "ts-except";
 *
 * let x: string = "123456";
 *
 * try {
 *   if (x.length !== 6) {
 *     throw new LengthError("Length of X not equal to 6");
 *   }
 * } catch (ex) {
 *   if (ex instanceof LengthError) {
 *     console.error(ex.message);
 *     process.exit(1);
 *   }
 * }
 * ```
 *
 */
export default class LengthError extends ValidationError {
  constructor(msg: string) {
    // Run the ValidationError constructor
    super(msg);

    this.name = "LengthError";
  }


  /**
   * An experimental static method checking the length of a provided string,
   * and throwing a `LengthError` if it doesn't match the requirements.
   *
   * @remarks
   * The method currently checks if the string's length is above the
   * `maxLength` provided, although this is subject to change with the
   * addition of a third parameter.
   *
   * @alpha
   * @experimental
   */
  static checkLen(toTest: string, maxLength: number) {
    // TODO - Add "operator" string argument
    // Compare the provided string's length to the provided max length
    if (toTest.length > maxLength) {
      // Raise a new LengthError exception with a specified message
      throw new LengthError(`Length of string "${toTest}" is greater than ${maxLength}`);
    }
  }

  /**
   * Provides a string representation of a LengthError.
   * @returns A string in the format `ErrorName: Message`
   */
  override toString(): string {
    return `${this.name}: ${this.message}`;
  }
}
