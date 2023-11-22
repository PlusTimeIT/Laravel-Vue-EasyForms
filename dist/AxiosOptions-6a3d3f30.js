var c = Object.defineProperty;
var i = (e, s, a) => s in e ? c(e, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : e[s] = a;
var t = (e, s, a) => (i(e, typeof s != "symbol" ? s + "" : s, a), a);
class o {
  constructor(s) {
    t(this, "key", "");
    t(this, "value", "");
    Object.assign(this, s);
  }
}
class l {
  constructor(s) {
    t(this, "expecting_results", !1);
    t(this, "headers", []);
    t(this, "multi_part", !1);
    Object.assign(this, s);
  }
}
export {
  l as A,
  o as a
};
