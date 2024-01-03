var r = Object.defineProperty;
var e = (a, t, s) => t in a ? r(a, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[t] = s;
var o = (a, t, s) => (e(a, typeof t != "symbol" ? t + "" : t, s), s);
import { a as k, A } from "./AxiosOptions-6a3d3f30.js";
import { C as f, V as j } from "./ValidationRule-cec9d477.js";
import { F as V } from "./FormLoader-998aef7a.js";
import "./FormLoaderTypes-b32e44d6.js";
import "./Store-53e83c02.js";
import "axios";
import "./ProgressLinear-e9501234.js";
import "./GotProps-feabb85b.js";
import "./LocationTypes-c293bdaa.js";
class x {
  constructor(t) {
    o(this, "key", "");
    o(this, "value", "");
    Object.assign(this, t);
  }
}
class d {
  constructor(t) {
    o(this, "key", "");
    o(this, "value", "");
    Object.assign(this, t);
  }
}
class h {
  constructor(t) {
    o(this, "key", "");
    o(this, "replace_with");
    Object.assign(this, t);
  }
}
export {
  x as AdditionalData,
  k as AxiosHeader,
  A as AxiosOptions,
  f as CheckboxGroupValue,
  d as DataItem,
  V as FormLoader,
  h as MessageParameter,
  j as ValidationRule
};
