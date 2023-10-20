export class ConditionItem {
  against = "";
  check = "";
  operator = "";

  constructor(init?: Partial<ConditionItem>) {
    Object.assign(this, init);
  }
}
