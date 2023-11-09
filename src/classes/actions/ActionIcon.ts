import { isEmpty } from "../../utils";
import { Icon } from "../elements";
import { ConditionItem } from "./ConditionItem";

export class ActionIcon {
  callback = "";
  cols = 12;
  conditions: ConditionItem[] = [];
  icon: Icon = new Icon();
  identifier = "";
  name = "";
  order = 0;
  discriminator = "ActionIcon";

  constructor(init?: Partial<ActionIcon>) {
    if (!isEmpty(init?.icon)) {
      this.icon = new Icon(init?.icon);
      delete init?.icon;
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
