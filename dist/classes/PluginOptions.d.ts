import { Axios } from "axios";
export declare class PluginOptions {
    private static instance;
    axios: Axios;
    axios_prefix: string;
    backend_domain: string;
    csrf_endpoint: string;
    optional_label_text: string;
    optional_placeholder_text: string;
    required_label_text: string;
    required_placeholder_text: string;
    required_tags_only: boolean;
    tags_on_labels: boolean;
    tags_on_placeholder: boolean;
    text_to_placeholder: boolean;
    uses_vue_router: boolean;
    constructor(init?: Partial<PluginOptions>);
    static getInstance(): PluginOptions;
    buildDomain(url?: string): string;
}
//# sourceMappingURL=PluginOptions.d.ts.map