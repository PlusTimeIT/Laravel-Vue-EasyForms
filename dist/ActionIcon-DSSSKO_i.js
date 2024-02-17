var h = Object.defineProperty;
var l = (e, o, c) => o in e ? h(e, o, { enumerable: !0, configurable: !0, writable: !0, value: c }) : e[o] = c;
var s = (e, o, c) => (l(e, typeof o != "symbol" ? o + "" : o, c), c);
import { i as r } from "./Store-C0lLqhvS.js";
import { B as f } from "./Button-Emm_ZOhM.js";
import { I as a } from "./Icon-BeAWGQOa.js";
class d {
  constructor(o) {
    s(this, "against", "");
    s(this, "check", "");
    s(this, "operator", "");
    Object.assign(this, o);
  }
}
class n {
  constructor(o) {
    s(this, "button", new f());
    s(this, "callback", "");
    s(this, "cols", 12);
    s(this, "conditions", []);
    s(this, "identifier", "");
    s(this, "name", "");
    s(this, "order", 0);
    s(this, "discriminator", "ActionButton");
    if (r(o == null ? void 0 : o.button) || (this.button = new f(o == null ? void 0 : o.button), o == null || delete o.button), !r(o == null ? void 0 : o.conditions)) {
      for (const c of (o == null ? void 0 : o.conditions) ?? [])
        this.conditions.push(new d(c));
      o == null || delete o.conditions;
    }
    Object.assign(this, o);
  }
}
class w {
  constructor(o) {
    s(this, "callback", "");
    s(this, "cols", 12);
    s(this, "conditions", []);
    s(this, "icon");
    s(this, "identifier", "");
    s(this, "name", "");
    s(this, "order", 0);
    s(this, "discriminator", "ActionIcon");
    if (this.icon = new a({ icon: "mdi-home" }), r(o == null ? void 0 : o.icon) || ((o == null ? void 0 : o.icon) instanceof a ? this.icon = o == null ? void 0 : o.icon : this.icon = new a(o == null ? void 0 : o.icon), o == null || delete o.icon), !r(o == null ? void 0 : o.conditions)) {
      for (const c of (o == null ? void 0 : o.conditions) ?? [])
        c instanceof d ? this.conditions.push(c) : this.conditions.push(new d(c));
      o == null || delete o.conditions;
    }
    Object.assign(this, o);
  }
}
export {
  n as A,
  d as C,
  w as a
};
