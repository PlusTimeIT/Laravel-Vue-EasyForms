var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as ServerCall } from "./ServerCall-a611b3a4.js";
import { A as AxiosCalls } from "./ContentTypes-783ab8ea.js";
import { D as DensityTypes } from "./ScrollStrategyTypes-b9c8a739.js";
import { V as ValidationMessages, b as ValidationUpdates, T as TextVariantTypes, D as DirectionType, F as FilterModeTypes, C as ColorPickerModeTypes, I as InputModeTypes, c as ViewModeTypes, a as TimePickerModeTypes } from "./ViewModeTypes-6930220b.js";
import { a as isArray, b as isNumber, c as isString, i as isEmpty, d as isNull, e as isFile, f as isNumeric, P as PluginOptions, s as store } from "./Types-dbac3a4a.js";
import { V as ValidationRule, C as CheckboxGroupValue } from "./ValidationRule-73a2fa9e.js";
import { I as Icon, T as Tooltip } from "./Tooltip-dd8eaf56.js";
import { S as StringHelper, G as GotProps } from "./GotProps-440b6309.js";
import { M as Menu } from "./Menu-ed550df2.js";
const convertMessageHolders = (name, message, params) => StringHelper.convertMessageHolders(name, message, params);
const _ValidationHandler = class _ValidationHandler {
};
__publicField(_ValidationHandler, "accepted_booleans", [true, false, 1, 0, "0", "1"]);
__publicField(_ValidationHandler, "accepted_values", ["yes", "on", 1, true]);
__publicField(_ValidationHandler, "declined_values", ["no", "off", 0, false]);
__publicField(_ValidationHandler, "accepted", (field, message = ValidationMessages.Accepted) => (value) => {
  return _ValidationHandler.accepted_values.includes(value) || convertMessageHolders(field.name, message);
});
__publicField(_ValidationHandler, "array", (field, message = ValidationMessages.Array) => (value) => isArray(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "between", (field, min, max, message) => (value) => {
  const message_params = [
    { key: ":min", replace_with: min },
    { key: ":max", replace_with: max }
  ];
  if (isNumber(value))
    return value > min && value < max || convertMessageHolders(field.name, message ?? ValidationMessages.BetweenNumeric, message_params);
  if (isString(value) || isArray(value))
    return value.length > min && value.length < max || convertMessageHolders(
      field.name,
      message ?? (isString(value) ? ValidationMessages.BetweenString : ValidationMessages.BetweenArray),
      message_params
    );
  return convertMessageHolders(field.name, message ?? ValidationMessages.BetweenFile, message_params);
});
__publicField(_ValidationHandler, "boolean", (field, message = ValidationMessages.Boolean) => (value) => _ValidationHandler.accepted_booleans.includes(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "confirmed", (field, fields, message = ValidationMessages.Confirmed) => (value) => {
  const confirmed_field = fields.find((f) => f.name === field.name + "_confirmation");
  if (isEmpty(confirmed_field))
    return convertMessageHolders(field.name, message);
  return confirmed_field.value === value || convertMessageHolders(field.name, message);
});
__publicField(_ValidationHandler, "decimal", (field, min, max = null, message = ValidationMessages.Decimal) => (value) => {
  const replacement = max ? `between ${min} and ${max}` : min;
  const message_params = [{ key: ":decimal", replace_with: replacement }];
  if (Math.floor(value) === value)
    return convertMessageHolders(field.name, message, message_params);
  const decimal_count = value.toString().split(".")[1].length;
  if (isNull(max))
    return decimal_count === min || convertMessageHolders(field.name, message, message_params);
  return decimal_count > min && decimal_count < max || convertMessageHolders(field.name, message, message_params);
});
__publicField(_ValidationHandler, "declined", (field, message = ValidationMessages.Declined) => (value) => _ValidationHandler.declined_values.includes(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "different", (field, comparison, message = ValidationMessages.Different) => (value) => value !== comparison.value || convertMessageHolders(field.name, message, [
  { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") }
]));
__publicField(_ValidationHandler, "digits", (field, length, message = ValidationMessages.Digits) => (value) => isNumber(value) && value.toString().length === length || convertMessageHolders(field.name, message, [{ key: ":digits", replace_with: length }]));
__publicField(_ValidationHandler, "digits_between", (field, min, max, message = ValidationMessages.DigitsBetween) => (value) => {
  const message_params = [
    { key: ":min", replace_with: min },
    { key: ":max", replace_with: max }
  ];
  if (!isNumber(value))
    return convertMessageHolders(field.name, message, message_params);
  return value > min && value < max || convertMessageHolders(field.name, message, message_params);
});
__publicField(_ValidationHandler, "doesnt_end_with", (field, values, message = ValidationMessages.DoesntEndWith) => (value) => values.filter((pre) => !value.endsWith(pre)).length > 0 || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]));
__publicField(_ValidationHandler, "doesnt_start_with", (field, values, message = ValidationMessages.DoesntStartWith) => (value) => values.filter((pre) => !value.startsWith(pre)).length > 0 || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]));
__publicField(_ValidationHandler, "email", (field, message = ValidationMessages.Email) => (value) => {
  const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return pattern.test(value) || convertMessageHolders(field.name, message);
});
__publicField(_ValidationHandler, "ends_with", (field, values, message = ValidationMessages.EndsWith) => (value) => values.filter((pre) => value.endsWith(pre)).length > 0 || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]));
__publicField(_ValidationHandler, "file", (field, message = ValidationMessages.File) => (value) => isFile(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "in_array", (field, values, message = ValidationMessages.InArray) => (value) => values.includes(value) || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]));
__publicField(_ValidationHandler, "integer", (field, message = ValidationMessages.Integer) => (value) => isNumber(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "is_in", (field, values, message = ValidationMessages.In) => (value) => values.includes(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "lowercase", (field, message = ValidationMessages.Lowercase) => (value) => value.toLowerCase() === value || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "max", (field, max, message) => (value) => {
  const message_params = [{ key: ":max", replace_with: max }];
  if (isNumber(value))
    return value <= max || convertMessageHolders(field.name, message ?? ValidationMessages.MaxNumeric, message_params);
  if (isString(value) || isArray(value))
    return value.length <= max || convertMessageHolders(
      field.name,
      message ?? (isString(value) ? ValidationMessages.MaxString : ValidationMessages.MaxArray),
      message_params
    );
  return convertMessageHolders(field.name, message ?? ValidationMessages.MaxFile, message_params);
});
__publicField(_ValidationHandler, "max_digits", (field, max, message = ValidationMessages.MaxDigits) => (value) => isNumber(value) && value.toString().length <= max || convertMessageHolders(field.name, message, [{ key: ":max", replace_with: max }]));
__publicField(_ValidationHandler, "min", (field, min, message) => (value) => {
  const message_params = [{ key: ":min", replace_with: min }];
  if (isNumber(value))
    return value >= min || convertMessageHolders(field.name, message ?? ValidationMessages.MinNumeric, message_params);
  if (isString(value) || isArray(value))
    return value.length >= min || convertMessageHolders(
      field.name,
      message ?? (isString(value) ? ValidationMessages.MinString : ValidationMessages.MinArray),
      message_params
    );
  return convertMessageHolders(field.name, message ?? ValidationMessages.MinFile, message_params);
});
__publicField(_ValidationHandler, "min_digits", (field, min, message = ValidationMessages.MinDigits) => (value) => isNumber(value) && value.toString().length >= min || convertMessageHolders(field.name, message, [{ key: ":min", replace_with: min }]));
__publicField(_ValidationHandler, "multiple_of", (field, multiple, message = ValidationMessages.MultipleOf) => (value) => isNumber(value) && value % multiple === 0 || convertMessageHolders(field.name, message, [{ key: ":value", replace_with: multiple }]));
__publicField(_ValidationHandler, "not_in", (field, values, message = ValidationMessages.NotIn) => (value) => !values.includes(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "not_regex", (field, pattern, message = ValidationMessages.NotRegex) => (value) => !pattern.test(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "numeric", (field, message = ValidationMessages.Numeric) => (value) => isNumeric(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "regex", (field, pattern, message = ValidationMessages.Regex) => (value) => pattern.test(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "required", (field, message = ValidationMessages.Required) => (value) => !isEmpty(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "required_if", (field, comparison, comparison_value, message = ValidationMessages.RequiredIf) => (value) => {
  return (comparison.value === comparison_value ? !isEmpty(value) : true) || convertMessageHolders(field.name, message, [
    { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") },
    { key: ":value", replace_with: comparison_value }
  ]);
});
__publicField(_ValidationHandler, "required_unless", (field, comparison, comparison_value, message = ValidationMessages.RequiredUnless) => (value) => {
  return (comparison.value !== comparison_value ? !isEmpty(value) : true) || convertMessageHolders(field.name, message, [
    { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") },
    { key: ":values", replace_with: isArray(comparison_value) ? comparison_value.join(",") : comparison_value }
  ]);
});
__publicField(_ValidationHandler, "required_with", (field, fields, values, message = ValidationMessages.RequiredWith) => (value) => {
  const required_fields = fields.filter((f) => values.includes(f.name) && !isEmpty(f.value));
  return !isEmpty(required_fields) && !isEmpty(value) || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);
});
__publicField(_ValidationHandler, "required_with_all", (field, fields, values, message = ValidationMessages.RequiredWithAll) => (value) => {
  const required_fields = fields.filter((f) => values.includes(f.name) && !isEmpty(f.value));
  return required_fields.length === values.length && !isEmpty(value) || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);
});
__publicField(_ValidationHandler, "required_without", (field, fields, values, message = ValidationMessages.RequiredWithout) => (value) => {
  const required_fields = fields.filter((f) => values.includes(f.name) && isEmpty(f.value));
  return !isEmpty(required_fields) && !isEmpty(value) || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);
});
__publicField(_ValidationHandler, "required_without_all", (field, fields, values, message = ValidationMessages.RequiredWithoutAll) => (value) => {
  const required_fields = fields.filter((f) => values.includes(f.name) && isEmpty(f.value));
  return required_fields.length === values.length && !isEmpty(value) || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);
});
__publicField(_ValidationHandler, "same", (field, comparison, message = ValidationMessages.Same) => (value) => value === comparison.value || convertMessageHolders(field.name, message, [
  { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") }
]));
__publicField(_ValidationHandler, "starts_with", (field, values, message = ValidationMessages.StartsWith) => (value) => values.filter((pre) => value.startsWith(pre)).length > 0 || convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]));
__publicField(_ValidationHandler, "string", (field, message = ValidationMessages.String) => (value) => isString(value) || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "ulid", (field, message = ValidationMessages.Ulid) => (value) => {
  const pattern = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/;
  return !!value.match(pattern) || convertMessageHolders(field.name, message);
});
__publicField(_ValidationHandler, "uppercase", (field, message = ValidationMessages.Uppercase) => (value) => value.toUpperCase() === value || convertMessageHolders(field.name, message));
__publicField(_ValidationHandler, "uuid", (field, message = ValidationMessages.Uuid) => (value) => {
  const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return pattern.test(value) || convertMessageHolders(field.name, message);
});
let ValidationHandler = _ValidationHandler;
class ValidationHelper {
  static exists(rule) {
    if (typeof ValidationHandler[rule.name] === "undefined") {
      if (!(rule.name in ValidationUpdates)) {
        return false;
      }
    }
    return true;
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getFunction(rule) {
    if (typeof ValidationHandler[rule.name] === "undefined") {
      if (!(rule.name in ValidationUpdates)) {
        return ValidationHandler[ValidationUpdates[rule.name]];
      }
    }
    return ValidationHandler[rule.name];
  }
  static getName(rule) {
    if (typeof ValidationHandler[rule.name] === "undefined") {
      if (!(rule.name in ValidationUpdates)) {
        return ValidationUpdates[rule.name];
      }
    }
    return rule.name;
  }
}
const _FunctionBuilder = class _FunctionBuilder {
  static buildArgs(field, fields, rule) {
    let args = [];
    args.push(field);
    if (_FunctionBuilder.shouldPassFieldMessage(rule.name)) {
      if (!isEmpty(rule.message)) {
        args.push(rule.message);
      }
      return args;
    }
    if (_FunctionBuilder.shouldPassAllFields(rule.name)) {
      args.push(fields);
    }
    if (_FunctionBuilder.shouldPassArray(rule.name)) {
      args.push((rule.value || "").split(","));
    }
    if (_FunctionBuilder.shouldSplit(rule.name)) {
      if (rule.value.includes(",")) {
        args = [...args, ...(rule.value || "").split(",")];
      } else {
        args.push(rule.value);
      }
    }
    if (_FunctionBuilder.shouldPass(rule.name)) {
      args.push(rule.value);
    }
    if (!isEmpty(rule.message)) {
      args.push(rule.message);
    }
    return args;
  }
  /** Validation requires all fields  */
  static shouldPassAllFields(name) {
    return _FunctionBuilder.expectingAllFields.includes(name);
  }
  /** Validation requires value to be an array  */
  static shouldPassArray(name) {
    return _FunctionBuilder.expectingArray.includes(name);
  }
  /** Validation only requires field and message  */
  static shouldPassFieldMessage(name) {
    return _FunctionBuilder.expectingFieldMessage.includes(name);
  }
  /** Validation value should check for splitting  */
  static shouldSplit(name) {
    return _FunctionBuilder.expectingSplit.includes(name);
  }
  /** Validation value should be passed directly.  */
  static shouldPass(name) {
    return _FunctionBuilder.expectingSingleValue.includes(name);
  }
};
__publicField(_FunctionBuilder, "expectingArray", [
  "doesnt_end_with",
  "doesnt_start_with",
  "ends_with",
  "in_array",
  "is_in",
  "not_in",
  "required_with",
  "required_with_all",
  "required_without",
  "required_without_all",
  "starts_with"
]);
__publicField(_FunctionBuilder, "expectingFieldMessage", [
  "accepted",
  "array",
  "boolean",
  "declined",
  "email",
  "file",
  "integer",
  "lowercase",
  "numeric",
  "required",
  "string",
  "ulid",
  "uppercase",
  "uuid"
]);
__publicField(_FunctionBuilder, "expectingSplit", ["between", "decimal", "digits_between"]);
__publicField(_FunctionBuilder, "expectingSingleValue", [
  "digits",
  "max",
  "max_digits",
  "min",
  "min_digits",
  "multiple_of",
  "not_regex",
  "regex"
]);
__publicField(_FunctionBuilder, "expectingAllFields", [
  "confirmed",
  "required_with",
  "required_with_all",
  "required_without",
  "required_without_all"
]);
__publicField(_FunctionBuilder, "expectingComparison", ["different", "same"]);
__publicField(_FunctionBuilder, "expectingComparisonAndValue", ["required_if", "required_unless"]);
let FunctionBuilder = _FunctionBuilder;
class EasyField extends GotProps {
  /**
   * Creates an instance of EasyField.
   * @param {Partial<EasyField>} [init] - Initialization object for setting properties.
   */
  constructor(init) {
    super(init);
    __publicField(this, "active", false);
    __publicField(this, "append_icon");
    __publicField(this, "autofocus", false);
    __publicField(this, "base_color");
    __publicField(this, "bg_color");
    __publicField(this, "center_affix", false);
    __publicField(this, "clear_icon");
    __publicField(this, "clearable", false);
    __publicField(this, "color");
    __publicField(this, "cols", 12);
    __publicField(this, "component", "");
    __publicField(this, "component_type");
    __publicField(this, "density", DensityTypes.Default);
    __publicField(this, "depends_on", "");
    __publicField(this, "disabled", false);
    __publicField(this, "discriminator", "");
    __publicField(this, "eager", false);
    __publicField(this, "error", false);
    __publicField(this, "error_messages", []);
    __publicField(this, "flat", false);
    __publicField(this, "focused", false);
    __publicField(this, "help", "");
    __publicField(this, "hide_details", false);
    __publicField(this, "hint");
    __publicField(this, "id");
    __publicField(this, "label", "");
    __publicField(this, "loading", false);
    __publicField(this, "max_errors", 1);
    __publicField(this, "messages", []);
    __publicField(this, "name", "");
    __publicField(this, "offset", 0);
    __publicField(this, "order", 0);
    __publicField(this, "outlined", false);
    __publicField(this, "parent_loaded", false);
    __publicField(this, "persistent_clear", false);
    __publicField(this, "persistent_counter", false);
    __publicField(this, "persistent_hint", false);
    __publicField(this, "persistent_placeholder", false);
    __publicField(this, "placeholder", "");
    __publicField(this, "prefix");
    __publicField(this, "prepend_icon");
    __publicField(this, "readonly", false);
    __publicField(this, "require_confirmation", false);
    __publicField(this, "required", false);
    __publicField(this, "role");
    __publicField(this, "rounded", false);
    __publicField(this, "rules", []);
    __publicField(this, "show_if", false);
    __publicField(this, "show_if_parent", "");
    __publicField(this, "show_if_value");
    __publicField(this, "single_line", false);
    __publicField(this, "suffix");
    __publicField(this, "theme");
    __publicField(this, "tooltip");
    __publicField(this, "type", "");
    __publicField(this, "validate_on");
    __publicField(this, "validated", true);
    __publicField(this, "value");
    __publicField(this, "variant", TextVariantTypes.Filled);
    if (!isEmpty(init == null ? void 0 : init.clear_icon)) {
      this.clear_icon = new Icon(init == null ? void 0 : init.clear_icon);
      init == null ? true : delete init.clear_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.append_icon)) {
      this.append_icon = new Icon(init == null ? void 0 : init.append_icon);
      init == null ? true : delete init.append_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.prepend_icon)) {
      this.prepend_icon = new Icon(init == null ? void 0 : init.prepend_icon);
      init == null ? true : delete init.prepend_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.prepend_icon)) {
      this.prepend_icon = new Icon(init == null ? void 0 : init.prepend_icon);
      init == null ? true : delete init.prepend_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.tooltip)) {
      this.tooltip = new Tooltip(init == null ? void 0 : init.tooltip);
      init == null ? true : delete init.tooltip;
    }
    Object.assign(this, init);
    if (!this.required) {
      this.required = this.rules.some((rule) => rule.name === "required" && rule.value);
    } else {
      const validation = this.rules.find(
        (rule) => rule.name === "required"
      );
      if (validation) {
        validation.value = true;
      } else {
        this.rules.push(new ValidationRule({ name: "required", value: true }));
      }
    }
    if (this.clearable && isEmpty(this.clear_icon)) {
      this.clear_icon = new Icon({ icon: "mdi-close", color: "secondary" });
    }
    const PLUGIN_OPTIONS = PluginOptions.getInstance();
    if (PLUGIN_OPTIONS.tags_on_placeholder && !isEmpty(this.placeholder)) {
      if (this.required) {
        this.placeholder += PLUGIN_OPTIONS.required_placeholder_text;
      } else {
        if (!PLUGIN_OPTIONS.required_tags_only) {
          this.placeholder += PLUGIN_OPTIONS.optional_placeholder_text;
        }
      }
    }
    if (PLUGIN_OPTIONS.tags_on_labels && !isEmpty(this.label)) {
      if (this.required) {
        this.label += PLUGIN_OPTIONS.required_label_text;
      } else {
        if (!PLUGIN_OPTIONS.required_tags_only) {
          this.label += PLUGIN_OPTIONS.optional_label_text;
        }
      }
    }
  }
  addErrorMessage(message) {
    this.validated = false;
    if (isArray(this.error_messages)) {
      const found = this.error_messages.find((msg) => msg == message);
      if (!found) {
        this.error_messages.push(message);
      }
    }
    return this;
  }
  clearErrorMessages() {
    this.error_messages = [];
    return this;
  }
  /**
   * Invalidate the field's validation state.
   * @returns {this} The EasyField instance for method chaining.
   */
  invalidate() {
    this.validated = false;
    return this;
  }
  /**
   * Set the loading state of the field.
   * @param {boolean} loading - Whether the field is in a loading state.
   * @returns {this} The EasyField instance for method chaining.
   */
  isLoading(loading) {
    this.loading = loading;
    return this;
  }
  /**
   * Check if the parent field is loaded.
   * @param {EasyField} parent_field - The parent field to check against.
   * @returns {boolean} True if the parent field is loaded; otherwise, false.
   */
  isParentLoaded(parent_field) {
    if (isEmpty(this.depends_on)) {
      return true;
    }
    return !isEmpty(parent_field == null ? void 0 : parent_field.value);
  }
  /**
   * Load data for the field asynchronously.
   * @param {string} form_name - The name of the form.
   * @param {EasyField} parent - The parent field for additional data.
   * @returns {Promise<object|boolean>} A Promise that resolves to the loaded data or false if loading fails.
   */
  async load(form, parent) {
    var _a, _b, _c;
    let response;
    this.isLoading(true);
    try {
      let additional_load_data = {};
      if (!isEmpty(this.depends_on)) {
        additional_load_data = {
          parent_name: parent.name,
          parent_value: parent.value
        };
      }
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/fields/load"),
        ServerCall.mergeData({ form_name: form.name, field_name: this.name }, additional_load_data),
        form.axios
      );
      if (response.status === 200 || response.status === 204) {
        this.isLoading(((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.loader) ?? false);
        if (!((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.result)) {
          return false;
        }
        const tempData = JSON.parse(JSON.stringify((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.data));
        if (isEmpty(tempData)) {
          return false;
        }
        return tempData;
      }
    } catch (error) {
      return false;
    }
    return false;
  }
  /**
   * Update the field based on the parent field.
   * @param {this} parent_field - The parent field to check against.
   * @returns {boolean} True if the parent field is loaded; otherwise, false.
   */
  update(parent_field) {
    if (isEmpty(this.depends_on)) {
      return true;
    }
    return !isEmpty(parent_field.value);
  }
  /**
   * Validate the field.
   * @returns {this} The EasyField instance for method chaining.
   */
  validate() {
    this.validated = true;
    return this;
  }
  /**
   * Validate the field.
   * @returns {this} The EasyField instance for method chaining.
   */
  findValidation(name) {
    return this.rules.find((rule) => rule.name === name);
  }
  /**
   * Apply validation rules to the field.
   * @param {FieldType[]} [fields] - An optional array of fields to use in validation.
   * @returns {any[]} An array of validation results.
   */
  validationRules(fields) {
    return this.rules.filter((rule) => ValidationHelper.exists(rule)).map((rule) => {
      return ValidationHandler[rule.name](
        ...FunctionBuilder.buildArgs(this, fields ?? [], rule)
      );
    });
  }
}
class AutoCompleteField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "auto_select_first", false);
    __publicField(this, "chips", false);
    __publicField(this, "closable_chips", false);
    __publicField(this, "close_text", "$vuetify.close");
    __publicField(this, "component", "v-autocomplete");
    __publicField(this, "counter", false);
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "filter_keys", ["title"]);
    __publicField(this, "filter_mode", FilterModeTypes.Intersection);
    __publicField(this, "hide_no_data", false);
    __publicField(this, "hide_selected", false);
    __publicField(this, "item_children", false);
    __publicField(this, "item_color");
    __publicField(this, "item_props", "props");
    __publicField(this, "item_title", "title");
    __publicField(this, "item_value", "value");
    __publicField(this, "items", []);
    __publicField(this, "menu", false);
    __publicField(this, "multiple", false);
    __publicField(this, "no_data_text", "$vuetify.noDataText");
    __publicField(this, "no_filter", false);
    __publicField(this, "open_on_clear", false);
    __publicField(this, "open_text", "$vuetify.open");
    __publicField(this, "prepend_inner_icon");
    __publicField(this, "return_object", false);
    __publicField(this, "search", "");
    __publicField(this, "transition", false);
    __publicField(this, "type", "text");
    Object.assign(this, init);
    this.discriminator = "AutoCompleteField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Autocomplete
   * https://vuetifyjs.com/en/api/v-autocomplete/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      "append_icon",
      "autofocus",
      "auto_select_first",
      "base_color",
      "bg_color",
      "center_affix",
      "chips",
      "clearable",
      "clear_icon",
      "closable_chips",
      "close_text",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "disabled",
      "eager",
      "error",
      "error_messages",
      "filter_keys",
      "filter_mode",
      "flat",
      "focused",
      "hide_details",
      "hide_no_data",
      "hide_selected",
      "hint",
      "id",
      "item_children",
      "item_color",
      "item_props",
      "items",
      "item_title",
      "item_value",
      "label",
      "loading",
      "max_errors",
      "menu",
      "messages",
      "multiple",
      "name",
      "no_data_text",
      "no_filter",
      "open_on_clear",
      "open_text",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      "prepend_icon",
      "prepend_inner_icon",
      "readonly",
      "return_object",
      "reverse",
      "role",
      "rounded",
      "rules",
      "search",
      "single_line",
      "suffix",
      "theme",
      "transition",
      "type",
      "value",
      "validate_on",
      "variant"
    ];
  }
  loadItems(items) {
    this.items = items;
    return this;
  }
}
class CheckboxField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "center_affix", true);
    __publicField(this, "component", "v-checkbox");
    __publicField(this, "defaults_target");
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "false_icon", "$checkboxOff");
    __publicField(this, "false_value");
    __publicField(this, "hide_details", false);
    __publicField(this, "indeterminate", false);
    __publicField(this, "indeterminate_icon", "$checkboxIndeterminate");
    __publicField(this, "multiple", false);
    __publicField(this, "ripple", false);
    __publicField(this, "transition", false);
    __publicField(this, "true_icon", "$checkboxOn");
    __publicField(this, "true_value");
    __publicField(this, "type", "checkbox");
    Object.assign(this, init);
    this.discriminator = "CheckboxField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      // displayed as easy-icon with tooltip.
      //'append_icon',
      "autofocus",
      "center_affix",
      "color",
      "cols",
      "default_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "false_value",
      "focused",
      "hide_details",
      "hint",
      "id",
      "indeterminate",
      "indeterminate_icon",
      "label",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "validate_on"
      // value causes errors due to v-model binding
      //'value'
    ];
  }
}
class CheckboxGroupField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "class", "ml-auto");
    __publicField(this, "component", "easy-checkbox-group");
    __publicField(this, "items", []);
    __publicField(this, "switch");
    __publicField(this, "value", []);
    Object.assign(this, init);
    this.discriminator = "CheckboxGroupField";
  }
  addAllItems() {
    this.clear();
    for (const checkboxValue of this.items) {
      checkboxValue.value = true;
      this.value.push(new CheckboxGroupValue({ key: checkboxValue.name, value: checkboxValue.value }));
    }
  }
  addItem(key, value) {
    this.value.push(new CheckboxGroupValue({ key, value }));
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["class", "cols", "items", "label", "switch"];
  }
  clear() {
    this.value = [];
    for (const checkboxValue of this.items) {
      checkboxValue.value = false;
    }
  }
  find(checkbox) {
    return this.value.find((c) => c.key == checkbox.name);
  }
  removeItem(checkboxValue) {
    const index = this.value.indexOf(checkboxValue);
    this.value.splice(index, 1);
  }
}
class TextField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "append_inner_icon");
    __publicField(this, "component", "v-text-field");
    __publicField(this, "counter", false);
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "dirty", false);
    __publicField(this, "masking");
    __publicField(this, "prepend_inner_icon");
    if (!isEmpty(init == null ? void 0 : init.append_inner_icon)) {
      this.append_inner_icon = new Icon(init == null ? void 0 : init.append_inner_icon);
      init == null ? true : delete init.append_inner_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.prepend_inner_icon)) {
      this.prepend_inner_icon = new Icon(init == null ? void 0 : init.prepend_inner_icon);
      init == null ? true : delete init.prepend_inner_icon;
    }
    Object.assign(this, init);
    this.discriminator = "TextField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Text-Field
   * https://vuetifyjs.com/en/api/v-text-field/
   *
   * Currently missing the following properties:
   * counter-value
   * model-modifiers
   * model-value
   * validation-value
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      // "append_icon",
      // "append_inner_icon",
      "autofocus",
      "attach",
      "base_color",
      "bg_color",
      "center_affix",
      "clearable",
      "component_type",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "dirty",
      "disabled",
      "error",
      "error_messages",
      "flat",
      "focused",
      "hide_details",
      "hint",
      "id",
      "label",
      "loading",
      "masking",
      "max_errors",
      "messages",
      "name",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      // "prepend_icon",
      // "prepend_inner_icon",
      "readonly",
      "reverse",
      "role",
      "rounded",
      // 'rules',
      "single_line",
      "suffix",
      "theme",
      "type",
      "validate_on",
      "variant"
    ];
  }
}
class ColorPicker extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "border", false);
    __publicField(this, "canvas_height", 150);
    __publicField(this, "dot_size", 10);
    __publicField(this, "elevation");
    __publicField(this, "hide_canvas", false);
    __publicField(this, "hide_inputs", false);
    __publicField(this, "hide_sliders", false);
    __publicField(this, "mode", ColorPickerModeTypes.Hex);
    __publicField(this, "modes", [
      ColorPickerModeTypes.Hex,
      ColorPickerModeTypes.Hexa,
      ColorPickerModeTypes.Hsl,
      ColorPickerModeTypes.Hsla,
      ColorPickerModeTypes.Rgb,
      ColorPickerModeTypes.Rgba
    ]);
    __publicField(this, "position");
    __publicField(this, "rounded", false);
    __publicField(this, "show_swatches", false);
    __publicField(this, "swatches");
    __publicField(this, "swatches_max_height", 150);
    __publicField(this, "tag", "div");
    __publicField(this, "width", "300");
    Object.assign(this, init);
    this.discriminator = "ColorPicker";
  }
  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "border",
      "canvas_height",
      "color",
      "disabled",
      "dot_size",
      "elevation",
      "hide_canvas",
      "hide_inputs",
      "hide_sliders",
      "mode",
      "modes",
      "position",
      "rounded",
      "show_swatches",
      "swatches",
      "swatches_max_height",
      "tag",
      "theme"
      // 'width'
    ];
  }
}
class ColorPickerField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "component", "easy-color-picker");
    __publicField(this, "menu", new Menu());
    __publicField(this, "picker", new ColorPicker({}));
    __publicField(this, "textfield", new TextField({
      name: "picker_value",
      label: "Color Picker",
      readonly: true,
      prepend_inner_icon: new Icon({
        icon: "mdi-square-rounded",
        size: "x-large"
      })
    }));
    if (!isEmpty(init == null ? void 0 : init.menu)) {
      this.menu = new Menu(init == null ? void 0 : init.menu);
      init == null ? true : delete init.menu;
    }
    if (!isEmpty(init == null ? void 0 : init.picker)) {
      this.picker = new ColorPicker(init == null ? void 0 : init.picker);
      init == null ? true : delete init.picker;
    }
    if (!isEmpty(init == null ? void 0 : init.textfield)) {
      this.textfield = new TextField(init == null ? void 0 : init.textfield);
      init == null ? true : delete init.textfield;
    }
    Object.assign(this, init);
    this.discriminator = "ColorPickerField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["menu", "textfield", "picker"];
  }
}
class DatePicker extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "border", false);
    __publicField(this, "calendar_icon", "$calendar");
    __publicField(this, "cancel_text", "$vuetify.datePicker.cancel");
    __publicField(this, "collapse_icon", "$collapse");
    __publicField(this, "display_date");
    __publicField(this, "elevation");
    __publicField(this, "expand_icon", "$expand");
    __publicField(this, "format");
    __publicField(this, "header", "$vuetify.datePicker.header");
    __publicField(this, "height");
    __publicField(this, "hide_actions", false);
    __publicField(this, "hide_weekdays", false);
    __publicField(this, "hover_date");
    __publicField(this, "input_mode", InputModeTypes.Calendar);
    __publicField(this, "input_placeholder", "dd/mm/yyyy");
    __publicField(this, "input_text", "$vuetify.datePicker.input.placeholder");
    __publicField(this, "keyboard_icon", "$edit");
    __publicField(this, "landscape", false);
    __publicField(this, "max");
    __publicField(this, "max_height");
    __publicField(this, "max_width");
    __publicField(this, "min");
    __publicField(this, "min_height");
    __publicField(this, "min_width");
    __publicField(this, "multiple", false);
    __publicField(this, "next_icon", "$next");
    __publicField(this, "ok_text", "$vuetify.datePicker.ok");
    __publicField(this, "position");
    __publicField(this, "prev_icon", "$prev");
    __publicField(this, "rounded", false);
    __publicField(this, "show_adjacent_months", false);
    __publicField(this, "show_week", false);
    __publicField(this, "side");
    __publicField(this, "tag", "div");
    __publicField(this, "title", "$vuetify.datePicker.title");
    __publicField(this, "view_mode", ViewModeTypes.Month);
    __publicField(this, "width");
    Object.assign(this, init);
    this.discriminator = "DatePicker";
  }
  /**
   * Returns an array of all allowed props that are present on V-Date-Picker
   * https://vuetifyjs.com/en/api/v-date-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "border",
      "calendar_icon",
      "cancel_text",
      "collapse_icon",
      "color",
      "disabled",
      "display_date",
      "elevation",
      "expand_icon",
      "format",
      "header",
      "height",
      "hide_actions",
      "hide_weekdays",
      "hover_date",
      "input_mode",
      "input_placeholder",
      "input_text",
      "keyboard_icon",
      "landscape",
      "max",
      "max_height",
      "max_width",
      "min",
      "min_height",
      "min_width",
      "multiple",
      "next_icon",
      "ok_text",
      "position",
      "prev_icon",
      "rounded",
      "show_adjacent_months",
      "show_week",
      "side",
      "tag",
      "title",
      "theme",
      "view_mode",
      "width"
    ];
  }
}
class DatePickerField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "component", "easy-date-picker");
    __publicField(this, "menu", new Menu({
      close_on_content_click: false,
      open_delay: 0
    }));
    __publicField(this, "picker", new DatePicker({
      width: 360,
      format: "YYYY-MM-DD"
    }));
    __publicField(this, "textfield", new TextField({
      name: "date_picker_value",
      label: "Date Picker",
      readonly: true,
      prepend_inner_icon: new Icon({
        icon: "mdi-calendar-month",
        size: "large"
      })
    }));
    Object.assign(this, init);
    this.discriminator = "DatePickerField";
  }
  /**
   * Returns an array of all allowed props that are present on EasyDatePicker
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["menu", "textfield", "picker"];
  }
}
class FileInputField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "accept", "image/png, image/jpeg");
    __publicField(this, "append_inner_icon");
    __publicField(this, "chips", false);
    __publicField(this, "component", "v-file-input");
    __publicField(this, "counter", false);
    __publicField(this, "counter_size_string", "$vuetify.fileInput.counterSize");
    __publicField(this, "counter_string", "$vuetify.fileInput.counter");
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "dirty", false);
    __publicField(this, "multiple", false);
    __publicField(this, "prepend_inner_icon");
    __publicField(this, "reversed", false);
    __publicField(this, "show_size", false);
    __publicField(this, "single_line", false);
    Object.assign(this, init);
    this.discriminator = "FileInputField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Text-Field
   * https://vuetifyjs.com/en/api/v-text-field/
   *
   * Currently missing the following properties:
   * counter-value
   * model-modifiers
   * model-value
   * validation-value
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "accept",
      "active",
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      // displayed as easy-icon with tooltip.
      // 'append_inner_icon',
      "base_color",
      "bg_color",
      "center_affix",
      "chips",
      "clearable",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "counter_size_string",
      "counter_string",
      "density",
      "direction",
      "dirty",
      "disabled",
      "error",
      "error_messages",
      "flat",
      "focused",
      "hide_details",
      "hint",
      "id",
      "label",
      "loading",
      "masking",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_clear",
      "persistent_hint",
      "placeholder",
      "prefix",
      // displayed as easy-icon with tooltip.
      // "prepend_icon",
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "reverse",
      "rounded",
      "rules",
      "show_size",
      "single_line",
      "theme",
      "validate_on",
      "variant"
    ];
  }
}
class PasswordField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "component", "easy-password");
    __publicField(this, "lower_case", true);
    __publicField(this, "min_length", 8);
    __publicField(this, "numbers", true);
    __publicField(this, "special", true);
    __publicField(this, "upper_case", true);
    __publicField(this, "show_strength_bar", false);
    __publicField(this, "strength_error_color", "error");
    __publicField(this, "strength_error_text", "Weak");
    __publicField(this, "strength_success_color", "success");
    __publicField(this, "strength_success_text", "Strong");
    __publicField(this, "strength_warning_color", "warning");
    __publicField(this, "strength_warning_text", "Medium");
    __publicField(this, "textfield");
    __publicField(this, "view_mode", false);
    if (!isEmpty(init.textfield)) {
      this.textfield = new TextField(init == null ? void 0 : init.textfield);
      init == null ? true : delete init.textfield;
    }
    Object.assign(this, init);
    if (isEmpty(this.textfield)) {
      this.textfield = new TextField(init);
    }
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
  allowedProps() {
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
      "component_type"
    ];
  }
}
class RadioGroupField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "component", "v-radio-group");
    __publicField(this, "defaults_target");
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "false_icon", "$radioOff");
    __publicField(this, "height", "auto");
    __publicField(this, "inline", false);
    __publicField(this, "items", []);
    __publicField(this, "ripple", false);
    __publicField(this, "true_icon", "$radioOn");
    __publicField(this, "type", "radio");
    if (!isEmpty(init == null ? void 0 : init.items) && isArray(init == null ? void 0 : init.items)) {
      for (const radio of (init == null ? void 0 : init.items) ?? []) {
        this.items.push(new RadioField(radio));
      }
      init == null ? true : delete init.items;
    }
    Object.assign(this, init);
    this.discriminator = "RadioGroupField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Radio-Group
   * https://vuetifyjs.com/en/api/v-radio-group/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      "center_affix",
      "color",
      "cols",
      "defaults_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "focused",
      "height",
      "hide_details",
      "hint",
      "id",
      "inline",
      "label",
      "loading",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "type"
      // 'value',
    ];
  }
}
class RadioField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "component", "v-radio");
    __publicField(this, "defaults_target");
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "false_icon", "$radioOff");
    __publicField(this, "false_value");
    __publicField(this, "inline", false);
    __publicField(this, "multiple", false);
    __publicField(this, "ripple", false);
    __publicField(this, "true_icon", "$radioOn");
    __publicField(this, "true_value");
    __publicField(this, "type", "radio");
    Object.assign(this, init);
    this.discriminator = "RadioField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "color",
      "cols",
      "defaults_target",
      "density",
      "direction",
      "disabled",
      "error",
      "false_icon",
      "false_value",
      "id",
      "inline",
      "label",
      "loading",
      "multiple",
      "name",
      "readonly",
      "ripple",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "value",
      "variant"
    ];
  }
}
class SwitchField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "center_affix", true);
    __publicField(this, "component", "v-switch");
    __publicField(this, "defaults_target");
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "false_icon");
    __publicField(this, "false_value");
    __publicField(this, "hide_details", false);
    __publicField(this, "indeterminate", false);
    __publicField(this, "inline", false);
    __publicField(this, "inset", false);
    __publicField(this, "multiple", false);
    __publicField(this, "ripple", false);
    __publicField(this, "transition", false);
    __publicField(this, "true_icon");
    __publicField(this, "true_value");
    __publicField(this, "type", "switch");
    Object.assign(this, init);
    this.discriminator = "SwitchField";
  }
  /**
   * Returns an array of all allowed props that are present on VSwitch
   * https://vuetifyjs.com/en/api/v-switch/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      // displayed as easy-icon with tooltip.
      //'append_icon',
      "autofocus",
      "center_affix",
      "color",
      "cols",
      "default_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "false_value",
      "focused",
      "hide_details",
      "hint",
      "id",
      "indeterminate",
      "inline",
      "inset",
      "label",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "validate_on"
      // value causes errors due to v-model binding
      //'value'
    ];
  }
}
class TimePickerField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "component", "easy-time-picker");
    __publicField(this, "menu", new Menu());
    __publicField(this, "picker", new TimePicker({
      width: 360
    }));
    __publicField(this, "textfield", new TextField({
      label: "Time Picker",
      readonly: true,
      prepend_inner_icon: new Icon({
        icon: "mdi-clock-outline",
        size: "large"
      })
    }));
    Object.assign(this, init);
    this.discriminator = "TimePickerField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["menu", "textfield", "picker"];
  }
}
class TimePicker extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "cancel_text", "cancel");
    __publicField(this, "close_on_outside_click", true);
    __publicField(this, "elevation");
    __publicField(this, "header", "");
    __publicField(this, "height");
    __publicField(this, "hide_actions", false);
    __publicField(this, "mode", TimePickerModeTypes.Normal);
    __publicField(this, "ok_text", "ok");
    __publicField(this, "pad_start", true);
    __publicField(this, "position");
    __publicField(this, "rolling_numbers", true);
    __publicField(this, "tag", "div");
    __publicField(this, "title", "select time");
    __publicField(this, "width");
    Object.assign(this, init);
    this.discriminator = "TimePicker";
  }
  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "close_on_outside_click",
      "cancel_text",
      "color",
      "disabled",
      "elevation",
      "header",
      "height",
      "hide_actions",
      "mode",
      "ok_text",
      "pad_start",
      "position",
      "rolling_numbers",
      "rounded",
      "tag",
      "title",
      "theme",
      "width"
    ];
  }
}
class TextareaField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "append_inner_icon");
    __publicField(this, "auto_grow");
    __publicField(this, "component", "v-textarea");
    __publicField(this, "counter", false);
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "dirty", false);
    __publicField(this, "masking");
    __publicField(this, "max_rows");
    __publicField(this, "no_resize", false);
    __publicField(this, "prepend_inner_icon");
    __publicField(this, "rows", 5);
    __publicField(this, "reverse", false);
    if (!isEmpty(init == null ? void 0 : init.append_inner_icon)) {
      this.append_inner_icon = new Icon(init == null ? void 0 : init.append_inner_icon);
      init == null ? true : delete init.append_inner_icon;
    }
    if (!isEmpty(init == null ? void 0 : init.prepend_inner_icon)) {
      this.prepend_inner_icon = new Icon(init == null ? void 0 : init.prepend_inner_icon);
      init == null ? true : delete init.prepend_inner_icon;
    }
    Object.assign(this, init);
    this.discriminator = "TextareaField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Text-Field
   * https://vuetifyjs.com/en/api/v-text-field/
   *
   * Currently missing the following properties:
   * counter-value
   * model-modifiers
   * model-value
   * validation-value
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      // "append_icon",
      // "append_inner_icon",
      "autofocus",
      "attach",
      "base_color",
      "bg_color",
      "center_affix",
      "clearable",
      "component_type",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "dirty",
      "disabled",
      "error",
      "error_messages",
      "flat",
      "focused",
      "hide_details",
      "hint",
      "id",
      "label",
      "loading",
      "masking",
      "max_errors",
      "messages",
      "name",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      // "prepend_icon",
      // "prepend_inner_icon",
      "readonly",
      "reverse",
      "role",
      "rounded",
      // 'rules',
      "single_line",
      "suffix",
      "theme",
      "type",
      "validate_on",
      "variant"
    ];
  }
}
export {
  AutoCompleteField as A,
  CheckboxGroupField as C,
  DatePicker as D,
  EasyField as E,
  FileInputField as F,
  PasswordField as P,
  RadioGroupField as R,
  SwitchField as S,
  TextField as T,
  CheckboxField as a,
  RadioField as b,
  ColorPicker as c,
  ColorPickerField as d,
  DatePickerField as e,
  TimePickerField as f,
  TextareaField as g,
  TimePicker as h
};
