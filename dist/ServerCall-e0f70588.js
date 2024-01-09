import { S as n, s as l, i as p } from "./Store-ff430d87.js";
import { C as i } from "./ContentTypes-f2427ff5.js";
import { A as u, a as d } from "./AxiosOptions-6a3d3f30.js";
import { AxiosHeaders as m } from "axios";
const g = (t, e, s) => n.convertMessageHolders(t, e, s), k = (t) => n.kebabToPascal(t), h = (t) => n.capitalizeFirst(t), v = (t, e) => n.generate(t, e);
class c {
  // take a
  static mergeData(e, s) {
    for (const [a, r] of Object.entries(s))
      e.set(a, r);
    return e;
  }
  static async request(e, s, a = null, r = new u()) {
    return await l.options.axios[e](s, a, {
      headers: c.buildHeaders(r)
      // transformResponse: (r: AxiosResponse) => r.data,
    });
  }
  static buildHeaders(e) {
    const s = e.headers.find(
      (o) => o.key == "Content-Type"
    );
    let a = i.JSON;
    e.multi_part && (a = i.MultiPart), p(s) ? e.headers.push(new d({ key: "Content-Type", value: a })) : s.value = a;
    const r = new m();
    return e.headers.forEach((o) => r.set(o.key, o.value)), r;
  }
}
export {
  c as S,
  h as a,
  g as c,
  v as g,
  k
};
