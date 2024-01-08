import type { Axios } from "axios";
/**
 * Plugin Options singleton, set on plugin initiation.
 */
export declare class PluginOptions {
    private static instance;
    /**
     * Pass the axios instance to use for the form loader
     */
    axios: Axios;
    /**
     * The prefix for making calls via API, this is append to the backend domain.
     * It should begin with a forward slash and end without a forward slash.
     * This should match laravel.
     * e.g. /api/v1.0/
     */
    axios_prefix: string;
    /**
     * Backend domain for making API calls.
     * It should end without a forward slash.
     * e.g. https://domain.com
     */
    backend_domain: string;
    /**
     * If CSRF checks are required then this should be the endpoint.
     * It should begin with a forward slash and end without a forward slash.
     * If null no CSRF checks will be made.
     * e.g. /security/cookie
     */
    csrf_endpoint: string | null;
    /**
     * Optional label text to append placeholder attribute
     */
    optional_label_text: string;
    /**
     * Optional placeholder text to append placeholder attribute
     */
    optional_placeholder_text: string;
    /**
     * Required label text to append placeholder attribute
     */
    required_label_text: string;
    /**
     * Required placeholder text to append placeholder attribute
     */
    required_placeholder_text: string;
    /**
     * Display required tags only, either tags_on_placeholder or tags_on_labels
     * must be set to true for this to take effect.
     */
    required_tags_only: boolean;
    /**
     * Should the label text display required and optional tags
     */
    tags_on_labels: boolean;
    /**
     * Should the placeholder text display required and optional tags
     */
    tags_on_placeholder: boolean;
    /**
     * Does your frontend application use vue router.
     */
    uses_vue_router: boolean;
    constructor(init?: Partial<PluginOptions>);
    /**
     * The static method that controls the access to the singleton instance.
     *
     * This implementation lets us subclass the Singleton class while keeping
     * just one instance of each subclass around.
     */
    static getInstance(init?: Partial<PluginOptions>): PluginOptions;
    buildDomain(url?: string): string;
}
//# sourceMappingURL=PluginOptions.d.ts.map