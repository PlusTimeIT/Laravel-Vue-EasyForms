import { S as n, i } from "./Store-03b8f4cc.js";
class a {
  /**
   * Format the components prop names.
   * @param key
   * @returns string appropriate key for prop names
   */
  static formatKey(s) {
    return n.snakeToKebab(s);
  }
}
const r = (o) => a.formatKey(o);
class p {
  constructor(s) {
    Object.assign(this, s);
  }
  // this should be overwritten on parent class to return allowed props.
  // If nothing is supplied in this array, then no props are passed to components.
  allowedProps() {
    return [];
  }
  props() {
    const s = {}, c = this.allowedProps();
    for (const e of Object.keys(this)) {
      const t = e;
      !i(this[t]) && c.includes(e) && (t.toString().includes("icon") ? i(this[t].icon) ? s[r(e)] = this[t] : s[r(e)] = this[t].icon : e == "text_style" ? s.text = this[t] : s[r(e)] = this[t]);
    }
    return s;
  }
}
export {
  p as G
};
