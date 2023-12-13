var r = Object.defineProperty;
var n = (i, t, s) => t in i ? r(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => (n(i, typeof t != "symbol" ? t + "" : t, s), s);
import { S as l } from "./ServerCall-b82e7d81.js";
import { A as o } from "./ContentTypes-f2427ff5.js";
import { i as m } from "./Store-dda3f8ae.js";
class h {
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
const f = function(i, t) {
  return h.minutesBetween(i, t);
};
class w {
  constructor(t) {
    // Number of attempts allowed for csrf before wait time is imposed.
    e(this, "allowed_attempts", 5);
    // Wait time between requests in milliseconds
    e(this, "default_wait_time", 1500);
    // Number of attempts for csrf
    e(this, "attempts", 0);
    // Last time Csrf was attempted.
    e(this, "last_attempt", /* @__PURE__ */ new Date());
    // When a User was last updated
    e(this, "loading", !1);
    // csrf retry wait time after attempts in minutes
    e(this, "retry_wait", 5);
    // csrf token is set
    e(this, "token", !1);
    // Substr of begining of token.
    e(this, "prefix");
    // Error message to display on Token failure.
    e(this, "error_message", "Error loading form. Please try refreshing the page.");
    // csrf endpoint
    e(this, "endpoint", "");
    Object.assign(this, t);
  }
  // Adds token attempt
  attemptCheck() {
    if (this.last_attempt = /* @__PURE__ */ new Date(), this.attempts >= this.allowed_attempts) {
      if (f(this.last_attempt, /* @__PURE__ */ new Date()) <= this.retry_wait)
        return this.failedAttempt(), !1;
      this.resetAttempts();
    }
    return !0;
  }
  // failed attempts on csrf token call
  failedAttempt() {
    this.loading = !1, this.token = !1;
  }
  async delay(t) {
    return new Promise((s) => {
      setTimeout(s, t);
    });
  }
  // Fetch new token
  async fetchNewToken() {
    if (this.loading)
      return !1;
    for (this.loading = !0; this.attemptCheck() && !this.isValidCsrfToken(); )
      await this.tokenAttempt() || this.failedAttempt(), await this.delay(this.default_wait_time);
    return this.loading = !1, this.isValidCsrfToken();
  }
  // Is CSRF Token valid
  isValidCsrfToken() {
    return this.token && !m(this.prefix);
  }
  // reset attempts on successful csrf token call
  resetAttempts() {
    this.attempts = 0;
  }
  // returns boolean if csrf is making a request.
  isLoading() {
    return this.loading;
  }
  // successful attempts on csrf token call
  async successfulAttempt(t) {
    return this.prefix = t, this.loading = !1, this.token = !0, this.resetAttempts(), !0;
  }
  // Adds token attempt
  async tokenAttempt() {
    this.attempts++;
    let t;
    try {
      if (t = await l.request(o.Get, this.endpoint), t.status === 200 || t.status === 204)
        return await this.successfulAttempt(t.config.headers["X-XSRF-TOKEN"].substr(0, 5)), !0;
    } catch {
      return !1;
    }
    return !1;
  }
}
export {
  w as C
};
