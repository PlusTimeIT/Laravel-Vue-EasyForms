import { isEmpty } from "../../utils";
import { Button } from "../elements";
import { ConditionItem } from "./ConditionItem";

export class ActionButton {
  button: Button = new Button();
  callback = "";
  cols = 12;
  conditions: ConditionItem[] = [];
  identifier = "";
  name = "";
  order = 0;
  discriminator = "ActionButton";

  constructor(init?: Partial<ActionButton>) {
    if (!isEmpty(init?.button)) {
      this.button = new Button(init?.button);
      delete init?.button;
    }
    if (!isEmpty(init?.conditions)) {
      for (const condition of init.conditions) {
        this.conditions.push(new ConditionItem(condition));
      }
      delete init?.conditions;
    }

    Object.assign(this, init);
  }
}
