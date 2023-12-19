import { C as n } from "./ContentTypes-f2427ff5.js";
import { s as i, i as u } from "./Store-dda3f8ae.js";
import { A as d, a as l } from "./AxiosOptions-6a3d3f30.js";
import { AxiosHeaders as c } from "axios";
class o {
  static mergeData(e, t) {
    return Object.assign(e, t);
  }
  static async request(e, t, s = null, a = new d()) {
    return await i.options.axios[e](t, s, {
      headers: o.buildHeaders(a)
      // transformResponse: (r: AxiosResponse) => r.data,
    });
  }
  static buildHeaders(e) {
    const t = e.headers.find(
      (r) => r.key == "Content-Type"
    );
    let s = n.JSON;
    e.multi_part && (s = n.MultiPart), u(t) ? e.headers.push(new l({ key: "Content-Type", value: s })) : t.value = s;
    const a = new c();
    return e.headers.forEach((r) => a.set(r.key, r.value)), a;
  }
}
export {
  o as S
};
