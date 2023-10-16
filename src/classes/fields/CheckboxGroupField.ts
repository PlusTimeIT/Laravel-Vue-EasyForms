import { EasyField } from "#/abstracts/EasyField";
import { SwitchField } from "./SwitchField";
import { CheckboxField } from "./CheckboxField";
import { CheckboxGroupValue } from "#/classes/properties/CheckboxGroupValue";

export class CheckboxGroupField extends EasyField {
  class = "ml-auto";
  component = "easy-checkbox-group";
  items: CheckboxField[] = [];
  switch: SwitchField | undefined;
  value: CheckboxGroupValue[] = [];

  constructor(init?: Partial<CheckboxGroupField>) {
    super(init);
    Object.assign(this, init);
  }

  addAllItems(): void {
    // clear all so no duplicates get added.
    this.clear();
    for (const checkboxValue of this.items) {
      checkboxValue.value = true;
      this.value.push(new CheckboxGroupValue({ key: checkboxValue.name, value: checkboxValue.value }));
    }
  }

  addItem(key: string, value: any): void {
    this.value.push(new CheckboxGroupValue({ key: key, value: value }));
  }

  clear(): void {
    this.value = [];
    for (const checkboxValue of this.items) {
      checkboxValue.value = false;
    }
  }

  find(checkbox: CheckboxField): CheckboxGroupValue | undefined {
    return this.value.find((c: CheckboxGroupValue) => c.key == checkbox.name);
  }

  removeItem(checkboxValue: CheckboxGroupValue): void {
    const index: number | undefined = this.value.indexOf(checkboxValue);
    this.value.splice(index, 1);
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
  allowedProps(): string[] {
    return ["class", "cols", "items", "label", "switch"];
  }
}
