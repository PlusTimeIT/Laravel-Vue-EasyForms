export declare class PluginOptions {
    private static instance;
    backend_domain: string;
    axios_prefix: string;
    csrf_endpoint: string;
    uses_vue_router: boolean;
    text_to_placeholder: boolean;
    required_tags_only: boolean;
    tags_on_placeholder: boolean;
    tags_on_labels: boolean;
    optional_placeholder_text: string;
    optional_label_text: string;
    required_placeholder_text: string;
    required_label_text: string;
    constructor(init?: Partial<PluginOptions>);
    buildDomain(url?: string): string;
    static getInstance(): PluginOptions;
}
//# sourceMappingURL=PluginOptions.d.ts.map