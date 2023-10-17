import { aq as _export_sfc, ar as defineComponent, as as InputForm, at as TextField, au as Button, av as ButtonTypes, aw as Icon, ax as resolveComponent, ay as openBlock, az as createBlock, aA as withCtx, aB as FormLoader, aC as createVNode } from "./vendor-b18d341b.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormLoader.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const inputForm = new InputForm({
      name: "TestInputForm",
      type: "input",
      fields: [
        new TextField({
          name: "test_basic_text_and_label",
          placeholder: "Testing Basic Text and Label",
          label: "Testing Basic Text and Label",
          required: true,
          cols: 12
        })
      ],
      buttons: [
        new Button({
          type: ButtonTypes.Process,
          text: "Process",
          prepend_icon: new Icon({
            color: "secondary",
            icon: "mdi-checkmark"
          })
        })
      ]
    });
    const __returned__ = { inputForm, FormLoader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    group: "forms",
    title: "Form Loader"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "All Options" }, {
        default: withCtx(() => [
          createVNode($setup["FormLoader"], { form: $setup.inputForm }, null, 8, ["form"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Input Form" }, {
        default: withCtx(() => [
          createVNode($setup["FormLoader"], { form: $setup.inputForm }, null, 8, ["form"])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = "src/components/FormLoader.story.vue";
const FormLoader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/development/plustime/Laravel-Vue-EasyForms/src/components/FormLoader.story.vue"]]);
export {
  FormLoader_story as default
};
