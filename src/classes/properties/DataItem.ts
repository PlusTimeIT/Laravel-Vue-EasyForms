import HasKeyValue from "#/contracts/HasKeyValue";
export class DataItem implements HasKeyValue {
  key = "";
  value: any = "";

  constructor(init?: Partial<DataItem>) {
    Object.assign(this, init);
  }
}
