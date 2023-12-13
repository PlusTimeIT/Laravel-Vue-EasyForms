import { TextField } from "../../classes/fields";
import { ValidationRule } from "../../classes/properties";

describe("EasyField Abstract Tests", () => {
  // pull from a concrete class that inherits the abstract class
  const field: TextField = new TextField({
    rules: [
      new ValidationRule({
        name: "required",
        value: true,
      }),
    ],
  });
  // Remaining functions to test for EasyField
  // load(form: InputForm | ActionForm, parent: EasyField): Promise<object | boolean>;
  test("test field finds correct validation rules", () => {
    const validation: ValidationRule | undefined = field.findValidation("required");
    expect(validation?.value).toBeTruthy();
  });

  test("test field can add custom error message", () => {
    const error_message = "this is a test.";
    field.addErrorMessage(error_message);
    expect(field.error_messages).toContain(error_message);
  });

  test("test field can clear error messages", () => {
    const error_message = "this is a test.";
    field.addErrorMessage(error_message);
    expect(field.error_messages).toContain(error_message);
    // successfully added error messages, now clear.
    field.clearErrorMessages();
    expect(field.error_messages.length).toBe(0);
  });

  test("test field can update loading status", () => {
    field.isLoading(true);
    expect(field.loading).toBeTruthy();
    field.isLoading(false);
    expect(field.loading).toBeFalsy();
  });

  test("test field can check if parent has loaded", () => {
    // add parent to field.
    const parent: TextField = new TextField({
      name: "parent_field",
      value: "value set",
    });
    // not required to work for this test but function does rely on this toi be set in app.
    field.depends_on = "parent_field";
    const hasParentLoaded = field.isParentPopulated(parent);
    expect(hasParentLoaded).toBeTruthy();
  });

  test("test field can set to valid", () => {
    field.validate();
    expect(field.validated).toBeTruthy();
  });
  test("test field can set to invalid", () => {
    field.invalidate();
    expect(field.validated).toBeFalsy();
  });

  test("test field can provide validation rules", () => {
    const validationRules: Array<any> = field.validationRules([field]);
    expect(validationRules.length).toBe(1);
  });
});
