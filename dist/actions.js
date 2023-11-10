var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { i as isEmpty } from "./Types-dbac3a4a.js";
import { B as Button } from "./Button-8e7e37c9.js";
import { I as Icon } from "./Tooltip-dd8eaf56.js";
import "axios";
import "./ButtonVariantTypes-e4c42916.js";
import "./ScrollStrategyTypes-b9c8a739.js";
import "./GotProps-440b6309.js";
class ConditionItem {
  constructor(init) {
    __publicField(this, "against", "");
    __publicField(this, "check", "");
    __publicField(this, "operator", "");
    Object.assign(this, init);
  }
}
class ActionButton {
  constructor(init) {
    __publicField(this, "button", new Button());
    __publicField(this, "callback", "");
    __publicField(this, "cols", 12);
    __publicField(this, "conditions", []);
    __publicField(this, "identifier", "");
    __publicField(this, "name", "");
    __publicField(this, "order", 0);
    __publicField(this, "discriminator", "ActionButton");
    if (!isEmpty(init == null ? void 0 : init.button)) {
      this.button = new Button(init == null ? void 0 : init.button);
      init == null ? true : delete init.button;
    }
    if (!isEmpty(init == null ? void 0 : init.conditions)) {
      for (const condition of init.conditions) {
        this.conditions.push(new ConditionItem(condition));
      }
      init == null ? true : delete init.conditions;
    }
    Object.assign(this, init);
  }
}
class ActionIcon {
  constructor(init) {
    __publicField(this, "callback", "");
    __publicField(this, "cols", 12);
    __publicField(this, "conditions", []);
    __publicField(this, "icon", new Icon());
    __publicField(this, "identifier", "");
    __publicField(this, "name", "");
    __publicField(this, "order", 0);
    __publicField(this, "discriminator", "ActionIcon");
    if (!isEmpty(init == null ? void 0 : init.icon)) {
      this.icon = new Icon(init == null ? void 0 : init.icon);
      init == null ? true : delete init.icon;
    }
    if (!isEmpty(init == null ? void 0 : init.conditions)) {
      for (const condition of init.conditions) {
        this.conditions.push(new ConditionItem(condition));
      }
      init == null ? true : delete init.conditions;
    }
    Object.assign(this, init);
  }
}
export {
  ActionButton,
  ActionIcon,
  ConditionItem
};
