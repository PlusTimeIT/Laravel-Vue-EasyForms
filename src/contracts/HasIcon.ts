import { Tooltip } from "../classes/elements";

export default interface HasIcon {
  class: string | undefined;
  color: string;
  end: boolean;
  icon: string;
  size: string | undefined;
  start: boolean;
  tag: string;
  theme?: string;
  tooltip: Tooltip | undefined;
  allowedProps(): string[];
  props(): object;
}
