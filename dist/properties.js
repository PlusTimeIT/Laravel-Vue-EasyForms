var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { A, F } from "./FormLoader-f8643b8d.js";
import { A as A2, a } from "./AxiosOptions-15ae3169.js";
import { C, V } from "./ValidationRule-73a2fa9e.js";
import "./FormLoaderTypes-8047088c.js";
import "./Types-dbac3a4a.js";
import "axios";
import "./ProgressLinear-fca54ab2.js";
import "./GotProps-440b6309.js";
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
  A as AdditionalData,
  A2 as AxiosHeader,
  a as AxiosOptions,
  C as CheckboxGroupValue,
  DataItem,
  F as FormLoader,
  MessageParameter,
  V as ValidationRule
};
