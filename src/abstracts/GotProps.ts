import { isEmpty } from "../composables/utils/Types";
import { formatKey } from "../composables/utils/Properties";
import { Icon } from "../classes/elements";
import HasProps from "../contracts/HasProps";
import HasIcon from "../contracts/HasIcon";

/**
 *  Abstract class for elements, fields etc, that require props and prop checks.
 */
export abstract class GotProps implements HasProps {
  constructor(init?: Partial<GotProps>) {
    Object.assign(this, init);
  }

  // this should be overwritten on parent class to return allowed props.
  // If nothing is supplied in this array, then no props are passed to components.
  allowedProps(): string[] {
    return [];
  }

  instanceOfA(object: any): object is HasIcon {
    return "icon" in object;
  }

  props(): object {
    const result: any = {};
    const accepted_props: string[] = this.allowedProps();
    for (const key of Object.keys(this)) {
      const asKey = key as keyof this;
      if (!isEmpty(this[asKey]) && accepted_props.includes(key)) {
        if (asKey.toString().includes("icon")) {
          if (!isEmpty((this[asKey] as Icon)!.icon)) {
            // convert icons to string if includes.
            // Note that most Icons are removed from the props passed and
            // manually created in the component slots. This allows tooltips and customisation.
            result[formatKey(key)] = (this[asKey] as Icon)!.icon;
          } else {
            result[formatKey(key)] = this[asKey];
          }
        } else if (key == "text_style") {
          result["text"] = this[asKey];
        } else {
          result[formatKey(key)] = this[asKey];
        }
      }
    }
    return result;
  }
}
