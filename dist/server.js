var a = Object.defineProperty;
var o = (r, s, t) => s in r ? a(r, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[s] = t;
var e = (r, s, t) => (o(r, typeof s != "symbol" ? s + "" : s, t), t);
import { C as f } from "./Csrf-CsvOxUQg.js";
import { S as x } from "./ServerCall-Dz5gbGF4.js";
class l {
  constructor(s) {
    /**
     * HTTP config object
     */
    e(this, "config", {});
    /**
     * Axios return data
     */
    e(this, "data", null);
    /**
     * HTTP headers object
     */
    e(this, "headers", {});
    /**
     * HTTP request object
     */
    e(this, "request", {});
    /**
     * HTTP status code
     */
    e(this, "status");
    /**
     * HTTP Status Text
     */
    e(this, "statusText", "");
    Object.assign(this, s);
  }
}
export {
  f as Csrf,
  x as ServerCall,
  l as ServerResponse
};
