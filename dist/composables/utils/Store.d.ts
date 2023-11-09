import { PluginOptions } from "../../classes/PluginOptions";
import { Csrf } from "../../server";
interface Store {
    csrf?: Csrf | undefined;
    options: PluginOptions;
}
declare const store: Store;
export { store };
//# sourceMappingURL=Store.d.ts.map