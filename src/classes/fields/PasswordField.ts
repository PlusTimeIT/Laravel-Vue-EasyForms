import { EasyField } from "../../abstracts/EasyField";
import { isEmpty } from "../../utils";
import { TextField } from "./TextField";

export class PasswordField extends EasyField {
  component = "easy-password";
  lower_case = true;
  min_length: number | boolean = 8;
  numbers = true;
  special = true;
  upper_case = true;
  show_strength_bar = false;
  strength_error_color = "error";
  strength_error_text = "Weak";
  strength_success_color = "success";
  strength_success_text = "Strong";
  strength_warning_color = "warning";
  strength_warning_text = "Medium";
  textfield: TextField;
  view_mode = false;

  constructor(init?: Partial<PasswordField>) {
    super(init);

    this.textfield = new TextField(init as object);
    if (!isEmpty(init?.textfield)) {
      this.textfield = new TextField(init?.textfield);
      delete init?.textfield;
    }
    Object.assign(this, init);

    this.textfield.type = "password";
    this.textfield.component = "v-text-field";
    this.textfield.discriminator = "TextField";

    this.discriminator = "PasswordField";
  }

  /**
   * Returns an array of all allowed props for custom Password Field
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "label",
      "lower_case",
      "upper_case",
      "numbers",
      "special",
      "min_length",
      "show_strength_bar",
      "strength_error_color",
      "strength_error_text",
      "strength_warning_color",
      "strength_warning_text",
      "strength_success_color",
      "strength_success_text",
      "textfield",
      "view_mode",
      "component_type",
    ];
  }
}