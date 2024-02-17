var T = Object.defineProperty;
var J = (d, a, e) => a in d ? T(d, a, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[a] = e;
var t = (d, a, e) => (J(d, typeof a != "symbol" ? a + "" : a, e), e);
import { a as O, A as P } from "./ActionIcon-DSSSKO_i.js";
import { A, C as w } from "./ContentTypes-DALGF8cl.js";
import { J as k, F as v, A as M } from "./JustifyRow-lPR7z0LW.js";
import { S as n } from "./ServerCall-Dz5gbGF4.js";
import { i as l, a as m, s as p, b as N } from "./Store-C0lLqhvS.js";
import { A as c } from "./AlertTriggers-cgUyFNKK.js";
import { F as I } from "./FormLoaderTypes-CMlSIXsL.js";
import { A as B } from "./Alert-C-mS-1XO.js";
import { P as R } from "./ProgressLinear-B2YdZ7kW.js";
import { A as C } from "./AxiosOptions-BgVktJZx.js";
import { F as x } from "./FormLoader-BWkyWBMp.js";
import { B as G } from "./Button-Emm_ZOhM.js";
import { A as q, C as V, a as U, P as $, R as z, e as H, c as K, b as Q, d as W, D as X, F as Y, f as Z, T as ee, g as re, S as ae, i as se } from "./TextareaField-BniQuau2.js";
import "axios";
class D {
  constructor(a) {
    t(this, "additional_data", []);
    t(this, "additional_load_data", []);
    t(this, "alerts", []);
    t(this, "axios", new C());
    t(this, "google_recaptcha_site_key", null);
    t(this, "loader");
    t(this, "loading", !0);
    t(this, "name", "");
    t(this, "original", []);
    t(this, "results", null);
    t(this, "show_title", !1);
    t(this, "text", "");
    t(this, "title", "");
    t(this, "type", "");
    if (!l(a == null ? void 0 : a.alerts) && m(a == null ? void 0 : a.alerts)) {
      for (const e of (a == null ? void 0 : a.alerts) ?? [])
        this.alerts.push(new B(e));
      a == null || delete a.alerts;
    }
    l(a == null ? void 0 : a.axios) || (this.axios = new C(a == null ? void 0 : a.axios), a == null || delete a.axios), l(a == null ? void 0 : a.loader) || (this.loader = new x(a == null ? void 0 : a.loader), a == null || delete a.loader), Object.assign(this, a), l(this.loader) && (this.loader = new x({
      type: I.Circular,
      progress: new R({ indeterminate: !0, color: "primary" })
    }));
  }
  cancelled() {
    return this.triggerAlert(c.Cancelled), this;
  }
  failed(a) {
    return this.triggerAlert(c.FailedProcessing, a), this;
  }
  failedValidation(a) {
    return this.triggerAlert(c.FailedValidation, a), this;
  }
  hasResults(a) {
    return this.results = a, this;
  }
  isLoading(a) {
    return this.loading = a, this;
  }
  additionalArrayToObject(a) {
    const e = {};
    for (const r of a)
      e[r.key] = r.value;
    return e;
  }
  async load() {
    var r, s, o;
    let a;
    this.triggerAlert(c.BeforeLoad), this.isLoading(!0);
    const e = new FormData();
    e.set("form_name", this.name);
    try {
      if (a = await n.request(
        A.Post,
        p.options.buildDomain("/forms/load"),
        n.mergeData(e, this.additionalArrayToObject(this.additional_load_data)),
        this.axios
      ), a.status === 200 || a.status === 204) {
        if (this.isLoading(((r = a == null ? void 0 : a.data) == null ? void 0 : r.loader) ?? !1), !((s = a == null ? void 0 : a.data) != null && s.result))
          return this.triggerAlert(c.FailedLoad), !1;
        const f = JSON.parse(JSON.stringify((o = a == null ? void 0 : a.data) == null ? void 0 : o.data));
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
    return this.alerts.forEach((a) => a.hide()), this;
  }
  reset() {
    return this.hideAllAlerts(), this.triggerAlert(c.FormReset), this;
  }
  redirect(a) {
    !l(a) && typeof a == "string" && (a == "reload" ? window.location.reload() : window.location.href = a);
  }
  success(a) {
    return this.triggerAlert(c.SuccessProcessing, a), this;
  }
  triggerAlert(a, e = "") {
    const r = this.alerts.find((s) => s.trigger == a);
    return l(r) ? this : (r == null || r.convertContents(e).show().autoClose(), this);
  }
}
const S = {};
function te() {
  const d = [
    {
      name: "AutoCompleteField",
      field: q
    },
    {
      name: "CheckboxField",
      field: V
    },
    {
      name: "CheckboxGroupField",
      field: U
    },
    {
      name: "PasswordField",
      field: $
    },
    {
      name: "RadioGroupField",
      field: z
    },
    {
      name: "RadioField",
      field: H
    },
    {
      name: "ColorPicker",
      field: K
    },
    {
      name: "ColorPickerField",
      field: Q
    },
    {
      name: "DatePicker",
      field: W
    },
    {
      name: "DatePickerField",
      field: X
    },
    {
      name: "FileInputField",
      field: Y
    },
    {
      name: "SwitchField",
      field: Z
    },
    {
      name: "TextField",
      field: ee
    },
    {
      name: "TimePickerField",
      field: re
    },
    {
      name: "SelectField",
      field: ae
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
      field: se
    }
  ];
  for (const a of d)
    oe(a.name, a.field);
}
te();
function oe(d, a) {
  S[d] = a;
}
function j(d) {
  return S[d];
}
class _e extends D {
  constructor(e) {
    super(e);
    // actions: Array<ActionIcon | ActionButton> = [];
    t(this, "actions", []);
    t(this, "callback", "");
    t(this, "inline", !1);
    t(this, "justify_row", k.Center);
    t(this, "type", v.Action);
    if (!l(e == null ? void 0 : e.actions) && m(e == null ? void 0 : e.actions)) {
      for (const r of (e == null ? void 0 : e.actions) ?? [])
        if (r instanceof O || r instanceof P)
          this.actions.push(r);
        else if (!l(r.discriminator)) {
          const s = r.discriminator;
          this.instantiateAction(s, r);
        }
      e == null || delete e.actions;
    }
    Object.assign(this, e);
  }
  instantiateAction(e, r) {
    const s = j(e);
    if (s) {
      const o = new s(r);
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
    let s;
    this.isLoading(!0), l(r) || this.additional_data.push({ key: "recaptcha_token", value: r });
    try {
      if (s = await n.request(
        A.Post,
        p.options.buildDomain("/forms/process"),
        n.mergeData(this.data(e), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), s.status === 200 || s.status === 204)
        return this.isLoading(((o = s == null ? void 0 : s.data) == null ? void 0 : o.loader) ?? !1), this.redirect((f = s == null ? void 0 : s.data) == null ? void 0 : f.redirect), (u = s == null ? void 0 : s.data) != null && u.result ? JSON.parse(JSON.stringify(s.data)) : !1;
    } catch {
      return !1;
    }
    return !1;
  }
  props() {
    return {};
  }
}
class we extends D {
  constructor(e) {
    super(e);
    t(this, "button_align_row", M.Center);
    t(this, "button_justify_row", k.Center);
    t(this, "buttons", []);
    t(this, "fields", []);
    t(this, "original", []);
    t(this, "type", v.Input);
    if (!l(e == null ? void 0 : e.fields) && m(e == null ? void 0 : e.fields)) {
      for (const r of (e == null ? void 0 : e.fields) ?? [])
        if (!l(r.discriminator)) {
          const s = r.discriminator;
          this.instantiateField(s, r);
        }
      e == null || delete e.fields;
    }
    if (!l(e == null ? void 0 : e.buttons) && m(e == null ? void 0 : e.buttons)) {
      for (const r of (e == null ? void 0 : e.buttons) ?? [])
        this.buttons.push(new G(r));
      e == null || delete e.buttons;
    }
    Object.assign(this, e), this.original = this.fields.map((r) => Object.assign({}, r)), this.fields = this.fields.sort((r, s) => r.order - s.order), this.buttons = this.buttons.sort((r, s) => r.order - s.order);
  }
  data() {
    const e = this.additional_data.find((s) => s.key == "identifier" || s.key == "id"), r = new FormData();
    return r.set("form_name", this.name), l(e) || r.set("id", e == null ? void 0 : e.value), this.fields.forEach((s) => {
      l(s.value) || (m(s.value) ? s.value.forEach((o) => {
        r.set(this.formatForArrayOrObject(s.name), o);
      }) : N(s.value) ? r.set(this.formatForArrayOrObject(s.name), s.value) : r.set(s.name, s.value));
    }), r;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  instantiateField(e, r) {
    const s = j(e);
    if (s) {
      const o = new s(r);
      this.fields.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  async process(e) {
    var s, o, f, u, g, y, b, _;
    this.processing();
    let r;
    l(e) || this.additional_data.push({ key: "recaptcha_token", value: e });
    try {
      if (r = await n.request(
        A.Post,
        p.options.buildDomain("/forms/process"),
        n.mergeData(this.data(), this.additionalArrayToObject(this.additional_data)),
        this.axios
      ), this.processed(), r.status === 200 || r.status === 204) {
        this.isLoading(((s = r == null ? void 0 : r.data) == null ? void 0 : s.loader) ?? !1);
        const i = JSON.parse(JSON.stringify((o = r == null ? void 0 : r.data) == null ? void 0 : o.data));
        if ((f = r == null ? void 0 : r.data) != null && f.result)
          return this.success((u = r == null ? void 0 : r.data) == null ? void 0 : u.data), this.redirect((g = r == null ? void 0 : r.data) == null ? void 0 : g.redirect), (y = r == null ? void 0 : r.data) == null ? void 0 : y.data;
        if (!l(i == null ? void 0 : i.validation_errors)) {
          for (const h in i == null ? void 0 : i.validation_errors) {
            const E = this.fields.find((F) => F.name === h), L = i == null ? void 0 : i.validation_errors[h];
            for (const F of L)
              E.addErrorMessage(F);
          }
          return this.failedValidation(), !1;
        }
        return this.failed((b = r == null ? void 0 : r.data) == null ? void 0 : b.data), this.redirect((_ = r == null ? void 0 : r.data) == null ? void 0 : _.redirect), !1;
      }
    } catch (i) {
      let h = "Unknown Error";
      return i instanceof Error && (h = i.message), console.error("Unable to process form: " + h), !1;
    }
    return this.failed(), !1;
  }
  loadErrorMessages(e) {
    let r;
    for (r of e) {
      const s = this.fields.find((o) => o.name === r.id);
      for (const o of r.errorMessages)
        this.hasErrorMessage(s, o) || s.addErrorMessage(o);
    }
    return this;
  }
  hasErrorMessage(e, r) {
    if (typeof e.error_messages == "string")
      return e.error_messages == r;
    const s = e.error_messages.find((o) => o === r);
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
    return this.fields = this.fields.map((r) => {
      var s;
      return r.value = (s = e.find((o) => o.name === r.name)) == null ? void 0 : s.value, r.clearErrorMessages(), r;
    }), this;
  }
}
export {
  _e as A,
  D as E,
  we as I
};
