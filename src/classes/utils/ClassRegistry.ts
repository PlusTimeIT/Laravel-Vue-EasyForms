import { ActionButton, ActionIcon } from "../actions";
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
  ColorPicker,
  DatePicker,
  TextareaField,
  SelectField,
} from "../fields";

type ClassConstructor<T> = new () => T;

const classRegistry: Record<string, ClassConstructor<any>> = {};

interface ClassFields {
  field: ClassConstructor<any>;
  name: string;
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
      name: "ColorPicker",
      field: ColorPicker,
    },
    {
      name: "ColorPickerField",
      field: ColorPickerField,
    },
    {
      name: "DatePicker",
      field: DatePicker,
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
    {
      name: "ActionIcon",
      field: ActionIcon,
    },
    {
      name: "ActionButton",
      field: ActionButton,
    },
    {
      name: "TextareaField",
      field: TextareaField,
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
