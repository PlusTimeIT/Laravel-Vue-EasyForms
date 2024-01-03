var f = Object.defineProperty;
var h = (e, o, s) => o in e ? f(e, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[o] = s;
var c = (e, o, s) => (h(e, typeof o != "symbol" ? o + "" : o, s), s);
import { i as r } from "./Store-53e83c02.js";
import { B as m } from "./Button-50a5f701.js";
import { I as d } from "./Icon-340ce0a0.js";
import "axios";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./GotProps-feabb85b.js";
import "./LocationTypes-c293bdaa.js";
class a {
  constructor(o) {
    c(this, "against", "");
    c(this, "check", "");
    c(this, "operator", "");
    Object.assign(this, o);
  }
}
class A {
  constructor(o) {
    c(this, "button", new m());
    c(this, "callback", "");
    c(this, "cols", 12);
    c(this, "conditions", []);
    c(this, "identifier", "");
    c(this, "name", "");
    c(this, "order", 0);
    c(this, "discriminator", "ActionButton");
    if (r(o == null ? void 0 : o.button) || (this.button = new m(o == null ? void 0 : o.button), o == null || delete o.button), !r(o == null ? void 0 : o.conditions)) {
      for (const s of (o == null ? void 0 : o.conditions) ?? [])
        this.conditions.push(new a(s));
      o == null || delete o.conditions;
    }
    Object.assign(this, o);
  }
}
class B {
  constructor(o) {
    c(this, "callback", "");
    c(this, "cols", 12);
    c(this, "conditions", []);
    c(this, "icon");
    c(this, "identifier", "");
    c(this, "name", "");
    c(this, "order", 0);
    c(this, "discriminator", "ActionIcon");
    if (this.icon = new d({ icon: "mdi-home" }), r(o == null ? void 0 : o.icon) || ((o == null ? void 0 : o.icon) instanceof d ? this.icon = o == null ? void 0 : o.icon : this.icon = new d(o == null ? void 0 : o.icon), o == null || delete o.icon), !r(o == null ? void 0 : o.conditions)) {
      for (const s of (o == null ? void 0 : o.conditions) ?? [])
        s instanceof a ? this.conditions.push(s) : this.conditions.push(new a(s));
      o == null || delete o.conditions;
    }
    Object.assign(this, o);
  }
}
export {
  A as ActionButton,
  B as ActionIcon,
  a as ConditionItem
};
