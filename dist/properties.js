var e = Object.defineProperty;
var r = (a, t, o) => t in a ? e(a, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[t] = o;
var s = (a, t, o) => (r(a, typeof t != "symbol" ? t + "" : t, o), o);
import { a as k, A as O } from "./AxiosOptions-6a3d3f30.js";
import { C as j, V as y } from "./ValidationRule-cec9d477.js";
import { F as v } from "./FormLoader-92c7e031.js";
import "./FormLoaderTypes-b32e44d6.js";
import "./Store-dda3f8ae.js";
import "axios";
import "./ProgressLinear-c047f276.js";
import "./GotProps-ebb373b7.js";
import "./LocationTypes-c293bdaa.js";
class d {
  constructor(t) {
    s(this, "data", []);
    s(this, "key", "");
    s(this, "value", "");
    Object.assign(this, t);
  }
  toObject() {
    const t = {};
    for (const o of this.data)
      t[o.key] = o.value;
    return t;
  }
}
class x {
  constructor(t) {
    s(this, "key", "");
    s(this, "value", "");
    Object.assign(this, t);
  }
}
class h {
  constructor(t) {
    s(this, "key", "");
    s(this, "replace_with");
    Object.assign(this, t);
  }
}
export {
  d as AdditionalData,
  k as AxiosHeader,
  O as AxiosOptions,
  j as CheckboxGroupValue,
  x as DataItem,
  v as FormLoader,
  h as MessageParameter,
  y as ValidationRule
};
