var c = Object.defineProperty;
var l = (a, s, t) => s in a ? c(a, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[s] = t;
var e = (a, s, t) => (l(a, typeof s != "symbol" ? s + "" : s, t), t);
class o {
  constructor(s) {
    e(this, "key", "");
    e(this, "value", !0);
    Object.assign(this, s);
  }
}
class n {
  constructor(s) {
    e(this, "name", "");
    e(this, "value");
    e(this, "message", null);
    Object.assign(this, s);
  }
}
export {
  o as C,
  n as V
};
