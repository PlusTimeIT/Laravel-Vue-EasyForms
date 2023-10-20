/**
 * Date Helper for checking and formatting dates easily
 */
export class DateHelper {
  /**
   * Get minutes between 2 Date objects
   * @param start Date the start date with time included.
   * @param end Date the end date with time included.
   * @returns number
   */
  static minutesBetween(start: Date, end: Date): number {
    let diff = (end.getTime() - start.getTime()) / 1000;
    diff /= 60;
    return Math.abs(Math.round(diff));
  }
}
