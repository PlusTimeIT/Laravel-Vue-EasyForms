var T = Object.defineProperty;
var J = (i, t, e) => t in i ? T(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var s = (i, t, e) => (J(i, typeof t != "symbol" ? t + "" : t, e), e);
import { i as l, a as m, s as F, g as M } from "./Store-03b8f4cc.js";
import { A as c } from "./AlertTriggers-18dccfa1.js";
import { A, C as w } from "./ContentTypes-f2427ff5.js";
import { F as N } from "./FormLoaderTypes-b32e44d6.js";
import { A as B } from "./Alert-8adc307b.js";
import { P as I } from "./ProgressLinear-a970bcbf.js";
import { S as n } from "./ServerCall-badff9b1.js";
import { A as C } from "./AxiosOptions-6a3d3f30.js";
import { F as x } from "./FormLoader-94dcff93.js";
import { ActionIcon as O, ActionButton as k } from "./actions.js";
import { J as P, F as v, A as G } from "./JustifyRow-eb5715b2.js";
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
    if (!l(t == null ? void 0 : t.alerts) && m(t == null ? void 0 : t.alerts)) {
      for (const e of (t == null ? void 0 : t.alerts) ?? [])
        this.alerts.push(new B(e));
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
    const e = {};
    for (const r of t)
      e[r.key] = r.value;
    return e;
  }
  async load() {
    var r, a, o;
    let t;
    this.triggerAlert(c.BeforeLoad), this.isLoading(!0);
    const e = new FormData();
    e.set("form_name", this.name);
    try {
      if (t = await n.request(
        A.Post,
        F.options.buildDomain("/forms/load"),
        n.mergeData(e, this.additionalArrayToObject(this.additional_load_data)),
        this.axios
      ), t.status === 200 || t.status === 204) {
        if (this.isLoading(((r = t == null ? void 0 : t.data) == null ? void 0 : r.loader) ?? !1), !((a = t == null ? void 0 : t.data) != null && a.result))
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
  triggerAlert(t, e = "") {
    const r = this.alerts.find((a) => a.trigger == t);
    return l(r) ? this : (r == null || r.convertContents(e).show().autoClose(), this);
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
      field: k
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
  constructor(e) {
    super(e);
    // actions: Array<ActionIcon | ActionButton> = [];
    s(this, "actions", []);
    s(this, "callback", "");
    s(this, "inline", !1);
    s(this, "justify_row", P.Center);
    s(this, "type", v.Action);
    if (!l(e == null ? void 0 : e.actions) && m(e == null ? void 0 : e.actions)) {
      for (const r of (e == null ? void 0 : e.actions) ?? [])
        if (r instanceof O || r instanceof k)
          this.actions.push(r);
        else if (!l(r.discriminator)) {
          const a = r.discriminator;
          this.instantiateAction(a, r);
        }
      e == null || delete e.actions;
    }
    Object.assign(this, e);
  }
  instantiateAction(e, r) {
    const a = S(e);
    if (a) {
      const o = new a(r);
      this.actions.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  data(e) {
    const r = new FormData();
    return r.set("form_name", this.name), r.set("form_action", e), r;
  }
  async process(e, r) {
    var o, f, u;
    let a;
    this.isLoading(!0), l(r) || this.additional_data.push({ key: "recaptcha_token", value: r });
    try {
      if (a = await n.request(
        A.Post,
        F.options.buildDomain("/forms/process"),
        n.mergeData(this.data(e), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), a.status === 200 || a.status === 204)
        return this.isLoading(((o = a == null ? void 0 : a.data) == null ? void 0 : o.loader) ?? !1), this.redirect((f = a == null ? void 0 : a.data) == null ? void 0 : f.redirect), (u = a == null ? void 0 : a.data) != null && u.result ? JSON.parse(JSON.stringify(a.data)) : !1;
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
  constructor(e) {
    super(e);
    s(this, "button_align_row", G.Center);
    s(this, "button_justify_row", P.Center);
    s(this, "buttons", []);
    s(this, "fields", []);
    s(this, "original", []);
    s(this, "type", v.Input);
    if (!l(e == null ? void 0 : e.fields) && m(e == null ? void 0 : e.fields)) {
      for (const r of (e == null ? void 0 : e.fields) ?? [])
        if (!l(r.discriminator)) {
          const a = r.discriminator;
          this.instantiateField(a, r);
        }
      e == null || delete e.fields;
    }
    if (!l(e == null ? void 0 : e.buttons) && m(e == null ? void 0 : e.buttons)) {
      for (const r of (e == null ? void 0 : e.buttons) ?? [])
        this.buttons.push(new ae(r));
      e == null || delete e.buttons;
    }
    Object.assign(this, e), this.original = this.fields.map((r) => Object.assign({}, r)), this.fields = this.fields.sort((r, a) => r.order - a.order), this.buttons = this.buttons.sort((r, a) => r.order - a.order);
  }
  data() {
    const e = this.additional_data.find((a) => a.key == "identifier" || a.key == "id"), r = new FormData();
    return r.set("form_name", this.name), l(e) || r.set("id", e == null ? void 0 : e.value), this.fields.forEach((a) => {
      l(a.value) || (m(a.value) ? a.value.forEach((o) => {
        r.set(this.formatForArrayOrObject(a.name), o);
      }) : M(a.value) ? r.set(this.formatForArrayOrObject(a.name), a.value) : r.set(a.name, a.value));
    }), r;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  instantiateField(e, r) {
    const a = S(e);
    if (a) {
      const o = new a(r);
      this.fields.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  async process(e) {
    var a, o, f, u, g, y, b, _;
    this.processing();
    let r;
    l(e) || this.additional_data.push({ key: "recaptcha_token", value: e });
    try {
      if (r = await n.request(
        A.Post,
        F.options.buildDomain("/forms/process"),
        n.mergeData(this.data(), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), this.processed(), r.status === 200 || r.status === 204) {
        this.isLoading(((a = r == null ? void 0 : r.data) == null ? void 0 : a.loader) ?? !1);
        const d = JSON.parse(JSON.stringify((o = r == null ? void 0 : r.data) == null ? void 0 : o.data));
        if ((f = r == null ? void 0 : r.data) != null && f.result)
          return this.success((u = r == null ? void 0 : r.data) == null ? void 0 : u.data), this.redirect((g = r == null ? void 0 : r.data) == null ? void 0 : g.redirect), (y = r == null ? void 0 : r.data) == null ? void 0 : y.data;
        if (!l(d == null ? void 0 : d.validation_errors)) {
          for (const h in d == null ? void 0 : d.validation_errors) {
            const E = this.fields.find((p) => p.name === h), L = d == null ? void 0 : d.validation_errors[h];
            for (const p of L)
              E.addErrorMessage(p);
          }
          return this.failedValidation(), !1;
        }
        return this.failed((b = r == null ? void 0 : r.data) == null ? void 0 : b.data), this.redirect((_ = r == null ? void 0 : r.data) == null ? void 0 : _.redirect), !1;
      }
    } catch (d) {
      let h = "Unknown Error";
      return d instanceof Error && (h = d.message), console.error("Unable to process form: " + h), !1;
    }
    return this.failed(), !1;
  }
  loadErrorMessages(e) {
    let r;
    for (r of e) {
      const a = this.fields.find((o) => o.name === r.id);
      for (const o of r.errorMessages)
        this.hasErrorMessage(a, o) || a.addErrorMessage(o);
    }
    return this;
  }
  hasErrorMessage(e, r) {
    if (typeof e.error_messages == "string")
      return e.error_messages == r;
    const a = e.error_messages.find((o) => o === r);
    return !l(a);
  }
  /**
   * Provides the props for VForm
   * @returns VForm
   */
  props() {
    const e = {};
    return e.enctype = w.JSON, this.axios.multi_part && (e.enctype = w.MultiPart), e;
  }
  reset() {
    super.reset();
    const e = this.original;
    return this.fields = this.fields.map((r) => {
      var a;
      return r.value = (a = e.find((o) => o.name === r.name)) == null ? void 0 : a.value, r.clearErrorMessages(), r;
    }), this;
  }
}
export {
  De as ActionForm,
  D as EasyForm,
  je as InputForm
};
