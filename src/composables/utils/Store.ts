import { PluginOptions } from "../../classes/PluginOptions";
import type { Csrf } from "../../classes/server/Csrf";
interface Store {
  csrf?: Csrf | undefined;
  options: PluginOptions;
}
const store: Store = {
  options: new PluginOptions({
    axios_prefix: "",
    backend_domain: "",
    csrf_endpoint: "",
    optional_label_text: " ( * Optional )",
    optional_placeholder_text: " ( * Optional )",
    required_label_text: " ( * Required )",
    required_placeholder_text: " ( * Required )",
    required_tags_only: true,
    tags_on_labels: false,
    tags_on_placeholder: true,
    uses_vue_router: false,
  }),
};

export { store };
