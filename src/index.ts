import FormLoader from "./components/FormLoader.vue";
import { InputForm, ActionForm, ErrorForm } from "./components/forms";
import { EasyDatePicker, EasyTimePicker, EasyColorPicker, EasyCheckboxGroup, EasyPassword } from "./components/fields";
import { PluginOptions } from "./classes/PluginOptions";
import { Csrf } from "./classes/server";
import { vMaska } from "maska";
import { App, Plugin } from "vue";
import { store } from "./composables/utils";

const FormLoaderPlugin: Plugin = {
  install(app: App, options: PluginOptions) {
    const finalOptions = new PluginOptions(options);
    app
      .directive("maska", vMaska)
      .component("FormLoader", FormLoader)
      .component("InputFormLoader", InputForm)
      .component("ActionFormLoader", ActionForm)
      .component("EasyDatePicker", EasyDatePicker)
      .component("EasyTimePicker", EasyTimePicker)
      .component("EasyColorPicker", EasyColorPicker)
      .component("EasyCheckboxGroup", EasyCheckboxGroup)
      .component("EasyPassword", EasyPassword)
      .component("ErrorFormLoader", ErrorForm);

    store.options = finalOptions;
    store.csrf = new Csrf({
      endpoint: finalOptions.buildDomain(finalOptions.csrf_endpoint),
    });
  },
};

export default FormLoaderPlugin;
