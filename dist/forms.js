var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { i as isEmpty, a as isArray, S as ServerCall, s as store, g as isObject } from "./Types-9f7b5c2f.js";
import { A as AlertTriggers } from "./AlertTriggers-8841b46d.js";
import { A as AxiosCalls, C as ContentTypes } from "./ContentTypes-f35a51f5.js";
import { A as Alert } from "./Alert-263e9c8e.js";
import { A as AdditionalData } from "./AdditionalData-dc6ae75c.js";
import { a as AxiosOptions } from "./AxiosOptions-15ae3169.js";
import { J as JustifyRow, A as AlignRow } from "./JustifyRow-8255fd21.js";
import { B as Button } from "./Button-f88aa9d7.js";
import { E as EasyField, A as AutoCompleteField, a as CheckboxField, C as CheckboxGroupField, P as PasswordField, R as RadioGroupField, b as RadioField, c as ColorPickerField, D as DatePickerField, F as FileInputField, S as SwitchField, T as TextField, d as TimePickerField } from "./fields-7323b549.js";
import "axios";
import { D as DirectionType, F as FilterModeTypes } from "./ViewModeTypes-6930220b.js";
import "./ButtonVariantTypes-e4c42916.js";
import "./LocationTypes-8f3d7f01.js";
import "./Tooltip-ee47020d.js";
import "./ValidationRule-73a2fa9e.js";
import "./Menu-b5b194f8.js";
import "./ScrollStrategyTypes-c3dd8b07.js";
class EasyForm {
  constructor(init) {
    __publicField(this, "additional_data", new AdditionalData());
    __publicField(this, "additional_load_data", new AdditionalData());
    __publicField(this, "alerts", []);
    __publicField(this, "axios", new AxiosOptions());
    __publicField(this, "loading", true);
    __publicField(this, "name", "");
    __publicField(this, "original", []);
    __publicField(this, "results", null);
    __publicField(this, "text", "");
    __publicField(this, "title", "");
    __publicField(this, "type", "");
    if (!isEmpty(init == null ? void 0 : init.alerts) && isArray(init == null ? void 0 : init.alerts)) {
      for (const alert of (init == null ? void 0 : init.alerts) ?? []) {
        this.alerts.push(new Alert(alert));
      }
      init == null ? true : delete init.alerts;
    }
    if (!isEmpty(init == null ? void 0 : init.axios) && isArray(init == null ? void 0 : init.axios)) {
      this.axios = new AxiosOptions(init == null ? void 0 : init.axios);
      init == null ? true : delete init.axios;
    }
    Object.assign(this, init);
  }
  cancelled() {
    this.triggerAlert(AlertTriggers.Cancelled);
    return this;
  }
  failed(text) {
    this.triggerAlert(AlertTriggers.FailedProcessing, text);
    return this;
  }
  failedValidation(text) {
    this.triggerAlert(AlertTriggers.FailedValidation, text);
    return this;
  }
  hasResults(results) {
    this.results = results;
    return this;
  }
  isLoading(loading) {
    this.loading = loading;
    return this;
  }
  async load() {
    var _a, _b, _c;
    let response;
    this.triggerAlert(AlertTriggers.BeforeLoad);
    this.isLoading(true);
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/load"),
        ServerCall.mergeData({ form_name: this.name }, this.additional_load_data.toObject()),
        this.axios
      );
      if (response.status === 200 || response.status === 204) {
        this.isLoading(((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.loader) ?? false);
        if (!((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.result)) {
          this.triggerAlert(AlertTriggers.FailedLoad);
          return false;
        }
        const tempForm = JSON.parse(JSON.stringify((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.data));
        if (isEmpty(tempForm.type)) {
          this.triggerAlert(AlertTriggers.FailedLoad);
          return false;
        }
        return tempForm;
      }
    } catch (error) {
      this.triggerAlert(AlertTriggers.FailedLoad);
      return false;
    }
    this.triggerAlert(AlertTriggers.FailedLoad);
    return false;
  }
  processing() {
    this.triggerAlert(AlertTriggers.BeforeProcessing);
    return this;
  }
  processed() {
    this.triggerAlert(AlertTriggers.AfterProcessing);
    return this;
  }
  props() {
    return {
      text: this.text
    };
  }
  hideAllAlerts() {
    this.alerts.forEach((alert) => alert.hide());
    return this;
  }
  reset() {
    this.hideAllAlerts();
    this.triggerAlert(AlertTriggers.FormReset);
    return this;
  }
  resetAlerts(triggers = []) {
    if (isEmpty(triggers.length)) {
      triggers = [AlertTriggers.SuccessProcessing, AlertTriggers.FailedProcessing];
    }
    for (const alert of this.alerts) {
      if (!triggers.includes(alert.trigger)) {
        continue;
      }
      alert.reset();
    }
    return this;
  }
  success(text) {
    this.triggerAlert(AlertTriggers.SuccessProcessing, text);
    return this;
  }
  triggerAlert(trigger, text = "") {
    const alert = this.alerts.find((a) => a.trigger == trigger);
    if (isEmpty(alert)) {
      return this;
    }
    alert == null ? void 0 : alert.convertContents(text).show().autoClose();
    return this;
  }
}
class ActionForm extends EasyForm {
  constructor(init) {
    super(init);
    __publicField(this, "actions", []);
    __publicField(this, "callback", "");
    __publicField(this, "inline", false);
    __publicField(this, "justify_row", JustifyRow.Center);
    __publicField(this, "type", "action-form");
    Object.assign(this, init);
  }
  data(action_identifier) {
    const data = new FormData();
    data.set("form_name", this.name);
    data.set("action", action_identifier);
    return data;
  }
  async process(action_identifier) {
    var _a, _b;
    let response;
    this.isLoading(true);
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        "url",
        ServerCall.mergeData(this.data(action_identifier), this.additional_load_data.toObject()),
        this.axios
      );
      if (response.status === 200 || response.status === 204) {
        this.isLoading(((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.loader) ?? false);
        if (!((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.result)) {
          return false;
        }
        const results = JSON.parse(JSON.stringify(response.data));
        return results;
      }
    } catch (error) {
      return false;
    }
    return false;
  }
  props() {
    return {};
  }
}
class SelectField extends EasyField {
  constructor(init) {
    super(init);
    __publicField(this, "auto_select_first", false);
    __publicField(this, "chips", false);
    __publicField(this, "closable_chips", false);
    __publicField(this, "close_text", "$vuetify.close");
    __publicField(this, "component", "v-select");
    __publicField(this, "counter", false);
    __publicField(this, "direction", DirectionType.Horizontal);
    __publicField(this, "filter_keys", ["title"]);
    __publicField(this, "filter_mode", FilterModeTypes.Intersection);
    __publicField(this, "hide_no_data", false);
    __publicField(this, "hide_selected", false);
    __publicField(this, "item_children", false);
    __publicField(this, "item_color");
    __publicField(this, "item_props", "props");
    __publicField(this, "item_title", "title");
    __publicField(this, "item_value", "value");
    __publicField(this, "items", []);
    __publicField(this, "menu", false);
    __publicField(this, "menu_icon", "$dropdown");
    __publicField(this, "multiple", false);
    __publicField(this, "no_data_text", "$vuetify.noDataText");
    __publicField(this, "no_filter", false);
    __publicField(this, "open_on_clear", false);
    __publicField(this, "open_text", "$vuetify.open");
    __publicField(this, "prepend_inner_icon");
    __publicField(this, "return_object", false);
    __publicField(this, "search", "");
    __publicField(this, "transition", false);
    __publicField(this, "type", "text");
    Object.assign(this, init);
  }
  loadItems(items) {
    this.items = items;
    return this;
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
const classRegistry = {};
function registerDefaults() {
  const defaults = [
    {
      name: "AutoCompleteField",
      field: AutoCompleteField
    },
    {
      name: "CheckboxField",
      field: CheckboxField
    },
    {
      name: "CheckboxGroupField",
      field: CheckboxGroupField
    },
    {
      name: "PasswordField",
      field: PasswordField
    },
    {
      name: "RadioGroupField",
      field: RadioGroupField
    },
    {
      name: "RadioField",
      field: RadioField
    },
    {
      name: "ColorPickerField",
      field: ColorPickerField
    },
    {
      name: "DatePickerField",
      field: DatePickerField
    },
    {
      name: "FileInputField",
      field: FileInputField
    },
    {
      name: "SwitchField",
      field: SwitchField
    },
    {
      name: "TextField",
      field: TextField
    },
    {
      name: "TimePickerField",
      field: TimePickerField
    },
    {
      name: "SelectField",
      field: SelectField
    }
  ];
  for (const fieldDefault of defaults) {
    registerClass(fieldDefault.name, fieldDefault.field);
  }
}
registerDefaults();
function registerClass(className, classConstructor) {
  classRegistry[className] = classConstructor;
}
function getClassConstructor(className) {
  return classRegistry[className];
}
class InputForm extends EasyForm {
  constructor(init) {
    super(init);
    __publicField(this, "button_align_row", AlignRow.Center);
    __publicField(this, "button_justify_row", JustifyRow.Center);
    __publicField(this, "buttons", []);
    __publicField(this, "fields", []);
    __publicField(this, "original", []);
    __publicField(this, "type", "input-form");
    if (!isEmpty(init == null ? void 0 : init.fields) && isArray(init == null ? void 0 : init.fields)) {
      for (const field of (init == null ? void 0 : init.fields) ?? []) {
        if (!isEmpty(field.discriminator)) {
          const className = field.discriminator;
          this.instantiateField(className, field);
        }
      }
      init == null ? true : delete init.fields;
    }
    if (!isEmpty(init == null ? void 0 : init.buttons) && isArray(init == null ? void 0 : init.buttons)) {
      for (const button of (init == null ? void 0 : init.buttons) ?? []) {
        this.buttons.push(new Button(button));
      }
      init == null ? true : delete init.buttons;
    }
    Object.assign(this, init);
    this.original = this.fields.map((x) => Object.assign({}, x));
    this.fields = this.fields.sort((a, b) => a.order - b.order);
    this.buttons = this.buttons.sort((a, b) => a.order - b.order);
  }
  data() {
    const identifier = this.additional_data.data.find((data2) => data2.key == "identifier" || data2.key == "id");
    const data = new FormData();
    data.set("form_name", this.name);
    if (!isEmpty(identifier)) {
      data.set("id", identifier == null ? void 0 : identifier.value);
    }
    this.fields.forEach((field) => {
      if (!isEmpty(field.value)) {
        if (isArray(field.value)) {
          field.value.forEach((value) => {
            data.set(this.formatForArrayOrObject(field.name), value);
          });
        } else if (isObject(field.value)) {
          data.set(this.formatForArrayOrObject(field.name), field.value);
        } else {
          data.set(field.name, field.value);
        }
      }
    });
    return data;
  }
  formatForArrayOrObject(name) {
    return name + "[]";
  }
  instantiateField(className, fieldData) {
    const classConstructor = getClassConstructor(className);
    if (classConstructor) {
      const instance = new classConstructor(fieldData);
      this.fields.push(instance);
    } else {
      console.error(`Class "${className}" not found in the registry.`);
    }
  }
  async process() {
    var _a, _b, _c, _d, _e, _f;
    this.processing();
    let response;
    try {
      response = await ServerCall.request(
        AxiosCalls.Post,
        store.options.buildDomain("/forms/process"),
        ServerCall.mergeData(this.data(), this.additional_data.toObject()),
        this.axios
      );
      this.processed();
      if (response.status === 200 || response.status === 204) {
        this.isLoading(((_a = response == null ? void 0 : response.data) == null ? void 0 : _a.loader) ?? false);
        const tempResult = JSON.parse(JSON.stringify((_b = response == null ? void 0 : response.data) == null ? void 0 : _b.data));
        if ((_c = response == null ? void 0 : response.data) == null ? void 0 : _c.result) {
          this.success((_d = response == null ? void 0 : response.data) == null ? void 0 : _d.data);
          return (_e = response == null ? void 0 : response.data) == null ? void 0 : _e.data;
        }
        if (!isEmpty(tempResult == null ? void 0 : tempResult.validation_errors)) {
          for (const fieldName in tempResult == null ? void 0 : tempResult.validation_errors) {
            const field = this.fields.find((f) => f.name === fieldName);
            const errors = tempResult == null ? void 0 : tempResult.validation_errors[fieldName];
            for (const error of errors) {
              field.addErrorMessage(error);
            }
          }
          this.failedValidation();
          return false;
        }
        this.failed((_f = response == null ? void 0 : response.data) == null ? void 0 : _f.data);
        return false;
      }
    } catch (error) {
      return false;
    }
    this.failed();
    return false;
  }
  loadErrorMessages(errors) {
    let validation;
    for (validation of errors) {
      const field = this.fields.find((f) => f.name === validation.id);
      for (const error of validation.errorMessages) {
        if (!this.hasErrorMessage(field, error)) {
          field.addErrorMessage(error);
        }
      }
    }
    return this;
  }
  hasErrorMessage(field, error) {
    if (typeof field.error_messages === "string") {
      return field.error_messages == error;
    }
    const message = field.error_messages.find((f) => f === error);
    return !isEmpty(message);
  }
  /**
   * Provides the props for VForm
   * @returns VForm
   */
  props() {
    const result = {};
    result["enctype"] = ContentTypes.Application;
    if (this.axios.multi_part) {
      result["enctype"] = ContentTypes.MultiPart;
    }
    return result;
  }
  reset() {
    super.reset();
    const originals = this.original;
    this.fields = this.fields.map((field) => {
      var _a;
      field.value = (_a = originals.find((f) => f.name === field.name)) == null ? void 0 : _a.value;
      field.clearErrorMessages();
      return field;
    });
    return this;
  }
}
export {
  ActionForm,
  EasyForm,
  InputForm
};
