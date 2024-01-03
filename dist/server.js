var o = Object.defineProperty;
var a = (s, r, e) => r in s ? o(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var t = (s, r, e) => (a(s, typeof r != "symbol" ? r + "" : r, e), e);
import { C as x } from "./Csrf-3ce828a0.js";
import { S } from "./ServerCall-fbfd55a2.js";
import "./ContentTypes-f2427ff5.js";
import "./Store-53e83c02.js";
import "axios";
import "./AxiosOptions-6a3d3f30.js";
class n {
  constructor(r) {
    /**
     * HTTP config object
     */
    t(this, "config", {});
    /**
     * Axios return data
     */
    t(this, "data", null);
    /**
     * HTTP headers object
     */
    t(this, "headers", {});
    /**
     * HTTP request object
     */
    t(this, "request", {});
    /**
     * HTTP status code
     */
    t(this, "status");
    /**
     * HTTP Status Text
     */
    t(this, "statusText", "");
    Object.assign(this, r);
  }
}
export {
  x as Csrf,
  S as ServerCall,
  n as ServerResponse
};
