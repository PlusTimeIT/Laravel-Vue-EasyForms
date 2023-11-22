var u = Object.defineProperty;
var l = (a, e, t) => e in a ? u(a, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[e] = t;
var s = (a, e, t) => (l(a, typeof e != "symbol" ? e + "" : e, t), t);
import { C as i } from "./ContentTypes-f2427ff5.js";
import { s as d, i as p } from "./Types-cc63165d.js";
import { A as m, a as f } from "./AxiosOptions-6a3d3f30.js";
import { AxiosHeaders as y } from "axios";
class h {
  constructor(e) {
    /**
     * HTTP config object
     */
    s(this, "config", {});
    /**
     * Axios return data
     */
    s(this, "data", null);
    /**
     * HTTP headers object
     */
    s(this, "headers", {});
    /**
     * HTTP request object
     */
    s(this, "request", {});
    /**
     * HTTP status code
     */
    s(this, "status");
    /**
     * HTTP Status Text
     */
    s(this, "statusText", "");
    Object.assign(this, e);
  }
}
class c {
  static mergeData(e, t) {
    return Object.assign(e, t);
  }
  static async request(e, t, n = null, o = new m()) {
    const r = await d.options.axios[e](t, n, {
      headers: c.buildHeaders(o)
    });
    return new h(r);
  }
  static buildHeaders(e) {
    const t = e.headers.find(
      (r) => r.key == "Content-Type"
    );
    let n = i.JSON;
    e.multi_part && (n = i.MultiPart), p(t) ? e.headers.push(new f({ key: "Content-Type", value: n })) : t.value = n;
    const o = new y();
    return e.headers.forEach((r) => o.set(r.key, r.value)), o;
  }
}
export {
  c as S,
  h as a
};
