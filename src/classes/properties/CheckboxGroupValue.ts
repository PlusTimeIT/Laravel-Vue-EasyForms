import HasKeyValue from "#/contracts/HasKeyValue";

export class CheckboxGroupValue implements HasKeyValue {
  key = "";
  value = true;

  constructor(init?: Partial<CheckboxGroupValue>) {
    Object.assign(this, init);
  }
}
