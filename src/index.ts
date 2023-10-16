import FormLoader from "#/components/FormLoader.vue";
import { InputForm, ActionForm, ErrorForm } from "#/components/forms";
import { EasyDatePicker, EasyTimePicker, EasyColorPicker, EasyCheckboxGroup, EasyPassword } from "#/components/fields";
import { PluginOptions } from "#/classes/PluginOptions";
import { Csrf } from "#/classes/server/Csrf";
import { vMaska } from "maska";
import { App, Plugin } from "vue";

const FormLoaderPlugin: Plugin = {
  install(app: App, options: PluginOptions) {
    const defaults = new PluginOptions(options);
    app
      .provide("PluginOptions", options)
      .directive("maska", vMaska)
      .component("FormLoader", FormLoader)
      .component("InputForm", InputForm)
      .component("ActionForm", ActionForm)
      .component("EasyDatePicker", EasyDatePicker)
      .component("EasyTimePicker", EasyTimePicker)
      .component("EasyColorPicker", EasyColorPicker)
      .component("EasyCheckboxGroup", EasyCheckboxGroup)
      .component("EasyPassword", EasyPassword)
      .component("ErrorForm", ErrorForm);

    app.config.globalProperties.$csrf = new Csrf({
      endpoint: defaults.buildDomain(defaults.csrf_endpoint),
    });
  },
};

export default FormLoaderPlugin;
