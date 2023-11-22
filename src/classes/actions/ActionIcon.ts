import { isEmpty } from "../../utils";
import { Icon } from "../elements";
import { ConditionItem } from "./ConditionItem";
import HasActionIcon from "../../contracts/HasActionIcon";

export class ActionIcon implements HasActionIcon {
  callback = "";
  cols = 12;
  conditions: ConditionItem[] = [];
  icon: Icon;
  identifier = "";
  name = "";
  order = 0;
  discriminator = "ActionIcon";

  constructor(init?: Partial<ActionIcon>) {
    if (!isEmpty(init?.icon)) {
      if (init?.icon instanceof Icon) {
        this.icon = init?.icon;
      } else {
        this.icon = new Icon(init?.icon);
      }
      delete init?.icon;
    }
    if (!isEmpty(init?.conditions)) {
      for (const condition of init.conditions) {
        if (condition instanceof ConditionItem) {
          this.conditions.push(condition);
        } else {
          this.conditions.push(new ConditionItem(condition));
        }
      }
      delete init?.conditions;
    }

    Object.assign(this, init);
  }
}
