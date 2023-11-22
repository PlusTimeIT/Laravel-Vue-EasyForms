var e = Object.defineProperty;
var r = (a, t, o) => t in a ? e(a, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[t] = o;
var s = (a, t, o) => (r(a, typeof t != "symbol" ? t + "" : t, o), o);
import { a as f, A as k } from "./AxiosOptions-6a3d3f30.js";
import { C as g, V as j } from "./ValidationRule-cec9d477.js";
import { F as A } from "./FormLoader-7688a5bf.js";
import "./FormLoaderTypes-b32e44d6.js";
import "./Types-cc63165d.js";
import "axios";
import "./ProgressLinear-fd659726.js";
import "./GotProps-c8fa699d.js";
class u {
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
class d {
  constructor(t) {
    s(this, "key", "");
    s(this, "value", "");
    Object.assign(this, t);
  }
}
class x {
  constructor(t) {
    s(this, "key", "");
    s(this, "replace_with");
    Object.assign(this, t);
  }
}
export {
  u as AdditionalData,
  f as AxiosHeader,
  k as AxiosOptions,
  g as CheckboxGroupValue,
  d as DataItem,
  A as FormLoader,
  x as MessageParameter,
  j as ValidationRule
};
