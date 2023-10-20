var M = Object.defineProperty;
var N = (d, s, e) => s in d ? M(d, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : d[s] = e;
var i = (d, s, e) => (N(d, typeof s != "symbol" ? s + "" : s, e), e);
import { V as D, C as k } from "./ValidationRule-cec9d477.js";
import { S as A } from "./ServerCall-8eff3f6f.js";
import { A as j } from "./AxiosCalls-a93e3e6c.js";
import { D as P } from "./DensityTypes-eaa8882a.js";
import { V as c, b as y, T as I, D as O } from "./ValidationUpdates-2bad4a1e.js";
import { S as v, i as o, a as x, b as m, c as g, d as R, e as W, f as C, G as F, I as T } from "./Icon-29f81fc8.js";
const n = (d, s, e) => v.convertMessageHolders(d, s, e), K = (d, s) => v.generate(d, s), f = class f {
  constructor(s) {
    /**
     * Backend domain for making API calls.
     * It should end without a forward slash.
     * eg. https://domain.com
     */
    i(this, "backend_domain", "");
    /**
     * The prefix for making calls via API, this is append to the backend domain.
     * It should begin with a forward slash and end without a forward slash.
     * This should match laravel.
     * eg. /api/v1.0/
     */
    i(this, "axios_prefix", "");
    /**
     * If CSRF checks are required then this should be the endpoint.
     * It should begin with a forward slash and end without a forward slash.
     * eg. /security/cookie
     */
    i(this, "csrf_endpoint", "");
    /**
     * Does your frontend application use vue router.
     */
    i(this, "uses_vue_router", !1);
    /**
     * When initiated, if placeholder is present and empty,
     * and text is present and not empty, placeholder should = text
     */
    i(this, "text_to_placeholder", !0);
    /**
     * Display required tags only, either tags_on_placeholder or tags_on_labels
     * must be set to true for this to take effect.
     */
    i(this, "required_tags_only", !0);
    /**
     * Should the placeholder text display required and optional tags
     */
    i(this, "tags_on_placeholder", !0);
    /**
     * Should the label text display required and optional tags
     */
    i(this, "tags_on_labels", !1);
    /**
     * Optional placeholder text to append placeholder attribute
     */
    i(this, "optional_placeholder_text", " ( * Optional )");
    /**
     * Optional label text to append placeholder attribute
     */
    i(this, "optional_label_text", " ( * Optional )");
    /**
     * Required placeholder text to append placeholder attribute
     */
    i(this, "required_placeholder_text", " ( * Required )");
    /**
     * Required label text to append placeholder attribute
     */
    i(this, "required_label_text", " ( * Required )");
    Object.assign(this, s), f.instance = this;
  }
  buildDomain(s = "") {
    return o(s) ? this.backend_domain.concat(this.axios_prefix) : this.backend_domain.concat(this.axios_prefix.concat(s));
  }
  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation lets us subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance() {
    return f.instance || (f.instance = new f()), f.instance;
  }
};
i(f, "instance");
let b = f;
const l = class l {
};
i(l, "accepted_booleans", [!0, !1, 1, 0, "0", "1"]), i(l, "accepted_values", ["yes", "on", 1, !0]), i(l, "declined_values", ["no", "off", 0, !1]), i(l, "accepted", (s, e = c.Accepted) => (t) => l.accepted_values.includes(t) || n(s.name, e)), i(l, "array", (s, e = c.Array) => (t) => x(t) || n(s.name, e)), i(l, "between", (s, e, t, r) => (a) => {
  const p = [
    { key: ":min", replace_with: e },
    { key: ":max", replace_with: t }
  ];
  return m(a) ? a > e && a < t || n(s.name, r ?? c.BetweenNumeric, p) : g(a) || x(a) ? a.length > e && a.length < t || n(
    s.name,
    r ?? (g(a) ? c.BetweenString : c.BetweenArray),
    p
  ) : n(s.name, r ?? c.BetweenFile, p);
}), i(l, "boolean", (s, e = c.Boolean) => (t) => l.accepted_booleans.includes(t) || n(s.name, e)), i(l, "confirmed", (s, e, t = c.Confirmed) => (r) => {
  const a = e.find((p) => p.name === s.name + "_confirmation");
  return o(a) ? n(s.name, t) : a.value === r || n(s.name, t);
}), i(l, "decimal", (s, e, t = null, r = c.Decimal) => (a) => {
  const u = [{ key: ":decimal", replace_with: t ? `between ${e} and ${t}` : e }];
  if (Math.floor(a) === a)
    return n(s.name, r, u);
  const w = a.toString().split(".")[1].length;
  return R(t) ? w === e || n(s.name, r, u) : w > e && w < t || n(s.name, r, u);
}), i(l, "declined", (s, e = c.Declined) => (t) => l.declined_values.includes(t) || n(s.name, e)), i(l, "different", (s, e, t = c.Different) => (r) => r !== e.value || n(s.name, t, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") }
])), i(l, "digits", (s, e, t = c.Digits) => (r) => m(r) && r.toString().length === e || n(s.name, t, [{ key: ":digits", replace_with: e }])), i(l, "digits_between", (s, e, t, r = c.DigitsBetween) => (a) => {
  const p = [
    { key: ":min", replace_with: e },
    { key: ":max", replace_with: t }
  ];
  return m(a) && a > e && a < t || n(s.name, r, p);
}), i(l, "doesnt_end_with", (s, e, t = c.DoesntEndWith) => (r) => e.filter((a) => !r.endsWith(a)).length > 0 || n(s.name, t, [{ key: ":values", replace_with: e.join(",") }])), i(l, "doesnt_start_with", (s, e, t = c.DoesntStartWith) => (r) => e.filter((a) => !r.startsWith(a)).length > 0 || n(s.name, t, [{ key: ":values", replace_with: e.join(",") }])), i(l, "email", (s, e = c.Email) => (t) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t) || n(s.name, e)), i(l, "ends_with", (s, e, t = c.EndsWith) => (r) => e.filter((a) => r.endsWith(a)).length > 0 || n(s.name, t, [{ key: ":values", replace_with: e.join(",") }])), i(l, "file", (s, e = c.File) => (t) => W(t) || n(s.name, e)), i(l, "in_array", (s, e, t = c.InArray) => (r) => e.includes(r) || n(s.name, t, [{ key: ":values", replace_with: e.join(",") }])), i(l, "integer", (s, e = c.Integer) => (t) => m(t) || n(s.name, e)), i(l, "is_in", (s, e, t = c.In) => (r) => e.includes(r) || n(s.name, t)), i(l, "lowercase", (s, e = c.Lowercase) => (t) => t.toLowerCase() === t || n(s.name, e)), i(l, "max", (s, e, t) => (r) => {
  const a = [{ key: ":max", replace_with: e }];
  return m(r) ? r <= e || n(s.name, t ?? c.MaxNumeric, a) : g(r) || x(r) ? r.length <= e || n(
    s.name,
    t ?? (g(r) ? c.MaxString : c.MaxArray),
    a
  ) : n(s.name, t ?? c.MaxFile, a);
}), i(l, "max_digits", (s, e, t = c.MaxDigits) => (r) => m(r) && r.toString().length <= e || n(s.name, t, [{ key: ":max", replace_with: e }])), i(l, "min", (s, e, t) => (r) => {
  const a = [{ key: ":min", replace_with: e }];
  return m(r) ? r >= e || n(s.name, t ?? c.MinNumeric, a) : g(r) || x(r) ? r.length >= e || n(
    s.name,
    t ?? (g(r) ? c.MinString : c.MinArray),
    a
  ) : n(s.name, t ?? c.MinFile, a);
}), i(l, "min_digits", (s, e, t = c.MinDigits) => (r) => m(r) && r.toString().length >= e || n(s.name, t, [{ key: ":min", replace_with: e }])), i(l, "multiple_of", (s, e, t = c.MultipleOf) => (r) => m(r) && r % e === 0 || n(s.name, t, [{ key: ":value", replace_with: e }])), i(l, "not_in", (s, e, t = c.NotIn) => (r) => !e.includes(r) || n(s.name, t)), i(l, "not_regex", (s, e, t = c.NotRegex) => (r) => !e.test(r) || n(s.name, t)), i(l, "numeric", (s, e = c.Numeric) => (t) => C(t) || n(s.name, e)), i(l, "regex", (s, e, t = c.Regex) => (r) => e.test(r) || n(s.name, t)), i(l, "required", (s, e = c.Required) => (t) => !o(t) || n(s.name, e)), i(l, "required_if", (s, e, t, r = c.RequiredIf) => (a) => (e.value === t ? !o(a) : !0) || n(s.name, r, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") },
  { key: ":value", replace_with: t }
])), i(l, "required_unless", (s, e, t, r = c.RequiredUnless) => (a) => (e.value !== t ? !o(a) : !0) || n(s.name, r, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") },
  { key: ":values", replace_with: x(t) ? t.join(",") : t }
])), i(l, "required_with", (s, e, t, r = c.RequiredWith) => (a) => {
  const p = e.filter((u) => t.includes(u.name) && !o(u.value));
  return !o(p) && !o(a) || n(s.name, r, [{ key: ":values", replace_with: t.join(",") }]);
}), i(l, "required_with_all", (s, e, t, r = c.RequiredWithAll) => (a) => e.filter((u) => t.includes(u.name) && !o(u.value)).length === t.length && !o(a) || n(s.name, r, [{ key: ":values", replace_with: t.join(",") }])), i(l, "required_without", (s, e, t, r = c.RequiredWithout) => (a) => {
  const p = e.filter((u) => t.includes(u.name) && o(u.value));
  return !o(p) && !o(a) || n(s.name, r, [{ key: ":values", replace_with: t.join(",") }]);
}), i(l, "required_without_all", (s, e, t, r = c.RequiredWithoutAll) => (a) => e.filter((u) => t.includes(u.name) && o(u.value)).length === t.length && !o(a) || n(s.name, r, [{ key: ":values", replace_with: t.join(",") }])), i(l, "same", (s, e, t = c.Same) => (r) => r === e.value || n(s.name, t, [
  { key: ":other", replace_with: e.name.replaceAll("_", " ").replaceAll("-", " ") }
])), i(l, "starts_with", (s, e, t = c.StartsWith) => (r) => e.filter((a) => r.startsWith(a)).length > 0 || n(s.name, t, [{ key: ":values", replace_with: e.join(",") }])), i(l, "string", (s, e = c.String) => (t) => g(t) || n(s.name, e)), i(l, "ulid", (s, e = c.Ulid) => (t) => {
  const r = /^[0-7][0-9A-HJKMNP-TV-Z]{25}$/;
  return !!t.match(r) || n(s.name, e);
}), i(l, "uppercase", (s, e = c.Uppercase) => (t) => t.toUpperCase() === t || n(s.name, e)), i(l, "uuid", (s, e = c.Uuid) => (t) => /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(t) || n(s.name, e));
let _ = l;
class L {
  static exists(s) {
    return !(typeof _[s.name] > "u" && !(s.name in y));
  }
  // eslint-disable-next-line @typescript-eslint/ban-types
  static getFunction(s) {
    return typeof _[s.name] > "u" && !(s.name in y) ? _[y[s.name]] : _[s.name];
  }
  static getName(s) {
    return typeof _[s.name] > "u" && !(s.name in y) ? y[s.name] : s.name;
  }
}
const h = class h {
  static buildArgs(s, e, t) {
    let r = [];
    return r.push(s), h.shouldPassFieldMessage(t.name) ? (o(t.message) || r.push(t.message), r) : (h.shouldPassAllFields(t.name) && r.push(e), h.shouldPassArray(t.name) && r.push((t.value || "").split(",")), h.shouldSplit(t.name) && (t.value.includes(",") ? r = [...r, ...(t.value || "").split(",")] : r.push(t.value)), h.shouldPass(t.name) && r.push(t.value), o(t.message) || r.push(t.message), r);
  }
  /** Validation requires all fields  */
  static shouldPassAllFields(s) {
    return h.expectingAllFields.includes(s);
  }
  /** Validation requires value to be an array  */
  static shouldPassArray(s) {
    return h.expectingArray.includes(s);
  }
  /** Validation only requires field and message  */
  static shouldPassFieldMessage(s) {
    return h.expectingFieldMessage.includes(s);
  }
  /** Validation value should check for splitting  */
  static shouldSplit(s) {
    return h.expectingSplit.includes(s);
  }
  /** Validation value should be passed directly.  */
  static shouldPass(s) {
    return h.expectingSingleValue.includes(s);
  }
};
i(h, "expectingArray", [
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
]), i(h, "expectingFieldMessage", [
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
]), i(h, "expectingSplit", ["between", "decimal", "digits_between"]), i(h, "expectingSingleValue", [
  "digits",
  "max",
  "max_digits",
  "min",
  "min_digits",
  "multiple_of",
  "not_regex",
  "regex"
]), i(h, "expectingAllFields", [
  "confirmed",
  "required_with",
  "required_with_all",
  "required_without",
  "required_without_all"
]), i(h, "expectingComparison", ["different", "same"]), i(h, "expectingComparisonAndValue", ["required_if", "required_unless"]);
let q = h;
class S extends F {
  /**
   * Creates an instance of EasyField.
   * @param {Partial<EasyField>} [init] - Initialization object for setting properties.
   */
  constructor(e) {
    super(e);
    i(this, "active", !1);
    i(this, "append_icon");
    i(this, "autofocus", !1);
    i(this, "base_color");
    i(this, "bg_color");
    i(this, "center_affix", !1);
    i(this, "clear_icon");
    i(this, "clearable", !1);
    i(this, "color");
    i(this, "cols", 12);
    i(this, "component", "");
    i(this, "density", P.Default);
    i(this, "depends_on", "");
    i(this, "disabled", !1);
    i(this, "eager", !1);
    i(this, "error", !1);
    i(this, "error_messages", []);
    i(this, "flat", !1);
    i(this, "focused", !1);
    i(this, "help", "");
    i(this, "hide_details", !1);
    i(this, "hint");
    i(this, "id");
    i(this, "label", "");
    i(this, "loading", !1);
    i(this, "max_errors", 1);
    i(this, "messages", []);
    i(this, "name", "");
    i(this, "offset", 0);
    i(this, "order", 0);
    i(this, "outlined", !1);
    i(this, "parent_loaded", !1);
    i(this, "persistent_clear", !1);
    i(this, "persistent_counter", !1);
    i(this, "persistent_hint", !1);
    i(this, "persistent_placeholder", !1);
    i(this, "placeholder", "");
    i(this, "prefix");
    i(this, "prepend_icon");
    i(this, "readonly", !1);
    i(this, "require_confirmation", !1);
    i(this, "required", !1);
    i(this, "role");
    i(this, "rounded", !1);
    i(this, "rules", []);
    i(this, "show_if", !1);
    i(this, "show_if_parent", "");
    i(this, "show_if_value");
    i(this, "single_line", !1);
    i(this, "suffix");
    i(this, "theme");
    i(this, "tooltip");
    i(this, "type", "");
    i(this, "validate_on");
    i(this, "validated", !0);
    i(this, "value");
    i(this, "variant", I.Filled);
    if (Object.assign(this, e), !this.required)
      this.required = this.rules.some((r) => r.name === "required" && r.value);
    else {
      const r = this.rules.find(
        (a) => a.name === "required"
      );
      r ? r.value = !0 : this.rules.push(new D({ name: "required", value: !0 }));
    }
    this.clearable && o(this.clear_icon) && (this.clear_icon = new T({ icon: "mdi-close", color: "secondary" }));
    const t = b.getInstance();
    t.tags_on_placeholder && !o(this.placeholder) && (this.required ? this.placeholder += t.required_placeholder_text : t.required_tags_only || (this.placeholder += t.optional_placeholder_text)), t.tags_on_labels && !o(this.label) && (this.required ? this.label += t.required_label_text : t.required_tags_only || (this.label += t.optional_label_text));
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
    return o(this.depends_on) ? !0 : !o(e == null ? void 0 : e.value);
  }
  /**
   * Load data for the field asynchronously.
   * @param {string} form_name - The name of the form.
   * @param {EasyField} parent - The parent field for additional data.
   * @returns {Promise<object|boolean>} A Promise that resolves to the loaded data or false if loading fails.
   */
  async load(e, t) {
    var a, p;
    let r;
    this.isLoading(!0);
    try {
      let u = {};
      if (o(this.depends_on) || (u = {
        parent_name: t.name,
        parent_value: t.value
      }), r = await A.request(
        j.Post,
        "/forms/fields/load",
        A.mergeData({ form_name: e, field_name: this.name }, u)
      ), r.status === 200 || r.status === 204) {
        if (this.isLoading(((a = r == null ? void 0 : r.data) == null ? void 0 : a.loader) ?? !1), !((p = r == null ? void 0 : r.data) != null && p.result))
          return !1;
        Object.assign(this, JSON.parse(JSON.stringify(r.data)));
        const w = JSON.parse(JSON.stringify(r.data));
        return o(w.type) ? !1 : w;
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
    return o(this.depends_on) ? !0 : !o(e.value);
  }
  /**
   * Validate the field.
   * @returns {this} The EasyField instance for method chaining.
   */
  validate() {
    return this.validated = !0, this;
  }
  /**
   * Apply validation rules to the field.
   * @param {FieldType[]} [fields] - An optional array of fields to use in validation.
   * @returns {any[]} An array of validation results.
   */
  validationRules(e) {
    return this.rules.filter((t) => L.exists(t)).map((t) => _[t.name](
      ...q.buildArgs(this, e ?? [], t)
    ));
  }
}
class Q extends S {
  constructor(e) {
    super(e);
    i(this, "class", "ml-auto");
    i(this, "component", "easy-checkbox-group");
    i(this, "items", []);
    i(this, "switch");
    i(this, "value", []);
    Object.assign(this, e);
  }
  addAllItems() {
    this.clear();
    for (const e of this.items)
      e.value = !0, this.value.push(new k({ key: e.name, value: e.value }));
  }
  addItem(e, t) {
    this.value.push(new k({ key: e, value: t }));
  }
  clear() {
    this.value = [];
    for (const e of this.items)
      e.value = !1;
  }
  find(e) {
    return this.value.find((t) => t.key == e.name);
  }
  removeItem(e) {
    const t = this.value.indexOf(e);
    this.value.splice(t, 1);
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
}
class X extends S {
  constructor(e) {
    super(e);
    i(this, "append_inner_icon");
    i(this, "component", "v-text-field");
    i(this, "counter", !1);
    i(this, "direction", O.Horizontal);
    i(this, "dirty", !1);
    i(this, "masking");
    i(this, "prepend_inner_icon");
    Object.assign(this, e);
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
      // displayed as easy-icon with tooltip.
      // 'append_icon',
      // displayed as easy-icon with tooltip.
      // 'append_inner_icon',
      "autofocus",
      "attach",
      "base_color",
      "bg_color",
      "center_affix",
      "clearable",
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
      // displayed as easy-icon with tooltip.
      // 'prepend_icon',
      // displayed as easy-icon with tooltip.
      // 'prepend_inner_icon',
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
  Q as C,
  S as E,
  b as P,
  X as T,
  K as g
};
