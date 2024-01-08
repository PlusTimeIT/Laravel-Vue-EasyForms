import { as as _export_sfc, at as defineComponent, au as ref, av as InputForm, aw as FormTypes, ax as Alert, ay as AlertTypes, az as AlertTriggers, aA as TextField, aB as Button, aC as ButtonTypes, aD as ColorPickerField, aE as ColorPicker, aF as ColorPickerModeTypes, aG as DatePickerField, aH as TimePickerField, aI as TextareaField, aJ as RadioGroupField, aK as RadioField, aL as ActionForm, aM as ActionIcon, aN as Icon, aO as Tooltip, aP as ActionButton, aQ as resolveComponent, aR as openBlock, aS as createBlock, aT as withCtx, aU as createVNode, aV as VSheet, aW as createBaseVNode } from './vendor-22850bc8.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FormLoader.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = ref({
      inputFormBasic: new InputForm({
        name: "BasicInputForm",
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
            name: "username",
            placeholder: "Enter your username",
            label: "Username",
            required: true,
            cols: 12
          }),
          new TextField({
            name: "first_name",
            placeholder: "Enter your first name",
            label: "First Name",
            required: true,
            cols: 6
          }),
          new TextField({
            name: "last_name",
            placeholder: "Enter your last name",
            label: "Last Name",
            required: true,
            cols: 6
          })
        ],
        buttons: [
          new Button({
            type: ButtonTypes.Process,
            text: "Process"
          }),
          new Button({
            type: ButtonTypes.Cancel,
            text: "Cancel",
            color: "red"
          })
        ]
      }),
      inputFormAdvanced: new InputForm({
        name: "AdvancedInputForm",
        type: FormTypes.Input,
        alerts: [
          new Alert({
            type: AlertTypes.Info,
            trigger: AlertTriggers.AfterLoad,
            text: "These forms are only test forms with no processing."
          })
        ],
        fields: [
          new ColorPickerField({
            name: "favourite_colour",
            placeholder: "Select Favourite Colour",
            label: "Favourite Color",
            picker: new ColorPicker({
              mode: ColorPickerModeTypes.Hex
            }),
            required: true,
            cols: 12
          }),
          new DatePickerField({
            name: "selected_date",
            placeholder: "Select a Date",
            label: "Booking Date",
            required: true
          }),
          new TimePickerField({
            name: "selected_time",
            placeholder: "Select a Time",
            label: "Booking Time",
            required: true
          }),
          new TextareaField({
            name: "messages",
            placeholder: "Enter your message",
            label: "Your Message",
            required: true,
            rows: 8
          }),
          new RadioGroupField({
            name: "selected_colour",
            label: "Choose your colour",
            items: [
              new RadioField({
                label: "Blue",
                value: "blue",
                color: "blue"
              }),
              new RadioField({
                label: "Red",
                value: "red",
                color: "red"
              }),
              new RadioField({
                label: "Green",
                value: "green",
                color: "green"
              })
            ]
          })
        ],
        buttons: [
          new Button({
            type: ButtonTypes.Process,
            text: "Process"
          }),
          new Button({
            type: ButtonTypes.Cancel,
            text: "Cancel",
            color: "red"
          })
        ]
      }),
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
    const __returned__ = { state };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Input Form - Basic",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Input Form - Advanced",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Action Form - Buttons Vertical",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Action Form - Buttons Horizontal",
  -1
  /* HOISTED */
);
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Action Form - Icons Vertical",
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "h2",
  null,
  "Action Form - Icons Horizontal",
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_form_loader = resolveComponent("form-loader");
                                                          
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    group: "forms",
    title: "Form Loader"
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Input Form - Basic" }, {
        default: withCtx(() => [
          _hoisted_1,
          createVNode(VSheet, {
            class: "pa-4",
            color: "grey-lighten-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_form_loader, {
                form: $setup.state.inputFormBasic
              }, null, 8, ["form"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Input Form - Advanced" }, {
        default: withCtx(() => [
          _hoisted_2,
          createVNode(VSheet, {
            class: "pa-4",
            color: "grey-lighten-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_form_loader, {
                form: $setup.state.inputFormAdvanced
              }, null, 8, ["form"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Action Form - Buttons Vertical" }, {
        default: withCtx(() => [
          _hoisted_3,
          createVNode(VSheet, {
            class: "pa-4",
            color: "grey-lighten-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_form_loader, {
                form: $setup.state.actionFormButtons
              }, null, 8, ["form"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Action Form - Buttons Horizontal" }, {
        default: withCtx(() => [
          _hoisted_4,
          createVNode(VSheet, {
            class: "pa-4",
            color: "grey-lighten-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_form_loader, {
                form: $setup.state.actionFormButtonsHorizontal
              }, null, 8, ["form"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, {
        title: "Action Form - Icons Vertical",
        "auto-props-disabled": true
      }, {
        default: withCtx(() => [
          _hoisted_5,
          createVNode(VSheet, {
            class: "pa-4",
            color: "grey-lighten-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_form_loader, {
                form: $setup.state.actionFormIcons
              }, null, 8, ["form"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_Variant, { title: "Action Form - Icons Horizontal" }, {
        default: withCtx(() => [
          _hoisted_6,
          createVNode(VSheet, {
            class: "pa-4",
            color: "grey-lighten-3"
          }, {
            default: withCtx(() => [
              createVNode(_component_form_loader, {
                form: $setup.state.actionFormIconsHorizontal
              }, null, 8, ["form"])
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
_sfc_main.__file = 'src/components/FormLoader.story.vue';
const FormLoader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/development/plustime/Laravel-Vue-EasyForms/src/components/FormLoader.story.vue"]]);

export { FormLoader_story as default };
