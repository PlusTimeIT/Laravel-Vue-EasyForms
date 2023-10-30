import { InputForm, ActionForm } from "../../classes/forms";

export function ColumnRestriction(value: number): boolean {
  return value <= 12 && value >= 1;
}

export function InputFormType(value: InputForm): boolean {
  return value.type === "input-form";
}

export function ActionInputFormType(value: ActionForm): boolean {
  return value.type === "action-form";
}
