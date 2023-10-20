var n = Object.defineProperty;
var l = (a, s, t) => s in a ? n(a, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[s] = t;
var e = (a, s, t) => (l(a, typeof s != "symbol" ? s + "" : s, t), t);
import i from "axios";
class o {
  constructor(s) {
    /**
     * HTTP status code
     */
    e(this, "status");
    /**
     * HTTP Status Text
     */
    e(this, "statusText", "");
    /**
     * HTTP request object
     */
    e(this, "request", {});
    /**
     * HTTP headers object
     */
    e(this, "headers", {});
    /**
     * Axios return data
     */
    e(this, "data", null);
    /**
     * HTTP config object
     */
    e(this, "config", {});
    Object.assign(this, s);
  }
}
class m {
  static async request(s, t, r = null) {
    const c = await i[s](t, r);
    return new o(c);
  }
  static mergeData(s, t) {
    return Object.assign(s, t);
  }
}
export {
  m as S,
  o as a
};
