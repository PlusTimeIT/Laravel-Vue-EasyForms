var m = Object.defineProperty;
var l = (e, o, s) => o in e ? m(e, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[o] = s;
var c = (e, o, s) => (l(e, typeof o != "symbol" ? o + "" : o, s), s);
import { i as r } from "./Types-cc63165d.js";
import { B as a } from "./Button-c066a5e3.js";
import { I as f } from "./Tooltip-ca2b6abb.js";
import "axios";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-749a6aaa.js";
import "./GotProps-c8fa699d.js";
class d {
  constructor(o) {
    c(this, "against", "");
    c(this, "check", "");
    c(this, "operator", "");
    Object.assign(this, o);
  }
}
class g {
  constructor(o) {
    c(this, "button", new a());
    c(this, "callback", "");
    c(this, "cols", 12);
    c(this, "conditions", []);
    c(this, "identifier", "");
    c(this, "name", "");
    c(this, "order", 0);
    c(this, "discriminator", "ActionButton");
    if (r(o == null ? void 0 : o.button) || (this.button = new a(o == null ? void 0 : o.button), o == null || delete o.button), !r(o == null ? void 0 : o.conditions)) {
      for (const s of o.conditions)
        this.conditions.push(new d(s));
      o == null || delete o.conditions;
    }
    Object.assign(this, o);
  }
}
class A {
  constructor(o) {
    c(this, "callback", "");
    c(this, "cols", 12);
    c(this, "conditions", []);
    c(this, "icon");
    c(this, "identifier", "");
    c(this, "name", "");
    c(this, "order", 0);
    c(this, "discriminator", "ActionIcon");
    if (r(o == null ? void 0 : o.icon) || ((o == null ? void 0 : o.icon) instanceof f ? this.icon = o == null ? void 0 : o.icon : this.icon = new f(o == null ? void 0 : o.icon), o == null || delete o.icon), !r(o == null ? void 0 : o.conditions)) {
      for (const s of o.conditions)
        s instanceof d ? this.conditions.push(s) : this.conditions.push(new d(s));
      o == null || delete o.conditions;
    }
    Object.assign(this, o);
  }
}
export {
  g as ActionButton,
  A as ActionIcon,
  d as ConditionItem
};
