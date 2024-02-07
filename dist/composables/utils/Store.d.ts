import { PluginOptions } from "../../classes/PluginOptions";
import type { Csrf } from "../../classes/server/Csrf";
interface Store {
    csrf?: Csrf | undefined;
    options: PluginOptions;
}
declare const store: Store;
export { store };
//# sourceMappingURL=Store.d.ts.map