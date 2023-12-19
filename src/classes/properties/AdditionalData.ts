export class AdditionalData {
  key = "";
  value: any = "";
  constructor(init?: Partial<AdditionalData>) {
    Object.assign(this, init);
  }
}
