var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { a, A } from "./AxiosOptions-a3506c4f.js";
import { C, V } from "./ValidationRule-73a2fa9e.js";
import { F } from "./FormLoader-c385b8c2.js";
import "./FormLoaderTypes-8047088c.js";
import "./Types-dbac3a4a.js";
import "axios";
import "./ProgressLinear-fca54ab2.js";
import "./GotProps-440b6309.js";
class AdditionalData {
  constructor(init) {
    __publicField(this, "data", []);
    __publicField(this, "key", "");
    __publicField(this, "value", "");
    Object.assign(this, init);
  }
  toObject() {
    const result = {};
    for (const item of this.data) {
      result[item.key] = item.value;
    }
    return result;
  }
}
class DataItem {
  constructor(init) {
    __publicField(this, "key", "");
    __publicField(this, "value", "");
    Object.assign(this, init);
  }
}
class MessageParameter {
  constructor(init) {
    __publicField(this, "key", "");
    __publicField(this, "replace_with");
    Object.assign(this, init);
  }
}
export {
  AdditionalData,
  a as AxiosHeader,
  A as AxiosOptions,
  C as CheckboxGroupValue,
  DataItem,
  F as FormLoader,
  MessageParameter,
  V as ValidationRule
};
