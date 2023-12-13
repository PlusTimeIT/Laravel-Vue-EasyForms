// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { describe, expect, test } from "vitest";
import { TextField } from "../../../classes/fields";
import { ValidationHandler } from "../ValidationHandler";
import { convertMessageHolders } from "../../utils/Strings";

const textfield: TextField = new TextField({
  name: "test",
});

describe("Validation Functions", () => {
  test("test validation message converts", () => {
    expect(convertMessageHolders("email", "The :attribute field is required")).toEqual("The email field is required");
  });

  describe("test accepted validation", () => {
    test("accepted validation passes - on", () => {
      textfield.value = "on";
      expect(ValidationHandler.accepted(textfield)(textfield.value)).toBeTruthy();
    });
    test("accepted validation passes - yes", () => {
      textfield.value = "yes";
      expect(ValidationHandler.accepted(textfield)(textfield.value)).toBeTruthy();
    });
    test("accepted validation passes - 1", () => {
      textfield.value = 1;
      expect(ValidationHandler.accepted(textfield)(textfield.value)).toBeTruthy();
    });
    test("accepted validation passes - true", () => {
      textfield.value = true;
      expect(ValidationHandler.accepted(textfield)(textfield.value)).toBeTruthy();
    });

    test("accepted validation fails - off", () => {
      textfield.value = "off";
      expect(ValidationHandler.accepted(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("accepted validation fails - no", () => {
      textfield.value = "no";
      expect(ValidationHandler.accepted(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("accepted validation fails - 0", () => {
      textfield.value = 0;
      expect(ValidationHandler.accepted(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("accepted validation fails - false", () => {
      textfield.value = false;
      expect(ValidationHandler.accepted(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test array validation", () => {
    test("array validation passes - array empty", () => {
      textfield.value = [];
      expect(ValidationHandler.array(textfield)(textfield.value)).toBeTruthy();
    });
    test("array validation passes - array has items", () => {
      textfield.value = ["1", "2", "3"];
      expect(ValidationHandler.array(textfield)(textfield.value)).toBeTruthy();
    });
    test("array validation fails - string", () => {
      textfield.value = "";
      expect(ValidationHandler.array(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("array validation fails - number", () => {
      textfield.value = 4;
      expect(ValidationHandler.array(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("array validation fails - boolean", () => {
      textfield.value = false;
      expect(ValidationHandler.array(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("array validation fails - undefined", () => {
      textfield.value = undefined;
      expect(ValidationHandler.array(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test between validation", () => {
    test("between validation passes - 3", () => {
      textfield.value = 3;
      expect(ValidationHandler.between(textfield, 1, 4)(textfield.value)).toBeTruthy();
    });
    test("between validation passes - array (2)", () => {
      textfield.value = ["1", "4"];
      expect(ValidationHandler.between(textfield, 1, 4)(textfield.value)).toBeTruthy();
    });
    test("between validation passes - string (4)", () => {
      textfield.value = "test";
      expect(ValidationHandler.between(textfield, 1, 5)(textfield.value)).toBeTruthy();
    });

    test("between validation fails - 6", () => {
      textfield.value = 6;
      expect(ValidationHandler.between(textfield, 1, 4, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("between validation fails - empty array", () => {
      textfield.value = [];
      expect(ValidationHandler.between(textfield, 1, 4, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("between validation fails - string (10)", () => {
      textfield.value = "this fails";
      expect(ValidationHandler.between(textfield, 1, 4, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test boolean validation", () => {
    test("boolean validation passes - true", () => {
      textfield.value = true;
      expect(ValidationHandler.boolean(textfield)(textfield.value)).toBeTruthy();
    });
    test("boolean validation passes - false", () => {
      textfield.value = false;
      expect(ValidationHandler.boolean(textfield)(textfield.value)).toBeTruthy();
    });
    test("boolean validation passes - 1", () => {
      textfield.value = 1;
      expect(ValidationHandler.boolean(textfield)(textfield.value)).toBeTruthy();
    });
    test("boolean validation passes - 0", () => {
      textfield.value = 0;
      expect(ValidationHandler.boolean(textfield)(textfield.value)).toBeTruthy();
    });
    test('boolean validation passes - "1"', () => {
      textfield.value = "1";
      expect(ValidationHandler.boolean(textfield)(textfield.value)).toBeTruthy();
    });
    test('boolean validation passes - "0"', () => {
      textfield.value = "0";
      expect(ValidationHandler.boolean(textfield)(textfield.value)).toBeTruthy();
    });

    test("boolean validation fails - string", () => {
      textfield.value = "test string";
      expect(ValidationHandler.boolean(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("boolean validation fails - array", () => {
      textfield.value = [];
      expect(ValidationHandler.boolean(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("boolean validation fails - number", () => {
      textfield.value = 55;
      expect(ValidationHandler.boolean(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test confirmed validation", () => {
    test("confirmed validation passes", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_confirmation",
          value: true,
        }),
      ];
      textfield.value = true;
      expect(ValidationHandler.confirmed(textfield, fields, "Error Msg")(textfield.value)).toBeTruthy();
    });

    test("confirmed validation fails - mismatched", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_confirmation",
          value: false,
        }),
      ];
      textfield.value = true;
      expect(ValidationHandler.confirmed(textfield, fields, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("confirmed validation fails - no confirmation field", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_not",
          value: true,
        }),
      ];
      textfield.value = true;
      expect(ValidationHandler.confirmed(textfield, fields, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test decimal validation", () => {
    test("decimal validation passes - without max", () => {
      textfield.value = 6.01;
      expect(ValidationHandler.decimal(textfield, 2)(textfield.value)).toBeTruthy();
    });
    test("decimal validation passes - with max", () => {
      textfield.value = 6.01;
      expect(ValidationHandler.decimal(textfield, 1, 3)(textfield.value)).toBeTruthy();
    });

    test("decimal validation failed - without max", () => {
      textfield.value = 6;
      expect(ValidationHandler.decimal(textfield, 1, null, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("decimal validation failed - with max", () => {
      textfield.value = 6.9999;
      expect(ValidationHandler.decimal(textfield, 1, 3, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test declined validation", () => {
    test("declined validation passes - no", () => {
      textfield.value = "no";
      expect(ValidationHandler.declined(textfield)(textfield.value)).toBeTruthy();
    });
    test("declined validation passes - off", () => {
      textfield.value = "off";
      expect(ValidationHandler.declined(textfield)(textfield.value)).toBeTruthy();
    });
    test("declined validation passes - 0", () => {
      textfield.value = 0;
      expect(ValidationHandler.declined(textfield)(textfield.value)).toBeTruthy();
    });
    test("declined validation passes - false", () => {
      textfield.value = false;
      expect(ValidationHandler.declined(textfield)(textfield.value)).toBeTruthy();
    });

    test("declined validation fails - yes", () => {
      textfield.value = "yes";
      expect(ValidationHandler.declined(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("declined validation fails - on", () => {
      textfield.value = "on";
      expect(ValidationHandler.declined(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("declined validation fails - 1", () => {
      textfield.value = 1;
      expect(ValidationHandler.declined(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("declined validation fails - true", () => {
      textfield.value = true;
      expect(ValidationHandler.declined(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test different validation", () => {
    test("different validation passes - not matching", () => {
      const match: TextField = new TextField({
        name: "test",
        value: "yes",
      });
      textfield.value = "no";
      expect(ValidationHandler.different(textfield, match)(textfield.value)).toBeTruthy();
    });

    test("different validation fails - matching", () => {
      const match: TextField = new TextField({
        name: "test",
        value: "yes",
      });
      textfield.value = "yes";
      expect(ValidationHandler.different(textfield, match, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test digits validation", () => {
    test("digits validation passes - 3", () => {
      textfield.value = 3;
      expect(ValidationHandler.digits(textfield, 1)(textfield.value)).toBeTruthy();
    });

    test("digits validation fails - 6", () => {
      textfield.value = 555;
      expect(ValidationHandler.digits(textfield, 1, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test digits_between validation", () => {
    test("digits_between validation passes - 3", () => {
      textfield.value = 3;
      expect(ValidationHandler.digits_between(textfield, 1, 4)(textfield.value)).toBeTruthy();
    });

    test("digits_between validation fails - 6", () => {
      textfield.value = 6;
      expect(ValidationHandler.digits_between(textfield, 1, 4, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test doesnt_start_with validation", () => {
    test("doesnt_start_with validation passes - doesnt start with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.doesnt_start_with(textfield, ["hello"])(textfield.value)).toBeTruthy();
    });

    test("doesnt_start_with validation fails - starts with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.doesnt_start_with(textfield, ["good"], "Error Msg")(textfield.value)).toEqual(
        "Error Msg",
      );
    });
  });

  describe("test doesnt_end_with validation", () => {
    test("doesnt_end_with validation passes - doesnt end with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.doesnt_end_with(textfield, ["hello"])(textfield.value)).toBeTruthy();
    });

    test("doesnt_end_with validation fails - ends with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.doesnt_end_with(textfield, ["bye"], "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test email validation", () => {
    test("email validation passes - valid", () => {
      textfield.value = "test@test.com";
      expect(ValidationHandler.email(textfield)(textfield.value)).toBeTruthy();
      textfield.value = "123.test@test.com.au";
      expect(ValidationHandler.email(textfield)(textfield.value)).toBeTruthy();
      textfield.value = "hello.test@test.ca";
      expect(ValidationHandler.email(textfield)(textfield.value)).toBeTruthy();
    });

    test("email validation fails - does end with", () => {
      textfield.value = "testbademail";
      expect(ValidationHandler.email(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test ends_with validation", () => {
    test("ends_with validation passes - ends with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.ends_with(textfield, ["bye"])(textfield.value)).toBeTruthy();
    });

    test("ends_with validation fails - doesnt end with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.ends_with(textfield, ["hello"], "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test file validation", () => {
    test("file validation passes - is file", () => {
      textfield.value = new File(["test"], "test.txt", {
        type: "text/plain",
      });
      expect(ValidationHandler.file(textfield)(textfield.value)).toBeTruthy();
    });

    test("file validation fails - is not file", () => {
      textfield.value = false;
      expect(ValidationHandler.file(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test in_array validation", () => {
    test("in_array validation passes - present", () => {
      textfield.value = "hello";
      expect(ValidationHandler.in_array(textfield, ["hello"])(textfield.value)).toBeTruthy();
    });

    test("in_array validation fails - not present", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.in_array(textfield, ["hello"], "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test integer validation", () => {
    test("integer validation passes - 1", () => {
      textfield.value = 1;
      expect(ValidationHandler.integer(textfield)(textfield.value)).toBeTruthy();
    });

    test("integer validation fails - string", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.integer(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test lowercase validation", () => {
    test("lowercase validation passes - all lowercase", () => {
      textfield.value = "hello";
      expect(ValidationHandler.lowercase(textfield)(textfield.value)).toBeTruthy();
    });

    test("lowercase validation fails - has uppercase", () => {
      textfield.value = "Goodbye";
      expect(ValidationHandler.lowercase(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test max validation", () => {
    test("max validation passes - right length number", () => {
      textfield.value = 3;
      expect(ValidationHandler.max(textfield, 4)(textfield.value)).toBeTruthy();
    });
    test("max validation passes - right length array", () => {
      textfield.value = ["1", "4"];
      expect(ValidationHandler.max(textfield, 4)(textfield.value)).toBeTruthy();
    });
    test("max validation passes - right length string", () => {
      textfield.value = "test";
      expect(ValidationHandler.max(textfield, 5)(textfield.value)).toBeTruthy();
    });

    test("max validation fails - wrong length number", () => {
      textfield.value = 6;
      expect(ValidationHandler.max(textfield, 1, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("max validation fails - wrong length array", () => {
      textfield.value = ["1", "2"];
      expect(ValidationHandler.max(textfield, 1, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("max validation fails - wrong length string", () => {
      textfield.value = "this fails";
      expect(ValidationHandler.max(textfield, 1, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test max_digits validation", () => {
    test("max_digits validation passes - right length", () => {
      textfield.value = 3;
      expect(ValidationHandler.max_digits(textfield, 4)(textfield.value)).toBeTruthy();
    });

    test("max_digits validation fails - wrong length", () => {
      textfield.value = 555;
      expect(ValidationHandler.max_digits(textfield, 2, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test min validation", () => {
    test("min validation passes - right length number", () => {
      textfield.value = 3;
      expect(ValidationHandler.min(textfield, 2)(textfield.value)).toBeTruthy();
    });
    test("min validation passes - right length array", () => {
      textfield.value = ["1", "4"];
      expect(ValidationHandler.min(textfield, 1)(textfield.value)).toBeTruthy();
    });
    test("min validation passes - right length string", () => {
      textfield.value = "test";
      expect(ValidationHandler.min(textfield, 3)(textfield.value)).toBeTruthy();
    });

    test("min validation fails - wrong length number", () => {
      textfield.value = 1;
      expect(ValidationHandler.min(textfield, 2, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("min validation fails - wrong length array", () => {
      textfield.value = ["1", "2"];
      expect(ValidationHandler.min(textfield, 4, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("min validation fails - wrong length string", () => {
      textfield.value = "this";
      expect(ValidationHandler.min(textfield, 5, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test min_digits validation", () => {
    test("min_digits validation passes - right length", () => {
      textfield.value = 3;
      expect(ValidationHandler.min_digits(textfield, 1)(textfield.value)).toBeTruthy();
    });

    test("min_digits validation fails - wrong length", () => {
      textfield.value = 555;
      expect(ValidationHandler.min_digits(textfield, 4, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test multiple_of validation", () => {
    test("multiple_of validation passes - is multiple", () => {
      textfield.value = 10;
      expect(ValidationHandler.multiple_of(textfield, 5)(textfield.value)).toBeTruthy();
    });

    test("multiple_of validation fails - has remainders", () => {
      textfield.value = 555;
      expect(ValidationHandler.multiple_of(textfield, 21, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test not_in validation", () => {
    test("not_in validation passes - not present", () => {
      textfield.value = "hello";
      expect(ValidationHandler.not_in(textfield, ["goodbye"])(textfield.value)).toBeTruthy();
    });

    test("not_in validation fails - present", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.not_in(textfield, ["goodbye"], "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test not_regex validation", () => {
    test("not_regex validation passes - not present", () => {
      textfield.value = "string";
      expect(ValidationHandler.not_regex(textfield, /^[0-9]{1,5}$/)(textfield.value)).toBeTruthy();
    });

    test("not_regex validation fails - present", () => {
      textfield.value = 9;
      expect(ValidationHandler.not_regex(textfield, /^[0-9]{1,5}$/, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test numeric validation", () => {
    test("numeric validation passes - is numeric", () => {
      textfield.value = 98;
      expect(ValidationHandler.numeric(textfield)(textfield.value)).toBeTruthy();
    });

    test("numeric validation fails - not numeric", () => {
      textfield.value = "string";
      expect(ValidationHandler.numeric(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });

    test("numeric validation fails - numeric string", () => {
      textfield.value = "999khh";
      expect(ValidationHandler.numeric(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test regex validation", () => {
    test("regex validation passes - present", () => {
      textfield.value = 9;
      expect(ValidationHandler.regex(textfield, /^[0-9]{1,5}$/)(textfield.value)).toBeTruthy();
    });

    test("regex validation fails - not present", () => {
      textfield.value = "string";
      expect(ValidationHandler.regex(textfield, /^[0-9]{1,5}$/, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test required validation", () => {
    test("required validation passes - string", () => {
      textfield.value = "hello";
      expect(ValidationHandler.required(textfield)(textfield.value)).toBeTruthy();
    });
    test("required validation passes - array", () => {
      textfield.value = ["test"];
      expect(ValidationHandler.required(textfield)(textfield.value)).toBeTruthy();
    });
    test("required validation passes - number", () => {
      textfield.value = 7;
      expect(ValidationHandler.required(textfield)(textfield.value)).toBeTruthy();
    });

    test("required validation failed - empty string", () => {
      textfield.value = "";
      expect(ValidationHandler.required(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("required validation failed - empty array", () => {
      textfield.value = [];
      expect(ValidationHandler.required(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("required validation failed - invalid number", () => {
      textfield.value = 0;
      expect(ValidationHandler.required(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("required validation failed - undefined", () => {
      textfield.value = undefined;
      expect(ValidationHandler.required(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
    test("required validation failed - null", () => {
      textfield.value = null;
      expect(ValidationHandler.required(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test required_if validation", () => {
    test("required_if validation passes - matching", () => {
      textfield.value = "hello";
      expect(ValidationHandler.required_if(textfield, "hello", "hello")(textfield.value)).toBeTruthy();
    });

    test("required_if validation failed - not matching", () => {
      textfield.value = "";
      const requiredfield: TextField = new TextField({
        name: "test_not",
        value: "hello",
      });
      expect(ValidationHandler.required_if(textfield, requiredfield, "hello", "Error Msg")(textfield.value)).toEqual(
        "Error Msg",
      );
    });
  });

  describe("test required_unless validation", () => {
    test("required_unless validation passes - value not match and present", () => {
      const required: TextField = new TextField({
        name: "test_not",
        value: true,
      });
      textfield.value = "hello";
      expect(ValidationHandler.required_unless(textfield, required, false)(textfield.value)).toBeTruthy();
    });

    test("required_unless validation passes - value match and present", () => {
      const required: TextField = new TextField({
        name: "test_not",
        value: true,
      });
      textfield.value = "hello";
      expect(ValidationHandler.required_unless(textfield, required, true, "Error Msg")(textfield.value)).toBeTruthy();
    });

    test("required_unless validation failed - value not match and not present", () => {
      const required: TextField = new TextField({
        name: "test_not",
        value: true,
      });
      textfield.value = "";
      expect(ValidationHandler.required_unless(textfield, required, false, "Error Msg")(textfield.value)).toEqual(
        "Error Msg",
      );
    });
  });

  describe("test required_with validation", () => {
    test("required_with validation passes - required not empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: true,
        }),
      ];
      textfield.value = "hello";
      expect(ValidationHandler.required_with(textfield, fields, "test_with")(textfield.value)).toBeTruthy();
    });

    test("required_with validation failed - required is empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "",
        }),
      ];
      textfield.value = "hello";
      expect(ValidationHandler.required_with(textfield, fields, "test_with", "Error Msg")(textfield.value)).toEqual(
        "Error Msg",
      );
    });
  });

  describe("test required_with_all validation", () => {
    test("required_with_all validation passes - required not empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: true,
        }),
        new TextField({
          name: "testing",
          value: true,
        }),
      ];
      textfield.value = "hello";
      expect(
        ValidationHandler.required_with_all(textfield, fields, ["test_with", "testing"])(textfield.value),
      ).toBeTruthy();
    });

    test("required_with_all validation failed - required with 1 empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "",
        }),
        new TextField({
          name: "testing",
          value: true,
        }),
      ];
      textfield.value = "hello";
      expect(
        ValidationHandler.required_with_all(textfield, fields, ["test_with", "testing"], "Error Msg")(textfield.value),
      ).toEqual("Error Msg");
    });
    test("required_with_all validation failed - required with 2 empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "",
        }),
        new TextField({
          name: "testing",
          value: "",
        }),
      ];
      textfield.value = "hello";
      expect(
        ValidationHandler.required_with_all(textfield, fields, ["test_with", "testing"], "Error Msg")(textfield.value),
      ).toEqual("Error Msg");
    });
  });

  describe("test required_without validation", () => {
    test("required_without validation passes - required is empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "",
        }),
      ];
      textfield.value = "hello";
      expect(ValidationHandler.required_without(textfield, fields, ["test_with"])(textfield.value)).toBeTruthy();
    });

    test("required_without validation failed - required not empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "test",
        }),
      ];
      textfield.value = "hello";
      expect(
        ValidationHandler.required_without(textfield, fields, ["test_with"], "Error Msg")(textfield.value),
      ).toEqual("Error Msg");
    });

    test("required_without validation failed - required not empty, value empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "test",
        }),
      ];
      textfield.value = "";
      expect(
        ValidationHandler.required_without(textfield, fields, ["test_with"], "Error Msg")(textfield.value),
      ).toEqual("Error Msg");
    });
  });

  describe("test required_without_all validation", () => {
    test("required_without_all validation passes - required all empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "",
        }),
        new TextField({
          name: "testing",
          value: "",
        }),
      ];
      textfield.value = "hello";
      expect(
        ValidationHandler.required_without_all(textfield, fields, ["test_with", "testing"])(textfield.value),
      ).toBeTruthy();
    });

    test("required_without_all validation failed - required with 1 empty", () => {
      const fields: TextField[] = [
        new TextField({
          name: "test_with",
          value: "",
        }),
        new TextField({
          name: "testing",
          value: true,
        }),
      ];
      textfield.value = "hello";
      expect(
        ValidationHandler.required_without_all(
          textfield,
          fields,
          ["test_with", "testing"],
          "Error Msg",
        )(textfield.value),
      ).toEqual("Error Msg");
    });
  });

  describe("test same validation", () => {
    const field: TextField = new TextField({
      name: "test_with",
      value: "hello",
    });
    test("same validation passes - matching", () => {
      textfield.value = "hello";
      expect(ValidationHandler.same(textfield, field)(textfield.value)).toBeTruthy();
    });

    test("same validation failed - not matching", () => {
      textfield.value = "hello";
      field.value = "hello-goodbye";
      expect(ValidationHandler.same(textfield, field, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test starts_with validation", () => {
    test("starts_with validation passes - starts with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.starts_with(textfield, ["good"])(textfield.value)).toBeTruthy();
    });

    test("starts_with validation fails - doesnt start with", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.starts_with(textfield, ["hello"], "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test string validation", () => {
    test("string validation passes - is string", () => {
      textfield.value = "goodbye";
      expect(ValidationHandler.string(textfield)(textfield.value)).toBeTruthy();
    });

    test("string validation fails - is boolean", () => {
      textfield.value = true;
      expect(ValidationHandler.string(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });

    test("string validation fails - is number", () => {
      textfield.value = 1;
      expect(ValidationHandler.string(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test uppercase validation", () => {
    test("uppercase validation passes - all uppercase", () => {
      textfield.value = "HELLO";
      expect(ValidationHandler.uppercase(textfield)(textfield.value)).toBeTruthy();
    });

    test("uppercase validation fails - has lowerccase", () => {
      textfield.value = "MIXEd";
      expect(ValidationHandler.uppercase(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test ulid validation", () => {
    test("ulid validation passes - ulid", () => {
      textfield.value = "01G9HHNKWGBHCQX7VG3JKSZ055";
      expect(ValidationHandler.ulid(textfield)(textfield.value)).toBeTruthy();
    });

    test("ulid validation fails - not valid", () => {
      textfield.value = "9901G9HHNKWGBH";
      expect(ValidationHandler.ulid(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });

  describe("test uuid validation", () => {
    test("uuid validation passes - uuid v1", () => {
      textfield.value = "70bd4ad0-466c-11ee-b982-9f6f486d8991";
      expect(ValidationHandler.uuid(textfield)(textfield.value)).toBeTruthy();
    });
    test("uuid validation passes - uuid v3", () => {
      textfield.value = "612c8955-7b39-480a-99cb-ffccc3853143";
      expect(ValidationHandler.uuid(textfield)(textfield.value)).toBeTruthy();
    });
    test("uuid validation passes - uuid v4", () => {
      textfield.value = "b8e4c956-3057-4b70-954d-34ff31b9ff93";
      expect(ValidationHandler.uuid(textfield)(textfield.value)).toBeTruthy();
    });
    test("uuid validation passes - uuid v5", () => {
      textfield.value = "53f6018f-0acf-5af6-b232-d4c0994e240a";
      expect(ValidationHandler.uuid(textfield)(textfield.value)).toBeTruthy();
    });

    test("uuid validation fails - not valid", () => {
      textfield.value = "b8as4c956-30asd57-4bsd70-9asd54d-34ff31b993";
      expect(ValidationHandler.uuid(textfield, "Error Msg")(textfield.value)).toEqual("Error Msg");
    });
  });
});
