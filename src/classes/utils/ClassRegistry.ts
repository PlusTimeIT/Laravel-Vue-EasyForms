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
  TimePickerField,
} from "../fields";
import { SelectField } from "../fields/SelectField";

type ClassConstructor<T> = new () => T;

const classRegistry: Record<string, ClassConstructor<any>> = {};

interface ClassFields {
  name: string;
  field: ClassConstructor<any>;
}

function registerDefaults(): void {
  const defaults: ClassFields[] = [
    {
      name: "AutoCompleteField",
      field: AutoCompleteField,
    },
    {
      name: "CheckboxField",
      field: CheckboxField,
    },
    {
      name: "CheckboxGroupField",
      field: CheckboxGroupField,
    },
    {
      name: "PasswordField",
      field: PasswordField,
    },
    {
      name: "RadioGroupField",
      field: RadioGroupField,
    },
    {
      name: "RadioField",
      field: RadioField,
    },
    {
      name: "ColorPickerField",
      field: ColorPickerField,
    },
    {
      name: "DatePickerField",
      field: DatePickerField,
    },
    {
      name: "FileInputField",
      field: FileInputField,
    },
    {
      name: "SwitchField",
      field: SwitchField,
    },
    {
      name: "TextField",
      field: TextField,
    },
    {
      name: "TimePickerField",
      field: TimePickerField,
    },
    {
      name: "SelectField",
      field: SelectField,
    },
  ];
  for (const fieldDefault of defaults) {
    registerClass(fieldDefault.name, fieldDefault.field);
  }
}

registerDefaults();

export function registerClass<T>(className: string, classConstructor: ClassConstructor<T>) {
  classRegistry[className] = classConstructor;
}

export function getClassConstructor<T>(className: string): ClassConstructor<T> | undefined {
  return classRegistry[className];
}
