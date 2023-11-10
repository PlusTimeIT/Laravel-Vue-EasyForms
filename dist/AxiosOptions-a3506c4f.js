var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class AxiosHeader {
  constructor(init) {
    __publicField(this, "key", "");
    __publicField(this, "value", "");
    Object.assign(this, init);
  }
}
class AxiosOptions {
  constructor(init) {
    __publicField(this, "expecting_results", false);
    __publicField(this, "headers", []);
    __publicField(this, "multi_part", false);
    Object.assign(this, init);
  }
}
export {
  AxiosOptions as A,
  AxiosHeader as a
};
