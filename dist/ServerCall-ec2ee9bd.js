import { S as o, s as l, i as d } from "./Store-ff430d87.js";
import { C as i } from "./ContentTypes-f2427ff5.js";
import { A as p, a as u } from "./AxiosOptions-6a3d3f30.js";
import { AxiosHeaders as m } from "axios";
const b = (a, e, s) => o.convertMessageHolders(a, e, s), h = (a) => o.kebabToPascal(a), k = (a) => o.capitalizeFirst(a), v = (a, e) => o.generate(a, e);
class c {
  static mergeData(e, s) {
    return Object.assign(e, s);
  }
  static async request(e, s, t = null, r = new p()) {
    return await l.options.axios[e](s, t, {
      headers: c.buildHeaders(r)
      // transformResponse: (r: AxiosResponse) => r.data,
    });
  }
  static buildHeaders(e) {
    const s = e.headers.find(
      (n) => n.key == "Content-Type"
    );
    let t = i.JSON;
    e.multi_part && (t = i.MultiPart), d(s) ? e.headers.push(new u({ key: "Content-Type", value: t })) : s.value = t;
    const r = new m();
    return e.headers.forEach((n) => r.set(n.key, n.value)), r;
  }
}
export {
  c as S,
  k as a,
  b as c,
  v as g,
  h as k
};
