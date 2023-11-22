import { as as _export_sfc, at as defineComponent, au as ref, av as ActionForm, aw as FormTypes, ax as ActionIcon, ay as Icon, az as Tooltip, aA as InputForm, aB as Alert, aC as AlertTypes, aD as AlertTriggers, aE as TextField, aF as Button, aG as ButtonTypes, aH as ActionButton, aI as computed, aJ as watch, aK as resolveComponent, aL as openBlock, aM as createBlock, aN as withCtx, aO as createVNode, aP as createBaseVNode, aQ as createTextVNode, aR as toDisplayString, aS as createElementBlock, aT as renderList, aU as Fragment } from "./vendor-577890e5.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormLoader.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      actionFormIconsHorizontal: new ActionForm({
        name: "ActionFormIconsHorizontal",
        type: FormTypes.Action,
        inline: true,
        actions: [
          new ActionIcon({
            name: "edit",
            icon: new Icon({
              icon: "mdi-pencil",
              color: "#7c00ec",
              classes: "pa-6",
              tooltip: new Tooltip({
                text: "Edit User"
              })
            })
          }),
          new ActionIcon({
            name: "deactivate",
            icon: new Icon({
              icon: "mdi-cancel",
              color: "#0e9f1d",
              classes: "pa-6",
              tooltip: new Tooltip({
                text: "Deactivate User"
              })
            })
          }),
          new ActionIcon({
            name: "delete",
            icon: new Icon({
              icon: "mdi-delete",
              color: "#d00e30",
              classes: "pa-6",
              tooltip: new Tooltip({
                text: "Delete User"
              })
            })
          })
        ]
      }),
      inputForm: new InputForm({
        name: "TestInputForm",
        type: FormTypes.Input,
        alerts: [
          new Alert({
            type: AlertTypes.Info,
            trigger: AlertTriggers.AfterLoad,
            text: "These forms are only test forms with no processing."
          })
        ],
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
            text: "Process"
          })
        ]
      }),
      actionFormButtonsHorizontal: new ActionForm({
        name: "ActionFormButtonsHorizontal",
        type: FormTypes.Action,
        inline: true,
        actions: [
          new ActionButton({
            button: new Button({
              color: "#7c00ec",
              text: "Edit User",
              classes: "ma-6"
            })
          }),
          new ActionButton({
            button: new Button({
              color: "#0e9f1d",
              text: "Deactivate User",
              classes: "ma-6"
            })
          }),
          new ActionButton({
            button: new Button({
              color: "#d00e30",
              text: "Delete User",
              classes: "ma-6"
            })
          })
        ]
      }),
      actionFormButtons: new ActionForm({
        name: "ActionFormButtons",
        type: FormTypes.Action,
        actions: [
          new ActionButton({
            button: new Button({
              color: "#7c00ec",
              text: "Edit User",
              classes: "ma-6"
            })
          }),
          new ActionButton({
            button: new Button({
              color: "#0e9f1d",
              text: "Deactivate User",
              classes: "ma-6"
            })
          }),
          new ActionButton({
            button: new Button({
              color: "#d00e30",
              text: "Delete User",
              classes: "ma-6"
            })
          })
        ]
      }),
      actionFormIcons: new ActionForm({
        name: "ActionFormIconsVertical",
        type: FormTypes.Action,
        inline: false,
        actions: [
          new ActionIcon({
            name: "edit",
            icon: new Icon({
              icon: "mdi-pencil",
              color: "#7c00ec",
              classes: "pa-6",
              tooltip: new Tooltip({
                text: "Edit User"
              })
            })
          }),
          new ActionIcon({
            name: "deactivate",
            icon: new Icon({
              icon: "mdi-cancel",
              color: "#0e9f1d",
              classes: "pa-6",
              tooltip: new Tooltip({
                text: "Deactivate User"
              })
            })
          }),
          new ActionIcon({
            name: "delete",
            icon: new Icon({
              icon: "mdi-delete",
              color: "#d00e30",
              classes: "pa-6",
              tooltip: new Tooltip({
                text: "Delete User"
              })
            })
          })
        ]
      })
    });
    const ActionFormIcons = computed(() => {
      const form = { ...state.value.actionFormIcons };
      console.log("NEW FORM ACTIONS ActionFormIcons", form.actions);
      console.log("NEW FORM ActionFormIcons", form);
      return new ActionForm(form);
    });
    const ActionFormIconsHorizontal = computed(() => {
      const form = { ...state.value.actionFormIconsHorizontal };
      console.log("NEW FORM ACTIONS", form.actions);
      console.log("NEW FORM", form);
      return new ActionForm(form);
    });
    function actionUpdate(event, action, index) {
      action.icon.color = event;
      console.log("VALUE UPDATED ON STATE", event, action, index);
      console.log(
        "actionFormIconsHorizontal Action",
        state.value.actionFormIconsHorizontal.actions[index].icon
      );
    }
    watch(state.value, (value) => {
      console.log("STATE UPDATE", value);
    });
    const __returned__ = { state, ActionFormIcons, ActionFormIconsHorizontal, actionUpdate };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "br",
  null,
  null,
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_form_loader = resolveComponent("form-loader");
  const _component_Variant = resolveComponent("Variant");
  const _component_HstSelect = resolveComponent("HstSelect");
  const _component_HstColorSelect = resolveComponent("HstColorSelect");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    group: "forms",
    title: "Form Loader"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Input Form" }, {
        default: withCtx(() => [
          createVNode(_component_form_loader, {
            form: $setup.state.inputForm
          }, null, 8, ["form"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Action Form - Buttons Vertical" }, {
        default: withCtx(() => [
          createVNode(_component_form_loader, {
            form: $setup.state.actionFormButtons
          }, null, 8, ["form"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Action Form - Buttons Horizontal" }, {
        default: withCtx(() => [
          createVNode(_component_form_loader, {
            form: $setup.state.actionFormButtonsHorizontal
          }, null, 8, ["form"])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Action Form - Icons Vertical" }, {
        controls: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_HstSelect, {
              modelValue: $setup.state.actionFormIcons.inline,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.state.actionFormIcons.inline = $event),
              title: "Inline Form",
              options: [
                {
                  label: "True",
                  value: true
                },
                {
                  label: "False",
                  value: false
                }
              ]
            }, null, 8, ["modelValue"])
          ])
        ]),
        default: withCtx(() => [
          createVNode(_component_form_loader, {
            form: $setup.ActionFormIcons
          }, null, 8, ["form"]),
          createBaseVNode("div", null, [
            createTextVNode(" Form: "),
            _hoisted_1,
            createTextVNode(
              " " + toDisplayString($setup.ActionFormIcons),
              1
              /* TEXT */
            )
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Action Form - Icons Horizontal" }, {
        controls: withCtx(() => [
          createBaseVNode("div", null, [
            createVNode(_component_HstSelect, {
              modelValue: $setup.state.actionFormIconsHorizontal.inline,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.state.actionFormIconsHorizontal.inline = $event),
              title: "Inline Form",
              options: [
                {
                  label: "True",
                  value: true
                },
                {
                  label: "False",
                  value: false
                }
              ]
            }, null, 8, ["modelValue"])
          ]),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.ActionFormIconsHorizontal.actions, (actionIcon, i) => {
              return openBlock(), createElementBlock("div", { key: i }, [
                createTextVNode(
                  toDisplayString(i) + " - " + toDisplayString($setup.state.actionFormIconsHorizontal.actions[i].icon) + " ",
                  1
                  /* TEXT */
                ),
                createVNode(_component_HstColorSelect, {
                  "model-value": actionIcon.icon.color,
                  "onUpdate:modelValue": ($event) => $setup.actionUpdate($event, actionIcon, i),
                  title: actionIcon.name + " icon color"
                }, null, 8, ["model-value", "onUpdate:modelValue", "title"])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        default: withCtx(() => [
          createVNode(_component_form_loader, {
            form: $setup.ActionFormIconsHorizontal
          }, null, 8, ["form"]),
          createBaseVNode("div", null, [
            createTextVNode(" Form: "),
            _hoisted_2,
            createTextVNode(
              " " + toDisplayString($setup.ActionFormIconsHorizontal),
              1
              /* TEXT */
            )
          ])
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
