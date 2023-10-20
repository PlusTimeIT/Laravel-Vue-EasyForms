import { Button } from "../../classes/elements";
import { ConditionItem } from "./ConditionItem";

export class ActionButton {
  button: Button = new Button();
  callback = "";
  cols = 12;
  conditions: ConditionItem[] = [];
  identifier = "";
  name = "";
  order = 0;

  constructor(init?: Partial<ActionButton>) {
    Object.assign(this, init);
  }
}
