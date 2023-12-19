import {
  AutoCompleteField,
  CheckboxField,
  CheckboxGroupField,
  PasswordField,
  RadioGroupField,
  RadioField,
  ColorPickerField,
  DatePickerField,
  FileInputField,
  SwitchField,
  TextField,
  TextareaField,
  TimePickerField,
} from "../classes/fields";

// Allows object literals to be assigned with excess properties.
// https://stackoverflow.com/questions/52677576/typescript-discriminated-union-allows-invalid-state/52678379#52678379
// https://stackoverflow.com/questions/65805600/type-union-not-checking-for-excess-properties#answer-65805753
type UnionKeys<T> = T extends T ? keyof T : never;
type StrictUnionHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, undefined>>
  : never;
type StrictUnion<T> = StrictUnionHelper<T, T>;

export type FieldType = StrictUnion<
  | AutoCompleteField
  | CheckboxField
  | CheckboxGroupField
  | ColorPickerField
  | DatePickerField
  | FileInputField
  | PasswordField
  | RadioGroupField
  | RadioField
  | SwitchField
  | TextField
  | TextareaField
  | TimePickerField
>;
