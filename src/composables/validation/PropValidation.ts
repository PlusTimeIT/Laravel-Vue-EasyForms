import { ActionForm, InputForm } from "../../classes/forms";
import { FormTypes } from "../../enums";

export function ColumnRestriction(value: number): boolean {
  return value <= 12 && value >= 1;
}

export function InputFormType(value: InputForm): boolean {
  return value.type === FormTypes.Input && value instanceof InputForm;
}

export function ActionFormType(value: ActionForm): boolean {
  return value.type === FormTypes.Action && value instanceof ActionForm;
}
