var L = Object.defineProperty;
var E = (d, r, e) => r in d ? L(d, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[r] = e;
var o = (d, r, e) => (E(d, typeof r != "symbol" ? r + "" : r, e), e);
import { i as l, a as n, s as m, g as j } from "./Store-dda3f8ae.js";
import { A as i } from "./AlertTriggers-18dccfa1.js";
import { A as g, C as y } from "./ContentTypes-f2427ff5.js";
import { F as T } from "./FormLoaderTypes-b32e44d6.js";
import { A as J } from "./Alert-22343bd8.js";
import { P as M } from "./ProgressLinear-c047f276.js";
import { S as f } from "./ServerCall-b82e7d81.js";
import { A as C } from "./AxiosOptions-6a3d3f30.js";
import { F as b } from "./FormLoader-92c7e031.js";
import { ActionIcon as x, ActionButton as w } from "./actions.js";
import { J as _, F as P, A as N } from "./JustifyRow-eb5715b2.js";
import { AutoCompleteField as B, CheckboxField as I, CheckboxGroupField as G, PasswordField as R, RadioGroupField as q, RadioField as V, ColorPicker as $, ColorPickerField as z, DatePicker as H, DatePickerField as K, FileInputField as Q, SwitchField as U, TextField as W, TimePickerField as X, SelectField as Y, TextareaField as Z } from "./fields.js";
import "axios";
import { B as ee } from "./Button-d1e033b5.js";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./Icon-b07e5bb0.js";
import "./LocationTypes-c293bdaa.js";
import "./GotProps-ebb373b7.js";
import "./ViewModeTypes-25f1573e.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-f7454ed3.js";
class O {
  constructor(r) {
    o(this, "additional_data", []);
    o(this, "additional_load_data", []);
    o(this, "alerts", []);
    o(this, "axios", new C());
    o(this, "loader");
    o(this, "loading", !0);
    o(this, "name", "");
    o(this, "original", []);
    o(this, "results", null);
    o(this, "text", "");
    o(this, "title", "");
    o(this, "type", "");
    if (!l(r == null ? void 0 : r.alerts) && n(r == null ? void 0 : r.alerts)) {
      for (const e of (r == null ? void 0 : r.alerts) ?? [])
        this.alerts.push(new J(e));
      r == null || delete r.alerts;
    }
    l(r == null ? void 0 : r.axios) || (this.axios = new C(r == null ? void 0 : r.axios), r == null || delete r.axios), l(r == null ? void 0 : r.loader) || (this.loader = new b(r == null ? void 0 : r.loader), r == null || delete r.loader), Object.assign(this, r), l(this.loader) && (this.loader = new b({
      type: T.Circular,
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
  async load() {
    var e, s, t;
    let r;
    this.triggerAlert(i.BeforeLoad), this.isLoading(!0);
    try {
      if (r = await f.request(
        g.Post,
        m.options.buildDomain("/forms/load"),
        f.mergeData({ form_name: this.name }, this.additional_load_data),
        this.axios
      ), r.status === 200 || r.status === 204) {
        if (this.isLoading(((e = r == null ? void 0 : r.data) == null ? void 0 : e.loader) ?? !1), !((s = r == null ? void 0 : r.data) != null && s.result))
          return this.triggerAlert(i.FailedLoad), !1;
        const a = JSON.parse(JSON.stringify((t = r == null ? void 0 : r.data) == null ? void 0 : t.data));
        return l(a.type) ? (this.triggerAlert(i.FailedLoad), !1) : a;
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
    const s = this.alerts.find((t) => t.trigger == r);
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
      field: G
    },
    {
      name: "PasswordField",
      field: R
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
      field: x
    },
    {
      name: "ActionButton",
      field: w
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
    o(this, "actions", []);
    o(this, "callback", "");
    o(this, "inline", !1);
    o(this, "justify_row", _.Center);
    o(this, "type", P.Action);
    if (!l(e == null ? void 0 : e.actions) && n(e == null ? void 0 : e.actions)) {
      for (const s of (e == null ? void 0 : e.actions) ?? [])
        if (s instanceof x || s instanceof w)
          this.actions.push(s);
        else if (!l(s.discriminator)) {
          const t = s.discriminator;
          this.instantiateAction(t, s);
        }
      e == null || delete e.actions;
    }
    Object.assign(this, e);
  }
  instantiateAction(e, s) {
    const t = v(e);
    if (t) {
      const a = new t(s);
      this.actions.push(a);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  data(e) {
    const s = new FormData();
    return s.set("form_name", this.name), s.set("form_action", e), s;
  }
  async process(e) {
    var t, a;
    let s;
    this.isLoading(!0);
    try {
      if (s = await f.request(
        g.Post,
        m.options.buildDomain("/forms/process"),
        f.mergeData(this.data(e), this.additional_data),
        this.axios
      ), s.status === 200 || s.status === 204)
        return this.isLoading(((t = s == null ? void 0 : s.data) == null ? void 0 : t.loader) ?? !1), (a = s == null ? void 0 : s.data) != null && a.result ? JSON.parse(JSON.stringify(s.data)) : !1;
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
    o(this, "button_align_row", N.Center);
    o(this, "button_justify_row", _.Center);
    o(this, "buttons", []);
    o(this, "fields", []);
    o(this, "original", []);
    o(this, "type", P.Input);
    if (!l(e == null ? void 0 : e.fields) && n(e == null ? void 0 : e.fields)) {
      for (const s of (e == null ? void 0 : e.fields) ?? [])
        if (!l(s.discriminator)) {
          const t = s.discriminator;
          this.instantiateField(t, s);
        }
      e == null || delete e.fields;
    }
    if (!l(e == null ? void 0 : e.buttons) && n(e == null ? void 0 : e.buttons)) {
      for (const s of (e == null ? void 0 : e.buttons) ?? [])
        this.buttons.push(new ee(s));
      e == null || delete e.buttons;
    }
    Object.assign(this, e), this.original = this.fields.map((s) => Object.assign({}, s)), this.fields = this.fields.sort((s, t) => s.order - t.order), this.buttons = this.buttons.sort((s, t) => s.order - t.order);
  }
  data() {
    const e = this.additional_data.find((t) => t.key == "identifier" || t.key == "id"), s = new FormData();
    return s.set("form_name", this.name), l(e) || s.set("id", e == null ? void 0 : e.value), this.fields.forEach((t) => {
      l(t.value) || (n(t.value) ? t.value.forEach((a) => {
        s.set(this.formatForArrayOrObject(t.name), a);
      }) : j(t.value) ? s.set(this.formatForArrayOrObject(t.name), t.value) : s.set(t.name, t.value));
    }), s;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  instantiateField(e, s) {
    const t = v(e);
    if (t) {
      const a = new t(s);
      this.fields.push(a);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  async process() {
    var s, t, a, u, p, F;
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
        const c = JSON.parse(JSON.stringify((t = e == null ? void 0 : e.data) == null ? void 0 : t.data));
        if ((a = e == null ? void 0 : e.data) != null && a.result)
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
      const t = this.fields.find((a) => a.name === s.id);
      for (const a of s.errorMessages)
        this.hasErrorMessage(t, a) || t.addErrorMessage(a);
    }
    return this;
  }
  hasErrorMessage(e, s) {
    if (typeof e.error_messages == "string")
      return e.error_messages == s;
    const t = e.error_messages.find((a) => a === s);
    return !l(t);
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
      var t;
      return s.value = (t = e.find((a) => a.name === s.name)) == null ? void 0 : t.value, s.clearErrorMessages(), s;
    }), this;
  }
}
export {
  Oe as ActionForm,
  O as EasyForm,
  ke as InputForm
};
