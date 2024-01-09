var D = Object.defineProperty;
var I = (d, r, t) => r in d ? D(d, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : d[r] = t;
var e = (d, r, t) => (I(d, typeof r != "symbol" ? r + "" : r, t), t);
import { c as l, a as j, S as O } from "./ServerCall-e0f70588.js";
import { A as z } from "./ContentTypes-f2427ff5.js";
import { D as C } from "./ScrollStrategyTypes-59a25e2a.js";
import { V as i, b as A, T as N, D as g, F as T, C as y, I as R, c as W, a as G } from "./ViewModeTypes-25f1573e.js";
import { a as w, b as f, c as b, i as c, d as E, e as U, f as L, P as Y, s as J } from "./Store-ff430d87.js";
import { V as Z, C as $ } from "./ValidationRule-cec9d477.js";
import { I as m, T as K } from "./Icon-3ae1af1e.js";
import { G as Q } from "./GotProps-12eeba8a.js";
import { M as q } from "./Menu-abb2e0c5.js";
import "./AxiosOptions-6a3d3f30.js";
import "axios";
import "./LocationTypes-c293bdaa.js";
const n = class n {
};
e(n, "accepted_booleans", [!0, !1, 1, 0, "0", "1"]), e(n, "accepted_values", ["yes", "on", 1, !0]), e(n, "declined_values", ["no", "off", 0, !1]), e(n, "accepted", (r, t = i.Accepted) => (s) => n.accepted_values.includes(s) || l(r.name, t)), e(n, "array", (r, t = i.Array) => (s) => w(s) || l(r.name, t)), e(n, "between", (r, t, s, a) => (o) => {
  const _ = [
    { key: ":min", replace_with: t },
    { key: ":max", replace_with: s }
  ];
  return f(o) ? o > t && o < s || l(r.name, a ?? i.BetweenNumeric, _) : b(o) || w(o) ? o.length > t && o.length < s || l(
    r.name,
    a ?? (b(o) ? i.BetweenString : i.BetweenArray),
    _
  ) : l(r.name, a ?? i.BetweenFile, _);
}), e(n, "boolean", (r, t = i.Boolean) => (s) => n.accepted_booleans.includes(s) || l(r.name, t)), e(n, "confirmed", (r, t, s = i.Confirmed) => (a) => {
  const o = t.find((_) => _.name === r.name + "_confirmation");
  return c(o) ? l(r.name, s) : o.value === a || l(r.name, s);
}), e(n, "decimal", (r, t, s = null, a = i.Decimal) => (o) => {
  const p = [{ key: ":decimal", replace_with: s ? `between ${t} and ${s}` : t }];
  if (Math.floor(o) === o)
    return l(r.name, a, p);
  const x = o.toString().split(".")[1].length;
  return E(s) ? x === t || l(r.name, a, p) : x > t && x < s || l(r.name, a, p);
}), e(n, "declined", (r, t = i.Declined) => (s) => n.declined_values.includes(s) || l(r.name, t)), e(n, "different", (r, t, s = i.Different) => (a) => a !== t.value || l(r.name, s, [
  { key: ":other", replace_with: t.name.replaceAll("_", " ").replaceAll("-", " ") }
])), e(n, "digits", (r, t, s = i.Digits) => (a) => f(a) && a.toString().length === t || l(r.name, s, [{ key: ":digits", replace_with: t }])), e(n, "digits_between", (r, t, s, a = i.DigitsBetween) => (o) => {
  const _ = [
    { key: ":min", replace_with: t },
    { key: ":max", replace_with: s }
  ];
  return f(o) ? o > t && o < s || l(r.name, a, _) : l(r.name, a, _);
}), e(n, "doesnt_end_with", (r, t, s = i.DoesntEndWith) => (a) => t.filter((o) => !a.endsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: t.join(",") }])), e(n, "doesnt_start_with", (r, t, s = i.DoesntStartWith) => (a) => t.filter((o) => !a.startsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: t.join(",") }])), e(n, "email", (r, t = i.Email) => (s) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s) || l(r.name, t)), e(n, "ends_with", (r, t, s = i.EndsWith) => (a) => t.filter((o) => a.endsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: t.join(",") }])), e(n, "file", (r, t = i.File) => (s) => U(s) || l(r.name, t)), e(n, "in_array", (r, t, s = i.InArray) => (a) => t.includes(a) || l(r.name, s, [{ key: ":values", replace_with: t.join(",") }])), e(n, "integer", (r, t = i.Integer) => (s) => f(s) || l(r.name, t)), e(n, "is_in", (r, t, s = i.In) => (a) => t.includes(a) || l(r.name, s)), e(n, "lowercase", (r, t = i.Lowercase) => (s) => s.toLowerCase() === s || l(r.name, t)), e(n, "max", (r, t, s) => (a) => {
  const o = [{ key: ":max", replace_with: t }];
  return f(a) ? a <= t || l(r.name, s ?? i.MaxNumeric, o) : b(a) || w(a) ? a.length <= t || l(
    r.name,
    s ?? (b(a) ? i.MaxString : i.MaxArray),
    o
  ) : l(r.name, s ?? i.MaxFile, o);
}), e(n, "max_digits", (r, t, s = i.MaxDigits) => (a) => f(a) && a.toString().length <= t || l(r.name, s, [{ key: ":max", replace_with: t }])), e(n, "min", (r, t, s) => (a) => {
  const o = [{ key: ":min", replace_with: t }];
  return f(a) ? a >= t || l(r.name, s ?? i.MinNumeric, o) : b(a) || w(a) ? a.length >= t || l(
    r.name,
    s ?? (b(a) ? i.MinString : i.MinArray),
    o
  ) : l(r.name, s ?? i.MinFile, o);
}), e(n, "min_digits", (r, t, s = i.MinDigits) => (a) => f(a) && a.toString().length >= t || l(r.name, s, [{ key: ":min", replace_with: t }])), e(n, "multiple_of", (r, t, s = i.MultipleOf) => (a) => f(a) && a % t === 0 || l(r.name, s, [{ key: ":value", replace_with: t }])), e(n, "not_in", (r, t, s = i.NotIn) => (a) => !t.includes(a) || l(r.name, s)), e(n, "not_regex", (r, t, s = i.NotRegex) => (a) => !t.test(a) || l(r.name, s)), e(n, "numeric", (r, t = i.Numeric) => (s) => L(s) || l(r.name, t)), e(n, "regex", (r, t, s = i.Regex) => (a) => t.test(a) || l(r.name, s)), e(n, "required", (r, t = i.Required) => (s) => !c(s) || l(r.name, t)), e(n, "required_if", (r, t, s, a = i.RequiredIf) => (o) => (t.value === s ? !c(o) : !0) || l(r.name, a, [
  { key: ":other", replace_with: t.name.replaceAll("_", " ").replaceAll("-", " ") },
  { key: ":value", replace_with: s }
])), e(n, "required_unless", (r, t, s, a = i.RequiredUnless) => (o) => (t.value !== s ? !c(o) : !0) || l(r.name, a, [
  { key: ":other", replace_with: t.name.replaceAll("_", " ").replaceAll("-", " ") },
  { key: ":values", replace_with: w(s) ? s.join(",") : s }
])), e(n, "required_with", (r, t, s, a = i.RequiredWith) => (o) => {
  const _ = t.filter((p) => s.includes(p.name) && !c(p.value));
  return !c(_) && !c(o) || l(r.name, a, [
    { key: ":values", replace_with: w(s) ? s.join(",") : s }
  ]);
}), e(n, "required_with_all", (r, t, s, a = i.RequiredWithAll) => (o) => t.filter((p) => s.includes(p.name) && !c(p.value)).length === s.length && !c(o) || l(r.name, a, [{ key: ":values", replace_with: s.join(",") }])), e(n, "required_without", (r, t, s, a = i.RequiredWithout) => (o) => {
  const _ = t.filter((p) => s.includes(p.name) && c(p.value));
  return !c(_) && !c(o) || l(r.name, a, [{ key: ":values", replace_with: s.join(",") }]);
}), e(n, "required_without_all", (r, t, s, a = i.RequiredWithoutAll) => (o) => t.filter((p) => s.includes(p.name) && c(p.value)).length === s.length && !c(o) || l(r.name, a, [{ key: ":values", replace_with: s.join(",") }])), e(n, "same", (r, t, s = i.Same) => (a) => a === t.value || l(r.name, s, [
  { key: ":other", replace_with: t.name.replaceAll("_", " ").replaceAll("-", " ") }
])), e(n, "starts_with", (r, t, s = i.StartsWith) => (a) => t.filter((o) => a.startsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: t.join(",") }])), e(n, "string", (r, t = i.String) => (s) => b(s) || l(r.name, t)), e(n, "ulid", (r, t = i.Ulid) => (s) => {
  const a = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/;
  return !!s.match(a) || l(r.name, t);
}), e(n, "uppercase", (r, t = i.Uppercase) => (s) => s.toUpperCase() === s || l(r.name, t)), e(n, "uuid", (r, t = i.Uuid) => (s) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s) || l(r.name, t));
let P = n;
class X {
  static exists(r) {
    return typeof P[r] < "u" ? !0 : j(r) in A;
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getFunction(r) {
    return P[this.getName(r)];
  }
  static getName(r) {
    if (this.exists(r.name))
      return j(r.name) in A ? A[j(r.name)] : r.name;
  }
}
const h = class h {
  /** Validation requires all fields  */
  static shouldPassAllFields(r) {
    return h.expectingAllFields.includes(r);
  }
  /** Validation requires value to be an array  */
  static shouldPassArray(r) {
    return h.expectingArray.includes(r);
  }
  /** Validation only requires field and message  */
  static shouldPassFieldMessage(r) {
    return h.expectingFieldMessage.includes(r);
  }
  /** Validation value should check for splitting  */
  static shouldSplit(r) {
    return h.expectingSplit.includes(r);
  }
  /** Validation value should be passed directly.  */
  static shouldPass(r) {
    return h.expectingSingleValue.includes(r);
  }
};
e(h, "expectingArray", [
  "doesnt_end_with",
  "doesnt_start_with",
  "ends_with",
  "in_array",
  "is_in",
  "not_in",
  "required_with",
  "required_with_all",
  "required_without",
  "required_without_all",
  "starts_with"
]), e(h, "expectingFieldMessage", [
  "accepted",
  "array",
  "boolean",
  "declined",
  "email",
  "file",
  "integer",
  "lowercase",
  "numeric",
  "required",
  "string",
  "ulid",
  "uppercase",
  "uuid"
]), e(h, "expectingSplit", ["between", "decimal", "digits_between"]), e(h, "expectingSingleValue", [
  "digits",
  "max",
  "max_digits",
  "min",
  "min_digits",
  "multiple_of",
  "not_regex",
  "regex"
]), e(h, "expectingAllFields", [
  "confirmed",
  "required_with",
  "required_with_all",
  "required_without",
  "required_without_all"
]), e(h, "expectingComparison", ["different", "same"]), e(h, "expectingComparisonAndValue", ["required_if", "required_unless"]);
let v = h;
class u extends Q {
  /**
   * Creates an instance of EasyField.
   * @param {Partial<EasyField>} [init] - Initialization object for setting properties.
   */
  constructor(t) {
    super(t);
    e(this, "active", !1);
    e(this, "append_icon");
    e(this, "autofocus", !1);
    e(this, "base_color");
    e(this, "bg_color");
    e(this, "center_affix", !1);
    e(this, "clear_icon");
    e(this, "clearable", !1);
    e(this, "color");
    e(this, "cols", 12);
    e(this, "component", "");
    e(this, "component_type");
    e(this, "density", C.Default);
    e(this, "depends_on", "");
    e(this, "disabled", !1);
    e(this, "discriminator", "");
    e(this, "eager", !1);
    e(this, "error", !1);
    e(this, "error_messages", []);
    e(this, "flat", !1);
    e(this, "focused", !1);
    e(this, "help", "");
    e(this, "hide_details", !1);
    e(this, "hint");
    e(this, "id");
    e(this, "label", "");
    e(this, "loading", !1);
    e(this, "max_errors", 1);
    e(this, "messages", []);
    e(this, "name", "");
    e(this, "offset", 0);
    e(this, "order", 0);
    e(this, "outlined", !1);
    e(this, "parent_loaded", !1);
    e(this, "persistent_clear", !1);
    e(this, "persistent_counter", !1);
    e(this, "persistent_hint", !1);
    e(this, "persistent_placeholder", !1);
    e(this, "placeholder", "");
    e(this, "prefix");
    e(this, "prepend_icon");
    e(this, "readonly", !1);
    e(this, "require_confirmation", !1);
    e(this, "required", !1);
    e(this, "role");
    e(this, "rounded", !1);
    e(this, "rules", []);
    e(this, "show_if", !1);
    e(this, "show_if_parent", "");
    e(this, "show_if_value");
    e(this, "single_line", !1);
    e(this, "suffix");
    e(this, "theme");
    e(this, "tooltip");
    e(this, "type", "");
    e(this, "validate_on");
    e(this, "validated", !0);
    e(this, "value");
    e(this, "variant", N.Filled);
    if (c(t == null ? void 0 : t.clear_icon) || (this.clear_icon = new m(t == null ? void 0 : t.clear_icon), t == null || delete t.clear_icon), c(t == null ? void 0 : t.append_icon) || (this.append_icon = new m(t == null ? void 0 : t.append_icon), t == null || delete t.append_icon), c(t == null ? void 0 : t.prepend_icon) || (this.prepend_icon = new m(t == null ? void 0 : t.prepend_icon), t == null || delete t.prepend_icon), c(t == null ? void 0 : t.tooltip) || (this.tooltip = new K(t == null ? void 0 : t.tooltip), t == null || delete t.tooltip), Object.assign(this, t), !this.required)
      this.required = this.rules.some((a) => a.name === "required" && a.value);
    else {
      const a = this.rules.find(
        (o) => o.name === "required"
      );
      a ? a.value = !0 : this.rules.push(new Z({ name: "required", value: !0 }));
    }
    this.clearable && c(this.clear_icon) && (this.clear_icon = new m({ icon: "mdi-close", color: "secondary" }));
    const s = Y.getInstance();
    s.tags_on_placeholder && !c(this.placeholder) && (this.required ? this.placeholder += s.required_placeholder_text : s.required_tags_only || (this.placeholder += s.optional_placeholder_text)), s.tags_on_labels && !c(this.label) && (this.required ? this.label += s.required_label_text : s.required_tags_only || (this.label += s.optional_label_text));
  }
  addErrorMessage(t) {
    return this.validated = !1, w(this.error_messages) && (this.error_messages.find((a) => a == t) || this.error_messages.push(t)), this;
  }
  clearErrorMessages() {
    return this.error_messages = [], this;
  }
  /**
   * Invalidate the field's validation state.
   * @returns {this} The EasyField instance for method chaining.
   */
  invalidate() {
    return this.validated = !1, this;
  }
  /**
   * Set the loading state of the field.
   * @param {boolean} loading - Whether the field is in a loading state.
   * @returns {this} The EasyField instance for method chaining.
   */
  isLoading(t) {
    return this.loading = t, this;
  }
  /**
   * Check if the parent field is loaded.
   * @param {EasyField} parent_field - The parent field to check against.
   * @returns {boolean} True if the parent field is loaded; otherwise, false.
   */
  isParentPopulated(t) {
    return c(this.depends_on) ? !0 : !c(t == null ? void 0 : t.value);
  }
  /**
   * Load data for the field asynchronously.
   * @param {InputForm | ActionForm} form form its loading from.
   * @param {EasyField} parent - The parent field for additional data.
   * @returns {Promise<object|boolean>} A Promise that resolves to the loaded data or false if loading fails.
   */
  async load(t, s) {
    var o, _, p;
    let a;
    this.isLoading(!0);
    try {
      const x = [];
      c(this.depends_on) || (x.push({ key: "parent_name", value: s.name }), x.push({ key: "parent_value", value: s.value }));
      const F = new FormData();
      if (F.set("form_name", t.name), F.set("field_name", this.name), a = await O.request(
        z.Post,
        J.options.buildDomain("/forms/fields/load"),
        O.mergeData(F, t.additionalArrayToObject(x)),
        t.axios
      ), a.status === 200 || a.status === 204) {
        if (this.isLoading(((o = a == null ? void 0 : a.data) == null ? void 0 : o.loader) ?? !1), !((_ = a == null ? void 0 : a.data) != null && _.result))
          return !1;
        const M = JSON.parse(JSON.stringify((p = a == null ? void 0 : a.data) == null ? void 0 : p.data));
        return c(M) ? !1 : M;
      }
    } catch {
      return !1;
    }
    return !1;
  }
  /**
   * Validate the field.
   * @returns {this} The EasyField instance for method chaining.
   */
  validate() {
    return this.validated = !0, this;
  }
  /**
   * Validate the field.
   * @returns {this} The EasyField instance for method chaining.
   */
  findValidation(t) {
    return this.rules.find((s) => s.name === t);
  }
  /**
   * Apply validation rules to the field.
   * @param {FieldType[]} [fields] - An optional array of fields to use in validation.
   * @returns {any[]} An array of validation results.
   */
  validationRules(t) {
    return this.rules.filter((s) => X.exists(s.name)).map((s) => P[s.name](
      ...this.buildValidation(t ?? [], s)
    ));
  }
  buildValidation(t, s) {
    let a = [];
    return a.push(this), v.shouldPassFieldMessage(s.name) ? (c(s.message) || a.push(s.message), a) : (v.shouldPassAllFields(s.name) && a.push(t), v.shouldPassArray(s.name) && a.push((s.value || "").split(",")), v.shouldSplit(s.name) && (s.value.includes(",") ? a = [...a, ...(s.value || "").split(",")] : a.push(s.value)), v.shouldPass(s.name) && a.push(s.value), c(s.message) || a.push(s.message), a);
  }
}
class ue extends u {
  constructor(t) {
    super(t);
    e(this, "auto_select_first", !1);
    e(this, "chips", !1);
    e(this, "closable_chips", !1);
    e(this, "close_text", "$vuetify.close");
    e(this, "component", "v-autocomplete");
    e(this, "counter", !1);
    e(this, "direction", g.Horizontal);
    e(this, "filter_keys", ["title"]);
    e(this, "filter_mode", T.Intersection);
    e(this, "hide_no_data", !1);
    e(this, "hide_selected", !1);
    e(this, "item_children", !1);
    e(this, "item_color");
    e(this, "item_props", "props");
    e(this, "item_title", "title");
    e(this, "item_value", "value");
    e(this, "items", []);
    e(this, "menu", !1);
    e(this, "multiple", !1);
    e(this, "no_data_text", "$vuetify.noDataText");
    e(this, "no_filter", !1);
    e(this, "open_on_clear", !1);
    e(this, "open_text", "$vuetify.open");
    e(this, "prepend_inner_icon");
    e(this, "return_object", !1);
    e(this, "search", "");
    e(this, "transition", !1);
    e(this, "type", "text");
    Object.assign(this, t), this.discriminator = "AutoCompleteField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Autocomplete
   * https://vuetifyjs.com/en/api/v-autocomplete/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      "append_icon",
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
      "prepend_icon",
      "prepend_inner_icon",
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
  loadItems(t) {
    return this.items = t, this;
  }
}
class he extends u {
  constructor(t) {
    super(t);
    e(this, "center_affix", !0);
    e(this, "component", "v-checkbox");
    e(this, "defaults_target");
    e(this, "direction", g.Horizontal);
    e(this, "false_icon", "$checkboxOff");
    e(this, "false_value");
    e(this, "hide_details", !1);
    e(this, "indeterminate", !1);
    e(this, "indeterminate_icon", "$checkboxIndeterminate");
    e(this, "multiple", !1);
    e(this, "ripple", !1);
    e(this, "transition", !1);
    e(this, "true_icon", "$checkboxOn");
    e(this, "true_value");
    e(this, "type", "checkbox");
    Object.assign(this, t), this.discriminator = "CheckboxField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      // displayed as easy-icon with tooltip.
      //'append_icon',
      "autofocus",
      "center_affix",
      "color",
      "cols",
      "default_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "false_value",
      "focused",
      "hide_details",
      "hint",
      "id",
      "indeterminate",
      "indeterminate_icon",
      "label",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "validate_on"
      // value causes errors due to v-model binding
      //'value'
    ];
  }
}
class me extends u {
  constructor(t) {
    super(t);
    e(this, "class", "ml-auto");
    e(this, "component", "easy-checkbox-group");
    e(this, "items", []);
    e(this, "switch");
    e(this, "value", []);
    Object.assign(this, t), this.discriminator = "CheckboxGroupField";
  }
  addAllItems() {
    this.clear();
    for (const t of this.items)
      t.value = !0, this.value.push(new $({ key: t.name, value: t.value }));
  }
  addItem(t, s) {
    this.value.push(new $({ key: t, value: s }));
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["class", "cols", "items", "label", "switch"];
  }
  clear() {
    this.value = [];
    for (const t of this.items)
      t.value = !1;
  }
  find(t) {
    return this.value.find((s) => s.key == t.name);
  }
  removeItem(t) {
    const s = this.value.indexOf(t);
    this.value.splice(s, 1);
  }
}
class k extends u {
  constructor(t) {
    super(t);
    e(this, "autocomplete", "off");
    e(this, "append_inner_icon");
    e(this, "component", "v-text-field");
    e(this, "counter", !1);
    e(this, "direction", g.Horizontal);
    e(this, "dirty", !1);
    e(this, "masking");
    e(this, "prepend_inner_icon");
    c(t == null ? void 0 : t.append_inner_icon) || (this.append_inner_icon = new m(t == null ? void 0 : t.append_inner_icon), t == null || delete t.append_inner_icon), c(t == null ? void 0 : t.prepend_inner_icon) || (this.prepend_inner_icon = new m(t == null ? void 0 : t.prepend_inner_icon), t == null || delete t.prepend_inner_icon), Object.assign(this, t), this.discriminator = "TextField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Text-Field
   * https://vuetifyjs.com/en/api/v-text-field/
   *
   * Currently missing the following properties:
   * counter-value
   * model-modifiers
   * model-value
   * validation-value
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      "autocomplete",
      // "append_icon",
      // "append_inner_icon",
      "autofocus",
      "attach",
      "base_color",
      "bg_color",
      "center_affix",
      "clearable",
      "component_type",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "dirty",
      "disabled",
      "error",
      "error_messages",
      "flat",
      "focused",
      "hide_details",
      "hint",
      "id",
      "label",
      "loading",
      "masking",
      "max_errors",
      "messages",
      "name",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      // "prepend_icon",
      // "prepend_inner_icon",
      "readonly",
      "reverse",
      "role",
      "rounded",
      // 'rules',
      "single_line",
      "suffix",
      "theme",
      "type",
      "validate_on",
      "variant"
    ];
  }
}
class S extends u {
  constructor(t) {
    super(t);
    e(this, "border", !1);
    e(this, "canvas_height", 150);
    e(this, "dot_size", 10);
    e(this, "elevation");
    e(this, "hide_canvas", !1);
    e(this, "hide_inputs", !1);
    e(this, "hide_sliders", !1);
    e(this, "mode", y.Hex);
    e(this, "modes", [
      y.Hex,
      y.Hexa,
      y.Hsl,
      y.Hsla,
      y.Rgb,
      y.Rgba
    ]);
    e(this, "position");
    e(this, "rounded", !1);
    e(this, "show_swatches", !1);
    e(this, "swatches");
    e(this, "swatches_max_height", 150);
    e(this, "tag", "div");
    e(this, "width", "300");
    Object.assign(this, t), this.discriminator = "ColorPicker";
  }
  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "border",
      "canvas_height",
      "color",
      "disabled",
      "dot_size",
      "elevation",
      "hide_canvas",
      "hide_inputs",
      "hide_sliders",
      "mode",
      "modes",
      "position",
      "rounded",
      "show_swatches",
      "swatches",
      "swatches_max_height",
      "tag",
      "theme"
      // 'width'
    ];
  }
}
class fe extends u {
  constructor(t) {
    super(t);
    e(this, "component", "easy-color-picker");
    e(this, "menu", new q());
    e(this, "picker", new S({}));
    e(this, "textfield", new k({
      name: "picker_value",
      label: "Color Picker",
      readonly: !0,
      prepend_inner_icon: new m({
        icon: "mdi-square-rounded",
        size: "x-large"
      })
    }));
    c(t == null ? void 0 : t.menu) || (this.menu = new q(t == null ? void 0 : t.menu), t == null || delete t.menu), c(t == null ? void 0 : t.picker) || (this.picker = new S(t == null ? void 0 : t.picker), t == null || delete t.picker), c(t == null ? void 0 : t.textfield) || (this.textfield = new k(t == null ? void 0 : t.textfield), t == null || delete t.textfield), Object.assign(this, t), this.discriminator = "ColorPickerField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["menu", "textfield", "picker"];
  }
}
class B extends u {
  constructor(t) {
    super(t);
    e(this, "border", !1);
    e(this, "calendar_icon", "$calendar");
    e(this, "cancel_text", "$vuetify.datePicker.cancel");
    e(this, "collapse_icon", "$collapse");
    e(this, "display_date");
    e(this, "elevation");
    e(this, "expand_icon", "$expand");
    e(this, "format");
    e(this, "header", "$vuetify.datePicker.header");
    e(this, "height");
    e(this, "hide_actions", !1);
    e(this, "hide_weekdays", !1);
    e(this, "hover_date");
    e(this, "input_mode", R.Calendar);
    e(this, "input_placeholder", "dd/mm/yyyy");
    e(this, "input_text", "$vuetify.datePicker.input.placeholder");
    e(this, "keyboard_icon", "$edit");
    e(this, "landscape", !1);
    e(this, "max");
    e(this, "max_height");
    e(this, "max_width");
    e(this, "min");
    e(this, "min_height");
    e(this, "min_width");
    e(this, "multiple", !1);
    e(this, "next_icon", "$next");
    e(this, "ok_text", "$vuetify.datePicker.ok");
    e(this, "position");
    e(this, "prev_icon", "$prev");
    e(this, "rounded", !1);
    e(this, "show_adjacent_months", !1);
    e(this, "show_week", !1);
    e(this, "side");
    e(this, "tag", "div");
    e(this, "title", "$vuetify.datePicker.title");
    e(this, "view_mode", W.Month);
    e(this, "width");
    Object.assign(this, t), this.discriminator = "DatePicker";
  }
  /**
   * Returns an array of all allowed props that are present on V-Date-Picker
   * https://vuetifyjs.com/en/api/v-date-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "border",
      "calendar_icon",
      "cancel_text",
      "collapse_icon",
      "color",
      "disabled",
      "display_date",
      "elevation",
      "expand_icon",
      "format",
      "header",
      "height",
      "hide_actions",
      "hide_weekdays",
      "hover_date",
      "input_mode",
      "input_placeholder",
      "input_text",
      "keyboard_icon",
      "landscape",
      "max",
      "max_height",
      "max_width",
      "min",
      "min_height",
      "min_width",
      "multiple",
      "next_icon",
      "ok_text",
      "position",
      "prev_icon",
      "rounded",
      "show_adjacent_months",
      "show_week",
      "side",
      "tag",
      "title",
      "theme",
      "view_mode",
      "width"
    ];
  }
}
class ge extends u {
  constructor(t) {
    super(t);
    e(this, "component", "easy-date-picker");
    e(this, "menu", new q({
      close_on_content_click: !1,
      open_delay: 0
    }));
    e(this, "picker", new B({
      width: 360,
      format: "YYYY-MM-DD"
    }));
    e(this, "textfield", new k({
      name: "date_picker_value",
      label: "Date Picker",
      readonly: !0,
      prepend_inner_icon: new m({
        icon: "mdi-calendar-month",
        size: "large"
      })
    }));
    Object.assign(this, t), this.discriminator = "DatePickerField";
  }
  /**
   * Returns an array of all allowed props that are present on EasyDatePicker
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["menu", "textfield", "picker"];
  }
}
class xe extends u {
  constructor(t) {
    super(t);
    e(this, "accept", "image/png, image/jpeg");
    e(this, "append_inner_icon");
    e(this, "chips", !1);
    e(this, "component", "v-file-input");
    e(this, "counter", !1);
    e(this, "counter_size_string", "$vuetify.fileInput.counterSize");
    e(this, "counter_string", "$vuetify.fileInput.counter");
    e(this, "direction", g.Horizontal);
    e(this, "dirty", !1);
    e(this, "multiple", !1);
    e(this, "prepend_inner_icon");
    e(this, "reversed", !1);
    e(this, "show_size", !1);
    e(this, "single_line", !1);
    c(t == null ? void 0 : t.append_inner_icon) || (this.append_inner_icon = new m(t == null ? void 0 : t.append_inner_icon), t == null || delete t.append_inner_icon), c(t == null ? void 0 : t.prepend_inner_icon) || (this.prepend_inner_icon = new m(t == null ? void 0 : t.prepend_inner_icon), t == null || delete t.prepend_inner_icon), Object.assign(this, t), this.discriminator = "FileInputField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Text-Field
   * https://vuetifyjs.com/en/api/v-text-field/
   *
   * Currently missing the following properties:
   * counter-value
   * model-modifiers
   * model-value
   * validation-value
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "accept",
      "active",
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      // displayed as easy-icon with tooltip.
      // 'append_inner_icon',
      "base_color",
      "bg_color",
      "center_affix",
      "chips",
      "clearable",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "counter_size_string",
      "counter_string",
      "density",
      "direction",
      "dirty",
      "disabled",
      "error",
      "error_messages",
      "flat",
      "focused",
      "hide_details",
      "hint",
      "id",
      "label",
      "loading",
      "masking",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_clear",
      "persistent_hint",
      "placeholder",
      "prefix",
      // displayed as easy-icon with tooltip.
      // "prepend_icon",
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "reverse",
      "rounded",
      "rules",
      "show_size",
      "single_line",
      "theme",
      "validate_on",
      "variant"
    ];
  }
}
class we extends u {
  constructor(t) {
    super(t);
    e(this, "component", "easy-password");
    e(this, "discriminator", "PasswordField");
    e(this, "lower_case", !0);
    e(this, "min_length", 8);
    e(this, "numbers", !0);
    e(this, "special", !0);
    e(this, "upper_case", !0);
    e(this, "show_requirements_dialog", !1);
    e(this, "show_strength_bar", !1);
    e(this, "strength_error_color", "error");
    e(this, "strength_error_text", "Weak");
    e(this, "strength_success_color", "success");
    e(this, "strength_success_text", "Strong");
    e(this, "strength_warning_color", "warning");
    e(this, "strength_warning_text", "Medium");
    e(this, "textfield");
    e(this, "view_mode", !1);
    c(t == null ? void 0 : t.textfield) ? this.textfield = new k(t) : (this.textfield = new k(t == null ? void 0 : t.textfield), t == null || delete t.textfield), Object.assign(this, t), this.textfield.type = "password", this.textfield.component = "v-text-field", this.textfield.discriminator = "TextField", this.textfield.autocomplete = "on", this.discriminator = "PasswordField";
  }
  /**
   * Returns an array of all allowed props for custom Password Field
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "label",
      "lower_case",
      "upper_case",
      "numbers",
      "special",
      "min_length",
      "show_requirements_dialog",
      "show_strength_bar",
      "strength_error_color",
      "strength_error_text",
      "strength_warning_color",
      "strength_warning_text",
      "strength_success_color",
      "strength_success_text",
      "textfield",
      "view_mode",
      "component_type"
    ];
  }
}
class V extends u {
  constructor(t) {
    super(t);
    e(this, "component", "v-radio");
    e(this, "defaults_target");
    e(this, "direction", g.Horizontal);
    e(this, "false_icon", "$radioOff");
    e(this, "false_value");
    e(this, "inline", !1);
    e(this, "multiple", !1);
    e(this, "ripple", !1);
    e(this, "true_icon", "$radioOn");
    e(this, "true_value");
    e(this, "type", "radio");
    Object.assign(this, t), this.discriminator = "RadioField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "color",
      "cols",
      "defaults_target",
      "density",
      "direction",
      "disabled",
      "error",
      "false_icon",
      "false_value",
      "id",
      "inline",
      "label",
      "loading",
      "multiple",
      "name",
      "readonly",
      "ripple",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "value",
      "variant"
    ];
  }
}
class ye extends u {
  constructor(t) {
    super(t);
    e(this, "component", "v-radio-group");
    e(this, "defaults_target");
    e(this, "direction", g.Horizontal);
    e(this, "false_icon", "$radioOff");
    e(this, "height", "auto");
    e(this, "inline", !1);
    e(this, "items", []);
    e(this, "ripple", !1);
    e(this, "true_icon", "$radioOn");
    e(this, "type", "radio");
    if (!c(t == null ? void 0 : t.items) && w(t == null ? void 0 : t.items)) {
      for (const s of (t == null ? void 0 : t.items) ?? [])
        this.items.push(new V(s));
      t == null || delete t.items;
    }
    Object.assign(this, t), this.discriminator = "RadioGroupField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Radio-Group
   * https://vuetifyjs.com/en/api/v-radio-group/
   *
   * Currently missing the following properties:
   * location
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      "center_affix",
      "color",
      "cols",
      "defaults_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "focused",
      "height",
      "hide_details",
      "hint",
      "id",
      "inline",
      "label",
      "loading",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "type"
      // 'value',
    ];
  }
}
class be extends u {
  constructor(t) {
    super(t);
    e(this, "auto_select_first", !1);
    e(this, "chips", !1);
    e(this, "closable_chips", !1);
    e(this, "close_text", "$vuetify.close");
    e(this, "component", "v-select");
    e(this, "counter", !1);
    e(this, "direction", g.Horizontal);
    e(this, "filter_keys", ["title"]);
    e(this, "filter_mode", T.Intersection);
    e(this, "hide_no_data", !1);
    e(this, "hide_selected", !1);
    e(this, "item_children", !1);
    e(this, "item_color");
    e(this, "item_props", "props");
    e(this, "item_title", "title");
    e(this, "item_value", "value");
    e(this, "items", []);
    e(this, "menu", !1);
    e(this, "menu_icon", "$dropdown");
    e(this, "multiple", !1);
    e(this, "no_data_text", "$vuetify.noDataText");
    e(this, "no_filter", !1);
    e(this, "open_on_clear", !1);
    e(this, "open_text", "$vuetify.open");
    e(this, "prepend_inner_icon");
    e(this, "return_object", !1);
    e(this, "search", "");
    e(this, "transition", !1);
    e(this, "type", "text");
    Object.assign(this, t), this.discriminator = "SelectField";
  }
  loadItems(t) {
    return this.items = t, this;
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
class ve extends u {
  constructor(t) {
    super(t);
    e(this, "center_affix", !0);
    e(this, "component", "v-switch");
    e(this, "defaults_target");
    e(this, "direction", g.Horizontal);
    e(this, "false_icon");
    e(this, "false_value");
    e(this, "hide_details", !1);
    e(this, "indeterminate", !1);
    e(this, "inline", !1);
    e(this, "inset", !1);
    e(this, "multiple", !1);
    e(this, "ripple", !1);
    e(this, "transition", !1);
    e(this, "true_icon");
    e(this, "true_value");
    e(this, "type", "switch");
    Object.assign(this, t), this.discriminator = "SwitchField";
  }
  /**
   * Returns an array of all allowed props that are present on VSwitch
   * https://vuetifyjs.com/en/api/v-switch/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      // displayed as easy-icon with tooltip.
      //'append_icon',
      "autofocus",
      "center_affix",
      "color",
      "cols",
      "default_target",
      "density",
      "direction",
      "disabled",
      "error",
      "error_messages",
      "false_icon",
      "false_value",
      "focused",
      "hide_details",
      "hint",
      "id",
      "indeterminate",
      "inline",
      "inset",
      "label",
      "max_errors",
      "messages",
      "multiple",
      "name",
      "persistent_hint",
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      "readonly",
      "ripple",
      "rules",
      "theme",
      "true_icon",
      "true_value",
      "type",
      "validate_on"
      // value causes errors due to v-model binding
      //'value'
    ];
  }
}
class H extends u {
  constructor(t) {
    super(t);
    e(this, "cancel_text", "cancel");
    e(this, "close_on_outside_click", !0);
    e(this, "elevation");
    e(this, "header", "");
    e(this, "height");
    e(this, "hide_actions", !1);
    e(this, "mode", G.Normal);
    e(this, "ok_text", "ok");
    e(this, "pad_start", !0);
    e(this, "position");
    e(this, "rolling_numbers", !0);
    e(this, "tag", "div");
    e(this, "title", "select time");
    e(this, "width");
    Object.assign(this, t), this.discriminator = "TimePicker";
  }
  /**
   * Returns an array of all allowed props that are present on V-Color-Picker
   * https://vuetifyjs.com/en/api/v-color-picker/
   *
   * Currently missing the following properties:
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "close_on_outside_click",
      "cancel_text",
      "color",
      "disabled",
      "elevation",
      "header",
      "height",
      "hide_actions",
      "mode",
      "ok_text",
      "pad_start",
      "position",
      "rolling_numbers",
      "rounded",
      "tag",
      "title",
      "theme",
      "width"
    ];
  }
}
class ke extends u {
  constructor(t) {
    super(t);
    e(this, "component", "easy-time-picker");
    e(this, "menu", new q());
    e(this, "picker", new H({
      width: 360
    }));
    e(this, "textfield", new k({
      label: "Time Picker",
      readonly: !0,
      prepend_inner_icon: new m({
        icon: "mdi-clock-outline",
        size: "large"
      })
    }));
    Object.assign(this, t), this.discriminator = "TimePickerField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Checkbox
   * https://vuetifyjs.com/en/api/v-checkbox/
   *
   * Currently missing the following properties:
   *
   *
   * @returns string[]
   */
  allowedProps() {
    return ["menu", "textfield", "picker"];
  }
}
class Pe extends u {
  constructor(t) {
    super(t);
    e(this, "append_inner_icon");
    e(this, "auto_grow", !1);
    e(this, "component", "v-textarea");
    e(this, "counter", !1);
    e(this, "direction", g.Horizontal);
    e(this, "dirty", !1);
    e(this, "masking");
    e(this, "max_rows");
    e(this, "no_resize", !1);
    e(this, "prepend_inner_icon");
    e(this, "rows", 5);
    e(this, "reverse", !1);
    c(t == null ? void 0 : t.append_inner_icon) || (this.append_inner_icon = new m(t == null ? void 0 : t.append_inner_icon), t == null || delete t.append_inner_icon), c(t == null ? void 0 : t.prepend_inner_icon) || (this.prepend_inner_icon = new m(t == null ? void 0 : t.prepend_inner_icon), t == null || delete t.prepend_inner_icon), Object.assign(this, t), this.discriminator = "TextareaField";
  }
  /**
   * Returns an array of all allowed props that are present on V-Text-Field
   * https://vuetifyjs.com/en/api/v-text-field/
   *
   * Currently missing the following properties:
   * counter-value
   * model-modifiers
   * model-value
   * validation-value
   *
   * @returns string[]
   */
  allowedProps() {
    return [
      "active",
      // "append_icon",
      // "append_inner_icon",
      "autofocus",
      "attach",
      "base_color",
      "bg_color",
      "center_affix",
      "clearable",
      "component_type",
      "clear_icon",
      "color",
      "cols",
      "counter",
      "density",
      "direction",
      "dirty",
      "disabled",
      "error",
      "error_messages",
      "flat",
      "focused",
      "hide_details",
      "hint",
      "id",
      "label",
      "loading",
      "masking",
      "max_errors",
      "messages",
      "name",
      "persistent_clear",
      "persistent_counter",
      "persistent_hint",
      "persistent_placeholder",
      "placeholder",
      "prefix",
      // "prepend_icon",
      // "prepend_inner_icon",
      "readonly",
      "reverse",
      "role",
      "rounded",
      // 'rules',
      "single_line",
      "suffix",
      "theme",
      "type",
      "validate_on",
      "variant"
    ];
  }
}
export {
  ue as AutoCompleteField,
  he as CheckboxField,
  me as CheckboxGroupField,
  S as ColorPicker,
  fe as ColorPickerField,
  B as DatePicker,
  ge as DatePickerField,
  xe as FileInputField,
  we as PasswordField,
  V as RadioField,
  ye as RadioGroupField,
  be as SelectField,
  ve as SwitchField,
  k as TextField,
  Pe as TextareaField,
  H as TimePicker,
  ke as TimePickerField
};
