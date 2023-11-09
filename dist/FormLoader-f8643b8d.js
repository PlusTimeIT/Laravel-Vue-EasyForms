var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { F as FormLoaderTypes } from "./FormLoaderTypes-8047088c.js";
import "./Types-dbac3a4a.js";
import { P as ProgressCircular, a as ProgressLinear } from "./ProgressLinear-fca54ab2.js";
class AdditionalData {
  constructor(init) {
    __publicField(this, "data", []);
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
class FormLoader {
  constructor(init) {
    __publicField(this, "type");
    __publicField(this, "progress");
    Object.assign(this, init);
    if (this.type == FormLoaderTypes.Circular) {
      this.progress = new ProgressCircular(init == null ? void 0 : init.progress);
    } else if (this.type == FormLoaderTypes.Linear) {
      this.progress = new ProgressLinear(init == null ? void 0 : init.progress);
    }
  }
}
export {
  AdditionalData as A,
  FormLoader as F
};
