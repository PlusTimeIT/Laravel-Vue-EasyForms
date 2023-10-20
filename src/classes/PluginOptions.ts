import { isEmpty } from "../composables/utils/Types";

/**
 * Plugin Options singleton, set on plugin initiation.
 */
export class PluginOptions {
  private static instance: PluginOptions;

  /**
   * The prefix for making calls via API, this is append to the backend domain.
   * It should begin with a forward slash and end without a forward slash.
   * This should match laravel.
   * eg. /api/v1.0/
   */
  axios_prefix = "";
  /**
   * Backend domain for making API calls.
   * It should end without a forward slash.
   * eg. https://domain.com
   */
  backend_domain = "";
  /**
   * If CSRF checks are required then this should be the endpoint.
   * It should begin with a forward slash and end without a forward slash.
   * eg. /security/cookie
   */
  csrf_endpoint = "";
  /**
   * Optional label text to append placeholder attribute
   */
  optional_label_text = " ( * Optional )";
  /**
   * Optional placeholder text to append placeholder attribute
   */
  optional_placeholder_text = " ( * Optional )";
  /**
   * Required label text to append placeholder attribute
   */
  required_label_text = " ( * Required )";
  /**
   * Required placeholder text to append placeholder attribute
   */
  required_placeholder_text = " ( * Required )";
  /**
   * Display required tags only, either tags_on_placeholder or tags_on_labels
   * must be set to true for this to take effect.
   */
  required_tags_only = true;
  /**
   * Should the label text display required and optional tags
   */
  tags_on_labels = false;
  /**
   * Should the placeholder text display required and optional tags
   */
  tags_on_placeholder = true;
  /**
   * When initiated, if placeholder is present and empty,
   * and text is present and not empty, placeholder should = text
   */
  text_to_placeholder = true;
  /**
   * Does your frontend application use vue router.
   */
  uses_vue_router = false;

  constructor(init?: Partial<PluginOptions>) {
    Object.assign(this, init);
    PluginOptions.instance = this;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation lets us subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  static getInstance(): PluginOptions {
    if (!PluginOptions.instance) {
      PluginOptions.instance = new PluginOptions();
    }

    return PluginOptions.instance;
  }

  buildDomain(url = ""): string {
    // if URL is present and not blank concat to prefix.
    if (isEmpty(url)) {
      return this.backend_domain.concat(this.axios_prefix);
    }
    return this.backend_domain.concat(this.axios_prefix.concat(url));
  }
}
