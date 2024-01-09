var S = Object.defineProperty;
var T = (d, r, e) => r in d ? S(d, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[r] = e;
var a = (d, r, e) => (T(d, typeof r != "symbol" ? r + "" : r, e), e);
import { i as l, a as u, s as m, g as L } from "./Store-ff430d87.js";
import { A as i } from "./AlertTriggers-18dccfa1.js";
import { A as g, C as y } from "./ContentTypes-f2427ff5.js";
import { F as E } from "./FormLoaderTypes-b32e44d6.js";
import { A as J } from "./Alert-ecc48ffd.js";
import { P as M } from "./ProgressLinear-0f32cd16.js";
import { S as n } from "./ServerCall-f623f2f3.js";
import { A as b } from "./AxiosOptions-6a3d3f30.js";
import { F as C } from "./FormLoader-1edcf0ff.js";
import { ActionIcon as w, ActionButton as x } from "./actions.js";
import { J as _, F as O, A as N } from "./JustifyRow-eb5715b2.js";
import { AutoCompleteField as B, CheckboxField as I, CheckboxGroupField as G, PasswordField as R, RadioGroupField as q, RadioField as V, ColorPicker as $, ColorPickerField as z, DatePicker as H, DatePickerField as K, FileInputField as Q, SwitchField as U, TextField as W, TimePickerField as X, SelectField as Y, TextareaField as Z } from "./fields.js";
import "axios";
import { B as ee } from "./Button-da6cf979.js";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./Icon-3ae1af1e.js";
import "./LocationTypes-c293bdaa.js";
import "./GotProps-12eeba8a.js";
import "./ViewModeTypes-25f1573e.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-abb2e0c5.js";
class P {
  constructor(r) {
    a(this, "additional_data", []);
    a(this, "additional_load_data", []);
    a(this, "alerts", []);
    a(this, "axios", new b());
    a(this, "loader");
    a(this, "loading", !0);
    a(this, "name", "");
    a(this, "original", []);
    a(this, "results", null);
    a(this, "show_title", !1);
    a(this, "text", "");
    a(this, "title", "");
    a(this, "type", "");
    if (!l(r == null ? void 0 : r.alerts) && u(r == null ? void 0 : r.alerts)) {
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
    for (const t of r)
      e[t.key] = t.value;
    return e;
  }
  async load() {
    var t, s, o;
    let r;
    this.triggerAlert(i.BeforeLoad), this.isLoading(!0);
    const e = new FormData();
    e.set("form_name", this.name);
    try {
      if (r = await n.request(
        g.Post,
        m.options.buildDomain("/forms/load"),
        n.mergeData(e, this.additionalArrayToObject(this.additional_load_data)),
        this.axios
      ), r.status === 200 || r.status === 204) {
        if (this.isLoading(((t = r == null ? void 0 : r.data) == null ? void 0 : t.loader) ?? !1), !((s = r == null ? void 0 : r.data) != null && s.result))
          return this.triggerAlert(i.FailedLoad), !1;
        const f = JSON.parse(JSON.stringify((o = r == null ? void 0 : r.data) == null ? void 0 : o.data));
        return l(f.type) ? (this.triggerAlert(i.FailedLoad), !1) : f;
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
    const t = this.alerts.find((s) => s.trigger == r);
    return l(t) ? this : (t == null || t.convertContents(e).show().autoClose(), this);
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
    te(r.name, r.field);
}
re();
function te(d, r) {
  k[d] = r;
}
function v(d) {
  return k[d];
}
class Pe extends P {
  constructor(e) {
    super(e);
    // actions: Array<ActionIcon | ActionButton> = [];
    a(this, "actions", []);
    a(this, "callback", "");
    a(this, "inline", !1);
    a(this, "justify_row", _.Center);
    a(this, "type", O.Action);
    if (!l(e == null ? void 0 : e.actions) && u(e == null ? void 0 : e.actions)) {
      for (const t of (e == null ? void 0 : e.actions) ?? [])
        if (t instanceof w || t instanceof x)
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
    const s = v(e);
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
    var s, o;
    let t;
    this.isLoading(!0);
    try {
      if (t = await n.request(
        g.Post,
        m.options.buildDomain("/forms/process"),
        n.mergeData(this.data(e), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), t.status === 200 || t.status === 204)
        return this.isLoading(((s = t == null ? void 0 : t.data) == null ? void 0 : s.loader) ?? !1), (o = t == null ? void 0 : t.data) != null && o.result ? JSON.parse(JSON.stringify(t.data)) : !1;
    } catch {
      return !1;
    }
    return !1;
  }
  props() {
    return {};
  }
}
class ke extends P {
  constructor(e) {
    super(e);
    a(this, "button_align_row", N.Center);
    a(this, "button_justify_row", _.Center);
    a(this, "buttons", []);
    a(this, "fields", []);
    a(this, "original", []);
    a(this, "type", O.Input);
    if (!l(e == null ? void 0 : e.fields) && u(e == null ? void 0 : e.fields)) {
      for (const t of (e == null ? void 0 : e.fields) ?? [])
        if (!l(t.discriminator)) {
          const s = t.discriminator;
          this.instantiateField(s, t);
        }
      e == null || delete e.fields;
    }
    if (!l(e == null ? void 0 : e.buttons) && u(e == null ? void 0 : e.buttons)) {
      for (const t of (e == null ? void 0 : e.buttons) ?? [])
        this.buttons.push(new ee(t));
      e == null || delete e.buttons;
    }
    Object.assign(this, e), this.original = this.fields.map((t) => Object.assign({}, t)), this.fields = this.fields.sort((t, s) => t.order - s.order), this.buttons = this.buttons.sort((t, s) => t.order - s.order);
  }
  data() {
    const e = this.additional_data.find((s) => s.key == "identifier" || s.key == "id"), t = new FormData();
    return t.set("form_name", this.name), l(e) || t.set("id", e == null ? void 0 : e.value), this.fields.forEach((s) => {
      l(s.value) || (u(s.value) ? s.value.forEach((o) => {
        t.set(this.formatForArrayOrObject(s.name), o);
      }) : L(s.value) ? t.set(this.formatForArrayOrObject(s.name), s.value) : t.set(s.name, s.value));
    }), t;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  instantiateField(e, t) {
    const s = v(e);
    if (s) {
      const o = new s(t);
      this.fields.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  async process() {
    var t, s, o, f, p, F;
    this.processing();
    let e;
    try {
      if (e = await n.request(
        g.Post,
        m.options.buildDomain("/forms/process"),
        n.mergeData(this.data(), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), this.processed(), e.status === 200 || e.status === 204) {
        this.isLoading(((t = e == null ? void 0 : e.data) == null ? void 0 : t.loader) ?? !1);
        const c = JSON.parse(JSON.stringify((s = e == null ? void 0 : e.data) == null ? void 0 : s.data));
        if ((o = e == null ? void 0 : e.data) != null && o.result)
          return this.success((f = e == null ? void 0 : e.data) == null ? void 0 : f.data), (p = e == null ? void 0 : e.data) == null ? void 0 : p.data;
        if (!l(c == null ? void 0 : c.validation_errors)) {
          for (const A in c == null ? void 0 : c.validation_errors) {
            const D = this.fields.find((h) => h.name === A), j = c == null ? void 0 : c.validation_errors[A];
            for (const h of j)
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
    return e.enctype = y.JSON, this.axios.multi_part && (e.enctype = y.MultiPart), e;
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
  Pe as ActionForm,
  P as EasyForm,
  ke as InputForm
};
