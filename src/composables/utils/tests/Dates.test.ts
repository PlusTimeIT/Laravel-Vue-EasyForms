import * as DateHelper from "../Dates";

describe("Date Functions", () => {
  test("can check minutes between two dates", () => {
    const start = new Date("2023-01-01 00:00:00");
    const end = new Date("2023-01-01 00:05:00");
    expect(DateHelper.minutesBetween(start, end)).toBe(5);
  });
});
