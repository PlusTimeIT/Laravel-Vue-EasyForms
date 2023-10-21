var i = Object.defineProperty;
var s = (c, t, n) => t in c ? i(c, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : c[t] = n;
var o = (c, t, n) => (s(c, typeof t != "symbol" ? t + "" : t, n), n);
import { B as r } from "./Button-d4fe527d.js";
import { I as a } from "./Icon-67bf229a.js";
import "./ButtonVariantTypes-50d88936.js";
import "./DensityTypes-eaa8882a.js";
class p {
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
class u {
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
class f {
  constructor(t) {
    o(this, "against", "");
    o(this, "check", "");
    o(this, "operator", "");
    Object.assign(this, t);
  }
}
export {
  p as ActionButton,
  u as ActionIcon,
  f as ConditionItem
};
