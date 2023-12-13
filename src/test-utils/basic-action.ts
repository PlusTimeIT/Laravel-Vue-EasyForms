import { ActionForm } from "../classes/forms";
import { Button, Icon, Tooltip } from "../classes/elements";
import { ButtonTypes, LocationTypes } from "../enums";
import { ActionButton, ActionIcon } from "../classes/actions";

const basicActionForm = new ActionForm({
  name: "TestForm",
  inline: true,
  actions: [
    new ActionButton({
      name: "test",
      button: new Button({
        type: ButtonTypes.Cancel,
        text: "Cancel",
      }),
    }),
    new ActionIcon({
      name: "test",
      icon: new Icon({
        color: "secondary",
        icon: "mdi-alien-outline",
      }),
    }),
    new ActionIcon({
      name: "test",
      icon: new Icon({
        color: "accent",
        icon: "mdi-alpha-c-box-outline",
        tooltip: new Tooltip({
          text: "hello C box",
          location: LocationTypes.Bottom,
        }),
      }),
    }),
  ],
});

export { basicActionForm };
