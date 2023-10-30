var ColorPickerModeTypes = /* @__PURE__ */ ((ColorPickerModeTypes2) => {
  ColorPickerModeTypes2["Rgb"] = "rgb";
  ColorPickerModeTypes2["Rgba"] = "rgba";
  ColorPickerModeTypes2["Hsl"] = "hsl";
  ColorPickerModeTypes2["Hsla"] = "hsla";
  ColorPickerModeTypes2["Hex"] = "hex";
  ColorPickerModeTypes2["Hexa"] = "hexa";
  return ColorPickerModeTypes2;
})(ColorPickerModeTypes || {});
var DirectionType = /* @__PURE__ */ ((DirectionType2) => {
  DirectionType2["Horizontal"] = "horizontal";
  DirectionType2["Vertical"] = "vertical";
  return DirectionType2;
})(DirectionType || {});
var FilterModeTypes = /* @__PURE__ */ ((FilterModeTypes2) => {
  FilterModeTypes2["Every"] = "every";
  FilterModeTypes2["Some"] = "some";
  FilterModeTypes2["Union"] = "union";
  FilterModeTypes2["Intersection"] = "intersection";
  return FilterModeTypes2;
})(FilterModeTypes || {});
var InputModeTypes = /* @__PURE__ */ ((InputModeTypes2) => {
  InputModeTypes2["Keyboard"] = "keyboard";
  InputModeTypes2["Calendar"] = "calendar";
  return InputModeTypes2;
})(InputModeTypes || {});
var TextVariantTypes = /* @__PURE__ */ ((TextVariantTypes2) => {
  TextVariantTypes2["Outlined"] = "outlined";
  TextVariantTypes2["Plain"] = "plain";
  TextVariantTypes2["Underlined"] = "underlined";
  TextVariantTypes2["Filled"] = "filled";
  TextVariantTypes2["Solo"] = "solo";
  TextVariantTypes2["SoloInverted"] = "solo-inverted";
  TextVariantTypes2["SoloFilled"] = "solo-filled";
  return TextVariantTypes2;
})(TextVariantTypes || {});
var TimePickerModeTypes = /* @__PURE__ */ ((TimePickerModeTypes2) => {
  TimePickerModeTypes2["Military"] = "military";
  TimePickerModeTypes2["Normal"] = "normal";
  return TimePickerModeTypes2;
})(TimePickerModeTypes || {});
var ValidationMessages = /* @__PURE__ */ ((ValidationMessages2) => {
  ValidationMessages2["Accepted"] = "The :attribute must be accepted.";
  ValidationMessages2["Array"] = "The :attribute must be an array.";
  ValidationMessages2["BetweenArray"] = "The :attribute must have between :min and :max items.";
  ValidationMessages2["BetweenFile"] = "The :attribute must be between :min and :max kilobytes.";
  ValidationMessages2["BetweenNumeric"] = "The :attribute must be between :min and :max.";
  ValidationMessages2["BetweenString"] = "The :attribute must be between :min and :max characters.";
  ValidationMessages2["Boolean"] = "The :attribute field must be true or false.";
  ValidationMessages2["Confirmed"] = "The :attribute confirmation does not match.";
  ValidationMessages2["Decimal"] = "The :attribute must have :decimal decimal places.";
  ValidationMessages2["Declined"] = "The :attribute must be declined.";
  ValidationMessages2["Different"] = "The :attribute and :other must be different.";
  ValidationMessages2["Digits"] = "The :attribute must be :digits digits.";
  ValidationMessages2["DigitsBetween"] = "The :attribute must be between :min and :max digits.";
  ValidationMessages2["DoesntEndWith"] = "The :attribute may not end with one of the following: :values.";
  ValidationMessages2["DoesntStartWith"] = "The :attribute may not start with one of the following: :values.";
  ValidationMessages2["Email"] = "The :attribute must be a valid email address.";
  ValidationMessages2["EndsWith"] = "The :attribute must end with one of the following: :values.";
  ValidationMessages2["File"] = "The :attribute must be a file.";
  ValidationMessages2["In"] = "The selected :attribute is invalid.";
  ValidationMessages2["InArray"] = "The :attribute field does not exist in :other.";
  ValidationMessages2["Integer"] = "The :attribute must be an integer.";
  ValidationMessages2["Lowercase"] = "The :attribute must be lowercase.";
  ValidationMessages2["MaxArray"] = "The :attribute must not have more than :max items.";
  ValidationMessages2["MaxFile"] = "The :attribute must not be greater than :max kilobytes.";
  ValidationMessages2["MaxNumeric"] = "The :attribute must not be greater than :max.";
  ValidationMessages2["MaxString"] = "The :attribute must not be greater than :max characters.";
  ValidationMessages2["MaxDigits"] = "The :attribute must not have more than :max digits.";
  ValidationMessages2["MinArray"] = "The :attribute must have at least :min items.";
  ValidationMessages2["MinFile"] = "The :attribute must be at least :min kilobytes.";
  ValidationMessages2["MinNumeric"] = "The :attribute must be at least :min.";
  ValidationMessages2["MinString"] = "The :attribute must be at least :min characters.";
  ValidationMessages2["MinDigits"] = "The :attribute must have at least :min digits.";
  ValidationMessages2["MultipleOf"] = "The :attribute must be a multiple of :value.";
  ValidationMessages2["NotIn"] = "The selected :attribute is invalid.";
  ValidationMessages2["NotRegex"] = "The :attribute format is invalid.";
  ValidationMessages2["Numeric"] = "The :attribute must be a number.";
  ValidationMessages2["Regex"] = "The :attribute format is invalid.";
  ValidationMessages2["Required"] = "The :attribute field is required.";
  ValidationMessages2["RequiredIf"] = "The :attribute field is required when :other is :value.";
  ValidationMessages2["RequiredUnless"] = "The :attribute field is required unless :other is in :values.";
  ValidationMessages2["RequiredWith"] = "The :attribute field is required when :values is present.";
  ValidationMessages2["RequiredWithAll"] = "The :attribute field is required when :values are present.";
  ValidationMessages2["RequiredWithout"] = "The :attribute field is required when :values is not present.";
  ValidationMessages2["RequiredWithoutAll"] = "The :attribute field is required when none of :values are present.";
  ValidationMessages2["Same"] = "The :attribute and :other must match.";
  ValidationMessages2["StartsWith"] = "The :attribute must start with one of the following: :values.";
  ValidationMessages2["String"] = "The :attribute must be a string.";
  ValidationMessages2["Uppercase"] = "The :attribute must be uppercase.";
  ValidationMessages2["Ulid"] = "The :attribute must be a valid ULID.";
  ValidationMessages2["Uuid"] = "The :attribute must be a valid UUID.";
  return ValidationMessages2;
})(ValidationMessages || {});
var ValidationUpdates = /* @__PURE__ */ ((ValidationUpdates2) => {
  ValidationUpdates2["In"] = "is_in";
  return ValidationUpdates2;
})(ValidationUpdates || {});
var ViewModeTypes = /* @__PURE__ */ ((ViewModeTypes2) => {
  ViewModeTypes2["Month"] = "month";
  ViewModeTypes2["Year"] = "year";
  return ViewModeTypes2;
})(ViewModeTypes || {});
export {
  ColorPickerModeTypes as C,
  DirectionType as D,
  FilterModeTypes as F,
  InputModeTypes as I,
  TextVariantTypes as T,
  ValidationMessages as V,
  TimePickerModeTypes as a,
  ValidationUpdates as b,
  ViewModeTypes as c
};
