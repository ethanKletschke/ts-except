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
    super(msg);

    this.name = "LengthError";
  }

  static checkLen(toTest: string, maxLength: number) {
    if (toTest.length > maxLength) {
      throw new LengthError(`Length of string "${toTest}" is greater than ${maxLength}`);
    }
  }
}
