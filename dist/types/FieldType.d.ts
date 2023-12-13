import { AutoCompleteField, CheckboxField, CheckboxGroupField, PasswordField, RadioGroupField, RadioField, ColorPickerField, DatePickerField, FileInputField, SwitchField, TextField, TimePickerField } from "../classes/fields";
type UnionKeys<T> = T extends T ? keyof T : never;
type StrictUnionHelper<T, TAll> = T extends any ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, undefined>> : never;
type StrictUnion<T> = StrictUnionHelper<T, T>;
export type FieldType = StrictUnion<AutoCompleteField | CheckboxField | CheckboxGroupField | ColorPickerField | DatePickerField | FileInputField | PasswordField | RadioGroupField | RadioField | SwitchField | TextField | TimePickerField>;
export {};
//# sourceMappingURL=FieldType.d.ts.map