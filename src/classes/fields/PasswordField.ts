import { EasyField } from "../../abstracts/EasyField";
import { Icon } from "../elements";
import { TextField } from "./TextField";

export class PasswordField extends EasyField {
  component = "easy-password";
  has_lower_case = true;
  has_min_length: number | boolean = 8;
  has_numbers = true;
  has_special = true;
  has_upper_case = true;
  show_strength_bar = false;
  strength_error_color = "error";
  strength_error_text = "Weak";
  strength_success_color = "success";
  strength_success_text = "Strong";
  strength_warning_color = "warning";
  strength_warning_text = "Medium";
  textfield: TextField = new TextField({
    name: "password_value",
    label: "Password Field",
    type: "password",
    prepend_inner_icon: new Icon({
      icon: "mdi-eye",
      size: "large",
    }),
  });
  view_mode = false;

  constructor(init?: Partial<PasswordField>) {
    super(init);
    Object.assign(this, init);
  }

  /**
   * Returns an array of all allowed props for custom Password Field
   *
   * @returns string[]
   */
  allowedProps(): string[] {
    return [
      "has_lower_case",
      "has_upper_case",
      "has_numbers",
      "has_special",
      "has_min_length",
      "show_strength_bar",
      "strength_error_color",
      "strength_error_text",
      "strength_warning_color",
      "strength_warning_text",
      "strength_success_color",
      "strength_success_text",
      "textfield",
      "view_mode",
    ];
  }
}
