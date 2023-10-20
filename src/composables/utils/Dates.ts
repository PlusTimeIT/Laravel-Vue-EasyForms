import { DateHelper } from "../../classes/utils";

const minutesBetween = function (start: Date, end: Date): number {
  return DateHelper.minutesBetween(start, end);
};

export { minutesBetween };
