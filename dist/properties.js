var o = Object.defineProperty;
var r = (e, a, s) => a in e ? o(e, a, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[a] = s;
var t = (e, a, s) => (r(e, typeof a != "symbol" ? a + "" : a, s), s);
import { A as x, a as n, b as d, D as m } from "./DataItem-7afd96c5.js";
import { C as A, V as b } from "./ValidationRule-cec9d477.js";
class c {
  constructor(a) {
    t(this, "key", "");
    t(this, "replace_with");
    Object.assign(this, a);
  }
}
export {
  x as AdditionalData,
  n as AxiosHeader,
  d as AxiosOptions,
  A as CheckboxGroupValue,
  m as DataItem,
  c as MessageParameter,
  b as ValidationRule
};
