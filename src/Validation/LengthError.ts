import ValidationError from "./ValidationError";

export default class LengthError extends ValidationError {
  constructor(msg: string, private _maxLen: number) {
    super(msg);

    this.name = "LengthError";
  }

  get maxLength() {
    return this._maxLen;
  }

  static checkLen(toTest: string, maxLength: number) {
    if (toTest.length > maxLength) {
      throw new LengthError(`Length of "${toTest}" is greater than ${maxLength}`, maxLength);
    }
  }
}
