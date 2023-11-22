var T = Object.defineProperty;
var j = (i, s, e) => s in i ? T(i, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[s] = e;
var r = (i, s, e) => (j(i, typeof s != "symbol" ? s + "" : s, e), e);
import { i as l, a as f, s as m, g as E } from "./Types-cc63165d.js";
import { A as d } from "./AlertTriggers-18dccfa1.js";
import { A as g, C as y } from "./ContentTypes-f2427ff5.js";
import { F as L } from "./FormLoaderTypes-b32e44d6.js";
import { A as J } from "./Alert-656cba8e.js";
import { P as M } from "./ProgressLinear-fd659726.js";
import { S as n } from "./ServerCall-016fdee6.js";
import { A } from "./AxiosOptions-6a3d3f30.js";
import { F as b } from "./FormLoader-7688a5bf.js";
import { ActionIcon as x, ActionButton as C } from "./actions.js";
import { J as v, F as w, A as I } from "./JustifyRow-eb5715b2.js";
import { E as N, A as B, a as $, C as R, P as G, R as q, b as V, c as z, d as H, D as K, e as Q, F as U, S as W, T as X, f as Y, g as Z } from "./fields-7292d0a3.js";
import "axios";
import { D as ee, F as se } from "./ViewModeTypes-25f1573e.js";
import { B as te } from "./Button-c066a5e3.js";
import "./ButtonVariantTypes-85a127bd.js";
import "./ScrollStrategyTypes-749a6aaa.js";
import "./Tooltip-ca2b6abb.js";
import "./GotProps-c8fa699d.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-54a49747.js";
class P {
  constructor(s) {
    r(this, "additional_data", []);
    r(this, "additional_load_data", []);
    r(this, "alerts", []);
    r(this, "axios", new A());
    r(this, "loader");
    r(this, "loading", !0);
    r(this, "name", "");
    r(this, "original", []);
    r(this, "results", null);
    r(this, "text", "");
    r(this, "title", "");
    r(this, "type", "");
    if (!l(s == null ? void 0 : s.alerts) && f(s == null ? void 0 : s.alerts)) {
      for (const e of (s == null ? void 0 : s.alerts) ?? [])
        this.alerts.push(new J(e));
      s == null || delete s.alerts;
    }
    l(s == null ? void 0 : s.axios) || (this.axios = new A(s == null ? void 0 : s.axios), s == null || delete s.axios), l(s == null ? void 0 : s.loader) || (this.loader = new b(s == null ? void 0 : s.loader), s == null || delete s.loader), Object.assign(this, s), l(this.loader) && (this.loader = new b({
      type: L.Circular,
      progress: new M({ indeterminate: !0, color: "primary" })
    }));
  }
  cancelled() {
    return this.triggerAlert(d.Cancelled), this;
  }
  failed(s) {
    return this.triggerAlert(d.FailedProcessing, s), this;
  }
  failedValidation(s) {
    return this.triggerAlert(d.FailedValidation, s), this;
  }
  hasResults(s) {
    return this.results = s, this;
  }
  isLoading(s) {
    return this.loading = s, this;
  }
  async load() {
    var e, t, a;
    let s;
    this.triggerAlert(d.BeforeLoad), this.isLoading(!0);
    try {
      if (s = await n.request(
        g.Post,
        m.options.buildDomain("/forms/load"),
        n.mergeData({ form_name: this.name }, this.additional_load_data),
        this.axios
      ), s.status === 200 || s.status === 204) {
        if (this.isLoading(((e = s == null ? void 0 : s.data) == null ? void 0 : e.loader) ?? !1), !((t = s == null ? void 0 : s.data) != null && t.result))
          return this.triggerAlert(d.FailedLoad), !1;
        const o = JSON.parse(JSON.stringify((a = s == null ? void 0 : s.data) == null ? void 0 : a.data));
        return l(o.type) ? (this.triggerAlert(d.FailedLoad), !1) : o;
      }
    } catch {
      return this.triggerAlert(d.FailedLoad), !1;
    }
    return this.triggerAlert(d.FailedLoad), !1;
  }
  processing() {
    return this.triggerAlert(d.BeforeProcessing), this;
  }
  processed() {
    return this.triggerAlert(d.AfterProcessing), this;
  }
  props() {
    return {
      text: this.text
    };
  }
  hideAllAlerts() {
    return this.alerts.forEach((s) => s.hide()), this;
  }
  reset() {
    return this.hideAllAlerts(), this.triggerAlert(d.FormReset), this;
  }
  resetAlerts(s = []) {
    l(s.length) && (s = [d.SuccessProcessing, d.FailedProcessing]);
    for (const e of this.alerts)
      s.includes(e.trigger) && e.reset();
    return this;
  }
  success(s) {
    return console.log("success alert"), this.triggerAlert(d.SuccessProcessing, s), this;
  }
  triggerAlert(s, e = "") {
    const t = this.alerts.find((a) => a.trigger == s);
    return l(t) ? this : (t == null || t.convertContents(e).show().autoClose(), this);
  }
}
class re extends N {
  constructor(e) {
    super(e);
    r(this, "auto_select_first", !1);
    r(this, "chips", !1);
    r(this, "closable_chips", !1);
    r(this, "close_text", "$vuetify.close");
    r(this, "component", "v-select");
    r(this, "counter", !1);
    r(this, "direction", ee.Horizontal);
    r(this, "filter_keys", ["title"]);
    r(this, "filter_mode", se.Intersection);
    r(this, "hide_no_data", !1);
    r(this, "hide_selected", !1);
    r(this, "item_children", !1);
    r(this, "item_color");
    r(this, "item_props", "props");
    r(this, "item_title", "title");
    r(this, "item_value", "value");
    r(this, "items", []);
    r(this, "menu", !1);
    r(this, "menu_icon", "$dropdown");
    r(this, "multiple", !1);
    r(this, "no_data_text", "$vuetify.noDataText");
    r(this, "no_filter", !1);
    r(this, "open_on_clear", !1);
    r(this, "open_text", "$vuetify.open");
    r(this, "prepend_inner_icon");
    r(this, "return_object", !1);
    r(this, "search", "");
    r(this, "transition", !1);
    r(this, "type", "text");
    Object.assign(this, e), this.discriminator = "SelectField";
  }
  loadItems(e) {
    return this.items = e, this;
  }
  /**
   * Returns an array of all allowed props that are present on V-Select
   * https://vuetifyjs.com/en/api/v-select/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      "autofocus",
      "auto_select_first",
      "base_color",
      "bg_color",
      "center_affix",
      "chips",
      "clearable",
      "clear_icon",
      "closable_chips",
      "close_text",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "disabled",
      "eager",
      "error",
      "error_messages",
      "filter_keys",
      "filter_mode",
      "flat",
      "focused",
      "hide_details",
      "hide_no_data",
      "hide_selected",
      "hint",
      "id",
      "item_children",
      "item_color",
      "item_props",
      "items",
      "item_title",
      "item_value",
      "label",
      "loading",
      "max_errors",
      "menu",
      "messages",
      "multiple",
      "name",
      "no_data_text",
      "no_filter",
      "open_on_clear",
      "open_text",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "return_object",
      "reverse",
      "role",
      "rounded",
      "rules",
      "search",
      "single_line",
      "suffix",
      "theme",
      "transition",
      "type",
      "value",
      "validate_on",
      "variant"
    ];
  }
}
const O = {};
function ae() {
  const i = [
    {
      name: "AutoCompleteField",
      field: B
    },
    {
      name: "CheckboxField",
      field: $
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
      field: U
    },
    {
      name: "SwitchField",
      field: W
    },
    {
      name: "TextField",
      field: X
    },
    {
      name: "TimePickerField",
      field: Y
    },
    {
      name: "SelectField",
      field: re
    },
    {
      name: "ActionIcon",
      field: x
    },
    {
      name: "ActionButton",
      field: C
    },
    {
      name: "TextareaField",
      field: Z
    }
  ];
  for (const s of i)
    oe(s.name, s.field);
}
ae();
function oe(i, s) {
  O[i] = s;
}
function k(i) {
  return O[i];
}
class ke extends P {
  constructor(e) {
    super(e);
    // actions: Array<ActionIcon | ActionButton> = [];
    r(this, "actions", []);
    r(this, "callback", "");
    r(this, "inline", !1);
    r(this, "justify_row", v.Center);
    r(this, "type", w.Action);
    if (!l(e == null ? void 0 : e.actions) && f(e == null ? void 0 : e.actions)) {
      for (const t of (e == null ? void 0 : e.actions) ?? [])
        if (t instanceof x || t instanceof C)
          this.actions.push(t);
        else if (!l(t.discriminator)) {
          const a = t.discriminator;
          this.instantiateAction(a, t);
        }
      e == null || delete e.actions;
    }
    Object.assign(this, e), console.log("Form Actions", this.name, this.actions, this);
  }
  instantiateAction(e, t) {
    const a = k(e);
    if (a) {
      const o = new a(t);
      this.actions.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  data(e) {
    const t = new FormData();
    return t.set("form_name", this.name), t.set("form_action", e), t;
  }
  async process(e) {
    var a, o;
    let t;
    this.isLoading(!0);
    try {
      if (t = await n.request(
        g.Post,
        m.options.buildDomain("/forms/process"),
        n.mergeData(this.data(e), this.additional_data),
        this.axios
      ), t.status === 200 || t.status === 204)
        return this.isLoading(((a = t == null ? void 0 : t.data) == null ? void 0 : a.loader) ?? !1), (o = t == null ? void 0 : t.data) != null && o.result ? JSON.parse(JSON.stringify(t.data)) : !1;
    } catch {
      return !1;
    }
    return !1;
  }
  props() {
    return {};
  }
}
class De extends P {
  constructor(e) {
    super(e);
    r(this, "button_align_row", I.Center);
    r(this, "button_justify_row", v.Center);
    r(this, "buttons", []);
    r(this, "fields", []);
    r(this, "original", []);
    r(this, "type", w.Input);
    if (!l(e == null ? void 0 : e.fields) && f(e == null ? void 0 : e.fields)) {
      for (const t of (e == null ? void 0 : e.fields) ?? [])
        if (!l(t.discriminator)) {
          const a = t.discriminator;
          this.instantiateField(a, t);
        }
      e == null || delete e.fields;
    }
    if (!l(e == null ? void 0 : e.buttons) && f(e == null ? void 0 : e.buttons)) {
      for (const t of (e == null ? void 0 : e.buttons) ?? [])
        this.buttons.push(new te(t));
      e == null || delete e.buttons;
    }
    Object.assign(this, e), this.original = this.fields.map((t) => Object.assign({}, t)), this.fields = this.fields.sort((t, a) => t.order - a.order), this.buttons = this.buttons.sort((t, a) => t.order - a.order);
  }
  data() {
    const e = this.additional_data.find((a) => a.key == "identifier" || a.key == "id"), t = new FormData();
    return t.set("form_name", this.name), l(e) || t.set("id", e == null ? void 0 : e.value), this.fields.forEach((a) => {
      l(a.value) || (f(a.value) ? a.value.forEach((o) => {
        t.set(this.formatForArrayOrObject(a.name), o);
      }) : E(a.value) ? t.set(this.formatForArrayOrObject(a.name), a.value) : t.set(a.name, a.value));
    }), t;
  }
  formatForArrayOrObject(e) {
    return e + "[]";
  }
  instantiateField(e, t) {
    const a = k(e);
    if (a) {
      const o = new a(t);
      this.fields.push(o);
    } else
      console.error(`Class "${e}" not found in the registry.`);
  }
  async process() {
    var t, a, o, u, p, _;
    this.processing();
    let e;
    try {
      if (e = await n.request(
        g.Post,
        m.options.buildDomain("/forms/process"),
        n.mergeData(this.data(), this.additional_data),
        this.axios
      ), this.processed(), e.status === 200 || e.status === 204) {
        this.isLoading(((t = e == null ? void 0 : e.data) == null ? void 0 : t.loader) ?? !1);
        const c = JSON.parse(JSON.stringify((a = e == null ? void 0 : e.data) == null ? void 0 : a.data));
        if ((o = e == null ? void 0 : e.data) != null && o.result)
          return this.success((u = e == null ? void 0 : e.data) == null ? void 0 : u.data), (p = e == null ? void 0 : e.data) == null ? void 0 : p.data;
        if (!l(c == null ? void 0 : c.validation_errors)) {
          for (const F in c == null ? void 0 : c.validation_errors) {
            const D = this.fields.find((h) => h.name === F), S = c == null ? void 0 : c.validation_errors[F];
            for (const h of S)
              D.addErrorMessage(h);
          }
          return this.failedValidation(), !1;
        }
        return this.failed((_ = e == null ? void 0 : e.data) == null ? void 0 : _.data), !1;
      }
    } catch {
      return !1;
    }
    return this.failed(), !1;
  }
  loadErrorMessages(e) {
    let t;
    for (t of e) {
      const a = this.fields.find((o) => o.name === t.id);
      for (const o of t.errorMessages)
        this.hasErrorMessage(a, o) || a.addErrorMessage(o);
    }
    return this;
  }
  hasErrorMessage(e, t) {
    if (typeof e.error_messages == "string")
      return e.error_messages == t;
    const a = e.error_messages.find((o) => o === t);
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
    return this.fields = this.fields.map((t) => {
      var a;
      return t.value = (a = e.find((o) => o.name === t.name)) == null ? void 0 : a.value, t.clearErrorMessages(), t;
    }), this;
  }
}
export {
  ke as ActionForm,
  P as EasyForm,
  De as InputForm
};
