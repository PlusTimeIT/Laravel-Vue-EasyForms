import { DataItem } from "./DataItem";

export class AdditionalData {
  data: DataItem[] = [];
  key = "";
  value: any = "";
  constructor(init?: Partial<AdditionalData>) {
    Object.assign(this, init);
  }

  toObject(): object {
    const result: any = {};
    for (const item of this.data) {
      result[item.key as keyof typeof result] = item.value;
    }
    return result;
  }
}
