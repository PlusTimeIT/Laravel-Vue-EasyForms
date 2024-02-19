import type { FieldType, ValidationFunction } from "../../types";
import { isEmpty, isArray, isNumber, isString, isNull, isFile, isNumeric } from "../../composables/utils/Types";
import { convertMessageHolders } from "../../composables/utils/Strings";
import { ValidationMessages } from "../../enums";

/**
 * Validation handler for converting backend validations to frontend
 */
export class ValidationHandler
{
  protected static accepted_booleans: Array<string | number | boolean> = [true, false, 1, 0, "0", "1"];
  protected static accepted_values: Array<string | number | boolean> = ["yes", "on", 1, true];
  protected static declined_values: Array<string | number | boolean> = ["no", "off", 0, false];

  static accepted: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Accepted) =>
      (value: any): boolean | string =>
      {
        return ValidationHandler.accepted_values.includes(value) || convertMessageHolders(field.name, message);
      };

  static array: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Array) =>
      (value: any): boolean | string =>
        isArray(value) || convertMessageHolders(field.name, message);

  static between: ValidationFunction<any> =
    (field: FieldType, min: number, max: number, message?: string | null) =>
      (value: any): boolean | string =>
      {
        const message_params = [
          { key: ":min", replace_with: min },
          { key: ":max", replace_with: max },
        ];
        if (isNumber(value))
          return (
            (value > min && value < max) ||
            convertMessageHolders(field.name, message ?? ValidationMessages.BetweenNumeric, message_params)
          );
        if (isString(value) || isArray(value))
          return (
            (value.length > min && value.length < max) ||
            convertMessageHolders(
              field.name,
              message ?? (isString(value) ? ValidationMessages.BetweenString : ValidationMessages.BetweenArray),
              message_params,
            )
          );
        return convertMessageHolders(field.name, message ?? ValidationMessages.BetweenFile, message_params);
      };

  static boolean: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Boolean) =>
      (value: any): boolean | string =>
        ValidationHandler.accepted_booleans.includes(value) || convertMessageHolders(field.name, message);

  static confirmed: ValidationFunction<any> =
    (field: FieldType, fields: FieldType[], message: string = ValidationMessages.Confirmed) =>
      (value: any): boolean | string =>
      {
        const confirmed_field: FieldType | undefined = fields.find((f) => f.name === field.name + "_confirmation");
        if (isEmpty(confirmed_field)) return convertMessageHolders(field.name, message);
        return confirmed_field!.value === value || convertMessageHolders(field.name, message);
      };

  static decimal: ValidationFunction<any> =
    (field: FieldType, min: number, max: number | null = null, message: string = ValidationMessages.Decimal) =>
      (value: any): boolean | string =>
      {
        const replacement = max ? `between ${min} and ${max}` : min;
        const message_params = [{ key: ":decimal", replace_with: replacement }];
        if (Math.floor(value) === value) return convertMessageHolders(field.name, message, message_params);
        const decimal_count: number = value.toString().split(".")[1].length;
        if (isNull(max)) return decimal_count === min || convertMessageHolders(field.name, message, message_params);
        return (
          (decimal_count > min && decimal_count < max!) || convertMessageHolders(field.name, message, message_params)
        );
      };

  static declined: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Declined) =>
      (value: any): boolean | string =>
        ValidationHandler.declined_values.includes(value) || convertMessageHolders(field.name, message);

  static different: ValidationFunction<any> =
    (field: FieldType, comparison: FieldType, message: string = ValidationMessages.Different) =>
      (value: any): boolean | string =>
        value !== comparison.value ||
        convertMessageHolders(field.name, message, [
          { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") },
        ]);

  static digits: ValidationFunction<any> =
    (field: FieldType, length: number, message: string = ValidationMessages.Digits) =>
      (value: any): boolean | string =>
        (isNumber(value) && value.toString().length === length) ||
        convertMessageHolders(field.name, message, [{ key: ":digits", replace_with: length }]);

  static digits_between: ValidationFunction<any> =
    (field: FieldType, min: number, max: number, message: string = ValidationMessages.DigitsBetween) =>
      (value: any): boolean | string =>
      {
        const message_params = [
          { key: ":min", replace_with: min },
          { key: ":max", replace_with: max },
        ];
        if (!isNumber(value)) return convertMessageHolders(field.name, message, message_params);
        return (value > min && value < max) || convertMessageHolders(field.name, message, message_params);
      };

  static doesnt_end_with: ValidationFunction<any> =
    (field: FieldType, values: string[], message: string = ValidationMessages.DoesntEndWith) =>
      (value: any): boolean | string =>
        values.filter((pre) => !value.endsWith(pre)).length > 0 ||
        convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);

  static doesnt_start_with: ValidationFunction<any> =
    (field: FieldType, values: string[], message: string = ValidationMessages.DoesntStartWith) =>
      (value: any): boolean | string =>
        values.filter((pre) => !value.startsWith(pre)).length > 0 ||
        convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);

  static email: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Email) =>
      (value: any): boolean | string =>
      {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || convertMessageHolders(field.name, message);
      };

  static ends_with: ValidationFunction<any> =
    (field: FieldType, values: string[], message: string = ValidationMessages.EndsWith) =>
      (value: any): boolean | string =>
        values.filter((pre) => value.endsWith(pre)).length > 0 ||
        convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);

  static file: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.File) =>
      (value: any): boolean | string =>
        isFile(value) || convertMessageHolders(field.name, message);

  static in_array: ValidationFunction<any> =
    (field: FieldType, values: string[], message: string = ValidationMessages.InArray) =>
      (value: any): boolean | string =>
        values.includes(value) ||
        convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);

  static integer: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Integer) =>
      (value: any): boolean | string =>
        isNumber(value) || convertMessageHolders(field.name, message);

  static is_in: ValidationFunction<any> =
    (field: FieldType, values: string[], message: string = ValidationMessages.In) =>
      (value: any): boolean | string =>
        values.includes(value) || convertMessageHolders(field.name, message);

  static lowercase: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Lowercase) =>
      (value: any): boolean | string =>
        value.toLowerCase() === value || convertMessageHolders(field.name, message);

  static max: ValidationFunction<any> =
    (field: FieldType, max: number, message: string | null) =>
      (value: any): boolean | string =>
      {
        const message_params = [{ key: ":max", replace_with: max }];
        if (isNumber(value))
          return (
            value <= max || convertMessageHolders(field.name, message ?? ValidationMessages.MaxNumeric, message_params)
          );
        if (isString(value) || isArray(value))
          return (
            value.length <= max ||
            convertMessageHolders(
              field.name,
              message ?? (isString(value) ? ValidationMessages.MaxString : ValidationMessages.MaxArray),
              message_params,
            )
          );
        return convertMessageHolders(field.name, message ?? ValidationMessages.MaxFile, message_params);
      };

  static max_digits: ValidationFunction<any> =
    (field: FieldType, max: number, message: string = ValidationMessages.MaxDigits) =>
      (value: any): boolean | string =>
        (isNumber(value) && value.toString().length <= max) ||
        convertMessageHolders(field.name, message, [{ key: ":max", replace_with: max }]);

  static min: ValidationFunction<any> =
    (field: FieldType, min: number, message: string | null) =>
      (value: any): boolean | string =>
      {
        const message_params = [{ key: ":min", replace_with: min }];
        if (isNumber(value))
          return (
            value >= min || convertMessageHolders(field.name, message ?? ValidationMessages.MinNumeric, message_params)
          );
        if (isString(value) || isArray(value))
          return (
            value.length >= min ||
            convertMessageHolders(
              field.name,
              message ?? (isString(value) ? ValidationMessages.MinString : ValidationMessages.MinArray),
              message_params,
            )
          );
        return convertMessageHolders(field.name, message ?? ValidationMessages.MinFile, message_params);
      };

  static min_digits: ValidationFunction<any> =
    (field: FieldType, min: number, message: string = ValidationMessages.MinDigits) =>
      (value: any): boolean | string =>
        (isNumber(value) && value.toString().length >= min) ||
        convertMessageHolders(field.name, message, [{ key: ":min", replace_with: min }]);

  static multiple_of: ValidationFunction<any> =
    (field: FieldType, multiple: number, message: string = ValidationMessages.MultipleOf) =>
      (value: any): boolean | string =>
        (isNumber(value) && value % multiple === 0) ||
        convertMessageHolders(field.name, message, [{ key: ":value", replace_with: multiple }]);

  static not_in: ValidationFunction<any> =
    (field: FieldType, values: string[], message: string = ValidationMessages.NotIn) =>
      (value: any): boolean | string =>
        !values.includes(value) || convertMessageHolders(field.name, message);

  static not_regex: ValidationFunction<any> =
    (field: FieldType, pattern: RegExp, message: string = ValidationMessages.NotRegex) =>
      (value: any): boolean | string =>
        !pattern.test(value) || convertMessageHolders(field.name, message);

  static numeric: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Numeric) =>
      (value: any): boolean | string =>
        isNumeric(value) || convertMessageHolders(field.name, message);

  static regex: ValidationFunction<any> =
    (field: FieldType, pattern: RegExp, message: string = ValidationMessages.Regex) =>
      (value: any): boolean | string =>
        pattern.test(value) || convertMessageHolders(field.name, message);

  static required: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Required) =>
      (value: any): boolean | string =>
        !isEmpty(value) || convertMessageHolders(field.name, message);

  static required_if: ValidationFunction<any> =
    (field: FieldType, comparison: FieldType, comparison_value: any, message: string = ValidationMessages.RequiredIf) =>
      (value: any): boolean | string =>
      {
        return (
          (comparison.value === comparison_value ? !isEmpty(value) : true) ||
          convertMessageHolders(field.name, message, [
            { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") },
            { key: ":value", replace_with: comparison_value },
          ])
        );
      };

  static required_unless: ValidationFunction<any> =
    (
      field: FieldType,
      comparison: FieldType,
      comparison_value: any,
      message: string = ValidationMessages.RequiredUnless,
    ) =>
      (value: any): boolean | string =>
      {
        return (
          (comparison.value !== comparison_value ? !isEmpty(value) : true) ||
          convertMessageHolders(field.name, message, [
            { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") },
            { key: ":values", replace_with: isArray(comparison_value) ? comparison_value.join(",") : comparison_value },
          ])
        );
      };

  static required_with: ValidationFunction<any> =
    (field: FieldType, fields: FieldType[], values: string[], message: string = ValidationMessages.RequiredWith) =>
      (value: any): boolean | string =>
      {
        const required_fields: FieldType[] = fields.filter((f) => values.includes(f.name) && !isEmpty(f.value));
        return (
          (!isEmpty(required_fields) && !isEmpty(value)) ||
          convertMessageHolders(field.name, message, [
            { key: ":values", replace_with: isArray(values) ? values.join(",") : values },
          ])
        );
      };

  static required_with_all: ValidationFunction<any> =
    (field: FieldType, fields: FieldType[], values: string[], message: string = ValidationMessages.RequiredWithAll) =>
      (value: any): boolean | string =>
      {
        const required_fields: FieldType[] = fields.filter((f) => values.includes(f.name) && !isEmpty(f.value));
        return (
          (required_fields.length === values.length && !isEmpty(value)) ||
          convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }])
        );
      };

  static required_without: ValidationFunction<any> =
    (field: FieldType, fields: FieldType[], values: string[], message: string = ValidationMessages.RequiredWithout) =>
      (value: any): boolean | string =>
      {
        const required_fields: FieldType[] = fields.filter((f) => values.includes(f.name) && isEmpty(f.value));
        return (
          (!isEmpty(required_fields) && !isEmpty(value)) ||
          convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }])
        );
      };

  static required_without_all: ValidationFunction<any> =
    (
      field: FieldType,
      fields: FieldType[],
      values: string[],
      message: string = ValidationMessages.RequiredWithoutAll,
    ) =>
      (value: any): boolean | string =>
      {
        const required_fields: FieldType[] = fields.filter((f) => values.includes(f.name) && isEmpty(f.value));
        return (
          (required_fields.length === values.length && !isEmpty(value)) ||
          convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }])
        );
      };

  static same: ValidationFunction<any> =
    (field: FieldType, comparison: FieldType, message: string = ValidationMessages.Same) =>
      (value: any): boolean | string =>
        value === comparison.value ||
        convertMessageHolders(field.name, message, [
          { key: ":other", replace_with: comparison.name.replaceAll("_", " ").replaceAll("-", " ") },
        ]);

  static starts_with: ValidationFunction<any> =
    (field: FieldType, values: string[], message: string = ValidationMessages.StartsWith) =>
      (value: any): boolean | string =>
        values.filter((pre) => value.startsWith(pre)).length > 0 ||
        convertMessageHolders(field.name, message, [{ key: ":values", replace_with: values.join(",") }]);

  static string: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.String) =>
      (value: any): boolean | string =>
        isString(value) || convertMessageHolders(field.name, message);

  static ulid: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Ulid) =>
      (value: any): boolean | string =>
      {
        const pattern = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/;
        return !!value.match(pattern) || convertMessageHolders(field.name, message);
      };

  static uppercase: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Uppercase) =>
      (value: any): boolean | string =>
        value.toUpperCase() === value || convertMessageHolders(field.name, message);

  static uuid: ValidationFunction<any> =
    (field: FieldType, message: string = ValidationMessages.Uuid) =>
      (value: any): boolean | string =>
      {
        const pattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        return pattern.test(value) || convertMessageHolders(field.name, message);
      };
}
