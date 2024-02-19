var e = Object.defineProperty;
var a = (r, s, o) => s in r ? e(r, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[s] = o;
var t = (r, s, o) => (a(r, typeof s != "symbol" ? s + "" : s, o), o);
import { G as c } from "./GotProps-DcRlB6g3.js";
class p extends c {
  constructor(o) {
    super(o);
    t(this, "cols", 12);
    t(this, "lg", 12);
    t(this, "md", 12);
    t(this, "sm", 12);
    Object.assign(this, o);
  }
}
export {
  p as F
};
