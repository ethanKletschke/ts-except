import { LengthError, ValidationError } from "@/index";
import { expect } from "chai";

describe("LengthError", function () {
  describe("constructor()", function () {
    it("Creates an instance of LengthError", function () {
      expect(new LengthError("")).to.be.an.instanceOf(LengthError);
    });

    it("Inherits from ValidationError", function () {
      expect(new LengthError("")).to.be.an.instanceOf(ValidationError);
    });

    it("Inherits from Error", function () {
      expect(new LengthError("")).to.be.an.instanceOf(Error);
    });

    it("Sets the error message correctly", function () {
      expect(new LengthError("Test").message).to.equal("Test");
    });
  });

  describe("Throwing", function () {
    it("Is throwable and catchable", function () {
      let caught = false;

      try {
        throw new LengthError("Too Short");
      } catch (err) {
        if (err instanceof LengthError) {
          caught = true;
        }
      }

      expect(caught).to.be.true;
    });
  });
});
