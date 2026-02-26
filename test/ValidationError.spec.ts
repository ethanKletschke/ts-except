import ValidationError from "@/Validation/ValidationError";
import { expect } from "chai";

describe("ValidationError", function () {
  // Test constructor logic
  describe("constructor()", function () {
    it("should create an instance of ValidationError", function () {
      expect(new ValidationError("Invalid Input")).to.be.instanceOf(
        ValidationError,
        "Incorrect instance generated."
      );
    });

    it("should set the error message correctly", function () {
      expect(new ValidationError("Invalid Input").message).to.equal(
        "Invalid Input",
        "Incorrect assignment of ValidationError message."
      );
    });
  });

  describe("Throwing", function () {
    it("should be throwable and catchable", function () {
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
