var g = Object.defineProperty;
var c = (s, r, e) => r in s ? g(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var o = (s, r, e) => (c(s, typeof r != "symbol" ? r + "" : r, e), e);
import { F as p } from "./FormLoaderTypes-b32e44d6.js";
import "./Store-03b8f4cc.js";
import { P as a, a as m } from "./ProgressLinear-a970bcbf.js";
class u {
  constructor(r) {
    o(this, "type");
    o(this, "progress");
    this.type = p.Circular, this.progress = new a(), Object.assign(this, r), (r == null ? void 0 : r.type) == p.Circular ? this.progress = new a(r == null ? void 0 : r.progress) : (r == null ? void 0 : r.type) == p.Linear && (this.progress = new m(r == null ? void 0 : r.progress));
  }
}
export {
  u as F
};
