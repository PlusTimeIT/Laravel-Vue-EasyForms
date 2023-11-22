var p = Object.defineProperty;
var g = (s, r, e) => r in s ? p(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var o = (s, r, e) => (g(s, typeof r != "symbol" ? r + "" : r, e), e);
import { F as a } from "./FormLoaderTypes-b32e44d6.js";
import "./Types-cc63165d.js";
import { P as m, a as c } from "./ProgressLinear-fd659726.js";
class y {
  constructor(r) {
    o(this, "type");
    o(this, "progress");
    Object.assign(this, r), this.type == a.Circular ? this.progress = new m(r == null ? void 0 : r.progress) : this.type == a.Linear && (this.progress = new c(r == null ? void 0 : r.progress));
  }
}
export {
  y as F
};
