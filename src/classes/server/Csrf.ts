import { ServerCall } from "../../classes/server/ServerCall";
import { ServerResponse } from "../../classes/server/ServerResponse";
import { AxiosCalls } from "../../enums";
import { minutesBetween } from "../../composables/utils";

/**
 * Csrf Class for handling csrf token calls
 */
export class Csrf {
  // Number of attempts allowed for csrf before wait time is imposed.
  protected allowed_attempts = 5;
  // Number of attempts for csrf
  protected attempts = 0;
  // Last time Csrf was attempted.
  protected last_attempt: Date = new Date();
  // When a User was last updated
  protected loading = false;
  // csrf retry wait time after attempts in minutes
  protected retry_wait = 5;
  // csrf token is set
  protected token = false;

  // csrf endpoint
  endpoint = "";

  constructor(init?: Partial<Csrf>) {
    Object.assign(this, init);
  }

  // Adds token attempt
  attemptCheck(): boolean {
    if (this.attempts >= this.allowed_attempts) {
      // failed attempts greater than allowed amount.
      const waited_time: number = minutesBetween(this.last_attempt, new Date());
      if (waited_time <= this.retry_wait) {
        return false;
      }
      // retry wait time has passed
      this.resetAttempts();
    }
    this.last_attempt = new Date();
    return true;
  }

  // failed attempts on csrf token call
  failedAttempt(): Csrf {
    this.loading = false;
    this.token = false;
    return this;
  }

  // Fetch new token
  async fetchNewToken(): Promise<boolean> {
    this.loading = true;
    if (!this.attemptCheck()) {
      this.failedAttempt();
      return false;
    }
    this.tokenAttempt();
    let response: ServerResponse;
    try {
      response = await ServerCall.request(AxiosCalls.Get, this.endpoint);
      if (response.status === 200 || response.status === 204) {
        this.successfulAttempt();
        this.resetAttempts();
        return true;
      }
    } catch (error) {
      this.failedAttempt();
      return false;
    }

    this.failedAttempt();
    return false;
  }

  // Is CSRF Token valid
  isValidCsrfToken(): boolean {
    return this.token;
  }

  // reset attempts on successful csrf token call
  resetAttempts(): Csrf {
    this.attempts = 0;
    return this;
  }

  // successful attempts on csrf token call
  successfulAttempt(): Csrf {
    this.loading = false;
    this.token = true;
    return this;
  }

  // Adds token attempt
  tokenAttempt(): Csrf {
    this.attempts++;
    return this;
  }
}
