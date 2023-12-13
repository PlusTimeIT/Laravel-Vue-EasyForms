import { C as n } from "./ContentTypes-f2427ff5.js";
import { s as i, i as d } from "./Store-dda3f8ae.js";
import { A as u, a as l } from "./AxiosOptions-6a3d3f30.js";
import { AxiosHeaders as m } from "axios";
class o {
  static mergeData(e, t) {
    return Object.assign(e, t);
  }
  static async request(e, t, a = null, r = new u()) {
    return await i.options.axios[e](t, a, {
      headers: o.buildHeaders(r),
      transformResponse: (s) => s.data
    });
  }
  static buildHeaders(e) {
    const t = e.headers.find(
      (s) => s.key == "Content-Type"
    );
    let a = n.JSON;
    e.multi_part && (a = n.MultiPart), d(t) ? e.headers.push(new l({ key: "Content-Type", value: a })) : t.value = a;
    const r = new m();
    return e.headers.forEach((s) => r.set(s.key, s.value)), r;
  }
}
export {
  o as S
};
