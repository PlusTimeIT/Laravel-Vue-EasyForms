import { Fragment as ke, reactive as En, computed as h, watchEffect as ze, toRefs as fr, capitalize as ia, isVNode as ju, Comment as Gu, unref as Oe, warn as tl, defineComponent as Le, camelize as vr, h as Ln, getCurrentInstance as qu, inject as Te, ref as N, provide as je, shallowRef as re, createVNode as u, isRef as sa, mergeProps as B, toRef as q, Text as Ku, Transition as fn, watch as G, onBeforeMount as di, nextTick as Ue, onBeforeUnmount as Ae, withDirectives as Ve, resolveDirective as gt, vShow as ut, onScopeDispose as Ge, effectScope as fi, toRaw as tn, resolveDynamicComponent as mr, TransitionGroup as Zu, onMounted as qe, readonly as vi, openBlock as ee, createBlock as se, withCtx as R, createTextVNode as Me, toDisplayString as Ze, createCommentVNode as De, createElementBlock as Xt, renderList as Tn, resolveComponent as Qt, createSlots as mi, onUnmounted as Xu, Teleport as Ju, createElementVNode as ct, normalizeClass as hr, cloneVNode as Qu, normalizeProps as rs } from "vue";
import { InputForm as wn, ActionForm as Cn, EasyForm as os } from "./forms.js";
import { i as ie, P as gr, s as Ul } from "./Store-ff430d87.js";
import { F as bt } from "./JustifyRow-eb5715b2.js";
import "axios";
import { a as wa } from "./ButtonVariantTypes-85a127bd.js";
import { L as te } from "./LoaderEvents-57799137.js";
import { CheckboxGroupField as ec, TextField as tc, SelectField as nc, AutoCompleteField as ac } from "./fields.js";
import { k as lc } from "./ServerCall-e0f70588.js";
import { a as Gt } from "./ViewModeTypes-25f1573e.js";
import { A as ic } from "./AlertTriggers-18dccfa1.js";
import { FormContainer as sc } from "./elements.js";
import { C as yr } from "./Csrf-5645bff1.js";
import { F as us } from "./FormLoaderTypes-b32e44d6.js";
import { I as rc } from "./Icon-3ae1af1e.js";
import "./ContentTypes-f2427ff5.js";
import "./Alert-ecc48ffd.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./GotProps-12eeba8a.js";
import "./ProgressLinear-0f32cd16.js";
import "./LocationTypes-c293bdaa.js";
import "./AxiosOptions-6a3d3f30.js";
import "./FormLoader-1edcf0ff.js";
import "./actions.js";
import "./Button-da6cf979.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-abb2e0c5.js";
function Ca(e) {
  return e <= 12 && e >= 1;
}
function oc(e) {
  return e.type === bt.Input && e instanceof wn;
}
function uc(e) {
  return e.type === bt.Action && e instanceof Cn;
}
function L(e, t) {
  return (n) => Object.keys(e).reduce((a, l) => {
    const s = typeof e[l] == "object" && e[l] != null && !Array.isArray(e[l]) ? e[l] : {
      type: e[l]
    };
    return n && l in n ? a[l] = {
      ...s,
      default: n[l]
    } : a[l] = s, t && !a[l].source && (a[l].source = t), a;
  }, {});
}
const ae = L({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), $e = typeof window < "u", hi = $e && "IntersectionObserver" in window, cs = $e && "EyeDropper" in window;
function kr(e, t, n) {
  const a = t.length - 1;
  if (a < 0)
    return e === void 0 ? n : e;
  for (let l = 0; l < a; l++) {
    if (e == null)
      return n;
    e = e[t[l]];
  }
  return e == null || e[t[a]] === void 0 ? n : e[t[a]];
}
function hn(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length !== Object.keys(t).length ? !1 : n.every((a) => hn(e[a], t[a]));
}
function cc(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), kr(e, t.split("."), n));
}
function Ot(e, t, n) {
  if (t === !0)
    return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean")
    return n;
  if (e !== Object(e)) {
    if (typeof t != "function")
      return n;
    const l = t(e, n);
    return typeof l > "u" ? n : l;
  }
  if (typeof t == "string")
    return cc(e, t, n);
  if (Array.isArray(t))
    return kr(e, t, n);
  if (typeof t != "function")
    return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function gi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function J(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Hl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Na(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const ds = Object.freeze({
  enter: 13,
  tab: 9,
  delete: 46,
  esc: 27,
  space: 32,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  end: 35,
  home: 36,
  del: 46,
  backspace: 8,
  insert: 45,
  pageup: 33,
  pagedown: 34,
  shift: 16
}), dc = Object.freeze({
  enter: "Enter",
  tab: "Tab",
  delete: "Delete",
  esc: "Escape",
  space: "Space",
  up: "ArrowUp",
  down: "ArrowDown",
  left: "ArrowLeft",
  right: "ArrowRight",
  end: "End",
  home: "Home",
  del: "Delete",
  backspace: "Backspace",
  insert: "Insert",
  pageup: "PageUp",
  pagedown: "PageDown",
  shift: "Shift"
});
function ln(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function br(e, t) {
  const n = {}, a = new Set(Object.keys(e));
  for (const l of t)
    a.has(l) && (n[l] = e[l]);
  return n;
}
function fs(e, t, n) {
  const a = /* @__PURE__ */ Object.create(null), l = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    t.some((s) => s instanceof RegExp ? s.test(i) : s === i) && !(n != null && n.some((s) => s === i)) ? a[i] = e[i] : l[i] = e[i];
  return [a, l];
}
function Je(e, t) {
  const n = {
    ...e
  };
  return t.forEach((a) => delete n[a]), n;
}
const pr = /^on[^a-z]/, yi = (e) => pr.test(e), fc = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function nl(e) {
  const [t, n] = fs(e, [pr]), a = Je(t, fc), [l, i] = fs(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function Xe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function vc(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), s = 0; s < l; s++)
      i[s] = arguments[s];
    clearTimeout(n), n = setTimeout(() => e(...i), Oe(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function rt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function vs(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function ms(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function mc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function Vn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const i = e[l], s = t[l];
    if (Hl(i) && Hl(s)) {
      a[l] = Vn(i, s, n);
      continue;
    }
    if (Array.isArray(i) && Array.isArray(s) && n) {
      a[l] = n(i, s);
      continue;
    }
    a[l] = s;
  }
  return a;
}
function _r(e) {
  return e.map((t) => t.type === ke ? _r(t.children) : t).flat();
}
function rn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (rn.cache.has(e))
    return rn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return rn.cache.set(e, t), t;
}
rn.cache = /* @__PURE__ */ new Map();
function Ia(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => Ia(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => Ia(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Ia(e, t.component.subTree).flat(1);
  }
  return [];
}
function hc(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function ki(e) {
  const t = En({}), n = h(e);
  return ze(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), fr(t);
}
function Ya(e, t) {
  return e.includes(t);
}
function Sr(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const dt = () => [Function, Array];
function hs(e, t) {
  return t = "on" + ia(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function gc(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else
    typeof e == "function" && e(...n);
}
function Ba(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function wr(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function $a(e, t) {
  var a, l, i, s;
  const n = Ba(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = n[0]) == null || a.focus());
  else if (t === "first")
    (l = n[0]) == null || l.focus();
  else if (t === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof t == "number")
    (s = n[t]) == null || s.focus();
  else {
    const r = wr(n, t);
    r ? r.focus() : $a(e, t === "next" ? "first" : "last");
  }
}
function Wa(e, t) {
  if (!($e && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`)))
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Cr(e) {
  return e.some((t) => ju(t) ? t.type === Gu ? !1 : t.type !== ke || Cr(t.children) : !0) ? e : null;
}
function yc(e, t) {
  if (!$e || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
const Vr = ["top", "bottom"], kc = ["start", "end", "left", "right"];
function zl(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Ya(Vr, n) ? "start" : Ya(kc, n) ? "top" : "center"), {
    side: gs(n, t),
    align: gs(a, t)
  };
}
function gs(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Ol(e) {
  return {
    side: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.side],
    align: e.align
  };
}
function Il(e) {
  return {
    side: e.side,
    align: {
      center: "center",
      top: "bottom",
      bottom: "top",
      left: "right",
      right: "left"
    }[e.align]
  };
}
function ys(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function ks(e) {
  return Ya(Vr, e.side) ? "y" : "x";
}
class on {
  constructor(t) {
    let {
      x: n,
      y: a,
      width: l,
      height: i
    } = t;
    this.x = n, this.y = a, this.width = l, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function bs(e, t) {
  return {
    x: {
      before: Math.max(0, t.left - e.left),
      after: Math.max(0, e.right - t.right)
    },
    y: {
      before: Math.max(0, t.top - e.top),
      after: Math.max(0, e.bottom - t.bottom)
    }
  };
}
function xr(e) {
  return Array.isArray(e) ? new on({
    x: e[0],
    y: e[1],
    width: 0,
    height: 0
  }) : e.getBoundingClientRect();
}
function bi(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, s, r, o;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], s = +l[5], r = +l[12], o = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], s = +l[3], r = +l[4], o = +l[5];
    else
      return new on(t);
    const c = n.transformOrigin, d = t.x - r - (1 - i) * parseFloat(c), v = t.y - o - (1 - s) * parseFloat(c.slice(c.indexOf(" ") + 1)), f = i ? t.width / i : e.offsetWidth + 1, m = s ? t.height / s : e.offsetHeight + 1;
    return new on({
      x: d,
      y: v,
      width: f,
      height: m
    });
  } else
    return new on(t);
}
function xn(e, t, n) {
  if (typeof e.animate > "u")
    return {
      finished: Promise.resolve()
    };
  let a;
  try {
    a = e.animate(t, n);
  } catch {
    return {
      finished: Promise.resolve()
    };
  }
  return typeof a.finished > "u" && (a.finished = new Promise((l) => {
    a.onfinish = () => {
      l(a);
    };
  })), a;
}
const Ta = /* @__PURE__ */ new WeakMap();
function bc(e, t) {
  Object.keys(t).forEach((n) => {
    if (yi(n)) {
      const a = Sr(n), l = Ta.get(e);
      if (t[n] == null)
        l == null || l.forEach((i) => {
          const [s, r] = i;
          s === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), Ta.has(e) || Ta.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function pc(e, t) {
  Object.keys(t).forEach((n) => {
    if (yi(n)) {
      const a = Sr(n), l = Ta.get(e);
      l == null || l.forEach((i) => {
        const [s, r] = i;
        s === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const pn = 2.4, ps = 0.2126729, _s = 0.7151522, Ss = 0.072175, _c = 0.55, Sc = 0.58, wc = 0.57, Cc = 0.62, Va = 0.03, ws = 1.45, Vc = 5e-4, xc = 1.25, Pc = 1.25, Cs = 0.078, Vs = 12.82051282051282, xa = 0.06, xs = 1e-3;
function Ps(e, t) {
  const n = (e.r / 255) ** pn, a = (e.g / 255) ** pn, l = (e.b / 255) ** pn, i = (t.r / 255) ** pn, s = (t.g / 255) ** pn, r = (t.b / 255) ** pn;
  let o = n * ps + a * _s + l * Ss, c = i * ps + s * _s + r * Ss;
  if (o <= Va && (o += (Va - o) ** ws), c <= Va && (c += (Va - c) ** ws), Math.abs(c - o) < Vc)
    return 0;
  let d;
  if (c > o) {
    const v = (c ** _c - o ** Sc) * xc;
    d = v < xs ? 0 : v < Cs ? v - v * Vs * xa : v - xa;
  } else {
    const v = (c ** Cc - o ** wc) * Pc;
    d = v > -xs ? 0 : v > -Cs ? v - v * Vs * xa : v + xa;
  }
  return d * 100;
}
function un(e) {
  tl(`Vuetify: ${e}`);
}
function Mc(e) {
  tl(`Vuetify error: ${e}`);
}
function Dc(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, tl(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const Oc = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ic = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Tc(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = Ic, s = Oc;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = s[r][0] * t + s[r][1] * n + s[r][2] * a;
  return l;
}
function jl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Ac(e) {
  return jl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ms = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ec = {
  rgb: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  rgba: (e, t, n, a) => ({
    r: e,
    g: t,
    b: n,
    a
  }),
  hsl: (e, t, n, a) => Ds({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => Ds({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsv: (e, t, n, a) => Ft({
    h: e,
    s: t,
    v: n,
    a
  }),
  hsva: (e, t, n, a) => Ft({
    h: e,
    s: t,
    v: n,
    a
  })
};
function qt(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && un(`'${e}' is not a valid hex color`), {
      r: (e & 16711680) >> 16,
      g: (e & 65280) >> 8,
      b: e & 255
    };
  if (typeof e == "string" && Ms.test(e)) {
    const {
      groups: t
    } = e.match(Ms), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Ec[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || un(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && un(`'${e}' is not a valid hex(a) color`), Or(t);
  } else if (typeof e == "object") {
    if (ln(e, ["r", "g", "b"]))
      return e;
    if (ln(e, ["h", "s", "l"]))
      return Ft(pi(e));
    if (ln(e, ["h", "s", "v"]))
      return Ft(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function Ft(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = (r) => {
    const o = (r + t / 60) % 6;
    return a - a * n * Math.max(Math.min(o, 4 - o, 1), 0);
  }, s = [i(5), i(3), i(1)].map((r) => Math.round(r * 255));
  return {
    r: s[0],
    g: s[1],
    b: s[2],
    a: l
  };
}
function Ds(e) {
  return Ft(pi(e));
}
function al(e) {
  if (!e)
    return {
      h: 0,
      s: 1,
      v: 1,
      a: 1
    };
  const t = e.r / 255, n = e.g / 255, a = e.b / 255, l = Math.max(t, n, a), i = Math.min(t, n, a);
  let s = 0;
  l !== i && (l === t ? s = 60 * (0 + (n - a) / (l - i)) : l === n ? s = 60 * (2 + (a - t) / (l - i)) : l === a && (s = 60 * (4 + (t - n) / (l - i)))), s < 0 && (s = s + 360);
  const r = l === 0 ? 0 : (l - i) / l, o = [s, r, l];
  return {
    h: o[0],
    s: o[1],
    v: o[2],
    a: e.a
  };
}
function Pr(e) {
  const {
    h: t,
    s: n,
    v: a,
    a: l
  } = e, i = a - a * n / 2, s = i === 1 || i === 0 ? 0 : (a - i) / Math.min(i, 1 - i);
  return {
    h: t,
    s,
    l: i,
    a: l
  };
}
function pi(e) {
  const {
    h: t,
    s: n,
    l: a,
    a: l
  } = e, i = a + n * Math.min(a, 1 - a), s = i === 0 ? 0 : 2 - 2 * a / i;
  return {
    h: t,
    s,
    v: i,
    a: l
  };
}
function Mr(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Dr(e) {
  return Mr(Ft(e));
}
function Pa(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function Lc(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[Pa(t), Pa(n), Pa(a), l !== void 0 ? Pa(Math.round(l * 255)) : ""].join("")}`;
}
function Or(e) {
  e = Fc(e);
  let [t, n, a, l] = mc(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function Ir(e) {
  const t = Or(e);
  return al(t);
}
function Tr(e) {
  return Lc(Ft(e));
}
function Fc(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ms(ms(e, 6), 8, "F")), e;
}
function Os(e) {
  const t = qt(e);
  return Tc(t)[1];
}
function Rc(e, t) {
  const n = Os(e), a = Os(t), l = Math.max(n, a), i = Math.min(n, a);
  return (l + 0.05) / (i + 0.05);
}
function Nc(e) {
  const t = Math.abs(Ps(qt(0), qt(e)));
  return Math.abs(Ps(qt(16777215), qt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function St(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return un("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = L(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return br(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = Si();
      if (!i.value)
        return e._setup(a, l);
      const {
        props: s,
        provideSubDefaults: r
      } = zc(a, a._as ?? e.name, i), o = e._setup(s, l);
      return r(), o;
    };
  }
  return e;
}
function z() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? St : Le)(t);
}
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return z()({
    name: n ?? ia(vr(e.replace(/__/g, "-"))),
    props: {
      tag: {
        type: String,
        default: t
      },
      ...ae()
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => {
        var s;
        return Ln(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (s = i.default) == null ? void 0 : s.call(i));
      };
    }
  });
}
function Ar(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({
    composed: !0
  }) !== document ? null : t;
}
const Ua = "cubic-bezier(0.4, 0, 0.2, 1)", Yc = "cubic-bezier(0.0, 0, 0.2, 1)", Bc = "cubic-bezier(0.4, 0, 1, 1)";
function Fe(e, t) {
  const n = qu();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function wt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Fe(e).type;
  return rn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let Er = 0, Aa = /* @__PURE__ */ new WeakMap();
function nt() {
  const e = Fe("getUid");
  if (Aa.has(e))
    return Aa.get(e);
  {
    const t = Er++;
    return Aa.set(e, t), t;
  }
}
nt.reset = () => {
  Er = 0, Aa = /* @__PURE__ */ new WeakMap();
};
function Lr(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? $c(e) : _i(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ha(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (_i(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function _i(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function $c(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Wc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
function Uc(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Z(e) {
  const t = Fe("useRender");
  t.render = e;
}
const za = Symbol.for("vuetify:defaults");
function Si() {
  const e = Te(za);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function gn(e, t) {
  const n = Si(), a = N(e), l = h(() => {
    if (Oe(t == null ? void 0 : t.disabled))
      return n.value;
    const s = Oe(t == null ? void 0 : t.scoped), r = Oe(t == null ? void 0 : t.reset), o = Oe(t == null ? void 0 : t.root);
    if (a.value == null && !(s || r || o))
      return n.value;
    let c = Vn(a.value, {
      prev: n.value
    });
    if (s)
      return c;
    if (r || o) {
      const d = Number(r || 1 / 0);
      for (let v = 0; v <= d && !(!c || !("prev" in c)); v++)
        c = c.prev;
      return c && typeof o == "string" && o in c && (c = Vn(Vn(c, {
        prev: c
      }), c[o])), c;
    }
    return c.prev ? Vn(c.prev, c) : c;
  });
  return je(za, l), l;
}
function Hc(e, t) {
  var n, a;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[rn(t)]) < "u";
}
function zc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Si();
  const a = Fe("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = h(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), i = new Proxy(e, {
    get(o, c) {
      var v, f, m, y;
      const d = Reflect.get(o, c);
      return c === "class" || c === "style" ? [(v = l.value) == null ? void 0 : v[c], d].filter((k) => k != null) : typeof c == "string" && !Hc(a.vnode, c) ? ((f = l.value) == null ? void 0 : f[c]) ?? ((y = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : y[c]) ?? d : d;
    }
  }), s = re();
  ze(() => {
    if (l.value) {
      const o = Object.entries(l.value).filter((c) => {
        let [d] = c;
        return d.startsWith(d[0].toUpperCase());
      });
      s.value = o.length ? Object.fromEntries(o) : void 0;
    } else
      s.value = void 0;
  });
  function r() {
    const o = Wc(za, a);
    je(za, h(() => s.value ? Vn((o == null ? void 0 : o.value) ?? {}, s.value) : o == null ? void 0 : o.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
const Fr = z()({
  name: "VCardActions",
  props: ae(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return gn({
      VBtn: {
        slim: !0,
        variant: "text"
      }
    }), Z(() => {
      var a;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), jc = nn("v-card-subtitle"), wi = nn("v-card-title");
function Ci(e) {
  return ki(() => {
    const t = [], n = {};
    if (e.value.background)
      if (jl(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Ac(e.value.background)) {
          const a = qt(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Nc(a);
            n.color = l, n.caretColor = l;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    return e.value.text && (jl(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), {
      colorClasses: t,
      colorStyles: n
    };
  });
}
function ft(e, t) {
  const n = h(() => ({
    text: sa(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Ci(n);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function vt(e, t) {
  const n = h(() => ({
    background: sa(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = Ci(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const ye = [String, Function, Object, Array], Gc = Symbol.for("vuetify:icons"), ll = L({
  icon: {
    type: ye
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Is = z()({
  name: "VComponentIcon",
  props: ll(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return () => {
      const a = e.icon;
      return u(e.tag, null, {
        default: () => {
          var l;
          return [e.icon ? u(a, null, null) : (l = n.default) == null ? void 0 : l.call(n)];
        }
      });
    };
  }
}), qc = St({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: ll(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => u(e.tag, B(n, {
      style: null
    }), {
      default: () => [u("svg", {
        class: "v-icon__svg",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        role: "img",
        "aria-hidden": "true"
      }, [Array.isArray(e.icon) ? e.icon.map((a) => Array.isArray(a) ? u("path", {
        d: a[0],
        "fill-opacity": a[1]
      }, null) : u("path", {
        d: a
      }, null)) : u("path", {
        d: e.icon
      }, null)])]
    });
  }
});
St({
  name: "VLigatureIcon",
  props: ll(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
St({
  name: "VClassIcon",
  props: ll(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const Kc = (e) => {
  const t = Te(Gc);
  if (!t)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: h(() => {
      var o;
      const a = Oe(e);
      if (!a)
        return {
          component: Is
        };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (o = t.aliases) == null ? void 0 : o[l.slice(1)])), !l)
        throw new Error(`Could not find aliased icon "${a}"`);
      if (Array.isArray(l))
        return {
          component: qc,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Is,
          icon: l
        };
      const i = Object.keys(t.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), s = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: s
      };
    })
  };
}, Zc = ["x-small", "small", "default", "large", "x-large"], ra = L({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return ki(() => {
    let n, a;
    return Ya(Zc, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: J(e.size),
      height: J(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const Re = L({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Ts = Symbol.for("vuetify:theme"), Ee = L({
  theme: String
}, "theme");
function We(e) {
  Fe("provideTheme");
  const t = Te(Ts, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = h(() => e.theme ?? t.name.value), a = h(() => t.themes.value[n.value]), l = h(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: a,
    themeClasses: l
  };
  return je(Ts, i), i;
}
const Xc = L({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: ye,
  ...ae(),
  ...ra(),
  ...Re({
    tag: "i"
  }),
  ...Ee()
}, "VIcon"), Ce = z()({
  name: "VIcon",
  props: Xc(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = N(), {
      themeClasses: i
    } = We(e), {
      iconData: s
    } = Kc(h(() => l.value || e.icon)), {
      sizeClasses: r
    } = oa(e), {
      textColorClasses: o,
      textColorStyles: c
    } = ft(q(e, "color"));
    return Z(() => {
      var v, f;
      const d = (v = a.default) == null ? void 0 : v.call(a);
      return d && (l.value = (f = _r(d).filter((m) => m.type === Ku && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), u(s.value.component, {
        tag: e.tag,
        icon: s.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, o.value, {
          "v-icon--clickable": !!n.onClick,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: J(e.size),
          height: J(e.size),
          width: J(e.size)
        }, c.value, e.style],
        role: n.onClick ? "button" : void 0,
        "aria-hidden": !n.onClick
      }, {
        default: () => [d]
      });
    }), {};
  }
});
const Nt = L({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Yt(e) {
  return {
    dimensionStyles: h(() => ({
      height: J(e.height),
      maxHeight: J(e.maxHeight),
      maxWidth: J(e.maxWidth),
      minHeight: J(e.minHeight),
      minWidth: J(e.minWidth),
      width: J(e.width)
    }))
  };
}
function Jc(e) {
  return {
    aspectStyles: h(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const Rr = L({
  aspectRatio: [String, Number],
  contentClass: String,
  inline: Boolean,
  ...ae(),
  ...Nt()
}, "VResponsive"), As = z()({
  name: "VResponsive",
  props: Rr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = Jc(e), {
      dimensionStyles: l
    } = Yt(e);
    return Z(() => {
      var i;
      return u("div", {
        class: ["v-responsive", {
          "v-responsive--inline": e.inline
        }, e.class],
        style: [l.value, e.style]
      }, [u("div", {
        class: "v-responsive__sizer",
        style: a.value
      }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && u("div", {
        class: ["v-responsive__content", e.contentClass]
      }, [n.default()])]);
    }), {};
  }
}), ua = L({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), It = (e, t) => {
  let {
    slots: n
  } = t;
  const {
    transition: a,
    disabled: l,
    ...i
  } = e, {
    component: s = fn,
    ...r
  } = typeof a == "object" ? a : {};
  return Ln(s, B(typeof a == "string" ? {
    name: l ? "" : a
  } : r, i, {
    disabled: l
  }), n);
};
function Qc(e, t) {
  if (!hi)
    return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, s = new IntersectionObserver(function() {
    var v;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 ? arguments[1] : void 0;
    const c = (v = e._observe) == null ? void 0 : v[t.instance.$.uid];
    if (!c)
      return;
    const d = r.some((f) => f.isIntersecting);
    l && (!n.quiet || c.init) && (!n.once || d || c.init) && l(d, r, o), d && n.once ? Nr(e, t) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: s
  }, s.observe(e);
}
function Nr(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const ed = {
  mounted: Qc,
  unmounted: Nr
}, Yr = ed, td = L({
  alt: String,
  cover: Boolean,
  draggable: {
    type: [Boolean, String],
    default: void 0
  },
  eager: Boolean,
  gradient: String,
  lazySrc: String,
  options: {
    type: Object,
    // For more information on types, navigate to:
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    default: () => ({
      root: void 0,
      rootMargin: void 0,
      threshold: void 0
    })
  },
  sizes: String,
  src: {
    type: [String, Object],
    default: ""
  },
  crossorigin: String,
  referrerpolicy: String,
  srcset: String,
  position: String,
  ...Rr(),
  ...ae(),
  ...ua()
}, "VImg"), Br = z()({
  name: "VImg",
  directives: {
    intersect: Yr
  },
  props: td(),
  emits: {
    loadstart: (e) => !0,
    load: (e) => !0,
    error: (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = Fe("VImg"), i = re(""), s = N(), r = re(e.eager ? "loading" : "idle"), o = re(), c = re(), d = h(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), v = h(() => d.value.aspect || o.value / c.value || 0);
    G(() => e.src, () => {
      f(r.value !== "idle");
    }), G(v, (C, V) => {
      !C && V && s.value && b(s.value);
    }), di(() => f());
    function f(C) {
      if (!(e.eager && C) && !(hi && !C && !e.eager)) {
        if (r.value = "loading", d.value.lazySrc) {
          const V = new Image();
          V.src = d.value.lazySrc, b(V, null);
        }
        d.value.src && Ue(() => {
          var V;
          n("loadstart", ((V = s.value) == null ? void 0 : V.currentSrc) || d.value.src), setTimeout(() => {
            var I;
            if (!l.isUnmounted)
              if ((I = s.value) != null && I.complete) {
                if (s.value.naturalWidth || y(), r.value === "error")
                  return;
                v.value || b(s.value, null), r.value === "loading" && m();
              } else
                v.value || b(s.value), k();
          });
        });
      }
    }
    function m() {
      var C;
      l.isUnmounted || (k(), b(s.value), r.value = "loaded", n("load", ((C = s.value) == null ? void 0 : C.currentSrc) || d.value.src));
    }
    function y() {
      var C;
      l.isUnmounted || (r.value = "error", n("error", ((C = s.value) == null ? void 0 : C.currentSrc) || d.value.src));
    }
    function k() {
      const C = s.value;
      C && (i.value = C.currentSrc || C.src);
    }
    let g = -1;
    Ae(() => {
      clearTimeout(g);
    });
    function b(C) {
      let V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const I = () => {
        if (clearTimeout(g), l.isUnmounted)
          return;
        const {
          naturalHeight: T,
          naturalWidth: A
        } = C;
        T || A ? (o.value = A, c.value = T) : !C.complete && r.value === "loading" && V != null ? g = window.setTimeout(I, V) : (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (o.value = 1, c.value = 1);
      };
      I();
    }
    const S = h(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), _ = () => {
      var I;
      if (!d.value.src || r.value === "idle")
        return null;
      const C = u("img", {
        class: ["v-img__img", S.value],
        style: {
          objectPosition: e.position
        },
        src: d.value.src,
        srcset: d.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: s,
        onLoad: m,
        onError: y
      }, null), V = (I = a.sources) == null ? void 0 : I.call(a);
      return u(It, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ve(V ? u("picture", {
          class: "v-img__picture"
        }, [V, C]) : C, [[ut, r.value === "loaded"]])]
      });
    }, w = () => u(It, {
      transition: e.transition
    }, {
      default: () => [d.value.lazySrc && r.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", S.value],
        style: {
          objectPosition: e.position
        },
        src: d.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), P = () => a.placeholder ? u(It, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(r.value === "loading" || r.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, x = () => a.error ? u(It, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [r.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, p = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, D = re(!1);
    {
      const C = G(v, (V) => {
        V && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            D.value = !0;
          });
        }), C());
      });
    }
    return Z(() => {
      const C = As.filterProps(e);
      return Ve(u(As, B({
        class: ["v-img", {
          "v-img--booting": !D.value
        }, e.class],
        style: [{
          width: J(e.width === "auto" ? o.value : e.width)
        }, e.style]
      }, C, {
        aspectRatio: v.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(ke, null, [u(_, null, null), u(w, null, null), u(p, null, null), u(P, null, null), u(x, null, null)]),
        default: a.default
      }), [[gt("intersect"), {
        handler: f,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: i,
      image: s,
      state: r,
      naturalWidth: o,
      naturalHeight: c
    };
  }
}), nd = [null, "default", "comfortable", "compact"], yt = L({
  density: {
    type: String,
    default: "default",
    validator: (e) => nd.includes(e)
  }
}, "density");
function Ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    densityClasses: h(() => `${t}--density-${e.density}`)
  };
}
const at = L({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    roundedClasses: h(() => {
      const a = sa(e) ? e.value : e.rounded, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`rounded-${i}`);
      return l;
    })
  };
}
const ad = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Fn(e, t) {
  return u(ke, null, [e && u("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const Bt = L({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => ad.includes(e)
  }
}, "variant");
function Rn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  const n = h(() => {
    const {
      variant: i
    } = Oe(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = Ci(h(() => {
    const {
      variant: i,
      color: s
    } = Oe(e);
    return {
      [["elevated", "flat"].includes(i) ? "background" : "text"]: s
    };
  }));
  return {
    colorClasses: a,
    colorStyles: l,
    variantClasses: n
  };
}
const ld = L({
  start: Boolean,
  end: Boolean,
  icon: ye,
  image: String,
  text: String,
  ...ae(),
  ...yt(),
  ...at(),
  ...ra(),
  ...Re(),
  ...Ee(),
  ...Bt({
    variant: "flat"
  })
}, "VAvatar"), vn = z()({
  name: "VAvatar",
  props: ld(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      colorClasses: l,
      colorStyles: i,
      variantClasses: s
    } = Rn(e), {
      densityClasses: r
    } = Ct(e), {
      roundedClasses: o
    } = lt(e), {
      sizeClasses: c,
      sizeStyles: d
    } = oa(e);
    return Z(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, r.value, o.value, c.value, s.value, e.class],
      style: [i.value, d.value, e.style]
    }, {
      default: () => {
        var v;
        return [e.image ? u(Br, {
          key: "image",
          src: e.image,
          alt: "",
          cover: !0
        }, null) : e.icon ? u(Ce, {
          key: "icon",
          icon: e.icon
        }, null) : ((v = n.default) == null ? void 0 : v.call(n)) ?? e.text, Fn(!1, "v-avatar")];
      }
    })), {};
  }
}), id = L({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), xe = z(!1)({
  name: "VDefaultsProvider",
  props: id(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      defaults: a,
      disabled: l,
      reset: i,
      root: s,
      scoped: r
    } = fr(e);
    return gn(a, {
      reset: i,
      root: s,
      scoped: r,
      disabled: l
    }), () => {
      var o;
      return (o = n.default) == null ? void 0 : o.call(n);
    };
  }
}), sd = L({
  appendAvatar: String,
  appendIcon: ye,
  prependAvatar: String,
  prependIcon: ye,
  subtitle: [String, Number],
  title: [String, Number],
  ...ae(),
  ...yt()
}, "VCardItem"), rd = z()({
  name: "VCardItem",
  props: sd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z(() => {
      var c;
      const a = !!(e.prependAvatar || e.prependIcon), l = !!(a || n.prepend), i = !!(e.appendAvatar || e.appendIcon), s = !!(i || n.append), r = !!(e.title != null || n.title), o = !!(e.subtitle != null || n.subtitle);
      return u("div", {
        class: ["v-card-item", e.class],
        style: e.style
      }, [l && u("div", {
        key: "prepend",
        class: "v-card-item__prepend"
      }, [n.prepend ? u(xe, {
        key: "prepend-defaults",
        disabled: !a,
        defaults: {
          VAvatar: {
            density: e.density,
            icon: e.prependIcon,
            image: e.prependAvatar
          }
        }
      }, n.prepend) : a && u(vn, {
        key: "prepend-avatar",
        density: e.density,
        icon: e.prependIcon,
        image: e.prependAvatar
      }, null)]), u("div", {
        class: "v-card-item__content"
      }, [r && u(wi, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
        }
      }), o && u(jc, {
        key: "subtitle"
      }, {
        default: () => {
          var d;
          return [((d = n.subtitle) == null ? void 0 : d.call(n)) ?? e.subtitle];
        }
      }), (c = n.default) == null ? void 0 : c.call(n)]), s && u("div", {
        key: "append",
        class: "v-card-item__append"
      }, [n.append ? u(xe, {
        key: "append-defaults",
        disabled: !i,
        defaults: {
          VAvatar: {
            density: e.density,
            icon: e.appendIcon,
            image: e.appendAvatar
          }
        }
      }, n.append) : i && u(vn, {
        key: "append-avatar",
        density: e.density,
        icon: e.appendIcon,
        image: e.appendAvatar
      }, null)])]);
    }), {};
  }
}), Nn = nn("v-card-text"), yn = L({
  border: [Boolean, Number, String]
}, "border");
function kn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    borderClasses: h(() => {
      const a = sa(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const $t = L({
  elevation: {
    type: [Number, String],
    validator(e) {
      const t = parseInt(e);
      return !isNaN(t) && t >= 0 && // Material Design has a maximum elevation of 24
      // https://material.io/design/environment/elevation.html#default-elevations
      t <= 24;
    }
  }
}, "elevation");
function Wt(e) {
  return {
    elevationClasses: h(() => {
      const n = sa(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
function $r(e, t) {
  const n = N(), a = re(!1);
  if (hi) {
    const l = new IntersectionObserver((i) => {
      e == null || e(i, l), a.value = !!i.find((s) => s.isIntersecting);
    }, t);
    Ae(() => {
      l.disconnect();
    }), G(n, (i, s) => {
      s && (l.unobserve(s), a.value = !1), i && l.observe(i);
    }, {
      flush: "post"
    });
  }
  return {
    intersectionRef: n,
    isIntersecting: a
  };
}
function mn(e, t) {
  let n;
  function a() {
    n = fi(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  G(e, (l) => {
    l && !n ? a() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), Ge(() => {
    n == null || n.stop();
  });
}
function fe(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const i = Fe("useProxiedModel"), s = N(e[t] !== void 0 ? e[t] : n), r = rn(t), c = r !== t ? h(() => {
    var v, f, m, y;
    return e[t], !!(((v = i.vnode.props) != null && v.hasOwnProperty(t) || (f = i.vnode.props) != null && f.hasOwnProperty(r)) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`) || (y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${r}`)));
  }) : h(() => {
    var v, f;
    return e[t], !!((v = i.vnode.props) != null && v.hasOwnProperty(t) && ((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)));
  });
  mn(() => !c.value, () => {
    G(() => e[t], (v) => {
      s.value = v;
    });
  });
  const d = h({
    get() {
      const v = e[t];
      return a(c.value ? v : s.value);
    },
    set(v) {
      const f = l(v), m = tn(c.value ? e[t] : s.value);
      m === f || a(m) === v || (s.value = f, i == null || i.emit(`update:${t}`, f));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[t] : s.value
  }), d;
}
const Wr = Symbol.for("vuetify:locale");
function Yn() {
  const e = Te(Wr);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ut() {
  const e = Te(Wr);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Es = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ca = L({
  location: String
}, "location");
function da(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = Ut();
  return {
    locationStyles: h(() => {
      if (!e.location)
        return {};
      const {
        side: i,
        align: s
      } = zl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, a.value);
      function r(c) {
        return n ? n(c) : 0;
      }
      const o = {};
      return i !== "center" && (t ? o[Es[i]] = `calc(100% - ${r(i)}px)` : o[i] = 0), s !== "center" ? t ? o[Es[s]] = `calc(100% - ${r(s)}px)` : o[s] = 0 : (i === "center" ? o.top = o.left = "50%" : o[{
        top: "left",
        bottom: "left",
        left: "top",
        right: "top"
      }[i]] = "50%", o.transform = {
        top: "translateX(-50%)",
        bottom: "translateX(-50%)",
        left: "translateY(-50%)",
        right: "translateY(-50%)",
        center: "translate(-50%, -50%)"
      }[i]), o;
    })
  };
}
const od = L({
  absolute: Boolean,
  active: {
    type: Boolean,
    default: !0
  },
  bgColor: String,
  bgOpacity: [Number, String],
  bufferValue: {
    type: [Number, String],
    default: 0
  },
  clickable: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: 4
  },
  indeterminate: Boolean,
  max: {
    type: [Number, String],
    default: 100
  },
  modelValue: {
    type: [Number, String],
    default: 0
  },
  reverse: Boolean,
  stream: Boolean,
  striped: Boolean,
  roundedBar: Boolean,
  ...ae(),
  ...ca({
    location: "top"
  }),
  ...at(),
  ...Re(),
  ...Ee()
}, "VProgressLinear"), Vi = z()({
  name: "VProgressLinear",
  props: od(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = Ut(), {
      themeClasses: s
    } = We(e), {
      locationStyles: r
    } = da(e), {
      textColorClasses: o,
      textColorStyles: c
    } = ft(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: v
    } = vt(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: f,
      backgroundColorStyles: m
    } = vt(e, "color"), {
      roundedClasses: y
    } = lt(e), {
      intersectionRef: k,
      isIntersecting: g
    } = $r(), b = h(() => parseInt(e.max, 10)), S = h(() => parseInt(e.height, 10)), _ = h(() => parseFloat(e.bufferValue) / b.value * 100), w = h(() => parseFloat(a.value) / b.value * 100), P = h(() => l.value !== e.reverse), x = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), p = h(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
    function D(C) {
      if (!k.value)
        return;
      const {
        left: V,
        right: I,
        width: T
      } = k.value.getBoundingClientRect(), A = P.value ? T - C.clientX + (I - T) : C.clientX - V;
      a.value = Math.round(A / T * b.value);
    }
    return Z(() => u(e.tag, {
      ref: k,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && g.value,
        "v-progress-linear--reverse": P.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, y.value, s.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? J(S.value) : 0,
        "--v-progress-linear-height": J(S.value),
        ...r.value
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : w.value,
      onClick: e.clickable && D
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", o.value],
        style: {
          ...c.value,
          [P.value ? "left" : "right"]: J(-S.value),
          borderTop: `${J(S.value / 2)} dotted`,
          opacity: p.value,
          top: `calc(50% - ${J(S.value / 4)})`,
          width: J(100 - _.value, "%"),
          "--v-progress-linear-stream-to": J(S.value * (P.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", d.value],
        style: [v.value, {
          opacity: p.value,
          width: J(e.stream ? _.value : 100, "%")
        }]
      }, null), u(fn, {
        name: x.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((C) => u("div", {
          key: C,
          class: ["v-progress-linear__indeterminate", C, f.value],
          style: m.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", f.value],
          style: [m.value, {
            width: J(w.value, "%")
          }]
        }, null)]
      }), n.default && u("div", {
        class: "v-progress-linear__content"
      }, [n.default({
        value: w.value,
        buffer: _.value
      })])]
    })), {};
  }
}), xi = L({
  loading: [Boolean, String]
}, "loader");
function il(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    loaderClasses: h(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Pi(e, t) {
  var a;
  let {
    slots: n
  } = t;
  return u("div", {
    class: `${e.name}__loader`
  }, [((a = n.default) == null ? void 0 : a.call(n, {
    color: e.color,
    isActive: e.active
  })) || u(Vi, {
    absolute: e.absolute,
    active: e.active,
    color: e.color,
    height: "2",
    indeterminate: !0
  }, null)]);
}
const ud = ["static", "relative", "fixed", "absolute", "sticky"], sl = L({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => ud.includes(e)
    )
  }
}, "position");
function rl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    positionClasses: h(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function cd() {
  const e = Fe("useRoute");
  return h(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function dd() {
  var e, t;
  return (t = (e = Fe("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function ol(e, t) {
  const n = mr("RouterLink"), a = h(() => !!(e.href || e.to)), l = h(() => (a == null ? void 0 : a.value) || hs(t, "click") || hs(e, "click"));
  if (typeof n == "string")
    return {
      isLink: a,
      isClickable: l,
      href: q(e, "href")
    };
  const i = e.to ? n.useLink(e) : void 0, s = cd();
  return {
    isLink: a,
    isClickable: l,
    route: i == null ? void 0 : i.route,
    navigate: i == null ? void 0 : i.navigate,
    isActive: i && h(() => {
      var r, o, c;
      return e.exact ? s.value ? ((c = i.isExactActive) == null ? void 0 : c.value) && hn(i.route.value.query, s.value.query) : (o = i.isExactActive) == null ? void 0 : o.value : (r = i.isActive) == null ? void 0 : r.value;
    }),
    href: h(() => e.to ? i == null ? void 0 : i.route.value.href : e.href)
  };
}
const ul = L({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Tl = !1;
function fd(e, t) {
  let n = !1, a, l;
  $e && (Ue(() => {
    window.addEventListener("popstate", i), a = e == null ? void 0 : e.beforeEach((s, r, o) => {
      Tl ? n ? t(o) : o() : setTimeout(() => n ? t(o) : o()), Tl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Tl = !1;
    });
  }), Ge(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(s) {
    var r;
    (r = s.state) != null && r.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
const Gl = Symbol("rippleStop"), vd = 80;
function Ls(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ql(e) {
  return e.constructor.name === "TouchEvent";
}
function Ur(e) {
  return e.constructor.name === "KeyboardEvent";
}
const md = function(e, t) {
  var v;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Ur(e)) {
    const f = t.getBoundingClientRect(), m = ql(e) ? e.touches[e.touches.length - 1] : e;
    a = m.clientX - f.left, l = m.clientY - f.top;
  }
  let i = 0, s = 0.3;
  (v = t._ripple) != null && v.circle ? (s = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
  const r = `${(t.clientWidth - i * 2) / 2}px`, o = `${(t.clientHeight - i * 2) / 2}px`, c = n.center ? r : `${a - i}px`, d = n.center ? o : `${l - i}px`;
  return {
    radius: i,
    scale: s,
    x: c,
    y: d,
    centerX: r,
    centerY: o
  };
}, ja = {
  /* eslint-disable max-statements */
  show(e, t) {
    var m;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled))
      return;
    const a = document.createElement("span"), l = document.createElement("span");
    a.appendChild(l), a.className = "v-ripple__container", n.class && (a.className += ` ${n.class}`);
    const {
      radius: i,
      scale: s,
      x: r,
      y: o,
      centerX: c,
      centerY: d
    } = md(e, t, n), v = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = v, l.style.height = v, t.appendChild(a);
    const f = window.getComputedStyle(t);
    f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Ls(l, `translate(${r}, ${o}) scale3d(${s},${s},${s})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Ls(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
    }, 0);
  },
  hide(e) {
    var i;
    if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
      return;
    const t = e.getElementsByClassName("v-ripple__animation");
    if (t.length === 0)
      return;
    const n = t[t.length - 1];
    if (n.dataset.isHiding)
      return;
    n.dataset.isHiding = "true";
    const a = performance.now() - Number(n.dataset.activated), l = Math.max(250 - a, 0);
    setTimeout(() => {
      n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
        var r;
        e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = n.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(n.parentNode);
      }, 300);
    }, l);
  }
};
function Hr(e) {
  return typeof e > "u" || !!e;
}
function Zn(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Gl])) {
    if (e[Gl] = !0, ql(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Ur(e), n._ripple.class && (t.class = n._ripple.class), ql(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        ja.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, vd);
    } else
      ja.show(e, n, t);
  }
}
function Fs(e) {
  e[Gl] = !0;
}
function Ke(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit) {
      t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, t._ripple.showTimer = window.setTimeout(() => {
        Ke(e);
      });
      return;
    }
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), ja.hide(t);
  }
}
function zr(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Xn = !1;
function jr(e) {
  !Xn && (e.keyCode === ds.enter || e.keyCode === ds.space) && (Xn = !0, Zn(e));
}
function Gr(e) {
  Xn = !1, Ke(e);
}
function qr(e) {
  Xn && (Xn = !1, Ke(e));
}
function Kr(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, i = Hr(a);
  if (i || ja.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Hl(a) && a.class && (e._ripple.class = a.class), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Fs, {
        passive: !0
      }), e.addEventListener("mousedown", Fs);
      return;
    }
    e.addEventListener("touchstart", Zn, {
      passive: !0
    }), e.addEventListener("touchend", Ke, {
      passive: !0
    }), e.addEventListener("touchmove", zr, {
      passive: !0
    }), e.addEventListener("touchcancel", Ke), e.addEventListener("mousedown", Zn), e.addEventListener("mouseup", Ke), e.addEventListener("mouseleave", Ke), e.addEventListener("keydown", jr), e.addEventListener("keyup", Gr), e.addEventListener("blur", qr), e.addEventListener("dragstart", Ke, {
      passive: !0
    });
  } else
    !i && n && Zr(e);
}
function Zr(e) {
  e.removeEventListener("mousedown", Zn), e.removeEventListener("touchstart", Zn), e.removeEventListener("touchend", Ke), e.removeEventListener("touchmove", zr), e.removeEventListener("touchcancel", Ke), e.removeEventListener("mouseup", Ke), e.removeEventListener("mouseleave", Ke), e.removeEventListener("keydown", jr), e.removeEventListener("keyup", Gr), e.removeEventListener("dragstart", Ke), e.removeEventListener("blur", qr);
}
function hd(e, t) {
  Kr(e, t, !1);
}
function gd(e) {
  delete e._ripple, Zr(e);
}
function yd(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Hr(t.oldValue);
  Kr(e, t, n);
}
const Bn = {
  mounted: hd,
  unmounted: gd,
  updated: yd
}, kd = L({
  appendAvatar: String,
  appendIcon: ye,
  disabled: Boolean,
  flat: Boolean,
  hover: Boolean,
  image: String,
  link: {
    type: Boolean,
    default: void 0
  },
  prependAvatar: String,
  prependIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  subtitle: [String, Number],
  text: [String, Number],
  title: [String, Number],
  ...yn(),
  ...ae(),
  ...yt(),
  ...Nt(),
  ...$t(),
  ...xi(),
  ...ca(),
  ...sl(),
  ...at(),
  ...ul(),
  ...Re(),
  ...Ee(),
  ...Bt({
    variant: "elevated"
  })
}, "VCard"), fa = z()({
  name: "VCard",
  directives: {
    Ripple: Bn
  },
  props: kd(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = We(e), {
      borderClasses: i
    } = kn(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: o
    } = Rn(e), {
      densityClasses: c
    } = Ct(e), {
      dimensionStyles: d
    } = Yt(e), {
      elevationClasses: v
    } = Wt(e), {
      loaderClasses: f
    } = il(e), {
      locationStyles: m
    } = da(e), {
      positionClasses: y
    } = rl(e), {
      roundedClasses: k
    } = lt(e), g = ol(e, n), b = h(() => e.link !== !1 && g.isLink.value), S = h(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
    return Z(() => {
      const _ = b.value ? "a" : e.tag, w = !!(a.title || e.title != null), P = !!(a.subtitle || e.subtitle != null), x = w || P, p = !!(a.append || e.appendAvatar || e.appendIcon), D = !!(a.prepend || e.prependAvatar || e.prependIcon), C = !!(a.image || e.image), V = x || D || p, I = !!(a.text || e.text != null);
      return Ve(u(_, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": S.value
        }, l.value, i.value, s.value, c.value, v.value, f.value, y.value, k.value, o.value, e.class],
        style: [r.value, d.value, m.value, e.style],
        href: g.href.value,
        onClick: S.value && g.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var T;
          return [C && u("div", {
            key: "image",
            class: "v-card__image"
          }, [a.image ? u(xe, {
            key: "image-defaults",
            disabled: !e.image,
            defaults: {
              VImg: {
                cover: !0,
                src: e.image
              }
            }
          }, a.image) : u(Br, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(Pi, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), V && u(rd, {
            key: "item",
            prependAvatar: e.prependAvatar,
            prependIcon: e.prependIcon,
            title: e.title,
            subtitle: e.subtitle,
            appendAvatar: e.appendAvatar,
            appendIcon: e.appendIcon
          }, {
            default: a.item,
            prepend: a.prepend,
            title: a.title,
            subtitle: a.subtitle,
            append: a.append
          }), I && u(Nn, {
            key: "text"
          }, {
            default: () => {
              var A;
              return [((A = a.text) == null ? void 0 : A.call(a)) ?? e.text];
            }
          }), (T = a.default) == null ? void 0 : T.call(a), a.actions && u(Fr, null, {
            default: a.actions
          }), Fn(S.value, "v-card")];
        }
      }), [[gt("ripple"), S.value && e.ripple]]);
    }), {};
  }
});
const bd = L({
  text: String,
  clickable: Boolean,
  ...ae(),
  ...Ee()
}, "VLabel"), Mi = z()({
  name: "VLabel",
  props: bd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z(() => {
      var a;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": e.clickable
        }, e.class],
        style: e.style
      }, [e.text, (a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
});
const Xr = Symbol.for("vuetify:selection-control-group"), Jr = L({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: ye,
  trueIcon: ye,
  ripple: {
    type: Boolean,
    default: !0
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: hn
  },
  ...ae(),
  ...yt(),
  ...Ee()
}, "SelectionControlGroup"), pd = L({
  ...Jr({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
z()({
  name: "VSelectionControlGroup",
  props: pd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), l = nt(), i = h(() => e.id || `v-selection-control-group-${l}`), s = h(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return je(Xr, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((o) => o());
      },
      onForceUpdate: (o) => {
        r.add(o), Ge(() => {
          r.delete(o);
        });
      }
    }), gn({
      [e.defaultsTarget]: {
        color: q(e, "color"),
        disabled: q(e, "disabled"),
        density: q(e, "density"),
        error: q(e, "error"),
        inline: q(e, "inline"),
        modelValue: a,
        multiple: h(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: s,
        falseIcon: q(e, "falseIcon"),
        trueIcon: q(e, "trueIcon"),
        readonly: q(e, "readonly"),
        ripple: q(e, "ripple"),
        type: q(e, "type"),
        valueComparator: q(e, "valueComparator")
      }
    }), Z(() => {
      var o;
      return u("div", {
        class: ["v-selection-control-group", {
          "v-selection-control-group--inline": e.inline
        }, e.class],
        style: e.style,
        role: e.type === "radio" ? "radiogroup" : void 0
      }, [(o = n.default) == null ? void 0 : o.call(n)]);
    }), {};
  }
});
const cl = L({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ae(),
  ...Jr()
}, "VSelectionControl");
function _d(e) {
  const t = Te(Xr, void 0), {
    densityClasses: n
  } = Ct(e), a = fe(e, "modelValue"), l = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), s = h(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = h({
    get() {
      const m = t ? t.modelValue.value : a.value;
      return s.value ? Xe(m).some((y) => e.valueComparator(y, l.value)) : e.valueComparator(m, l.value);
    },
    set(m) {
      if (e.readonly)
        return;
      const y = m ? l.value : i.value;
      let k = y;
      s.value && (k = m ? [...Xe(a.value), y] : Xe(a.value).filter((g) => !e.valueComparator(g, l.value))), t ? t.modelValue.value = k : a.value = k;
    }
  }), {
    textColorClasses: o,
    textColorStyles: c
  } = ft(h(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: v
  } = vt(h(() => r.value && !e.error && !e.disabled ? e.color : void 0)), f = h(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: o,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: v,
    icon: f
  };
}
const Jn = z()({
  name: "VSelectionControl",
  directives: {
    Ripple: Bn
  },
  inheritAttrs: !1,
  props: cl(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      group: l,
      densityClasses: i,
      icon: s,
      model: r,
      textColorClasses: o,
      textColorStyles: c,
      backgroundColorClasses: d,
      backgroundColorStyles: v,
      trueValue: f
    } = _d(e), m = nt(), y = h(() => e.id || `input-${m}`), k = re(!1), g = re(!1), b = N();
    l == null || l.onForceUpdate(() => {
      b.value && (b.value.checked = r.value);
    });
    function S(P) {
      k.value = !0, Wa(P.target, ":focus-visible") !== !1 && (g.value = !0);
    }
    function _() {
      k.value = !1, g.value = !1;
    }
    function w(P) {
      e.readonly && l && Ue(() => l.forceUpdate()), r.value = P.target.checked;
    }
    return Z(() => {
      var C, V;
      const P = a.label ? a.label({
        label: e.label,
        props: {
          for: y.value
        }
      }) : e.label, [x, p] = nl(n), D = u("input", B({
        ref: b,
        checked: r.value,
        disabled: !!(e.readonly || e.disabled),
        id: y.value,
        onBlur: _,
        onFocus: S,
        onInput: w,
        "aria-disabled": !!(e.readonly || e.disabled),
        type: e.type,
        value: f.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, p), null);
      return u("div", B({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": k.value,
          "v-selection-control--focus-visible": g.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, x, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", o.value],
        style: c.value
      }, [(C = a.default) == null ? void 0 : C.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: v
      }), Ve(u("div", {
        class: ["v-selection-control__input"]
      }, [((V = a.input) == null ? void 0 : V.call(a, {
        model: r,
        textColorClasses: o,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: v,
        inputNode: D,
        icon: s.value,
        props: {
          onFocus: S,
          onBlur: _,
          id: y.value
        }
      })) ?? u(ke, null, [s.value && u(Ce, {
        key: "icon",
        icon: s.value
      }, null), D])]), [[gt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), P && u(Mi, {
        for: y.value,
        clickable: !0,
        onClick: (I) => I.stopPropagation()
      }, {
        default: () => [P]
      })]);
    }), {
      isFocused: k,
      input: b
    };
  }
}), Qr = L({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ye,
    default: "$checkboxIndeterminate"
  },
  ...cl({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Kl = z()({
  name: "VCheckboxBtn",
  props: Qr(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "indeterminate"), l = fe(e, "modelValue");
    function i(o) {
      a.value && (a.value = !1);
    }
    const s = h(() => a.value ? e.indeterminateIcon : e.falseIcon), r = h(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return Z(() => {
      const o = Je(Jn.filterProps(e), ["modelValue"]);
      return u(Jn, B(o, {
        modelValue: l.value,
        "onUpdate:modelValue": [(c) => l.value = c, i],
        class: ["v-checkbox-btn", e.class],
        style: e.style,
        type: "checkbox",
        falseIcon: s.value,
        trueIcon: r.value,
        "aria-checked": a.value ? "mixed" : void 0
      }), n);
    }), {};
  }
});
function eo(e) {
  const {
    t
  } = Yn();
  function n(a) {
    let {
      name: l
    } = a;
    const i = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[l], s = e[`onClick:${l}`], r = s && i ? t(`$vuetify.input.${i}`, e.label ?? "") : void 0;
    return u(Ce, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: s
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Sd = L({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function Qe(e, t, n) {
  return z()({
    name: e,
    props: Sd({
      mode: n,
      origin: t
    }),
    setup(a, l) {
      let {
        slots: i
      } = l;
      const s = {
        onBeforeEnter(r) {
          a.origin && (r.style.transformOrigin = a.origin);
        },
        onLeave(r) {
          if (a.leaveAbsolute) {
            const {
              offsetTop: o,
              offsetLeft: c,
              offsetWidth: d,
              offsetHeight: v
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${o}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${v}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: o,
              top: c,
              left: d,
              width: v,
              height: f
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = o || "", r.style.top = c || "", r.style.left = d || "", r.style.width = v || "", r.style.height = f || "";
          }
        }
      };
      return () => {
        const r = a.group ? Zu : fn;
        return Ln(r, {
          name: a.disabled ? "" : e,
          css: !a.disabled,
          ...a.group ? void 0 : {
            mode: a.mode
          },
          ...a.disabled ? {} : s
        }, i.default);
      };
    }
  });
}
function to(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return z()({
    name: e,
    props: {
      mode: {
        type: String,
        default: n
      },
      disabled: Boolean
    },
    setup(a, l) {
      let {
        slots: i
      } = l;
      return () => Ln(fn, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function no() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = vr(`offset-${n}`);
  return {
    onBeforeEnter(s) {
      s._parent = s.parentNode, s._initialStyle = {
        transition: s.style.transition,
        overflow: s.style.overflow,
        [n]: s.style[n]
      };
    },
    onEnter(s) {
      const r = s._initialStyle;
      s.style.setProperty("transition", "none", "important"), s.style.overflow = "hidden";
      const o = `${s[a]}px`;
      s.style[n] = "0", s.offsetHeight, s.style.transition = r.transition, e && s._parent && s._parent.classList.add(e), requestAnimationFrame(() => {
        s.style[n] = o;
      });
    },
    onAfterEnter: i,
    onEnterCancelled: i,
    onLeave(s) {
      s._initialStyle = {
        transition: "",
        overflow: s.style.overflow,
        [n]: s.style[n]
      }, s.style.overflow = "hidden", s.style[n] = `${s[a]}px`, s.offsetHeight, requestAnimationFrame(() => s.style[n] = "0");
    },
    onAfterLeave: l,
    onLeaveCancelled: l
  };
  function l(s) {
    e && s._parent && s._parent.classList.remove(e), i(s);
  }
  function i(s) {
    const r = s._initialStyle[n];
    s.style.overflow = s._initialStyle.overflow, r != null && (s.style[n] = r), delete s._initialStyle;
  }
}
const wd = L({
  target: [Object, Array]
}, "v-dialog-transition"), Di = z()({
  name: "VDialogTransition",
  props: wd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var f;
        await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), l.style.visibility = "";
        const {
          x: s,
          y: r,
          sx: o,
          sy: c,
          speed: d
        } = Ns(e.target, l), v = xn(l, [{
          transform: `translate(${s}px, ${r}px) scale(${o}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: Yc
        });
        (f = Rs(l)) == null || f.forEach((m) => {
          xn(m, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Ua
          });
        }), v.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var f;
        await new Promise((m) => requestAnimationFrame(m));
        const {
          x: s,
          y: r,
          sx: o,
          sy: c,
          speed: d
        } = Ns(e.target, l);
        xn(l, [{}, {
          transform: `translate(${s}px, ${r}px) scale(${o}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: Bc
        }).finished.then(() => i()), (f = Rs(l)) == null || f.forEach((m) => {
          xn(m, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Ua
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(fn, B({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : u(fn, {
      name: "dialog-transition"
    }, n);
  }
});
function Rs(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Ns(e, t) {
  const n = xr(e), a = bi(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((b) => parseFloat(b)), [s, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let o = n.left + n.width / 2;
  s === "left" || r === "left" ? o -= n.width / 2 : (s === "right" || r === "right") && (o += n.width / 2);
  let c = n.top + n.height / 2;
  s === "top" || r === "top" ? c -= n.height / 2 : (s === "bottom" || r === "bottom") && (c += n.height / 2);
  const d = n.width / a.width, v = n.height / a.height, f = Math.max(1, d, v), m = d / f || 0, y = v / f || 0, k = a.width * a.height / (window.innerWidth * window.innerHeight), g = k > 0.12 ? Math.min(1.5, (k - 0.12) * 10 + 1) : 1;
  return {
    x: o - (l + a.left),
    y: c - (i + a.top),
    sx: m,
    sy: y,
    speed: g
  };
}
Qe("fab-transition", "center center", "out-in");
Qe("dialog-bottom-transition");
Qe("dialog-top-transition");
const Cd = Qe("fade-transition"), ao = Qe("scale-transition");
Qe("scroll-x-transition");
Qe("scroll-x-reverse-transition");
Qe("scroll-y-transition");
Qe("scroll-y-reverse-transition");
Qe("slide-x-transition");
Qe("slide-x-reverse-transition");
const lo = Qe("slide-y-transition");
Qe("slide-y-reverse-transition");
const Vd = to("expand-transition", no()), io = to("expand-x-transition", no("", !0)), xd = L({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ae(),
  ...ua({
    transition: {
      component: lo,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Pd = z()({
  name: "VMessages",
  props: xd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = h(() => Xe(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = ft(h(() => e.color));
    return Z(() => u(It, {
      transition: e.transition,
      tag: "div",
      class: ["v-messages", l.value, e.class],
      style: [i.value, e.style],
      role: "alert",
      "aria-live": "polite"
    }, {
      default: () => [e.active && a.value.map((s, r) => u("div", {
        class: "v-messages__message",
        key: `${r}-${a.value}`
      }, [n.message ? n.message({
        message: s
      }) : s]))]
    })), {};
  }
}), Oi = L({
  focused: Boolean,
  "onUpdate:focused": dt()
}, "focus");
function va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  const n = fe(e, "focused"), a = h(() => ({
    [`${t}--focused`]: n.value
  }));
  function l() {
    n.value = !0;
  }
  function i() {
    n.value = !1;
  }
  return {
    focusClasses: a,
    isFocused: n,
    focus: l,
    blur: i
  };
}
const so = Symbol.for("vuetify:form"), Md = L({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function Dd(e) {
  const t = fe(e, "modelValue"), n = h(() => e.disabled), a = h(() => e.readonly), l = re(!1), i = N([]), s = N([]);
  async function r() {
    const d = [];
    let v = !0;
    s.value = [], l.value = !0;
    for (const f of i.value) {
      const m = await f.validate();
      if (m.length > 0 && (v = !1, d.push({
        id: f.id,
        errorMessages: m
      })), !v && e.fastFail)
        break;
    }
    return s.value = d, l.value = !1, {
      valid: v,
      errors: s.value
    };
  }
  function o() {
    i.value.forEach((d) => d.reset());
  }
  function c() {
    i.value.forEach((d) => d.resetValidation());
  }
  return G(i, () => {
    let d = 0, v = 0;
    const f = [];
    for (const m of i.value)
      m.isValid === !1 ? (v++, f.push({
        id: m.id,
        errorMessages: m.errorMessages
      })) : m.isValid === !0 && d++;
    s.value = f, t.value = v > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0
  }), je(so, {
    register: (d) => {
      let {
        id: v,
        validate: f,
        reset: m,
        resetValidation: y
      } = d;
      i.value.some((k) => k.id === v) && un(`Duplicate input name "${v}"`), i.value.push({
        id: v,
        validate: f,
        reset: m,
        resetValidation: y,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((v) => v.id !== d);
    },
    update: (d, v, f) => {
      const m = i.value.find((y) => y.id === d);
      m && (m.isValid = v, m.errorMessages = f);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validateOn: q(e, "validateOn")
  }), {
    errors: s,
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validate: r,
    reset: o,
    resetValidation: c
  };
}
function ro() {
  return Te(so, null);
}
const Od = L({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...Oi()
}, "validation");
function Id(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nt();
  const a = fe(e, "modelValue"), l = h(() => e.validationValue === void 0 ? a.value : e.validationValue), i = ro(), s = N([]), r = re(!0), o = h(() => !!(Xe(a.value === "" ? null : a.value).length || Xe(l.value === "" ? null : l.value).length)), c = h(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), d = h(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), v = h(() => {
    var w;
    return (w = e.errorMessages) != null && w.length ? Xe(e.errorMessages).concat(s.value).slice(0, Math.max(0, +e.maxErrors)) : s.value;
  }), f = h(() => {
    let w = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    w === "lazy" && (w = "input lazy");
    const P = new Set((w == null ? void 0 : w.split(" ")) ?? []);
    return {
      blur: P.has("blur") || P.has("input"),
      input: P.has("input"),
      submit: P.has("submit"),
      lazy: P.has("lazy")
    };
  }), m = h(() => {
    var w;
    return e.error || (w = e.errorMessages) != null && w.length ? !1 : e.rules.length ? r.value ? s.value.length || f.value.lazy ? null : !0 : !s.value.length : !0;
  }), y = re(!1), k = h(() => ({
    [`${t}--error`]: m.value === !1,
    [`${t}--dirty`]: o.value,
    [`${t}--disabled`]: c.value,
    [`${t}--readonly`]: d.value
  })), g = h(() => e.name ?? Oe(n));
  di(() => {
    i == null || i.register({
      id: g.value,
      validate: _,
      reset: b,
      resetValidation: S
    });
  }), Ae(() => {
    i == null || i.unregister(g.value);
  }), qe(async () => {
    f.value.lazy || await _(!0), i == null || i.update(g.value, m.value, v.value);
  }), mn(() => f.value.input, () => {
    G(l, () => {
      if (l.value != null)
        _();
      else if (e.focused) {
        const w = G(() => e.focused, (P) => {
          P || _(), w();
        });
      }
    });
  }), mn(() => f.value.blur, () => {
    G(() => e.focused, (w) => {
      w || _();
    });
  }), G(m, () => {
    i == null || i.update(g.value, m.value, v.value);
  });
  function b() {
    a.value = null, Ue(S);
  }
  function S() {
    r.value = !0, f.value.lazy ? s.value = [] : _(!0);
  }
  async function _() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const P = [];
    y.value = !0;
    for (const x of e.rules) {
      if (P.length >= +(e.maxErrors ?? 1))
        break;
      const D = await (typeof x == "function" ? x : () => x)(l.value);
      if (D !== !0) {
        if (D !== !1 && typeof D != "string") {
          console.warn(`${D} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        P.push(D || "");
      }
    }
    return s.value = P, y.value = !1, r.value = w, s.value;
  }
  return {
    errorMessages: v,
    isDirty: o,
    isDisabled: c,
    isReadonly: d,
    isPristine: r,
    isValid: m,
    isValidating: y,
    reset: b,
    resetValidation: S,
    validate: _,
    validationClasses: k
  };
}
const ma = L({
  id: String,
  appendIcon: ye,
  centerAffix: {
    type: Boolean,
    default: !0
  },
  prependIcon: ye,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["horizontal", "vertical"].includes(e)
  },
  "onClick:prepend": dt(),
  "onClick:append": dt(),
  ...ae(),
  ...yt(),
  ...Od()
}, "VInput"), en = z()({
  name: "VInput",
  props: {
    ...ma()
  },
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const {
      densityClasses: i
    } = Ct(e), {
      rtlClasses: s
    } = Ut(), {
      InputIcon: r
    } = eo(e), o = nt(), c = h(() => e.id || `input-${o}`), d = h(() => `${c.value}-messages`), {
      errorMessages: v,
      isDirty: f,
      isDisabled: m,
      isReadonly: y,
      isPristine: k,
      isValid: g,
      isValidating: b,
      reset: S,
      resetValidation: _,
      validate: w,
      validationClasses: P
    } = Id(e, "v-input", c), x = h(() => ({
      id: c,
      messagesId: d,
      isDirty: f,
      isDisabled: m,
      isReadonly: y,
      isPristine: k,
      isValid: g,
      isValidating: b,
      reset: S,
      resetValidation: _,
      validate: w
    })), p = h(() => {
      var D;
      return (D = e.errorMessages) != null && D.length || !k.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return Z(() => {
      var T, A, M, Y;
      const D = !!(a.prepend || e.prependIcon), C = !!(a.append || e.appendIcon), V = p.value.length > 0, I = !e.hideDetails || e.hideDetails === "auto" && (V || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, s.value, P.value, e.class],
        style: e.style
      }, [D && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(T = a.prepend) == null ? void 0 : T.call(a, x.value), e.prependIcon && u(r, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(A = a.default) == null ? void 0 : A.call(a, x.value)]), C && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(r, {
        key: "append-icon",
        name: "append"
      }, null), (M = a.append) == null ? void 0 : M.call(a, x.value)]), I && u("div", {
        class: "v-input__details"
      }, [u(Pd, {
        id: d.value,
        active: V,
        messages: p.value
      }, {
        message: a.message
      }), (Y = a.details) == null ? void 0 : Y.call(a, x.value)])]);
    }), {
      reset: S,
      resetValidation: _,
      validate: w,
      isValid: g,
      errorMessages: v
    };
  }
}), Td = L({
  ...ma(),
  ...Je(Qr(), ["inline"])
}, "VCheckbox"), Ad = z()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Td(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = fe(e, "modelValue"), {
      isFocused: i,
      focus: s,
      blur: r
    } = va(e), o = nt(), c = h(() => e.id || `checkbox-${o}`);
    return Z(() => {
      const [d, v] = nl(n), f = en.filterProps(e), m = Kl.filterProps(e);
      return u(en, B({
        class: ["v-checkbox", e.class]
      }, d, f, {
        modelValue: l.value,
        "onUpdate:modelValue": (y) => l.value = y,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (y) => {
          let {
            id: k,
            messagesId: g,
            isDisabled: b,
            isReadonly: S
          } = y;
          return u(Kl, B(m, {
            id: k.value,
            "aria-describedby": g.value,
            disabled: b.value,
            readonly: S.value
          }, v, {
            modelValue: l.value,
            "onUpdate:modelValue": (_) => l.value = _,
            onFocus: s,
            onBlur: r
          }), a);
        }
      });
    }), {};
  }
});
const dl = ["sm", "md", "lg", "xl", "xxl"], Ed = Symbol.for("vuetify:display");
function oo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  const n = Te(Ed);
  if (!n)
    throw new Error("Could not find Vuetify display injection");
  const a = h(() => {
    if (!e.mobileBreakpoint)
      return n.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < i;
  }), l = h(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: a
  };
}
const uo = (() => dl.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}))(), co = (() => dl.reduce((e, t) => {
  const n = "offset" + ia(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}))(), fo = (() => dl.reduce((e, t) => {
  const n = "order" + ia(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}))(), Ys = {
  col: Object.keys(uo),
  offset: Object.keys(co),
  order: Object.keys(fo)
};
function Ld(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const Fd = ["auto", "start", "end", "center", "baseline", "stretch"], Rd = L({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...uo,
  offset: {
    type: [String, Number],
    default: null
  },
  ...co,
  order: {
    type: [String, Number],
    default: null
  },
  ...fo,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Fd.includes(e)
  },
  ...ae(),
  ...Re()
}, "VCol"), we = z()({
  name: "VCol",
  props: Rd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = h(() => {
      const l = [];
      let i;
      for (i in Ys)
        Ys[i].forEach((r) => {
          const o = e[r], c = Ld(i, r, o);
          c && l.push(c);
        });
      const s = l.some((r) => r.startsWith("v-col-"));
      return l.push({
        // Default to .v-col if no other col-{bp}-* classes generated nor `cols` specified.
        "v-col": !s || !e.cols,
        [`v-col-${e.cols}`]: e.cols,
        [`offset-${e.offset}`]: e.offset,
        [`order-${e.order}`]: e.order,
        [`align-self-${e.alignSelf}`]: e.alignSelf
      }), l;
    });
    return () => {
      var l;
      return Ln(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), Ii = ["start", "end", "center"], vo = ["space-between", "space-around", "space-evenly"];
function Ti(e, t) {
  return dl.reduce((n, a) => {
    const l = e + ia(a);
    return n[l] = t(), n;
  }, {});
}
const Nd = [...Ii, "baseline", "stretch"], mo = (e) => Nd.includes(e), ho = Ti("align", () => ({
  type: String,
  default: null,
  validator: mo
})), Yd = [...Ii, ...vo], go = (e) => Yd.includes(e), yo = Ti("justify", () => ({
  type: String,
  default: null,
  validator: go
})), Bd = [...Ii, ...vo, "stretch"], ko = (e) => Bd.includes(e), bo = Ti("alignContent", () => ({
  type: String,
  default: null,
  validator: ko
})), Bs = {
  align: Object.keys(ho),
  justify: Object.keys(yo),
  alignContent: Object.keys(bo)
}, $d = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Wd(e, t, n) {
  let a = $d[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const Ud = L({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: mo
  },
  ...ho,
  justify: {
    type: String,
    default: null,
    validator: go
  },
  ...yo,
  alignContent: {
    type: String,
    default: null,
    validator: ko
  },
  ...bo,
  ...ae(),
  ...Re()
}, "VRow"), Ne = z()({
  name: "VRow",
  props: Ud(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = h(() => {
      const l = [];
      let i;
      for (i in Bs)
        Bs[i].forEach((s) => {
          const r = e[s], o = Wd(i, s, r);
          o && l.push(o);
        });
      return l.push({
        "v-row--no-gutters": e.noGutters,
        "v-row--dense": e.dense,
        [`align-${e.align}`]: e.align,
        [`justify-${e.justify}`]: e.justify,
        [`align-content-${e.alignContent}`]: e.alignContent
      }), l;
    });
    return () => {
      var l;
      return Ln(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), Hd = nn("v-spacer", "div", "VSpacer");
function fl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = N(), a = N();
  if ($e) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Ae(() => {
      l.disconnect();
    }), G(n, (i, s) => {
      s && (l.unobserve(Na(s)), a.value = void 0), i && l.observe(Na(i));
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: vi(a)
  };
}
const zd = L({
  bgColor: String,
  color: String,
  indeterminate: [Boolean, String],
  modelValue: {
    type: [Number, String],
    default: 0
  },
  rotate: {
    type: [Number, String],
    default: 0
  },
  width: {
    type: [Number, String],
    default: 4
  },
  ...ae(),
  ...ra(),
  ...Re({
    tag: "div"
  }),
  ...Ee()
}, "VProgressCircular"), Ai = z()({
  name: "VProgressCircular",
  props: zd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = N(), {
      themeClasses: s
    } = We(e), {
      sizeClasses: r,
      sizeStyles: o
    } = oa(e), {
      textColorClasses: c,
      textColorStyles: d
    } = ft(q(e, "color")), {
      textColorClasses: v,
      textColorStyles: f
    } = ft(q(e, "bgColor")), {
      intersectionRef: m,
      isIntersecting: y
    } = $r(), {
      resizeRef: k,
      contentRect: g
    } = fl(), b = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = h(() => Number(e.width)), _ = h(() => o.value ? Number(e.size) : g.value ? g.value.width : Math.max(S.value, 32)), w = h(() => a / (1 - S.value / _.value) * 2), P = h(() => S.value / _.value * w.value), x = h(() => J((100 - b.value) / 100 * l));
    return ze(() => {
      m.value = i.value, k.value = i.value;
    }), Z(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": y.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, s.value, r.value, c.value, e.class],
      style: [o.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : b.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${w.value} ${w.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", v.value],
        style: f.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": P.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": x.value
      }, null)]), n.default && u("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: b.value
      })])]
    })), {};
  }
}), jd = L({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...ma(),
  ...cl()
}, "VSwitch"), Gd = z()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: jd(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = fe(e, "indeterminate"), i = fe(e, "modelValue"), {
      loaderClasses: s
    } = il(e), {
      isFocused: r,
      focus: o,
      blur: c
    } = va(e), d = N(), v = h(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = nt(), m = h(() => e.id || `switch-${f}`);
    function y() {
      l.value && (l.value = !1);
    }
    function k(g) {
      var b, S;
      g.stopPropagation(), g.preventDefault(), (S = (b = d.value) == null ? void 0 : b.input) == null || S.click();
    }
    return Z(() => {
      const [g, b] = nl(n), S = en.filterProps(e), _ = Jn.filterProps(e);
      return u(en, B({
        class: ["v-switch", {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, s.value, e.class]
      }, g, S, {
        modelValue: i.value,
        "onUpdate:modelValue": (w) => i.value = w,
        id: m.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (w) => {
          let {
            id: P,
            messagesId: x,
            isDisabled: p,
            isReadonly: D,
            isValid: C
          } = w;
          return u(Jn, B({
            ref: d
          }, _, {
            modelValue: i.value,
            "onUpdate:modelValue": [(V) => i.value = V, y],
            id: P.value,
            "aria-describedby": x.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: p.value,
            readonly: D.value,
            onFocus: o,
            onBlur: c
          }, b), {
            ...a,
            default: (V) => {
              let {
                backgroundColorClasses: I,
                backgroundColorStyles: T
              } = V;
              return u("div", {
                class: ["v-switch__track", ...I.value],
                style: T.value,
                onClick: k
              }, null);
            },
            input: (V) => {
              let {
                inputNode: I,
                icon: T,
                backgroundColorClasses: A,
                backgroundColorStyles: M
              } = V;
              return u(ke, null, [I, u("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": T || e.loading
                }, e.inset ? void 0 : A.value],
                style: e.inset ? void 0 : M.value
              }, [u(ao, null, {
                default: () => [e.loading ? u(Pi, {
                  name: "v-switch",
                  active: !0,
                  color: C.value === !1 ? void 0 : v.value
                }, {
                  default: (Y) => a.loader ? a.loader(Y) : u(Ai, {
                    active: Y.isActive,
                    color: Y.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : T && u(Ce, {
                  key: T,
                  icon: T,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), qd = /* @__PURE__ */ Le({
  __name: "EasyCheckboxGroup",
  props: {
    class: { default: "ml-auto" },
    cols: { default: 12 },
    items: {},
    label: { default: "" },
    switch: { default: void 0 }
  },
  emits: ["validated", "invalidated", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(
      new ec({
        label: n.label,
        items: n.items,
        switch: n.switch,
        class: n.class
      })
    ), i = h(() => !ie(n.switch));
    function s(o, c = !1) {
      o ? c || l.value.addAllItems() : c || l.value.clear(), a("update:modelValue", l.value.value);
    }
    function r(o, c) {
      var v;
      const d = l.value.find(c);
      !o && !ie(d) ? (l.value.removeItem(d), !ie(l.value.switch) && ((v = l.value.switch) != null && v.value) && (l.value.switch.value = !1, s(!1, !0))) : ie(d) && (l.value.addItem(c.name, c.value), !ie(l.value.switch) && l.value.value.length === l.value.items.length && (l.value.switch.value = !0, s(!0, !0))), a("update:modelValue", l.value.value);
    }
    return (o, c) => (ee(), se(fa, { elevation: "0" }, {
      default: R(() => [
        u(wi, null, {
          default: R(() => [
            Me(Ze(l.value.label) + " ", 1),
            i.value ? (ee(), se(Gd, B({
              key: 0,
              modelValue: l.value.switch.value,
              "onUpdate:modelValue": c[0] || (c[0] = (d) => l.value.switch.value = d)
            }, l.value.switch.props(), { "onUpdate:modelValue": s }), null, 16, ["modelValue"])) : De("", !0)
          ]),
          _: 1
        }),
        u(Nn, null, {
          default: R(() => [
            u(Ne, null, {
              default: R(() => [
                (ee(!0), Xt(ke, null, Tn(l.value.items, (d, v) => (ee(), se(we, {
                  key: v,
                  cols: 12,
                  md: d.cols
                }, {
                  default: R(() => [
                    u(Ad, B({
                      modelValue: l.value.items[v].value,
                      "onUpdate:modelValue": (f) => l.value.items[v].value = f
                    }, d.props(), {
                      "onUpdate:modelValue": (f) => r(f, d)
                    }), null, 16, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["md"]))), 128))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Kd = L({
  ...cl({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), Zd = z()({
  name: "VRadio",
  props: Kd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z(() => u(Jn, B(e, {
      class: ["v-radio", e.class],
      style: e.style,
      type: "radio"
    }), n)), {};
  }
}), Xd = {
  key: 0,
  class: "mb-3 mt-4"
}, Jd = {
  key: 1,
  class: "mb-3 mt-4"
}, ha = /* @__PURE__ */ Le({
  __name: "EasyInput",
  props: {
    field: {
      type: Object,
      required: !0
    },
    fields: {
      type: Array,
      required: !0
    },
    cols: {
      type: Number,
      required: !1,
      default: 12
    }
  },
  emits: [
    "updated",
    "validated",
    "focus",
    "blur",
    "invalidated",
    "click:clear",
    "click:prepend",
    "click:prependInner",
    "click:append",
    "click:appendInner"
  ],
  setup(e, { emit: t }) {
    var S;
    const n = {
      mask: "",
      eager: !0
    }, a = e, l = t, i = N(a.field), s = ze(() => i.value = a.field), r = En({
      ...n,
      mask: (a == null ? void 0 : a.field) instanceof tc ? (S = a.field) == null ? void 0 : S.masking : ""
    }), o = h(() => {
      var _;
      return (_ = i.value) == null ? void 0 : _.validationRules();
    }), c = h(() => {
      var _, w, P;
      return !ie((_ = a.field) == null ? void 0 : _.prepend_icon) && !ie((P = (w = a.field) == null ? void 0 : w.prepend_icon) == null ? void 0 : P.icon);
    }), d = h(() => {
      var _, w, P;
      return !ie((_ = a.field) == null ? void 0 : _.append_icon) && !ie((P = (w = a.field) == null ? void 0 : w.append_icon) == null ? void 0 : P.icon);
    }), v = h(() => {
      var _, w, P;
      return !ie((_ = a.field) == null ? void 0 : _.clear_icon) && !ie((P = (w = a.field) == null ? void 0 : w.clear_icon) == null ? void 0 : P.icon);
    }), f = h(
      () => {
        var _, w, P;
        return !ie((_ = a.field) == null ? void 0 : _.prepend_inner_icon) && !ie((P = (w = a.field) == null ? void 0 : w.prepend_inner_icon) == null ? void 0 : P.icon);
      }
    ), m = h(
      () => {
        var _, w, P;
        return !ie((_ = a.field) == null ? void 0 : _.append_inner_icon) && !ie((P = (w = a.field) == null ? void 0 : w.append_inner_icon) == null ? void 0 : P.icon);
      }
    ), y = h(() => {
      var _, w, P;
      return !(ie((_ = a == null ? void 0 : a.field) == null ? void 0 : _.component) || ((w = a == null ? void 0 : a.field) == null ? void 0 : w.type) === "hidden" || (P = a == null ? void 0 : a.field) != null && P.loading);
    });
    function k() {
      l("updated", i.value);
    }
    function g() {
      i.value.validate(), l("validated", i.value.name);
    }
    function b() {
      i.value.invalidate(), l("invalidated", i.value.name);
    }
    return Ae(() => {
      s();
    }), qe(() => {
      var _;
      (_ = i.value) == null || _.isLoading(!1);
    }), (_, w) => {
      var p, D;
      const P = Qt("EasyIcon"), x = gt("maska");
      return y.value ? Ve((ee(), se(mr(Oe(lc)((p = e.field) == null ? void 0 : p.component)), B({
        key: 0,
        modelValue: i.value.value,
        "onUpdate:modelValue": w[5] || (w[5] = (C) => i.value.value = C)
      }, (D = e.field) == null ? void 0 : D.props(), {
        rules: o.value,
        fields: a.fields ?? [],
        "onUpdate:modelValue": k,
        onValidated: g,
        onInvalidated: b,
        "onClick:clear": w[6] || (w[6] = (C) => l("click:clear", C)),
        "onClick:prepend": w[7] || (w[7] = (C) => l("click:prepend", C)),
        "onClick:prependInner": w[8] || (w[8] = (C) => l("click:prependInner", C)),
        "onClick:append": w[9] || (w[9] = (C) => l("click:append", C)),
        "onClick:appendInner": w[10] || (w[10] = (C) => l("click:appendInner", C))
      }), mi({
        default: R(() => [
          e.field.component == "v-radio-group" ? (ee(), Xt("p", Xd, [
            (ee(!0), Xt(ke, null, Tn(e.field.items, (C, V) => (ee(), se(Zd, B({ key: V }, C.props()), null, 16))), 128))
          ])) : De("", !0),
          e.field.component == "h2" ? (ee(), Xt("p", Jd, Ze(i.value.value), 1)) : De("", !0)
        ]),
        _: 2
      }, [
        v.value ? {
          name: "clear",
          fn: R(() => {
            var C;
            return [
              u(P, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.clear_icon,
                onClick: w[0] || (w[0] = (V) => l("click:clear", V))
              }, null, 8, ["icon"])
            ];
          }),
          key: "0"
        } : void 0,
        d.value ? {
          name: "append",
          fn: R(() => {
            var C;
            return [
              u(P, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.append_icon,
                onClick: w[1] || (w[1] = (V) => l("click:append", V))
              }, null, 8, ["icon"])
            ];
          }),
          key: "1"
        } : void 0,
        m.value ? {
          name: "append-inner",
          fn: R(() => {
            var C;
            return [
              u(P, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.append_inner_icon,
                onClick: w[2] || (w[2] = (V) => l("click:appendInner", V))
              }, null, 8, ["icon"])
            ];
          }),
          key: "2"
        } : void 0,
        c.value ? {
          name: "prepend",
          fn: R(() => {
            var C;
            return [
              u(P, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.prepend_icon,
                onClick: w[3] || (w[3] = (V) => l("click:prepend", V))
              }, null, 8, ["icon"])
            ];
          }),
          key: "3"
        } : void 0,
        f.value ? {
          name: "prepend-inner",
          fn: R(() => {
            var C;
            return [
              u(P, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.prepend_inner_icon,
                onClick: w[4] || (w[4] = (V) => l("click:prependInner", V))
              }, null, 8, ["icon"])
            ];
          }),
          key: "4"
        } : void 0
      ]), 1040, ["modelValue", "rules", "fields"])), [
        [x, void 0, r]
      ]) : De("", !0);
    };
  }
});
const Qd = L({
  color: {
    type: Object
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  height: {
    type: [Number, String],
    default: 150
  },
  width: {
    type: [Number, String],
    default: 300
  },
  ...ae()
}, "VColorPickerCanvas"), ef = St({
  name: "VColorPickerCanvas",
  props: Qd(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = re(!1), l = N(), i = re(parseFloat(e.width)), s = re(parseFloat(e.height)), r = N({
      x: 0,
      y: 0
    }), o = h({
      get: () => r.value,
      set(g) {
        var _, w;
        if (!l.value)
          return;
        const {
          x: b,
          y: S
        } = g;
        r.value = g, n("update:color", {
          h: ((_ = e.color) == null ? void 0 : _.h) ?? 0,
          s: rt(b, 0, i.value) / i.value,
          v: 1 - rt(S, 0, s.value) / s.value,
          a: ((w = e.color) == null ? void 0 : w.a) ?? 1
        });
      }
    }), c = h(() => {
      const {
        x: g,
        y: b
      } = o.value, S = parseInt(e.dotSize, 10) / 2;
      return {
        width: J(e.dotSize),
        height: J(e.dotSize),
        transform: `translate(${J(g - S)}, ${J(b - S)})`
      };
    }), {
      resizeRef: d
    } = fl((g) => {
      var _;
      if (!((_ = d.value) != null && _.offsetParent))
        return;
      const {
        width: b,
        height: S
      } = g[0].contentRect;
      i.value = b, s.value = S;
    });
    function v(g, b, S) {
      const {
        left: _,
        top: w,
        width: P,
        height: x
      } = S;
      o.value = {
        x: rt(g - _, 0, P),
        y: rt(b - w, 0, x)
      };
    }
    function f(g) {
      g.type === "mousedown" && g.preventDefault(), !e.disabled && (m(g), window.addEventListener("mousemove", m), window.addEventListener("mouseup", y), window.addEventListener("touchmove", m), window.addEventListener("touchend", y));
    }
    function m(g) {
      if (e.disabled || !l.value)
        return;
      a.value = !0;
      const b = hc(g);
      v(b.clientX, b.clientY, l.value.getBoundingClientRect());
    }
    function y() {
      window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", y), window.removeEventListener("touchmove", m), window.removeEventListener("touchend", y);
    }
    function k() {
      var w;
      if (!l.value)
        return;
      const g = l.value, b = g.getContext("2d");
      if (!b)
        return;
      const S = b.createLinearGradient(0, 0, g.width, 0);
      S.addColorStop(0, "hsla(0, 0%, 100%, 1)"), S.addColorStop(1, `hsla(${((w = e.color) == null ? void 0 : w.h) ?? 0}, 100%, 50%, 1)`), b.fillStyle = S, b.fillRect(0, 0, g.width, g.height);
      const _ = b.createLinearGradient(0, 0, 0, g.height);
      _.addColorStop(0, "hsla(0, 0%, 100%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), b.fillStyle = _, b.fillRect(0, 0, g.width, g.height);
    }
    return G(() => {
      var g;
      return (g = e.color) == null ? void 0 : g.h;
    }, k, {
      immediate: !0
    }), G(() => [i.value, s.value], (g, b) => {
      k(), r.value = {
        x: o.value.x * g[0] / b[0],
        y: o.value.y * g[1] / b[1]
      };
    }, {
      flush: "post"
    }), G(() => e.color, () => {
      if (a.value) {
        a.value = !1;
        return;
      }
      r.value = e.color ? {
        x: e.color.s * i.value,
        y: (1 - e.color.v) * s.value
      } : {
        x: 0,
        y: 0
      };
    }, {
      deep: !0,
      immediate: !0
    }), qe(() => k()), Z(() => u("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: f,
      onTouchstartPassive: f
    }, [u("canvas", {
      ref: l,
      width: i.value,
      height: s.value
    }, null), e.color && u("div", {
      class: ["v-color-picker-canvas__dot", {
        "v-color-picker-canvas__dot--disabled": e.disabled
      }],
      style: c.value
    }, null)])), {};
  }
});
const po = L({
  divided: Boolean,
  ...yn(),
  ...ae(),
  ...yt(),
  ...$t(),
  ...at(),
  ...Re(),
  ...Ee(),
  ...Bt()
}, "VBtnGroup"), $s = z()({
  name: "VBtnGroup",
  props: po(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      densityClasses: l
    } = Ct(e), {
      borderClasses: i
    } = kn(e), {
      elevationClasses: s
    } = Wt(e), {
      roundedClasses: r
    } = lt(e);
    gn({
      VBtn: {
        height: "auto",
        color: q(e, "color"),
        density: q(e, "density"),
        flat: !0,
        variant: q(e, "variant")
      }
    }), Z(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, s.value, r.value, e.class],
      style: e.style
    }, n));
  }
}), _o = L({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), So = L({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function wo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Fe("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = nt();
  je(Symbol.for(`${t.description}:id`), l);
  const i = Te(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const s = q(e, "value"), r = h(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: s,
    disabled: r
  }, a), Ae(() => {
    i.unregister(l);
  });
  const o = h(() => i.isSelected(l)), c = h(() => o.value && [i.selectedClass.value, e.selectedClass]);
  return G(o, (d) => {
    a.emit("group:selected", {
      value: d
    });
  }), {
    id: l,
    isSelected: o,
    toggle: () => i.select(l, !o.value),
    select: (d) => i.select(l, d),
    selectedClass: c,
    value: s,
    disabled: r,
    group: i
  };
}
function Co(e, t) {
  let n = !1;
  const a = En([]), l = fe(e, "modelValue", [], (f) => f == null ? [] : Vo(a, Xe(f)), (f) => {
    const m = nf(a, f);
    return e.multiple ? m : m[0];
  }), i = Fe("useGroup");
  function s(f, m) {
    const y = f, k = Symbol.for(`${t.description}:id`), b = Ia(k, i == null ? void 0 : i.vnode).indexOf(m);
    b > -1 ? a.splice(b, 0, y) : a.push(y);
  }
  function r(f) {
    if (n)
      return;
    o();
    const m = a.findIndex((y) => y.id === f);
    a.splice(m, 1);
  }
  function o() {
    const f = a.find((m) => !m.disabled);
    f && e.mandatory === "force" && !l.value.length && (l.value = [f.id]);
  }
  qe(() => {
    o();
  }), Ae(() => {
    n = !0;
  });
  function c(f, m) {
    const y = a.find((k) => k.id === f);
    if (!(m && (y != null && y.disabled)))
      if (e.multiple) {
        const k = l.value.slice(), g = k.findIndex((S) => S === f), b = ~g;
        if (m = m ?? !b, b && e.mandatory && k.length <= 1 || !b && e.max != null && k.length + 1 > e.max)
          return;
        g < 0 && m ? k.push(f) : g >= 0 && !m && k.splice(g, 1), l.value = k;
      } else {
        const k = l.value.includes(f);
        if (e.mandatory && k)
          return;
        l.value = m ?? !k ? [f] : [];
      }
  }
  function d(f) {
    if (e.multiple && un('This method is not supported when using "multiple" prop'), l.value.length) {
      const m = l.value[0], y = a.findIndex((b) => b.id === m);
      let k = (y + f) % a.length, g = a[k];
      for (; g.disabled && k !== y; )
        k = (k + f) % a.length, g = a[k];
      if (g.disabled)
        return;
      l.value = [a[k].id];
    } else {
      const m = a.find((y) => !y.disabled);
      m && (l.value = [m.id]);
    }
  }
  const v = {
    register: s,
    unregister: r,
    selected: l,
    select: c,
    disabled: q(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (f) => l.value.includes(f),
    selectedClass: h(() => e.selectedClass),
    items: h(() => a),
    getItemIndex: (f) => tf(a, f)
  };
  return je(t, v), v;
}
function tf(e, t) {
  const n = Vo(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Vo(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((s) => hn(a, s.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? n.push(l.id) : i != null && n.push(i.id);
  }), n;
}
function nf(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value != null ? i.value : l);
    }
  }), n;
}
const xo = Symbol.for("vuetify:v-btn-toggle"), af = L({
  ...po(),
  ..._o()
}, "VBtnToggle");
z()({
  name: "VBtnToggle",
  props: af(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isSelected: a,
      next: l,
      prev: i,
      select: s,
      selected: r
    } = Co(e, xo);
    return Z(() => {
      const o = $s.filterProps(e);
      return u($s, B({
        class: ["v-btn-toggle", e.class]
      }, o, {
        style: e.style
      }), {
        default: () => {
          var c;
          return [(c = n.default) == null ? void 0 : c.call(n, {
            isSelected: a,
            next: l,
            prev: i,
            select: s,
            selected: r
          })];
        }
      });
    }), {
      next: l,
      prev: i,
      select: s
    };
  }
});
function lf(e, t) {
  G(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && Ue(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const sf = L({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: xo
  },
  flat: Boolean,
  icon: [Boolean, String, Function, Object],
  prependIcon: ye,
  appendIcon: ye,
  block: Boolean,
  slim: Boolean,
  stacked: Boolean,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  ...yn(),
  ...ae(),
  ...yt(),
  ...Nt(),
  ...$t(),
  ...So(),
  ...xi(),
  ...ca(),
  ...sl(),
  ...at(),
  ...ul(),
  ...ra(),
  ...Re({
    tag: "button"
  }),
  ...Ee(),
  ...Bt({
    variant: "elevated"
  })
}, "VBtn"), Ye = z()({
  name: "VBtn",
  directives: {
    Ripple: Bn
  },
  props: sf(),
  emits: {
    "group:selected": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = We(e), {
      borderClasses: i
    } = kn(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: o
    } = Rn(e), {
      densityClasses: c
    } = Ct(e), {
      dimensionStyles: d
    } = Yt(e), {
      elevationClasses: v
    } = Wt(e), {
      loaderClasses: f
    } = il(e), {
      locationStyles: m
    } = da(e), {
      positionClasses: y
    } = rl(e), {
      roundedClasses: k
    } = lt(e), {
      sizeClasses: g,
      sizeStyles: b
    } = oa(e), S = wo(e, e.symbol, !1), _ = ol(e, n), w = h(() => {
      var C;
      return e.active !== void 0 ? e.active : _.isLink.value ? (C = _.isActive) == null ? void 0 : C.value : S == null ? void 0 : S.isSelected.value;
    }), P = h(() => (S == null ? void 0 : S.disabled.value) || e.disabled), x = h(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), p = h(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function D(C) {
      var V;
      P.value || _.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || n.target === "_blank") || ((V = _.navigate) == null || V.call(_, C), S == null || S.toggle());
    }
    return lf(_, S == null ? void 0 : S.select), Z(() => {
      var M, Y;
      const C = _.isLink.value ? "a" : e.tag, V = !!(e.prependIcon || a.prepend), I = !!(e.appendIcon || a.append), T = !!(e.icon && e.icon !== !0), A = (S == null ? void 0 : S.isSelected.value) && (!_.isLink.value || ((M = _.isActive) == null ? void 0 : M.value)) || !S || ((Y = _.isActive) == null ? void 0 : Y.value);
      return Ve(u(C, {
        type: C === "a" ? void 0 : "button",
        class: ["v-btn", S == null ? void 0 : S.selectedClass.value, {
          "v-btn--active": w.value,
          "v-btn--block": e.block,
          "v-btn--disabled": P.value,
          "v-btn--elevated": x.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, A ? s.value : void 0, c.value, v.value, f.value, y.value, k.value, g.value, o.value, e.class],
        style: [A ? r.value : void 0, d.value, m.value, b.value, e.style],
        disabled: P.value || void 0,
        href: _.href.value,
        onClick: D,
        value: p.value
      }, {
        default: () => {
          var Q;
          return [Fn(!0, "v-btn"), !e.icon && V && u("span", {
            key: "prepend",
            class: "v-btn__prepend"
          }, [a.prepend ? u(xe, {
            key: "prepend-defaults",
            disabled: !e.prependIcon,
            defaults: {
              VIcon: {
                icon: e.prependIcon
              }
            }
          }, a.prepend) : u(Ce, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && T ? u(Ce, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(xe, {
            key: "content-defaults",
            disabled: !T,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var le;
              return [((le = a.default) == null ? void 0 : le.call(a)) ?? e.text];
            }
          })]), !e.icon && I && u("span", {
            key: "append",
            class: "v-btn__append"
          }, [a.append ? u(xe, {
            key: "append-defaults",
            disabled: !e.appendIcon,
            defaults: {
              VIcon: {
                icon: e.appendIcon
              }
            }
          }, a.append) : u(Ce, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((Q = a.loader) == null ? void 0 : Q.call(a)) ?? u(Ai, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "23",
            width: "2"
          }, null)])];
        }
      }), [[gt("ripple"), !P.value && e.ripple, null]]);
    }), {};
  }
});
function rf(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function of(e, t) {
  if (t == null || typeof t == "string") {
    const n = Tr(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return ln(t, ["r", "g", "b"]) ? n = Ft(e) : ln(t, ["h", "s", "l"]) ? n = Pr(e) : ln(t, ["h", "s", "v"]) && (n = e), rf(n, !ln(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Pn = {
  h: 0,
  s: 0,
  v: 1,
  a: 1
}, Zl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "R",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.r),
    getColor: (e, t) => ({
      ...e,
      r: Number(t)
    })
  }, {
    label: "G",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.g),
    getColor: (e, t) => ({
      ...e,
      g: Number(t)
    })
  }, {
    label: "B",
    max: 255,
    step: 1,
    getValue: (e) => Math.round(e.b),
    getColor: (e, t) => ({
      ...e,
      b: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: Ft,
  from: al
};
var dr;
const uf = {
  ...Zl,
  inputs: (dr = Zl.inputs) == null ? void 0 : dr.slice(0, 3)
}, Xl = {
  inputProps: {
    type: "number",
    min: 0
  },
  inputs: [{
    label: "H",
    max: 360,
    step: 1,
    getValue: (e) => Math.round(e.h),
    getColor: (e, t) => ({
      ...e,
      h: Number(t)
    })
  }, {
    label: "S",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.s * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      s: Number(t)
    })
  }, {
    label: "L",
    max: 1,
    step: 0.01,
    getValue: (e) => Math.round(e.l * 100) / 100,
    getColor: (e, t) => ({
      ...e,
      l: Number(t)
    })
  }, {
    label: "A",
    max: 1,
    step: 0.01,
    getValue: (e) => {
      let {
        a: t
      } = e;
      return t != null ? Math.round(t * 100) / 100 : 1;
    },
    getColor: (e, t) => ({
      ...e,
      a: Number(t)
    })
  }],
  to: Pr,
  from: pi
}, cf = {
  ...Xl,
  inputs: Xl.inputs.slice(0, 3)
}, Po = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, t) => t
  }],
  to: Tr,
  from: Ir
}, df = {
  ...Po,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t
  }]
}, cn = {
  rgb: uf,
  rgba: Zl,
  hsl: cf,
  hsla: Xl,
  hex: df,
  hexa: Po
}, ff = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", n, null), u("span", null, [t])]);
}, vf = L({
  color: Object,
  disabled: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(cn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(cn),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(cn).includes(t))
  },
  ...ae()
}, "VColorPickerEdit"), mf = St({
  name: "VColorPickerEdit",
  props: vf(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = h(() => e.modes.map((i) => ({
      ...cn[i],
      name: i
    }))), l = h(() => {
      var r;
      const i = a.value.find((o) => o.name === e.mode);
      if (!i)
        return [];
      const s = e.color ? i.to(e.color) : null;
      return (r = i.inputs) == null ? void 0 : r.map((o) => {
        let {
          getValue: c,
          getColor: d,
          ...v
        } = o;
        return {
          ...i.inputProps,
          ...v,
          disabled: e.disabled,
          value: s && c(s),
          onChange: (f) => {
            const m = f.target;
            m && n("update:color", i.from(d(s ?? Pn, m.value)));
          }
        };
      });
    });
    return Z(() => {
      var i;
      return u("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((s) => u(ff, s, null)), a.value.length > 1 && u(Ye, {
        icon: "$unfold",
        size: "x-small",
        variant: "plain",
        onClick: () => {
          const s = a.value.findIndex((r) => r.name === e.mode);
          n("update:mode", a.value[(s + 1) % a.value.length].name);
        }
      }, null)]);
    }), {};
  }
});
const Ei = Symbol.for("vuetify:v-slider");
function hf(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function gf(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const yf = L({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  readonly: {
    type: Boolean,
    default: null
  },
  max: {
    type: [Number, String],
    default: 100
  },
  min: {
    type: [Number, String],
    default: 0
  },
  step: {
    type: [Number, String],
    default: 0
  },
  thumbColor: String,
  thumbLabel: {
    type: [Boolean, String],
    default: void 0,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  thumbSize: {
    type: [Number, String],
    default: 20
  },
  showTicks: {
    type: [Boolean, String],
    default: !1,
    validator: (e) => typeof e == "boolean" || e === "always"
  },
  ticks: {
    type: [Array, Object]
  },
  tickSize: {
    type: [Number, String],
    default: 2
  },
  color: String,
  trackColor: String,
  trackFillColor: String,
  trackSize: {
    type: [Number, String],
    default: 4
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (e) => ["vertical", "horizontal"].includes(e)
  },
  reverse: Boolean,
  ...at(),
  ...$t({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), kf = (e) => {
  const t = h(() => parseFloat(e.min)), n = h(() => parseFloat(e.max)), a = h(() => +e.step > 0 ? parseFloat(e.step) : 0), l = h(() => Math.max(vs(a.value), vs(t.value)));
  function i(s) {
    if (s = parseFloat(s), a.value <= 0)
      return s;
    const r = rt(s, t.value, n.value), o = t.value % a.value, c = Math.round((r - o) / a.value) * a.value + o;
    return parseFloat(Math.min(c, n.value).toFixed(l.value));
  }
  return {
    min: t,
    max: n,
    step: a,
    decimals: l,
    roundValue: i
  };
}, bf = (e) => {
  let {
    props: t,
    steps: n,
    onSliderStart: a,
    onSliderMove: l,
    onSliderEnd: i,
    getActiveThumb: s
  } = e;
  const {
    isRtl: r
  } = Ut(), o = q(t, "reverse"), c = h(() => t.direction === "vertical"), d = h(() => c.value !== o.value), {
    min: v,
    max: f,
    step: m,
    decimals: y,
    roundValue: k
  } = n, g = h(() => parseInt(t.thumbSize, 10)), b = h(() => parseInt(t.tickSize, 10)), S = h(() => parseInt(t.trackSize, 10)), _ = h(() => (f.value - v.value) / m.value), w = q(t, "disabled"), P = h(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), x = h(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), p = h(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), D = re(!1), C = re(0), V = N(), I = N();
  function T(U) {
    var ss;
    const de = t.direction === "vertical", jt = de ? "top" : "left", Pt = de ? "height" : "width", _a = de ? "clientY" : "clientX", {
      [jt]: Sa,
      [Pt]: Pl
    } = (ss = V.value) == null ? void 0 : ss.$el.getBoundingClientRect(), Ml = gf(U, _a);
    let Dl = Math.min(Math.max((Ml - Sa - C.value) / Pl, 0), 1) || 0;
    return (de ? d.value : d.value !== r.value) && (Dl = 1 - Dl), k(v.value + Dl * (f.value - v.value));
  }
  const A = (U) => {
    i({
      value: T(U)
    }), D.value = !1, C.value = 0;
  }, M = (U) => {
    I.value = s(U), I.value && (I.value.focus(), D.value = !0, I.value.contains(U.target) ? C.value = hf(U, I.value, t.direction) : (C.value = 0, l({
      value: T(U)
    })), a({
      value: T(U)
    }));
  }, Y = {
    passive: !0,
    capture: !0
  };
  function Q(U) {
    l({
      value: T(U)
    });
  }
  function le(U) {
    U.stopPropagation(), U.preventDefault(), A(U), window.removeEventListener("mousemove", Q, Y), window.removeEventListener("mouseup", le);
  }
  function O(U) {
    var de;
    A(U), window.removeEventListener("touchmove", Q, Y), (de = U.target) == null || de.removeEventListener("touchend", O);
  }
  function E(U) {
    var de;
    M(U), window.addEventListener("touchmove", Q, Y), (de = U.target) == null || de.addEventListener("touchend", O, {
      passive: !1
    });
  }
  function H(U) {
    U.preventDefault(), M(U), window.addEventListener("mousemove", Q, Y), window.addEventListener("mouseup", le, {
      passive: !1
    });
  }
  const X = (U) => {
    const de = (U - v.value) / (f.value - v.value) * 100;
    return rt(isNaN(de) ? 0 : de, 0, 100);
  }, he = q(t, "showTicks"), j = h(() => he.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((U) => ({
    value: U,
    position: X(U),
    label: U.toString()
  })) : Object.keys(t.ticks).map((U) => ({
    value: parseFloat(U),
    position: X(parseFloat(U)),
    label: t.ticks[U]
  })) : _.value !== 1 / 0 ? gi(_.value + 1).map((U) => {
    const de = v.value + U * m.value;
    return {
      value: de,
      position: X(de)
    };
  }) : [] : []), oe = h(() => j.value.some((U) => {
    let {
      label: de
    } = U;
    return !!de;
  })), ge = {
    activeThumbRef: I,
    color: q(t, "color"),
    decimals: y,
    disabled: w,
    direction: q(t, "direction"),
    elevation: q(t, "elevation"),
    hasLabels: oe,
    isReversed: o,
    indexFromEnd: d,
    min: v,
    max: f,
    mousePressed: D,
    numTicks: _,
    onSliderMousedown: H,
    onSliderTouchstart: E,
    parsedTicks: j,
    parseMouseMove: T,
    position: X,
    readonly: q(t, "readonly"),
    rounded: q(t, "rounded"),
    roundValue: k,
    showTicks: he,
    startOffset: C,
    step: m,
    thumbSize: g,
    thumbColor: P,
    thumbLabel: q(t, "thumbLabel"),
    ticks: q(t, "ticks"),
    tickSize: b,
    trackColor: x,
    trackContainerRef: V,
    trackFillColor: p,
    trackSize: S,
    vertical: c
  };
  return je(Ei, ge), ge;
}, pf = L({
  focused: Boolean,
  max: {
    type: Number,
    required: !0
  },
  min: {
    type: Number,
    required: !0
  },
  modelValue: {
    type: Number,
    required: !0
  },
  position: {
    type: Number,
    required: !0
  },
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  ...ae()
}, "VSliderThumb"), _f = z()({
  name: "VSliderThumb",
  directives: {
    Ripple: Bn
  },
  props: pf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Te(Ei), {
      isRtl: i,
      rtlClasses: s
    } = Ut();
    if (!l)
      throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: o,
      disabled: c,
      thumbSize: d,
      thumbLabel: v,
      direction: f,
      isReversed: m,
      vertical: y,
      readonly: k,
      elevation: g,
      mousePressed: b,
      decimals: S,
      indexFromEnd: _
    } = l, {
      textColorClasses: w,
      textColorStyles: P
    } = ft(r), {
      pageup: x,
      pagedown: p,
      end: D,
      home: C,
      left: V,
      right: I,
      down: T,
      up: A
    } = dc, M = [x, p, D, C, V, I, T, A], Y = h(() => o.value ? [1, 2, 3] : [1, 5, 10]);
    function Q(O, E) {
      if (!M.includes(O.key))
        return;
      O.preventDefault();
      const H = o.value || 0.1, X = (e.max - e.min) / H;
      if ([V, I, T, A].includes(O.key)) {
        const j = (y.value ? [i.value ? V : I, m.value ? T : A] : _.value !== i.value ? [V, A] : [I, A]).includes(O.key) ? 1 : -1, oe = O.shiftKey ? 2 : O.ctrlKey ? 1 : 0;
        E = E + j * H * Y.value[oe];
      } else if (O.key === C)
        E = e.min;
      else if (O.key === D)
        E = e.max;
      else {
        const he = O.key === p ? 1 : -1;
        E = E - he * H * (X > 100 ? X / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, E));
    }
    function le(O) {
      const E = Q(O, e.modelValue);
      E != null && a("update:modelValue", E);
    }
    return Z(() => {
      const O = J(_.value ? 100 - e.position : e.position, "%"), {
        elevationClasses: E
      } = Wt(h(() => c.value ? void 0 : g.value));
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && b.value
        }, e.class, s.value],
        style: [{
          "--v-slider-thumb-position": O,
          "--v-slider-thumb-size": J(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!k.value,
        "aria-orientation": f.value,
        onKeydown: k.value ? void 0 : le
      }, [u("div", {
        class: ["v-slider-thumb__surface", w.value, E.value],
        style: {
          ...P.value
        }
      }, null), Ve(u("div", {
        class: ["v-slider-thumb__ripple", w.value],
        style: P.value
      }, null), [[gt("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), u(ao, {
        origin: "bottom center"
      }, {
        default: () => {
          var H;
          return [Ve(u("div", {
            class: "v-slider-thumb__label-container"
          }, [u("div", {
            class: ["v-slider-thumb__label"]
          }, [u("div", null, [((H = n["thumb-label"]) == null ? void 0 : H.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(o.value ? S.value : 1)])])]), [[ut, v.value && e.focused || v.value === "always"]])];
        }
      })]);
    }), {};
  }
});
const Sf = L({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...ae()
}, "VSliderTrack"), wf = z()({
  name: "VSliderTrack",
  props: Sf(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Te(Ei);
    if (!a)
      throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider");
    const {
      color: l,
      parsedTicks: i,
      rounded: s,
      showTicks: r,
      tickSize: o,
      trackColor: c,
      trackFillColor: d,
      trackSize: v,
      vertical: f,
      min: m,
      max: y,
      indexFromEnd: k
    } = a, {
      roundedClasses: g
    } = lt(s), {
      backgroundColorClasses: b,
      backgroundColorStyles: S
    } = vt(d), {
      backgroundColorClasses: _,
      backgroundColorStyles: w
    } = vt(c), P = h(() => `inset-${f.value ? "block" : "inline"}-${k.value ? "end" : "start"}`), x = h(() => f.value ? "height" : "width"), p = h(() => ({
      [P.value]: "0%",
      [x.value]: "100%"
    })), D = h(() => e.stop - e.start), C = h(() => ({
      [P.value]: J(e.start, "%"),
      [x.value]: J(D.value, "%")
    })), V = h(() => r.value ? (f.value ? i.value.slice().reverse() : i.value).map((T, A) => {
      var Y;
      const M = T.value !== m.value && T.value !== y.value ? J(T.position, "%") : void 0;
      return u("div", {
        key: T.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": T.position >= e.start && T.position <= e.stop,
          "v-slider-track__tick--first": T.value === m.value,
          "v-slider-track__tick--last": T.value === y.value
        }],
        style: {
          [P.value]: M
        }
      }, [(T.label || n["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((Y = n["tick-label"]) == null ? void 0 : Y.call(n, {
        tick: T,
        index: A
      })) ?? T.label])]);
    }) : []);
    return Z(() => u("div", {
      class: ["v-slider-track", g.value, e.class],
      style: [{
        "--v-slider-track-size": J(v.value),
        "--v-slider-tick-size": J(o.value)
      }, e.style]
    }, [u("div", {
      class: ["v-slider-track__background", _.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...p.value,
        ...w.value
      }
    }, null), u("div", {
      class: ["v-slider-track__fill", b.value],
      style: {
        ...C.value,
        ...S.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [V.value])])), {};
  }
}), Cf = L({
  ...Oi(),
  ...yf(),
  ...ma(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Ws = z()({
  name: "VSlider",
  props: Cf(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    start: (e) => !0,
    end: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = N(), {
      rtlClasses: i
    } = Ut(), s = kf(e), r = fe(e, "modelValue", void 0, (x) => s.roundValue(x ?? s.min.value)), {
      min: o,
      max: c,
      mousePressed: d,
      roundValue: v,
      onSliderMousedown: f,
      onSliderTouchstart: m,
      trackContainerRef: y,
      position: k,
      hasLabels: g,
      readonly: b
    } = bf({
      props: e,
      steps: s,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (x) => {
        let {
          value: p
        } = x;
        const D = v(p);
        r.value = D, a("end", D);
      },
      onSliderMove: (x) => {
        let {
          value: p
        } = x;
        return r.value = v(p);
      },
      getActiveThumb: () => {
        var x;
        return (x = l.value) == null ? void 0 : x.$el;
      }
    }), {
      isFocused: S,
      focus: _,
      blur: w
    } = va(e), P = h(() => k(r.value));
    return Z(() => {
      const x = en.filterProps(e), p = !!(e.label || n.label || n.prepend);
      return u(en, B({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || g.value,
          "v-slider--focused": S.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, x, {
        focused: S.value
      }), {
        ...n,
        prepend: p ? (D) => {
          var C, V;
          return u(ke, null, [((C = n.label) == null ? void 0 : C.call(n, D)) ?? (e.label ? u(Mi, {
            id: D.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (V = n.prepend) == null ? void 0 : V.call(n, D)]);
        } : void 0,
        default: (D) => {
          let {
            id: C,
            messagesId: V
          } = D;
          return u("div", {
            class: "v-slider__container",
            onMousedown: b.value ? void 0 : f,
            onTouchstartPassive: b.value ? void 0 : m
          }, [u("input", {
            id: C.value,
            name: e.name || C.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(wf, {
            ref: y,
            start: 0,
            stop: P.value
          }, {
            "tick-label": n["tick-label"]
          }), u(_f, {
            ref: l,
            "aria-describedby": V.value,
            focused: S.value,
            min: o.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (I) => r.value = I,
            position: P.value,
            elevation: e.elevation,
            onFocus: _,
            onBlur: w,
            ripple: e.ripple
          }, {
            "thumb-label": n["thumb-label"]
          })]);
        }
      });
    }), {};
  }
}), Vf = L({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...ae()
}, "VColorPickerPreview"), xf = St({
  name: "VColorPickerPreview",
  props: Vf(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = new AbortController();
    Xu(() => a.abort());
    async function l() {
      if (!cs)
        return;
      const i = new window.EyeDropper();
      try {
        const s = await i.open({
          signal: a.signal
        }), r = Ir(s.sRGBHex);
        n("update:color", {
          ...e.color ?? Pn,
          ...r
        });
      } catch {
      }
    }
    return Z(() => {
      var i, s;
      return u("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [cs && u("div", {
        class: "v-color-picker-preview__eye-dropper",
        key: "eyeDropper"
      }, [u(Ye, {
        onClick: l,
        icon: "$eyeDropper",
        variant: "plain",
        density: "comfortable"
      }, null)]), u("div", {
        class: "v-color-picker-preview__dot"
      }, [u("div", {
        style: {
          background: Dr(e.color ?? Pn)
        }
      }, null)]), u("div", {
        class: "v-color-picker-preview__sliders"
      }, [u(Ws, {
        class: "v-color-picker-preview__track v-color-picker-preview__hue",
        modelValue: (i = e.color) == null ? void 0 : i.h,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? Pn,
          h: r
        }),
        step: 0,
        min: 0,
        max: 360,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null), !e.hideAlpha && u(Ws, {
        class: "v-color-picker-preview__track v-color-picker-preview__alpha",
        modelValue: ((s = e.color) == null ? void 0 : s.a) ?? 1,
        "onUpdate:modelValue": (r) => n("update:color", {
          ...e.color ?? Pn,
          a: r
        }),
        step: 1 / 256,
        min: 0,
        max: 1,
        disabled: e.disabled,
        thumbSize: 14,
        trackSize: 8,
        trackFillColor: "white",
        hideDetails: !0
      }, null)])]);
    }), {};
  }
});
const Pf = {
  base: "#f44336",
  lighten5: "#ffebee",
  lighten4: "#ffcdd2",
  lighten3: "#ef9a9a",
  lighten2: "#e57373",
  lighten1: "#ef5350",
  darken1: "#e53935",
  darken2: "#d32f2f",
  darken3: "#c62828",
  darken4: "#b71c1c",
  accent1: "#ff8a80",
  accent2: "#ff5252",
  accent3: "#ff1744",
  accent4: "#d50000"
}, Mf = {
  base: "#e91e63",
  lighten5: "#fce4ec",
  lighten4: "#f8bbd0",
  lighten3: "#f48fb1",
  lighten2: "#f06292",
  lighten1: "#ec407a",
  darken1: "#d81b60",
  darken2: "#c2185b",
  darken3: "#ad1457",
  darken4: "#880e4f",
  accent1: "#ff80ab",
  accent2: "#ff4081",
  accent3: "#f50057",
  accent4: "#c51162"
}, Df = {
  base: "#9c27b0",
  lighten5: "#f3e5f5",
  lighten4: "#e1bee7",
  lighten3: "#ce93d8",
  lighten2: "#ba68c8",
  lighten1: "#ab47bc",
  darken1: "#8e24aa",
  darken2: "#7b1fa2",
  darken3: "#6a1b9a",
  darken4: "#4a148c",
  accent1: "#ea80fc",
  accent2: "#e040fb",
  accent3: "#d500f9",
  accent4: "#aa00ff"
}, Of = {
  base: "#673ab7",
  lighten5: "#ede7f6",
  lighten4: "#d1c4e9",
  lighten3: "#b39ddb",
  lighten2: "#9575cd",
  lighten1: "#7e57c2",
  darken1: "#5e35b1",
  darken2: "#512da8",
  darken3: "#4527a0",
  darken4: "#311b92",
  accent1: "#b388ff",
  accent2: "#7c4dff",
  accent3: "#651fff",
  accent4: "#6200ea"
}, If = {
  base: "#3f51b5",
  lighten5: "#e8eaf6",
  lighten4: "#c5cae9",
  lighten3: "#9fa8da",
  lighten2: "#7986cb",
  lighten1: "#5c6bc0",
  darken1: "#3949ab",
  darken2: "#303f9f",
  darken3: "#283593",
  darken4: "#1a237e",
  accent1: "#8c9eff",
  accent2: "#536dfe",
  accent3: "#3d5afe",
  accent4: "#304ffe"
}, Tf = {
  base: "#2196f3",
  lighten5: "#e3f2fd",
  lighten4: "#bbdefb",
  lighten3: "#90caf9",
  lighten2: "#64b5f6",
  lighten1: "#42a5f5",
  darken1: "#1e88e5",
  darken2: "#1976d2",
  darken3: "#1565c0",
  darken4: "#0d47a1",
  accent1: "#82b1ff",
  accent2: "#448aff",
  accent3: "#2979ff",
  accent4: "#2962ff"
}, Af = {
  base: "#03a9f4",
  lighten5: "#e1f5fe",
  lighten4: "#b3e5fc",
  lighten3: "#81d4fa",
  lighten2: "#4fc3f7",
  lighten1: "#29b6f6",
  darken1: "#039be5",
  darken2: "#0288d1",
  darken3: "#0277bd",
  darken4: "#01579b",
  accent1: "#80d8ff",
  accent2: "#40c4ff",
  accent3: "#00b0ff",
  accent4: "#0091ea"
}, Ef = {
  base: "#00bcd4",
  lighten5: "#e0f7fa",
  lighten4: "#b2ebf2",
  lighten3: "#80deea",
  lighten2: "#4dd0e1",
  lighten1: "#26c6da",
  darken1: "#00acc1",
  darken2: "#0097a7",
  darken3: "#00838f",
  darken4: "#006064",
  accent1: "#84ffff",
  accent2: "#18ffff",
  accent3: "#00e5ff",
  accent4: "#00b8d4"
}, Lf = {
  base: "#009688",
  lighten5: "#e0f2f1",
  lighten4: "#b2dfdb",
  lighten3: "#80cbc4",
  lighten2: "#4db6ac",
  lighten1: "#26a69a",
  darken1: "#00897b",
  darken2: "#00796b",
  darken3: "#00695c",
  darken4: "#004d40",
  accent1: "#a7ffeb",
  accent2: "#64ffda",
  accent3: "#1de9b6",
  accent4: "#00bfa5"
}, Ff = {
  base: "#4caf50",
  lighten5: "#e8f5e9",
  lighten4: "#c8e6c9",
  lighten3: "#a5d6a7",
  lighten2: "#81c784",
  lighten1: "#66bb6a",
  darken1: "#43a047",
  darken2: "#388e3c",
  darken3: "#2e7d32",
  darken4: "#1b5e20",
  accent1: "#b9f6ca",
  accent2: "#69f0ae",
  accent3: "#00e676",
  accent4: "#00c853"
}, Rf = {
  base: "#8bc34a",
  lighten5: "#f1f8e9",
  lighten4: "#dcedc8",
  lighten3: "#c5e1a5",
  lighten2: "#aed581",
  lighten1: "#9ccc65",
  darken1: "#7cb342",
  darken2: "#689f38",
  darken3: "#558b2f",
  darken4: "#33691e",
  accent1: "#ccff90",
  accent2: "#b2ff59",
  accent3: "#76ff03",
  accent4: "#64dd17"
}, Nf = {
  base: "#cddc39",
  lighten5: "#f9fbe7",
  lighten4: "#f0f4c3",
  lighten3: "#e6ee9c",
  lighten2: "#dce775",
  lighten1: "#d4e157",
  darken1: "#c0ca33",
  darken2: "#afb42b",
  darken3: "#9e9d24",
  darken4: "#827717",
  accent1: "#f4ff81",
  accent2: "#eeff41",
  accent3: "#c6ff00",
  accent4: "#aeea00"
}, Yf = {
  base: "#ffeb3b",
  lighten5: "#fffde7",
  lighten4: "#fff9c4",
  lighten3: "#fff59d",
  lighten2: "#fff176",
  lighten1: "#ffee58",
  darken1: "#fdd835",
  darken2: "#fbc02d",
  darken3: "#f9a825",
  darken4: "#f57f17",
  accent1: "#ffff8d",
  accent2: "#ffff00",
  accent3: "#ffea00",
  accent4: "#ffd600"
}, Bf = {
  base: "#ffc107",
  lighten5: "#fff8e1",
  lighten4: "#ffecb3",
  lighten3: "#ffe082",
  lighten2: "#ffd54f",
  lighten1: "#ffca28",
  darken1: "#ffb300",
  darken2: "#ffa000",
  darken3: "#ff8f00",
  darken4: "#ff6f00",
  accent1: "#ffe57f",
  accent2: "#ffd740",
  accent3: "#ffc400",
  accent4: "#ffab00"
}, $f = {
  base: "#ff9800",
  lighten5: "#fff3e0",
  lighten4: "#ffe0b2",
  lighten3: "#ffcc80",
  lighten2: "#ffb74d",
  lighten1: "#ffa726",
  darken1: "#fb8c00",
  darken2: "#f57c00",
  darken3: "#ef6c00",
  darken4: "#e65100",
  accent1: "#ffd180",
  accent2: "#ffab40",
  accent3: "#ff9100",
  accent4: "#ff6d00"
}, Wf = {
  base: "#ff5722",
  lighten5: "#fbe9e7",
  lighten4: "#ffccbc",
  lighten3: "#ffab91",
  lighten2: "#ff8a65",
  lighten1: "#ff7043",
  darken1: "#f4511e",
  darken2: "#e64a19",
  darken3: "#d84315",
  darken4: "#bf360c",
  accent1: "#ff9e80",
  accent2: "#ff6e40",
  accent3: "#ff3d00",
  accent4: "#dd2c00"
}, Uf = {
  base: "#795548",
  lighten5: "#efebe9",
  lighten4: "#d7ccc8",
  lighten3: "#bcaaa4",
  lighten2: "#a1887f",
  lighten1: "#8d6e63",
  darken1: "#6d4c41",
  darken2: "#5d4037",
  darken3: "#4e342e",
  darken4: "#3e2723"
}, Hf = {
  base: "#607d8b",
  lighten5: "#eceff1",
  lighten4: "#cfd8dc",
  lighten3: "#b0bec5",
  lighten2: "#90a4ae",
  lighten1: "#78909c",
  darken1: "#546e7a",
  darken2: "#455a64",
  darken3: "#37474f",
  darken4: "#263238"
}, zf = {
  base: "#9e9e9e",
  lighten5: "#fafafa",
  lighten4: "#f5f5f5",
  lighten3: "#eeeeee",
  lighten2: "#e0e0e0",
  lighten1: "#bdbdbd",
  darken1: "#757575",
  darken2: "#616161",
  darken3: "#424242",
  darken4: "#212121"
}, jf = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Gf = {
  red: Pf,
  pink: Mf,
  purple: Df,
  deepPurple: Of,
  indigo: If,
  blue: Tf,
  lightBlue: Af,
  cyan: Ef,
  teal: Lf,
  green: Ff,
  lightGreen: Rf,
  lime: Nf,
  yellow: Yf,
  amber: Bf,
  orange: $f,
  deepOrange: Wf,
  brown: Uf,
  blueGrey: Hf,
  grey: zf,
  shades: jf
}, qf = L({
  swatches: {
    type: Array,
    default: () => Kf(Gf)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...ae()
}, "VColorPickerSwatches");
function Kf(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const Zf = St({
  name: "VColorPickerSwatches",
  props: qf(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    return Z(() => u("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: J(e.maxHeight)
      }, e.style]
    }, [u("div", null, [e.swatches.map((a) => u("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = qt(l), s = al(i), r = Mr(i);
      return u("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => s && n("update:color", s)
      }, [u("div", {
        style: {
          background: r
        }
      }, [e.color && hn(e.color, s) ? u(Ce, {
        size: "x-small",
        icon: "$success",
        color: Rc(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
});
const Li = L({
  color: String,
  ...yn(),
  ...ae(),
  ...Nt(),
  ...$t(),
  ...ca(),
  ...sl(),
  ...at(),
  ...Re(),
  ...Ee()
}, "VSheet"), Qn = z()({
  name: "VSheet",
  props: Li(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = vt(q(e, "color")), {
      borderClasses: s
    } = kn(e), {
      dimensionStyles: r
    } = Yt(e), {
      elevationClasses: o
    } = Wt(e), {
      locationStyles: c
    } = da(e), {
      positionClasses: d
    } = rl(e), {
      roundedClasses: v
    } = lt(e);
    return Z(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, s.value, o.value, d.value, v.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, n)), {};
  }
}), Xf = L({
  canvasHeight: {
    type: [String, Number],
    default: 150
  },
  disabled: Boolean,
  dotSize: {
    type: [Number, String],
    default: 10
  },
  hideCanvas: Boolean,
  hideSliders: Boolean,
  hideInputs: Boolean,
  mode: {
    type: String,
    default: "rgba",
    validator: (e) => Object.keys(cn).includes(e)
  },
  modes: {
    type: Array,
    default: () => Object.keys(cn),
    validator: (e) => Array.isArray(e) && e.every((t) => Object.keys(cn).includes(t))
  },
  showSwatches: Boolean,
  swatches: Array,
  swatchesMaxHeight: {
    type: [Number, String],
    default: 150
  },
  modelValue: {
    type: [Object, String]
  },
  ...Je(Li({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), Jf = St({
  name: "VColorPicker",
  props: Xf(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const t = fe(e, "mode"), n = N(null), a = fe(e, "modelValue", void 0, (s) => {
      if (s == null || s === "")
        return null;
      let r;
      try {
        r = al(qt(s));
      } catch (o) {
        return un(o), null;
      }
      return n.value && (r = {
        ...r,
        h: n.value.h
      }, n.value = null), r;
    }, (s) => s ? of(s, e.modelValue) : null), {
      rtlClasses: l
    } = Ut(), i = (s) => {
      a.value = s, n.value = s;
    };
    return qe(() => {
      e.modes.includes(t.value) || (t.value = e.modes[0]);
    }), gn({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), Z(() => {
      const s = Qn.filterProps(e);
      return u(Qn, B({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", l.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Dr({
            ...a.value ?? Pn,
            a: 1
          })
        }, e.style]
      }, s, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && u(ef, {
          key: "canvas",
          color: a.value,
          "onUpdate:color": i,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && u("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && u(xf, {
          key: "preview",
          color: a.value,
          "onUpdate:color": i,
          hideAlpha: !t.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(mf, {
          key: "edit",
          modes: e.modes,
          mode: t.value,
          "onUpdate:mode": (r) => t.value = r,
          color: a.value,
          "onUpdate:color": i,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(Zf, {
          key: "swatches",
          color: a.value,
          "onUpdate:color": i,
          maxHeight: e.swatchesMaxHeight,
          swatches: e.swatches,
          disabled: e.disabled
        }, null)]
      });
    }), {};
  }
});
function Al(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
function Qf(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Us(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const {
      side: n,
      align: a
    } = e, l = a === "left" ? 0 : a === "center" ? t.width / 2 : a === "right" ? t.width : a, i = n === "top" ? 0 : n === "bottom" ? t.height : n;
    return Al({
      x: l,
      y: i
    }, t);
  } else if (e.side === "left" || e.side === "right") {
    const {
      side: n,
      align: a
    } = e, l = n === "left" ? 0 : n === "right" ? t.width : n, i = a === "top" ? 0 : a === "center" ? t.height / 2 : a === "bottom" ? t.height : a;
    return Al({
      x: l,
      y: i
    }, t);
  }
  return Al({
    x: t.width / 2,
    y: t.height / 2
  }, t);
}
const Mo = {
  static: nv,
  // specific viewport position, usually centered
  connected: lv
  // connected to a certain element
}, ev = L({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Mo
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function tv(e, t) {
  const n = N({}), a = N();
  $e && mn(() => !!(t.isActive.value && e.locationStrategy), (i) => {
    var s, r;
    G(() => e.locationStrategy, i), Ge(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (s = e.locationStrategy(t, e, n)) == null ? void 0 : s.updateLocation : a.value = (r = Mo[e.locationStrategy](t, e, n)) == null ? void 0 : r.updateLocation;
  });
  function l(i) {
    var s;
    (s = a.value) == null || s.call(a, i);
  }
  return {
    contentStyles: n,
    updateLocation: a
  };
}
function nv() {
}
function av(e, t) {
  t ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const n = bi(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function lv(e, t, n) {
  (Array.isArray(e.target.value) || Uc(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = ki(() => {
    const y = zl(t.location, e.isRtl.value), k = t.origin === "overlap" ? y : t.origin === "auto" ? Ol(y) : zl(t.origin, e.isRtl.value);
    return y.side === k.side && y.align === Il(k).align ? {
      preferredAnchor: ys(y),
      preferredOrigin: ys(k)
    } : {
      preferredAnchor: y,
      preferredOrigin: k
    };
  }), [s, r, o, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((y) => h(() => {
    const k = parseFloat(t[y]);
    return isNaN(k) ? 1 / 0 : k;
  })), d = h(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const y = t.offset.split(" ").map(parseFloat);
      return y.length < 2 && y.push(0), y;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let v = !1;
  const f = new ResizeObserver(() => {
    v && m();
  });
  G([e.target, e.contentEl], (y, k) => {
    let [g, b] = y, [S, _] = k;
    S && !Array.isArray(S) && f.unobserve(S), g && !Array.isArray(g) && f.observe(g), _ && f.unobserve(_), b && f.observe(b);
  }, {
    immediate: !0
  }), Ge(() => {
    f.disconnect();
  });
  function m() {
    if (v = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => v = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const y = xr(e.target.value), k = av(e.contentEl.value, e.isRtl.value), g = Ha(e.contentEl.value), b = 12;
    g.length || (g.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (k.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), k.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = g.reduce((I, T) => {
      const A = T.getBoundingClientRect(), M = new on({
        x: T === document.documentElement ? 0 : A.x,
        y: T === document.documentElement ? 0 : A.y,
        width: T.clientWidth,
        height: T.clientHeight
      });
      return I ? new on({
        x: Math.max(I.left, M.left),
        y: Math.max(I.top, M.top),
        width: Math.min(I.right, M.right) - Math.max(I.left, M.left),
        height: Math.min(I.bottom, M.bottom) - Math.max(I.top, M.top)
      }) : M;
    }, void 0);
    S.x += b, S.y += b, S.width -= b * 2, S.height -= b * 2;
    let _ = {
      anchor: l.value,
      origin: i.value
    };
    function w(I) {
      const T = new on(k), A = Us(I.anchor, y), M = Us(I.origin, T);
      let {
        x: Y,
        y: Q
      } = Qf(A, M);
      switch (I.anchor.side) {
        case "top":
          Q -= d.value[0];
          break;
        case "bottom":
          Q += d.value[0];
          break;
        case "left":
          Y -= d.value[0];
          break;
        case "right":
          Y += d.value[0];
          break;
      }
      switch (I.anchor.align) {
        case "top":
          Q -= d.value[1];
          break;
        case "bottom":
          Q += d.value[1];
          break;
        case "left":
          Y -= d.value[1];
          break;
        case "right":
          Y += d.value[1];
          break;
      }
      return T.x += Y, T.y += Q, T.width = Math.min(T.width, o.value), T.height = Math.min(T.height, c.value), {
        overflows: bs(T, S),
        x: Y,
        y: Q
      };
    }
    let P = 0, x = 0;
    const p = {
      x: 0,
      y: 0
    }, D = {
      x: !1,
      y: !1
    };
    let C = -1;
    for (; ; ) {
      if (C++ > 10) {
        Mc("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: I,
        y: T,
        overflows: A
      } = w(_);
      P += I, x += T, k.x += I, k.y += T;
      {
        const M = ks(_.anchor), Y = A.x.before || A.x.after, Q = A.y.before || A.y.after;
        let le = !1;
        if (["x", "y"].forEach((O) => {
          if (O === "x" && Y && !D.x || O === "y" && Q && !D.y) {
            const E = {
              anchor: {
                ..._.anchor
              },
              origin: {
                ..._.origin
              }
            }, H = O === "x" ? M === "y" ? Il : Ol : M === "y" ? Ol : Il;
            E.anchor = H(E.anchor), E.origin = H(E.origin);
            const {
              overflows: X
            } = w(E);
            (X[O].before <= A[O].before && X[O].after <= A[O].after || X[O].before + X[O].after < (A[O].before + A[O].after) / 2) && (_ = E, le = D[O] = !0);
          }
        }), le)
          continue;
      }
      A.x.before && (P += A.x.before, k.x += A.x.before), A.x.after && (P -= A.x.after, k.x -= A.x.after), A.y.before && (x += A.y.before, k.y += A.y.before), A.y.after && (x -= A.y.after, k.y -= A.y.after);
      {
        const M = bs(k, S);
        p.x = S.width - M.x.before - M.x.after, p.y = S.height - M.y.before - M.y.after, P += M.x.before, k.x += M.x.before, x += M.y.before, k.y += M.y.before;
      }
      break;
    }
    const V = ks(_.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${_.anchor.side} ${_.anchor.align}`,
      transformOrigin: `${_.origin.side} ${_.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: J(El(x)),
      left: e.isRtl.value ? void 0 : J(El(P)),
      right: e.isRtl.value ? J(El(-P)) : void 0,
      minWidth: J(V === "y" ? Math.min(s.value, y.width) : s.value),
      maxWidth: J(Hs(rt(p.x, s.value === 1 / 0 ? 0 : s.value, o.value))),
      maxHeight: J(Hs(rt(p.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: p,
      contentBox: k
    };
  }
  return G(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => m()), Ue(() => {
    const y = m();
    if (!y)
      return;
    const {
      available: k,
      contentBox: g
    } = y;
    g.height > k.y && requestAnimationFrame(() => {
      m(), requestAnimationFrame(() => {
        m();
      });
    });
  }), {
    updateLocation: m
  };
}
function El(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Hs(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Jl = !0;
const Ga = [];
function iv(e) {
  !Jl || Ga.length ? (Ga.push(e), Ql()) : (Jl = !1, e(), Ql());
}
let zs = -1;
function Ql() {
  cancelAnimationFrame(zs), zs = requestAnimationFrame(() => {
    const e = Ga.shift();
    e && e(), Ga.length ? Ql() : Jl = !0;
  });
}
const Ea = {
  none: null,
  close: ov,
  block: uv,
  reposition: cv
}, sv = L({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ea
  }
}, "VOverlay-scroll-strategies");
function rv(e, t) {
  if (!$e)
    return;
  let n;
  ze(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = fi(), await Ue(), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Ea[e.scrollStrategy]) == null || a.call(Ea, t, e, n);
    }));
  }), Ge(() => {
    n == null || n.stop();
  });
}
function ov(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Do(e.targetEl.value ?? e.contentEl.value, t);
}
function uv(e, t) {
  var s;
  const n = (s = e.root.value) == null ? void 0 : s.offsetParent, a = [.../* @__PURE__ */ new Set([...Ha(e.targetEl.value, t.contained ? n : void 0), ...Ha(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => _i(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, o) => {
    r.style.setProperty("--v-body-scroll-x", J(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", J(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", J(l)), r.classList.add("v-overlay-scroll-blocked");
  }), Ge(() => {
    a.forEach((r, o) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));
      r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function cv(e, t, n) {
  let a = !1, l = -1, i = -1;
  function s(r) {
    iv(() => {
      var d, v;
      const o = performance.now();
      (v = (d = e.updateLocation).value) == null || v.call(d, r), a = (performance.now() - o) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Do(e.targetEl.value ?? e.contentEl.value, (r) => {
        a ? (cancelAnimationFrame(l), l = requestAnimationFrame(() => {
          l = requestAnimationFrame(() => {
            s(r);
          });
        })) : s(r);
      });
    });
  }), Ge(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function Do(e, t) {
  const n = [document, ...Ha(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), Ge(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const ei = Symbol.for("vuetify:v-menu"), dv = L({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function fv(e, t) {
  let n = () => {
  };
  function a(s) {
    n == null || n();
    const r = Number(s ? e.openDelay : e.closeDelay);
    return new Promise((o) => {
      n = yc(r, () => {
        t == null || t(s), o(s);
      });
    });
  }
  function l() {
    return a(!0);
  }
  function i() {
    return a(!1);
  }
  return {
    clearDelay: n,
    runOpenDelay: l,
    runCloseDelay: i
  };
}
const vv = L({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...dv()
}, "VOverlay-activator");
function mv(e, t) {
  let {
    isActive: n,
    isTop: a
  } = t;
  const l = Fe("useActivator"), i = N();
  let s = !1, r = !1, o = !0;
  const c = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: v,
    runCloseDelay: f
  } = fv(e, (p) => {
    p === (e.openOnHover && s || c.value && r) && !(e.openOnHover && n.value && !a.value) && (n.value !== p && (o = !0), n.value = p);
  }), m = N(), y = {
    onClick: (p) => {
      p.stopPropagation(), i.value = p.currentTarget || p.target, n.value || (m.value = [p.clientX, p.clientY]), n.value = !n.value;
    },
    onMouseenter: (p) => {
      var D;
      (D = p.sourceCapabilities) != null && D.firesTouchEvents || (s = !0, i.value = p.currentTarget || p.target, v());
    },
    onMouseleave: (p) => {
      s = !1, f();
    },
    onFocus: (p) => {
      Wa(p.target, ":focus-visible") !== !1 && (r = !0, p.stopPropagation(), i.value = p.currentTarget || p.target, v());
    },
    onBlur: (p) => {
      r = !1, p.stopPropagation(), f();
    }
  }, k = h(() => {
    const p = {};
    return d.value && (p.onClick = y.onClick), e.openOnHover && (p.onMouseenter = y.onMouseenter, p.onMouseleave = y.onMouseleave), c.value && (p.onFocus = y.onFocus, p.onBlur = y.onBlur), p;
  }), g = h(() => {
    const p = {};
    if (e.openOnHover && (p.onMouseenter = () => {
      s = !0, v();
    }, p.onMouseleave = () => {
      s = !1, f();
    }), c.value && (p.onFocusin = () => {
      r = !0, v();
    }, p.onFocusout = () => {
      r = !1, f();
    }), e.closeOnContentClick) {
      const D = Te(ei, null);
      p.onClick = () => {
        n.value = !1, D == null || D.closeParents();
      };
    }
    return p;
  }), b = h(() => {
    const p = {};
    return e.openOnHover && (p.onMouseenter = () => {
      o && (s = !0, o = !1, v());
    }, p.onMouseleave = () => {
      s = !1, f();
    }), p;
  });
  G(a, (p) => {
    p && (e.openOnHover && !s && (!c.value || !r) || c.value && !r && (!e.openOnHover || !s)) && (n.value = !1);
  }), G(n, (p) => {
    p || setTimeout(() => {
      m.value = void 0;
    });
  }, {
    flush: "post"
  });
  const S = N();
  ze(() => {
    S.value && Ue(() => {
      i.value = Na(S.value);
    });
  });
  const _ = N(), w = h(() => e.target === "cursor" && m.value ? m.value : _.value ? Na(_.value) : Oo(e.target, l) || i.value), P = h(() => Array.isArray(w.value) ? void 0 : w.value);
  let x;
  return G(() => !!e.activator, (p) => {
    p && $e ? (x = fi(), x.run(() => {
      hv(e, l, {
        activatorEl: i,
        activatorEvents: k
      });
    })) : x && x.stop();
  }, {
    flush: "post",
    immediate: !0
  }), Ge(() => {
    x == null || x.stop();
  }), {
    activatorEl: i,
    activatorRef: S,
    target: w,
    targetEl: P,
    targetRef: _,
    activatorEvents: k,
    contentEvents: g,
    scrimEvents: b
  };
}
function hv(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  G(() => e.activator, (o, c) => {
    if (c && o !== c) {
      const d = r(c);
      d && s(d);
    }
    o && Ue(() => i());
  }, {
    immediate: !0
  }), G(() => e.activatorProps, () => {
    i();
  }), Ge(() => {
    s();
  });
  function i() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    o && bc(o, B(l.value, c));
  }
  function s() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    o && pc(o, B(l.value, c));
  }
  function r() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Oo(o, t);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function Oo(e, t) {
  var a, l;
  if (!e)
    return;
  let n;
  if (e === "parent") {
    let i = (l = (a = t == null ? void 0 : t.proxy) == null ? void 0 : a.$el) == null ? void 0 : l.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    n = i;
  } else
    typeof e == "string" ? n = document.querySelector(e) : "$el" in e ? n = e.$el : n = e;
  return n;
}
function gv() {
  if (!$e)
    return re(!1);
  const {
    ssr: e
  } = oo();
  if (e) {
    const t = re(!1);
    return qe(() => {
      t.value = !0;
    }), t;
  } else
    return re(!0);
}
const yv = L({
  eager: Boolean
}, "lazy");
function kv(e, t) {
  const n = re(!1), a = h(() => n.value || e.eager || t.value);
  G(t, () => n.value = !0);
  function l() {
    e.eager || (n.value = !1);
  }
  return {
    isBooted: n,
    hasContent: a,
    onAfterLeave: l
  };
}
function vl() {
  const t = Fe("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const js = Symbol.for("vuetify:stack"), zn = En([]);
function bv(e, t, n) {
  const a = Fe("useStack"), l = !n, i = Te(js, void 0), s = En({
    activeChildren: /* @__PURE__ */ new Set()
  });
  je(js, s);
  const r = re(+t.value);
  mn(e, () => {
    var v;
    const d = (v = zn.at(-1)) == null ? void 0 : v[1];
    r.value = d ? d + 10 : +t.value, l && zn.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), Ge(() => {
      if (l) {
        const f = tn(zn).findIndex((m) => m[0] === a.uid);
        zn.splice(f, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const o = re(!0);
  l && ze(() => {
    var v;
    const d = ((v = zn.at(-1)) == null ? void 0 : v[0]) === a.uid;
    setTimeout(() => o.value = d);
  });
  const c = h(() => !s.activeChildren.size);
  return {
    globalTop: vi(o),
    localTop: c,
    stackStyles: h(() => ({
      zIndex: r.value
    }))
  };
}
function pv(e) {
  return {
    teleportTarget: h(() => {
      const n = e.value;
      if (n === !0 || !$e)
        return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        tl(`Unable to locate target ${n}`);
        return;
      }
      let l = a.querySelector(":scope > .v-overlay-container");
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function _v() {
  return !0;
}
function Io(e, t, n) {
  if (!e || To(e, n) === !1)
    return !1;
  const a = Ar(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target)
    return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function To(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || _v)(e);
}
function Sv(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  t._clickOutside.lastMousedownWasOutside && Io(e, t, n) && setTimeout(() => {
    To(e, n) && a && a(e);
  }, 0);
}
function Gs(e, t) {
  const n = Ar(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Ao = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => Sv(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = Io(l, e, t);
    };
    Gs(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  unmounted(e, t) {
    e._clickOutside && (Gs(e, (n) => {
      var i;
      if (!n || !((i = e._clickOutside) != null && i[t.instance.$.uid]))
        return;
      const {
        onClick: a,
        onMousedown: l
      } = e._clickOutside[t.instance.$.uid];
      n.removeEventListener("click", a, !0), n.removeEventListener("mousedown", l, !0);
    }), delete e._clickOutside[t.instance.$.uid]);
  }
};
function wv(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return u(fn, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", B({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const ml = L({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: !0
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: !0
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...vv(),
  ...ae(),
  ...Nt(),
  ...yv(),
  ...ev(),
  ...sv(),
  ...Ee(),
  ...ua()
}, "VOverlay"), An = z()({
  name: "VOverlay",
  directives: {
    ClickOutside: Ao
  },
  inheritAttrs: !1,
  props: {
    _disableGlobalStack: Boolean,
    ...ml()
  },
  emits: {
    "click:outside": (e) => !0,
    "update:modelValue": (e) => !0,
    afterLeave: () => !0
  },
  setup(e, t) {
    let {
      slots: n,
      attrs: a,
      emit: l
    } = t;
    const i = fe(e, "modelValue"), s = h({
      get: () => i.value,
      set: (j) => {
        j && e.disabled || (i.value = j);
      }
    }), {
      teleportTarget: r
    } = pv(h(() => e.attach || e.contained)), {
      themeClasses: o
    } = We(e), {
      rtlClasses: c,
      isRtl: d
    } = Ut(), {
      hasContent: v,
      onAfterLeave: f
    } = kv(e, s), m = vt(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: y,
      localTop: k,
      stackStyles: g
    } = bv(s, q(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: b,
      activatorRef: S,
      target: _,
      targetEl: w,
      targetRef: P,
      activatorEvents: x,
      contentEvents: p,
      scrimEvents: D
    } = mv(e, {
      isActive: s,
      isTop: k
    }), {
      dimensionStyles: C
    } = Yt(e), V = gv(), {
      scopeId: I
    } = vl();
    G(() => e.disabled, (j) => {
      j && (s.value = !1);
    });
    const T = N(), A = N(), {
      contentStyles: M,
      updateLocation: Y
    } = tv(e, {
      isRtl: d,
      contentEl: A,
      target: _,
      isActive: s
    });
    rv(e, {
      root: T,
      contentEl: A,
      targetEl: w,
      isActive: s,
      updateLocation: Y
    });
    function Q(j) {
      l("click:outside", j), e.persistent ? X() : s.value = !1;
    }
    function le() {
      return s.value && y.value;
    }
    $e && G(s, (j) => {
      j ? window.addEventListener("keydown", O) : window.removeEventListener("keydown", O);
    }, {
      immediate: !0
    }), Ae(() => {
      $e && window.removeEventListener("keydown", O);
    });
    function O(j) {
      var oe, ge;
      j.key === "Escape" && y.value && (e.persistent ? X() : (s.value = !1, (oe = A.value) != null && oe.contains(document.activeElement) && ((ge = b.value) == null || ge.focus())));
    }
    const E = dd();
    mn(() => e.closeOnBack, () => {
      fd(E, (j) => {
        y.value && s.value ? (j(!1), e.persistent ? X() : s.value = !1) : j();
      });
    });
    const H = N();
    G(() => s.value && (e.absolute || e.contained) && r.value == null, (j) => {
      if (j) {
        const oe = Lr(T.value);
        oe && oe !== document.scrollingElement && (H.value = oe.scrollTop);
      }
    });
    function X() {
      e.noClickAnimation || A.value && xn(A.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Ua
      });
    }
    function he() {
      f(), l("afterLeave");
    }
    return Z(() => {
      var j;
      return u(ke, null, [(j = n.activator) == null ? void 0 : j.call(n, {
        isActive: s.value,
        props: B({
          ref: S,
          targetRef: P
        }, x.value, e.activatorProps)
      }), !e.disabled && V.value && v.value && u(Ju, {
        disabled: !r.value,
        to: r.value
      }, {
        default: () => [u("div", B({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": s.value,
            "v-overlay--contained": e.contained
          }, o.value, c.value, e.class],
          style: [g.value, {
            top: J(H.value)
          }, e.style],
          ref: T
        }, I, a), [u(wv, B({
          color: m,
          modelValue: !!e.scrim && s.value
        }, D.value), null), u(It, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: _.value,
          onAfterLeave: he
        }, {
          default: () => {
            var oe;
            return [Ve(u("div", B({
              ref: A,
              class: ["v-overlay__content", e.contentClass],
              style: [C.value, M.value]
            }, p.value, e.contentProps), [(oe = n.default) == null ? void 0 : oe.call(n, {
              isActive: s
            })]), [[ut, s.value], [gt("click-outside"), {
              handler: Q,
              closeConditional: le,
              include: () => [b.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: b,
      target: _,
      animateClick: X,
      contentEl: A,
      globalTop: y,
      localTop: k,
      updateLocation: Y
    };
  }
}), Ll = Symbol("Forwarded refs");
function Fl(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a)
      return a;
    n = Object.getPrototypeOf(n);
  }
}
function $n(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  return e[Ll] = n, new Proxy(e, {
    get(l, i) {
      if (Reflect.has(l, i))
        return Reflect.get(l, i);
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const s of n)
          if (s.value && Reflect.has(s.value, i)) {
            const r = Reflect.get(s.value, i);
            return typeof r == "function" ? r.bind(s.value) : r;
          }
      }
    },
    has(l, i) {
      if (Reflect.has(l, i))
        return !0;
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        return !1;
      for (const s of n)
        if (s.value && Reflect.has(s.value, i))
          return !0;
      return !1;
    },
    set(l, i, s) {
      if (Reflect.has(l, i))
        return Reflect.set(l, i, s);
      if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
        return !1;
      for (const r of n)
        if (r.value && Reflect.has(r.value, i))
          return Reflect.set(r.value, i, s);
      return !1;
    },
    getOwnPropertyDescriptor(l, i) {
      var r;
      const s = Reflect.getOwnPropertyDescriptor(l, i);
      if (s)
        return s;
      if (!(typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))) {
        for (const o of n) {
          if (!o.value)
            continue;
          const c = Fl(o.value, i) ?? ("_" in o.value ? Fl((r = o.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c)
            return c;
        }
        for (const o of n) {
          const c = o.value && o.value[Ll];
          if (!c)
            continue;
          const d = c.slice();
          for (; d.length; ) {
            const v = d.shift(), f = Fl(v.value, i);
            if (f)
              return f;
            const m = v.value && v.value[Ll];
            m && d.push(...m);
          }
        }
      }
    }
  });
}
const Cv = L({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...Je(ml({
    closeDelay: 250,
    closeOnContentClick: !0,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: !1,
    scrollStrategy: "reposition",
    transition: {
      component: Di
    }
  }), ["absolute"])
}, "VMenu"), hl = z()({
  name: "VMenu",
  props: Cv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), {
      scopeId: l
    } = vl(), i = nt(), s = h(() => e.id || `v-menu-${i}`), r = N(), o = Te(ei, null), c = re(0);
    je(ei, {
      register() {
        ++c.value;
      },
      unregister() {
        --c.value;
      },
      closeParents() {
        setTimeout(() => {
          c.value || (a.value = !1, o == null || o.closeParents());
        }, 40);
      }
    });
    async function d(k) {
      var S, _, w;
      const g = k.relatedTarget, b = k.target;
      await Ue(), a.value && g !== b && ((S = r.value) != null && S.contentEl) && // We're the topmost menu
      ((_ = r.value) != null && _.globalTop) && // It isn't the document or the menu body
      ![document, r.value.contentEl].includes(b) && // It isn't inside the menu body
      !r.value.contentEl.contains(b) && ((w = Ba(r.value.contentEl)[0]) == null || w.focus());
    }
    G(a, (k) => {
      k ? (o == null || o.register(), document.addEventListener("focusin", d, {
        once: !0
      })) : (o == null || o.unregister(), document.removeEventListener("focusin", d));
    });
    function v() {
      o == null || o.closeParents();
    }
    function f(k) {
      var g, b, S;
      e.disabled || k.key === "Tab" && (wr(Ba((g = r.value) == null ? void 0 : g.contentEl, !1), k.shiftKey ? "prev" : "next", (w) => w.tabIndex >= 0) || (a.value = !1, (S = (b = r.value) == null ? void 0 : b.activatorEl) == null || S.focus()));
    }
    function m(k) {
      var b;
      if (e.disabled)
        return;
      const g = (b = r.value) == null ? void 0 : b.contentEl;
      g && a.value ? k.key === "ArrowDown" ? (k.preventDefault(), $a(g, "next")) : k.key === "ArrowUp" && (k.preventDefault(), $a(g, "prev")) : ["ArrowDown", "ArrowUp"].includes(k.key) && (a.value = !0, k.preventDefault(), setTimeout(() => setTimeout(() => m(k))));
    }
    const y = h(() => B({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": s.value,
      onKeydown: m
    }, e.activatorProps));
    return Z(() => {
      const k = An.filterProps(e);
      return u(An, B({
        ref: r,
        class: ["v-menu", e.class],
        style: e.style
      }, k, {
        modelValue: a.value,
        "onUpdate:modelValue": (g) => a.value = g,
        absolute: !0,
        activatorProps: y.value,
        "onClick:outside": v,
        onKeydown: f
      }, l), {
        activator: n.activator,
        default: function() {
          for (var g = arguments.length, b = new Array(g), S = 0; S < g; S++)
            b[S] = arguments[S];
          return u(xe, {
            root: "VMenu"
          }, {
            default: () => {
              var _;
              return [(_ = n.default) == null ? void 0 : _.call(n, ...b)];
            }
          });
        }
      });
    }), $n({
      id: s,
      ΨopenChildren: c
    }, r);
  }
}), Vv = /* @__PURE__ */ Le({
  __name: "EasyColorPicker",
  props: {
    menu: {},
    modelValue: { default: "" },
    picker: {},
    textfield: {},
    fields: {}
  },
  emits: ["validated", "invalidated", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.textfield), i = N(n.menu), s = N(n.picker), r = N(!1), o = h(() => n.fields ?? []);
    function c(y) {
      l.value.value = y, l.value.prepend_inner_icon.color = y, a("update:modelValue", l.value.value);
    }
    function d() {
      l.value.validate(), a("validated", l.value.name);
    }
    function v() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function f() {
      r.value = !r.value;
    }
    const m = G(s.value, (y) => {
      c(y.value);
    });
    return Ae(() => {
      m();
    }), qe(() => {
      var y;
      (y = l.value) == null || y.isLoading(!1), !ie(l.value) && !ie(l.value.prepend_inner_icon) && (l.value.prepend_inner_icon.color = s.value.value);
    }), (y, k) => (ee(), se(Ne, { "no-gutters": "" }, {
      default: R(() => [
        u(hl, B({
          modelValue: r.value,
          "onUpdate:modelValue": k[3] || (k[3] = (g) => r.value = g)
        }, i.value.props()), {
          activator: R(({ props: g }) => {
            var b;
            return [
              u(ha, B({
                field: l.value,
                "onUpdate:field": k[0] || (k[0] = (S) => l.value = S)
              }, { ...g, ...(b = l.value) == null ? void 0 : b.props() }, {
                fields: o.value,
                onUpdated: c,
                onValidated: d,
                onInvalidated: v,
                "onClick:prependInner": f,
                "onClick:appendInner": f
              }), null, 16, ["field", "fields"])
            ];
          }),
          default: R(() => [
            u(fa, { width: "300" }, {
              default: R(() => [
                u(Nn, { class: "pa-0" }, {
                  default: R(() => {
                    var g;
                    return [
                      u(Jf, B({
                        modelValue: s.value.value,
                        "onUpdate:modelValue": k[1] || (k[1] = (b) => s.value.value = b),
                        mode: s.value.mode,
                        "onUpdate:mode": k[2] || (k[2] = (b) => s.value.mode = b)
                      }, (g = s.value) == null ? void 0 : g.props()), null, 16, ["modelValue", "mode"])
                    ];
                  }),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 16, ["modelValue"])
      ]),
      _: 1
    }));
  }
});
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Eo;
function $() {
  return Eo.apply(null, arguments);
}
function xv(e) {
  Eo = e;
}
function mt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function dn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function ve(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Fi(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (ve(e, t))
      return !1;
  return !0;
}
function He(e) {
  return e === void 0;
}
function Rt(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function ga(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Lo(e, t) {
  var n = [], a, l = e.length;
  for (a = 0; a < l; ++a)
    n.push(t(e[a], a));
  return n;
}
function Kt(e, t) {
  for (var n in t)
    ve(t, n) && (e[n] = t[n]);
  return ve(t, "toString") && (e.toString = t.toString), ve(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Vt(e, t, n, a) {
  return lu(e, t, n, a, !0).utc();
}
function Pv() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function ne(e) {
  return e._pf == null && (e._pf = Pv()), e._pf;
}
var ti;
Array.prototype.some ? ti = Array.prototype.some : ti = function(e) {
  var t = Object(this), n = t.length >>> 0, a;
  for (a = 0; a < n; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function Ri(e) {
  var t = null, n = !1, a = e._d && !isNaN(e._d.getTime());
  if (a && (t = ne(e), n = ti.call(t.parsedDateParts, function(l) {
    return l != null;
  }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = a;
  else
    return a;
  return e._isValid;
}
function gl(e) {
  var t = Vt(NaN);
  return e != null ? Kt(ne(t), e) : ne(t).userInvalidated = !0, t;
}
var qs = $.momentProperties = [], Rl = !1;
function Ni(e, t) {
  var n, a, l, i = qs.length;
  if (He(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), He(t._i) || (e._i = t._i), He(t._f) || (e._f = t._f), He(t._l) || (e._l = t._l), He(t._strict) || (e._strict = t._strict), He(t._tzm) || (e._tzm = t._tzm), He(t._isUTC) || (e._isUTC = t._isUTC), He(t._offset) || (e._offset = t._offset), He(t._pf) || (e._pf = ne(t)), He(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      a = qs[n], l = t[a], He(l) || (e[a] = l);
  return e;
}
function ya(e) {
  Ni(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Rl === !1 && (Rl = !0, $.updateOffset(this), Rl = !1);
}
function ht(e) {
  return e instanceof ya || e != null && e._isAMomentObject != null;
}
function Fo(e) {
  $.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function it(e, t) {
  var n = !0;
  return Kt(function() {
    if ($.deprecationHandler != null && $.deprecationHandler(null, e), n) {
      var a = [], l, i, s, r = arguments.length;
      for (i = 0; i < r; i++) {
        if (l = "", typeof arguments[i] == "object") {
          l += `
[` + i + "] ";
          for (s in arguments[0])
            ve(arguments[0], s) && (l += s + ": " + arguments[0][s] + ", ");
          l = l.slice(0, -2);
        } else
          l = arguments[i];
        a.push(l);
      }
      Fo(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Ks = {};
function Ro(e, t) {
  $.deprecationHandler != null && $.deprecationHandler(e, t), Ks[e] || (Fo(t), Ks[e] = !0);
}
$.suppressDeprecationWarnings = !1;
$.deprecationHandler = null;
function xt(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Mv(e) {
  var t, n;
  for (n in e)
    ve(e, n) && (t = e[n], xt(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ni(e, t) {
  var n = Kt({}, e), a;
  for (a in t)
    ve(t, a) && (dn(e[a]) && dn(t[a]) ? (n[a] = {}, Kt(n[a], e[a]), Kt(n[a], t[a])) : t[a] != null ? n[a] = t[a] : delete n[a]);
  for (a in e)
    ve(e, a) && !ve(t, a) && dn(e[a]) && (n[a] = Kt({}, n[a]));
  return n;
}
function Yi(e) {
  e != null && this.set(e);
}
var ai;
Object.keys ? ai = Object.keys : ai = function(e) {
  var t, n = [];
  for (t in e)
    ve(e, t) && n.push(t);
  return n;
};
var Dv = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Ov(e, t, n) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return xt(a) ? a.call(t, n) : a;
}
function _t(e, t, n) {
  var a = "" + Math.abs(e), l = t - a.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, l)).toString().substr(1) + a;
}
var Bi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ma = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Nl = {}, Dn = {};
function K(e, t, n, a) {
  var l = a;
  typeof a == "string" && (l = function() {
    return this[a]();
  }), e && (Dn[e] = l), t && (Dn[t[0]] = function() {
    return _t(l.apply(this, arguments), t[1], t[2]);
  }), n && (Dn[n] = function() {
    return this.localeData().ordinal(
      l.apply(this, arguments),
      e
    );
  });
}
function Iv(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Tv(e) {
  var t = e.match(Bi), n, a;
  for (n = 0, a = t.length; n < a; n++)
    Dn[t[n]] ? t[n] = Dn[t[n]] : t[n] = Iv(t[n]);
  return function(l) {
    var i = "", s;
    for (s = 0; s < a; s++)
      i += xt(t[s]) ? t[s].call(l, e) : t[s];
    return i;
  };
}
function La(e, t) {
  return e.isValid() ? (t = No(t, e.localeData()), Nl[t] = Nl[t] || Tv(t), Nl[t](e)) : e.localeData().invalidDate();
}
function No(e, t) {
  var n = 5;
  function a(l) {
    return t.longDateFormat(l) || l;
  }
  for (Ma.lastIndex = 0; n >= 0 && Ma.test(e); )
    e = e.replace(
      Ma,
      a
    ), Ma.lastIndex = 0, n -= 1;
  return e;
}
var Av = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ev(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Bi).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var Lv = "Invalid date";
function Fv() {
  return this._invalidDate;
}
var Rv = "%d", Nv = /\d{1,2}/;
function Yv(e) {
  return this._ordinal.replace("%d", e);
}
var Bv = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function $v(e, t, n, a) {
  var l = this._relativeTime[n];
  return xt(l) ? l(e, t, n, a) : l.replace(/%d/i, e);
}
function Wv(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return xt(n) ? n(t) : n.replace(/%s/i, t);
}
var Zs = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function st(e) {
  return typeof e == "string" ? Zs[e] || Zs[e.toLowerCase()] : void 0;
}
function $i(e) {
  var t = {}, n, a;
  for (a in e)
    ve(e, a) && (n = st(a), n && (t[n] = e[a]));
  return t;
}
var Uv = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Hv(e) {
  var t = [], n;
  for (n in e)
    ve(e, n) && t.push({ unit: n, priority: Uv[n] });
  return t.sort(function(a, l) {
    return a.priority - l.priority;
  }), t;
}
var Yo = /\d/, et = /\d\d/, Bo = /\d{3}/, Wi = /\d{4}/, yl = /[+-]?\d{6}/, _e = /\d\d?/, $o = /\d\d\d\d?/, Wo = /\d\d\d\d\d\d?/, kl = /\d{1,3}/, Ui = /\d{1,4}/, bl = /[+-]?\d{1,6}/, Wn = /\d+/, pl = /[+-]?\d+/, zv = /Z|[+-]\d\d:?\d\d/gi, _l = /Z|[+-]\d\d(?::?\d\d)?/gi, jv = /[+-]?\d+(\.\d{1,3})?/, ka = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Un = /^[1-9]\d?/, Hi = /^([1-9]\d|\d)/, qa;
qa = {};
function W(e, t, n) {
  qa[e] = xt(t) ? t : function(a, l) {
    return a && n ? n : t;
  };
}
function Gv(e, t) {
  return ve(qa, e) ? qa[e](t._strict, t._locale) : new RegExp(qv(e));
}
function qv(e) {
  return Et(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, a, l, i) {
        return n || a || l || i;
      }
    )
  );
}
function Et(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function tt(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ue(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = tt(t)), n;
}
var li = {};
function be(e, t) {
  var n, a = t, l;
  for (typeof e == "string" && (e = [e]), Rt(t) && (a = function(i, s) {
    s[t] = ue(i);
  }), l = e.length, n = 0; n < l; n++)
    li[e[n]] = a;
}
function ba(e, t) {
  be(e, function(n, a, l, i) {
    l._w = l._w || {}, t(n, l._w, l, i);
  });
}
function Kv(e, t, n) {
  t != null && ve(li, e) && li[e](t, n._a, n, e);
}
function Sl(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Be = 0, Tt = 1, pt = 2, Ie = 3, ot = 4, At = 5, sn = 6, Zv = 7, Xv = 8;
K("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? _t(e, 4) : "+" + e;
});
K(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
K(0, ["YYYY", 4], 0, "year");
K(0, ["YYYYY", 5], 0, "year");
K(0, ["YYYYYY", 6, !0], 0, "year");
W("Y", pl);
W("YY", _e, et);
W("YYYY", Ui, Wi);
W("YYYYY", bl, yl);
W("YYYYYY", bl, yl);
be(["YYYYY", "YYYYYY"], Be);
be("YYYY", function(e, t) {
  t[Be] = e.length === 2 ? $.parseTwoDigitYear(e) : ue(e);
});
be("YY", function(e, t) {
  t[Be] = $.parseTwoDigitYear(e);
});
be("Y", function(e, t) {
  t[Be] = parseInt(e, 10);
});
function qn(e) {
  return Sl(e) ? 366 : 365;
}
$.parseTwoDigitYear = function(e) {
  return ue(e) + (ue(e) > 68 ? 1900 : 2e3);
};
var Uo = Hn("FullYear", !0);
function Jv() {
  return Sl(this.year());
}
function Hn(e, t) {
  return function(n) {
    return n != null ? (Ho(this, e, n), $.updateOffset(this, t), this) : ea(this, e);
  };
}
function ea(e, t) {
  if (!e.isValid())
    return NaN;
  var n = e._d, a = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return a ? n.getUTCMilliseconds() : n.getMilliseconds();
    case "Seconds":
      return a ? n.getUTCSeconds() : n.getSeconds();
    case "Minutes":
      return a ? n.getUTCMinutes() : n.getMinutes();
    case "Hours":
      return a ? n.getUTCHours() : n.getHours();
    case "Date":
      return a ? n.getUTCDate() : n.getDate();
    case "Day":
      return a ? n.getUTCDay() : n.getDay();
    case "Month":
      return a ? n.getUTCMonth() : n.getMonth();
    case "FullYear":
      return a ? n.getUTCFullYear() : n.getFullYear();
    default:
      return NaN;
  }
}
function Ho(e, t, n) {
  var a, l, i, s, r;
  if (!(!e.isValid() || isNaN(n))) {
    switch (a = e._d, l = e._isUTC, t) {
      case "Milliseconds":
        return void (l ? a.setUTCMilliseconds(n) : a.setMilliseconds(n));
      case "Seconds":
        return void (l ? a.setUTCSeconds(n) : a.setSeconds(n));
      case "Minutes":
        return void (l ? a.setUTCMinutes(n) : a.setMinutes(n));
      case "Hours":
        return void (l ? a.setUTCHours(n) : a.setHours(n));
      case "Date":
        return void (l ? a.setUTCDate(n) : a.setDate(n));
      case "FullYear":
        break;
      default:
        return;
    }
    i = n, s = e.month(), r = e.date(), r = r === 29 && s === 1 && !Sl(i) ? 28 : r, l ? a.setUTCFullYear(i, s, r) : a.setFullYear(i, s, r);
  }
}
function Qv(e) {
  return e = st(e), xt(this[e]) ? this[e]() : this;
}
function em(e, t) {
  if (typeof e == "object") {
    e = $i(e);
    var n = Hv(e), a, l = n.length;
    for (a = 0; a < l; a++)
      this[n[a].unit](e[n[a].unit]);
  } else if (e = st(e), xt(this[e]))
    return this[e](t);
  return this;
}
function tm(e, t) {
  return (e % t + t) % t;
}
var Pe;
Array.prototype.indexOf ? Pe = Array.prototype.indexOf : Pe = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function zi(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = tm(t, 12);
  return e += (t - n) / 12, n === 1 ? Sl(e) ? 29 : 28 : 31 - n % 7 % 2;
}
K("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
K("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
K("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
W("M", _e, Un);
W("MM", _e, et);
W("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
W("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
be(["M", "MM"], function(e, t) {
  t[Tt] = ue(e) - 1;
});
be(["MMM", "MMMM"], function(e, t, n, a) {
  var l = n._locale.monthsParse(e, a, n._strict);
  l != null ? t[Tt] = l : ne(n).invalidMonth = e;
});
var nm = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), zo = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, am = ka, lm = ka;
function im(e, t) {
  return e ? mt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || jo).test(t) ? "format" : "standalone"][e.month()] : mt(this._months) ? this._months : this._months.standalone;
}
function sm(e, t) {
  return e ? mt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[jo.test(t) ? "format" : "standalone"][e.month()] : mt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function rm(e, t, n) {
  var a, l, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      i = Vt([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : null) : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : null) : t === "MMM" ? (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : null)) : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : null));
}
function om(e, t, n) {
  var a, l, i;
  if (this._monthsParseExact)
    return rm.call(this, e, t, n);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), a = 0; a < 12; a++) {
    if (l = Vt([2e3, a]), n && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp(
      "^" + this.months(l, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[a] = new RegExp(
      "^" + this.monthsShort(l, "").replace(".", "") + "$",
      "i"
    )), !n && !this._monthsParse[a] && (i = "^" + this.months(l, "") + "|^" + this.monthsShort(l, ""), this._monthsParse[a] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[a].test(e))
      return a;
    if (n && t === "MMM" && this._shortMonthsParse[a].test(e))
      return a;
    if (!n && this._monthsParse[a].test(e))
      return a;
  }
}
function Go(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ue(t);
    else if (t = e.localeData().monthsParse(t), !Rt(t))
      return e;
  }
  var n = t, a = e.date();
  return a = a < 29 ? a : Math.min(a, zi(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, a) : e._d.setMonth(n, a), e;
}
function qo(e) {
  return e != null ? (Go(this, e), $.updateOffset(this, !0), this) : ea(this, "Month");
}
function um() {
  return zi(this.year(), this.month());
}
function cm(e) {
  return this._monthsParseExact ? (ve(this, "_monthsRegex") || Ko.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ve(this, "_monthsShortRegex") || (this._monthsShortRegex = am), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function dm(e) {
  return this._monthsParseExact ? (ve(this, "_monthsRegex") || Ko.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ve(this, "_monthsRegex") || (this._monthsRegex = lm), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Ko() {
  function e(o, c) {
    return c.length - o.length;
  }
  var t = [], n = [], a = [], l, i, s, r;
  for (l = 0; l < 12; l++)
    i = Vt([2e3, l]), s = Et(this.monthsShort(i, "")), r = Et(this.months(i, "")), t.push(s), n.push(r), a.push(r), a.push(s);
  t.sort(e), n.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function fm(e, t, n, a, l, i, s) {
  var r;
  return e < 100 && e >= 0 ? (r = new Date(e + 400, t, n, a, l, i, s), isFinite(r.getFullYear()) && r.setFullYear(e)) : r = new Date(e, t, n, a, l, i, s), r;
}
function ta(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Ka(e, t, n) {
  var a = 7 + t - n, l = (7 + ta(e, 0, a).getUTCDay() - t) % 7;
  return -l + a - 1;
}
function Zo(e, t, n, a, l) {
  var i = (7 + n - a) % 7, s = Ka(e, a, l), r = 1 + 7 * (t - 1) + i + s, o, c;
  return r <= 0 ? (o = e - 1, c = qn(o) + r) : r > qn(e) ? (o = e + 1, c = r - qn(e)) : (o = e, c = r), {
    year: o,
    dayOfYear: c
  };
}
function na(e, t, n) {
  var a = Ka(e.year(), t, n), l = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, i, s;
  return l < 1 ? (s = e.year() - 1, i = l + Lt(s, t, n)) : l > Lt(e.year(), t, n) ? (i = l - Lt(e.year(), t, n), s = e.year() + 1) : (s = e.year(), i = l), {
    week: i,
    year: s
  };
}
function Lt(e, t, n) {
  var a = Ka(e, t, n), l = Ka(e + 1, t, n);
  return (qn(e) - a + l) / 7;
}
K("w", ["ww", 2], "wo", "week");
K("W", ["WW", 2], "Wo", "isoWeek");
W("w", _e, Un);
W("ww", _e, et);
W("W", _e, Un);
W("WW", _e, et);
ba(
  ["w", "ww", "W", "WW"],
  function(e, t, n, a) {
    t[a.substr(0, 1)] = ue(e);
  }
);
function vm(e) {
  return na(e, this._week.dow, this._week.doy).week;
}
var mm = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function hm() {
  return this._week.dow;
}
function gm() {
  return this._week.doy;
}
function ym(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function km(e) {
  var t = na(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
K("d", 0, "do", "day");
K("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
K("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
K("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
K("e", 0, 0, "weekday");
K("E", 0, 0, "isoWeekday");
W("d", _e);
W("e", _e);
W("E", _e);
W("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
W("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
W("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
ba(["dd", "ddd", "dddd"], function(e, t, n, a) {
  var l = n._locale.weekdaysParse(e, a, n._strict);
  l != null ? t.d = l : ne(n).invalidWeekday = e;
});
ba(["d", "e", "E"], function(e, t, n, a) {
  t[a] = ue(e);
});
function bm(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function pm(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ji(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var _m = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Xo = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Sm = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), wm = ka, Cm = ka, Vm = ka;
function xm(e, t) {
  var n = mt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ji(n, this._week.dow) : e ? n[e.day()] : n;
}
function Pm(e) {
  return e === !0 ? ji(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Mm(e) {
  return e === !0 ? ji(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Dm(e, t, n) {
  var a, l, i, s = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], a = 0; a < 7; ++a)
      i = Vt([2e3, 1]).day(a), this._minWeekdaysParse[a] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[a] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[a] = this.weekdays(i, "").toLocaleLowerCase();
  return n ? t === "dddd" ? (l = Pe.call(this._weekdaysParse, s), l !== -1 ? l : null) : t === "ddd" ? (l = Pe.call(this._shortWeekdaysParse, s), l !== -1 ? l : null) : (l = Pe.call(this._minWeekdaysParse, s), l !== -1 ? l : null) : t === "dddd" ? (l = Pe.call(this._weekdaysParse, s), l !== -1 || (l = Pe.call(this._shortWeekdaysParse, s), l !== -1) ? l : (l = Pe.call(this._minWeekdaysParse, s), l !== -1 ? l : null)) : t === "ddd" ? (l = Pe.call(this._shortWeekdaysParse, s), l !== -1 || (l = Pe.call(this._weekdaysParse, s), l !== -1) ? l : (l = Pe.call(this._minWeekdaysParse, s), l !== -1 ? l : null)) : (l = Pe.call(this._minWeekdaysParse, s), l !== -1 || (l = Pe.call(this._weekdaysParse, s), l !== -1) ? l : (l = Pe.call(this._shortWeekdaysParse, s), l !== -1 ? l : null));
}
function Om(e, t, n) {
  var a, l, i;
  if (this._weekdaysParseExact)
    return Dm.call(this, e, t, n);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), a = 0; a < 7; a++) {
    if (l = Vt([2e3, 1]).day(a), n && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp(
      "^" + this.weekdays(l, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysShort(l, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[a] = new RegExp(
      "^" + this.weekdaysMin(l, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[a] || (i = "^" + this.weekdays(l, "") + "|^" + this.weekdaysShort(l, "") + "|^" + this.weekdaysMin(l, ""), this._weekdaysParse[a] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[a].test(e))
      return a;
    if (n && t === "ddd" && this._shortWeekdaysParse[a].test(e))
      return a;
    if (n && t === "dd" && this._minWeekdaysParse[a].test(e))
      return a;
    if (!n && this._weekdaysParse[a].test(e))
      return a;
  }
}
function Im(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ea(this, "Day");
  return e != null ? (e = bm(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Tm(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Am(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = pm(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Em(e) {
  return this._weekdaysParseExact ? (ve(this, "_weekdaysRegex") || Gi.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ve(this, "_weekdaysRegex") || (this._weekdaysRegex = wm), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Lm(e) {
  return this._weekdaysParseExact ? (ve(this, "_weekdaysRegex") || Gi.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ve(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Cm), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Fm(e) {
  return this._weekdaysParseExact ? (ve(this, "_weekdaysRegex") || Gi.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ve(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Vm), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Gi() {
  function e(d, v) {
    return v.length - d.length;
  }
  var t = [], n = [], a = [], l = [], i, s, r, o, c;
  for (i = 0; i < 7; i++)
    s = Vt([2e3, 1]).day(i), r = Et(this.weekdaysMin(s, "")), o = Et(this.weekdaysShort(s, "")), c = Et(this.weekdays(s, "")), t.push(r), n.push(o), a.push(c), l.push(r), l.push(o), l.push(c);
  t.sort(e), n.sort(e), a.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + a.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function qi() {
  return this.hours() % 12 || 12;
}
function Rm() {
  return this.hours() || 24;
}
K("H", ["HH", 2], 0, "hour");
K("h", ["hh", 2], 0, qi);
K("k", ["kk", 2], 0, Rm);
K("hmm", 0, 0, function() {
  return "" + qi.apply(this) + _t(this.minutes(), 2);
});
K("hmmss", 0, 0, function() {
  return "" + qi.apply(this) + _t(this.minutes(), 2) + _t(this.seconds(), 2);
});
K("Hmm", 0, 0, function() {
  return "" + this.hours() + _t(this.minutes(), 2);
});
K("Hmmss", 0, 0, function() {
  return "" + this.hours() + _t(this.minutes(), 2) + _t(this.seconds(), 2);
});
function Jo(e, t) {
  K(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Jo("a", !0);
Jo("A", !1);
function Qo(e, t) {
  return t._meridiemParse;
}
W("a", Qo);
W("A", Qo);
W("H", _e, Hi);
W("h", _e, Un);
W("k", _e, Un);
W("HH", _e, et);
W("hh", _e, et);
W("kk", _e, et);
W("hmm", $o);
W("hmmss", Wo);
W("Hmm", $o);
W("Hmmss", Wo);
be(["H", "HH"], Ie);
be(["k", "kk"], function(e, t, n) {
  var a = ue(e);
  t[Ie] = a === 24 ? 0 : a;
});
be(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
be(["h", "hh"], function(e, t, n) {
  t[Ie] = ue(e), ne(n).bigHour = !0;
});
be("hmm", function(e, t, n) {
  var a = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a)), ne(n).bigHour = !0;
});
be("hmmss", function(e, t, n) {
  var a = e.length - 4, l = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a, 2)), t[At] = ue(e.substr(l)), ne(n).bigHour = !0;
});
be("Hmm", function(e, t, n) {
  var a = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a));
});
be("Hmmss", function(e, t, n) {
  var a = e.length - 4, l = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a, 2)), t[At] = ue(e.substr(l));
});
function Nm(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var Ym = /[ap]\.?m?\.?/i, Bm = Hn("Hours", !0);
function $m(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var eu = {
  calendar: Dv,
  longDateFormat: Av,
  invalidDate: Lv,
  ordinal: Rv,
  dayOfMonthOrdinalParse: Nv,
  relativeTime: Bv,
  months: nm,
  monthsShort: zo,
  week: mm,
  weekdays: _m,
  weekdaysMin: Sm,
  weekdaysShort: Xo,
  meridiemParse: Ym
}, Se = {}, jn = {}, aa;
function Wm(e, t) {
  var n, a = Math.min(e.length, t.length);
  for (n = 0; n < a; n += 1)
    if (e[n] !== t[n])
      return n;
  return a;
}
function Xs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Um(e) {
  for (var t = 0, n, a, l, i; t < e.length; ) {
    for (i = Xs(e[t]).split("-"), n = i.length, a = Xs(e[t + 1]), a = a ? a.split("-") : null; n > 0; ) {
      if (l = wl(i.slice(0, n).join("-")), l)
        return l;
      if (a && a.length >= n && Wm(i, a) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return aa;
}
function Hm(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function wl(e) {
  var t = null, n;
  if (Se[e] === void 0 && typeof module < "u" && module && module.exports && Hm(e))
    try {
      t = aa._abbr, n = require, n("./locale/" + e), Jt(t);
    } catch {
      Se[e] = null;
    }
  return Se[e];
}
function Jt(e, t) {
  var n;
  return e && (He(t) ? n = Ht(e) : n = Ki(e, t), n ? aa = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), aa._abbr;
}
function Ki(e, t) {
  if (t !== null) {
    var n, a = eu;
    if (t.abbr = e, Se[e] != null)
      Ro(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = Se[e]._config;
    else if (t.parentLocale != null)
      if (Se[t.parentLocale] != null)
        a = Se[t.parentLocale]._config;
      else if (n = wl(t.parentLocale), n != null)
        a = n._config;
      else
        return jn[t.parentLocale] || (jn[t.parentLocale] = []), jn[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return Se[e] = new Yi(ni(a, t)), jn[e] && jn[e].forEach(function(l) {
      Ki(l.name, l.config);
    }), Jt(e), Se[e];
  } else
    return delete Se[e], null;
}
function zm(e, t) {
  if (t != null) {
    var n, a, l = eu;
    Se[e] != null && Se[e].parentLocale != null ? Se[e].set(ni(Se[e]._config, t)) : (a = wl(e), a != null && (l = a._config), t = ni(l, t), a == null && (t.abbr = e), n = new Yi(t), n.parentLocale = Se[e], Se[e] = n), Jt(e);
  } else
    Se[e] != null && (Se[e].parentLocale != null ? (Se[e] = Se[e].parentLocale, e === Jt() && Jt(e)) : Se[e] != null && delete Se[e]);
  return Se[e];
}
function Ht(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return aa;
  if (!mt(e)) {
    if (t = wl(e), t)
      return t;
    e = [e];
  }
  return Um(e);
}
function jm() {
  return ai(Se);
}
function Zi(e) {
  var t, n = e._a;
  return n && ne(e).overflow === -2 && (t = n[Tt] < 0 || n[Tt] > 11 ? Tt : n[pt] < 1 || n[pt] > zi(n[Be], n[Tt]) ? pt : n[Ie] < 0 || n[Ie] > 24 || n[Ie] === 24 && (n[ot] !== 0 || n[At] !== 0 || n[sn] !== 0) ? Ie : n[ot] < 0 || n[ot] > 59 ? ot : n[At] < 0 || n[At] > 59 ? At : n[sn] < 0 || n[sn] > 999 ? sn : -1, ne(e)._overflowDayOfYear && (t < Be || t > pt) && (t = pt), ne(e)._overflowWeeks && t === -1 && (t = Zv), ne(e)._overflowWeekday && t === -1 && (t = Xv), ne(e).overflow = t), e;
}
var Gm = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, qm = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Km = /Z|[+-]\d\d(?::?\d\d)?/, Da = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], Yl = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], Zm = /^\/?Date\((-?\d+)/i, Xm = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Jm = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function tu(e) {
  var t, n, a = e._i, l = Gm.exec(a) || qm.exec(a), i, s, r, o, c = Da.length, d = Yl.length;
  if (l) {
    for (ne(e).iso = !0, t = 0, n = c; t < n; t++)
      if (Da[t][1].exec(l[1])) {
        s = Da[t][0], i = Da[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (l[3]) {
      for (t = 0, n = d; t < n; t++)
        if (Yl[t][1].exec(l[3])) {
          r = (l[2] || " ") + Yl[t][0];
          break;
        }
      if (r == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && r != null) {
      e._isValid = !1;
      return;
    }
    if (l[4])
      if (Km.exec(l[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (r || "") + (o || ""), Ji(e);
  } else
    e._isValid = !1;
}
function Qm(e, t, n, a, l, i) {
  var s = [
    eh(e),
    zo.indexOf(t),
    parseInt(n, 10),
    parseInt(a, 10),
    parseInt(l, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function eh(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function th(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function nh(e, t, n) {
  if (e) {
    var a = Xo.indexOf(e), l = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== l)
      return ne(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function ah(e, t, n) {
  if (e)
    return Jm[e];
  if (t)
    return 0;
  var a = parseInt(n, 10), l = a % 100, i = (a - l) / 100;
  return i * 60 + l;
}
function nu(e) {
  var t = Xm.exec(th(e._i)), n;
  if (t) {
    if (n = Qm(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !nh(t[1], n, e))
      return;
    e._a = n, e._tzm = ah(t[8], t[9], t[10]), e._d = ta.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), ne(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function lh(e) {
  var t = Zm.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (tu(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (nu(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : $.createFromInputFallback(e);
}
$.createFromInputFallback = it(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Sn(e, t, n) {
  return e ?? t ?? n;
}
function ih(e) {
  var t = new Date($.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function Xi(e) {
  var t, n, a = [], l, i, s;
  if (!e._d) {
    for (l = ih(e), e._w && e._a[pt] == null && e._a[Tt] == null && sh(e), e._dayOfYear != null && (s = Sn(e._a[Be], l[Be]), (e._dayOfYear > qn(s) || e._dayOfYear === 0) && (ne(e)._overflowDayOfYear = !0), n = ta(s, 0, e._dayOfYear), e._a[Tt] = n.getUTCMonth(), e._a[pt] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = l[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Ie] === 24 && e._a[ot] === 0 && e._a[At] === 0 && e._a[sn] === 0 && (e._nextDay = !0, e._a[Ie] = 0), e._d = (e._useUTC ? ta : fm).apply(
      null,
      a
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ie] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (ne(e).weekdayMismatch = !0);
  }
}
function sh(e) {
  var t, n, a, l, i, s, r, o, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, n = Sn(
    t.GG,
    e._a[Be],
    na(pe(), 1, 4).year
  ), a = Sn(t.W, 1), l = Sn(t.E, 1), (l < 1 || l > 7) && (o = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, c = na(pe(), i, s), n = Sn(t.gg, e._a[Be], c.year), a = Sn(t.w, c.week), t.d != null ? (l = t.d, (l < 0 || l > 6) && (o = !0)) : t.e != null ? (l = t.e + i, (t.e < 0 || t.e > 6) && (o = !0)) : l = i), a < 1 || a > Lt(n, i, s) ? ne(e)._overflowWeeks = !0 : o != null ? ne(e)._overflowWeekday = !0 : (r = Zo(n, a, l, i, s), e._a[Be] = r.year, e._dayOfYear = r.dayOfYear);
}
$.ISO_8601 = function() {
};
$.RFC_2822 = function() {
};
function Ji(e) {
  if (e._f === $.ISO_8601) {
    tu(e);
    return;
  }
  if (e._f === $.RFC_2822) {
    nu(e);
    return;
  }
  e._a = [], ne(e).empty = !0;
  var t = "" + e._i, n, a, l, i, s, r = t.length, o = 0, c, d;
  for (l = No(e._f, e._locale).match(Bi) || [], d = l.length, n = 0; n < d; n++)
    i = l[n], a = (t.match(Gv(i, e)) || [])[0], a && (s = t.substr(0, t.indexOf(a)), s.length > 0 && ne(e).unusedInput.push(s), t = t.slice(
      t.indexOf(a) + a.length
    ), o += a.length), Dn[i] ? (a ? ne(e).empty = !1 : ne(e).unusedTokens.push(i), Kv(i, a, e)) : e._strict && !a && ne(e).unusedTokens.push(i);
  ne(e).charsLeftOver = r - o, t.length > 0 && ne(e).unusedInput.push(t), e._a[Ie] <= 12 && ne(e).bigHour === !0 && e._a[Ie] > 0 && (ne(e).bigHour = void 0), ne(e).parsedDateParts = e._a.slice(0), ne(e).meridiem = e._meridiem, e._a[Ie] = rh(
    e._locale,
    e._a[Ie],
    e._meridiem
  ), c = ne(e).era, c !== null && (e._a[Be] = e._locale.erasConvertYear(c, e._a[Be])), Xi(e), Zi(e);
}
function rh(e, t, n) {
  var a;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (a = e.isPM(n), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function oh(e) {
  var t, n, a, l, i, s, r = !1, o = e._f.length;
  if (o === 0) {
    ne(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (l = 0; l < o; l++)
    i = 0, s = !1, t = Ni({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[l], Ji(t), Ri(t) && (s = !0), i += ne(t).charsLeftOver, i += ne(t).unusedTokens.length * 10, ne(t).score = i, r ? i < a && (a = i, n = t) : (a == null || i < a || s) && (a = i, n = t, s && (r = !0));
  Kt(e, n || t);
}
function uh(e) {
  if (!e._d) {
    var t = $i(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Lo(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), Xi(e);
  }
}
function ch(e) {
  var t = new ya(Zi(au(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function au(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Ht(e._l), t === null || n === void 0 && t === "" ? gl({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ht(t) ? new ya(Zi(t)) : (ga(t) ? e._d = t : mt(n) ? oh(e) : n ? Ji(e) : dh(e), Ri(e) || (e._d = null), e));
}
function dh(e) {
  var t = e._i;
  He(t) ? e._d = new Date($.now()) : ga(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? lh(e) : mt(t) ? (e._a = Lo(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Xi(e)) : dn(t) ? uh(e) : Rt(t) ? e._d = new Date(t) : $.createFromInputFallback(e);
}
function lu(e, t, n, a, l) {
  var i = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (n === !0 || n === !1) && (a = n, n = void 0), (dn(e) && Fi(e) || mt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = l, i._l = n, i._i = e, i._f = t, i._strict = a, ch(i);
}
function pe(e, t, n, a) {
  return lu(e, t, n, a, !1);
}
var fh = it(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = pe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : gl();
  }
), vh = it(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = pe.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : gl();
  }
);
function iu(e, t) {
  var n, a;
  if (t.length === 1 && mt(t[0]) && (t = t[0]), !t.length)
    return pe();
  for (n = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](n)) && (n = t[a]);
  return n;
}
function mh() {
  var e = [].slice.call(arguments, 0);
  return iu("isBefore", e);
}
function hh() {
  var e = [].slice.call(arguments, 0);
  return iu("isAfter", e);
}
var gh = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Gn = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function yh(e) {
  var t, n = !1, a, l = Gn.length;
  for (t in e)
    if (ve(e, t) && !(Pe.call(Gn, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < l; ++a)
    if (e[Gn[a]]) {
      if (n)
        return !1;
      parseFloat(e[Gn[a]]) !== ue(e[Gn[a]]) && (n = !0);
    }
  return !0;
}
function kh() {
  return this._isValid;
}
function bh() {
  return kt(NaN);
}
function Cl(e) {
  var t = $i(e), n = t.year || 0, a = t.quarter || 0, l = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, r = t.hour || 0, o = t.minute || 0, c = t.second || 0, d = t.millisecond || 0;
  this._isValid = yh(t), this._milliseconds = +d + c * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  r * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +l + a * 3 + n * 12, this._data = {}, this._locale = Ht(), this._bubble();
}
function Fa(e) {
  return e instanceof Cl;
}
function ii(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function ph(e, t, n) {
  var a = Math.min(e.length, t.length), l = Math.abs(e.length - t.length), i = 0, s;
  for (s = 0; s < a; s++)
    (n && e[s] !== t[s] || !n && ue(e[s]) !== ue(t[s])) && i++;
  return i + l;
}
function su(e, t) {
  K(e, 0, 0, function() {
    var n = this.utcOffset(), a = "+";
    return n < 0 && (n = -n, a = "-"), a + _t(~~(n / 60), 2) + t + _t(~~n % 60, 2);
  });
}
su("Z", ":");
su("ZZ", "");
W("Z", _l);
W("ZZ", _l);
be(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Qi(_l, e);
});
var _h = /([\+\-]|\d\d)/gi;
function Qi(e, t) {
  var n = (t || "").match(e), a, l, i;
  return n === null ? null : (a = n[n.length - 1] || [], l = (a + "").match(_h) || ["-", 0, 0], i = +(l[1] * 60) + ue(l[2]), i === 0 ? 0 : l[0] === "+" ? i : -i);
}
function es(e, t) {
  var n, a;
  return t._isUTC ? (n = t.clone(), a = (ht(e) || ga(e) ? e.valueOf() : pe(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), $.updateOffset(n, !1), n) : pe(e).local();
}
function si(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
$.updateOffset = function() {
};
function Sh(e, t, n) {
  var a = this._offset || 0, l;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = Qi(_l, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (l = si(this)), this._offset = e, this._isUTC = !0, l != null && this.add(l, "m"), a !== e && (!t || this._changeInProgress ? uu(
      this,
      kt(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, $.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : si(this);
}
function wh(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ch(e) {
  return this.utcOffset(0, e);
}
function Vh(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(si(this), "m")), this;
}
function xh() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Qi(zv, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ph(e) {
  return this.isValid() ? (e = e ? pe(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Mh() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Dh() {
  if (!He(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Ni(e, this), e = au(e), e._a ? (t = e._isUTC ? Vt(e._a) : pe(e._a), this._isDSTShifted = this.isValid() && ph(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Oh() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ih() {
  return this.isValid() ? this._isUTC : !1;
}
function ru() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Th = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ah = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function kt(e, t) {
  var n = e, a = null, l, i, s;
  return Fa(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Rt(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (a = Th.exec(e)) ? (l = a[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ue(a[pt]) * l,
    h: ue(a[Ie]) * l,
    m: ue(a[ot]) * l,
    s: ue(a[At]) * l,
    ms: ue(ii(a[sn] * 1e3)) * l
    // the millisecond decimal point is included in the match
  }) : (a = Ah.exec(e)) ? (l = a[1] === "-" ? -1 : 1, n = {
    y: an(a[2], l),
    M: an(a[3], l),
    w: an(a[4], l),
    d: an(a[5], l),
    h: an(a[6], l),
    m: an(a[7], l),
    s: an(a[8], l)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (s = Eh(
    pe(n.from),
    pe(n.to)
  ), n = {}, n.ms = s.milliseconds, n.M = s.months), i = new Cl(n), Fa(e) && ve(e, "_locale") && (i._locale = e._locale), Fa(e) && ve(e, "_isValid") && (i._isValid = e._isValid), i;
}
kt.fn = Cl.prototype;
kt.invalid = bh;
function an(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Js(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Eh(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = es(t, e), e.isBefore(t) ? n = Js(e, t) : (n = Js(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function ou(e, t) {
  return function(n, a) {
    var l, i;
    return a !== null && !isNaN(+a) && (Ro(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = a, a = i), l = kt(n, a), uu(this, l, e), this;
  };
}
function uu(e, t, n, a) {
  var l = t._milliseconds, i = ii(t._days), s = ii(t._months);
  e.isValid() && (a = a ?? !0, s && Go(e, ea(e, "Month") + s * n), i && Ho(e, "Date", ea(e, "Date") + i * n), l && e._d.setTime(e._d.valueOf() + l * n), a && $.updateOffset(e, i || s));
}
var Lh = ou(1, "add"), Fh = ou(-1, "subtract");
function cu(e) {
  return typeof e == "string" || e instanceof String;
}
function Rh(e) {
  return ht(e) || ga(e) || cu(e) || Rt(e) || Yh(e) || Nh(e) || e === null || e === void 0;
}
function Nh(e) {
  var t = dn(e) && !Fi(e), n = !1, a = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], l, i, s = a.length;
  for (l = 0; l < s; l += 1)
    i = a[l], n = n || ve(e, i);
  return t && n;
}
function Yh(e) {
  var t = mt(e), n = !1;
  return t && (n = e.filter(function(a) {
    return !Rt(a) && cu(e);
  }).length === 0), t && n;
}
function Bh(e) {
  var t = dn(e) && !Fi(e), n = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], l, i;
  for (l = 0; l < a.length; l += 1)
    i = a[l], n = n || ve(e, i);
  return t && n;
}
function $h(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Wh(e, t) {
  arguments.length === 1 && (arguments[0] ? Rh(arguments[0]) ? (e = arguments[0], t = void 0) : Bh(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || pe(), a = es(n, this).startOf("day"), l = $.calendarFormat(this, a) || "sameElse", i = t && (xt(t[l]) ? t[l].call(this, n) : t[l]);
  return this.format(
    i || this.localeData().calendar(l, this, pe(n))
  );
}
function Uh() {
  return new ya(this);
}
function Hh(e, t) {
  var n = ht(e) ? e : pe(e);
  return this.isValid() && n.isValid() ? (t = st(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function zh(e, t) {
  var n = ht(e) ? e : pe(e);
  return this.isValid() && n.isValid() ? (t = st(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function jh(e, t, n, a) {
  var l = ht(e) ? e : pe(e), i = ht(t) ? t : pe(t);
  return this.isValid() && l.isValid() && i.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(l, n) : !this.isBefore(l, n)) && (a[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function Gh(e, t) {
  var n = ht(e) ? e : pe(e), a;
  return this.isValid() && n.isValid() ? (t = st(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function qh(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Kh(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Zh(e, t, n) {
  var a, l, i;
  if (!this.isValid())
    return NaN;
  if (a = es(e, this), !a.isValid())
    return NaN;
  switch (l = (a.utcOffset() - this.utcOffset()) * 6e4, t = st(t), t) {
    case "year":
      i = Ra(this, a) / 12;
      break;
    case "month":
      i = Ra(this, a);
      break;
    case "quarter":
      i = Ra(this, a) / 3;
      break;
    case "second":
      i = (this - a) / 1e3;
      break;
    case "minute":
      i = (this - a) / 6e4;
      break;
    case "hour":
      i = (this - a) / 36e5;
      break;
    case "day":
      i = (this - a - l) / 864e5;
      break;
    case "week":
      i = (this - a - l) / 6048e5;
      break;
    default:
      i = this - a;
  }
  return n ? i : tt(i);
}
function Ra(e, t) {
  if (e.date() < t.date())
    return -Ra(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(n, "months"), l, i;
  return t - a < 0 ? (l = e.clone().add(n - 1, "months"), i = (t - a) / (a - l)) : (l = e.clone().add(n + 1, "months"), i = (t - a) / (l - a)), -(n + i) || 0;
}
$.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
$.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function Xh() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function Jh(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? La(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : xt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", La(n, "Z")) : La(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function Qh() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, a, l, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", l = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + a + l + i);
}
function eg(e) {
  e || (e = this.isUtc() ? $.defaultFormatUtc : $.defaultFormat);
  var t = La(this, e);
  return this.localeData().postformat(t);
}
function tg(e, t) {
  return this.isValid() && (ht(e) && e.isValid() || pe(e).isValid()) ? kt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ng(e) {
  return this.from(pe(), e);
}
function ag(e, t) {
  return this.isValid() && (ht(e) && e.isValid() || pe(e).isValid()) ? kt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function lg(e) {
  return this.to(pe(), e);
}
function du(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Ht(e), t != null && (this._locale = t), this);
}
var fu = it(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function vu() {
  return this._locale;
}
var Za = 1e3, On = 60 * Za, Xa = 60 * On, mu = (365 * 400 + 97) * 24 * Xa;
function In(e, t) {
  return (e % t + t) % t;
}
function hu(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - mu : new Date(e, t, n).valueOf();
}
function gu(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - mu : Date.UTC(e, t, n);
}
function ig(e) {
  var t, n;
  if (e = st(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? gu : hu, e) {
    case "year":
      t = n(this.year(), 0, 1);
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = n(this.year(), this.month(), 1);
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= In(
        t + (this._isUTC ? 0 : this.utcOffset() * On),
        Xa
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= In(t, On);
      break;
    case "second":
      t = this._d.valueOf(), t -= In(t, Za);
      break;
  }
  return this._d.setTime(t), $.updateOffset(this, !0), this;
}
function sg(e) {
  var t, n;
  if (e = st(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? gu : hu, e) {
    case "year":
      t = n(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = n(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = n(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = n(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = n(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = n(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += Xa - In(
        t + (this._isUTC ? 0 : this.utcOffset() * On),
        Xa
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += On - In(t, On) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Za - In(t, Za) - 1;
      break;
  }
  return this._d.setTime(t), $.updateOffset(this, !0), this;
}
function rg() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function og() {
  return Math.floor(this.valueOf() / 1e3);
}
function ug() {
  return new Date(this.valueOf());
}
function cg() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function dg() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function fg() {
  return this.isValid() ? this.toISOString() : null;
}
function vg() {
  return Ri(this);
}
function mg() {
  return Kt({}, ne(this));
}
function hg() {
  return ne(this).overflow;
}
function gg() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
K("N", 0, 0, "eraAbbr");
K("NN", 0, 0, "eraAbbr");
K("NNN", 0, 0, "eraAbbr");
K("NNNN", 0, 0, "eraName");
K("NNNNN", 0, 0, "eraNarrow");
K("y", ["y", 1], "yo", "eraYear");
K("y", ["yy", 2], 0, "eraYear");
K("y", ["yyy", 3], 0, "eraYear");
K("y", ["yyyy", 4], 0, "eraYear");
W("N", ts);
W("NN", ts);
W("NNN", ts);
W("NNNN", Pg);
W("NNNNN", Mg);
be(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, a) {
    var l = n._locale.erasParse(e, a, n._strict);
    l ? ne(n).era = l : ne(n).invalidEra = e;
  }
);
W("y", Wn);
W("yy", Wn);
W("yyy", Wn);
W("yyyy", Wn);
W("yo", Dg);
be(["y", "yy", "yyy", "yyyy"], Be);
be(["yo"], function(e, t, n, a) {
  var l;
  n._locale._eraYearOrdinalRegex && (l = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Be] = n._locale.eraYearOrdinalParse(e, l) : t[Be] = parseInt(e, 10);
});
function yg(e, t) {
  var n, a, l, i = this._eras || Ht("en")._eras;
  for (n = 0, a = i.length; n < a; ++n) {
    switch (typeof i[n].since) {
      case "string":
        l = $(i[n].since).startOf("day"), i[n].since = l.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        l = $(i[n].until).startOf("day").valueOf(), i[n].until = l.valueOf();
        break;
    }
  }
  return i;
}
function kg(e, t, n) {
  var a, l, i = this.eras(), s, r, o;
  for (e = e.toUpperCase(), a = 0, l = i.length; a < l; ++a)
    if (s = i[a].name.toUpperCase(), r = i[a].abbr.toUpperCase(), o = i[a].narrow.toUpperCase(), n)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (r === e)
            return i[a];
          break;
        case "NNNN":
          if (s === e)
            return i[a];
          break;
        case "NNNNN":
          if (o === e)
            return i[a];
          break;
      }
    else if ([s, r, o].indexOf(e) >= 0)
      return i[a];
}
function bg(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? $(e.since).year() : $(e.since).year() + (t - e.offset) * n;
}
function pg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].name;
  return "";
}
function _g() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].narrow;
  return "";
}
function Sg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].abbr;
  return "";
}
function wg() {
  var e, t, n, a, l = this.localeData().eras();
  for (e = 0, t = l.length; e < t; ++e)
    if (n = l[e].since <= l[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), l[e].since <= a && a <= l[e].until || l[e].until <= a && a <= l[e].since)
      return (this.year() - $(l[e].since).year()) * n + l[e].offset;
  return this.year();
}
function Cg(e) {
  return ve(this, "_erasNameRegex") || ns.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Vg(e) {
  return ve(this, "_erasAbbrRegex") || ns.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function xg(e) {
  return ve(this, "_erasNarrowRegex") || ns.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ts(e, t) {
  return t.erasAbbrRegex(e);
}
function Pg(e, t) {
  return t.erasNameRegex(e);
}
function Mg(e, t) {
  return t.erasNarrowRegex(e);
}
function Dg(e, t) {
  return t._eraYearOrdinalRegex || Wn;
}
function ns() {
  var e = [], t = [], n = [], a = [], l, i, s, r, o, c = this.eras();
  for (l = 0, i = c.length; l < i; ++l)
    s = Et(c[l].name), r = Et(c[l].abbr), o = Et(c[l].narrow), t.push(s), e.push(r), n.push(o), a.push(s), a.push(r), a.push(o);
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
K(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
K(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function Vl(e, t) {
  K(0, [e, e.length], 0, t);
}
Vl("gggg", "weekYear");
Vl("ggggg", "weekYear");
Vl("GGGG", "isoWeekYear");
Vl("GGGGG", "isoWeekYear");
W("G", pl);
W("g", pl);
W("GG", _e, et);
W("gg", _e, et);
W("GGGG", Ui, Wi);
W("gggg", Ui, Wi);
W("GGGGG", bl, yl);
W("ggggg", bl, yl);
ba(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, a) {
    t[a.substr(0, 2)] = ue(e);
  }
);
ba(["gg", "GG"], function(e, t, n, a) {
  t[a] = $.parseTwoDigitYear(e);
});
function Og(e) {
  return yu.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Ig(e) {
  return yu.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Tg() {
  return Lt(this.year(), 1, 4);
}
function Ag() {
  return Lt(this.isoWeekYear(), 1, 4);
}
function Eg() {
  var e = this.localeData()._week;
  return Lt(this.year(), e.dow, e.doy);
}
function Lg() {
  var e = this.localeData()._week;
  return Lt(this.weekYear(), e.dow, e.doy);
}
function yu(e, t, n, a, l) {
  var i;
  return e == null ? na(this, a, l).year : (i = Lt(e, a, l), t > i && (t = i), Fg.call(this, e, t, n, a, l));
}
function Fg(e, t, n, a, l) {
  var i = Zo(e, t, n, a, l), s = ta(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
K("Q", 0, "Qo", "quarter");
W("Q", Yo);
be("Q", function(e, t) {
  t[Tt] = (ue(e) - 1) * 3;
});
function Rg(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
K("D", ["DD", 2], "Do", "date");
W("D", _e, Un);
W("DD", _e, et);
W("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
be(["D", "DD"], pt);
be("Do", function(e, t) {
  t[pt] = ue(e.match(_e)[0]);
});
var ku = Hn("Date", !0);
K("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
W("DDD", kl);
W("DDDD", Bo);
be(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ue(e);
});
function Ng(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
K("m", ["mm", 2], 0, "minute");
W("m", _e, Hi);
W("mm", _e, et);
be(["m", "mm"], ot);
var Yg = Hn("Minutes", !1);
K("s", ["ss", 2], 0, "second");
W("s", _e, Hi);
W("ss", _e, et);
be(["s", "ss"], At);
var Bg = Hn("Seconds", !1);
K("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
K(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
K(0, ["SSS", 3], 0, "millisecond");
K(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
K(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
K(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
K(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
K(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
K(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
W("S", kl, Yo);
W("SS", kl, et);
W("SSS", kl, Bo);
var Zt, bu;
for (Zt = "SSSS"; Zt.length <= 9; Zt += "S")
  W(Zt, Wn);
function $g(e, t) {
  t[sn] = ue(("0." + e) * 1e3);
}
for (Zt = "S"; Zt.length <= 9; Zt += "S")
  be(Zt, $g);
bu = Hn("Milliseconds", !1);
K("z", 0, 0, "zoneAbbr");
K("zz", 0, 0, "zoneName");
function Wg() {
  return this._isUTC ? "UTC" : "";
}
function Ug() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var F = ya.prototype;
F.add = Lh;
F.calendar = Wh;
F.clone = Uh;
F.diff = Zh;
F.endOf = sg;
F.format = eg;
F.from = tg;
F.fromNow = ng;
F.to = ag;
F.toNow = lg;
F.get = Qv;
F.invalidAt = hg;
F.isAfter = Hh;
F.isBefore = zh;
F.isBetween = jh;
F.isSame = Gh;
F.isSameOrAfter = qh;
F.isSameOrBefore = Kh;
F.isValid = vg;
F.lang = fu;
F.locale = du;
F.localeData = vu;
F.max = vh;
F.min = fh;
F.parsingFlags = mg;
F.set = em;
F.startOf = ig;
F.subtract = Fh;
F.toArray = cg;
F.toObject = dg;
F.toDate = ug;
F.toISOString = Jh;
F.inspect = Qh;
typeof Symbol < "u" && Symbol.for != null && (F[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
F.toJSON = fg;
F.toString = Xh;
F.unix = og;
F.valueOf = rg;
F.creationData = gg;
F.eraName = pg;
F.eraNarrow = _g;
F.eraAbbr = Sg;
F.eraYear = wg;
F.year = Uo;
F.isLeapYear = Jv;
F.weekYear = Og;
F.isoWeekYear = Ig;
F.quarter = F.quarters = Rg;
F.month = qo;
F.daysInMonth = um;
F.week = F.weeks = ym;
F.isoWeek = F.isoWeeks = km;
F.weeksInYear = Eg;
F.weeksInWeekYear = Lg;
F.isoWeeksInYear = Tg;
F.isoWeeksInISOWeekYear = Ag;
F.date = ku;
F.day = F.days = Im;
F.weekday = Tm;
F.isoWeekday = Am;
F.dayOfYear = Ng;
F.hour = F.hours = Bm;
F.minute = F.minutes = Yg;
F.second = F.seconds = Bg;
F.millisecond = F.milliseconds = bu;
F.utcOffset = Sh;
F.utc = Ch;
F.local = Vh;
F.parseZone = xh;
F.hasAlignedHourOffset = Ph;
F.isDST = Mh;
F.isLocal = Oh;
F.isUtcOffset = Ih;
F.isUtc = ru;
F.isUTC = ru;
F.zoneAbbr = Wg;
F.zoneName = Ug;
F.dates = it(
  "dates accessor is deprecated. Use date instead.",
  ku
);
F.months = it(
  "months accessor is deprecated. Use month instead",
  qo
);
F.years = it(
  "years accessor is deprecated. Use year instead",
  Uo
);
F.zone = it(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  wh
);
F.isDSTShifted = it(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Dh
);
function Hg(e) {
  return pe(e * 1e3);
}
function zg() {
  return pe.apply(null, arguments).parseZone();
}
function pu(e) {
  return e;
}
var me = Yi.prototype;
me.calendar = Ov;
me.longDateFormat = Ev;
me.invalidDate = Fv;
me.ordinal = Yv;
me.preparse = pu;
me.postformat = pu;
me.relativeTime = $v;
me.pastFuture = Wv;
me.set = Mv;
me.eras = yg;
me.erasParse = kg;
me.erasConvertYear = bg;
me.erasAbbrRegex = Vg;
me.erasNameRegex = Cg;
me.erasNarrowRegex = xg;
me.months = im;
me.monthsShort = sm;
me.monthsParse = om;
me.monthsRegex = dm;
me.monthsShortRegex = cm;
me.week = vm;
me.firstDayOfYear = gm;
me.firstDayOfWeek = hm;
me.weekdays = xm;
me.weekdaysMin = Mm;
me.weekdaysShort = Pm;
me.weekdaysParse = Om;
me.weekdaysRegex = Em;
me.weekdaysShortRegex = Lm;
me.weekdaysMinRegex = Fm;
me.isPM = Nm;
me.meridiem = $m;
function Ja(e, t, n, a) {
  var l = Ht(), i = Vt().set(a, t);
  return l[n](i, e);
}
function _u(e, t, n) {
  if (Rt(e) && (t = e, e = void 0), e = e || "", t != null)
    return Ja(e, t, n, "month");
  var a, l = [];
  for (a = 0; a < 12; a++)
    l[a] = Ja(e, a, n, "month");
  return l;
}
function as(e, t, n, a) {
  typeof e == "boolean" ? (Rt(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Rt(t) && (n = t, t = void 0), t = t || "");
  var l = Ht(), i = e ? l._week.dow : 0, s, r = [];
  if (n != null)
    return Ja(t, (n + i) % 7, a, "day");
  for (s = 0; s < 7; s++)
    r[s] = Ja(t, (s + i) % 7, a, "day");
  return r;
}
function jg(e, t) {
  return _u(e, t, "months");
}
function Gg(e, t) {
  return _u(e, t, "monthsShort");
}
function qg(e, t, n) {
  return as(e, t, n, "weekdays");
}
function Kg(e, t, n) {
  return as(e, t, n, "weekdaysShort");
}
function Zg(e, t, n) {
  return as(e, t, n, "weekdaysMin");
}
Jt("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, n = ue(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
$.lang = it(
  "moment.lang is deprecated. Use moment.locale instead.",
  Jt
);
$.langData = it(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ht
);
var Mt = Math.abs;
function Xg() {
  var e = this._data;
  return this._milliseconds = Mt(this._milliseconds), this._days = Mt(this._days), this._months = Mt(this._months), e.milliseconds = Mt(e.milliseconds), e.seconds = Mt(e.seconds), e.minutes = Mt(e.minutes), e.hours = Mt(e.hours), e.months = Mt(e.months), e.years = Mt(e.years), this;
}
function Su(e, t, n, a) {
  var l = kt(t, n);
  return e._milliseconds += a * l._milliseconds, e._days += a * l._days, e._months += a * l._months, e._bubble();
}
function Jg(e, t) {
  return Su(this, e, t, 1);
}
function Qg(e, t) {
  return Su(this, e, t, -1);
}
function Qs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ey() {
  var e = this._milliseconds, t = this._days, n = this._months, a = this._data, l, i, s, r, o;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Qs(ri(n) + t) * 864e5, t = 0, n = 0), a.milliseconds = e % 1e3, l = tt(e / 1e3), a.seconds = l % 60, i = tt(l / 60), a.minutes = i % 60, s = tt(i / 60), a.hours = s % 24, t += tt(s / 24), o = tt(wu(t)), n += o, t -= Qs(ri(o)), r = tt(n / 12), n %= 12, a.days = t, a.months = n, a.years = r, this;
}
function wu(e) {
  return e * 4800 / 146097;
}
function ri(e) {
  return e * 146097 / 4800;
}
function ty(e) {
  if (!this.isValid())
    return NaN;
  var t, n, a = this._milliseconds;
  if (e = st(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, n = this._months + wu(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(ri(this._months)), e) {
      case "week":
        return t / 7 + a / 6048e5;
      case "day":
        return t + a / 864e5;
      case "hour":
        return t * 24 + a / 36e5;
      case "minute":
        return t * 1440 + a / 6e4;
      case "second":
        return t * 86400 + a / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + a;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function zt(e) {
  return function() {
    return this.as(e);
  };
}
var Cu = zt("ms"), ny = zt("s"), ay = zt("m"), ly = zt("h"), iy = zt("d"), sy = zt("w"), ry = zt("M"), oy = zt("Q"), uy = zt("y"), cy = Cu;
function dy() {
  return kt(this);
}
function fy(e) {
  return e = st(e), this.isValid() ? this[e + "s"]() : NaN;
}
function bn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var vy = bn("milliseconds"), my = bn("seconds"), hy = bn("minutes"), gy = bn("hours"), yy = bn("days"), ky = bn("months"), by = bn("years");
function py() {
  return tt(this.days() / 7);
}
var Dt = Math.round, Mn = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function _y(e, t, n, a, l) {
  return l.relativeTime(t || 1, !!n, e, a);
}
function Sy(e, t, n, a) {
  var l = kt(e).abs(), i = Dt(l.as("s")), s = Dt(l.as("m")), r = Dt(l.as("h")), o = Dt(l.as("d")), c = Dt(l.as("M")), d = Dt(l.as("w")), v = Dt(l.as("y")), f = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || s <= 1 && ["m"] || s < n.m && ["mm", s] || r <= 1 && ["h"] || r < n.h && ["hh", r] || o <= 1 && ["d"] || o < n.d && ["dd", o];
  return n.w != null && (f = f || d <= 1 && ["w"] || d < n.w && ["ww", d]), f = f || c <= 1 && ["M"] || c < n.M && ["MM", c] || v <= 1 && ["y"] || ["yy", v], f[2] = t, f[3] = +e > 0, f[4] = a, _y.apply(null, f);
}
function wy(e) {
  return e === void 0 ? Dt : typeof e == "function" ? (Dt = e, !0) : !1;
}
function Cy(e, t) {
  return Mn[e] === void 0 ? !1 : t === void 0 ? Mn[e] : (Mn[e] = t, e === "s" && (Mn.ss = t - 1), !0);
}
function Vy(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, a = Mn, l, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (a = Object.assign({}, Mn, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), l = this.localeData(), i = Sy(this, !n, a, l), n && (i = l.pastFuture(+this, i)), l.postformat(i);
}
var Bl = Math.abs;
function _n(e) {
  return (e > 0) - (e < 0) || +e;
}
function xl() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Bl(this._milliseconds) / 1e3, t = Bl(this._days), n = Bl(this._months), a, l, i, s, r = this.asSeconds(), o, c, d, v;
  return r ? (a = tt(e / 60), l = tt(a / 60), e %= 60, a %= 60, i = tt(n / 12), n %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = r < 0 ? "-" : "", c = _n(this._months) !== _n(r) ? "-" : "", d = _n(this._days) !== _n(r) ? "-" : "", v = _n(this._milliseconds) !== _n(r) ? "-" : "", o + "P" + (i ? c + i + "Y" : "") + (n ? c + n + "M" : "") + (t ? d + t + "D" : "") + (l || a || e ? "T" : "") + (l ? v + l + "H" : "") + (a ? v + a + "M" : "") + (e ? v + s + "S" : "")) : "P0D";
}
var ce = Cl.prototype;
ce.isValid = kh;
ce.abs = Xg;
ce.add = Jg;
ce.subtract = Qg;
ce.as = ty;
ce.asMilliseconds = Cu;
ce.asSeconds = ny;
ce.asMinutes = ay;
ce.asHours = ly;
ce.asDays = iy;
ce.asWeeks = sy;
ce.asMonths = ry;
ce.asQuarters = oy;
ce.asYears = uy;
ce.valueOf = cy;
ce._bubble = ey;
ce.clone = dy;
ce.get = fy;
ce.milliseconds = vy;
ce.seconds = my;
ce.minutes = hy;
ce.hours = gy;
ce.days = yy;
ce.weeks = py;
ce.months = ky;
ce.years = by;
ce.humanize = Vy;
ce.toISOString = xl;
ce.toString = xl;
ce.toJSON = xl;
ce.locale = du;
ce.localeData = vu;
ce.toIsoString = it(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  xl
);
ce.lang = fu;
K("X", 0, 0, "unix");
K("x", 0, 0, "valueOf");
W("x", pl);
W("X", jv);
be("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
be("x", function(e, t, n) {
  n._d = new Date(ue(e));
});
//! moment.js
$.version = "2.30.1";
xv(pe);
$.fn = F;
$.min = mh;
$.max = hh;
$.now = gh;
$.utc = Vt;
$.unix = Hg;
$.months = jg;
$.isDate = ga;
$.locale = Jt;
$.invalid = gl;
$.duration = kt;
$.isMoment = ht;
$.weekdays = qg;
$.parseZone = zg;
$.localeData = Ht;
$.isDuration = Fa;
$.monthsShort = Gg;
$.weekdaysMin = Zg;
$.defineLocale = Ki;
$.updateLocale = zm;
$.locales = jm;
$.weekdaysShort = Kg;
$.normalizeUnits = st;
$.relativeTimeRounding = wy;
$.relativeTimeThreshold = Cy;
$.calendarFormat = $h;
$.prototype = F;
$.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Vu = L({
  active: {
    type: [String, Array],
    default: void 0
  },
  disabled: {
    type: [Boolean, String, Array],
    default: !1
  },
  nextIcon: {
    type: [String],
    default: "$next"
  },
  prevIcon: {
    type: [String],
    default: "$prev"
  },
  modeIcon: {
    type: [String],
    default: "$subgroup"
  },
  text: String,
  viewMode: {
    type: String,
    default: "month"
  }
}, "VDatePickerControls"), er = z()({
  name: "VDatePickerControls",
  props: Vu(),
  emits: {
    "click:year": () => !0,
    "click:month": () => !0,
    "click:prev": () => !0,
    "click:next": () => !0,
    "click:text": () => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = h(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = h(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = h(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), s = h(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
    function r() {
      n("click:prev");
    }
    function o() {
      n("click:next");
    }
    function c() {
      n("click:year");
    }
    function d() {
      n("click:month");
    }
    return Z(() => u("div", {
      class: ["v-date-picker-controls"]
    }, [u(Ye, {
      class: "v-date-picker-controls__month-btn",
      disabled: a.value,
      text: e.text,
      variant: "text",
      rounded: !0,
      onClick: d
    }, null), u(Ye, {
      key: "mode-btn",
      class: "v-date-picker-controls__mode-btn",
      disabled: l.value,
      density: "comfortable",
      icon: e.modeIcon,
      variant: "text",
      onClick: c
    }, null), u(Hd, {
      key: "mode-spacer"
    }, null), u("div", {
      key: "month-buttons",
      class: "v-date-picker-controls__month"
    }, [u(Ye, {
      disabled: i.value,
      icon: e.prevIcon,
      variant: "text",
      onClick: r
    }, null), u(Ye, {
      disabled: s.value,
      icon: e.nextIcon,
      variant: "text",
      onClick: o
    }, null)])])), {};
  }
});
const xy = L({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: dt()
}, "VDatePickerHeader"), tr = z()({
  name: "VDatePickerHeader",
  props: xy(),
  emits: {
    click: () => !0,
    "click:append": () => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = vt(e, "color");
    function s() {
      n("click");
    }
    function r() {
      n("click:append");
    }
    return Z(() => {
      const o = !!(a.default || e.header), c = !!(a.append || e.appendIcon);
      return u("div", {
        class: ["v-date-picker-header", {
          "v-date-picker-header--clickable": !!e.onClick
        }, l.value],
        style: i.value,
        onClick: s
      }, [a.prepend && u("div", {
        key: "prepend",
        class: "v-date-picker-header__prepend"
      }, [a.prepend()]), o && u(It, {
        key: "content",
        name: e.transition
      }, {
        default: () => {
          var d;
          return [u("div", {
            key: e.header,
            class: "v-date-picker-header__content"
          }, [((d = a.default) == null ? void 0 : d.call(a)) ?? e.header])];
        }
      }), c && u("div", {
        class: "v-date-picker-header__append"
      }, [a.append ? u(xe, {
        key: "append-defaults",
        disabled: !e.appendIcon,
        defaults: {
          VBtn: {
            icon: e.appendIcon,
            variant: "text"
          }
        }
      }, {
        default: () => {
          var d;
          return [(d = a.append) == null ? void 0 : d.call(a)];
        }
      }) : u(Ye, {
        key: "append-btn",
        icon: e.appendIcon,
        variant: "text",
        onClick: r
      }, null)])]);
    }), {};
  }
});
const Py = Symbol.for("vuetify:date-options");
function My(e, t) {
  const n = En(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return G(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function pa() {
  const e = Te(Py);
  if (!e)
    throw new Error("[Vuetify] Could not find injected date options");
  const t = Yn();
  return My(e, t);
}
function Dy(e, t) {
  const n = e.toJsDate(t);
  let a = e.getYear(n), l = e.startOfYear(n);
  if (n < l)
    a = a - 1, l = e.startOfYear(e.setYear(n, a));
  else {
    const r = e.startOfYear(e.setYear(n, a + 1));
    n >= r && (a = a + 1, l = r);
  }
  const i = Math.abs(n.getTime() - l.getTime()), s = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(s / 7) + 1;
}
const Oy = L({
  allowedDates: [Array, Function],
  disabled: Boolean,
  displayValue: null,
  modelValue: Array,
  month: [Number, String],
  max: null,
  min: null,
  showAdjacentMonths: Boolean,
  year: [Number, String],
  weekdays: {
    type: Array,
    default: () => [0, 1, 2, 3, 4, 5, 6]
  }
}, "calendar");
function Iy(e) {
  const t = pa(), n = fe(e, "modelValue", [], (f) => Xe(f)), a = h(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = fe(e, "year", void 0, (f) => {
    const m = f != null ? Number(f) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), m));
  }, (f) => t.getYear(f)), i = fe(e, "month", void 0, (f) => {
    const m = f != null ? Number(f) : t.getMonth(a.value), y = t.setYear(t.date(), t.getYear(l.value));
    return t.setMonth(y, m);
  }, (f) => t.getMonth(f)), s = h(() => {
    const f = t.getWeekArray(i.value), m = f.flat(), y = 6 * 7;
    if (m.length < y) {
      const k = m[m.length - 1];
      let g = [];
      for (let b = 1; b <= y - m.length; b++)
        g.push(t.addDays(k, b)), b % 7 === 0 && (f.push(g), g = []);
    }
    return f;
  });
  function r(f, m) {
    return f.filter((y) => e.weekdays.includes(y.getDay())).map((y, k) => {
      const g = t.toISO(y), b = !t.isSameMonth(y, i.value), S = t.isSameDay(y, t.startOfMonth(i.value)), _ = t.isSameDay(y, t.endOfMonth(i.value)), w = t.isSameDay(y, i.value);
      return {
        date: y,
        isoDate: g,
        formatted: t.format(y, "keyboardDate"),
        year: t.getYear(y),
        month: t.getMonth(y),
        isDisabled: v(y),
        isWeekStart: k % 7 === 0,
        isWeekEnd: k % 7 === 6,
        isToday: t.isSameDay(y, m),
        isAdjacent: b,
        isHidden: b && !e.showAdjacentMonths,
        isStart: S,
        isSelected: n.value.some((P) => t.isSameDay(y, P)),
        isEnd: _,
        isSame: w,
        localized: t.format(y, "dayOfMonth")
      };
    });
  }
  const o = h(() => {
    const f = t.startOfWeek(n.value), m = [];
    for (let g = 0; g <= 6; g++)
      m.push(t.addDays(f, g));
    const y = m, k = t.date();
    return r(y, k);
  }), c = h(() => {
    const f = s.value.flat(), m = t.date();
    return r(f, m);
  }), d = h(() => s.value.map((f) => f.length ? Dy(t, f[0]) : null));
  function v(f) {
    if (e.disabled)
      return !0;
    const m = t.date(f);
    return e.min && t.isAfter(t.date(e.min), m) || e.max && t.isAfter(m, t.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((y) => t.isSameDay(t.date(y), m)) : typeof e.allowedDates == "function" ? !e.allowedDates(m) : !1;
  }
  return {
    displayValue: a,
    daysInMonth: c,
    daysInWeek: o,
    genDays: r,
    model: n,
    weeksInMonth: s,
    weekNumbers: d
  };
}
const xu = L({
  color: String,
  hideWeekdays: Boolean,
  multiple: Boolean,
  showWeek: Boolean,
  ...Oy()
}, "VDatePickerMonth"), nr = z()({
  name: "VDatePickerMonth",
  props: xu(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = N(), {
      daysInMonth: i,
      model: s,
      weekNumbers: r
    } = Iy(e), o = pa();
    function c(d) {
      if (e.multiple) {
        const v = s.value.findIndex((f) => o.isSameDay(f, d));
        if (v === -1)
          s.value = [...s.value, d];
        else {
          const f = [...s.value];
          f.splice(v, 1), s.value = f;
        }
      } else
        s.value = [d];
    }
    return () => u("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && u("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && u("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [Me(" ")]), r.value.map((d) => u("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [d]))]), u("div", {
      ref: l,
      class: "v-date-picker-month__days"
    }, [!e.hideWeekdays && o.getWeekdays().map((d) => u("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
    }, [d[0]])), i.value.map((d, v) => {
      const f = {
        props: {
          onClick: () => c(d.date)
        },
        item: d,
        i: v
      };
      return u("div", {
        class: ["v-date-picker-month__day", {
          "v-date-picker-month__day--adjacent": d.isAdjacent,
          "v-date-picker-month__day--hide-adjacent": d.isHidden,
          "v-date-picker-month__day--selected": d.isSelected,
          "v-date-picker-month__day--week-end": d.isWeekEnd,
          "v-date-picker-month__day--week-start": d.isWeekStart
        }],
        "data-v-date": d.isDisabled ? void 0 : d.isoDate
      }, [(e.showAdjacentMonths || !d.isAdjacent) && u(xe, {
        defaults: {
          VBtn: {
            color: (d.isSelected || d.isToday) && !d.isDisabled ? e.color : void 0,
            disabled: d.isDisabled,
            icon: !0,
            ripple: !1,
            text: d.localized,
            variant: d.isDisabled ? "text" : d.isToday && !d.isSelected ? "outlined" : "flat",
            onClick: () => c(d.date)
          }
        }
      }, {
        default: () => {
          var m;
          return [((m = a.day) == null ? void 0 : m.call(a, f)) ?? u(Ye, f.props, null)];
        }
      })]);
    })])]);
  }
});
const Pu = L({
  color: String,
  height: [String, Number],
  modelValue: Number
}, "VDatePickerMonths"), ar = z()({
  name: "VDatePickerMonths",
  props: Pu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pa(), l = fe(e, "modelValue"), i = h(() => {
      let s = a.startOfYear(a.date());
      return gi(12).map((r) => {
        const o = a.format(s, "monthShort");
        return s = a.getNextMonth(s), {
          text: o,
          value: r
        };
      });
    });
    return ze(() => {
      l.value = l.value ?? a.getMonth(a.date());
    }), Z(() => u("div", {
      class: "v-date-picker-months",
      style: {
        height: J(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-months__content"
    }, [i.value.map((s, r) => {
      var d;
      const o = {
        active: l.value === r,
        color: l.value === r ? e.color : void 0,
        rounded: !0,
        text: s.text,
        variant: l.value === s.value ? "flat" : "text",
        onClick: () => c(r)
      };
      function c(v) {
        l.value = v;
      }
      return ((d = n.month) == null ? void 0 : d.call(n, {
        month: s,
        i: r,
        props: o
      })) ?? u(Ye, B({
        key: "month"
      }, o, {
        onClick: () => c(r)
      }), null);
    })])])), {};
  }
});
const Mu = L({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), lr = z()({
  name: "VDatePickerYears",
  props: Mu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = pa(), l = fe(e, "modelValue"), i = h(() => {
      const r = a.getYear(a.date());
      let o = r - 100, c = r + 52;
      e.min && (o = a.getYear(a.date(e.min))), e.max && (c = a.getYear(a.date(e.max)));
      let d = a.startOfYear(a.date());
      return d = a.setYear(d, o), gi(c - o + 1, o).map((v) => {
        const f = a.format(d, "year");
        return d = a.setYear(d, a.getYear(d) + 1), {
          text: f,
          value: v
        };
      });
    });
    ze(() => {
      l.value = l.value ?? a.getYear(a.date());
    });
    const s = N();
    return qe(async () => {
      var r;
      await Ue(), (r = s.value) == null || r.$el.scrollIntoView({
        block: "center"
      });
    }), Z(() => u("div", {
      class: "v-date-picker-years",
      style: {
        height: J(e.height)
      }
    }, [u("div", {
      class: "v-date-picker-years__content"
    }, [i.value.map((r, o) => {
      var d;
      const c = {
        ref: l.value === r.value ? s : void 0,
        active: l.value === r.value,
        color: l.value === r.value ? e.color : void 0,
        rounded: !0,
        text: r.text,
        variant: l.value === r.value ? "flat" : "text",
        onClick: () => l.value = r.value
      };
      return ((d = n.year) == null ? void 0 : d.call(n, {
        year: r,
        i: o,
        props: c
      })) ?? u(Ye, B({
        key: "month"
      }, c), null);
    })])])), {};
  }
});
const Ty = nn("v-picker-title"), Du = L({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...Li()
}, "VPicker"), ir = z()({
  name: "VPicker",
  props: Du(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = vt(q(e, "color"));
    return Z(() => {
      const i = Qn.filterProps(e), s = !!(e.title || n.title);
      return u(Qn, B(i, {
        color: e.bgColor,
        class: ["v-picker", {
          "v-picker--landscape": e.landscape,
          "v-picker--with-actions": !!n.actions
        }, e.class],
        style: e.style
      }), {
        default: () => {
          var r;
          return [!e.hideHeader && u("div", {
            key: "header",
            class: [a.value],
            style: [l.value]
          }, [s && u(Ty, {
            key: "picker-title"
          }, {
            default: () => {
              var o;
              return [((o = n.title) == null ? void 0 : o.call(n)) ?? e.title];
            }
          }), n.header && u("div", {
            class: "v-picker__header"
          }, [n.header()])]), u("div", {
            class: "v-picker__body"
          }, [(r = n.default) == null ? void 0 : r.call(n)]), n.actions && u(xe, {
            defaults: {
              VBtn: {
                slim: !0,
                variant: "text"
              }
            }
          }, {
            default: () => [u("div", {
              class: "v-picker__actions"
            }, [n.actions()])]
          })];
        }
      });
    }), {};
  }
}), Ay = L({
  // TODO: implement in v3.5
  // calendarIcon: {
  //   type: String,
  //   default: '$calendar',
  // },
  // keyboardIcon: {
  //   type: String,
  //   default: '$edit',
  // },
  // inputMode: {
  //   type: String as PropType<'calendar' | 'keyboard'>,
  //   default: 'calendar',
  // },
  // inputText: {
  //   type: String,
  //   default: '$vuetify.datePicker.input.placeholder',
  // },
  // inputPlaceholder: {
  //   type: String,
  //   default: 'dd/mm/yyyy',
  // },
  header: {
    type: String,
    default: "$vuetify.datePicker.header"
  },
  ...Vu(),
  ...xu(),
  ...Je(Pu(), ["modelValue"]),
  ...Je(Mu(), ["modelValue"]),
  ...Du({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), Ey = z()({
  name: "VDatePicker",
  props: Ay(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:month": (e) => !0,
    "update:year": (e) => !0,
    // 'update:inputMode': (date: any) => true,
    "update:viewMode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = pa(), {
      t: i
    } = Yn(), s = fe(e, "modelValue", void 0, (p) => Xe(p), (p) => e.multiple ? p : p[0]), r = fe(e, "viewMode"), o = h(() => {
      var D;
      const p = l.date((D = s.value) == null ? void 0 : D[0]);
      return p && l.isValid(p) ? p : l.date();
    }), c = N(Number(e.month ?? l.getMonth(l.startOfMonth(o.value)))), d = N(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(o.value, c.value))))), v = re(!1), f = h(() => e.multiple && s.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", s.value.length) : s.value[0] && l.isValid(s.value[0]) ? l.format(s.value[0], "normalDateWithWeekday") : i(e.header)), m = h(() => l.format(l.setYear(l.setMonth(l.date(), c.value), d.value), "monthAndYear")), y = h(() => `date-picker-header${v.value ? "-reverse" : ""}-transition`), k = h(() => {
      const p = l.date(e.min);
      return e.min && l.isValid(p) ? p : null;
    }), g = h(() => {
      const p = l.date(e.max);
      return e.max && l.isValid(p) ? p : null;
    }), b = h(() => {
      if (e.disabled)
        return !0;
      const p = [];
      if (r.value !== "month")
        p.push("prev", "next");
      else {
        let D = l.date();
        if (D = l.setYear(D, d.value), D = l.setMonth(D, c.value), k.value) {
          const C = l.addDays(l.startOfMonth(D), -1);
          l.isAfter(k.value, C) && p.push("prev");
        }
        if (g.value) {
          const C = l.addDays(l.endOfMonth(D), 1);
          l.isAfter(C, g.value) && p.push("next");
        }
      }
      return p;
    });
    function S() {
      c.value < 11 ? c.value++ : (d.value++, c.value = 0);
    }
    function _() {
      c.value > 0 ? c.value-- : (d.value--, c.value = 11);
    }
    function w() {
      r.value = "month";
    }
    function P() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function x() {
      r.value = r.value === "year" ? "month" : "year";
    }
    return G(c, () => {
      r.value === "months" && P(), n("update:month", c.value);
    }), G(d, () => {
      r.value === "year" && x(), n("update:year", d.value);
    }), G(s, (p, D) => {
      const C = l.date(Xe(p)[0]), V = l.date(Xe(D)[0]);
      v.value = l.isBefore(C, V);
    }), Z(() => {
      const p = ir.filterProps(e), D = er.filterProps(e), C = tr.filterProps(e), V = nr.filterProps(e), I = Je(ar.filterProps(e), ["modelValue"]), T = Je(lr.filterProps(e), ["modelValue"]), A = {
        header: f.value,
        transition: y.value
      };
      return u(ir, B(p, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var M;
          return ((M = a.title) == null ? void 0 : M.call(a)) ?? u("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? u(xe, {
          defaults: {
            VDatePickerHeader: {
              ...A
            }
          }
        }, {
          default: () => {
            var M;
            return [(M = a.header) == null ? void 0 : M.call(a, A)];
          }
        }) : u(tr, B({
          key: "header"
        }, C, A, {
          onClick: r.value !== "month" ? w : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => u(ke, null, [u(er, B(D, {
          disabled: b.value,
          text: m.value,
          "onClick:next": S,
          "onClick:prev": _,
          "onClick:month": P,
          "onClick:year": x
        }), null), u(Cd, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? u(ar, B({
            key: "date-picker-months"
          }, I, {
            modelValue: c.value,
            "onUpdate:modelValue": (M) => c.value = M,
            min: k.value,
            max: g.value
          }), null) : r.value === "year" ? u(lr, B({
            key: "date-picker-years"
          }, T, {
            modelValue: d.value,
            "onUpdate:modelValue": (M) => d.value = M,
            min: k.value,
            max: g.value
          }), null) : u(nr, B({
            key: "date-picker-month"
          }, V, {
            modelValue: s.value,
            "onUpdate:modelValue": (M) => s.value = M,
            month: c.value,
            "onUpdate:month": (M) => c.value = M,
            year: d.value,
            "onUpdate:year": (M) => d.value = M,
            min: k.value,
            max: g.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), Ly = /* @__PURE__ */ Le({
  __name: "EasyDatePicker",
  props: {
    menu: {},
    modelValue: { default: "" },
    picker: {},
    textfield: {},
    fields: {}
  },
  emits: ["validated", "invalidated", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.textfield), i = N(n.menu), s = N(n.picker), r = N(!1), o = h(() => n.fields ?? []);
    function c(k) {
      l.value.value = k, a("update:modelValue", k);
    }
    function d() {
      l.value.validate(), a("validated", l.value.name);
    }
    function v() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function f() {
      r.value = !r.value;
    }
    function m() {
      r.value = !1;
    }
    function y(k) {
      r.value = !1;
      const g = $(k).format(s.value.format);
      c(g);
    }
    return qe(() => {
      var k;
      (k = l.value) == null || k.isLoading(!1);
    }), (k, g) => (ee(), se(Ne, { "no-gutters": "" }, {
      default: R(() => {
        var b;
        return [
          u(hl, B({
            modelValue: r.value,
            "onUpdate:modelValue": g[2] || (g[2] = (S) => r.value = S)
          }, (b = i.value) == null ? void 0 : b.props()), {
            activator: R(({ props: S }) => {
              var _;
              return [
                u(ha, B({
                  field: l.value,
                  "onUpdate:field": g[0] || (g[0] = (w) => l.value = w)
                }, { ...S, ...(_ = l.value) == null ? void 0 : _.props() }, {
                  fields: o.value,
                  onUpdated: c,
                  onValidated: d,
                  onInvalidated: v,
                  "onClick:prependInner": f,
                  "onClick:appendInner": f
                }), null, 16, ["field", "fields"])
              ];
            }),
            default: R(() => [
              u(fa, {
                class: "pa-0",
                width: s.value.width,
                "max-width": s.value.width
              }, {
                default: R(() => [
                  u(Nn, {
                    class: "pa-0",
                    width: s.value.width,
                    "max-width": s.value.width
                  }, {
                    default: R(() => {
                      var S;
                      return [
                        u(Ey, B({
                          modelValue: s.value.value,
                          "onUpdate:modelValue": g[1] || (g[1] = (_) => s.value.value = _)
                        }, (S = s.value) == null ? void 0 : S.props(), {
                          "onClick:save": y,
                          "onClick:cancel": m
                        }), null, 16, ["modelValue"])
                      ];
                    }),
                    _: 1
                  }, 8, ["width", "max-width"])
                ]),
                _: 1
              }, 8, ["width", "max-width"])
            ]),
            _: 1
          }, 16, ["modelValue"])
        ];
      }),
      _: 1
    }));
  }
});
const Fy = L({
  id: String,
  text: String,
  ...Je(ml({
    closeOnBack: !1,
    location: "end",
    locationStrategy: "connected",
    eager: !0,
    minWidth: 0,
    offset: 10,
    openOnClick: !1,
    openOnHover: !0,
    origin: "auto",
    scrim: !1,
    scrollStrategy: "reposition",
    transition: !1
  }), ["absolute", "persistent"])
}, "VTooltip"), ls = z()({
  name: "VTooltip",
  props: Fy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), {
      scopeId: l
    } = vl(), i = nt(), s = h(() => e.id || `v-tooltip-${i}`), r = N(), o = h(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = h(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = h(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), v = h(() => B({
      "aria-describedby": s.value
    }, e.activatorProps));
    return Z(() => {
      const f = An.filterProps(e);
      return u(An, B({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: s.value
      }, f, {
        modelValue: a.value,
        "onUpdate:modelValue": (m) => a.value = m,
        transition: d.value,
        absolute: !0,
        location: o.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: v.value,
        _disableGlobalStack: !0
      }, l), {
        activator: n.activator,
        default: function() {
          var g;
          for (var m = arguments.length, y = new Array(m), k = 0; k < m; k++)
            y[k] = arguments[k];
          return ((g = n.default) == null ? void 0 : g.call(n, ...y)) ?? e.text;
        }
      });
    }), $n({}, r);
  }
}), Ry = /* @__PURE__ */ Le({
  __name: "EasyButton",
  props: {
    button: {},
    disabled: { type: Boolean },
    identifier: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.button), i = h(() => {
      var o, c;
      return !ie(n.button.prepend_icon) && !ie((c = (o = n.button) == null ? void 0 : o.prepend_icon) == null ? void 0 : c.icon);
    }), s = h(() => {
      var o, c;
      return !ie(n.button.append_icon) && !ie((c = (o = n.button) == null ? void 0 : o.append_icon) == null ? void 0 : c.icon);
    });
    function r() {
      ie(n == null ? void 0 : n.identifier) ? a("click", "") : a("click", n == null ? void 0 : n.identifier);
    }
    return (o, c) => {
      var v, f, m, y;
      const d = Qt("EasyIcon");
      return ee(), se(ls, B((f = (v = l.value) == null ? void 0 : v.tooltip) == null ? void 0 : f.props(), {
        disabled: ((y = (m = l.value) == null ? void 0 : m.tooltip) == null ? void 0 : y.disabled) ?? !0
      }), {
        activator: R(({ props: k }) => [
          u(Ye, B({ ...k, ...l.value.props() }, {
            class: l.value.classes,
            disabled: l.value.disabled,
            onClick: r
          }), mi({ _: 2 }, [
            i.value ? {
              name: "prepend",
              fn: R(() => [
                u(d, {
                  icon: l.value.prepend_icon
                }, null, 8, ["icon"])
              ]),
              key: "0"
            } : void 0,
            s.value ? {
              name: "append",
              fn: R(() => [
                u(d, {
                  icon: l.value.append_icon
                }, null, 8, ["icon"])
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["class", "disabled"])
        ]),
        default: R(() => {
          var k, g;
          return [
            ct("span", null, Ze((g = (k = l.value) == null ? void 0 : k.tooltip) == null ? void 0 : g.text), 1)
          ];
        }),
        _: 1
      }, 16, ["disabled"]);
    };
  }
}), Ny = /* @__PURE__ */ Le({
  __name: "EasyIcon",
  props: {
    icon: {},
    identifier: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.icon ?? new rc({ icon: "mdi-home" }));
    function i() {
      ie(n == null ? void 0 : n.identifier) ? a("click", "") : a("click", n == null ? void 0 : n.identifier);
    }
    return (s, r) => {
      var o, c, d, v;
      return ee(), se(ls, B((c = (o = l.value) == null ? void 0 : o.tooltip) == null ? void 0 : c.props(), {
        disabled: ((v = (d = l.value) == null ? void 0 : d.tooltip) == null ? void 0 : v.disabled) ?? !0
      }), {
        activator: R(({ props: f }) => {
          var m;
          return [
            u(Ce, B({ ...f, ...(m = l.value) == null ? void 0 : m.props() }, {
              onClick: i,
              class: l.value.classes
            }), {
              default: R(() => {
                var y;
                return [
                  Me(Ze((y = l.value) == null ? void 0 : y.icon), 1)
                ];
              }),
              _: 2
            }, 1040, ["class"])
          ];
        }),
        default: R(() => {
          var f, m;
          return [
            ct("span", null, Ze((m = (f = l.value) == null ? void 0 : f.tooltip) == null ? void 0 : m.text), 1)
          ];
        }),
        _: 1
      }, 16, ["disabled"]);
    };
  }
});
const Yy = nn("v-alert-title"), By = ["success", "info", "warning", "error"], $y = L({
  border: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["top", "end", "bottom", "start"].includes(e)
  },
  borderColor: String,
  closable: Boolean,
  closeIcon: {
    type: ye,
    default: "$close"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  icon: {
    type: [Boolean, String, Function, Object],
    default: null
  },
  modelValue: {
    type: Boolean,
    default: !0
  },
  prominent: Boolean,
  title: String,
  text: String,
  type: {
    type: String,
    validator: (e) => By.includes(e)
  },
  ...ae(),
  ...yt(),
  ...Nt(),
  ...$t(),
  ...ca(),
  ...sl(),
  ...at(),
  ...Re(),
  ...Ee(),
  ...Bt({
    variant: "flat"
  })
}, "VAlert"), Ou = z()({
  name: "VAlert",
  props: $y(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = fe(e, "modelValue"), i = h(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), s = h(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: r
    } = We(e), {
      colorClasses: o,
      colorStyles: c,
      variantClasses: d
    } = Rn(s), {
      densityClasses: v
    } = Ct(e), {
      dimensionStyles: f
    } = Yt(e), {
      elevationClasses: m
    } = Wt(e), {
      locationStyles: y
    } = da(e), {
      positionClasses: k
    } = rl(e), {
      roundedClasses: g
    } = lt(e), {
      textColorClasses: b,
      textColorStyles: S
    } = ft(q(e, "borderColor")), {
      t: _
    } = Yn(), w = h(() => ({
      "aria-label": _(e.closeLabel),
      onClick(P) {
        l.value = !1, n("click:close", P);
      }
    }));
    return () => {
      const P = !!(a.prepend || i.value), x = !!(a.title || e.title), p = !!(a.close || e.closable);
      return l.value && u(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, o.value, v.value, m.value, k.value, g.value, d.value, e.class],
        style: [c.value, f.value, y.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var D, C;
          return [Fn(!1, "v-alert"), e.border && u("div", {
            key: "border",
            class: ["v-alert__border", b.value],
            style: S.value
          }, null), P && u("div", {
            key: "prepend",
            class: "v-alert__prepend"
          }, [a.prepend ? u(xe, {
            key: "prepend-defaults",
            disabled: !i.value,
            defaults: {
              VIcon: {
                density: e.density,
                icon: i.value,
                size: e.prominent ? 44 : 28
              }
            }
          }, a.prepend) : u(Ce, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), u("div", {
            class: "v-alert__content"
          }, [x && u(Yy, {
            key: "title"
          }, {
            default: () => {
              var V;
              return [((V = a.title) == null ? void 0 : V.call(a)) ?? e.title];
            }
          }), ((D = a.text) == null ? void 0 : D.call(a)) ?? e.text, (C = a.default) == null ? void 0 : C.call(a)]), a.append && u("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), p && u("div", {
            key: "close",
            class: "v-alert__close"
          }, [a.close ? u(xe, {
            key: "close-defaults",
            defaults: {
              VBtn: {
                icon: e.closeIcon,
                size: "x-small",
                variant: "text"
              }
            }
          }, {
            default: () => {
              var V;
              return [(V = a.close) == null ? void 0 : V.call(a, {
                props: w.value
              })];
            }
          }) : u(Ye, B({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, w.value), null)])];
        }
      });
    };
  }
}), Wy = ["innerHTML"], Uy = /* @__PURE__ */ Le({
  __name: "EasyAlerts",
  props: {
    alerts: {}
  },
  setup(e) {
    const n = N(e.alerts);
    function a(i) {
      var s;
      return !ie(i == null ? void 0 : i.append_icon) && !ie((s = i == null ? void 0 : i.append_icon) == null ? void 0 : s.icon);
    }
    function l(i) {
      var s;
      return !ie(i == null ? void 0 : i.prepend_icon) && !ie((s = i == null ? void 0 : i.prepend_icon) == null ? void 0 : s.icon);
    }
    return (i, s) => {
      const r = Qt("EasyIcon");
      return ee(!0), Xt(ke, null, Tn(n.value, (o, c) => Ve((ee(), se(we, {
        key: c,
        cols: o.cols
      }, {
        default: R(() => [
          u(Ou, B({
            modelValue: o.display,
            "onUpdate:modelValue": (d) => o.display = d
          }, o.props()), mi({
            default: R(() => [
              ct("div", {
                innerHTML: o.text
              }, null, 8, Wy)
            ]),
            _: 2
          }, [
            l(o) ? {
              name: "prepend",
              fn: R(() => [
                u(r, {
                  icon: o == null ? void 0 : o.prepend_icon
                }, null, 8, ["icon"])
              ]),
              key: "0"
            } : void 0,
            a(o) ? {
              name: "append",
              fn: R(() => [
                u(r, {
                  icon: o == null ? void 0 : o.append_icon
                }, null, 8, ["icon"])
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["modelValue", "onUpdate:modelValue"])
        ]),
        _: 2
      }, 1032, ["cols"])), [
        [ut, o.display]
      ])), 128);
    };
  }
});
const Hy = L({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: !0
  },
  scrollable: Boolean,
  ...ml({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: Di
    },
    zIndex: 2400
  })
}, "VDialog"), zy = z()({
  name: "VDialog",
  props: Hy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), {
      scopeId: l
    } = vl(), i = N();
    function s(o) {
      var v, f;
      const c = o.relatedTarget, d = o.target;
      if (c !== d && ((v = i.value) != null && v.contentEl) && // We're the topmost dialog
      ((f = i.value) != null && f.globalTop) && // It isn't the document or the dialog body
      ![document, i.value.contentEl].includes(d) && // It isn't inside the dialog body
      !i.value.contentEl.contains(d)) {
        const m = Ba(i.value.contentEl);
        if (!m.length)
          return;
        const y = m[0], k = m[m.length - 1];
        c === y ? k.focus() : y.focus();
      }
    }
    $e && G(() => a.value && e.retainFocus, (o) => {
      o ? document.addEventListener("focusin", s) : document.removeEventListener("focusin", s);
    }, {
      immediate: !0
    }), G(a, async (o) => {
      var c, d;
      await Ue(), o ? (c = i.value.contentEl) == null || c.focus({
        preventScroll: !0
      }) : (d = i.value.activatorEl) == null || d.focus({
        preventScroll: !0
      });
    });
    const r = h(() => B({
      "aria-haspopup": "dialog",
      "aria-expanded": String(a.value)
    }, e.activatorProps));
    return Z(() => {
      const o = An.filterProps(e);
      return u(An, B({
        ref: i,
        class: ["v-dialog", {
          "v-dialog--fullscreen": e.fullscreen,
          "v-dialog--scrollable": e.scrollable
        }, e.class],
        style: e.style
      }, o, {
        modelValue: a.value,
        "onUpdate:modelValue": (c) => a.value = c,
        "aria-modal": "true",
        activatorProps: r.value,
        role: "dialog"
      }, l), {
        activator: n.activator,
        default: function() {
          for (var c = arguments.length, d = new Array(c), v = 0; v < c; v++)
            d[v] = arguments[v];
          return u(xe, {
            root: "VDialog"
          }, {
            default: () => {
              var f;
              return [(f = n.default) == null ? void 0 : f.call(n, ...d)];
            }
          });
        }
      });
    }), $n({}, i);
  }
}), jy = /* @__PURE__ */ Le({
  __name: "PasswordRequirementsDialog",
  props: {
    modelValue: { type: Boolean },
    lowerCase: { type: Boolean },
    minLength: { type: [Boolean, Number] },
    numbers: { type: Boolean },
    special: { type: Boolean },
    upperCase: { type: Boolean }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.modelValue), i = ze(() => l.value = n.modelValue), s = G(l, (r) => {
      a("update:modelValue", r);
    });
    return Ae(() => {
      i(), s();
    }), (r, o) => (ee(), se(zy, {
      modelValue: l.value,
      "onUpdate:modelValue": o[1] || (o[1] = (c) => l.value = c),
      width: "auto"
    }, {
      default: R(() => [
        u(fa, null, {
          default: R(() => [
            u(wi, null, {
              default: R(() => [
                Me(" Your password must contain: ")
              ]),
              _: 1
            }),
            u(Nn, null, {
              default: R(() => [
                u(Ne, null, {
                  default: R(() => [
                    n.lowerCase ? (ee(), se(we, {
                      key: 0,
                      cols: 12,
                      md: 6
                    }, {
                      default: R(() => [
                        u(Ce, { color: "success" }, {
                          default: R(() => [
                            Me("mdi-check")
                          ]),
                          _: 1
                        }),
                        Me(" Lowercase Characters ")
                      ]),
                      _: 1
                    })) : De("", !0),
                    n.upperCase ? (ee(), se(we, {
                      key: 1,
                      cols: 12,
                      md: 6
                    }, {
                      default: R(() => [
                        u(Ce, { color: "success" }, {
                          default: R(() => [
                            Me("mdi-check")
                          ]),
                          _: 1
                        }),
                        Me(" Uppercase Characters ")
                      ]),
                      _: 1
                    })) : De("", !0),
                    n.special ? (ee(), se(we, {
                      key: 2,
                      cols: 12,
                      md: 6
                    }, {
                      default: R(() => [
                        u(Ce, { color: "success" }, {
                          default: R(() => [
                            Me("mdi-check")
                          ]),
                          _: 1
                        }),
                        Me(" Special Characters ")
                      ]),
                      _: 1
                    })) : De("", !0),
                    n.numbers ? (ee(), se(we, {
                      key: 3,
                      cols: 12,
                      md: 6
                    }, {
                      default: R(() => [
                        u(Ce, { color: "success" }, {
                          default: R(() => [
                            Me("mdi-check")
                          ]),
                          _: 1
                        }),
                        Me(" Numbers ")
                      ]),
                      _: 1
                    })) : De("", !0),
                    n.minLength ? (ee(), se(we, {
                      key: 4,
                      cols: 12,
                      md: 6
                    }, {
                      default: R(() => [
                        u(Ce, { color: "success" }, {
                          default: R(() => [
                            Me("mdi-check")
                          ]),
                          _: 1
                        }),
                        Me(" Minimum Length - " + Ze(n.minLength), 1)
                      ]),
                      _: 1
                    })) : De("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u(Fr, null, {
              default: R(() => [
                u(Ye, {
                  color: "primary",
                  onClick: o[0] || (o[0] = (c) => l.value = !1),
                  class: "mx-auto"
                }, {
                  default: R(() => [
                    Me("Close Dialog")
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Gy = /* @__PURE__ */ ct("span", null, "Click for password requirements", -1), qy = /* @__PURE__ */ Le({
  __name: "EasyPassword",
  props: {
    fields: {},
    lowerCase: { type: Boolean, default: !0 },
    minLength: { type: [Boolean, Number], default: 8 },
    numbers: { type: Boolean, default: !0 },
    special: { type: Boolean, default: !0 },
    upperCase: { type: Boolean, default: !0 },
    modelValue: { default: "" },
    showRequirementsDialog: { type: Boolean, default: !1 },
    showStrengthBar: { type: Boolean, default: !1 },
    strengthErrorColor: { default: "error" },
    strengthErrorText: { default: "weak" },
    strengthSuccessColor: { default: "success" },
    strengthSuccessText: { default: "strong" },
    strengthWarningColor: { default: "warning" },
    strengthWarningText: { default: "medium" },
    errorMessages: { default: () => [] },
    textfield: {},
    viewMode: { type: Boolean, default: !1 }
  },
  emits: ["validated", "invalidated", "update:modelValue", "click:prepend", "click:prependInner", "click:append", "click:appendInner"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.textfield), i = N(n.modelValue), s = N(!1), r = N(n.errorMessages), o = h(() => v.value === 0 || c.value === 0 ? 0 : v.value / c.value / d.value * 100), c = h(() => 100 / d.value), d = h(() => {
      let x = 0;
      return n.lowerCase && x++, n.upperCase && x++, n.numbers && x++, n.special && x++, n.minLength && x++, x;
    }), v = h(() => {
      var p, D, C, V, I, T, A, M, Y, Q;
      let x = 0;
      return n.lowerCase && (D = (p = l.value) == null ? void 0 : p.value) != null && D.match(/[a-z]+/) && (x += 1), n.upperCase && (V = (C = l.value) == null ? void 0 : C.value) != null && V.match(/[A-Z]+/) && (x += 1), n.numbers && (T = (I = l.value) == null ? void 0 : I.value) != null && T.match(/[0-9]+/) && (x += 1), n.special && (M = (A = l.value) == null ? void 0 : A.value) != null && M.match(/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]+/) && (x += 1), n.minLength && ((Q = (Y = l.value) == null ? void 0 : Y.value) == null ? void 0 : Q.length) >= n.minLength && (x += 1), Math.ceil(c.value * x);
    }), f = h(() => o.value > 75 ? n.strengthSuccessColor : o.value > 50 ? n.strengthWarningColor : n.strengthErrorColor), m = h(() => o.value > 75 ? n.strengthSuccessText : o.value > 50 ? n.strengthWarningText : n.strengthErrorText), y = G(l.value, () => {
      b();
    }), k = G(i, (x) => {
      l.value.value = x;
    }), g = G(r.value, (x) => {
      l.value.error_messages = x;
    });
    Ae(() => {
      y(), k(), g();
    });
    function b() {
      a("update:modelValue", l.value.value);
    }
    function S() {
      l.value.validate(), a("validated", l.value.name);
    }
    function _() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function w(x, p) {
      n.viewMode && (l.value.value.value.type == "password" ? (l.value.value.value.type = "text", p == "prepend" && (a("click:prependInner", x), l.value.value.value.prepend_inner_icon.icon = "mdi-eye-off"), p == "append" && (a("click:appendInner", x), l.value.value.value.append_inner_icon.icon = "mdi-eye-off")) : (l.value.type = "password", p == "prepend" && (a("click:prependInner", x), l.value.value.value.prepend_inner_icon.icon = "mdi-eye"), p == "append" && (a("click:appendInner", x), l.value.value.value.append_inner_icon.icon = "mdi-eye")));
    }
    qe(() => {
      var x;
      l.value.value = n.modelValue, (x = l.value) == null || x.isLoading(!1);
    });
    function P() {
      s.value = !0;
    }
    return (x, p) => (ee(), se(Ne, null, {
      default: R(() => [
        u(we, { cols: 12 }, {
          default: R(() => {
            var D;
            return [
              u(ha, B({
                field: l.value,
                "onUpdate:field": p[0] || (p[0] = (C) => l.value = C)
              }, (D = l.value) == null ? void 0 : D.props(), {
                fields: n.fields ?? [],
                onUpdated: b,
                onValidated: S,
                onInvalidated: _,
                "onClick:prependInner": p[1] || (p[1] = (C) => w(C, "prepend")),
                "onClick:appendInner": p[2] || (p[2] = (C) => w(C, "append")),
                "onClick:prepend": p[3] || (p[3] = (C) => a("click:prepend", C)),
                "onClick:append": p[4] || (p[4] = (C) => a("click:append", C))
              }), null, 16, ["field", "fields"])
            ];
          }),
          _: 1
        }),
        n.showStrengthBar ? (ee(), se(we, {
          key: 0,
          cols: 12
        }, {
          default: R(() => [
            u(Ne, null, {
              default: R(() => [
                u(we, {
                  cols: "12",
                  style: { position: "relative" }
                }, {
                  default: R(() => [
                    u(Vi, {
                      modelValue: v.value,
                      "onUpdate:modelValue": p[5] || (p[5] = (D) => v.value = D),
                      striped: "",
                      color: f.value,
                      height: "30"
                    }, {
                      default: R(() => [
                        ct("strong", {
                          class: hr("text-" + f.value + "-lighten-2")
                        }, Ze(m.value) + " - " + Ze(o.value) + "%", 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "color"]),
                    u(ls, null, {
                      activator: R(({ props: D }) => [
                        n.showRequirementsDialog ? (ee(), se(Ye, B({
                          key: 0,
                          icon: "mdi-information-slab-circle-outline"
                        }, D, {
                          density: "compact",
                          style: { position: "absolute", right: "0px", top: "0px" },
                          onClick: P
                        }), null, 16)) : De("", !0)
                      ]),
                      default: R(() => [
                        Gy
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : De("", !0),
        n.showRequirementsDialog ? (ee(), se(Oe(jy), {
          key: 1,
          modelValue: s.value,
          "onUpdate:modelValue": p[6] || (p[6] = (D) => s.value = D),
          "lower-case": n.lowerCase,
          "upper-case": n.upperCase,
          numbers: n.numbers,
          special: n.special,
          "min-length": n.minLength
        }, null, 8, ["modelValue", "lower-case", "upper-case", "numbers", "special", "min-length"])) : De("", !0)
      ]),
      _: 1
    }));
  }
});
const Iu = Symbol.for("vuetify:v-chip-group"), Ky = L({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: hn
  },
  ...ae(),
  ..._o({
    selectedClass: "v-chip--selected"
  }),
  ...Re(),
  ...Ee(),
  ...Bt({
    variant: "tonal"
  })
}, "VChipGroup");
z()({
  name: "VChipGroup",
  props: Ky(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      isSelected: l,
      select: i,
      next: s,
      prev: r,
      selected: o
    } = Co(e, Iu);
    return gn({
      VChip: {
        color: q(e, "color"),
        disabled: q(e, "disabled"),
        filter: q(e, "filter"),
        variant: q(e, "variant")
      }
    }), Z(() => u(e.tag, {
      class: ["v-chip-group", {
        "v-chip-group--column": e.column
      }, a.value, e.class],
      style: e.style
    }, {
      default: () => {
        var c;
        return [(c = n.default) == null ? void 0 : c.call(n, {
          isSelected: l,
          select: i,
          next: s,
          prev: r,
          selected: o.value
        })];
      }
    })), {};
  }
});
const Zy = L({
  activeClass: String,
  appendAvatar: String,
  appendIcon: ye,
  closable: Boolean,
  closeIcon: {
    type: ye,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: !0
  },
  onClick: dt(),
  onClickOnce: dt(),
  ...yn(),
  ...ae(),
  ...yt(),
  ...$t(),
  ...So(),
  ...at(),
  ...ul(),
  ...ra(),
  ...Re({
    tag: "span"
  }),
  ...Ee(),
  ...Bt({
    variant: "tonal"
  })
}, "VChip"), Xy = z()({
  name: "VChip",
  directives: {
    Ripple: Bn
  },
  props: Zy(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0,
    "group:selected": (e) => !0,
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      t: i
    } = Yn(), {
      borderClasses: s
    } = kn(e), {
      colorClasses: r,
      colorStyles: o,
      variantClasses: c
    } = Rn(e), {
      densityClasses: d
    } = Ct(e), {
      elevationClasses: v
    } = Wt(e), {
      roundedClasses: f
    } = lt(e), {
      sizeClasses: m
    } = oa(e), {
      themeClasses: y
    } = We(e), k = fe(e, "modelValue"), g = wo(e, Iu, !1), b = ol(e, n), S = h(() => e.link !== !1 && b.isLink.value), _ = h(() => !e.disabled && e.link !== !1 && (!!g || e.link || b.isClickable.value)), w = h(() => ({
      "aria-label": i(e.closeLabel),
      onClick(p) {
        p.stopPropagation(), k.value = !1, a("click:close", p);
      }
    }));
    function P(p) {
      var D;
      a("click", p), _.value && ((D = b.navigate) == null || D.call(b, p), g == null || g.toggle());
    }
    function x(p) {
      (p.key === "Enter" || p.key === " ") && (p.preventDefault(), P(p));
    }
    return () => {
      const p = b.isLink.value ? "a" : e.tag, D = !!(e.appendIcon || e.appendAvatar), C = !!(D || l.append), V = !!(l.close || e.closable), I = !!(l.filter || e.filter) && g, T = !!(e.prependIcon || e.prependAvatar), A = !!(T || l.prepend), M = !g || g.isSelected.value;
      return k.value && Ve(u(p, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": _.value,
          "v-chip--filter": I,
          "v-chip--pill": e.pill
        }, y.value, s.value, M ? r.value : void 0, d.value, v.value, f.value, m.value, c.value, g == null ? void 0 : g.selectedClass.value, e.class],
        style: [M ? o.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: b.href.value,
        tabindex: _.value ? 0 : void 0,
        onClick: P,
        onKeydown: _.value && !S.value && x
      }, {
        default: () => {
          var Y;
          return [Fn(_.value, "v-chip"), I && u(io, {
            key: "filter"
          }, {
            default: () => [Ve(u("div", {
              class: "v-chip__filter"
            }, [l.filter ? u(xe, {
              key: "filter-defaults",
              disabled: !e.filterIcon,
              defaults: {
                VIcon: {
                  icon: e.filterIcon
                }
              }
            }, l.filter) : u(Ce, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[ut, g.isSelected.value]])]
          }), A && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? u(xe, {
            key: "prepend-defaults",
            disabled: !T,
            defaults: {
              VAvatar: {
                image: e.prependAvatar,
                start: !0
              },
              VIcon: {
                icon: e.prependIcon,
                start: !0
              }
            }
          }, l.prepend) : u(ke, null, [e.prependIcon && u(Ce, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(vn, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content"
          }, [((Y = l.default) == null ? void 0 : Y.call(l, {
            isSelected: g == null ? void 0 : g.isSelected.value,
            selectedClass: g == null ? void 0 : g.selectedClass.value,
            select: g == null ? void 0 : g.select,
            toggle: g == null ? void 0 : g.toggle,
            value: g == null ? void 0 : g.value.value,
            disabled: e.disabled
          })) ?? e.text]), C && u("div", {
            key: "append",
            class: "v-chip__append"
          }, [l.append ? u(xe, {
            key: "append-defaults",
            disabled: !D,
            defaults: {
              VAvatar: {
                end: !0,
                image: e.appendAvatar
              },
              VIcon: {
                end: !0,
                icon: e.appendIcon
              }
            }
          }, l.append) : u(ke, null, [e.appendIcon && u(Ce, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(vn, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), V && u("button", B({
            key: "close",
            class: "v-chip__close",
            type: "button"
          }, w.value), [l.close ? u(xe, {
            key: "close-defaults",
            defaults: {
              VIcon: {
                icon: e.closeIcon,
                size: "x-small"
              }
            }
          }, l.close) : u(Ce, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[gt("ripple"), _.value && e.ripple, null]]);
    };
  }
});
const oi = Symbol.for("vuetify:list");
function Tu() {
  const e = Te(oi, {
    hasPrepend: re(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: re(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return je(oi, t), e;
}
function Au() {
  return Te(oi, null);
}
const Jy = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      const i = /* @__PURE__ */ new Set();
      i.add(t);
      let s = l.get(t);
      for (; s != null; )
        i.add(s), s = l.get(s);
      return i;
    } else
      return a.delete(t), a;
  },
  select: () => null
}, Eu = {
  open: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (n) {
      let i = l.get(t);
      for (a.add(t); i != null && i !== t; )
        a.add(i), i = l.get(i);
      return a;
    } else
      a.delete(t);
    return a;
  },
  select: () => null
}, Qy = {
  open: Eu.open,
  select: (e) => {
    let {
      id: t,
      value: n,
      opened: a,
      parents: l
    } = e;
    if (!n)
      return a;
    const i = [];
    let s = l.get(t);
    for (; s != null; )
      i.push(s), s = l.get(s);
    return new Set(i);
  }
}, is = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i
      } = n;
      if (a = tn(a), e && !l) {
        const s = Array.from(i.entries()).reduce((r, o) => {
          let [c, d] = o;
          return d === "on" ? [...r, c] : r;
        }, []);
        if (s.length === 1 && s[0] === a)
          return i;
      }
      return i.set(a, l ? "on" : "off"), i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const s of n || [])
        i = t.select({
          id: s,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (n) => {
      const a = [];
      for (const [l, i] of n.entries())
        i === "on" && a.push(l);
      return a;
    }
  };
  return t;
}, Lu = (e) => {
  const t = is(e);
  return {
    select: (a) => {
      let {
        selected: l,
        id: i,
        ...s
      } = a;
      i = tn(i);
      const r = l.has(i) ? /* @__PURE__ */ new Map([[i, l.get(i)]]) : /* @__PURE__ */ new Map();
      return t.select({
        ...s,
        id: i,
        selected: r
      });
    },
    in: (a, l, i) => {
      let s = /* @__PURE__ */ new Map();
      return a != null && a.length && (s = t.in(a.slice(0, 1), l, i)), s;
    },
    out: (a, l, i) => t.out(a, l, i)
  };
}, ek = (e) => {
  const t = is(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: s,
        ...r
      } = a;
      return l = tn(l), s.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: s,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, tk = (e) => {
  const t = Lu(e);
  return {
    select: (a) => {
      let {
        id: l,
        selected: i,
        children: s,
        ...r
      } = a;
      return l = tn(l), s.has(l) ? i : t.select({
        id: l,
        selected: i,
        children: s,
        ...r
      });
    },
    in: t.in,
    out: t.out
  };
}, nk = (e) => {
  const t = {
    select: (n) => {
      let {
        id: a,
        value: l,
        selected: i,
        children: s,
        parents: r
      } = n;
      a = tn(a);
      const o = new Map(i), c = [a];
      for (; c.length; ) {
        const v = c.shift();
        i.set(v, l ? "on" : "off"), s.has(v) && c.push(...s.get(v));
      }
      let d = r.get(a);
      for (; d; ) {
        const v = s.get(d), f = v.every((y) => i.get(y) === "on"), m = v.every((y) => !i.has(y) || i.get(y) === "off");
        i.set(d, f ? "on" : m ? "off" : "indeterminate"), d = r.get(d);
      }
      return e && !l && Array.from(i.entries()).reduce((f, m) => {
        let [y, k] = m;
        return k === "on" ? [...f, y] : f;
      }, []).length === 0 ? o : i;
    },
    in: (n, a, l) => {
      let i = /* @__PURE__ */ new Map();
      for (const s of n || [])
        i = t.select({
          id: s,
          value: !0,
          selected: new Map(i),
          children: a,
          parents: l
        });
      return i;
    },
    out: (n, a) => {
      const l = [];
      for (const [i, s] of n.entries())
        s === "on" && !a.has(i) && l.push(i);
      return l;
    }
  };
  return t;
}, la = Symbol.for("vuetify:nested"), Fu = {
  id: re(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: N(/* @__PURE__ */ new Map()),
    children: N(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: N(/* @__PURE__ */ new Set()),
    selected: N(/* @__PURE__ */ new Map()),
    selectedValues: N([])
  }
}, ak = L({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested"), lk = (e) => {
  let t = !1;
  const n = N(/* @__PURE__ */ new Map()), a = N(/* @__PURE__ */ new Map()), l = fe(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), i = h(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return tk(e.mandatory);
      case "leaf":
        return ek(e.mandatory);
      case "independent":
        return is(e.mandatory);
      case "single-independent":
        return Lu(e.mandatory);
      case "classic":
      default:
        return nk(e.mandatory);
    }
  }), s = h(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Qy;
      case "single":
        return Jy;
      case "multiple":
      default:
        return Eu;
    }
  }), r = fe(e, "selected", e.selected, (v) => i.value.in(v, n.value, a.value), (v) => i.value.out(v, n.value, a.value));
  Ae(() => {
    t = !0;
  });
  function o(v) {
    const f = [];
    let m = v;
    for (; m != null; )
      f.unshift(m), m = a.value.get(m);
    return f;
  }
  const c = Fe("nested"), d = {
    id: re(),
    root: {
      opened: l,
      selected: r,
      selectedValues: h(() => {
        const v = [];
        for (const [f, m] of r.value.entries())
          m === "on" && v.push(f);
        return v;
      }),
      register: (v, f, m) => {
        f && v !== f && a.value.set(v, f), m && n.value.set(v, []), f != null && n.value.set(f, [...n.value.get(f) || [], v]);
      },
      unregister: (v) => {
        if (t)
          return;
        n.value.delete(v);
        const f = a.value.get(v);
        if (f) {
          const m = n.value.get(f) ?? [];
          n.value.set(f, m.filter((y) => y !== v));
        }
        a.value.delete(v), l.value.delete(v);
      },
      open: (v, f, m) => {
        c.emit("click:open", {
          id: v,
          value: f,
          path: o(v),
          event: m
        });
        const y = s.value.open({
          id: v,
          value: f,
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        y && (l.value = y);
      },
      openOnSelect: (v, f, m) => {
        const y = s.value.select({
          id: v,
          value: f,
          selected: new Map(r.value),
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        y && (l.value = y);
      },
      select: (v, f, m) => {
        c.emit("click:select", {
          id: v,
          value: f,
          path: o(v),
          event: m
        });
        const y = i.value.select({
          id: v,
          value: f,
          selected: new Map(r.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        y && (r.value = y), d.root.openOnSelect(v, f, m);
      },
      children: n,
      parents: a
    }
  };
  return je(la, d), d.root;
}, Ru = (e, t) => {
  const n = Te(la, Fu), a = Symbol(nt()), l = h(() => e.value !== void 0 ? e.value : a), i = {
    ...n,
    id: l,
    open: (s, r) => n.root.open(l.value, s, r),
    openOnSelect: (s, r) => n.root.openOnSelect(l.value, s, r),
    isOpen: h(() => n.root.opened.value.has(l.value)),
    parent: h(() => n.root.parents.value.get(l.value)),
    select: (s, r) => n.root.select(l.value, s, r),
    isSelected: h(() => n.root.selected.value.get(tn(l.value)) === "on"),
    isIndeterminate: h(() => n.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: h(() => !n.root.children.value.get(l.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(l.value, n.id.value, t), Ae(() => {
    !n.isGroupActivator && n.root.unregister(l.value);
  }), t && je(la, i), i;
}, ik = () => {
  const e = Te(la, Fu);
  je(la, {
    ...e,
    isGroupActivator: !0
  });
};
function sk() {
  const e = re(!1);
  return qe(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: h(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: vi(e)
  };
}
const rk = St({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return ik(), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
}), ok = L({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: ye,
    default: "$collapse"
  },
  expandIcon: {
    type: ye,
    default: "$expand"
  },
  prependIcon: ye,
  appendIcon: ye,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...ae(),
  ...Re()
}, "VListGroup"), sr = z()({
  name: "VListGroup",
  props: ok(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Ru(q(e, "value"), !0), s = h(() => `v-list-group--id-${String(i.value)}`), r = Au(), {
      isBooted: o
    } = sk();
    function c(m) {
      l(!a.value, m);
    }
    const d = h(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: s.value
    })), v = h(() => a.value ? e.collapseIcon : e.expandIcon), f = h(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && v.value,
        appendIcon: e.appendIcon || !e.subgroup && v.value,
        title: e.title,
        value: e.value
      }
    }));
    return Z(() => u(e.tag, {
      class: ["v-list-group", {
        "v-list-group--prepend": r == null ? void 0 : r.hasPrepend.value,
        "v-list-group--fluid": e.fluid,
        "v-list-group--subgroup": e.subgroup,
        "v-list-group--open": a.value
      }, e.class],
      style: e.style
    }, {
      default: () => [n.activator && u(xe, {
        defaults: f.value
      }, {
        default: () => [u(rk, null, {
          default: () => [n.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), u(It, {
        transition: {
          component: Vd
        },
        disabled: !o.value
      }, {
        default: () => {
          var m;
          return [Ve(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": s.value
          }, [(m = n.default) == null ? void 0 : m.call(n)]), [[ut, a.value]])];
        }
      })]
    })), {};
  }
});
const uk = nn("v-list-item-subtitle"), ck = nn("v-list-item-title"), dk = L({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: ye,
  baseColor: String,
  disabled: Boolean,
  lines: String,
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: ye,
  ripple: {
    type: [Boolean, Object],
    default: !0
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: dt(),
  onClickOnce: dt(),
  ...yn(),
  ...ae(),
  ...yt(),
  ...Nt(),
  ...$t(),
  ...at(),
  ...ul(),
  ...Re(),
  ...Ee(),
  ...Bt({
    variant: "text"
  })
}, "VListItem"), Qa = z()({
  name: "VListItem",
  directives: {
    Ripple: Bn
  },
  props: dk(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const i = ol(e, n), s = h(() => e.value === void 0 ? i.href.value : e.value), {
      select: r,
      isSelected: o,
      isIndeterminate: c,
      isGroupActivator: d,
      root: v,
      parent: f,
      openOnSelect: m
    } = Ru(s, !1), y = Au(), k = h(() => {
      var O;
      return e.active !== !1 && (e.active || ((O = i.isActive) == null ? void 0 : O.value) || o.value);
    }), g = h(() => e.link !== !1 && i.isLink.value), b = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!y)), S = h(() => e.rounded || e.nav), _ = h(() => e.color ?? e.activeColor), w = h(() => ({
      color: k.value ? _.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    G(() => {
      var O;
      return (O = i.isActive) == null ? void 0 : O.value;
    }, (O) => {
      O && f.value != null && v.open(f.value, !0), O && m(O);
    }, {
      immediate: !0
    });
    const {
      themeClasses: P
    } = We(e), {
      borderClasses: x
    } = kn(e), {
      colorClasses: p,
      colorStyles: D,
      variantClasses: C
    } = Rn(w), {
      densityClasses: V
    } = Ct(e), {
      dimensionStyles: I
    } = Yt(e), {
      elevationClasses: T
    } = Wt(e), {
      roundedClasses: A
    } = lt(S), M = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Y = h(() => ({
      isActive: k.value,
      select: r,
      isSelected: o.value,
      isIndeterminate: c.value
    }));
    function Q(O) {
      var E;
      l("click", O), !(d || !b.value) && ((E = i.navigate) == null || E.call(i, O), e.value != null && r(!o.value, O));
    }
    function le(O) {
      (O.key === "Enter" || O.key === " ") && (O.preventDefault(), Q(O));
    }
    return Z(() => {
      const O = g.value ? "a" : e.tag, E = a.title || e.title != null, H = a.subtitle || e.subtitle != null, X = !!(e.appendAvatar || e.appendIcon), he = !!(X || a.append), j = !!(e.prependAvatar || e.prependIcon), oe = !!(j || a.prepend);
      return y == null || y.updateHasPrepend(oe), e.activeColor && Dc("active-color", ["color", "base-color"]), Ve(u(O, {
        class: ["v-list-item", {
          "v-list-item--active": k.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": b.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !oe && (y == null ? void 0 : y.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && k.value
        }, P.value, x.value, p.value, V.value, T.value, M.value, A.value, C.value, e.class],
        style: [D.value, I.value, e.style],
        href: i.href.value,
        tabindex: b.value ? y ? -2 : 0 : void 0,
        onClick: Q,
        onKeydown: b.value && !g.value && le
      }, {
        default: () => {
          var ge;
          return [Fn(b.value || k.value, "v-list-item"), oe && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? u(xe, {
            key: "prepend-defaults",
            disabled: !j,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.prependAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.prependIcon
              },
              VListItemAction: {
                start: !0
              }
            }
          }, {
            default: () => {
              var U;
              return [(U = a.prepend) == null ? void 0 : U.call(a, Y.value)];
            }
          }) : u(ke, null, [e.prependAvatar && u(vn, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(Ce, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [E && u(ck, {
            key: "title"
          }, {
            default: () => {
              var U;
              return [((U = a.title) == null ? void 0 : U.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), H && u(uk, {
            key: "subtitle"
          }, {
            default: () => {
              var U;
              return [((U = a.subtitle) == null ? void 0 : U.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (ge = a.default) == null ? void 0 : ge.call(a, Y.value)]), he && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? u(xe, {
            key: "append-defaults",
            disabled: !X,
            defaults: {
              VAvatar: {
                density: e.density,
                image: e.appendAvatar
              },
              VIcon: {
                density: e.density,
                icon: e.appendIcon
              },
              VListItemAction: {
                end: !0
              }
            }
          }, {
            default: () => {
              var U;
              return [(U = a.append) == null ? void 0 : U.call(a, Y.value)];
            }
          }) : u(ke, null, [e.appendIcon && u(Ce, {
            key: "append-icon",
            density: e.density,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(vn, {
            key: "append-avatar",
            density: e.density,
            image: e.appendAvatar
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)])];
        }
      }), [[gt("ripple"), b.value && e.ripple]]);
    }), {};
  }
}), fk = L({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ae(),
  ...Re()
}, "VListSubheader"), vk = z()({
  name: "VListSubheader",
  props: fk(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = ft(q(e, "color"));
    return Z(() => {
      const i = !!(n.default || e.title);
      return u(e.tag, {
        class: ["v-list-subheader", {
          "v-list-subheader--inset": e.inset,
          "v-list-subheader--sticky": e.sticky
        }, a.value, e.class],
        style: [{
          textColorStyles: l
        }, e.style]
      }, {
        default: () => {
          var s;
          return [i && u("div", {
            class: "v-list-subheader__text"
          }, [((s = n.default) == null ? void 0 : s.call(n)) ?? e.title])];
        }
      });
    }), {};
  }
});
const mk = L({
  color: String,
  inset: Boolean,
  length: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ae(),
  ...Ee()
}, "VDivider"), hk = z()({
  name: "VDivider",
  props: mk(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      themeClasses: a
    } = We(e), {
      textColorClasses: l,
      textColorStyles: i
    } = ft(q(e, "color")), s = h(() => {
      const r = {};
      return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = J(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = J(e.thickness)), r;
    });
    return Z(() => u("hr", {
      class: [{
        "v-divider": !0,
        "v-divider--inset": e.inset,
        "v-divider--vertical": e.vertical
      }, a.value, l.value, e.class],
      style: [s.value, i.value, e.style],
      "aria-orientation": !n.role || n.role === "separator" ? e.vertical ? "vertical" : "horizontal" : void 0,
      role: `${n.role || "separator"}`
    }, null)), {};
  }
}), gk = L({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Nu = z()({
  name: "VListChildren",
  props: gk(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Tu(), () => {
      var a, l;
      return ((a = n.default) == null ? void 0 : a.call(n)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var f, m;
        let {
          children: s,
          props: r,
          type: o,
          raw: c
        } = i;
        if (o === "divider")
          return ((f = n.divider) == null ? void 0 : f.call(n, {
            props: r
          })) ?? u(hk, r, null);
        if (o === "subheader")
          return ((m = n.subheader) == null ? void 0 : m.call(n, {
            props: r
          })) ?? u(vk, r, null);
        const d = {
          subtitle: n.subtitle ? (y) => {
            var k;
            return (k = n.subtitle) == null ? void 0 : k.call(n, {
              ...y,
              item: c
            });
          } : void 0,
          prepend: n.prepend ? (y) => {
            var k;
            return (k = n.prepend) == null ? void 0 : k.call(n, {
              ...y,
              item: c
            });
          } : void 0,
          append: n.append ? (y) => {
            var k;
            return (k = n.append) == null ? void 0 : k.call(n, {
              ...y,
              item: c
            });
          } : void 0,
          title: n.title ? (y) => {
            var k;
            return (k = n.title) == null ? void 0 : k.call(n, {
              ...y,
              item: c
            });
          } : void 0
        }, v = sr.filterProps(r);
        return s ? u(sr, B({
          value: r == null ? void 0 : r.value
        }, v), {
          activator: (y) => {
            let {
              props: k
            } = y;
            const g = {
              ...r,
              ...k,
              value: e.returnObject ? c : r.value
            };
            return n.header ? n.header({
              props: g
            }) : u(Qa, g, d);
          },
          default: () => u(Nu, {
            items: s
          }, n)
        }) : n.item ? n.item({
          props: r
        }) : u(Qa, B(r, {
          value: e.returnObject ? c : r.value
        }), d);
      }));
    };
  }
}), Yu = L({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: hn
  }
}, "list-items");
function ui(e, t) {
  const n = Ot(t, e.itemTitle, t), a = Ot(t, e.itemValue, n), l = Ot(t, e.itemChildren), i = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Je(t, ["children"]) : t : void 0 : Ot(t, e.itemProps), s = {
    title: n,
    value: a,
    ...i
  };
  return {
    title: String(s.title ?? ""),
    value: s.value,
    props: s,
    children: Array.isArray(l) ? Bu(e, l) : void 0,
    raw: t
  };
}
function Bu(e, t) {
  const n = [];
  for (const a of t)
    n.push(ui(e, a));
  return n;
}
function yk(e) {
  const t = h(() => Bu(e, e.items)), n = h(() => t.value.some((i) => i.value === null));
  function a(i) {
    return n.value || (i = i.filter((s) => s !== null)), i.map((s) => e.returnObject && typeof s == "string" ? ui(e, s) : t.value.find((r) => e.valueComparator(s, r.value)) || ui(e, s));
  }
  function l(i) {
    return e.returnObject ? i.map((s) => {
      let {
        raw: r
      } = s;
      return r;
    }) : i.map((s) => {
      let {
        value: r
      } = s;
      return r;
    });
  }
  return {
    items: t,
    transformIn: a,
    transformOut: l
  };
}
function kk(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function bk(e, t) {
  const n = Ot(t, e.itemType, "item"), a = kk(t) ? t : Ot(t, e.itemTitle), l = Ot(t, e.itemValue, void 0), i = Ot(t, e.itemChildren), s = e.itemProps === !0 ? Je(t, ["children"]) : Ot(t, e.itemProps), r = {
    title: a,
    value: l,
    ...s
  };
  return {
    type: n,
    title: r.title,
    value: r.value,
    props: r,
    children: n === "item" && i ? $u(e, i) : void 0,
    raw: t
  };
}
function $u(e, t) {
  const n = [];
  for (const a of t)
    n.push(bk(e, a));
  return n;
}
function pk(e) {
  return {
    items: h(() => $u(e, e.items))
  };
}
const _k = L({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  ...ak({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...yn(),
  ...ae(),
  ...yt(),
  ...Nt(),
  ...$t(),
  itemType: {
    type: String,
    default: "type"
  },
  ...Yu(),
  ...at(),
  ...Re(),
  ...Ee(),
  ...Bt({
    variant: "text"
  })
}, "VList"), Sk = z()({
  name: "VList",
  props: _k(),
  emits: {
    "update:selected": (e) => !0,
    "update:opened": (e) => !0,
    "click:open": (e) => !0,
    "click:select": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      items: a
    } = pk(e), {
      themeClasses: l
    } = We(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: s
    } = vt(q(e, "bgColor")), {
      borderClasses: r
    } = kn(e), {
      densityClasses: o
    } = Ct(e), {
      dimensionStyles: c
    } = Yt(e), {
      elevationClasses: d
    } = Wt(e), {
      roundedClasses: v
    } = lt(e), {
      open: f,
      select: m
    } = lk(e), y = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), k = q(e, "activeColor"), g = q(e, "baseColor"), b = q(e, "color");
    Tu(), gn({
      VListGroup: {
        activeColor: k,
        baseColor: g,
        color: b
      },
      VListItem: {
        activeClass: q(e, "activeClass"),
        activeColor: k,
        baseColor: g,
        color: b,
        density: q(e, "density"),
        disabled: q(e, "disabled"),
        lines: q(e, "lines"),
        nav: q(e, "nav"),
        slim: q(e, "slim"),
        variant: q(e, "variant")
      }
    });
    const S = re(!1), _ = N();
    function w(V) {
      S.value = !0;
    }
    function P(V) {
      S.value = !1;
    }
    function x(V) {
      var I;
      !S.value && !(V.relatedTarget && ((I = _.value) != null && I.contains(V.relatedTarget))) && C();
    }
    function p(V) {
      if (_.value) {
        if (V.key === "ArrowDown")
          C("next");
        else if (V.key === "ArrowUp")
          C("prev");
        else if (V.key === "Home")
          C("first");
        else if (V.key === "End")
          C("last");
        else
          return;
        V.preventDefault();
      }
    }
    function D(V) {
      S.value = !0;
    }
    function C(V) {
      if (_.value)
        return $a(_.value, V);
    }
    return Z(() => u(e.tag, {
      ref: _,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, o.value, d.value, y.value, v.value, e.class],
      style: [s.value, c.value, e.style],
      tabindex: e.disabled || S.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: w,
      onFocusout: P,
      onFocus: x,
      onKeydown: p,
      onMousedown: D
    }, {
      default: () => [u(Nu, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: f,
      select: m,
      focus: C
    };
  }
});
const wk = L({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ae(),
  ...ua({
    transition: {
      component: lo
    }
  })
}, "VCounter"), Ck = z()({
  name: "VCounter",
  functional: !0,
  props: wk(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = h(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return Z(() => u(It, {
      transition: e.transition
    }, {
      default: () => [Ve(u("div", {
        class: ["v-counter", e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[ut, e.active]])]
    })), {};
  }
});
const Vk = L({
  floating: Boolean,
  ...ae()
}, "VFieldLabel"), Oa = z()({
  name: "VFieldLabel",
  props: Vk(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Z(() => u(Mi, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), xk = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Wu = L({
  appendInnerIcon: ye,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: ye,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: ye,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (e) => xk.includes(e)
  },
  "onClick:clear": dt(),
  "onClick:appendInner": dt(),
  "onClick:prependInner": dt(),
  ...ae(),
  ...xi(),
  ...at(),
  ...Ee()
}, "VField"), Uu = z()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Oi(),
    ...Wu()
  },
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      themeClasses: i
    } = We(e), {
      loaderClasses: s
    } = il(e), {
      focusClasses: r,
      isFocused: o,
      focus: c,
      blur: d
    } = va(e), {
      InputIcon: v
    } = eo(e), {
      roundedClasses: f
    } = lt(e), {
      rtlClasses: m
    } = Ut(), y = h(() => e.dirty || e.active), k = h(() => !e.singleLine && !!(e.label || l.label)), g = nt(), b = h(() => e.id || `input-${g}`), S = h(() => `${b.value}-messages`), _ = N(), w = N(), P = N(), x = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: p,
      backgroundColorStyles: D
    } = vt(q(e, "bgColor")), {
      textColorClasses: C,
      textColorStyles: V
    } = ft(h(() => e.error || e.disabled ? void 0 : y.value && o.value ? e.color : e.baseColor));
    G(y, (A) => {
      if (k.value) {
        const M = _.value.$el, Y = w.value.$el;
        requestAnimationFrame(() => {
          const Q = bi(M), le = Y.getBoundingClientRect(), O = le.x - Q.x, E = le.y - Q.y - (Q.height / 2 - le.height / 2), H = le.width / 0.75, X = Math.abs(H - Q.width) > 1 ? {
            maxWidth: J(H)
          } : void 0, he = getComputedStyle(M), j = getComputedStyle(Y), oe = parseFloat(he.transitionDuration) * 1e3 || 150, ge = parseFloat(j.getPropertyValue("--v-field-label-scale")), U = j.getPropertyValue("color");
          M.style.visibility = "visible", Y.style.visibility = "hidden", xn(M, {
            transform: `translate(${O}px, ${E}px) scale(${ge})`,
            color: U,
            ...X
          }, {
            duration: oe,
            easing: Ua,
            direction: A ? "normal" : "reverse"
          }).finished.then(() => {
            M.style.removeProperty("visibility"), Y.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const I = h(() => ({
      isActive: y,
      isFocused: o,
      controlRef: P,
      blur: d,
      focus: c
    }));
    function T(A) {
      A.target !== document.activeElement && A.preventDefault();
    }
    return Z(() => {
      var O, E, H;
      const A = e.variant === "outlined", M = l["prepend-inner"] || e.prependInnerIcon, Y = !!(e.clearable || l.clear), Q = !!(l["append-inner"] || e.appendInnerIcon || Y), le = () => l.label ? l.label({
        ...I.value,
        label: e.label,
        props: {
          for: b.value
        }
      }) : e.label;
      return u("div", B({
        class: ["v-field", {
          "v-field--active": y.value,
          "v-field--appended": Q,
          "v-field--center-affix": e.centerAffix ?? !x.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": M,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !le(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, p.value, r.value, s.value, f.value, m.value, e.class],
        style: [D.value, e.style],
        onClick: T
      }, n), [u("div", {
        class: "v-field__overlay"
      }, null), u(Pi, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), M && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(v, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (O = l["prepend-inner"]) == null ? void 0 : O.call(l, I.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && k.value && u(Oa, {
        key: "floating-label",
        ref: w,
        class: [C.value],
        floating: !0,
        for: b.value,
        style: V.value
      }, {
        default: () => [le()]
      }), u(Oa, {
        ref: _,
        for: b.value
      }, {
        default: () => [le()]
      }), (E = l.default) == null ? void 0 : E.call(l, {
        ...I.value,
        props: {
          id: b.value,
          class: "v-field__input",
          "aria-describedby": S.value
        },
        focus: c,
        blur: d
      })]), Y && u(io, {
        key: "clear"
      }, {
        default: () => [Ve(u("div", {
          class: "v-field__clearable",
          onMousedown: (X) => {
            X.preventDefault(), X.stopPropagation();
          }
        }, [l.clear ? l.clear() : u(v, {
          name: "clear"
        }, null)]), [[ut, e.dirty]])]
      }), Q && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(H = l["append-inner"]) == null ? void 0 : H.call(l, I.value), e.appendInnerIcon && u(v, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", C.value],
        style: V.value
      }, [A && u(ke, null, [u("div", {
        class: "v-field__outline__start"
      }, null), k.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Oa, {
        ref: w,
        floating: !0,
        for: b.value
      }, {
        default: () => [le()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), x.value && k.value && u(Oa, {
        ref: w,
        floating: !0,
        for: b.value
      }, {
        default: () => [le()]
      })])]);
    }), {
      controlRef: P
    };
  }
});
function Pk(e) {
  const t = Object.keys(Uu.props).filter((n) => !yi(n) && n !== "class" && n !== "style");
  return br(e, t);
}
const Mk = ["color", "file", "time", "date", "datetime-local", "week", "month"], Hu = L({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...ma(),
  ...Wu()
}, "VTextField"), el = z()({
  name: "VTextField",
  directives: {
    Intersect: Yr
  },
  inheritAttrs: !1,
  props: Hu(),
  emits: {
    "click:control": (e) => !0,
    "mousedown:control": (e) => !0,
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const i = fe(e, "modelValue"), {
      isFocused: s,
      focus: r,
      blur: o
    } = va(e), c = h(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = h(() => {
      if (n.maxlength)
        return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), v = h(() => ["plain", "underlined"].includes(e.variant));
    function f(x, p) {
      var D, C;
      !e.autofocus || !x || (C = (D = p[0].target) == null ? void 0 : D.focus) == null || C.call(D);
    }
    const m = N(), y = N(), k = N(), g = h(() => Mk.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
    function b() {
      var x;
      k.value !== document.activeElement && ((x = k.value) == null || x.focus()), s.value || r();
    }
    function S(x) {
      a("mousedown:control", x), x.target !== k.value && (b(), x.preventDefault());
    }
    function _(x) {
      b(), a("click:control", x);
    }
    function w(x) {
      x.stopPropagation(), b(), Ue(() => {
        i.value = null, gc(e["onClick:clear"], x);
      });
    }
    function P(x) {
      var D;
      const p = x.target;
      if (i.value = p.value, (D = e.modelModifiers) != null && D.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const C = [p.selectionStart, p.selectionEnd];
        Ue(() => {
          p.selectionStart = C[0], p.selectionEnd = C[1];
        });
      }
    }
    return Z(() => {
      const x = !!(l.counter || e.counter !== !1 && e.counter != null), p = !!(x || l.details), [D, C] = nl(n), {
        modelValue: V,
        ...I
      } = en.filterProps(e), T = Pk(e);
      return u(en, B({
        ref: m,
        modelValue: i.value,
        "onUpdate:modelValue": (A) => i.value = A,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": v.value
        }, e.class],
        style: e.style
      }, D, I, {
        centerAffix: !v.value,
        focused: s.value
      }), {
        ...l,
        default: (A) => {
          let {
            id: M,
            isDisabled: Y,
            isDirty: Q,
            isReadonly: le,
            isValid: O
          } = A;
          return u(Uu, B({
            ref: y,
            onMousedown: S,
            onClick: _,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, T, {
            id: M.value,
            active: g.value || Q.value,
            dirty: Q.value || e.dirty,
            disabled: Y.value,
            focused: s.value,
            error: O.value === !1
          }), {
            ...l,
            default: (E) => {
              let {
                props: {
                  class: H,
                  ...X
                }
              } = E;
              const he = Ve(u("input", B({
                ref: k,
                value: i.value,
                onInput: P,
                autofocus: e.autofocus,
                readonly: le.value,
                disabled: Y.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: b,
                onBlur: o
              }, X, C), null), [[gt("intersect"), {
                handler: f
              }, null, {
                once: !0
              }]]);
              return u(ke, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: H,
                "data-no-activator": ""
              }, [l.default(), he]) : Qu(he, {
                class: H
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: p ? (A) => {
          var M;
          return u(ke, null, [(M = l.details) == null ? void 0 : M.call(l, A), x && u(ke, null, [u("span", null, null), u(Ck, {
            active: e.persistentCounter || s.value,
            value: c.value,
            max: d.value
          }, l.counter)])]);
        } : void 0
      });
    }), $n({}, m, y, k);
  }
});
const Dk = L({
  renderless: Boolean,
  ...ae()
}, "VVirtualScrollItem"), Ok = z()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Dk(),
  emits: {
    "update:height": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      emit: a,
      slots: l
    } = t;
    const {
      resizeRef: i,
      contentRect: s
    } = fl(void 0, "border");
    G(() => {
      var r;
      return (r = s.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), Z(() => {
      var r, o;
      return e.renderless ? u(ke, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : u("div", B({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(o = l.default) == null ? void 0 : o.call(l)]);
    });
  }
}), Ik = -1, Tk = 1, $l = 100, Ak = L({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Ek(e, t) {
  const n = oo(), a = re(0);
  ze(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = re(0), i = re(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (a.value || 16)
  ) || 1), s = re(0), r = re(0), o = N(), c = N();
  let d = 0;
  const {
    resizeRef: v,
    contentRect: f
  } = fl();
  ze(() => {
    v.value = o.value;
  });
  const m = h(() => {
    var E;
    return o.value === document.documentElement ? n.height.value : ((E = f.value) == null ? void 0 : E.height) || parseInt(e.height) || 0;
  }), y = h(() => !!(o.value && c.value && m.value && a.value));
  let k = Array.from({
    length: t.value.length
  }), g = Array.from({
    length: t.value.length
  });
  const b = re(0);
  let S = -1;
  function _(E) {
    return k[E] || a.value;
  }
  const w = vc(() => {
    const E = performance.now();
    g[0] = 0;
    const H = t.value.length;
    for (let X = 1; X <= H - 1; X++)
      g[X] = (g[X - 1] || 0) + _(X - 1);
    b.value = Math.max(b.value, performance.now() - E);
  }, b), P = G(y, (E) => {
    E && (P(), d = c.value.offsetTop, w.immediate(), Y(), ~S && Ue(() => {
      $e && window.requestAnimationFrame(() => {
        le(S), S = -1;
      });
    }));
  });
  G(m, (E, H) => {
    H && Y();
  }), Ge(() => {
    w.clear();
  });
  function x(E, H) {
    const X = k[E], he = a.value;
    a.value = he ? Math.min(a.value, H) : H, (X !== H || he !== a.value) && (k[E] = H, w());
  }
  function p(E) {
    return E = rt(E, 0, t.value.length - 1), g[E] || 0;
  }
  function D(E) {
    return Lk(g, E);
  }
  let C = 0, V = 0, I = 0;
  function T() {
    if (!o.value || !c.value)
      return;
    const E = o.value.scrollTop, H = performance.now();
    H - I > 500 ? (V = Math.sign(E - C), d = c.value.offsetTop) : V = E - C, C = E, I = H, Y();
  }
  function A() {
    !o.value || !c.value || (V = 0, I = 0, Y());
  }
  let M = -1;
  function Y() {
    cancelAnimationFrame(M), M = requestAnimationFrame(Q);
  }
  function Q() {
    if (!o.value || !m.value)
      return;
    const E = C - d, H = Math.sign(V), X = Math.max(0, E - $l), he = rt(D(X), 0, t.value.length), j = E + m.value + $l, oe = rt(D(j) + 1, he + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (H !== Ik || he < l.value) && (H !== Tk || oe > i.value)
    ) {
      const ge = p(l.value) - p(he), U = p(oe) - p(i.value);
      Math.max(ge, U) > $l ? (l.value = he, i.value = oe) : (he <= 0 && (l.value = he), oe >= t.value.length && (i.value = oe));
    }
    s.value = p(l.value), r.value = p(t.value.length) - p(i.value);
  }
  function le(E) {
    const H = p(E);
    !o.value || E && !H ? S = E : o.value.scrollTop = H;
  }
  const O = h(() => t.value.slice(l.value, i.value).map((E, H) => ({
    raw: E,
    index: H + l.value
  })));
  return G(t, () => {
    k = Array.from({
      length: t.value.length
    }), g = Array.from({
      length: t.value.length
    }), w.immediate(), Y();
  }, {
    deep: !0
  }), {
    containerRef: o,
    markerRef: c,
    computedItems: O,
    paddingTop: s,
    paddingBottom: r,
    scrollToIndex: le,
    handleScroll: T,
    handleScrollend: A,
    handleItemResize: x
  };
}
function Lk(e, t) {
  let n = e.length - 1, a = 0, l = 0, i = null, s = -1;
  if (e[n] < t)
    return n;
  for (; a <= n; )
    if (l = a + n >> 1, i = e[l], i > t)
      n = l - 1;
    else if (i < t)
      s = l, a = l + 1;
    else
      return i === t ? l : a;
  return s;
}
const Fk = L({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...Ak(),
  ...ae(),
  ...Nt()
}, "VVirtualScroll"), Rk = z()({
  name: "VVirtualScroll",
  props: Fk(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Fe("VVirtualScroll"), {
      dimensionStyles: l
    } = Yt(e), {
      containerRef: i,
      markerRef: s,
      handleScroll: r,
      handleScrollend: o,
      handleItemResize: c,
      scrollToIndex: d,
      paddingTop: v,
      paddingBottom: f,
      computedItems: m
    } = Ek(e, q(e, "items"));
    return mn(() => e.renderless, () => {
      function y() {
        var b, S;
        const g = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[g]("scroll", r, {
          passive: !0
        }), document[g]("scrollend", o)) : ((b = i.value) == null || b[g]("scroll", r, {
          passive: !0
        }), (S = i.value) == null || S[g]("scrollend", o));
      }
      qe(() => {
        i.value = Lr(a.vnode.el, !0), y(!0);
      }), Ge(y);
    }), Z(() => {
      const y = m.value.map((k) => u(Ok, {
        key: k.index,
        renderless: e.renderless,
        "onUpdate:height": (g) => c(k.index, g)
      }, {
        default: (g) => {
          var b;
          return (b = n.default) == null ? void 0 : b.call(n, {
            item: k.raw,
            index: k.index,
            ...g
          });
        }
      }));
      return e.renderless ? u(ke, null, [u("div", {
        ref: s,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: J(v.value)
        }
      }, null), y, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: J(f.value)
        }
      }, null)]) : u("div", {
        ref: i,
        class: ["v-virtual-scroll", e.class],
        onScrollPassive: r,
        onScrollend: o,
        style: [l.value, e.style]
      }, [u("div", {
        ref: s,
        class: "v-virtual-scroll__container",
        style: {
          paddingTop: J(v.value),
          paddingBottom: J(f.value)
        }
      }, [y])]);
    }), {
      scrollToIndex: d
    };
  }
});
function Nk(e, t) {
  const n = re(!1);
  let a;
  function l(r) {
    cancelAnimationFrame(a), n.value = !0, a = requestAnimationFrame(() => {
      a = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }
  async function i() {
    await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => requestAnimationFrame(r)), await new Promise((r) => {
      if (n.value) {
        const o = G(n, () => {
          o(), r();
        });
      } else
        r();
    });
  }
  async function s(r) {
    var d, v;
    if (r.key === "Tab" && ((d = t.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key))
      return;
    const o = (v = e.value) == null ? void 0 : v.$el;
    if (!o)
      return;
    (r.key === "Home" || r.key === "End") && o.scrollTo({
      top: r.key === "Home" ? 0 : o.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const f = o.getBoundingClientRect().top;
      for (const m of c)
        if (m.getBoundingClientRect().top >= f) {
          m.focus();
          break;
        }
    } else {
      const f = o.getBoundingClientRect().bottom;
      for (const m of [...c].reverse())
        if (m.getBoundingClientRect().bottom <= f) {
          m.focus();
          break;
        }
    }
  }
  return {
    onListScroll: l,
    onListKeydown: s
  };
}
const Yk = L({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  menu: Boolean,
  menuIcon: {
    type: ye,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...Yu({
    itemChildren: !1
  })
}, "Select"), Bk = L({
  ...Yk(),
  ...Je(Hu({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...ua({
    transition: {
      component: Di
    }
  })
}, "VSelect"), $k = z()({
  name: "VSelect",
  props: Bk(),
  emits: {
    "update:focused": (e) => !0,
    "update:modelValue": (e) => !0,
    "update:menu": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      t: a
    } = Yn(), l = N(), i = N(), s = N(), r = fe(e, "menu"), o = h({
      get: () => r.value,
      set: (O) => {
        var E;
        r.value && !O && ((E = i.value) != null && E.ΨopenChildren) || (r.value = O);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: v
    } = yk(e), f = fe(e, "modelValue", [], (O) => d(O === null ? [null] : Xe(O)), (O) => {
      const E = v(O);
      return e.multiple ? E : E[0] ?? null;
    }), m = h(() => typeof e.counterValue == "function" ? e.counterValue(f.value) : typeof e.counterValue == "number" ? e.counterValue : f.value.length), y = ro(), k = h(() => f.value.map((O) => O.value)), g = re(!1), b = h(() => o.value ? e.closeText : e.openText);
    let S = "", _;
    const w = h(() => e.hideSelected ? c.value.filter((O) => !f.value.some((E) => E === O)) : c.value), P = h(() => e.hideNoData && !w.value.length || e.readonly || (y == null ? void 0 : y.isReadonly.value)), x = h(() => {
      var O;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((O = e.menuProps) == null ? void 0 : O.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), p = N(), {
      onListScroll: D,
      onListKeydown: C
    } = Nk(p, l);
    function V(O) {
      e.openOnClear && (o.value = !0);
    }
    function I() {
      P.value || (o.value = !o.value);
    }
    function T(O) {
      var j, oe;
      if (!O.key || e.readonly || y != null && y.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(O.key) && O.preventDefault(), ["Enter", "ArrowDown", " "].includes(O.key) && (o.value = !0), ["Escape", "Tab"].includes(O.key) && (o.value = !1), O.key === "Home" ? (j = p.value) == null || j.focus("first") : O.key === "End" && ((oe = p.value) == null || oe.focus("last"));
      const E = 1e3;
      function H(ge) {
        const U = ge.key.length === 1, de = !ge.ctrlKey && !ge.metaKey && !ge.altKey;
        return U && de;
      }
      if (e.multiple || !H(O))
        return;
      const X = performance.now();
      X - _ > E && (S = ""), S += O.key.toLowerCase(), _ = X;
      const he = c.value.find((ge) => ge.title.toLowerCase().startsWith(S));
      he !== void 0 && (f.value = [he]);
    }
    function A(O) {
      if (e.multiple) {
        const E = f.value.findIndex((H) => e.valueComparator(H.value, O.value));
        if (E === -1)
          f.value = [...f.value, O];
        else {
          const H = [...f.value];
          H.splice(E, 1), f.value = H;
        }
      } else
        f.value = [O], o.value = !1;
    }
    function M(O) {
      var E;
      (E = p.value) != null && E.$el.contains(O.relatedTarget) || (o.value = !1);
    }
    function Y() {
      var O;
      g.value && ((O = l.value) == null || O.focus());
    }
    function Q(O) {
      g.value = !0;
    }
    function le(O) {
      if (O == null)
        f.value = [];
      else if (Wa(l.value, ":autofill") || Wa(l.value, ":-webkit-autofill")) {
        const E = c.value.find((H) => H.title === O);
        E && A(E);
      } else
        l.value && (l.value.value = "");
    }
    return G(o, () => {
      if (!e.hideSelected && o.value && f.value.length) {
        const O = w.value.findIndex((E) => f.value.some((H) => e.valueComparator(H.value, E.value)));
        $e && window.requestAnimationFrame(() => {
          var E;
          O >= 0 && ((E = s.value) == null || E.scrollToIndex(O));
        });
      }
    }), G(w, (O, E) => {
      g.value && (!O.length && e.hideNoData && (o.value = !1), !E.length && O.length && (o.value = !0));
    }), Z(() => {
      const O = !!(e.chips || n.chip), E = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), H = f.value.length > 0, X = el.filterProps(e), he = H || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(el, B({
        ref: l
      }, X, {
        modelValue: f.value.map((j) => j.props.value).join(", "),
        "onUpdate:modelValue": le,
        focused: g.value,
        "onUpdate:focused": (j) => g.value = j,
        validationValue: f.externalValue,
        counterValue: m.value,
        dirty: H,
        class: ["v-select", {
          "v-select--active-menu": o.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": f.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: he,
        "onClick:clear": V,
        "onMousedown:control": I,
        onBlur: M,
        onKeydown: T,
        "aria-label": a(b.value),
        title: a(b.value)
      }), {
        ...n,
        default: () => u(ke, null, [u(hl, B({
          ref: i,
          modelValue: o.value,
          "onUpdate:modelValue": (j) => o.value = j,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: P.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: Y
        }, x.value), {
          default: () => [E && u(Sk, {
            ref: p,
            selected: k.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (j) => j.preventDefault(),
            onKeydown: C,
            onFocusin: Q,
            onScrollPassive: D,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, {
            default: () => {
              var j, oe, ge;
              return [(j = n["prepend-item"]) == null ? void 0 : j.call(n), !w.value.length && !e.hideNoData && (((oe = n["no-data"]) == null ? void 0 : oe.call(n)) ?? u(Qa, {
                title: a(e.noDataText)
              }, null)), u(Rk, {
                ref: s,
                renderless: !0,
                items: w.value
              }, {
                default: (U) => {
                  var Sa;
                  let {
                    item: de,
                    index: jt,
                    itemRef: Pt
                  } = U;
                  const _a = B(de.props, {
                    ref: Pt,
                    key: jt,
                    onClick: () => A(de)
                  });
                  return ((Sa = n.item) == null ? void 0 : Sa.call(n, {
                    item: de,
                    index: jt,
                    props: _a
                  })) ?? u(Qa, B(_a, {
                    role: "option"
                  }), {
                    prepend: (Pl) => {
                      let {
                        isSelected: Ml
                      } = Pl;
                      return u(ke, null, [e.multiple && !e.hideSelected ? u(Kl, {
                        key: de.value,
                        modelValue: Ml,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, de.props.prependAvatar && u(vn, {
                        image: de.props.prependAvatar
                      }, null), de.props.prependIcon && u(Ce, {
                        icon: de.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (ge = n["append-item"]) == null ? void 0 : ge.call(n)];
            }
          })]
        }), f.value.map((j, oe) => {
          function ge(Pt) {
            Pt.stopPropagation(), Pt.preventDefault(), A(j);
          }
          const U = {
            "onClick:close": ge,
            onMousedown(Pt) {
              Pt.preventDefault(), Pt.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, de = O ? !!n.chip : !!n.selection, jt = de ? Cr(O ? n.chip({
            item: j,
            index: oe,
            props: U
          }) : n.selection({
            item: j,
            index: oe
          })) : void 0;
          if (!(de && !jt))
            return u("div", {
              key: j.value,
              class: "v-select__selection"
            }, [O ? n.chip ? u(xe, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: j.title
                }
              }
            }, {
              default: () => [jt]
            }) : u(Xy, B({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: j.title,
              disabled: j.props.disabled
            }, U), null) : jt ?? u("span", {
              class: "v-select__selection-text"
            }, [j.title, e.multiple && oe < f.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [Me(",")])])]);
        })]),
        "append-inner": function() {
          var U;
          for (var j = arguments.length, oe = new Array(j), ge = 0; ge < j; ge++)
            oe[ge] = arguments[ge];
          return u(ke, null, [(U = n["append-inner"]) == null ? void 0 : U.call(n, ...oe), e.menuIcon ? u(Ce, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), $n({
      isFocused: g,
      menu: o,
      select: A
    }, l);
  }
}), Wk = /* @__PURE__ */ ct("div", { class: "v-picker__header" }, null, -1), Uk = { class: "v-picker__body" }, Hk = /* @__PURE__ */ ct("span", { class: "text-h3" }, ":", -1), zk = { class: "v-picker__actions" }, jk = /* @__PURE__ */ Le({
  __name: "TempTimePicker",
  props: {
    modelValue: { default: "" },
    padStart: { type: Boolean, default: !0 },
    mode: { default: Gt.Normal },
    rollingNumbers: { type: Boolean, default: !0 },
    width: { default: 360 },
    cancelText: { default: "cancel" },
    okText: { default: "ok" },
    title: { default: "select time" },
    closeOnOutsideClick: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "click:cancel", "click:save"],
  setup(e, { emit: t }) {
    const n = ["AM", "PM"], a = e, l = t, i = N({
      mask: "##",
      eager: !0
    }), s = N("10"), r = N("00"), o = N("AM"), c = h(() => a.mode == Gt.Normal), d = h(() => a.rollingNumbers ? -1 : 0), v = h(() => a.rollingNumbers ? a.mode == Gt.Normal ? 13 : 24 : a.mode == Gt.Normal ? 12 : 23), f = h(() => a.rollingNumbers ? -1 : 0), m = h(() => a.rollingNumbers ? 60 : 59), y = h(() => c.value ? s.value + ":" + r.value + " " + o.value : s.value + ":" + r.value);
    function k() {
      l("update:modelValue", y.value), l("click:save", y.value);
    }
    function g() {
      l("click:cancel", void 0);
    }
    function b() {
      l("update:modelValue", y.value);
    }
    function S() {
      a.closeOnOutsideClick && g();
    }
    const _ = G(o, () => {
      b();
    }), w = G(s, (x) => {
      a.mode == Gt.Normal && (a.rollingNumbers ? x <= 0 ? s.value = 12 : x > 12 && (s.value = 1) : x <= 0 ? s.value = 0 : x > 12 && (s.value = 12)), a.mode == Gt.Military && (a.rollingNumbers ? x < 0 ? s.value = 23 : x > 23 && (s.value = 0) : x < 0 ? s.value = 0 : x > 23 && (s.value = 23)), s.value < 10 && a.padStart && (s.value = s.value.toString().padStart(2, "0")), b();
    }), P = G(r, (x) => {
      a.rollingNumbers && (x < 0 && (r.value = 59), x > 59 && (r.value = 0)), r.value < 10 && a.padStart && (r.value = r.value.toString().padStart(2, "0")), b();
    });
    return Ae(() => {
      _(), w(), P();
    }), qe(() => {
      if (!ie(a.modelValue)) {
        if (a.mode == Gt.Normal) {
          const x = a.modelValue.split(" ");
          ["am", "pm"].includes(x[1].toLowerCase()) && (o.value = x[1].toUpperCase());
          const D = x[0].split(":");
          s.value = D[0], r.value = D[1];
        }
        if (a.mode == Gt.Military) {
          const x = a.modelValue.split(":");
          s.value = x[0], r.value = x[1];
        }
      }
    }), (x, p) => {
      const D = Qt("VPickerTitle"), C = gt("maska");
      return Ve((ee(), se(Qn, {
        class: "v-picker v-picker--with-actions",
        width: a.width
      }, {
        default: R(() => [
          u(D, null, {
            default: R(() => [
              Me(Ze(a.title), 1)
            ]),
            _: 1
          }),
          Wk,
          ct("div", Uk, [
            u(Ne, { justify: "center" }, {
              default: R(() => [
                u(we, { cols: "3" }, {
                  default: R(() => [
                    Ve(u(el, {
                      modelValue: s.value,
                      "onUpdate:modelValue": p[0] || (p[0] = (V) => s.value = V),
                      type: "number",
                      min: d.value,
                      max: v.value
                    }, null, 8, ["modelValue", "min", "max"]), [
                      [C, void 0, i.value]
                    ])
                  ]),
                  _: 1
                }),
                u(we, { cols: "1" }, {
                  default: R(() => [
                    Hk
                  ]),
                  _: 1
                }),
                u(we, { cols: "3" }, {
                  default: R(() => [
                    Ve(u(el, {
                      modelValue: r.value,
                      "onUpdate:modelValue": p[1] || (p[1] = (V) => r.value = V),
                      type: "number",
                      min: f.value,
                      max: m.value
                    }, null, 8, ["modelValue", "min", "max"]), [
                      [C, void 0, i.value]
                    ])
                  ]),
                  _: 1
                }),
                c.value ? (ee(), se(we, {
                  key: 0,
                  cols: "4"
                }, {
                  default: R(() => [
                    u($k, {
                      modelValue: o.value,
                      "onUpdate:modelValue": p[2] || (p[2] = (V) => o.value = V),
                      items: n
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : De("", !0)
              ]),
              _: 1
            })
          ]),
          ct("div", zk, [
            ct("div", null, [
              u(Ye, {
                rounded: "rounded-md",
                elevation: 0,
                variant: "flat",
                onClick: g
              }, {
                default: R(() => [
                  Me(Ze(a.cancelText), 1)
                ]),
                _: 1
              }),
              u(Ye, {
                rounded: "rounded-md",
                elevation: 0,
                variant: "flat",
                onClick: k
              }, {
                default: R(() => [
                  Me(Ze(a.okText), 1)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["width"])), [
        [Ao, S]
      ]);
    };
  }
}), Gk = /* @__PURE__ */ Le({
  __name: "EasyTimePicker",
  props: {
    menu: {},
    modelValue: { default: "" },
    picker: {},
    textfield: {},
    fields: {}
  },
  emits: ["validated", "invalidated", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.textfield), i = N(n.menu), s = N(n.picker), r = N(!1), o = h(() => n.fields ?? []);
    function c(g) {
      l.value.value = g, a("update:modelValue", g);
    }
    function d() {
      l.value.validate(), a("validated", l.value.name);
    }
    function v() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function f() {
      r.value = !r.value;
    }
    function m() {
      r.value = !1;
    }
    function y(g) {
      r.value = !1, c(g);
    }
    const k = G(s.value, (g) => {
      c(g.value);
    });
    return Ae(() => {
      k();
    }), qe(() => {
      l.value.value = n.modelValue, l.value.isLoading(!1);
    }), (g, b) => (ee(), se(Ne, { "no-gutters": "" }, {
      default: R(() => {
        var S;
        return [
          u(hl, B({
            modelValue: r.value,
            "onUpdate:modelValue": b[1] || (b[1] = (_) => r.value = _)
          }, (S = i.value) == null ? void 0 : S.props()), {
            activator: R(({ props: _ }) => {
              var w;
              return [
                u(ha, B({ field: l.value }, { ..._, ...(w = l.value) == null ? void 0 : w.props() }, {
                  fields: o.value,
                  onUpdated: c,
                  onValidated: d,
                  onInvalidated: v,
                  "onClick:prependInner": f,
                  "onClick:appendInner": f
                }), null, 16, ["field", "fields"])
              ];
            }),
            default: R(() => [
              u(fa, {
                class: "pa-0",
                width: s.value.width,
                "max-width": s.value.width
              }, {
                default: R(() => [
                  u(Nn, {
                    class: "pa-0",
                    width: s.value.width,
                    "max-width": s.value.width
                  }, {
                    default: R(() => {
                      var _;
                      return [
                        u(jk, B({
                          modelValue: s.value.value,
                          "onUpdate:modelValue": b[0] || (b[0] = (w) => s.value.value = w)
                        }, (_ = s.value) == null ? void 0 : _.props(), {
                          "onClick:save": y,
                          "onClick:cancel": m
                        }), null, 16, ["modelValue"])
                      ];
                    }),
                    _: 1
                  }, 8, ["width", "max-width"])
                ]),
                _: 1
              }, 8, ["width", "max-width"])
            ]),
            _: 1
          }, 16, ["modelValue"])
        ];
      }),
      _: 1
    }));
  }
}), qk = L({
  ...ae(),
  ...Md()
}, "VForm"), rr = z()({
  name: "VForm",
  props: qk(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Dd(e), i = N();
    function s(o) {
      o.preventDefault(), l.reset();
    }
    function r(o) {
      const c = o, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), a("submit", c), c.defaultPrevented || d.then((v) => {
        var m;
        let {
          valid: f
        } = v;
        f && ((m = i.value) == null || m.submit());
      }), c.preventDefault();
    }
    return Z(() => {
      var o;
      return u("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: s,
        onSubmit: r
      }, [(o = n.default) == null ? void 0 : o.call(n, l)]);
    }), $n(l, i);
  }
}), Kk = /* @__PURE__ */ Le({
  __name: "InputFormLoader",
  props: {
    form: {
      type: wn,
      required: !0,
      validator: (e) => oc(e)
    }
  },
  emits: ["update:form", ...Object.values(te)],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.form), i = N(rr), s = h(() => {
      var V, I;
      return (I = (V = l.value) == null ? void 0 : V.fields) == null ? void 0 : I.filter((T) => T.isParentPopulated(k(T.depends_on ?? "")));
    }), r = h(() => {
      var V, I;
      return Array.isArray((V = l.value) == null ? void 0 : V.fields) ? (I = l.value) == null ? void 0 : I.fields : [];
    }), o = h(() => {
      var V, I;
      return ((I = (V = l.value) == null ? void 0 : V.buttons) == null ? void 0 : I.length) > 0;
    }), c = h(() => !d.value), d = h(() => v.value ? !y.value : !0), v = h(() => f.value > 0), f = h(() => m.value.length || 0), m = h(() => {
      var V, I;
      return ((I = (V = l.value) == null ? void 0 : V.fields) == null ? void 0 : I.filter(
        (T) => !ie(T.require_confirmation) && T.require_confirmation
      )) || [];
    }), y = h(() => m.value.filter((V) => !V.validated).length > 0 || !1);
    function k(V) {
      var I;
      return (I = l.value) == null ? void 0 : I.fields.find((T) => T.name === V);
    }
    function g(V) {
      return V.type === wa.Process ? c.value : V.disabled;
    }
    async function b(V) {
      V.type === wa.Process ? await S() : V.type === wa.Reset ? x() : V.type === wa.Cancel && p();
    }
    async function S() {
      if (a(te.Processing, !0), P(!0), await _()) {
        a(te.Validated, !0), i.value.resetValidation();
        const I = await l.value.process();
        if (!I) {
          a(te.Failed, !0), P(!1);
          return;
        }
        a(te.Successful, !0), l.value.axios.expecting_results && a(te.Results, I);
      } else
        a(te.Validated, !1), l.value.failedValidation(), P(!1), a(te.Failed, !0);
    }
    async function _() {
      const { valid: V } = await i.value.validate();
      return V;
    }
    async function w(V) {
      const I = r.value.filter((T) => T.depends_on === V.name);
      for (const T of I) {
        const A = await T.load(l.value, V);
        A && (T instanceof nc || T instanceof ac) && T.loadItems(A);
      }
      a(te.Updated, !0);
    }
    function P(V) {
      l.value.isLoading(V), a(te.Loading, V);
    }
    function x() {
      i.value.resetValidation(), P(!1), a(te.Reset, !0);
    }
    function p() {
      a(te.Cancelled, !0);
    }
    const D = ze(() => {
      l.value = n.form;
    }), C = G(l.value, (V) => {
      a(te.Updated, V);
    });
    return Ae(() => {
      C(), D();
    }), (V, I) => {
      var A;
      const T = Qt("EasyButton");
      return ee(), se(Oe(rr), B(((A = l.value) == null ? void 0 : A.props()) ?? {}, {
        ref_key: "formReference",
        ref: i,
        class: "mx-auto w-100"
      }), {
        default: R(() => [
          u(we, { cols: "12" }, {
            default: R(() => [
              u(Ne, { class: "easy-fields" }, {
                default: R(() => [
                  (ee(!0), Xt(ke, null, Tn(s.value, (M, Y) => {
                    var Q;
                    return ee(), se(we, {
                      cols: ((Q = M.cols) == null ? void 0 : Q.toString()) ?? "12",
                      offset: M.offset,
                      key: Y
                    }, {
                      default: R(() => [
                        u(Oe(ha), {
                          field: s.value[Y],
                          "onUpdate:field": (le) => s.value[Y] = le,
                          fields: r.value,
                          onUpdated: (le) => w(M),
                          onValidated: M.validate,
                          onInvalidated: M.invalidate
                        }, null, 8, ["field", "onUpdate:field", "fields", "onUpdated", "onValidated", "onInvalidated"])
                      ]),
                      _: 2
                    }, 1032, ["cols", "offset"]);
                  }), 128))
                ]),
                _: 1
              }),
              o.value ? (ee(), se(Ne, {
                key: 0,
                align: l.value.button_align_row,
                justify: l.value.button_justify_row,
                class: "easy-buttons"
              }, {
                default: R(() => {
                  var M;
                  return [
                    (ee(!0), Xt(ke, null, Tn((M = l.value) == null ? void 0 : M.buttons, (Y, Q) => (ee(), se(we, {
                      cols: "auto",
                      key: Q
                    }, {
                      default: R(() => [
                        u(T, {
                          button: Y,
                          identifier: Q,
                          disabled: g(Y),
                          onClick: (le) => b(Y)
                        }, null, 8, ["button", "identifier", "disabled", "onClick"])
                      ]),
                      _: 2
                    }, 1024))), 128))
                  ];
                }),
                _: 1
              }, 8, ["align", "justify"])) : De("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
}), Zk = /* @__PURE__ */ Le({
  __name: "ActionFormLoader",
  props: {
    form: {
      type: Cn,
      required: !0,
      validator: (e) => uc(e)
    }
  },
  emits: [
    "update:form",
    te.Loading,
    te.Loaded,
    te.Results,
    te.Cancelled,
    te.Updated,
    te.Reset,
    te.Processing,
    te.Failed,
    te.Successful
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.form), i = ze(() => l.value = n.form), s = h(() => {
      var f;
      return (((f = l.value) == null ? void 0 : f.actions) ?? []).filter((m) => c(m));
    }), r = h(() => l.value.inline);
    function o(f) {
      return r.value ? "auto" : f.cols;
    }
    function c(f) {
      return ie(f.conditions) ? !0 : f.conditions.every((m) => {
        const y = l.value.additional_data.find(
          (k) => k.key == m.check
        );
        if (ie(y))
          return !1;
        switch (m.operator) {
          case "==":
            return (y == null ? void 0 : y.value) === m.against;
          case "!=":
            return (y == null ? void 0 : y.value) !== m.against;
          case ">":
            return (y == null ? void 0 : y.value) > m.against;
          case "<":
            return (y == null ? void 0 : y.value) < m.against;
          case ">=":
            return (y == null ? void 0 : y.value) >= m.against;
          case "<=":
            return (y == null ? void 0 : y.value) <= m.against;
          default:
            throw new Error(`Unsupported operator: ${m.operator}`);
        }
      });
    }
    function d(f) {
      l.value.isLoading(f), a(te.Loading, f);
    }
    async function v(f) {
      a(te.Processing, !0), d(!0);
      const m = await l.value.process(f);
      if (!m) {
        a(te.Failed, !0), d(!1);
        return;
      }
      a(te.Successful, !0), l.value.axios.expecting_results && a(te.Results, m);
    }
    return Ae(() => {
      i();
    }), (f, m) => {
      const y = Qt("EasyIcon"), k = Qt("EasyButton");
      return ee(), se(we, { cols: 12 }, {
        default: R(() => [
          u(Ne, {
            justify: l.value.justify_row
          }, {
            default: R(() => [
              (ee(!0), Xt(ke, null, Tn(s.value, (g, b) => (ee(), se(we, {
                key: b,
                cols: o(g),
                class: "py-0 px-2"
              }, {
                default: R(() => [
                  Oe(ie)(g.icon) ? De("", !0) : (ee(), se(y, {
                    key: 0,
                    icon: g.icon,
                    identifier: g.identifier,
                    onClick: (S) => v(g.identifier)
                  }, null, 8, ["icon", "identifier", "onClick"])),
                  Oe(ie)(g.button) ? De("", !0) : (ee(), se(k, {
                    key: 1,
                    button: g.button,
                    identifier: g.identifier,
                    disabled: !1,
                    onClick: (S) => v(g.identifier)
                  }, null, 8, ["button", "identifier", "onClick"]))
                ]),
                _: 2
              }, 1032, ["cols"]))), 128))
            ]),
            _: 1
          }, 8, ["justify"])
        ]),
        _: 1
      });
    };
  }
}), Xk = /* @__PURE__ */ Le({
  __name: "ErrorFormLoader",
  props: {
    text: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (ee(), se(we, { cols: 12 }, {
      default: R(() => [
        u(Ne, null, {
          default: R(() => [
            u(we, { cols: "12" }, {
              default: R(() => [
                u(Ou, { color: "error" }, {
                  default: R(() => [
                    ct("div", null, Ze(t.text), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Jk = /* @__PURE__ */ Le({
  __name: "EasyLoader",
  props: {
    loader: {}
  },
  setup(e) {
    const n = N(e.loader);
    return (a, l) => {
      var i, s;
      return ee(), se(we, {
        cols: "auto",
        class: hr(((s = (i = n.value) == null ? void 0 : i.progress) == null ? void 0 : s.classes) ?? "")
      }, {
        default: R(() => {
          var r, o, c, d, v, f;
          return [
            ((r = n.value) == null ? void 0 : r.type) === Oe(us).Circular ? (ee(), se(Ai, rs(B({ key: 0 }, (c = (o = n.value) == null ? void 0 : o.progress) == null ? void 0 : c.props())), null, 16)) : De("", !0),
            ((d = n.value) == null ? void 0 : d.type) === Oe(us).Linear ? (ee(), se(Vi, rs(B({ key: 1 }, (f = (v = n.value) == null ? void 0 : v.progress) == null ? void 0 : f.props())), null, 16)) : De("", !0)
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
}), Qk = /* @__PURE__ */ Le({
  __name: "FormLoader",
  props: {
    form: {
      type: [Cn, wn, os],
      default: new os({ name: "default" })
    },
    name: {
      type: String,
      default: ""
    },
    cols: {
      type: Number,
      default: 12,
      validator: (e) => Ca(e)
    },
    sm: {
      type: Number,
      default: 12,
      validator: (e) => Ca(e)
    },
    md: {
      type: Number,
      default: 12,
      validator: (e) => Ca(e)
    },
    lg: {
      type: Number,
      default: 12,
      validator: (e) => Ca(e)
    },
    populate: {
      type: Boolean,
      default: !1
    },
    additionalData: {
      type: Array,
      default: []
    },
    additionalLoadData: {
      type: Array,
      default: []
    }
  },
  emits: ["update:form", ...Object.values(te)],
  setup(e, { emit: t }) {
    const n = t, a = e, l = gr.getInstance(), i = N(!1), s = N(Ul.csrf ?? new yr()), r = N(!0), o = N(a.form), c = h(() => new sc({
      cols: a.cols,
      sm: a.sm,
      md: a.md,
      lg: a.lg
    })), d = h(() => !ie(o.value.text)), v = h(
      () => l.csrf_endpoint === null ? !0 : s.value.isValidCsrfToken()
    ), f = h(() => s.value.isLoading()), m = h(
      () => {
        var M, Y;
        return (((Y = (M = o == null ? void 0 : o.value) == null ? void 0 : M.alerts) == null ? void 0 : Y.filter((Q) => Q.display).length) ?? 0) > 0;
      }
    ), y = h(() => {
      var M;
      return !o.value.loading && (o.value instanceof wn || o.value instanceof Cn || !ie((M = o.value) == null ? void 0 : M.text));
    }), k = h(() => {
      if (!r.value || !ie(o.value.name)) {
        if (o.value instanceof wn)
          return bt.Input;
        if (o.value instanceof Cn)
          return bt.Action;
      }
      return bt.Error;
    }), g = h(() => k.value === bt.Action), b = h(() => k.value === bt.Input), S = h(() => k.value === bt.Error);
    function _() {
      var M;
      n(te.Reset, !0), (M = o.value) == null || M.reset();
    }
    function w() {
      var M;
      n(te.Cancelled, !0), (M = o.value) == null || M.cancelled();
    }
    function P(M) {
      n(te.Processing, M);
    }
    function x() {
      n(te.Failed, !0);
    }
    function p(M) {
      n(te.Updated, M);
    }
    function D() {
      n(te.Successful, !0);
    }
    function C(M) {
      o.value.hasResults(M), n(te.Results, M);
    }
    function V(M) {
      n(te.Validated, M);
    }
    function I(M) {
      n(te.Loading, M), o.value.isLoading(M), r.value = M;
    }
    const T = G(v, async (M) => {
      i.value && M && await A();
    });
    Ae(() => {
      T();
    }), di(async () => {
      I(!0), !ie(a.form) && ie(a.name) ? (i.value = !1, o.value = a.form, o.value.additional_data = a.additionalData, o.value.additional_load_data = a.additionalLoadData, I(!1), n(te.Loaded, !0)) : ie(a.name) || (i.value = !0, v.value ? await A() : f.value || await s.value.fetchNewToken() || (o.value.text = s.value.error_message, I(!1)));
    });
    async function A() {
      o.value.name = a.name, o.value.additional_load_data = a.additionalLoadData;
      const M = await o.value.load();
      M ? (M == null ? void 0 : M.type) == bt.Input ? (o.value = new wn(M), o.value.triggerAlert(ic.AfterLoad), n(te.Loaded, !0)) : M.type == bt.Action && (o.value = new Cn(M), n(te.Loaded, !0)) : (o.value.text = "Error Loading Form - Not Found", n(te.Loaded, !1)), o.value.additional_data = a.additionalData, o.value.additional_load_data = a.additionalLoadData, I(!1);
    }
    return (M, Y) => {
      var le, O, E, H;
      const Q = Qt("EasyAlerts");
      return ee(), se(we, {
        cols: ((le = c.value) == null ? void 0 : le.cols) ?? 12,
        sm: ((O = c.value) == null ? void 0 : O.sm) ?? 12,
        md: ((E = c.value) == null ? void 0 : E.md) ?? 12,
        lg: ((H = c.value) == null ? void 0 : H.lg) ?? 12
      }, {
        default: R(() => [
          m.value ? (ee(), se(Ne, {
            key: 0,
            class: "easy-alerts"
          }, {
            default: R(() => {
              var X;
              return [
                u(Q, {
                  alerts: (X = o.value) == null ? void 0 : X.alerts
                }, null, 8, ["alerts"])
              ];
            }),
            _: 1
          })) : De("", !0),
          Ve(u(Ne, {
            justify: "center",
            class: "easy-loader"
          }, {
            default: R(() => {
              var X;
              return [
                u(Jk, {
                  loader: (X = o.value) == null ? void 0 : X.loader
                }, null, 8, ["loader"])
              ];
            }),
            _: 1
          }, 512), [
            [ut, !y.value]
          ]),
          Ve(u(Ne, null, {
            default: R(() => [
              u(we, { class: "pl-6 text-h3 text-h6" }, {
                default: R(() => [
                  Me(Ze(o.value.title), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512), [
            [ut, o.value.show_title]
          ]),
          Ve(u(Ne, {
            "no-gutters": "",
            class: "easy-form"
          }, {
            default: R(() => [
              b.value && !d.value ? (ee(), se(Oe(Kk), B({
                key: 0,
                form: o.value,
                "onUpdate:form": Y[0] || (Y[0] = (X) => o.value = X)
              }, o.value.props(), {
                onResults: C,
                onLoading: I,
                onReset: _,
                onUpdated: p,
                onCancelled: w,
                onProcessing: P,
                onFailed: x,
                onSuccessful: D,
                onValidated: V
              }), null, 16, ["form"])) : g.value && !d.value ? (ee(), se(Oe(Zk), B({
                key: 1,
                form: o.value,
                "onUpdate:form": Y[1] || (Y[1] = (X) => o.value = X)
              }, o.value.props(), {
                onResults: C,
                onLoading: I,
                onReset: _,
                onUpdated: p,
                onCancelled: w,
                onProcessing: P,
                onFailed: x,
                onSuccessful: D,
                onValidated: V
              }), null, 16, ["form"])) : S.value || d.value ? (ee(), se(Oe(Xk), {
                key: 2,
                text: o.value.text
              }, null, 8, ["text"])) : De("", !0)
            ]),
            _: 1
          }, 512), [
            [ut, y.value]
          ])
        ]),
        _: 1
      }, 8, ["cols", "sm", "md", "lg"]);
    };
  }
});
/*! maska v2.1.11 | (c) Alexander Shabunevich | Released under the MIT license */
var eb = Object.defineProperty, tb = (e, t, n) => t in e ? eb(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Kn = (e, t, n) => (tb(e, typeof t != "symbol" ? t + "" : t, n), n);
const or = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class ur {
  constructor(t = {}) {
    Kn(this, "opts", {}), Kn(this, "memo", /* @__PURE__ */ new Map());
    const n = { ...t };
    if (n.tokens != null) {
      n.tokens = n.tokensReplace ? { ...n.tokens } : { ...or, ...n.tokens };
      for (const a of Object.values(n.tokens))
        typeof a.pattern == "string" && (a.pattern = new RegExp(a.pattern));
    } else
      n.tokens = or;
    Array.isArray(n.mask) && (n.mask.length > 1 ? n.mask = [...n.mask].sort((a, l) => a.length - l.length) : n.mask = n.mask[0] ?? ""), n.mask === "" && (n.mask = null), this.opts = n;
  }
  masked(t) {
    return this.process(t, this.findMask(t));
  }
  unmasked(t) {
    return this.process(t, this.findMask(t), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(t) {
    const n = this.findMask(t);
    if (this.opts.mask == null || n == null)
      return !1;
    const a = this.process(t, n).length;
    return typeof this.opts.mask == "string" ? a >= this.opts.mask.length : typeof this.opts.mask == "function" ? a >= n.length : this.opts.mask.filter((l) => a >= l.length).length === this.opts.mask.length;
  }
  findMask(t) {
    const n = this.opts.mask;
    if (n == null)
      return null;
    if (typeof n == "string")
      return n;
    if (typeof n == "function")
      return n(t);
    const a = this.process(t, n.slice(-1).pop() ?? "", !1);
    return n.find((l) => this.process(t, l, !1).length >= a.length) ?? "";
  }
  escapeMask(t) {
    const n = [], a = [];
    return t.split("").forEach((l, i) => {
      l === "!" && t[i - 1] !== "!" ? a.push(i - a.length) : n.push(l);
    }), { mask: n.join(""), escaped: a };
  }
  process(t, n, a = !0) {
    if (n == null)
      return t;
    const l = `value=${t},mask=${n},masked=${a ? 1 : 0}`;
    if (this.memo.has(l))
      return this.memo.get(l);
    const { mask: i, escaped: s } = this.escapeMask(n), r = [], o = this.opts.tokens != null ? this.opts.tokens : {}, c = this.isReversed() ? -1 : 1, d = this.isReversed() ? "unshift" : "push", v = this.isReversed() ? 0 : i.length - 1, f = this.isReversed() ? () => g > -1 && b > -1 : () => g < i.length && b < t.length, m = (_) => !this.isReversed() && _ <= v || this.isReversed() && _ >= v;
    let y, k = -1, g = this.isReversed() ? i.length - 1 : 0, b = this.isReversed() ? t.length - 1 : 0, S = !1;
    for (; f(); ) {
      const _ = i.charAt(g), w = o[_], P = (w == null ? void 0 : w.transform) != null ? w.transform(t.charAt(b)) : t.charAt(b);
      if (!s.includes(g) && w != null ? (P.match(w.pattern) != null ? (r[d](P), w.repeated ? (k === -1 ? k = g : g === v && g !== k && (g = k - c), v === k && (g -= c)) : w.multiple && (S = !0, g -= c), g += c) : w.multiple ? S && (g += c, b -= c, S = !1) : P === y ? y = void 0 : w.optional && (g += c, b -= c), b += c) : (a && !this.isEager() && r[d](_), P === _ && !this.isEager() ? b += c : y = _, this.isEager() || (g += c)), this.isEager())
        for (; m(g) && (o[i.charAt(g)] == null || s.includes(g)); )
          a ? r[d](i.charAt(g)) : i.charAt(g) === t.charAt(b) && (b += c), g += c;
    }
    return this.memo.set(l, r.join("")), this.memo.get(l);
  }
}
const zu = (e) => JSON.parse(e.replaceAll("'", '"')), cr = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = nb(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = Wl(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = Wl(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = Wl(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = ab(e.dataset.maskaTokens)), n;
}, Wl = (e) => e !== "" ? !!JSON.parse(e) : !0, nb = (e) => e.startsWith("[") && e.endsWith("]") ? zu(e) : e, ab = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return zu(e);
  const t = {};
  return e.split("|").forEach((n) => {
    const a = n.split(":");
    t[a[0]] = {
      pattern: new RegExp(a[1]),
      optional: a[2] === "optional",
      multiple: a[2] === "multiple",
      repeated: a[2] === "repeated"
    };
  }), t;
};
class lb {
  constructor(t, n = {}) {
    Kn(this, "items", /* @__PURE__ */ new Map()), Kn(this, "beforeinputEvent", (a) => {
      const l = a.target, i = this.items.get(l);
      i.isEager() && "inputType" in a && a.inputType.startsWith("delete") && i.unmasked(l.value).length <= 1 && this.setMaskedValue(l, "");
    }), Kn(this, "inputEvent", (a) => {
      if (a instanceof CustomEvent && a.type === "input" && a.detail != null && typeof a.detail == "object" && "masked" in a.detail)
        return;
      const l = a.target, i = this.items.get(l), s = l.value, r = l.selectionStart, o = l.selectionEnd;
      let c = s;
      if (i.isEager()) {
        const d = i.masked(s), v = i.unmasked(s);
        v === "" && "data" in a && a.data != null ? c = a.data : v !== i.unmasked(d) && (c = v);
      }
      if (this.setMaskedValue(l, c), "inputType" in a && (a.inputType.startsWith("delete") || r != null && r < s.length))
        try {
          l.setSelectionRange(r, o);
        } catch {
        }
    }), this.options = n, typeof t == "string" ? this.init(
      Array.from(document.querySelectorAll(t)),
      this.getMaskOpts(n)
    ) : this.init(
      "length" in t ? Array.from(t) : [t],
      this.getMaskOpts(n)
    );
  }
  destroy() {
    for (const t of this.items.keys())
      t.removeEventListener("input", this.inputEvent), t.removeEventListener("beforeinput", this.beforeinputEvent);
    this.items.clear();
  }
  needUpdateOptions(t, n) {
    const a = this.items.get(t), l = new ur(cr(t, this.getMaskOpts(n)));
    return JSON.stringify(a.opts) !== JSON.stringify(l.opts);
  }
  needUpdateValue(t) {
    const n = t.dataset.maskaValue;
    return n == null && t.value !== "" || n != null && n !== t.value;
  }
  getMaskOpts(t) {
    const { onMaska: n, preProcess: a, postProcess: l, ...i } = t;
    return i;
  }
  init(t, n) {
    for (const a of t) {
      const l = new ur(cr(a, n));
      this.items.set(a, l), a.value !== "" && this.setMaskedValue(a, a.value), a.addEventListener("input", this.inputEvent), a.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, n) {
    const a = this.items.get(t);
    this.options.preProcess != null && (n = this.options.preProcess(n));
    const l = a.masked(n), i = a.unmasked(a.isEager() ? l : n), s = a.completed(n), r = { masked: l, unmasked: i, completed: s };
    n = l, this.options.postProcess != null && (n = this.options.postProcess(n)), t.value = n, t.dataset.maskaValue = n, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((o) => o(r)) : this.options.onMaska(r)), t.dispatchEvent(new CustomEvent("maska", { detail: r })), t.dispatchEvent(new CustomEvent("input", { detail: r }));
  }
}
const ci = /* @__PURE__ */ new WeakMap(), ib = (e) => {
  setTimeout(() => {
    var t;
    ((t = ci.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, sb = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), a = { ...t.arg };
  if (n == null || (n == null ? void 0 : n.type) === "file")
    return;
  ib(n);
  const l = ci.get(n);
  if (l != null) {
    if (!l.needUpdateOptions(n, a))
      return;
    l.destroy();
  }
  if (t.value != null) {
    const i = t.value, s = (r) => {
      i.masked = r.masked, i.unmasked = r.unmasked, i.completed = r.completed;
    };
    a.onMaska = a.onMaska == null ? s : Array.isArray(a.onMaska) ? [...a.onMaska, s] : [a.onMaska, s];
  }
  ci.set(n, new lb(n, a));
}, Eb = {
  install(e, t) {
    const n = new gr(t);
    e.directive("maska", sb).component("EasyIcon", Ny).component("EasyButton", Ry).component("EasyAlerts", Uy).component("EasyDatePicker", Ly).component("EasyTimePicker", Gk).component("EasyColorPicker", Vv).component("EasyCheckboxGroup", qd).component("EasyPassword", qy).component("FormLoader", Qk), Ul.options = n, n.csrf_endpoint !== null && (Ul.csrf = new yr({
      endpoint: n.buildDomain(n.csrf_endpoint)
    }));
  }
};
export {
  Eb as default
};
