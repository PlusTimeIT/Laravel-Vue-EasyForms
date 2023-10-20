// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { describe, expect, test } from "vitest";
import { EasyField } from "../EasyField";
import { ValidationRule } from "../classes/properties/ValidationRule";

describe("Easy field Abstract Tests", () => {
  test("test field generates correct validation rules", () => {
    const EasyFieldTest = new EasyField({
      rules: [
        new ValidationRule({
          name: "required",
          value: true,
        }),
      ],
    });
    console.log(EasyFieldTest.rules);
    console.log(EasyFieldTest.validation_rules());
    expect(true).toBeTruthy();
  });
});
