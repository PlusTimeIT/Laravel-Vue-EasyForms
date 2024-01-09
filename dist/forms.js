var E = Object.defineProperty;
var L = (d, r, e) => r in d ? E(d, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[r] = e;
var a = (d, r, e) => (L(d, typeof r != "symbol" ? r + "" : r, e), e);
import { i as l, a as h, s as F, g as J } from "./Store-ff430d87.js";
import { A as c } from "./AlertTriggers-18dccfa1.js";
import { A as p, C as w } from "./ContentTypes-f2427ff5.js";
import { F as M } from "./FormLoaderTypes-b32e44d6.js";
import { A as N } from "./Alert-ecc48ffd.js";
import { P as B } from "./ProgressLinear-0f32cd16.js";
import { S as n } from "./ServerCall-e0f70588.js";
import { A as C } from "./AxiosOptions-6a3d3f30.js";
import { F as x } from "./FormLoader-1edcf0ff.js";
import { ActionIcon as _, ActionButton as O } from "./actions.js";
import { J as P, F as k, A as I } from "./JustifyRow-eb5715b2.js";
import { AutoCompleteField as G, CheckboxField as R, CheckboxGroupField as q, PasswordField as V, RadioGroupField as U, RadioField as $, ColorPicker as z, ColorPickerField as H, DatePicker as K, DatePickerField as Q, FileInputField as W, SwitchField as X, TextField as Y, TimePickerField as Z, SelectField as ee, TextareaField as re } from "./fields.js";
import "axios";
import { B as te } from "./Button-da6cf979.js";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./Icon-3ae1af1e.js";
import "./LocationTypes-c293bdaa.js";
import "./GotProps-12eeba8a.js";
import "./ViewModeTypes-25f1573e.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-abb2e0c5.js";
class v {
  constructor(r) {
    a(this, "additional_data", []);
    a(this, "additional_load_data", []);
    a(this, "alerts", []);
    a(this, "axios", new C());
    a(this, "loader");
    a(this, "loading", !0);
    a(this, "name", "");
    a(this, "original", []);
    a(this, "results", null);
    a(this, "show_title", !1);
    a(this, "text", "");
    a(this, "title", "");
    a(this, "type", "");
    if (!l(r == null ? void 0 : r.alerts) && h(r == null ? void 0 : r.alerts)) {
      for (const e of (r == null ? void 0 : r.alerts) ?? [])
        this.alerts.push(new N(e));
      r == null || delete r.alerts;
    }
    l(r == null ? void 0 : r.axios) || (this.axios = new C(r == null ? void 0 : r.axios), r == null || delete r.axios), l(r == null ? void 0 : r.loader) || (this.loader = new x(r == null ? void 0 : r.loader), r == null || delete r.loader), Object.assign(this, r), l(this.loader) && (this.loader = new x({
      type: M.Circular,
      progress: new B({ indeterminate: !0, color: "primary" })
    }));
  }
  cancelled() {
    return this.triggerAlert(c.Cancelled), this;
  }
  failed(r) {
    return this.triggerAlert(c.FailedProcessing, r), this;
  }
  failedValidation(r) {
    return this.triggerAlert(c.FailedValidation, r), this;
  }
  hasResults(r) {
    return this.results = r, this;
  }
  isLoading(r) {
    return this.loading = r, this;
  }
  additionalArrayToObject(r) {
    const e = {};
    for (const t of r)
      e[t.key] = t.value;
    return e;
  }
  async load() {
    var t, s, o;
    let r;
    this.triggerAlert(c.BeforeLoad), this.isLoading(!0);
    const e = new FormData();
    e.set("form_name", this.name);
    try {
      if (r = await n.request(
        p.Post,
        F.options.buildDomain("/forms/load"),
        n.mergeData(e, this.additionalArrayToObject(this.additional_load_data)),
        this.axios
      ), r.status === 200 || r.status === 204) {
        if (this.isLoading(((t = r == null ? void 0 : r.data) == null ? void 0 : t.loader) ?? !1), !((s = r == null ? void 0 : r.data) != null && s.result))
          return this.triggerAlert(c.FailedLoad), !1;
        const f = JSON.parse(JSON.stringify((o = r == null ? void 0 : r.data) == null ? void 0 : o.data));
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
    return this.alerts.forEach((r) => r.hide()), this;
  }
  reset() {
    return this.hideAllAlerts(), this.triggerAlert(c.FormReset), this;
  }
  redirect(r) {
    l(r) || (r == "reload" && window.location.reload(), window.location.href = r);
  }
  success(r) {
    return this.triggerAlert(c.SuccessProcessing, r), this;
  }
  triggerAlert(r, e = "") {
    const t = this.alerts.find((s) => s.trigger == r);
    return l(t) ? this : (t == null || t.convertContents(e).show().autoClose(), this);
  }
}
const D = {};
function se() {
  const d = [
    {
      name: "AutoCompleteField",
      field: G
    },
    {
      name: "CheckboxField",
      field: R
    },
    {
      name: "CheckboxGroupField",
      field: q
    },
    {
      name: "PasswordField",
      field: V
    },
    {
      name: "RadioGroupField",
      field: U
    },
    {
      name: "RadioField",
      field: $
    },
    {
      name: "ColorPicker",
      field: z
    },
    {
      name: "ColorPickerField",
      field: H
    },
    {
      name: "DatePicker",
      field: K
    },
    {
      name: "DatePickerField",
      field: Q
    },
    {
      name: "FileInputField",
      field: W
    },
    {
      name: "SwitchField",
      field: X
    },
    {
      name: "TextField",
      field: Y
    },
    {
      name: "TimePickerField",
      field: Z
    },
    {
      name: "SelectField",
      field: ee
    },
    {
      name: "ActionIcon",
      field: _
    },
    {
      name: "ActionButton",
      field: O
    },
    {
      name: "TextareaField",
      field: re
    }
  ];
  for (const r of d)
    ae(r.name, r.field);
}
se();
function ae(d, r) {
  D[d] = r;
}
function j(d) {
  return D[d];
}
class ve extends v {
  constructor(e) {
    super(e);
    // actions: Array<ActionIcon | ActionButton> = [];
    a(this, "actions", []);
    a(this, "callback", "");
    a(this, "inline", !1);
    a(this, "justify_row", P.Center);
    a(this, "type", k.Action);
    if (!l(e == null ? void 0 : e.actions) && h(e == null ? void 0 : e.actions)) {
      for (const t of (e == null ? void 0 : e.actions) ?? [])
        if (t instanceof _ || t instanceof O)
          this.actions.push(t);
        else if (!l(t.discriminator)) {
          const s = t.discriminator;
          this.instantiateAction(s, t);
        }
      e == null || delete e.actions;
    }
    Object.assign(this, e);
  }
  instantiateAction(e, t) {
    const s = j(e);
    if (s) {
      const o = new s(t);
      this.actions.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  data(e) {
    const t = new FormData();
    return t.set("form_name", this.name), t.set("form_action", e), t;
  }
  async process(e) {
    var s, o, f;
    let t;
    this.isLoading(!0);
    try {
      if (t = await n.request(
        p.Post,
        F.options.buildDomain("/forms/process"),
        n.mergeData(this.data(e), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), t.status === 200 || t.status === 204)
        return this.isLoading(((s = t == null ? void 0 : t.data) == null ? void 0 : s.loader) ?? !1), this.redirect((o = t == null ? void 0 : t.data) == null ? void 0 : o.redirect), (f = t == null ? void 0 : t.data) != null && f.result ? JSON.parse(JSON.stringify(t.data)) : !1;
    } catch {
      return !1;
    }
    return !1;
  }
  props() {
    return {};
  }
}
class De extends v {
  constructor(e) {
    super(e);
    a(this, "button_align_row", I.Center);
    a(this, "button_justify_row", P.Center);
    a(this, "buttons", []);
    a(this, "fields", []);
    a(this, "original", []);
    a(this, "type", k.Input);
    if (!l(e == null ? void 0 : e.fields) && h(e == null ? void 0 : e.fields)) {
      for (const t of (e == null ? void 0 : e.fields) ?? [])
        if (!l(t.discriminator)) {
          const s = t.discriminator;
          this.instantiateField(s, t);
        }
      e == null || delete e.fields;
    }
    if (!l(e == null ? void 0 : e.buttons) && h(e == null ? void 0 : e.buttons)) {
      for (const t of (e == null ? void 0 : e.buttons) ?? [])
        this.buttons.push(new te(t));
      e == null || delete e.buttons;
    }
    Object.assign(this, e), this.original = this.fields.map((t) => Object.assign({}, t)), this.fields = this.fields.sort((t, s) => t.order - s.order), this.buttons = this.buttons.sort((t, s) => t.order - s.order);
  }
  data() {
    const e = this.additional_data.find((s) => s.key == "identifier" || s.key == "id"), t = new FormData();
    return t.set("form_name", this.name), l(e) || t.set("id", e == null ? void 0 : e.value), this.fields.forEach((s) => {
      l(s.value) || (h(s.value) ? s.value.forEach((o) => {
        t.set(this.formatForArrayOrObject(s.name), o);
      }) : J(s.value) ? t.set(this.formatForArrayOrObject(s.name), s.value) : t.set(s.name, s.value));
    }), t;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  instantiateField(e, t) {
    const s = j(e);
    if (s) {
      const o = new s(t);
      this.fields.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  async process() {
    var t, s, o, f, m, A, y, b;
    this.processing();
    let e;
    try {
      if (e = await n.request(
        p.Post,
        F.options.buildDomain("/forms/process"),
        n.mergeData(this.data(), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), this.processed(), e.status === 200 || e.status === 204) {
        this.isLoading(((t = e == null ? void 0 : e.data) == null ? void 0 : t.loader) ?? !1);
        const i = JSON.parse(JSON.stringify((s = e == null ? void 0 : e.data) == null ? void 0 : s.data));
        if ((o = e == null ? void 0 : e.data) != null && o.result)
          return this.success((f = e == null ? void 0 : e.data) == null ? void 0 : f.data), this.redirect((m = e == null ? void 0 : e.data) == null ? void 0 : m.redirect), (A = e == null ? void 0 : e.data) == null ? void 0 : A.data;
        if (!l(i == null ? void 0 : i.validation_errors)) {
          for (const u in i == null ? void 0 : i.validation_errors) {
            const S = this.fields.find((g) => g.name === u), T = i == null ? void 0 : i.validation_errors[u];
            for (const g of T)
              S.addErrorMessage(g);
          }
          return this.failedValidation(), !1;
        }
        return this.failed((y = e == null ? void 0 : e.data) == null ? void 0 : y.data), this.redirect((b = e == null ? void 0 : e.data) == null ? void 0 : b.redirect), !1;
      }
    } catch (i) {
      let u = "Unknown Error";
      return i instanceof Error && (u = i.message), console.error("Unable to process form: " + u), !1;
    }
    return this.failed(), !1;
  }
  loadErrorMessages(e) {
    let t;
    for (t of e) {
      const s = this.fields.find((o) => o.name === t.id);
      for (const o of t.errorMessages)
        this.hasErrorMessage(s, o) || s.addErrorMessage(o);
    }
    return this;
  }
  hasErrorMessage(e, t) {
    if (typeof e.error_messages == "string")
      return e.error_messages == t;
    const s = e.error_messages.find((o) => o === t);
    return !l(s);
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
    return this.fields = this.fields.map((t) => {
      var s;
      return t.value = (s = e.find((o) => o.name === t.name)) == null ? void 0 : s.value, t.clearErrorMessages(), t;
    }), this;
  }
}
export {
  ve as ActionForm,
  v as EasyForm,
  De as InputForm
};
