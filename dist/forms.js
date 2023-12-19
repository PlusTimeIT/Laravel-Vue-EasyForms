var L = Object.defineProperty;
var T = (d, r, e) => r in d ? L(d, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[r] = e;
var t = (d, r, e) => (T(d, typeof r != "symbol" ? r + "" : r, e), e);
import { i as l, a as n, s as m, g as j } from "./Store-dda3f8ae.js";
import { A as i } from "./AlertTriggers-18dccfa1.js";
import { A as g, C as y } from "./ContentTypes-f2427ff5.js";
import { F as E } from "./FormLoaderTypes-b32e44d6.js";
import { A as J } from "./Alert-b2585c9f.js";
import { P as M } from "./ProgressLinear-a6d9add9.js";
import { S as f } from "./ServerCall-2469f5a5.js";
import { A as b } from "./AxiosOptions-6a3d3f30.js";
import { F as C } from "./FormLoader-be04857a.js";
import { ActionIcon as w, ActionButton as x } from "./actions.js";
import { J as _, F as P, A as N } from "./JustifyRow-eb5715b2.js";
import { A as B, a as I, C as R, P as G, R as q, b as V, c as $, d as z, D as H, e as K, F as Q, f as U, T as W, g as X, S as Y, h as Z } from "./fields-fff04d55.js";
import "axios";
import { B as ee } from "./Button-c31ec1fd.js";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./Icon-45b27861.js";
import "./LocationTypes-c293bdaa.js";
import "./GotProps-a841b1a8.js";
import "./ViewModeTypes-25f1573e.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-10e523a9.js";
class O {
  constructor(r) {
    t(this, "additional_data", []);
    t(this, "additional_load_data", []);
    t(this, "alerts", []);
    t(this, "axios", new b());
    t(this, "loader");
    t(this, "loading", !0);
    t(this, "name", "");
    t(this, "original", []);
    t(this, "results", null);
    t(this, "show_title", !1);
    t(this, "text", "");
    t(this, "title", "");
    t(this, "type", "");
    if (!l(r == null ? void 0 : r.alerts) && n(r == null ? void 0 : r.alerts)) {
      for (const e of (r == null ? void 0 : r.alerts) ?? [])
        this.alerts.push(new J(e));
      r == null || delete r.alerts;
    }
    l(r == null ? void 0 : r.axios) || (this.axios = new b(r == null ? void 0 : r.axios), r == null || delete r.axios), l(r == null ? void 0 : r.loader) || (this.loader = new C(r == null ? void 0 : r.loader), r == null || delete r.loader), Object.assign(this, r), l(this.loader) && (this.loader = new C({
      type: E.Circular,
      progress: new M({ indeterminate: !0, color: "primary" })
    }));
  }
  cancelled() {
    return this.triggerAlert(i.Cancelled), this;
  }
  failed(r) {
    return this.triggerAlert(i.FailedProcessing, r), this;
  }
  failedValidation(r) {
    return this.triggerAlert(i.FailedValidation, r), this;
  }
  hasResults(r) {
    return this.results = r, this;
  }
  isLoading(r) {
    return this.loading = r, this;
  }
  additionalArrayToObject(r) {
    const e = {};
    for (const s of r)
      e[s.key] = s.value;
    return e;
  }
  async load() {
    var e, s, a;
    let r;
    this.triggerAlert(i.BeforeLoad), this.isLoading(!0);
    try {
      if (r = await f.request(
        g.Post,
        m.options.buildDomain("/forms/load"),
        f.mergeData({ form_name: this.name }, this.additionalArrayToObject(this.additional_load_data)),
        this.axios
      ), r.status === 200 || r.status === 204) {
        if (this.isLoading(((e = r == null ? void 0 : r.data) == null ? void 0 : e.loader) ?? !1), !((s = r == null ? void 0 : r.data) != null && s.result))
          return this.triggerAlert(i.FailedLoad), !1;
        const o = JSON.parse(JSON.stringify((a = r == null ? void 0 : r.data) == null ? void 0 : a.data));
        return l(o.type) ? (this.triggerAlert(i.FailedLoad), !1) : o;
      }
    } catch {
      return this.triggerAlert(i.FailedLoad), !1;
    }
    return this.triggerAlert(i.FailedLoad), !1;
  }
  processing() {
    return this.triggerAlert(i.BeforeProcessing), this;
  }
  processed() {
    return this.triggerAlert(i.AfterProcessing), this;
  }
  props() {
    return {
      text: this.text
    };
  }
  hideAllAlerts() {
    return this.alerts.forEach((r) => r.hide()), this;
  }
  reset() {
    return this.hideAllAlerts(), this.triggerAlert(i.FormReset), this;
  }
  success(r) {
    return this.triggerAlert(i.SuccessProcessing, r), this;
  }
  triggerAlert(r, e = "") {
    const s = this.alerts.find((a) => a.trigger == r);
    return l(s) ? this : (s == null || s.convertContents(e).show().autoClose(), this);
  }
}
const k = {};
function re() {
  const d = [
    {
      name: "AutoCompleteField",
      field: B
    },
    {
      name: "CheckboxField",
      field: I
    },
    {
      name: "CheckboxGroupField",
      field: R
    },
    {
      name: "PasswordField",
      field: G
    },
    {
      name: "RadioGroupField",
      field: q
    },
    {
      name: "RadioField",
      field: V
    },
    {
      name: "ColorPicker",
      field: $
    },
    {
      name: "ColorPickerField",
      field: z
    },
    {
      name: "DatePicker",
      field: H
    },
    {
      name: "DatePickerField",
      field: K
    },
    {
      name: "FileInputField",
      field: Q
    },
    {
      name: "SwitchField",
      field: U
    },
    {
      name: "TextField",
      field: W
    },
    {
      name: "TimePickerField",
      field: X
    },
    {
      name: "SelectField",
      field: Y
    },
    {
      name: "ActionIcon",
      field: w
    },
    {
      name: "ActionButton",
      field: x
    },
    {
      name: "TextareaField",
      field: Z
    }
  ];
  for (const r of d)
    se(r.name, r.field);
}
re();
function se(d, r) {
  k[d] = r;
}
function v(d) {
  return k[d];
}
class Oe extends O {
  constructor(e) {
    super(e);
    // actions: Array<ActionIcon | ActionButton> = [];
    t(this, "actions", []);
    t(this, "callback", "");
    t(this, "inline", !1);
    t(this, "justify_row", _.Center);
    t(this, "type", P.Action);
    if (!l(e == null ? void 0 : e.actions) && n(e == null ? void 0 : e.actions)) {
      for (const s of (e == null ? void 0 : e.actions) ?? [])
        if (s instanceof w || s instanceof x)
          this.actions.push(s);
        else if (!l(s.discriminator)) {
          const a = s.discriminator;
          this.instantiateAction(a, s);
        }
      e == null || delete e.actions;
    }
    Object.assign(this, e);
  }
  instantiateAction(e, s) {
    const a = v(e);
    if (a) {
      const o = new a(s);
      this.actions.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  data(e) {
    const s = new FormData();
    return s.set("form_name", this.name), s.set("form_action", e), s;
  }
  async process(e) {
    var a, o;
    let s;
    this.isLoading(!0);
    try {
      if (s = await f.request(
        g.Post,
        m.options.buildDomain("/forms/process"),
        f.mergeData(this.data(e), this.additional_data),
        this.axios
      ), s.status === 200 || s.status === 204)
        return this.isLoading(((a = s == null ? void 0 : s.data) == null ? void 0 : a.loader) ?? !1), (o = s == null ? void 0 : s.data) != null && o.result ? JSON.parse(JSON.stringify(s.data)) : !1;
    } catch {
      return !1;
    }
    return !1;
  }
  props() {
    return {};
  }
}
class ke extends O {
  constructor(e) {
    super(e);
    t(this, "button_align_row", N.Center);
    t(this, "button_justify_row", _.Center);
    t(this, "buttons", []);
    t(this, "fields", []);
    t(this, "original", []);
    t(this, "type", P.Input);
    if (!l(e == null ? void 0 : e.fields) && n(e == null ? void 0 : e.fields)) {
      for (const s of (e == null ? void 0 : e.fields) ?? [])
        if (!l(s.discriminator)) {
          const a = s.discriminator;
          this.instantiateField(a, s);
        }
      e == null || delete e.fields;
    }
    if (!l(e == null ? void 0 : e.buttons) && n(e == null ? void 0 : e.buttons)) {
      for (const s of (e == null ? void 0 : e.buttons) ?? [])
        this.buttons.push(new ee(s));
      e == null || delete e.buttons;
    }
    Object.assign(this, e), this.original = this.fields.map((s) => Object.assign({}, s)), this.fields = this.fields.sort((s, a) => s.order - a.order), this.buttons = this.buttons.sort((s, a) => s.order - a.order);
  }
  data() {
    const e = this.additional_data.find((a) => a.key == "identifier" || a.key == "id"), s = new FormData();
    return s.set("form_name", this.name), l(e) || s.set("id", e == null ? void 0 : e.value), this.fields.forEach((a) => {
      l(a.value) || (n(a.value) ? a.value.forEach((o) => {
        s.set(this.formatForArrayOrObject(a.name), o);
      }) : j(a.value) ? s.set(this.formatForArrayOrObject(a.name), a.value) : s.set(a.name, a.value));
    }), s;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  instantiateField(e, s) {
    const a = v(e);
    if (a) {
      const o = new a(s);
      this.fields.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  async process() {
    var s, a, o, u, p, F;
    this.processing();
    let e;
    try {
      if (e = await f.request(
        g.Post,
        m.options.buildDomain("/forms/process"),
        f.mergeData(this.data(), this.additional_data),
        this.axios
      ), this.processed(), e.status === 200 || e.status === 204) {
        this.isLoading(((s = e == null ? void 0 : e.data) == null ? void 0 : s.loader) ?? !1);
        const c = JSON.parse(JSON.stringify((a = e == null ? void 0 : e.data) == null ? void 0 : a.data));
        if ((o = e == null ? void 0 : e.data) != null && o.result)
          return this.success((u = e == null ? void 0 : e.data) == null ? void 0 : u.data), (p = e == null ? void 0 : e.data) == null ? void 0 : p.data;
        if (!l(c == null ? void 0 : c.validation_errors)) {
          for (const A in c == null ? void 0 : c.validation_errors) {
            const D = this.fields.find((h) => h.name === A), S = c == null ? void 0 : c.validation_errors[A];
            for (const h of S)
              D.addErrorMessage(h);
          }
          return this.failedValidation(), !1;
        }
        return this.failed((F = e == null ? void 0 : e.data) == null ? void 0 : F.data), !1;
      }
    } catch {
      return !1;
    }
    return this.failed(), !1;
  }
  loadErrorMessages(e) {
    let s;
    for (s of e) {
      const a = this.fields.find((o) => o.name === s.id);
      for (const o of s.errorMessages)
        this.hasErrorMessage(a, o) || a.addErrorMessage(o);
    }
    return this;
  }
  hasErrorMessage(e, s) {
    if (typeof e.error_messages == "string")
      return e.error_messages == s;
    const a = e.error_messages.find((o) => o === s);
    return !l(a);
  }
  /**
   * Provides the props for VForm
   * @returns VForm
   */
  props() {
    const e = {};
    return e.enctype = y.JSON, this.axios.multi_part && (e.enctype = y.MultiPart), e;
  }
  reset() {
    super.reset();
    const e = this.original;
    return this.fields = this.fields.map((s) => {
      var a;
      return s.value = (a = e.find((o) => o.name === s.name)) == null ? void 0 : a.value, s.clearErrorMessages(), s;
    }), this;
  }
}
export {
  Oe as ActionForm,
  O as EasyForm,
  ke as InputForm
};
