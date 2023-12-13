// test-utils/formFunctions.test.js
import { describe, test, expect } from "vitest";
import { InputForm, ActionForm } from "../../../classes/forms";
import { ActionFormType, ColumnRestriction, InputFormType } from "../PropValidation";
import { FormTypes } from "../../../enums";
describe("ColumnRestriction function", () => {
  test("returns true for values between 1 and 12 (inclusive)", () => {
    // Test values within the allowed range
    expect(ColumnRestriction(1)).toBe(true);
    expect(ColumnRestriction(6)).toBe(true);
    expect(ColumnRestriction(12)).toBe(true);
  });

  test("returns false for values outside the range", () => {
    // Test values outside the allowed range
    expect(ColumnRestriction(0)).toBe(false);
    expect(ColumnRestriction(13)).toBe(false);
    expect(ColumnRestriction(20)).toBe(false);
  });
});

describe("InputFormType function", () => {
  test('returns true for InputForm with type "input-form"', () => {
    const inputForm = new InputForm({ type: FormTypes.Input });
    expect(InputFormType(inputForm)).toBe(true);
  });

  test("returns false for InputForm with a different type", () => {
    const inputForm = new InputForm({ type: FormTypes.Action });
    expect(InputFormType(inputForm)).toBe(false);
  });

  test("returns false for non-InputForm objects", () => {
    const nonInputForm = { type: FormTypes.Input };
    // @ts-expect-error: This line intentionally violates the type to test a specific issue.
    expect(InputFormType(nonInputForm)).toBe(false);
  });
});

describe("ActionFormType function", () => {
  test('returns true for ActionForm with type "action-form"', () => {
    const actionForm = new ActionForm({ type: FormTypes.Action });
    expect(ActionFormType(actionForm)).toBe(true);
  });

  const actionForm = new ActionForm({ type: FormTypes.Input });
  test("returns false for ActionForm with a different type", () => {
    expect(ActionFormType(actionForm)).toBe(false);
  });

  test("returns false for non-ActionForm objects", () => {
    const nonActionForm = { type: FormTypes.Action };
    // @ts-expect-error: This line intentionally violates the type to test a specific issue.
    expect(ActionFormType(nonActionForm)).toBe(false);
  });
});
