var c = Object.defineProperty;
var o = (t, s, e) => s in t ? c(t, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[s] = e;
var a = (t, s, e) => (o(t, typeof s != "symbol" ? s + "" : s, e), e);
class r {
  constructor(s) {
    a(this, "data", []);
    Object.assign(this, s);
  }
  toObject() {
    const s = {};
    for (const e of this.data)
      s[e.key] = e.value;
    return s;
  }
}
class n {
  constructor(s) {
    a(this, "key", "");
    a(this, "value", "");
    Object.assign(this, s);
  }
}
class l {
  constructor(s) {
    a(this, "expecting_results", !1);
    a(this, "headers", []);
    a(this, "multi_part", !1);
    Object.assign(this, s);
  }
}
class u {
  constructor(s) {
    a(this, "key", "");
    a(this, "value", "");
    Object.assign(this, s);
  }
}
export {
  r as A,
  u as D,
  n as a,
  l as b
};
