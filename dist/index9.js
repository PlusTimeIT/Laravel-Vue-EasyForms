var r = Object.defineProperty;
var n = (e, t, s) => t in e ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var i = (e, t, s) => (n(e, typeof t != "symbol" ? t + "" : t, s), s);
import { S as l } from "./ServerCall-8eff3f6f.js";
import { a as k } from "./ServerCall-8eff3f6f.js";
import { A as m } from "./AxiosCalls-a93e3e6c.js";
import "axios";
class o {
  /**
   * Get minutes between 2 Date objects
   * @param start Date the start date with time included.
   * @param end Date the end date with time included.
   * @returns number
   */
  static minutesBetween(t, s) {
    let a = (s.getTime() - t.getTime()) / 1e3;
    return a /= 60, Math.abs(Math.round(a));
  }
}
const h = function(e, t) {
  return o.minutesBetween(e, t);
};
class d {
  constructor(t) {
    // csrf endpoint
    i(this, "endpoint", "");
    // Number of attempts for csrf
    i(this, "attempts", 0);
    // Last time Csrf was attempted.
    i(this, "last_attempt", /* @__PURE__ */ new Date());
    // When a User was last updated
    i(this, "loading", !1);
    // csrf token is set
    i(this, "token", !1);
    // csrf retry wait time after attempts in minutes
    i(this, "retry_wait", 5);
    // Number of attempts allowed for csrf before wait time is imposed.
    i(this, "allowed_attempts", 5);
    Object.assign(this, t);
  }
  // Adds token attempt
  attemptCheck() {
    if (this.attempts >= this.allowed_attempts) {
      if (h(this.last_attempt, /* @__PURE__ */ new Date()) <= this.retry_wait)
        return !1;
      this.resetAttempts();
    }
    return this.last_attempt = /* @__PURE__ */ new Date(), !0;
  }
  // Fetch new token
  async fetchNewToken() {
    if (this.loading = !0, !this.attemptCheck())
      return this.failedAttempt(), !1;
    this.tokenAttempt();
    let t;
    try {
      if (t = await l.request(m.Get, this.endpoint), t.status === 200 || t.status === 204)
        return this.successfulAttempt(), this.resetAttempts(), !0;
    } catch {
      return this.failedAttempt(), !1;
    }
    return this.failedAttempt(), !1;
  }
  // Is CSRF Token valid
  isValidCsrfToken() {
    return this.token;
  }
  // reset attempts on successful csrf token call
  resetAttempts() {
    return this.attempts = 0, this;
  }
  // failed attempts on csrf token call
  failedAttempt() {
    return this.loading = !1, this.token = !1, this;
  }
  // successful attempts on csrf token call
  successfulAttempt() {
    return this.loading = !1, this.token = !0, this;
  }
  // Adds token attempt
  tokenAttempt() {
    return this.attempts++, this;
  }
}
export {
  d as Csrf,
  l as ServerCall,
  k as ServerResponse
};
