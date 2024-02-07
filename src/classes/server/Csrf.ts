import { ServerCall } from "./ServerCall";
import { AxiosCalls } from "../../enums";
import { generate, isEmpty, minutesBetween } from "../../composables/utils";
import { AxiosResponse } from "axios";
import { HasAxiosReturn } from "../../contracts/HasAxiosReturn";

/**
 * Csrf Class for handling csrf token calls
 */
export class Csrf {
  // Number of attempts allowed for csrf before wait time is imposed.
  allowed_attempts = 5;
  // Wait time between requests in milliseconds
  default_wait_time = 1500;
  // Number of attempts for csrf
  attempts = 0;
  // Last time Csrf was attempted.
  last_attempt: Date = new Date();
  // When a User was last updated
  protected loading = false;
  // csrf retry wait time after attempts in minutes
  retry_wait = 5;
  // csrf token is set
  protected token = false;
  // Substr of beginning of token.
  protected prefix: string | undefined;
  // Error message to display on Token failure.
  error_message = "Error loading form. Please try refreshing the page.";
  // csrf endpoint
  endpoint = "";

  constructor(init?: Partial<Csrf>) {
    Object.assign(this, init);
  }

  // Adds token attempt
  attemptCheck(): boolean {
    this.last_attempt = new Date();
    if (this.attempts >= this.allowed_attempts) {
      // failed attempts greater than allowed amount.
      const waited_time: number = minutesBetween(this.last_attempt, new Date());
      if (waited_time <= this.retry_wait) {
        this.failedAttempt();
        return false;
      }
      // retry wait time has passed
      this.resetAttempts();
    }

    return true;
  }

  // failed attempts on csrf token call
  failedAttempt() {
    this.loading = false;
    this.token = false;
  }

  async delay(milliseconds: number) {
    return new Promise((resolve) => {
      setTimeout(resolve as any, milliseconds);
    });
  }

  // Fetch new token
  async fetchNewToken(): Promise<boolean> {
    if (this.loading) {
      return false;
    }
    this.loading = true;
    // loop csrf request.
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
  isValidCsrfToken(): boolean {
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
  async successfulAttempt(prefix: string): Promise<boolean> {
    this.prefix = prefix;
    this.loading = false;
    this.token = true;
    this.resetAttempts();
    return true;
  }

  // Adds token attempt
  async tokenAttempt() {
    this.attempts++;
    let response: AxiosResponse<HasAxiosReturn>;
    try {
      response = await ServerCall.request(AxiosCalls.Get, this.endpoint);
      if (response.status === 200 || response.status === 204) {
        await this.successfulAttempt(generate(5));
        return true;
      }
    } catch (error) {
      return false;
    }
    return false;
  }
}
