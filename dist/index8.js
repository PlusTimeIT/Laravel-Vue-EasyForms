var y = Object.defineProperty;
var A = (i, t, e) => t in i ? y(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var a = (i, t, e) => (A(i, typeof t != "symbol" ? t + "" : t, e), e);
import { i as n, a as h, g as O } from "./Icon-29f81fc8.js";
import { A as o } from "./AlertTriggers-367c8134.js";
import { A as f } from "./AxiosCalls-a93e3e6c.js";
import { A as _ } from "./Alert-90da53a9.js";
import { S as c } from "./ServerCall-8eff3f6f.js";
import { A as d, b as v, D as w, a as b } from "./DataItem-7afd96c5.js";
import { J as m, A as x, C as u } from "./JustifyRow-4a3c739e.js";
import "./ButtonVariantTypes-6c8b0d38.js";
import "./DensityTypes-eaa8882a.js";
import "axios";
class g {
  constructor(t) {
    a(this, "additional_data", new d());
    a(this, "additional_load_data", new d());
    a(this, "alerts", []);
    a(this, "axios", new v());
    a(this, "loading", !0);
    a(this, "name", "");
    a(this, "original", []);
    a(this, "results", null);
    a(this, "text", "");
    a(this, "title", "");
    a(this, "type", "");
    if (!n(t == null ? void 0 : t.alerts) && h(t == null ? void 0 : t.alerts)) {
      for (const e of (t == null ? void 0 : t.alerts) ?? [])
        this.alerts.push(new _(e));
      t == null || delete t.alerts;
    }
    Object.assign(this, t);
  }
  cancelled() {
    return this.triggerAlert(o.Cancelled), this;
  }
  failed(t) {
    return this.triggerAlert(o.FailedProcessing, t), this;
  }
  hasResults(t) {
    return this.results = t, this;
  }
  isLoading(t) {
    return this.loading = t, this;
  }
  async load() {
    var e, s;
    let t;
    this.isLoading(!0);
    try {
      if (t = await c.request(
        f.Post,
        "url",
        c.mergeData({ form_name: this.name }, this.additional_load_data.toObject())
      ), t.status === 200 || t.status === 204) {
        if (this.isLoading(((e = t == null ? void 0 : t.data) == null ? void 0 : e.loader) ?? !1), !((s = t == null ? void 0 : t.data) != null && s.result))
          return !1;
        Object.assign(this, JSON.parse(JSON.stringify(t.data)));
        const r = JSON.parse(JSON.stringify(t.data));
        return n(r.type) ? (this.triggerAlert(o.FailedLoad), !1) : (this.triggerAlert(o.AfterLoad), r);
      }
    } catch {
      return !1;
    }
    return !1;
  }
  processing() {
    return console.log("PROCESSING TRIGGERED"), this.triggerAlert(o.BeforeProcessing), this;
  }
  props() {
    return {
      text: this.text
    };
  }
  reset() {
    return this.triggerAlert(o.FormReset), this;
  }
  resetAlerts(t = []) {
    n(t.length) && (t = [o.SuccessProcessing, o.FailedProcessing]);
    for (const e of this.alerts)
      t.includes(e.trigger) && e.reset();
    return this;
  }
  success(t) {
    return this.triggerAlert(o.SuccessProcessing, t), this;
  }
  triggerAlert(t, e = "") {
    const s = this.alerts.find((r) => r.trigger == t);
    return n(s) ? this : (s == null || s.convertContents(e).show().autoClose(), this);
  }
}
class R extends g {
  constructor(e) {
    super(e);
    a(this, "actions", []);
    a(this, "callback", "");
    a(this, "justify_row", m.Center);
    a(this, "inline", !1);
    a(this, "type", "action");
    Object.assign(this, e);
  }
  async process(e) {
    var r, l;
    let s;
    this.isLoading(!0);
    try {
      if (s = await c.request(
        f.Post,
        "url",
        c.mergeData(this.data(e), this.additional_load_data.toObject())
      ), s.status === 200 || s.status === 204)
        return this.isLoading(((r = s == null ? void 0 : s.data) == null ? void 0 : r.loader) ?? !1), (l = s == null ? void 0 : s.data) != null && l.result ? JSON.parse(JSON.stringify(s.data)) : !1;
    } catch {
      return !1;
    }
    return !1;
  }
  data(e) {
    const s = new FormData();
    return s.set("form_name", this.name), s.set("action", e), s;
  }
  props() {
    return {};
  }
}
class T extends g {
  constructor(e) {
    super(e);
    a(this, "button_align_row", x.Center);
    a(this, "button_justify_row", m.Center);
    a(this, "buttons", []);
    a(this, "fields", []);
    a(this, "type", "input");
    Object.assign(this, e), e !== void 0 && e.fields !== void 0 && (this.original = e.fields.map((s) => new w({ key: s.name, value: s.value })) ?? []);
  }
  reset() {
    return super.reset(), this.original.forEach((e) => {
      const s = this.fields.find((r) => r.name == e.key);
      if (n(s))
        return this;
      s.value = e.value;
    }), this;
  }
  data() {
    const e = this.additional_data.data.find((r) => r.key == "identifier" || r.key == "id"), s = new FormData();
    return s.set("form_name", this.name), n(e) || s.set("id", e == null ? void 0 : e.value), this.fields.forEach((r) => {
      h(r.value) ? r.value.forEach((l) => {
        s.set(this.formatForArrayOrObject(r.name), l);
      }) : O(r.value) ? s.set(this.formatForArrayOrObject(r.name), r.value) : s.set(r.name, r.value);
    }), s;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  async process() {
    const e = this.axios.headers.find(
      (r) => r.key == "Content-Type"
    );
    let s = u.Application;
    return this.axios.multi_part && (s = u.MultiPart), n(e) ? this.axios.headers.push(new b({ key: "Content-Type", value: s })) : e.value = s, !1;
  }
  /**
   * Provides the props for VForm
   * @returns VForm
   */
  props() {
    const e = {};
    return e.enctype = u.Application, this.axios.multi_part && (e.enctype = u.MultiPart), e;
  }
}
export {
  R as ActionForm,
  g as EasyForm,
  T as InputForm
};
