var T = Object.defineProperty;
var J = (i, t, r) => t in i ? T(i, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : i[t] = r;
var s = (i, t, r) => (J(i, typeof t != "symbol" ? t + "" : t, r), r);
import { i as l, a as h, s as p, g as M } from "./Store-03b8f4cc.js";
import { A as c } from "./AlertTriggers-18dccfa1.js";
import { A as F, C as _ } from "./ContentTypes-f2427ff5.js";
import { F as N } from "./FormLoaderTypes-b32e44d6.js";
import { A as B } from "./Alert-8adc307b.js";
import { P as I } from "./ProgressLinear-a970bcbf.js";
import { S as n } from "./ServerCall-badff9b1.js";
import { A as C } from "./AxiosOptions-6a3d3f30.js";
import { F as x } from "./FormLoader-94dcff93.js";
import { ActionIcon as O, ActionButton as P } from "./actions.js";
import { J as k, F as v, A as G } from "./JustifyRow-eb5715b2.js";
import { AutoCompleteField as R, CheckboxField as q, CheckboxGroupField as V, PasswordField as U, RadioGroupField as $, RadioField as z, ColorPicker as H, ColorPickerField as K, DatePicker as Q, DatePickerField as W, FileInputField as X, SwitchField as Y, TextField as Z, TimePickerField as ee, SelectField as re, TextareaField as te } from "./fields.js";
import "axios";
import { B as ae } from "./Button-d0faa556.js";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./Icon-e8a0240f.js";
import "./LocationTypes-c293bdaa.js";
import "./GotProps-d4ee0596.js";
import "./ViewModeTypes-25f1573e.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-b0d6c813.js";
class D {
  constructor(t) {
    s(this, "additional_data", []);
    s(this, "additional_load_data", []);
    s(this, "alerts", []);
    s(this, "axios", new C());
    s(this, "google_recaptcha_site_key", null);
    s(this, "loader");
    s(this, "loading", !0);
    s(this, "name", "");
    s(this, "original", []);
    s(this, "results", null);
    s(this, "show_title", !1);
    s(this, "text", "");
    s(this, "title", "");
    s(this, "type", "");
    if (!l(t == null ? void 0 : t.alerts) && h(t == null ? void 0 : t.alerts)) {
      for (const r of (t == null ? void 0 : t.alerts) ?? [])
        this.alerts.push(new B(r));
      t == null || delete t.alerts;
    }
    l(t == null ? void 0 : t.axios) || (this.axios = new C(t == null ? void 0 : t.axios), t == null || delete t.axios), l(t == null ? void 0 : t.loader) || (this.loader = new x(t == null ? void 0 : t.loader), t == null || delete t.loader), Object.assign(this, t), l(this.loader) && (this.loader = new x({
      type: N.Circular,
      progress: new I({ indeterminate: !0, color: "primary" })
    }));
  }
  cancelled() {
    return this.triggerAlert(c.Cancelled), this;
  }
  failed(t) {
    return this.triggerAlert(c.FailedProcessing, t), this;
  }
  failedValidation(t) {
    return this.triggerAlert(c.FailedValidation, t), this;
  }
  hasResults(t) {
    return this.results = t, this;
  }
  isLoading(t) {
    return this.loading = t, this;
  }
  additionalArrayToObject(t) {
    const r = {};
    for (const e of t)
      r[e.key] = e.value;
    return r;
  }
  async load() {
    var e, a, o;
    let t;
    this.triggerAlert(c.BeforeLoad), this.isLoading(!0);
    const r = new FormData();
    r.set("form_name", this.name);
    try {
      if (t = await n.request(
        F.Post,
        p.options.buildDomain("/forms/load"),
        n.mergeData(r, this.additionalArrayToObject(this.additional_load_data)),
        this.axios
      ), t.status === 200 || t.status === 204) {
        if (this.isLoading(((e = t == null ? void 0 : t.data) == null ? void 0 : e.loader) ?? !1), !((a = t == null ? void 0 : t.data) != null && a.result))
          return this.triggerAlert(c.FailedLoad), !1;
        const f = JSON.parse(JSON.stringify((o = t == null ? void 0 : t.data) == null ? void 0 : o.data));
        return l(f.type) ? (this.triggerAlert(c.FailedLoad), !1) : f;
      }
    } catch {
      return this.triggerAlert(c.FailedLoad), !1;
    }
    return this.triggerAlert(c.FailedLoad), !1;
  }
  processing() {
    return this.triggerAlert(c.BeforeProcessing), this;
  }
  processed() {
    return this.triggerAlert(c.AfterProcessing), this;
  }
  props() {
    return {
      text: this.text
    };
  }
  hideAllAlerts() {
    return this.alerts.forEach((t) => t.hide()), this;
  }
  reset() {
    return this.hideAllAlerts(), this.triggerAlert(c.FormReset), this;
  }
  redirect(t) {
    !l(t) && typeof t == "string" && (t == "reload" ? window.location.reload() : window.location.href = t);
  }
  success(t) {
    return this.triggerAlert(c.SuccessProcessing, t), this;
  }
  triggerAlert(t, r = "") {
    const e = this.alerts.find((a) => a.trigger == t);
    return l(e) ? this : (e == null || e.convertContents(r).show().autoClose(), this);
  }
}
const j = {};
function se() {
  const i = [
    {
      name: "AutoCompleteField",
      field: R
    },
    {
      name: "CheckboxField",
      field: q
    },
    {
      name: "CheckboxGroupField",
      field: V
    },
    {
      name: "PasswordField",
      field: U
    },
    {
      name: "RadioGroupField",
      field: $
    },
    {
      name: "RadioField",
      field: z
    },
    {
      name: "ColorPicker",
      field: H
    },
    {
      name: "ColorPickerField",
      field: K
    },
    {
      name: "DatePicker",
      field: Q
    },
    {
      name: "DatePickerField",
      field: W
    },
    {
      name: "FileInputField",
      field: X
    },
    {
      name: "SwitchField",
      field: Y
    },
    {
      name: "TextField",
      field: Z
    },
    {
      name: "TimePickerField",
      field: ee
    },
    {
      name: "SelectField",
      field: re
    },
    {
      name: "ActionIcon",
      field: O
    },
    {
      name: "ActionButton",
      field: P
    },
    {
      name: "TextareaField",
      field: te
    }
  ];
  for (const t of i)
    oe(t.name, t.field);
}
se();
function oe(i, t) {
  j[i] = t;
}
function S(i) {
  return j[i];
}
class De extends D {
  constructor(r) {
    super(r);
    // actions: Array<ActionIcon | ActionButton> = [];
    s(this, "actions", []);
    s(this, "callback", "");
    s(this, "inline", !1);
    s(this, "justify_row", k.Center);
    s(this, "type", v.Action);
    if (!l(r == null ? void 0 : r.actions) && h(r == null ? void 0 : r.actions)) {
      for (const e of (r == null ? void 0 : r.actions) ?? [])
        if (e instanceof O || e instanceof P)
          this.actions.push(e);
        else if (!l(e.discriminator)) {
          const a = e.discriminator;
          this.instantiateAction(a, e);
        }
      r == null || delete r.actions;
    }
    Object.assign(this, r);
  }
  instantiateAction(r, e) {
    const a = S(r);
    if (a) {
      const o = new a(e);
      this.actions.push(o);
    } else
      console.error(`Class "${r}" not found in the registry.`);
  }
  data(r) {
    const e = new FormData();
    return e.set("form_name", this.name), e.set("form_action", r), e;
  }
  async process(r) {
    var a, o, f;
    let e;
    this.isLoading(!0);
    try {
      if (e = await n.request(
        F.Post,
        p.options.buildDomain("/forms/process"),
        n.mergeData(this.data(r), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), e.status === 200 || e.status === 204)
        return this.isLoading(((a = e == null ? void 0 : e.data) == null ? void 0 : a.loader) ?? !1), this.redirect((o = e == null ? void 0 : e.data) == null ? void 0 : o.redirect), (f = e == null ? void 0 : e.data) != null && f.result ? JSON.parse(JSON.stringify(e.data)) : !1;
    } catch {
      return !1;
    }
    return !1;
  }
  props() {
    return {};
  }
}
class je extends D {
  constructor(r) {
    super(r);
    s(this, "button_align_row", G.Center);
    s(this, "button_justify_row", k.Center);
    s(this, "buttons", []);
    s(this, "fields", []);
    s(this, "original", []);
    s(this, "type", v.Input);
    if (!l(r == null ? void 0 : r.fields) && h(r == null ? void 0 : r.fields)) {
      for (const e of (r == null ? void 0 : r.fields) ?? [])
        if (!l(e.discriminator)) {
          const a = e.discriminator;
          this.instantiateField(a, e);
        }
      r == null || delete r.fields;
    }
    if (!l(r == null ? void 0 : r.buttons) && h(r == null ? void 0 : r.buttons)) {
      for (const e of (r == null ? void 0 : r.buttons) ?? [])
        this.buttons.push(new ae(e));
      r == null || delete r.buttons;
    }
    Object.assign(this, r), this.original = this.fields.map((e) => Object.assign({}, e)), this.fields = this.fields.sort((e, a) => e.order - a.order), this.buttons = this.buttons.sort((e, a) => e.order - a.order);
  }
  data() {
    const r = this.additional_data.find((a) => a.key == "identifier" || a.key == "id"), e = new FormData();
    return e.set("form_name", this.name), l(r) || e.set("id", r == null ? void 0 : r.value), this.fields.forEach((a) => {
      l(a.value) || (h(a.value) ? a.value.forEach((o) => {
        e.set(this.formatForArrayOrObject(a.name), o);
      }) : M(a.value) ? e.set(this.formatForArrayOrObject(a.name), a.value) : e.set(a.name, a.value));
    }), e;
  }
  formatForArrayOrObject(r) {
    return r + "[]";
  }
  instantiateField(r, e) {
    const a = S(r);
    if (a) {
      const o = new a(e);
      this.fields.push(o);
    } else
      console.error(`Class "${r}" not found in the registry.`);
  }
  async process(r) {
    var a, o, f, m, A, y, b, w;
    this.processing();
    let e;
    l(r) || this.additional_data.push({ key: "recaptcha_token", value: r });
    try {
      if (e = await n.request(
        F.Post,
        p.options.buildDomain("/forms/process"),
        n.mergeData(this.data(), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), this.processed(), e.status === 200 || e.status === 204) {
        this.isLoading(((a = e == null ? void 0 : e.data) == null ? void 0 : a.loader) ?? !1);
        const d = JSON.parse(JSON.stringify((o = e == null ? void 0 : e.data) == null ? void 0 : o.data));
        if ((f = e == null ? void 0 : e.data) != null && f.result)
          return this.success((m = e == null ? void 0 : e.data) == null ? void 0 : m.data), this.redirect((A = e == null ? void 0 : e.data) == null ? void 0 : A.redirect), (y = e == null ? void 0 : e.data) == null ? void 0 : y.data;
        if (!l(d == null ? void 0 : d.validation_errors)) {
          for (const u in d == null ? void 0 : d.validation_errors) {
            const E = this.fields.find((g) => g.name === u), L = d == null ? void 0 : d.validation_errors[u];
            for (const g of L)
              E.addErrorMessage(g);
          }
          return this.failedValidation(), !1;
        }
        return this.failed((b = e == null ? void 0 : e.data) == null ? void 0 : b.data), this.redirect((w = e == null ? void 0 : e.data) == null ? void 0 : w.redirect), !1;
      }
    } catch (d) {
      let u = "Unknown Error";
      return d instanceof Error && (u = d.message), console.error("Unable to process form: " + u), !1;
    }
    return this.failed(), !1;
  }
  loadErrorMessages(r) {
    let e;
    for (e of r) {
      const a = this.fields.find((o) => o.name === e.id);
      for (const o of e.errorMessages)
        this.hasErrorMessage(a, o) || a.addErrorMessage(o);
    }
    return this;
  }
  hasErrorMessage(r, e) {
    if (typeof r.error_messages == "string")
      return r.error_messages == e;
    const a = r.error_messages.find((o) => o === e);
    return !l(a);
  }
  /**
   * Provides the props for VForm
   * @returns VForm
   */
  props() {
    const r = {};
    return r.enctype = _.JSON, this.axios.multi_part && (r.enctype = _.MultiPart), r;
  }
  reset() {
    super.reset();
    const r = this.original;
    return this.fields = this.fields.map((e) => {
      var a;
      return e.value = (a = r.find((o) => o.name === e.name)) == null ? void 0 : a.value, e.clearErrorMessages(), e;
    }), this;
  }
}
export {
  De as ActionForm,
  D as EasyForm,
  je as InputForm
};
