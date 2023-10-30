var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class CheckboxGroupValue {
  constructor(init) {
    __publicField(this, "key", "");
    __publicField(this, "value", true);
    Object.assign(this, init);
  }
}
class ValidationRule {
  constructor(init) {
    __publicField(this, "name", "");
    __publicField(this, "value");
    __publicField(this, "message", null);
    Object.assign(this, init);
  }
}
export {
  CheckboxGroupValue as C,
  ValidationRule as V
};
