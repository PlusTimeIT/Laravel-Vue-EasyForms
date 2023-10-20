import { Icon } from "../../classes/elements";
import { ConditionItem } from "./ConditionItem";

export class ActionIcon {
  callback = "";
  cols = 12;
  conditions: ConditionItem[] = [];
  icon: Icon = new Icon();
  identifier = "";
  name = "";
  order = 0;

  constructor(init?: Partial<ActionIcon>) {
    Object.assign(this, init);
  }
}
