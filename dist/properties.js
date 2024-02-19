var o = Object.defineProperty;
var r = (s, a, t) => a in s ? o(s, a, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[a] = t;
var e = (s, a, t) => (r(s, typeof a != "symbol" ? a + "" : a, t), t);
import { a as x, A as m } from "./AxiosOptions-BgVktJZx.js";
import { C as h, V as b } from "./ValidationRule-CJjGCVh6.js";
import { F as k } from "./FormLoader-BdwctECh.js";
class i {
  constructor(a) {
    e(this, "key", "");
    e(this, "value", "");
    Object.assign(this, a);
  }
}
class l {
  constructor(a) {
    e(this, "key", "");
    e(this, "value", "");
    Object.assign(this, a);
  }
}
class n {
  constructor(a) {
    e(this, "key", "");
    e(this, "replace_with");
    Object.assign(this, a);
  }
}
export {
  i as AdditionalData,
  x as AxiosHeader,
  m as AxiosOptions,
  h as CheckboxGroupValue,
  l as DataItem,
  k as FormLoader,
  n as MessageParameter,
  b as ValidationRule
};
