import { describe, test, expect } from "vitest";
import { ValidationRule } from "../../../classes/properties";
import { ValidationHelper } from "../ValidationHelper";
describe("Validation Helper function", () => {
  test("can get correct validation name", () => {
    const rule = new ValidationRule({
      name: "required",
      value: true,
      message: "This field is required.",
    });
    expect(ValidationHelper.getName(rule)).toBe("required");
  });
  test("can get correct validation name when mapped", () => {
    const rule = new ValidationRule({
      name: "in",
      value: true,
      message: "This field should be mapped.",
    });
    expect(ValidationHelper.getName(rule)).toBe("is_in");
  });
  test("can get correct validation function by name", () => {
    const rule = new ValidationRule({
      name: "required",
      value: true,
      message: "This field is required.",
    });
    const validation = ValidationHelper.getFunction(rule);
    expect(validation).toBeInstanceOf(Function);
  });
});
