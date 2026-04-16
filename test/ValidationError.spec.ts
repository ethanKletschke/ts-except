import ValidationError from "@/Validation/ValidationError";
import { expect } from "chai";

describe("ValidationError", function () {
  // Test constructor logic
  describe("constructor()", function () {
    it("Creates an instance of ValidationError", function () {
      expect(new ValidationError("Invalid Input")).to.be.instanceOf(
        ValidationError,
        "Incorrect instance generated."
      );
    });

    it("Sets the error message correctly", function () {
      expect(new ValidationError("Invalid Input").message).to.equal(
        "Invalid Input",
        "Incorrect assignment of ValidationError message."
      );
    });

    it("Inherits from \"Error\"", function () {
      expect(new ValidationError("Invalid Input")).to.be.instanceOf(Error);
    });
  });

  describe("Throwing", function () {
    it("Is throwable and catchable", function () {
      let caught = false;

      try {
        throw new ValidationError("Invalid Input");
      } catch (err) {
        if (err instanceof ValidationError) {
          caught = true;
        }
      }

      expect(caught, "ValidationError not caught/thrown.").to.be.true;
    });
  });
});
