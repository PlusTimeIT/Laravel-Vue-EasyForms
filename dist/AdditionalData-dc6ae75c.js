var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
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
export {
  AdditionalData as A
};
