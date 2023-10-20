var n = Object.defineProperty;
var s = (c, t, i) => t in c ? n(c, t, { enumerable: !0, configurable: !0, writable: !0, value: i }) : c[t] = i;
var o = (c, t, i) => (s(c, typeof t != "symbol" ? t + "" : t, i), i);
import { B as r } from "./Button-2d9f4cd7.js";
import { I as a } from "./Icon-67bf229a.js";
import "./ButtonTypes-4a9e277c.js";
import "./ButtonVariantTypes-6c8b0d38.js";
import "./DensityTypes-eaa8882a.js";
class u {
  constructor(t) {
    o(this, "button", new r());
    o(this, "callback", "");
    o(this, "cols", 12);
    o(this, "conditions", []);
    o(this, "identifier", "");
    o(this, "name", "");
    o(this, "order", 0);
    Object.assign(this, t);
  }
}
class f {
  constructor(t) {
    o(this, "callback", "");
    o(this, "cols", 12);
    o(this, "conditions", []);
    o(this, "icon", new a());
    o(this, "identifier", "");
    o(this, "name", "");
    o(this, "order", 0);
    Object.assign(this, t);
  }
}
class g {
  constructor(t) {
    o(this, "against", "");
    o(this, "check", "");
    o(this, "operator", "");
    Object.assign(this, t);
  }
}
export {
  u as ActionButton,
  f as ActionIcon,
  g as ConditionItem
};
