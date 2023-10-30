var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import "./Types-9f7b5c2f.js";
import { B as Button } from "./Button-f88aa9d7.js";
import { I as Icon } from "./Tooltip-ee47020d.js";
import "axios";
import "./ContentTypes-f35a51f5.js";
import "./AxiosOptions-15ae3169.js";
import "./ButtonVariantTypes-e4c42916.js";
import "./LocationTypes-8f3d7f01.js";
class ActionButton {
  constructor(init) {
    __publicField(this, "button", new Button());
    __publicField(this, "callback", "");
    __publicField(this, "cols", 12);
    __publicField(this, "conditions", []);
    __publicField(this, "identifier", "");
    __publicField(this, "name", "");
    __publicField(this, "order", 0);
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
    Object.assign(this, init);
  }
}
class ConditionItem {
  constructor(init) {
    __publicField(this, "against", "");
    __publicField(this, "check", "");
    __publicField(this, "operator", "");
    Object.assign(this, init);
  }
}
export {
  ActionButton,
  ActionIcon,
  ConditionItem
};
