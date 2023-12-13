/**
 * This class converts Laravel validation format and maps it to the correct function
 */
export class FunctionBuilder {
  static expectingArray: string[] = [
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
    "starts_with",
  ];
  static expectingFieldMessage: string[] = [
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
    "uuid",
  ];
  static expectingSplit: string[] = ["between", "decimal", "digits_between"];
  static expectingSingleValue: string[] = [
    "digits",
    "max",
    "max_digits",
    "min",
    "min_digits",
    "multiple_of",
    "not_regex",
    "regex",
  ];
  static expectingAllFields: string[] = [
    "confirmed",
    "required_with",
    "required_with_all",
    "required_without",
    "required_without_all",
  ];
  static expectingComparison: string[] = ["different", "same"];
  static expectingComparisonAndValue: string[] = ["required_if", "required_unless"];
  /** Validation requires all fields  */
  static shouldPassAllFields(name: string): boolean {
    return FunctionBuilder.expectingAllFields.includes(name);
  }
  /** Validation requires value to be an array  */
  static shouldPassArray(name: string): boolean {
    return FunctionBuilder.expectingArray.includes(name);
  }
  /** Validation only requires field and message  */
  static shouldPassFieldMessage(name: string): boolean {
    return FunctionBuilder.expectingFieldMessage.includes(name);
  }
  /** Validation value should check for splitting  */
  static shouldSplit(name: string): boolean {
    return FunctionBuilder.expectingSplit.includes(name);
  }
  /** Validation value should be passed directly.  */
  static shouldPass(name: string): boolean {
    return FunctionBuilder.expectingSingleValue.includes(name);
  }
}
