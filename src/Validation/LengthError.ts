import ValidationError from "./ValidationError";

/**
 *
 * @remarks
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
