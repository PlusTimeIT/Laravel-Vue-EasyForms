var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { S as ServerCall } from "./ServerCall-a611b3a4.js";
import { a } from "./ServerCall-a611b3a4.js";
import { A as AxiosCalls } from "./ContentTypes-783ab8ea.js";
import { i as isEmpty } from "./Types-dbac3a4a.js";
import "./AxiosOptions-a3506c4f.js";
import "axios";
class DateHelper {
  /**
   * Get minutes between 2 Date objects
   * @param start Date the start date with time included.
   * @param end Date the end date with time included.
   * @returns number
   */
  static minutesBetween(start, end) {
    let diff = (end.getTime() - start.getTime()) / 1e3;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
}
const minutesBetween = function(start, end) {
  return DateHelper.minutesBetween(start, end);
};
class Csrf {
  constructor(init) {
    // Number of attempts allowed for csrf before wait time is imposed.
    __publicField(this, "allowed_attempts", 5);
    // Wait time between requests in milliseconds
    __publicField(this, "default_wait_time", 1500);
    // Number of attempts for csrf
    __publicField(this, "attempts", 0);
    // Last time Csrf was attempted.
    __publicField(this, "last_attempt", /* @__PURE__ */ new Date());
    // When a User was last updated
    __publicField(this, "loading", false);
    // csrf retry wait time after attempts in minutes
    __publicField(this, "retry_wait", 5);
    // csrf token is set
    __publicField(this, "token", false);
    // Substr of begining of token.
    __publicField(this, "prefix", null);
    // Error message to display on Token failure.
    __publicField(this, "error_message", "Error loading form. Please try refreshing the page.");
    // csrf endpoint
    __publicField(this, "endpoint", "");
    Object.assign(this, init);
  }
  // Adds token attempt
  attemptCheck() {
    this.last_attempt = /* @__PURE__ */ new Date();
    if (this.attempts >= this.allowed_attempts) {
      const waited_time = minutesBetween(this.last_attempt, /* @__PURE__ */ new Date());
      if (waited_time <= this.retry_wait) {
        this.failedAttempt();
        return false;
      }
      this.resetAttempts();
    }
    return true;
  }
  // failed attempts on csrf token call
  failedAttempt() {
    this.loading = false;
    this.token = false;
  }
  async delay(milliseconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, milliseconds);
    });
  }
  // Fetch new token
  async fetchNewToken() {
    if (this.loading) {
      return false;
    }
    this.loading = true;
    while (this.attemptCheck() && !this.isValidCsrfToken()) {
      const attempt = await this.tokenAttempt();
      if (!attempt) {
        this.failedAttempt();
      }
      await this.delay(this.default_wait_time);
    }
    this.loading = false;
    return this.isValidCsrfToken();
  }
  // Is CSRF Token valid
  isValidCsrfToken() {
    return this.token && !isEmpty(this.prefix);
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
  async successfulAttempt(prefix) {
    this.prefix = prefix;
    this.loading = false;
    this.token = true;
    this.resetAttempts();
    return true;
  }
  // Adds token attempt
  async tokenAttempt() {
    this.attempts++;
    let response;
    try {
      response = await ServerCall.request(AxiosCalls.Get, this.endpoint);
      if (response.status === 200 || response.status === 204) {
        await this.successfulAttempt(response.config["headers"]["X-XSRF-TOKEN"].substr(0, 5));
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }
}
export {
  Csrf,
  ServerCall,
  a as ServerResponse
};
