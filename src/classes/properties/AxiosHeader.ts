import HasKeyValue from "../../contracts/HasKeyValue";

export class AxiosHeader implements HasKeyValue {
  key = "";
  value: any = "";

  constructor(init?: Partial<AxiosHeader>) {
    Object.assign(this, init);
  }
}
