import { InputForm } from "../classes/forms";
import { TextField } from "../classes/fields";
import { Alert, Button, Icon } from "../classes/elements";
import { AlertTriggers, AlertTypes, ButtonTypes } from "../enums";

const basicInputForm = new InputForm({
  name: "TestForm",
  fields: [
    new TextField({
      name: "test_basic_text_and_label",
      placeholder: "Testing Basic Text and Label",
      label: "Testing Basic Text and Label",
      required: true,
      cols: 3,
    }),
  ],
  alerts: [
    new Alert({
      type: AlertTypes.Info,
      trigger: AlertTriggers.AfterLoad,
      text: "These forms are only test forms with no processing.",
      display: true,
    }),
  ],
  buttons: [
    new Button({
      type: ButtonTypes.Process,
      text: "Testing Button",
      prepend_icon: new Icon({
        color: "secondary",
        icon: "mdi-home",
      }),
    }),
  ],
});

export { basicInputForm };
