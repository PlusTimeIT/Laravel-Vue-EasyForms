var S = Object.defineProperty;
var $ = (d, r, e) => r in d ? S(d, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[r] = e;
var t = (d, r, e) => ($(d, typeof r != "symbol" ? r + "" : r, e), e);
import { S as M } from "./ServerCall-016fdee6.js";
import { A as T } from "./ContentTypes-f2427ff5.js";
import { D } from "./ScrollStrategyTypes-749a6aaa.js";
import { V as i, b as P, T as C, D as w, F as I, C as y, I as z, c as R, a as N } from "./ViewModeTypes-25f1573e.js";
import { a as v, b as f, c as b, i as c, d as W, e as E, f as G, P as L, s as U } from "./Types-cc63165d.js";
import { V as Y, C as j } from "./ValidationRule-cec9d477.js";
import { I as m, T as J } from "./Tooltip-ca2b6abb.js";
import { S as Z, G as K } from "./GotProps-c8fa699d.js";
import { M as q } from "./Menu-54a49747.js";
const l = (d, r, e) => Z.convertMessageHolders(d, r, e), n = class n {
};
t(n, "accepted_booleans", [!0, !1, 1, 0, "0", "1"]), t(n, "accepted_values", ["yes", "on", 1, !0]), t(n, "declined_values", ["no", "off", 0, !1]), t(n, "accepted", (r, e = i.Accepted) => (s) => n.accepted_values.includes(s) || l(r.name, e)), t(n, "array", (r, e = i.Array) => (s) => v(s) || l(r.name, e)), t(n, "between", (r, e, s, a) => (o) => {
  const _ = [
    { key: ":min", replace_with: e },
    { key: ":max", replace_with: s }
  ];
  return f(o) ? o > e && o < s || l(r.name, a ?? i.BetweenNumeric, _) : b(o) || v(o) ? o.length > e && o.length < s || l(
    r.name,
    a ?? (b(o) ? i.BetweenString : i.BetweenArray),
    _
  ) : l(r.name, a ?? i.BetweenFile, _);
}), t(n, "boolean", (r, e = i.Boolean) => (s) => n.accepted_booleans.includes(s) || l(r.name, e)), t(n, "confirmed", (r, e, s = i.Confirmed) => (a) => {
  const o = e.find((_) => _.name === r.name + "_confirmation");
  return c(o) ? l(r.name, s) : o.value === a || l(r.name, s);
}), t(n, "decimal", (r, e, s = null, a = i.Decimal) => (o) => {
  const u = [{ key: ":decimal", replace_with: s ? `between ${e} and ${s}` : e }];
  if (Math.floor(o) === o)
    return l(r.name, a, u);
  const x = o.toString().split(".")[1].length;
  return W(s) ? x === e || l(r.name, a, u) : x > e && x < s || l(r.name, a, u);
}), t(n, "declined", (r, e = i.Declined) => (s) => n.declined_values.includes(s) || l(r.name, e)), t(n, "different", (r, e, s = i.Different) => (a) => a !== e.value || l(r.name, s, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") }
])), t(n, "digits", (r, e, s = i.Digits) => (a) => f(a) && a.toString().length === e || l(r.name, s, [{ key: ":digits", replace_with: e }])), t(n, "digits_between", (r, e, s, a = i.DigitsBetween) => (o) => {
  const _ = [
    { key: ":min", replace_with: e },
    { key: ":max", replace_with: s }
  ];
  return f(o) && o > e && o < s || l(r.name, a, _);
}), t(n, "doesnt_end_with", (r, e, s = i.DoesntEndWith) => (a) => e.filter((o) => !a.endsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: e.join(",") }])), t(n, "doesnt_start_with", (r, e, s = i.DoesntStartWith) => (a) => e.filter((o) => !a.startsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: e.join(",") }])), t(n, "email", (r, e = i.Email) => (s) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s) || l(r.name, e)), t(n, "ends_with", (r, e, s = i.EndsWith) => (a) => e.filter((o) => a.endsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: e.join(",") }])), t(n, "file", (r, e = i.File) => (s) => E(s) || l(r.name, e)), t(n, "in_array", (r, e, s = i.InArray) => (a) => e.includes(a) || l(r.name, s, [{ key: ":values", replace_with: e.join(",") }])), t(n, "integer", (r, e = i.Integer) => (s) => f(s) || l(r.name, e)), t(n, "is_in", (r, e, s = i.In) => (a) => e.includes(a) || l(r.name, s)), t(n, "lowercase", (r, e = i.Lowercase) => (s) => s.toLowerCase() === s || l(r.name, e)), t(n, "max", (r, e, s) => (a) => {
  const o = [{ key: ":max", replace_with: e }];
  return f(a) ? a <= e || l(r.name, s ?? i.MaxNumeric, o) : b(a) || v(a) ? a.length <= e || l(
    r.name,
    s ?? (b(a) ? i.MaxString : i.MaxArray),
    o
  ) : l(r.name, s ?? i.MaxFile, o);
}), t(n, "max_digits", (r, e, s = i.MaxDigits) => (a) => f(a) && a.toString().length <= e || l(r.name, s, [{ key: ":max", replace_with: e }])), t(n, "min", (r, e, s) => (a) => {
  const o = [{ key: ":min", replace_with: e }];
  return f(a) ? a >= e || l(r.name, s ?? i.MinNumeric, o) : b(a) || v(a) ? a.length >= e || l(
    r.name,
    s ?? (b(a) ? i.MinString : i.MinArray),
    o
  ) : l(r.name, s ?? i.MinFile, o);
}), t(n, "min_digits", (r, e, s = i.MinDigits) => (a) => f(a) && a.toString().length >= e || l(r.name, s, [{ key: ":min", replace_with: e }])), t(n, "multiple_of", (r, e, s = i.MultipleOf) => (a) => f(a) && a % e === 0 || l(r.name, s, [{ key: ":value", replace_with: e }])), t(n, "not_in", (r, e, s = i.NotIn) => (a) => !e.includes(a) || l(r.name, s)), t(n, "not_regex", (r, e, s = i.NotRegex) => (a) => !e.test(a) || l(r.name, s)), t(n, "numeric", (r, e = i.Numeric) => (s) => G(s) || l(r.name, e)), t(n, "regex", (r, e, s = i.Regex) => (a) => e.test(a) || l(r.name, s)), t(n, "required", (r, e = i.Required) => (s) => !c(s) || l(r.name, e)), t(n, "required_if", (r, e, s, a = i.RequiredIf) => (o) => (e.value === s ? !c(o) : !0) || l(r.name, a, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") },
  { key: ":value", replace_with: s }
])), t(n, "required_unless", (r, e, s, a = i.RequiredUnless) => (o) => (e.value !== s ? !c(o) : !0) || l(r.name, a, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") },
  { key: ":values", replace_with: v(s) ? s.join(",") : s }
])), t(n, "required_with", (r, e, s, a = i.RequiredWith) => (o) => {
  const _ = e.filter((u) => s.includes(u.name) && !c(u.value));
  return !c(_) && !c(o) || l(r.name, a, [{ key: ":values", replace_with: s.join(",") }]);
}), t(n, "required_with_all", (r, e, s, a = i.RequiredWithAll) => (o) => e.filter((u) => s.includes(u.name) && !c(u.value)).length === s.length && !c(o) || l(r.name, a, [{ key: ":values", replace_with: s.join(",") }])), t(n, "required_without", (r, e, s, a = i.RequiredWithout) => (o) => {
  const _ = e.filter((u) => s.includes(u.name) && c(u.value));
  return !c(_) && !c(o) || l(r.name, a, [{ key: ":values", replace_with: s.join(",") }]);
}), t(n, "required_without_all", (r, e, s, a = i.RequiredWithoutAll) => (o) => e.filter((u) => s.includes(u.name) && c(u.value)).length === s.length && !c(o) || l(r.name, a, [{ key: ":values", replace_with: s.join(",") }])), t(n, "same", (r, e, s = i.Same) => (a) => a === e.value || l(r.name, s, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") }
])), t(n, "starts_with", (r, e, s = i.StartsWith) => (a) => e.filter((o) => a.startsWith(o)).length > 0 || l(r.name, s, [{ key: ":values", replace_with: e.join(",") }])), t(n, "string", (r, e = i.String) => (s) => b(s) || l(r.name, e)), t(n, "ulid", (r, e = i.Ulid) => (s) => {
  const a = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/;
  return !!s.match(a) || l(r.name, e);
}), t(n, "uppercase", (r, e = i.Uppercase) => (s) => s.toUpperCase() === s || l(r.name, e)), t(n, "uuid", (r, e = i.Uuid) => (s) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(s) || l(r.name, e));
let g = n;
class Q {
  static exists(r) {
    return !(typeof g[r.name] > "u" && !(r.name in P));
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getFunction(r) {
    return typeof g[r.name] > "u" && !(r.name in P) ? g[P[r.name]] : g[r.name];
  }
  static getName(r) {
    return typeof g[r.name] > "u" && !(r.name in P) ? P[r.name] : r.name;
  }
}
const p = class p {
  static buildArgs(r, e, s) {
    let a = [];
    return a.push(r), p.shouldPassFieldMessage(s.name) ? (c(s.message) || a.push(s.message), a) : (p.shouldPassAllFields(s.name) && a.push(e), p.shouldPassArray(s.name) && a.push((s.value || "").split(",")), p.shouldSplit(s.name) && (s.value.includes(",") ? a = [...a, ...(s.value || "").split(",")] : a.push(s.value)), p.shouldPass(s.name) && a.push(s.value), c(s.message) || a.push(s.message), a);
  }
  /** Validation requires all fields  */
  static shouldPassAllFields(r) {
    return p.expectingAllFields.includes(r);
  }
  /** Validation requires value to be an array  */
  static shouldPassArray(r) {
    return p.expectingArray.includes(r);
  }
  /** Validation only requires field and message  */
  static shouldPassFieldMessage(r) {
    return p.expectingFieldMessage.includes(r);
  }
  /** Validation value should check for splitting  */
  static shouldSplit(r) {
    return p.expectingSplit.includes(r);
  }
  /** Validation value should be passed directly.  */
  static shouldPass(r) {
    return p.expectingSingleValue.includes(r);
  }
};
t(p, "expectingArray", [
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
]), t(p, "expectingFieldMessage", [
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
]), t(p, "expectingSplit", ["between", "decimal", "digits_between"]), t(p, "expectingSingleValue", [
  "digits",
  "max",
  "max_digits",
  "min",
  "min_digits",
  "multiple_of",
  "not_regex",
  "regex"
]), t(p, "expectingAllFields", [
  "confirmed",
  "required_with",
  "required_with_all",
  "required_without",
  "required_without_all"
]), t(p, "expectingComparison", ["different", "same"]), t(p, "expectingComparisonAndValue", ["required_if", "required_unless"]);
let F = p;
class h extends K {
  /**
   * Creates an instance of EasyField.
   * @param {Partial<EasyField>} [init] - Initialization object for setting properties.
   */
  constructor(e) {
    super(e);
    t(this, "active", !1);
    t(this, "append_icon");
    t(this, "autofocus", !1);
    t(this, "base_color");
    t(this, "bg_color");
    t(this, "center_affix", !1);
    t(this, "clear_icon");
    t(this, "clearable", !1);
    t(this, "color");
    t(this, "cols", 12);
    t(this, "component", "");
    t(this, "component_type");
    t(this, "density", D.Default);
    t(this, "depends_on", "");
    t(this, "disabled", !1);
    t(this, "discriminator", "");
    t(this, "eager", !1);
    t(this, "error", !1);
    t(this, "error_messages", []);
    t(this, "flat", !1);
    t(this, "focused", !1);
    t(this, "help", "");
    t(this, "hide_details", !1);
    t(this, "hint");
    t(this, "id");
    t(this, "label", "");
    t(this, "loading", !1);
    t(this, "max_errors", 1);
    t(this, "messages", []);
    t(this, "name", "");
    t(this, "offset", 0);
    t(this, "order", 0);
    t(this, "outlined", !1);
    t(this, "parent_loaded", !1);
    t(this, "persistent_clear", !1);
    t(this, "persistent_counter", !1);
    t(this, "persistent_hint", !1);
    t(this, "persistent_placeholder", !1);
    t(this, "placeholder", "");
    t(this, "prefix");
    t(this, "prepend_icon");
    t(this, "readonly", !1);
    t(this, "require_confirmation", !1);
    t(this, "required", !1);
    t(this, "role");
    t(this, "rounded", !1);
    t(this, "rules", []);
    t(this, "show_if", !1);
    t(this, "show_if_parent", "");
    t(this, "show_if_value");
    t(this, "single_line", !1);
    t(this, "suffix");
    t(this, "theme");
    t(this, "tooltip");
    t(this, "type", "");
    t(this, "validate_on");
    t(this, "validated", !0);
    t(this, "value");
    t(this, "variant", C.Filled);
    if (c(e == null ? void 0 : e.clear_icon) || (this.clear_icon = new m(e == null ? void 0 : e.clear_icon), e == null || delete e.clear_icon), c(e == null ? void 0 : e.append_icon) || (this.append_icon = new m(e == null ? void 0 : e.append_icon), e == null || delete e.append_icon), c(e == null ? void 0 : e.prepend_icon) || (this.prepend_icon = new m(e == null ? void 0 : e.prepend_icon), e == null || delete e.prepend_icon), c(e == null ? void 0 : e.prepend_icon) || (this.prepend_icon = new m(e == null ? void 0 : e.prepend_icon), e == null || delete e.prepend_icon), c(e == null ? void 0 : e.tooltip) || (this.tooltip = new J(e == null ? void 0 : e.tooltip), e == null || delete e.tooltip), Object.assign(this, e), !this.required)
      this.required = this.rules.some((a) => a.name === "required" && a.value);
    else {
      const a = this.rules.find(
        (o) => o.name === "required"
      );
      a ? a.value = !0 : this.rules.push(new Y({ name: "required", value: !0 }));
    }
    this.clearable && c(this.clear_icon) && (this.clear_icon = new m({ icon: "mdi-close", color: "secondary" }));
    const s = L.getInstance();
    s.tags_on_placeholder && !c(this.placeholder) && (this.required ? this.placeholder += s.required_placeholder_text : s.required_tags_only || (this.placeholder += s.optional_placeholder_text)), s.tags_on_labels && !c(this.label) && (this.required ? this.label += s.required_label_text : s.required_tags_only || (this.label += s.optional_label_text));
  }
  addErrorMessage(e) {
    return this.validated = !1, v(this.error_messages) && (this.error_messages.find((a) => a == e) || this.error_messages.push(e)), this;
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
  isLoading(e) {
    return this.loading = e, this;
  }
  /**
   * Check if the parent field is loaded.
   * @param {EasyField} parent_field - The parent field to check against.
   * @returns {boolean} True if the parent field is loaded; otherwise, false.
   */
  isParentLoaded(e) {
    return c(this.depends_on) ? !0 : !c(e == null ? void 0 : e.value);
  }
  /**
   * Load data for the field asynchronously.
   * @param {string} form_name - The name of the form.
   * @param {EasyField} parent - The parent field for additional data.
   * @returns {Promise<object|boolean>} A Promise that resolves to the loaded data or false if loading fails.
   */
  async load(e, s) {
    var o, _, u;
    let a;
    this.isLoading(!0);
    try {
      let x = {};
      if (c(this.depends_on) || (x = {
        parent_name: s.name,
        parent_value: s.value
      }), a = await M.request(
        T.Post,
        U.options.buildDomain("/forms/fields/load"),
        M.mergeData({ form_name: e.name, field_name: this.name }, x),
        e.axios
      ), a.status === 200 || a.status === 204) {
        if (this.isLoading(((o = a == null ? void 0 : a.data) == null ? void 0 : o.loader) ?? !1), !((_ = a == null ? void 0 : a.data) != null && _.result))
          return !1;
        const A = JSON.parse(JSON.stringify((u = a == null ? void 0 : a.data) == null ? void 0 : u.data));
        return c(A) ? !1 : A;
      }
    } catch {
      return !1;
    }
    return !1;
  }
  /**
   * Update the field based on the parent field.
   * @param {this} parent_field - The parent field to check against.
   * @returns {boolean} True if the parent field is loaded; otherwise, false.
   */
  update(e) {
    return c(this.depends_on) ? !0 : !c(e.value);
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
  findValidation(e) {
    return this.rules.find((s) => s.name === e);
  }
  /**
   * Apply validation rules to the field.
   * @param {FieldType[]} [fields] - An optional array of fields to use in validation.
   * @returns {any[]} An array of validation results.
   */
  validationRules(e) {
    return this.rules.filter((s) => Q.exists(s)).map((s) => g[s.name](
      ...F.buildArgs(this, e ?? [], s)
    ));
  }
}
class ce extends h {
  constructor(e) {
    super(e);
    t(this, "auto_select_first", !1);
    t(this, "chips", !1);
    t(this, "closable_chips", !1);
    t(this, "close_text", "$vuetify.close");
    t(this, "component", "v-autocomplete");
    t(this, "counter", !1);
    t(this, "direction", w.Horizontal);
    t(this, "filter_keys", ["title"]);
    t(this, "filter_mode", I.Intersection);
    t(this, "hide_no_data", !1);
    t(this, "hide_selected", !1);
    t(this, "item_children", !1);
    t(this, "item_color");
    t(this, "item_props", "props");
    t(this, "item_title", "title");
    t(this, "item_value", "value");
    t(this, "items", []);
    t(this, "menu", !1);
    t(this, "multiple", !1);
    t(this, "no_data_text", "$vuetify.noDataText");
    t(this, "no_filter", !1);
    t(this, "open_on_clear", !1);
    t(this, "open_text", "$vuetify.open");
    t(this, "prepend_inner_icon");
    t(this, "return_object", !1);
    t(this, "search", "");
    t(this, "transition", !1);
    t(this, "type", "text");
    Object.assign(this, e), this.discriminator = "AutoCompleteField";
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
  loadItems(e) {
    return this.items = e, this;
  }
}
class de extends h {
  constructor(e) {
    super(e);
    t(this, "center_affix", !0);
    t(this, "component", "v-checkbox");
    t(this, "defaults_target");
    t(this, "direction", w.Horizontal);
    t(this, "false_icon", "$checkboxOff");
    t(this, "false_value");
    t(this, "hide_details", !1);
    t(this, "indeterminate", !1);
    t(this, "indeterminate_icon", "$checkboxIndeterminate");
    t(this, "multiple", !1);
    t(this, "ripple", !1);
    t(this, "transition", !1);
    t(this, "true_icon", "$checkboxOn");
    t(this, "true_value");
    t(this, "type", "checkbox");
    Object.assign(this, e), this.discriminator = "CheckboxField";
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
class pe extends h {
  constructor(e) {
    super(e);
    t(this, "class", "ml-auto");
    t(this, "component", "easy-checkbox-group");
    t(this, "items", []);
    t(this, "switch");
    t(this, "value", []);
    Object.assign(this, e), this.discriminator = "CheckboxGroupField";
  }
  addAllItems() {
    this.clear();
    for (const e of this.items)
      e.value = !0, this.value.push(new j({ key: e.name, value: e.value }));
  }
  addItem(e, s) {
    this.value.push(new j({ key: e, value: s }));
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
    for (const e of this.items)
      e.value = !1;
  }
  find(e) {
    return this.value.find((s) => s.key == e.name);
  }
  removeItem(e) {
    const s = this.value.indexOf(e);
    this.value.splice(s, 1);
  }
}
class k extends h {
  constructor(e) {
    super(e);
    t(this, "append_inner_icon");
    t(this, "component", "v-text-field");
    t(this, "counter", !1);
    t(this, "direction", w.Horizontal);
    t(this, "dirty", !1);
    t(this, "masking");
    t(this, "prepend_inner_icon");
    c(e == null ? void 0 : e.append_inner_icon) || (this.append_inner_icon = new m(e == null ? void 0 : e.append_inner_icon), e == null || delete e.append_inner_icon), c(e == null ? void 0 : e.prepend_inner_icon) || (this.prepend_inner_icon = new m(e == null ? void 0 : e.prepend_inner_icon), e == null || delete e.prepend_inner_icon), Object.assign(this, e), this.discriminator = "TextField";
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
class O extends h {
  constructor(e) {
    super(e);
    t(this, "border", !1);
    t(this, "canvas_height", 150);
    t(this, "dot_size", 10);
    t(this, "elevation");
    t(this, "hide_canvas", !1);
    t(this, "hide_inputs", !1);
    t(this, "hide_sliders", !1);
    t(this, "mode", y.Hex);
    t(this, "modes", [
      y.Hex,
      y.Hexa,
      y.Hsl,
      y.Hsla,
      y.Rgb,
      y.Rgba
    ]);
    t(this, "position");
    t(this, "rounded", !1);
    t(this, "show_swatches", !1);
    t(this, "swatches");
    t(this, "swatches_max_height", 150);
    t(this, "tag", "div");
    t(this, "width", "300");
    Object.assign(this, e), this.discriminator = "ColorPicker";
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
class _e extends h {
  constructor(e) {
    super(e);
    t(this, "component", "easy-color-picker");
    t(this, "menu", new q());
    t(this, "picker", new O({}));
    t(this, "textfield", new k({
      name: "picker_value",
      label: "Color Picker",
      readonly: !0,
      prepend_inner_icon: new m({
        icon: "mdi-square-rounded",
        size: "x-large"
      })
    }));
    c(e == null ? void 0 : e.menu) || (this.menu = new q(e == null ? void 0 : e.menu), e == null || delete e.menu), c(e == null ? void 0 : e.picker) || (this.picker = new O(e == null ? void 0 : e.picker), e == null || delete e.picker), c(e == null ? void 0 : e.textfield) || (this.textfield = new k(e == null ? void 0 : e.textfield), e == null || delete e.textfield), Object.assign(this, e), this.discriminator = "ColorPickerField";
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
class X extends h {
  constructor(e) {
    super(e);
    t(this, "border", !1);
    t(this, "calendar_icon", "$calendar");
    t(this, "cancel_text", "$vuetify.datePicker.cancel");
    t(this, "collapse_icon", "$collapse");
    t(this, "display_date");
    t(this, "elevation");
    t(this, "expand_icon", "$expand");
    t(this, "format");
    t(this, "header", "$vuetify.datePicker.header");
    t(this, "height");
    t(this, "hide_actions", !1);
    t(this, "hide_weekdays", !1);
    t(this, "hover_date");
    t(this, "input_mode", z.Calendar);
    t(this, "input_placeholder", "dd/mm/yyyy");
    t(this, "input_text", "$vuetify.datePicker.input.placeholder");
    t(this, "keyboard_icon", "$edit");
    t(this, "landscape", !1);
    t(this, "max");
    t(this, "max_height");
    t(this, "max_width");
    t(this, "min");
    t(this, "min_height");
    t(this, "min_width");
    t(this, "multiple", !1);
    t(this, "next_icon", "$next");
    t(this, "ok_text", "$vuetify.datePicker.ok");
    t(this, "position");
    t(this, "prev_icon", "$prev");
    t(this, "rounded", !1);
    t(this, "show_adjacent_months", !1);
    t(this, "show_week", !1);
    t(this, "side");
    t(this, "tag", "div");
    t(this, "title", "$vuetify.datePicker.title");
    t(this, "view_mode", R.Month);
    t(this, "width");
    Object.assign(this, e), this.discriminator = "DatePicker";
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
class ue extends h {
  constructor(e) {
    super(e);
    t(this, "component", "easy-date-picker");
    t(this, "menu", new q({
      close_on_content_click: !1,
      open_delay: 0
    }));
    t(this, "picker", new X({
      width: 360,
      format: "YYYY-MM-DD"
    }));
    t(this, "textfield", new k({
      name: "date_picker_value",
      label: "Date Picker",
      readonly: !0,
      prepend_inner_icon: new m({
        icon: "mdi-calendar-month",
        size: "large"
      })
    }));
    Object.assign(this, e), this.discriminator = "DatePickerField";
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
class he extends h {
  constructor(e) {
    super(e);
    t(this, "accept", "image/png, image/jpeg");
    t(this, "append_inner_icon");
    t(this, "chips", !1);
    t(this, "component", "v-file-input");
    t(this, "counter", !1);
    t(this, "counter_size_string", "$vuetify.fileInput.counterSize");
    t(this, "counter_string", "$vuetify.fileInput.counter");
    t(this, "direction", w.Horizontal);
    t(this, "dirty", !1);
    t(this, "multiple", !1);
    t(this, "prepend_inner_icon");
    t(this, "reversed", !1);
    t(this, "show_size", !1);
    t(this, "single_line", !1);
    Object.assign(this, e), this.discriminator = "FileInputField";
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
class me extends h {
  constructor(e) {
    super(e);
    t(this, "component", "easy-password");
    t(this, "lower_case", !0);
    t(this, "min_length", 8);
    t(this, "numbers", !0);
    t(this, "special", !0);
    t(this, "upper_case", !0);
    t(this, "show_strength_bar", !1);
    t(this, "strength_error_color", "error");
    t(this, "strength_error_text", "Weak");
    t(this, "strength_success_color", "success");
    t(this, "strength_success_text", "Strong");
    t(this, "strength_warning_color", "warning");
    t(this, "strength_warning_text", "Medium");
    t(this, "textfield");
    t(this, "view_mode", !1);
    c(e.textfield) || (this.textfield = new k(e == null ? void 0 : e.textfield), e == null || delete e.textfield), Object.assign(this, e), c(this.textfield) && (this.textfield = new k(e)), this.textfield.type = "password", this.textfield.component = "v-text-field", this.textfield.discriminator = "TextField", this.discriminator = "PasswordField";
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
class fe extends h {
  constructor(e) {
    super(e);
    t(this, "component", "v-radio-group");
    t(this, "defaults_target");
    t(this, "direction", w.Horizontal);
    t(this, "false_icon", "$radioOff");
    t(this, "height", "auto");
    t(this, "inline", !1);
    t(this, "items", []);
    t(this, "ripple", !1);
    t(this, "true_icon", "$radioOn");
    t(this, "type", "radio");
    if (!c(e == null ? void 0 : e.items) && v(e == null ? void 0 : e.items)) {
      for (const s of (e == null ? void 0 : e.items) ?? [])
        this.items.push(new B(s));
      e == null || delete e.items;
    }
    Object.assign(this, e), this.discriminator = "RadioGroupField";
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
class B extends h {
  constructor(e) {
    super(e);
    t(this, "component", "v-radio");
    t(this, "defaults_target");
    t(this, "direction", w.Horizontal);
    t(this, "false_icon", "$radioOff");
    t(this, "false_value");
    t(this, "inline", !1);
    t(this, "multiple", !1);
    t(this, "ripple", !1);
    t(this, "true_icon", "$radioOn");
    t(this, "true_value");
    t(this, "type", "radio");
    Object.assign(this, e), this.discriminator = "RadioField";
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
class ge extends h {
  constructor(e) {
    super(e);
    t(this, "center_affix", !0);
    t(this, "component", "v-switch");
    t(this, "defaults_target");
    t(this, "direction", w.Horizontal);
    t(this, "false_icon");
    t(this, "false_value");
    t(this, "hide_details", !1);
    t(this, "indeterminate", !1);
    t(this, "inline", !1);
    t(this, "inset", !1);
    t(this, "multiple", !1);
    t(this, "ripple", !1);
    t(this, "transition", !1);
    t(this, "true_icon");
    t(this, "true_value");
    t(this, "type", "switch");
    Object.assign(this, e), this.discriminator = "SwitchField";
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
class we extends h {
  constructor(e) {
    super(e);
    t(this, "component", "easy-time-picker");
    t(this, "menu", new q());
    t(this, "picker", new H({
      width: 360
    }));
    t(this, "textfield", new k({
      label: "Time Picker",
      readonly: !0,
      prepend_inner_icon: new m({
        icon: "mdi-clock-outline",
        size: "large"
      })
    }));
    Object.assign(this, e), this.discriminator = "TimePickerField";
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
class H extends h {
  constructor(e) {
    super(e);
    t(this, "cancel_text", "cancel");
    t(this, "close_on_outside_click", !0);
    t(this, "elevation");
    t(this, "header", "");
    t(this, "height");
    t(this, "hide_actions", !1);
    t(this, "mode", N.Normal);
    t(this, "ok_text", "ok");
    t(this, "pad_start", !0);
    t(this, "position");
    t(this, "rolling_numbers", !0);
    t(this, "tag", "div");
    t(this, "title", "select time");
    t(this, "width");
    Object.assign(this, e), this.discriminator = "TimePicker";
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
class xe extends h {
  constructor(e) {
    super(e);
    t(this, "append_inner_icon");
    t(this, "auto_grow");
    t(this, "component", "v-textarea");
    t(this, "counter", !1);
    t(this, "direction", w.Horizontal);
    t(this, "dirty", !1);
    t(this, "masking");
    t(this, "max_rows");
    t(this, "no_resize", !1);
    t(this, "prepend_inner_icon");
    t(this, "rows", 5);
    t(this, "reverse", !1);
    c(e == null ? void 0 : e.append_inner_icon) || (this.append_inner_icon = new m(e == null ? void 0 : e.append_inner_icon), e == null || delete e.append_inner_icon), c(e == null ? void 0 : e.prepend_inner_icon) || (this.prepend_inner_icon = new m(e == null ? void 0 : e.prepend_inner_icon), e == null || delete e.prepend_inner_icon), Object.assign(this, e), this.discriminator = "TextareaField";
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
  ce as A,
  pe as C,
  X as D,
  h as E,
  he as F,
  me as P,
  fe as R,
  ge as S,
  k as T,
  de as a,
  B as b,
  O as c,
  _e as d,
  ue as e,
  we as f,
  xe as g,
  H as h
};
