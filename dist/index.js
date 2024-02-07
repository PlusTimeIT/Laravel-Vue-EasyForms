import { Fragment as pe, reactive as En, computed as h, watchEffect as je, toRefs as fr, capitalize as ia, isVNode as qu, Comment as Ku, unref as Oe, warn as tl, defineComponent as Le, camelize as vr, h as Ln, getCurrentInstance as Zu, inject as Te, ref as N, provide as Ge, shallowRef as re, createVNode as u, isRef as sa, mergeProps as B, toRef as q, Text as Xu, Transition as fn, watch as G, onBeforeMount as di, nextTick as He, onBeforeUnmount as Ae, withDirectives as Ve, resolveDirective as gt, vShow as ut, onScopeDispose as qe, effectScope as fi, toRaw as tn, resolveDynamicComponent as mr, TransitionGroup as Ju, onMounted as We, readonly as vi, openBlock as ee, createBlock as se, withCtx as R, createTextVNode as Me, toDisplayString as Ze, createCommentVNode as De, createElementBlock as Xt, renderList as Tn, resolveComponent as Qt, createSlots as mi, onUnmounted as Qu, Teleport as ec, createElementVNode as ct, normalizeClass as hr, cloneVNode as tc, normalizeProps as rs } from "vue";
import { InputForm as wn, ActionForm as Cn, EasyForm as os } from "./forms.js";
import { i as ne, P as gr, s as Ul } from "./Store-03b8f4cc.js";
import { F as kt } from "./JustifyRow-eb5715b2.js";
import "axios";
import { a as wa } from "./ButtonVariantTypes-85a127bd.js";
import { L as ae } from "./LoaderEvents-57799137.js";
import { CheckboxGroupField as nc, TextField as ac, SelectField as lc, AutoCompleteField as ic } from "./fields.js";
import { k as sc } from "./ServerCall-badff9b1.js";
import { a as Gt } from "./ViewModeTypes-25f1573e.js";
import { A as rc } from "./AlertTriggers-18dccfa1.js";
import { FormContainer as oc } from "./elements.js";
import { C as yr } from "./Csrf-74d54fab.js";
import { F as us } from "./FormLoaderTypes-b32e44d6.js";
import { I as uc } from "./Icon-e8a0240f.js";
import "./ContentTypes-f2427ff5.js";
import "./Alert-8adc307b.js";
import "./ScrollStrategyTypes-59a25e2a.js";
import "./GotProps-d4ee0596.js";
import "./ProgressLinear-a970bcbf.js";
import "./LocationTypes-c293bdaa.js";
import "./AxiosOptions-6a3d3f30.js";
import "./FormLoader-94dcff93.js";
import "./actions.js";
import "./Button-d0faa556.js";
import "./ValidationRule-cec9d477.js";
import "./Menu-b0d6c813.js";
function Ca(e) {
  return e <= 12 && e >= 1;
}
function cc(e) {
  return e.type === kt.Input && e instanceof wn;
}
function dc(e) {
  return e.type === kt.Action && e instanceof Cn;
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
const ie = L({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), $e = typeof window < "u", hi = $e && "IntersectionObserver" in window, cs = $e && "EyeDropper" in window;
function pr(e, t, n) {
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
function fc(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), pr(e, t.split("."), n));
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
    return fc(e, t, n);
  if (Array.isArray(t))
    return pr(e, t, n);
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
function Q(e) {
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
}), vc = Object.freeze({
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
function kr(e, t) {
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
const br = /^on[^a-z]/, yi = (e) => br.test(e), mc = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function nl(e) {
  const [t, n] = fs(e, [br]), a = Je(t, mc), [l, i] = fs(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function Xe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function hc(e, t) {
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
function gc(e) {
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
  return e.map((t) => t.type === pe ? _r(t.children) : t).flat();
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
function yc(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function pi(e) {
  const t = En({}), n = h(e);
  return je(() => {
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
function pc(e) {
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
  return e.some((t) => qu(t) ? t.type === Ku ? !1 : t.type !== pe || Cr(t.children) : !0) ? e : null;
}
function kc(e, t) {
  if (!$e || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
const Vr = ["top", "bottom"], bc = ["start", "end", "left", "right"];
function zl(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = Ya(Vr, n) ? "start" : Ya(bc, n) ? "top" : "center"), {
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
function ps(e) {
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
function ks(e, t) {
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
function ki(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), a = n.transform;
  if (a) {
    let l, i, s, r, o;
    if (a.startsWith("matrix3d("))
      l = a.slice(9, -1).split(/, /), i = +l[0], s = +l[5], r = +l[12], o = +l[13];
    else if (a.startsWith("matrix("))
      l = a.slice(7, -1).split(/, /), i = +l[0], s = +l[3], r = +l[4], o = +l[5];
    else
      return new on(t);
    const c = n.transformOrigin, d = t.x - r - (1 - i) * parseFloat(c), f = t.y - o - (1 - s) * parseFloat(c.slice(c.indexOf(" ") + 1)), v = i ? t.width / i : e.offsetWidth + 1, m = s ? t.height / s : e.offsetHeight + 1;
    return new on({
      x: d,
      y: f,
      width: v,
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
function _c(e, t) {
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
function Sc(e, t) {
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
const bn = 2.4, bs = 0.2126729, _s = 0.7151522, Ss = 0.072175, wc = 0.55, Cc = 0.58, Vc = 0.57, xc = 0.62, Va = 0.03, ws = 1.45, Pc = 5e-4, Mc = 1.25, Dc = 1.25, Cs = 0.078, Vs = 12.82051282051282, xa = 0.06, xs = 1e-3;
function Ps(e, t) {
  const n = (e.r / 255) ** bn, a = (e.g / 255) ** bn, l = (e.b / 255) ** bn, i = (t.r / 255) ** bn, s = (t.g / 255) ** bn, r = (t.b / 255) ** bn;
  let o = n * bs + a * _s + l * Ss, c = i * bs + s * _s + r * Ss;
  if (o <= Va && (o += (Va - o) ** ws), c <= Va && (c += (Va - c) ** ws), Math.abs(c - o) < Pc)
    return 0;
  let d;
  if (c > o) {
    const f = (c ** wc - o ** Cc) * Mc;
    d = f < xs ? 0 : f < Cs ? f - f * Vs * xa : f - xa;
  } else {
    const f = (c ** xc - o ** Vc) * Dc;
    d = f > -xs ? 0 : f > -Cs ? f - f * Vs * xa : f + xa;
  }
  return d * 100;
}
function un(e) {
  tl(`Vuetify: ${e}`);
}
function Oc(e) {
  tl(`Vuetify error: ${e}`);
}
function Ic(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, tl(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const Tc = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Ac = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Ec(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = Ac, s = Tc;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = s[r][0] * t + s[r][1] * n + s[r][2] * a;
  return l;
}
function jl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Lc(e) {
  return jl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ms = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Fc = {
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
    return Fc[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || un(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && un(`'${e}' is not a valid hex(a) color`), Or(t);
  } else if (typeof e == "object") {
    if (ln(e, ["r", "g", "b"]))
      return e;
    if (ln(e, ["h", "s", "l"]))
      return Ft(bi(e));
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
  return Ft(bi(e));
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
function bi(e) {
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
function Rc(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[Pa(t), Pa(n), Pa(a), l !== void 0 ? Pa(Math.round(l * 255)) : ""].join("")}`;
}
function Or(e) {
  e = Nc(e);
  let [t, n, a, l] = gc(e, 2).map((i) => parseInt(i, 16));
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
  return Rc(Ft(e));
}
function Nc(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ms(ms(e, 6), 8, "F")), e;
}
function Os(e) {
  const t = qt(e);
  return Ec(t)[1];
}
function Yc(e, t) {
  const n = Os(e), a = Os(t), l = Math.max(n, a), i = Math.min(n, a);
  return (l + 0.05) / (i + 0.05);
}
function Bc(e) {
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
      return kr(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = Si();
      if (!i.value)
        return e._setup(a, l);
      const {
        props: s,
        provideSubDefaults: r
      } = Gc(a, a._as ?? e.name, i), o = e._setup(s, l);
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
      ...ie()
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
const Ua = "cubic-bezier(0.4, 0, 0.2, 1)", $c = "cubic-bezier(0.0, 0, 0.2, 1)", Wc = "cubic-bezier(0.4, 0, 1, 1)";
function Fe(e, t) {
  const n = Zu();
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
    if (t ? Uc(e) : _i(e))
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
function Uc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function Hc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Fe("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
function zc(e) {
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
      for (let f = 0; f <= d && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof o == "string" && o in c && (c = Vn(Vn(c, {
        prev: c
      }), c[o])), c;
    }
    return c.prev ? Vn(c.prev, c) : c;
  });
  return Ge(za, l), l;
}
function jc(e, t) {
  var n, a;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[rn(t)]) < "u";
}
function Gc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Si();
  const a = Fe("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = h(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), i = new Proxy(e, {
    get(o, c) {
      var f, v, m, p;
      const d = Reflect.get(o, c);
      return c === "class" || c === "style" ? [(f = l.value) == null ? void 0 : f[c], d].filter((y) => y != null) : typeof c == "string" && !jc(a.vnode, c) ? ((v = l.value) == null ? void 0 : v[c]) ?? ((p = (m = n.value) == null ? void 0 : m.global) == null ? void 0 : p[c]) ?? d : d;
    }
  }), s = re();
  je(() => {
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
    const o = Hc(za, a);
    Ge(za, h(() => s.value ? Vn((o == null ? void 0 : o.value) ?? {}, s.value) : o == null ? void 0 : o.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
const Fr = z()({
  name: "VCardActions",
  props: ie(),
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
}), qc = nn("v-card-subtitle"), wi = nn("v-card-title");
function Ci(e) {
  return pi(() => {
    const t = [], n = {};
    if (e.value.background)
      if (jl(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Lc(e.value.background)) {
          const a = qt(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Bc(a);
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
const ye = [String, Function, Object, Array], Kc = Symbol.for("vuetify:icons"), ll = L({
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
}), Zc = St({
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
const Xc = (e) => {
  const t = Te(Kc);
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
          component: Zc,
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
}, Jc = ["x-small", "small", "default", "large", "x-large"], ra = L({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function oa(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return pi(() => {
    let n, a;
    return Ya(Jc, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: Q(e.size),
      height: Q(e.size)
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
function Ue(e) {
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
  return Ge(Ts, i), i;
}
const Qc = L({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: ye,
  ...ie(),
  ...ra(),
  ...Re({
    tag: "i"
  }),
  ...Ee()
}, "VIcon"), Ce = z()({
  name: "VIcon",
  props: Qc(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = N(), {
      themeClasses: i
    } = Ue(e), {
      iconData: s
    } = Xc(h(() => l.value || e.icon)), {
      sizeClasses: r
    } = oa(e), {
      textColorClasses: o,
      textColorStyles: c
    } = ft(q(e, "color"));
    return Z(() => {
      var f, v;
      const d = (f = a.default) == null ? void 0 : f.call(a);
      return d && (l.value = (v = _r(d).filter((m) => m.type === Xu && m.children && typeof m.children == "string")[0]) == null ? void 0 : v.children), u(s.value.component, {
        tag: e.tag,
        icon: s.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, o.value, {
          "v-icon--clickable": !!n.onClick,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: Q(e.size),
          height: Q(e.size),
          width: Q(e.size)
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
      height: Q(e.height),
      maxHeight: Q(e.maxHeight),
      maxWidth: Q(e.maxWidth),
      minHeight: Q(e.minHeight),
      minWidth: Q(e.minWidth),
      width: Q(e.width)
    }))
  };
}
function ed(e) {
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
  ...ie(),
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
    } = ed(e), {
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
function td(e, t) {
  if (!hi)
    return;
  const n = t.modifiers || {}, a = t.value, {
    handler: l,
    options: i
  } = typeof a == "object" ? a : {
    handler: a,
    options: {}
  }, s = new IntersectionObserver(function() {
    var f;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 ? arguments[1] : void 0;
    const c = (f = e._observe) == null ? void 0 : f[t.instance.$.uid];
    if (!c)
      return;
    const d = r.some((v) => v.isIntersecting);
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
const nd = {
  mounted: td,
  unmounted: Nr
}, Yr = nd, ad = L({
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
  ...ie(),
  ...ua()
}, "VImg"), Br = z()({
  name: "VImg",
  directives: {
    intersect: Yr
  },
  props: ad(),
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
    }), f = h(() => d.value.aspect || o.value / c.value || 0);
    G(() => e.src, () => {
      v(r.value !== "idle");
    }), G(f, (C, O) => {
      !C && O && s.value && k(s.value);
    }), di(() => v());
    function v(C) {
      if (!(e.eager && C) && !(hi && !C && !e.eager)) {
        if (r.value = "loading", d.value.lazySrc) {
          const O = new Image();
          O.src = d.value.lazySrc, k(O, null);
        }
        d.value.src && He(() => {
          var O;
          n("loadstart", ((O = s.value) == null ? void 0 : O.currentSrc) || d.value.src), setTimeout(() => {
            var D;
            if (!l.isUnmounted)
              if ((D = s.value) != null && D.complete) {
                if (s.value.naturalWidth || p(), r.value === "error")
                  return;
                f.value || k(s.value, null), r.value === "loading" && m();
              } else
                f.value || k(s.value), y();
          });
        });
      }
    }
    function m() {
      var C;
      l.isUnmounted || (y(), k(s.value), r.value = "loaded", n("load", ((C = s.value) == null ? void 0 : C.currentSrc) || d.value.src));
    }
    function p() {
      var C;
      l.isUnmounted || (r.value = "error", n("error", ((C = s.value) == null ? void 0 : C.currentSrc) || d.value.src));
    }
    function y() {
      const C = s.value;
      C && (i.value = C.currentSrc || C.src);
    }
    let g = -1;
    Ae(() => {
      clearTimeout(g);
    });
    function k(C) {
      let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const D = () => {
        if (clearTimeout(g), l.isUnmounted)
          return;
        const {
          naturalHeight: A,
          naturalWidth: T
        } = C;
        A || T ? (o.value = T, c.value = A) : !C.complete && r.value === "loading" && O != null ? g = window.setTimeout(D, O) : (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (o.value = 1, c.value = 1);
      };
      D();
    }
    const S = h(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), _ = () => {
      var D;
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
        onError: p
      }, null), O = (D = a.sources) == null ? void 0 : D.call(a);
      return u(It, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ve(O ? u("picture", {
          class: "v-img__picture"
        }, [O, C]) : C, [[ut, r.value === "loaded"]])]
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
    }), x = () => a.placeholder ? u(It, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(r.value === "loading" || r.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, V = () => a.error ? u(It, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [r.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, b = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, M = re(!1);
    {
      const C = G(f, (O) => {
        O && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            M.value = !0;
          });
        }), C());
      });
    }
    return Z(() => {
      const C = As.filterProps(e);
      return Ve(u(As, B({
        class: ["v-img", {
          "v-img--booting": !M.value
        }, e.class],
        style: [{
          width: Q(e.width === "auto" ? o.value : e.width)
        }, e.style]
      }, C, {
        aspectRatio: f.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(pe, null, [u(_, null, null), u(w, null, null), u(b, null, null), u(x, null, null), u(V, null, null)]),
        default: a.default
      }), [[gt("intersect"), {
        handler: v,
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
}), ld = [null, "default", "comfortable", "compact"], yt = L({
  density: {
    type: String,
    default: "default",
    validator: (e) => ld.includes(e)
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
const id = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Fn(e, t) {
  return u(pe, null, [e && u("span", {
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
    validator: (e) => id.includes(e)
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
const sd = L({
  start: Boolean,
  end: Boolean,
  icon: ye,
  image: String,
  text: String,
  ...ie(),
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
  props: sd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ue(e), {
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
        var f;
        return [e.image ? u(Br, {
          key: "image",
          src: e.image,
          alt: "",
          cover: !0
        }, null) : e.icon ? u(Ce, {
          key: "icon",
          icon: e.icon
        }, null) : ((f = n.default) == null ? void 0 : f.call(n)) ?? e.text, Fn(!1, "v-avatar")];
      }
    })), {};
  }
}), rd = L({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), xe = z(!1)({
  name: "VDefaultsProvider",
  props: rd(),
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
}), od = L({
  appendAvatar: String,
  appendIcon: ye,
  prependAvatar: String,
  prependIcon: ye,
  subtitle: [String, Number],
  title: [String, Number],
  ...ie(),
  ...yt()
}, "VCardItem"), ud = z()({
  name: "VCardItem",
  props: od(),
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
      }), o && u(qc, {
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
function pn(e) {
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
  }), qe(() => {
    n == null || n.stop();
  });
}
function fe(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Fe("useProxiedModel"), s = N(e[t] !== void 0 ? e[t] : n), r = rn(t), c = r !== t ? h(() => {
    var f, v, m, p;
    return e[t], !!(((f = i.vnode.props) != null && f.hasOwnProperty(t) || (v = i.vnode.props) != null && v.hasOwnProperty(r)) && ((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${t}`) || (p = i.vnode.props) != null && p.hasOwnProperty(`onUpdate:${r}`)));
  }) : h(() => {
    var f, v;
    return e[t], !!((f = i.vnode.props) != null && f.hasOwnProperty(t) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`)));
  });
  mn(() => !c.value, () => {
    G(() => e[t], (f) => {
      s.value = f;
    });
  });
  const d = h({
    get() {
      const f = e[t];
      return a(c.value ? f : s.value);
    },
    set(f) {
      const v = l(f), m = tn(c.value ? e[t] : s.value);
      m === v || a(m) === f || (s.value = v, i == null || i.emit(`update:${t}`, v));
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
const cd = L({
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
  ...ie(),
  ...ca({
    location: "top"
  }),
  ...at(),
  ...Re(),
  ...Ee()
}, "VProgressLinear"), Vi = z()({
  name: "VProgressLinear",
  props: cd(),
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
    } = Ue(e), {
      locationStyles: r
    } = da(e), {
      textColorClasses: o,
      textColorStyles: c
    } = ft(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = vt(h(() => e.bgColor || e.color)), {
      backgroundColorClasses: v,
      backgroundColorStyles: m
    } = vt(e, "color"), {
      roundedClasses: p
    } = lt(e), {
      intersectionRef: y,
      isIntersecting: g
    } = $r(), k = h(() => parseInt(e.max, 10)), S = h(() => parseInt(e.height, 10)), _ = h(() => parseFloat(e.bufferValue) / k.value * 100), w = h(() => parseFloat(a.value) / k.value * 100), x = h(() => l.value !== e.reverse), V = h(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), b = h(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
    function M(C) {
      if (!y.value)
        return;
      const {
        left: O,
        right: D,
        width: A
      } = y.value.getBoundingClientRect(), T = x.value ? A - C.clientX + (D - A) : C.clientX - O;
      a.value = Math.round(T / A * k.value);
    }
    return Z(() => u(e.tag, {
      ref: y,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && g.value,
        "v-progress-linear--reverse": x.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, p.value, s.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? Q(S.value) : 0,
        "--v-progress-linear-height": Q(S.value),
        ...r.value
      }, e.style],
      role: "progressbar",
      "aria-hidden": e.active ? "false" : "true",
      "aria-valuemin": "0",
      "aria-valuemax": e.max,
      "aria-valuenow": e.indeterminate ? void 0 : w.value,
      onClick: e.clickable && M
    }, {
      default: () => [e.stream && u("div", {
        key: "stream",
        class: ["v-progress-linear__stream", o.value],
        style: {
          ...c.value,
          [x.value ? "left" : "right"]: Q(-S.value),
          borderTop: `${Q(S.value / 2)} dotted`,
          opacity: b.value,
          top: `calc(50% - ${Q(S.value / 4)})`,
          width: Q(100 - _.value, "%"),
          "--v-progress-linear-stream-to": Q(S.value * (x.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", d.value],
        style: [f.value, {
          opacity: b.value,
          width: Q(e.stream ? _.value : 100, "%")
        }]
      }, null), u(fn, {
        name: V.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((C) => u("div", {
          key: C,
          class: ["v-progress-linear__indeterminate", C, v.value],
          style: m.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", v.value],
          style: [m.value, {
            width: Q(w.value, "%")
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
const dd = ["static", "relative", "fixed", "absolute", "sticky"], sl = L({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => dd.includes(e)
    )
  }
}, "position");
function rl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    positionClasses: h(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function fd() {
  const e = Fe("useRoute");
  return h(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function vd() {
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
  const i = e.to ? n.useLink(e) : void 0, s = fd();
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
function md(e, t) {
  let n = !1, a, l;
  $e && (He(() => {
    window.addEventListener("popstate", i), a = e == null ? void 0 : e.beforeEach((s, r, o) => {
      Tl ? n ? t(o) : o() : setTimeout(() => n ? t(o) : o()), Tl = !0;
    }), l = e == null ? void 0 : e.afterEach(() => {
      Tl = !1;
    });
  }), qe(() => {
    window.removeEventListener("popstate", i), a == null || a(), l == null || l();
  }));
  function i(s) {
    var r;
    (r = s.state) != null && r.replaced || (n = !0, setTimeout(() => n = !1));
  }
}
const Gl = Symbol("rippleStop"), hd = 80;
function Ls(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ql(e) {
  return e.constructor.name === "TouchEvent";
}
function Ur(e) {
  return e.constructor.name === "KeyboardEvent";
}
const gd = function(e, t) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Ur(e)) {
    const v = t.getBoundingClientRect(), m = ql(e) ? e.touches[e.touches.length - 1] : e;
    a = m.clientX - v.left, l = m.clientY - v.top;
  }
  let i = 0, s = 0.3;
  (f = t._ripple) != null && f.circle ? (s = 0.15, i = t.clientWidth / 2, i = n.center ? i : i + Math.sqrt((a - i) ** 2 + (l - i) ** 2) / 4) : i = Math.sqrt(t.clientWidth ** 2 + t.clientHeight ** 2) / 2;
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
    } = gd(e, t, n), f = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, t.appendChild(a);
    const v = window.getComputedStyle(t);
    v && v.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Ls(l, `translate(${r}, ${o}) scale3d(${s},${s},${s})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
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
      }, hd);
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
function yd(e, t) {
  Kr(e, t, !1);
}
function pd(e) {
  delete e._ripple, Zr(e);
}
function kd(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Hr(t.oldValue);
  Kr(e, t, n);
}
const Bn = {
  mounted: yd,
  unmounted: pd,
  updated: kd
}, bd = L({
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
  ...ie(),
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
  props: bd(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const {
      themeClasses: l
    } = Ue(e), {
      borderClasses: i
    } = pn(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: o
    } = Rn(e), {
      densityClasses: c
    } = Ct(e), {
      dimensionStyles: d
    } = Yt(e), {
      elevationClasses: f
    } = Wt(e), {
      loaderClasses: v
    } = il(e), {
      locationStyles: m
    } = da(e), {
      positionClasses: p
    } = rl(e), {
      roundedClasses: y
    } = lt(e), g = ol(e, n), k = h(() => e.link !== !1 && g.isLink.value), S = h(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
    return Z(() => {
      const _ = k.value ? "a" : e.tag, w = !!(a.title || e.title != null), x = !!(a.subtitle || e.subtitle != null), V = w || x, b = !!(a.append || e.appendAvatar || e.appendIcon), M = !!(a.prepend || e.prependAvatar || e.prependIcon), C = !!(a.image || e.image), O = V || M || b, D = !!(a.text || e.text != null);
      return Ve(u(_, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": S.value
        }, l.value, i.value, s.value, c.value, f.value, v.value, p.value, y.value, o.value, e.class],
        style: [r.value, d.value, m.value, e.style],
        href: g.href.value,
        onClick: S.value && g.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var A;
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
          }), O && u(ud, {
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
          }), D && u(Nn, {
            key: "text"
          }, {
            default: () => {
              var T;
              return [((T = a.text) == null ? void 0 : T.call(a)) ?? e.text];
            }
          }), (A = a.default) == null ? void 0 : A.call(a), a.actions && u(Fr, null, {
            default: a.actions
          }), Fn(S.value, "v-card")];
        }
      }), [[gt("ripple"), S.value && e.ripple]]);
    }), {};
  }
});
const _d = L({
  text: String,
  clickable: Boolean,
  ...ie(),
  ...Ee()
}, "VLabel"), Mi = z()({
  name: "VLabel",
  props: _d(),
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
  ...ie(),
  ...yt(),
  ...Ee()
}, "SelectionControlGroup"), Sd = L({
  ...Jr({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
z()({
  name: "VSelectionControlGroup",
  props: Sd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), l = nt(), i = h(() => e.id || `v-selection-control-group-${l}`), s = h(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Ge(Xr, {
      modelValue: a,
      forceUpdate: () => {
        r.forEach((o) => o());
      },
      onForceUpdate: (o) => {
        r.add(o), qe(() => {
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
  ...ie(),
  ...Jr()
}, "VSelectionControl");
function wd(e) {
  const t = Te(Xr, void 0), {
    densityClasses: n
  } = Ct(e), a = fe(e, "modelValue"), l = h(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = h(() => e.falseValue !== void 0 ? e.falseValue : !1), s = h(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = h({
    get() {
      const m = t ? t.modelValue.value : a.value;
      return s.value ? Xe(m).some((p) => e.valueComparator(p, l.value)) : e.valueComparator(m, l.value);
    },
    set(m) {
      if (e.readonly)
        return;
      const p = m ? l.value : i.value;
      let y = p;
      s.value && (y = m ? [...Xe(a.value), p] : Xe(a.value).filter((g) => !e.valueComparator(g, l.value))), t ? t.modelValue.value = y : a.value = y;
    }
  }), {
    textColorClasses: o,
    textColorStyles: c
  } = ft(h(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: f
  } = vt(h(() => r.value && !e.error && !e.disabled ? e.color : void 0)), v = h(() => r.value ? e.trueIcon : e.falseIcon);
  return {
    group: t,
    densityClasses: n,
    trueValue: l,
    falseValue: i,
    model: r,
    textColorClasses: o,
    textColorStyles: c,
    backgroundColorClasses: d,
    backgroundColorStyles: f,
    icon: v
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
      backgroundColorStyles: f,
      trueValue: v
    } = wd(e), m = nt(), p = h(() => e.id || `input-${m}`), y = re(!1), g = re(!1), k = N();
    l == null || l.onForceUpdate(() => {
      k.value && (k.value.checked = r.value);
    });
    function S(x) {
      y.value = !0, Wa(x.target, ":focus-visible") !== !1 && (g.value = !0);
    }
    function _() {
      y.value = !1, g.value = !1;
    }
    function w(x) {
      e.readonly && l && He(() => l.forceUpdate()), r.value = x.target.checked;
    }
    return Z(() => {
      var C, O;
      const x = a.label ? a.label({
        label: e.label,
        props: {
          for: p.value
        }
      }) : e.label, [V, b] = nl(n), M = u("input", B({
        ref: k,
        checked: r.value,
        disabled: !!(e.readonly || e.disabled),
        id: p.value,
        onBlur: _,
        onFocus: S,
        onInput: w,
        "aria-disabled": !!(e.readonly || e.disabled),
        type: e.type,
        value: v.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, b), null);
      return u("div", B({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": y.value,
          "v-selection-control--focus-visible": g.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, V, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", o.value],
        style: c.value
      }, [(C = a.default) == null ? void 0 : C.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: f
      }), Ve(u("div", {
        class: ["v-selection-control__input"]
      }, [((O = a.input) == null ? void 0 : O.call(a, {
        model: r,
        textColorClasses: o,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: f,
        inputNode: M,
        icon: s.value,
        props: {
          onFocus: S,
          onBlur: _,
          id: p.value
        }
      })) ?? u(pe, null, [s.value && u(Ce, {
        key: "icon",
        icon: s.value
      }, null), M])]), [[gt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), x && u(Mi, {
        for: p.value,
        clickable: !0,
        onClick: (D) => D.stopPropagation()
      }, {
        default: () => [x]
      })]);
    }), {
      isFocused: y,
      input: k
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
const Cd = L({
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
    props: Cd({
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
              offsetHeight: f
            } = r;
            r._transitionInitialStyles = {
              position: r.style.position,
              top: r.style.top,
              left: r.style.left,
              width: r.style.width,
              height: r.style.height
            }, r.style.position = "absolute", r.style.top = `${o}px`, r.style.left = `${c}px`, r.style.width = `${d}px`, r.style.height = `${f}px`;
          }
          a.hideOnLeave && r.style.setProperty("display", "none", "important");
        },
        onAfterLeave(r) {
          if (a.leaveAbsolute && (r != null && r._transitionInitialStyles)) {
            const {
              position: o,
              top: c,
              left: d,
              width: f,
              height: v
            } = r._transitionInitialStyles;
            delete r._transitionInitialStyles, r.style.position = o || "", r.style.top = c || "", r.style.left = d || "", r.style.width = f || "", r.style.height = v || "";
          }
        }
      };
      return () => {
        const r = a.group ? Ju : fn;
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
const Vd = L({
  target: [Object, Array]
}, "v-dialog-transition"), Di = z()({
  name: "VDialogTransition",
  props: Vd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = {
      onBeforeEnter(l) {
        l.style.pointerEvents = "none", l.style.visibility = "hidden";
      },
      async onEnter(l, i) {
        var v;
        await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), l.style.visibility = "";
        const {
          x: s,
          y: r,
          sx: o,
          sy: c,
          speed: d
        } = Ns(e.target, l), f = xn(l, [{
          transform: `translate(${s}px, ${r}px) scale(${o}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: $c
        });
        (v = Rs(l)) == null || v.forEach((m) => {
          xn(m, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Ua
          });
        }), f.finished.then(() => i());
      },
      onAfterEnter(l) {
        l.style.removeProperty("pointer-events");
      },
      onBeforeLeave(l) {
        l.style.pointerEvents = "none";
      },
      async onLeave(l, i) {
        var v;
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
          easing: Wc
        }).finished.then(() => i()), (v = Rs(l)) == null || v.forEach((m) => {
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
  const n = xr(e), a = ki(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((k) => parseFloat(k)), [s, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let o = n.left + n.width / 2;
  s === "left" || r === "left" ? o -= n.width / 2 : (s === "right" || r === "right") && (o += n.width / 2);
  let c = n.top + n.height / 2;
  s === "top" || r === "top" ? c -= n.height / 2 : (s === "bottom" || r === "bottom") && (c += n.height / 2);
  const d = n.width / a.width, f = n.height / a.height, v = Math.max(1, d, f), m = d / v || 0, p = f / v || 0, y = a.width * a.height / (window.innerWidth * window.innerHeight), g = y > 0.12 ? Math.min(1.5, (y - 0.12) * 10 + 1) : 1;
  return {
    x: o - (l + a.left),
    y: c - (i + a.top),
    sx: m,
    sy: p,
    speed: g
  };
}
Qe("fab-transition", "center center", "out-in");
Qe("dialog-bottom-transition");
Qe("dialog-top-transition");
const xd = Qe("fade-transition"), ao = Qe("scale-transition");
Qe("scroll-x-transition");
Qe("scroll-x-reverse-transition");
Qe("scroll-y-transition");
Qe("scroll-y-reverse-transition");
Qe("slide-x-transition");
Qe("slide-x-reverse-transition");
const lo = Qe("slide-y-transition");
Qe("slide-y-reverse-transition");
const Pd = to("expand-transition", no()), io = to("expand-x-transition", no("", !0)), Md = L({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ie(),
  ...ua({
    transition: {
      component: lo,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Dd = z()({
  name: "VMessages",
  props: Md(),
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
const so = Symbol.for("vuetify:form"), Od = L({
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
function Id(e) {
  const t = fe(e, "modelValue"), n = h(() => e.disabled), a = h(() => e.readonly), l = re(!1), i = N([]), s = N([]);
  async function r() {
    const d = [];
    let f = !0;
    s.value = [], l.value = !0;
    for (const v of i.value) {
      const m = await v.validate();
      if (m.length > 0 && (f = !1, d.push({
        id: v.id,
        errorMessages: m
      })), !f && e.fastFail)
        break;
    }
    return s.value = d, l.value = !1, {
      valid: f,
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
    let d = 0, f = 0;
    const v = [];
    for (const m of i.value)
      m.isValid === !1 ? (f++, v.push({
        id: m.id,
        errorMessages: m.errorMessages
      })) : m.isValid === !0 && d++;
    s.value = v, t.value = f > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0
  }), Ge(so, {
    register: (d) => {
      let {
        id: f,
        validate: v,
        reset: m,
        resetValidation: p
      } = d;
      i.value.some((y) => y.id === f) && un(`Duplicate input name "${f}"`), i.value.push({
        id: f,
        validate: v,
        reset: m,
        resetValidation: p,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((f) => f.id !== d);
    },
    update: (d, f, v) => {
      const m = i.value.find((p) => p.id === d);
      m && (m.isValid = f, m.errorMessages = v);
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
const Td = L({
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
function Ad(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nt();
  const a = fe(e, "modelValue"), l = h(() => e.validationValue === void 0 ? a.value : e.validationValue), i = ro(), s = N([]), r = re(!0), o = h(() => !!(Xe(a.value === "" ? null : a.value).length || Xe(l.value === "" ? null : l.value).length)), c = h(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), d = h(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), f = h(() => {
    var w;
    return (w = e.errorMessages) != null && w.length ? Xe(e.errorMessages).concat(s.value).slice(0, Math.max(0, +e.maxErrors)) : s.value;
  }), v = h(() => {
    let w = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    w === "lazy" && (w = "input lazy");
    const x = new Set((w == null ? void 0 : w.split(" ")) ?? []);
    return {
      blur: x.has("blur") || x.has("input"),
      input: x.has("input"),
      submit: x.has("submit"),
      lazy: x.has("lazy")
    };
  }), m = h(() => {
    var w;
    return e.error || (w = e.errorMessages) != null && w.length ? !1 : e.rules.length ? r.value ? s.value.length || v.value.lazy ? null : !0 : !s.value.length : !0;
  }), p = re(!1), y = h(() => ({
    [`${t}--error`]: m.value === !1,
    [`${t}--dirty`]: o.value,
    [`${t}--disabled`]: c.value,
    [`${t}--readonly`]: d.value
  })), g = h(() => e.name ?? Oe(n));
  di(() => {
    i == null || i.register({
      id: g.value,
      validate: _,
      reset: k,
      resetValidation: S
    });
  }), Ae(() => {
    i == null || i.unregister(g.value);
  }), We(async () => {
    v.value.lazy || await _(!0), i == null || i.update(g.value, m.value, f.value);
  }), mn(() => v.value.input, () => {
    G(l, () => {
      if (l.value != null)
        _();
      else if (e.focused) {
        const w = G(() => e.focused, (x) => {
          x || _(), w();
        });
      }
    });
  }), mn(() => v.value.blur, () => {
    G(() => e.focused, (w) => {
      w || _();
    });
  }), G(m, () => {
    i == null || i.update(g.value, m.value, f.value);
  });
  function k() {
    a.value = null, He(S);
  }
  function S() {
    r.value = !0, v.value.lazy ? s.value = [] : _(!0);
  }
  async function _() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const x = [];
    p.value = !0;
    for (const V of e.rules) {
      if (x.length >= +(e.maxErrors ?? 1))
        break;
      const M = await (typeof V == "function" ? V : () => V)(l.value);
      if (M !== !0) {
        if (M !== !1 && typeof M != "string") {
          console.warn(`${M} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        x.push(M || "");
      }
    }
    return s.value = x, p.value = !1, r.value = w, s.value;
  }
  return {
    errorMessages: f,
    isDirty: o,
    isDisabled: c,
    isReadonly: d,
    isPristine: r,
    isValid: m,
    isValidating: p,
    reset: k,
    resetValidation: S,
    validate: _,
    validationClasses: y
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
  ...ie(),
  ...yt(),
  ...Td()
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
      errorMessages: f,
      isDirty: v,
      isDisabled: m,
      isReadonly: p,
      isPristine: y,
      isValid: g,
      isValidating: k,
      reset: S,
      resetValidation: _,
      validate: w,
      validationClasses: x
    } = Ad(e, "v-input", c), V = h(() => ({
      id: c,
      messagesId: d,
      isDirty: v,
      isDisabled: m,
      isReadonly: p,
      isPristine: y,
      isValid: g,
      isValidating: k,
      reset: S,
      resetValidation: _,
      validate: w
    })), b = h(() => {
      var M;
      return (M = e.errorMessages) != null && M.length || !y.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return Z(() => {
      var A, T, P, Y;
      const M = !!(a.prepend || e.prependIcon), C = !!(a.append || e.appendIcon), O = b.value.length > 0, D = !e.hideDetails || e.hideDetails === "auto" && (O || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, s.value, x.value, e.class],
        style: e.style
      }, [M && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(A = a.prepend) == null ? void 0 : A.call(a, V.value), e.prependIcon && u(r, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(T = a.default) == null ? void 0 : T.call(a, V.value)]), C && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(r, {
        key: "append-icon",
        name: "append"
      }, null), (P = a.append) == null ? void 0 : P.call(a, V.value)]), D && u("div", {
        class: "v-input__details"
      }, [u(Dd, {
        id: d.value,
        active: O,
        messages: b.value
      }, {
        message: a.message
      }), (Y = a.details) == null ? void 0 : Y.call(a, V.value)])]);
    }), {
      reset: S,
      resetValidation: _,
      validate: w,
      isValid: g,
      errorMessages: f
    };
  }
}), Ed = L({
  ...ma(),
  ...Je(Qr(), ["inline"])
}, "VCheckbox"), Ld = z()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Ed(),
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
      const [d, f] = nl(n), v = en.filterProps(e), m = Kl.filterProps(e);
      return u(en, B({
        class: ["v-checkbox", e.class]
      }, d, v, {
        modelValue: l.value,
        "onUpdate:modelValue": (p) => l.value = p,
        id: c.value,
        focused: i.value,
        style: e.style
      }), {
        ...a,
        default: (p) => {
          let {
            id: y,
            messagesId: g,
            isDisabled: k,
            isReadonly: S
          } = p;
          return u(Kl, B(m, {
            id: y.value,
            "aria-describedby": g.value,
            disabled: k.value,
            readonly: S.value
          }, f, {
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
const dl = ["sm", "md", "lg", "xl", "xxl"], Fd = Symbol.for("vuetify:display");
function oo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  const n = Te(Fd);
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
function Rd(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const Nd = ["auto", "start", "end", "center", "baseline", "stretch"], Yd = L({
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
    validator: (e) => Nd.includes(e)
  },
  ...ie(),
  ...Re()
}, "VCol"), we = z()({
  name: "VCol",
  props: Yd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = h(() => {
      const l = [];
      let i;
      for (i in Ys)
        Ys[i].forEach((r) => {
          const o = e[r], c = Rd(i, r, o);
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
const Bd = [...Ii, "baseline", "stretch"], mo = (e) => Bd.includes(e), ho = Ti("align", () => ({
  type: String,
  default: null,
  validator: mo
})), $d = [...Ii, ...vo], go = (e) => $d.includes(e), yo = Ti("justify", () => ({
  type: String,
  default: null,
  validator: go
})), Wd = [...Ii, ...vo, "stretch"], po = (e) => Wd.includes(e), ko = Ti("alignContent", () => ({
  type: String,
  default: null,
  validator: po
})), Bs = {
  align: Object.keys(ho),
  justify: Object.keys(yo),
  alignContent: Object.keys(ko)
}, Ud = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function Hd(e, t, n) {
  let a = Ud[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const zd = L({
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
    validator: po
  },
  ...ko,
  ...ie(),
  ...Re()
}, "VRow"), Ne = z()({
  name: "VRow",
  props: zd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = h(() => {
      const l = [];
      let i;
      for (i in Bs)
        Bs[i].forEach((s) => {
          const r = e[s], o = Hd(i, s, r);
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
}), jd = nn("v-spacer", "div", "VSpacer");
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
const Gd = L({
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
  ...ie(),
  ...ra(),
  ...Re({
    tag: "div"
  }),
  ...Ee()
}, "VProgressCircular"), Ai = z()({
  name: "VProgressCircular",
  props: Gd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = N(), {
      themeClasses: s
    } = Ue(e), {
      sizeClasses: r,
      sizeStyles: o
    } = oa(e), {
      textColorClasses: c,
      textColorStyles: d
    } = ft(q(e, "color")), {
      textColorClasses: f,
      textColorStyles: v
    } = ft(q(e, "bgColor")), {
      intersectionRef: m,
      isIntersecting: p
    } = $r(), {
      resizeRef: y,
      contentRect: g
    } = fl(), k = h(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = h(() => Number(e.width)), _ = h(() => o.value ? Number(e.size) : g.value ? g.value.width : Math.max(S.value, 32)), w = h(() => a / (1 - S.value / _.value) * 2), x = h(() => S.value / _.value * w.value), V = h(() => Q((100 - k.value) / 100 * l));
    return je(() => {
      m.value = i.value, y.value = i.value;
    }), Z(() => u(e.tag, {
      ref: i,
      class: ["v-progress-circular", {
        "v-progress-circular--indeterminate": !!e.indeterminate,
        "v-progress-circular--visible": p.value,
        "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink"
      }, s.value, r.value, c.value, e.class],
      style: [o.value, d.value, e.style],
      role: "progressbar",
      "aria-valuemin": "0",
      "aria-valuemax": "100",
      "aria-valuenow": e.indeterminate ? void 0 : k.value
    }, {
      default: () => [u("svg", {
        style: {
          transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))`
        },
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: `0 0 ${w.value} ${w.value}`
      }, [u("circle", {
        class: ["v-progress-circular__underlay", f.value],
        style: v.value,
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": x.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": 0
      }, null), u("circle", {
        class: "v-progress-circular__overlay",
        fill: "transparent",
        cx: "50%",
        cy: "50%",
        r: a,
        "stroke-width": x.value,
        "stroke-dasharray": l,
        "stroke-dashoffset": V.value
      }, null)]), n.default && u("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: k.value
      })])]
    })), {};
  }
}), qd = L({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...ma(),
  ...cl()
}, "VSwitch"), Kd = z()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: qd(),
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
    } = va(e), d = N(), f = h(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), v = nt(), m = h(() => e.id || `switch-${v}`);
    function p() {
      l.value && (l.value = !1);
    }
    function y(g) {
      var k, S;
      g.stopPropagation(), g.preventDefault(), (S = (k = d.value) == null ? void 0 : k.input) == null || S.click();
    }
    return Z(() => {
      const [g, k] = nl(n), S = en.filterProps(e), _ = Jn.filterProps(e);
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
            id: x,
            messagesId: V,
            isDisabled: b,
            isReadonly: M,
            isValid: C
          } = w;
          return u(Jn, B({
            ref: d
          }, _, {
            modelValue: i.value,
            "onUpdate:modelValue": [(O) => i.value = O, p],
            id: x.value,
            "aria-describedby": V.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: b.value,
            readonly: M.value,
            onFocus: o,
            onBlur: c
          }, k), {
            ...a,
            default: (O) => {
              let {
                backgroundColorClasses: D,
                backgroundColorStyles: A
              } = O;
              return u("div", {
                class: ["v-switch__track", ...D.value],
                style: A.value,
                onClick: y
              }, null);
            },
            input: (O) => {
              let {
                inputNode: D,
                icon: A,
                backgroundColorClasses: T,
                backgroundColorStyles: P
              } = O;
              return u(pe, null, [D, u("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": A || e.loading
                }, e.inset ? void 0 : T.value],
                style: e.inset ? void 0 : P.value
              }, [u(ao, null, {
                default: () => [e.loading ? u(Pi, {
                  name: "v-switch",
                  active: !0,
                  color: C.value === !1 ? void 0 : f.value
                }, {
                  default: (Y) => a.loader ? a.loader(Y) : u(Ai, {
                    active: Y.isActive,
                    color: Y.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : A && u(Ce, {
                  key: A,
                  icon: A,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), Zd = /* @__PURE__ */ Le({
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
      new nc({
        label: n.label,
        items: n.items,
        switch: n.switch,
        class: n.class
      })
    ), i = h(() => !ne(n.switch));
    function s(o, c = !1) {
      o ? c || l.value.addAllItems() : c || l.value.clear(), a("update:modelValue", l.value.value);
    }
    function r(o, c) {
      var f;
      const d = l.value.find(c);
      !o && !ne(d) ? (l.value.removeItem(d), !ne(l.value.switch) && ((f = l.value.switch) != null && f.value) && (l.value.switch.value = !1, s(!1, !0))) : ne(d) && (l.value.addItem(c.name, c.value), !ne(l.value.switch) && l.value.value.length === l.value.items.length && (l.value.switch.value = !0, s(!0, !0))), a("update:modelValue", l.value.value);
    }
    return (o, c) => (ee(), se(fa, { elevation: "0" }, {
      default: R(() => [
        u(wi, null, {
          default: R(() => [
            Me(Ze(l.value.label) + " ", 1),
            i.value ? (ee(), se(Kd, B({
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
                (ee(!0), Xt(pe, null, Tn(l.value.items, (d, f) => (ee(), se(we, {
                  key: f,
                  cols: 12,
                  md: d.cols
                }, {
                  default: R(() => [
                    u(Ld, B({
                      modelValue: l.value.items[f].value,
                      "onUpdate:modelValue": (v) => l.value.items[f].value = v
                    }, d.props(), {
                      "onUpdate:modelValue": (v) => r(v, d)
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
}), Xd = L({
  ...cl({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), Jd = z()({
  name: "VRadio",
  props: Xd(),
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
}), Qd = {
  key: 0,
  class: "mb-3 mt-4"
}, ef = {
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
    }, a = e, l = t, i = N(a.field), s = je(() => i.value = a.field), r = En({
      ...n,
      mask: (a == null ? void 0 : a.field) instanceof ac ? (S = a.field) == null ? void 0 : S.masking : ""
    }), o = h(() => {
      var _;
      return (_ = i.value) == null ? void 0 : _.validationRules();
    }), c = h(() => {
      var _, w, x;
      return !ne((_ = a.field) == null ? void 0 : _.prepend_icon) && !ne((x = (w = a.field) == null ? void 0 : w.prepend_icon) == null ? void 0 : x.icon);
    }), d = h(() => {
      var _, w, x;
      return !ne((_ = a.field) == null ? void 0 : _.append_icon) && !ne((x = (w = a.field) == null ? void 0 : w.append_icon) == null ? void 0 : x.icon);
    }), f = h(() => {
      var _, w, x;
      return !ne((_ = a.field) == null ? void 0 : _.clear_icon) && !ne((x = (w = a.field) == null ? void 0 : w.clear_icon) == null ? void 0 : x.icon);
    }), v = h(
      () => {
        var _, w, x;
        return !ne((_ = a.field) == null ? void 0 : _.prepend_inner_icon) && !ne((x = (w = a.field) == null ? void 0 : w.prepend_inner_icon) == null ? void 0 : x.icon);
      }
    ), m = h(
      () => {
        var _, w, x;
        return !ne((_ = a.field) == null ? void 0 : _.append_inner_icon) && !ne((x = (w = a.field) == null ? void 0 : w.append_inner_icon) == null ? void 0 : x.icon);
      }
    ), p = h(() => {
      var _, w, x;
      return !(ne((_ = a == null ? void 0 : a.field) == null ? void 0 : _.component) || ((w = a == null ? void 0 : a.field) == null ? void 0 : w.type) === "hidden" || (x = a == null ? void 0 : a.field) != null && x.loading);
    });
    function y() {
      l("updated", i.value);
    }
    function g() {
      i.value.validate(), l("validated", i.value.name);
    }
    function k() {
      i.value.invalidate(), l("invalidated", i.value.name);
    }
    return Ae(() => {
      s();
    }), We(() => {
      var _;
      (_ = i.value) == null || _.isLoading(!1);
    }), (_, w) => {
      var b, M;
      const x = Qt("EasyIcon"), V = gt("maska");
      return p.value ? Ve((ee(), se(mr(Oe(sc)((b = e.field) == null ? void 0 : b.component)), B({
        key: 0,
        modelValue: i.value.value,
        "onUpdate:modelValue": w[5] || (w[5] = (C) => i.value.value = C)
      }, (M = e.field) == null ? void 0 : M.props(), {
        rules: o.value,
        fields: a.fields ?? [],
        "onUpdate:modelValue": y,
        onValidated: g,
        onInvalidated: k,
        "onClick:clear": w[6] || (w[6] = (C) => l("click:clear", C)),
        "onClick:prepend": w[7] || (w[7] = (C) => l("click:prepend", C)),
        "onClick:prependInner": w[8] || (w[8] = (C) => l("click:prependInner", C)),
        "onClick:append": w[9] || (w[9] = (C) => l("click:append", C)),
        "onClick:appendInner": w[10] || (w[10] = (C) => l("click:appendInner", C))
      }), mi({
        default: R(() => [
          e.field.component == "v-radio-group" ? (ee(), Xt("p", Qd, [
            (ee(!0), Xt(pe, null, Tn(e.field.items, (C, O) => (ee(), se(Jd, B({ key: O }, C.props()), null, 16))), 128))
          ])) : De("", !0),
          e.field.component == "h2" ? (ee(), Xt("p", ef, Ze(i.value.value), 1)) : De("", !0)
        ]),
        _: 2
      }, [
        f.value ? {
          name: "clear",
          fn: R(() => {
            var C;
            return [
              u(x, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.clear_icon,
                onClick: w[0] || (w[0] = (O) => l("click:clear", O))
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
              u(x, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.append_icon,
                onClick: w[1] || (w[1] = (O) => l("click:append", O))
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
              u(x, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.append_inner_icon,
                onClick: w[2] || (w[2] = (O) => l("click:appendInner", O))
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
              u(x, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.prepend_icon,
                onClick: w[3] || (w[3] = (O) => l("click:prepend", O))
              }, null, 8, ["icon"])
            ];
          }),
          key: "3"
        } : void 0,
        v.value ? {
          name: "prepend-inner",
          fn: R(() => {
            var C;
            return [
              u(x, {
                icon: (C = a == null ? void 0 : a.field) == null ? void 0 : C.prepend_inner_icon,
                onClick: w[4] || (w[4] = (O) => l("click:prependInner", O))
              }, null, 8, ["icon"])
            ];
          }),
          key: "4"
        } : void 0
      ]), 1040, ["modelValue", "rules", "fields"])), [
        [V, void 0, r]
      ]) : De("", !0);
    };
  }
});
const tf = L({
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
  ...ie()
}, "VColorPickerCanvas"), nf = St({
  name: "VColorPickerCanvas",
  props: tf(),
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
          x: k,
          y: S
        } = g;
        r.value = g, n("update:color", {
          h: ((_ = e.color) == null ? void 0 : _.h) ?? 0,
          s: rt(k, 0, i.value) / i.value,
          v: 1 - rt(S, 0, s.value) / s.value,
          a: ((w = e.color) == null ? void 0 : w.a) ?? 1
        });
      }
    }), c = h(() => {
      const {
        x: g,
        y: k
      } = o.value, S = parseInt(e.dotSize, 10) / 2;
      return {
        width: Q(e.dotSize),
        height: Q(e.dotSize),
        transform: `translate(${Q(g - S)}, ${Q(k - S)})`
      };
    }), {
      resizeRef: d
    } = fl((g) => {
      var _;
      if (!((_ = d.value) != null && _.offsetParent))
        return;
      const {
        width: k,
        height: S
      } = g[0].contentRect;
      i.value = k, s.value = S;
    });
    function f(g, k, S) {
      const {
        left: _,
        top: w,
        width: x,
        height: V
      } = S;
      o.value = {
        x: rt(g - _, 0, x),
        y: rt(k - w, 0, V)
      };
    }
    function v(g) {
      g.type === "mousedown" && g.preventDefault(), !e.disabled && (m(g), window.addEventListener("mousemove", m), window.addEventListener("mouseup", p), window.addEventListener("touchmove", m), window.addEventListener("touchend", p));
    }
    function m(g) {
      if (e.disabled || !l.value)
        return;
      a.value = !0;
      const k = yc(g);
      f(k.clientX, k.clientY, l.value.getBoundingClientRect());
    }
    function p() {
      window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", p), window.removeEventListener("touchmove", m), window.removeEventListener("touchend", p);
    }
    function y() {
      var w;
      if (!l.value)
        return;
      const g = l.value, k = g.getContext("2d");
      if (!k)
        return;
      const S = k.createLinearGradient(0, 0, g.width, 0);
      S.addColorStop(0, "hsla(0, 0%, 100%, 1)"), S.addColorStop(1, `hsla(${((w = e.color) == null ? void 0 : w.h) ?? 0}, 100%, 50%, 1)`), k.fillStyle = S, k.fillRect(0, 0, g.width, g.height);
      const _ = k.createLinearGradient(0, 0, 0, g.height);
      _.addColorStop(0, "hsla(0, 0%, 100%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), k.fillStyle = _, k.fillRect(0, 0, g.width, g.height);
    }
    return G(() => {
      var g;
      return (g = e.color) == null ? void 0 : g.h;
    }, y, {
      immediate: !0
    }), G(() => [i.value, s.value], (g, k) => {
      y(), r.value = {
        x: o.value.x * g[0] / k[0],
        y: o.value.y * g[1] / k[1]
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
    }), We(() => y()), Z(() => u("div", {
      ref: d,
      class: ["v-color-picker-canvas", e.class],
      style: e.style,
      onMousedown: v,
      onTouchstartPassive: v
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
const bo = L({
  divided: Boolean,
  ...yn(),
  ...ie(),
  ...yt(),
  ...$t(),
  ...at(),
  ...Re(),
  ...Ee(),
  ...Bt()
}, "VBtnGroup"), $s = z()({
  name: "VBtnGroup",
  props: bo(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ue(e), {
      densityClasses: l
    } = Ct(e), {
      borderClasses: i
    } = pn(e), {
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
  Ge(Symbol.for(`${t.description}:id`), l);
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
  const a = En([]), l = fe(e, "modelValue", [], (v) => v == null ? [] : Vo(a, Xe(v)), (v) => {
    const m = lf(a, v);
    return e.multiple ? m : m[0];
  }), i = Fe("useGroup");
  function s(v, m) {
    const p = v, y = Symbol.for(`${t.description}:id`), k = Ia(y, i == null ? void 0 : i.vnode).indexOf(m);
    k > -1 ? a.splice(k, 0, p) : a.push(p);
  }
  function r(v) {
    if (n)
      return;
    o();
    const m = a.findIndex((p) => p.id === v);
    a.splice(m, 1);
  }
  function o() {
    const v = a.find((m) => !m.disabled);
    v && e.mandatory === "force" && !l.value.length && (l.value = [v.id]);
  }
  We(() => {
    o();
  }), Ae(() => {
    n = !0;
  });
  function c(v, m) {
    const p = a.find((y) => y.id === v);
    if (!(m && (p != null && p.disabled)))
      if (e.multiple) {
        const y = l.value.slice(), g = y.findIndex((S) => S === v), k = ~g;
        if (m = m ?? !k, k && e.mandatory && y.length <= 1 || !k && e.max != null && y.length + 1 > e.max)
          return;
        g < 0 && m ? y.push(v) : g >= 0 && !m && y.splice(g, 1), l.value = y;
      } else {
        const y = l.value.includes(v);
        if (e.mandatory && y)
          return;
        l.value = m ?? !y ? [v] : [];
      }
  }
  function d(v) {
    if (e.multiple && un('This method is not supported when using "multiple" prop'), l.value.length) {
      const m = l.value[0], p = a.findIndex((k) => k.id === m);
      let y = (p + v) % a.length, g = a[y];
      for (; g.disabled && y !== p; )
        y = (y + v) % a.length, g = a[y];
      if (g.disabled)
        return;
      l.value = [a[y].id];
    } else {
      const m = a.find((p) => !p.disabled);
      m && (l.value = [m.id]);
    }
  }
  const f = {
    register: s,
    unregister: r,
    selected: l,
    select: c,
    disabled: q(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (v) => l.value.includes(v),
    selectedClass: h(() => e.selectedClass),
    items: h(() => a),
    getItemIndex: (v) => af(a, v)
  };
  return Ge(t, f), f;
}
function af(e, t) {
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
function lf(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value != null ? i.value : l);
    }
  }), n;
}
const xo = Symbol.for("vuetify:v-btn-toggle"), sf = L({
  ...bo(),
  ..._o()
}, "VBtnToggle");
z()({
  name: "VBtnToggle",
  props: sf(),
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
function rf(e, t) {
  G(() => {
    var n;
    return (n = e.isActive) == null ? void 0 : n.value;
  }, (n) => {
    e.isLink.value && n && t && He(() => {
      t(!0);
    });
  }, {
    immediate: !0
  });
}
const of = L({
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
  ...ie(),
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
  props: of(),
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
    } = Ue(e), {
      borderClasses: i
    } = pn(e), {
      colorClasses: s,
      colorStyles: r,
      variantClasses: o
    } = Rn(e), {
      densityClasses: c
    } = Ct(e), {
      dimensionStyles: d
    } = Yt(e), {
      elevationClasses: f
    } = Wt(e), {
      loaderClasses: v
    } = il(e), {
      locationStyles: m
    } = da(e), {
      positionClasses: p
    } = rl(e), {
      roundedClasses: y
    } = lt(e), {
      sizeClasses: g,
      sizeStyles: k
    } = oa(e), S = wo(e, e.symbol, !1), _ = ol(e, n), w = h(() => {
      var C;
      return e.active !== void 0 ? e.active : _.isLink.value ? (C = _.isActive) == null ? void 0 : C.value : S == null ? void 0 : S.isSelected.value;
    }), x = h(() => (S == null ? void 0 : S.disabled.value) || e.disabled), V = h(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), b = h(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function M(C) {
      var O;
      x.value || _.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || n.target === "_blank") || ((O = _.navigate) == null || O.call(_, C), S == null || S.toggle());
    }
    return rf(_, S == null ? void 0 : S.select), Z(() => {
      var P, Y;
      const C = _.isLink.value ? "a" : e.tag, O = !!(e.prependIcon || a.prepend), D = !!(e.appendIcon || a.append), A = !!(e.icon && e.icon !== !0), T = (S == null ? void 0 : S.isSelected.value) && (!_.isLink.value || ((P = _.isActive) == null ? void 0 : P.value)) || !S || ((Y = _.isActive) == null ? void 0 : Y.value);
      return Ve(u(C, {
        type: C === "a" ? void 0 : "button",
        class: ["v-btn", S == null ? void 0 : S.selectedClass.value, {
          "v-btn--active": w.value,
          "v-btn--block": e.block,
          "v-btn--disabled": x.value,
          "v-btn--elevated": V.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, T ? s.value : void 0, c.value, f.value, v.value, p.value, y.value, g.value, o.value, e.class],
        style: [T ? r.value : void 0, d.value, m.value, k.value, e.style],
        disabled: x.value || void 0,
        href: _.href.value,
        onClick: M,
        value: b.value
      }, {
        default: () => {
          var X;
          return [Fn(!0, "v-btn"), !e.icon && O && u("span", {
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
          }, [!a.default && A ? u(Ce, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(xe, {
            key: "content-defaults",
            disabled: !A,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var te;
              return [((te = a.default) == null ? void 0 : te.call(a)) ?? e.text];
            }
          })]), !e.icon && D && u("span", {
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
          }, [((X = a.loader) == null ? void 0 : X.call(a)) ?? u(Ai, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "23",
            width: "2"
          }, null)])];
        }
      }), [[gt("ripple"), !x.value && e.ripple, null]]);
    }), {};
  }
});
function uf(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function cf(e, t) {
  if (t == null || typeof t == "string") {
    const n = Tr(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return ln(t, ["r", "g", "b"]) ? n = Ft(e) : ln(t, ["h", "s", "l"]) ? n = Pr(e) : ln(t, ["h", "s", "v"]) && (n = e), uf(n, !ln(t, ["a"]) && e.a === 1);
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
const df = {
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
  from: bi
}, ff = {
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
}, vf = {
  ...Po,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t
  }]
}, cn = {
  rgb: df,
  rgba: Zl,
  hsl: ff,
  hsla: Xl,
  hex: vf,
  hexa: Po
}, mf = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", n, null), u("span", null, [t])]);
}, hf = L({
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
  ...ie()
}, "VColorPickerEdit"), gf = St({
  name: "VColorPickerEdit",
  props: hf(),
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
          ...f
        } = o;
        return {
          ...i.inputProps,
          ...f,
          disabled: e.disabled,
          value: s && c(s),
          onChange: (v) => {
            const m = v.target;
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
      }, [(i = l.value) == null ? void 0 : i.map((s) => u(mf, s, null)), a.value.length > 1 && u(Ye, {
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
function yf(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function pf(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const kf = L({
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
}, "Slider"), bf = (e) => {
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
}, _f = (e) => {
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
    min: f,
    max: v,
    step: m,
    decimals: p,
    roundValue: y
  } = n, g = h(() => parseInt(t.thumbSize, 10)), k = h(() => parseInt(t.tickSize, 10)), S = h(() => parseInt(t.trackSize, 10)), _ = h(() => (v.value - f.value) / m.value), w = q(t, "disabled"), x = h(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), V = h(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), b = h(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), M = re(!1), C = re(0), O = N(), D = N();
  function A(U) {
    var ss;
    const de = t.direction === "vertical", jt = de ? "top" : "left", Pt = de ? "height" : "width", _a = de ? "clientY" : "clientX", {
      [jt]: Sa,
      [Pt]: Pl
    } = (ss = O.value) == null ? void 0 : ss.$el.getBoundingClientRect(), Ml = pf(U, _a);
    let Dl = Math.min(Math.max((Ml - Sa - C.value) / Pl, 0), 1) || 0;
    return (de ? d.value : d.value !== r.value) && (Dl = 1 - Dl), y(f.value + Dl * (v.value - f.value));
  }
  const T = (U) => {
    i({
      value: A(U)
    }), M.value = !1, C.value = 0;
  }, P = (U) => {
    D.value = s(U), D.value && (D.value.focus(), M.value = !0, D.value.contains(U.target) ? C.value = yf(U, D.value, t.direction) : (C.value = 0, l({
      value: A(U)
    })), a({
      value: A(U)
    }));
  }, Y = {
    passive: !0,
    capture: !0
  };
  function X(U) {
    l({
      value: A(U)
    });
  }
  function te(U) {
    U.stopPropagation(), U.preventDefault(), T(U), window.removeEventListener("mousemove", X, Y), window.removeEventListener("mouseup", te);
  }
  function I(U) {
    var de;
    T(U), window.removeEventListener("touchmove", X, Y), (de = U.target) == null || de.removeEventListener("touchend", I);
  }
  function E(U) {
    var de;
    P(U), window.addEventListener("touchmove", X, Y), (de = U.target) == null || de.addEventListener("touchend", I, {
      passive: !1
    });
  }
  function H(U) {
    U.preventDefault(), P(U), window.addEventListener("mousemove", X, Y), window.addEventListener("mouseup", te, {
      passive: !1
    });
  }
  const J = (U) => {
    const de = (U - f.value) / (v.value - f.value) * 100;
    return rt(isNaN(de) ? 0 : de, 0, 100);
  }, he = q(t, "showTicks"), j = h(() => he.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((U) => ({
    value: U,
    position: J(U),
    label: U.toString()
  })) : Object.keys(t.ticks).map((U) => ({
    value: parseFloat(U),
    position: J(parseFloat(U)),
    label: t.ticks[U]
  })) : _.value !== 1 / 0 ? gi(_.value + 1).map((U) => {
    const de = f.value + U * m.value;
    return {
      value: de,
      position: J(de)
    };
  }) : [] : []), oe = h(() => j.value.some((U) => {
    let {
      label: de
    } = U;
    return !!de;
  })), ge = {
    activeThumbRef: D,
    color: q(t, "color"),
    decimals: p,
    disabled: w,
    direction: q(t, "direction"),
    elevation: q(t, "elevation"),
    hasLabels: oe,
    isReversed: o,
    indexFromEnd: d,
    min: f,
    max: v,
    mousePressed: M,
    numTicks: _,
    onSliderMousedown: H,
    onSliderTouchstart: E,
    parsedTicks: j,
    parseMouseMove: A,
    position: J,
    readonly: q(t, "readonly"),
    rounded: q(t, "rounded"),
    roundValue: y,
    showTicks: he,
    startOffset: C,
    step: m,
    thumbSize: g,
    thumbColor: x,
    thumbLabel: q(t, "thumbLabel"),
    ticks: q(t, "ticks"),
    tickSize: k,
    trackColor: V,
    trackContainerRef: O,
    trackFillColor: b,
    trackSize: S,
    vertical: c
  };
  return Ge(Ei, ge), ge;
}, Sf = L({
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
  ...ie()
}, "VSliderThumb"), wf = z()({
  name: "VSliderThumb",
  directives: {
    Ripple: Bn
  },
  props: Sf(),
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
      thumbLabel: f,
      direction: v,
      isReversed: m,
      vertical: p,
      readonly: y,
      elevation: g,
      mousePressed: k,
      decimals: S,
      indexFromEnd: _
    } = l, {
      textColorClasses: w,
      textColorStyles: x
    } = ft(r), {
      pageup: V,
      pagedown: b,
      end: M,
      home: C,
      left: O,
      right: D,
      down: A,
      up: T
    } = vc, P = [V, b, M, C, O, D, A, T], Y = h(() => o.value ? [1, 2, 3] : [1, 5, 10]);
    function X(I, E) {
      if (!P.includes(I.key))
        return;
      I.preventDefault();
      const H = o.value || 0.1, J = (e.max - e.min) / H;
      if ([O, D, A, T].includes(I.key)) {
        const j = (p.value ? [i.value ? O : D, m.value ? A : T] : _.value !== i.value ? [O, T] : [D, T]).includes(I.key) ? 1 : -1, oe = I.shiftKey ? 2 : I.ctrlKey ? 1 : 0;
        E = E + j * H * Y.value[oe];
      } else if (I.key === C)
        E = e.min;
      else if (I.key === M)
        E = e.max;
      else {
        const he = I.key === b ? 1 : -1;
        E = E - he * H * (J > 100 ? J / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, E));
    }
    function te(I) {
      const E = X(I, e.modelValue);
      E != null && a("update:modelValue", E);
    }
    return Z(() => {
      const I = Q(_.value ? 100 - e.position : e.position, "%"), {
        elevationClasses: E
      } = Wt(h(() => c.value ? void 0 : g.value));
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && k.value
        }, e.class, s.value],
        style: [{
          "--v-slider-thumb-position": I,
          "--v-slider-thumb-size": Q(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!y.value,
        "aria-orientation": v.value,
        onKeydown: y.value ? void 0 : te
      }, [u("div", {
        class: ["v-slider-thumb__surface", w.value, E.value],
        style: {
          ...x.value
        }
      }, null), Ve(u("div", {
        class: ["v-slider-thumb__ripple", w.value],
        style: x.value
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
          })) ?? e.modelValue.toFixed(o.value ? S.value : 1)])])]), [[ut, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
});
const Cf = L({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...ie()
}, "VSliderTrack"), Vf = z()({
  name: "VSliderTrack",
  props: Cf(),
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
      trackSize: f,
      vertical: v,
      min: m,
      max: p,
      indexFromEnd: y
    } = a, {
      roundedClasses: g
    } = lt(s), {
      backgroundColorClasses: k,
      backgroundColorStyles: S
    } = vt(d), {
      backgroundColorClasses: _,
      backgroundColorStyles: w
    } = vt(c), x = h(() => `inset-${v.value ? "block" : "inline"}-${y.value ? "end" : "start"}`), V = h(() => v.value ? "height" : "width"), b = h(() => ({
      [x.value]: "0%",
      [V.value]: "100%"
    })), M = h(() => e.stop - e.start), C = h(() => ({
      [x.value]: Q(e.start, "%"),
      [V.value]: Q(M.value, "%")
    })), O = h(() => r.value ? (v.value ? i.value.slice().reverse() : i.value).map((A, T) => {
      var Y;
      const P = A.value !== m.value && A.value !== p.value ? Q(A.position, "%") : void 0;
      return u("div", {
        key: A.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": A.position >= e.start && A.position <= e.stop,
          "v-slider-track__tick--first": A.value === m.value,
          "v-slider-track__tick--last": A.value === p.value
        }],
        style: {
          [x.value]: P
        }
      }, [(A.label || n["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((Y = n["tick-label"]) == null ? void 0 : Y.call(n, {
        tick: A,
        index: T
      })) ?? A.label])]);
    }) : []);
    return Z(() => u("div", {
      class: ["v-slider-track", g.value, e.class],
      style: [{
        "--v-slider-track-size": Q(f.value),
        "--v-slider-tick-size": Q(o.value)
      }, e.style]
    }, [u("div", {
      class: ["v-slider-track__background", _.value, {
        "v-slider-track__background--opacity": !!l.value || !d.value
      }],
      style: {
        ...b.value,
        ...w.value
      }
    }, null), u("div", {
      class: ["v-slider-track__fill", k.value],
      style: {
        ...C.value,
        ...S.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [O.value])])), {};
  }
}), xf = L({
  ...Oi(),
  ...kf(),
  ...ma(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), Ws = z()({
  name: "VSlider",
  props: xf(),
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
    } = Ut(), s = bf(e), r = fe(e, "modelValue", void 0, (V) => s.roundValue(V ?? s.min.value)), {
      min: o,
      max: c,
      mousePressed: d,
      roundValue: f,
      onSliderMousedown: v,
      onSliderTouchstart: m,
      trackContainerRef: p,
      position: y,
      hasLabels: g,
      readonly: k
    } = _f({
      props: e,
      steps: s,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (V) => {
        let {
          value: b
        } = V;
        const M = f(b);
        r.value = M, a("end", M);
      },
      onSliderMove: (V) => {
        let {
          value: b
        } = V;
        return r.value = f(b);
      },
      getActiveThumb: () => {
        var V;
        return (V = l.value) == null ? void 0 : V.$el;
      }
    }), {
      isFocused: S,
      focus: _,
      blur: w
    } = va(e), x = h(() => y(r.value));
    return Z(() => {
      const V = en.filterProps(e), b = !!(e.label || n.label || n.prepend);
      return u(en, B({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || g.value,
          "v-slider--focused": S.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, V, {
        focused: S.value
      }), {
        ...n,
        prepend: b ? (M) => {
          var C, O;
          return u(pe, null, [((C = n.label) == null ? void 0 : C.call(n, M)) ?? (e.label ? u(Mi, {
            id: M.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (O = n.prepend) == null ? void 0 : O.call(n, M)]);
        } : void 0,
        default: (M) => {
          let {
            id: C,
            messagesId: O
          } = M;
          return u("div", {
            class: "v-slider__container",
            onMousedown: k.value ? void 0 : v,
            onTouchstartPassive: k.value ? void 0 : m
          }, [u("input", {
            id: C.value,
            name: e.name || C.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(Vf, {
            ref: p,
            start: 0,
            stop: x.value
          }, {
            "tick-label": n["tick-label"]
          }), u(wf, {
            ref: l,
            "aria-describedby": O.value,
            focused: S.value,
            min: o.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (D) => r.value = D,
            position: x.value,
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
}), Pf = L({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...ie()
}, "VColorPickerPreview"), Mf = St({
  name: "VColorPickerPreview",
  props: Pf(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = new AbortController();
    Qu(() => a.abort());
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
const Df = {
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
}, Of = {
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
}, If = {
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
}, Tf = {
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
}, Af = {
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
}, Ef = {
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
}, Lf = {
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
}, Ff = {
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
}, Rf = {
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
}, Nf = {
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
}, Yf = {
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
}, Bf = {
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
}, $f = {
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
}, Wf = {
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
}, Uf = {
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
}, Hf = {
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
}, zf = {
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
}, jf = {
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
}, Gf = {
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
}, qf = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Kf = {
  red: Df,
  pink: Of,
  purple: If,
  deepPurple: Tf,
  indigo: Af,
  blue: Ef,
  lightBlue: Lf,
  cyan: Ff,
  teal: Rf,
  green: Nf,
  lightGreen: Yf,
  lime: Bf,
  yellow: $f,
  amber: Wf,
  orange: Uf,
  deepOrange: Hf,
  brown: zf,
  blueGrey: jf,
  grey: Gf,
  shades: qf
}, Zf = L({
  swatches: {
    type: Array,
    default: () => Xf(Kf)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...ie()
}, "VColorPickerSwatches");
function Xf(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const Jf = St({
  name: "VColorPickerSwatches",
  props: Zf(),
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
        maxHeight: Q(e.maxHeight)
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
        color: Yc(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
});
const Li = L({
  color: String,
  ...yn(),
  ...ie(),
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
    } = Ue(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = vt(q(e, "color")), {
      borderClasses: s
    } = pn(e), {
      dimensionStyles: r
    } = Yt(e), {
      elevationClasses: o
    } = Wt(e), {
      locationStyles: c
    } = da(e), {
      positionClasses: d
    } = rl(e), {
      roundedClasses: f
    } = lt(e);
    return Z(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, s.value, o.value, d.value, f.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, n)), {};
  }
}), Qf = L({
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
}, "VColorPicker"), ev = St({
  name: "VColorPicker",
  props: Qf(),
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
    }, (s) => s ? cf(s, e.modelValue) : null), {
      rtlClasses: l
    } = Ut(), i = (s) => {
      a.value = s, n.value = s;
    };
    return We(() => {
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
        default: () => [!e.hideCanvas && u(nf, {
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
        }, [!e.hideSliders && u(Mf, {
          key: "preview",
          color: a.value,
          "onUpdate:color": i,
          hideAlpha: !t.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(gf, {
          key: "edit",
          modes: e.modes,
          mode: t.value,
          "onUpdate:mode": (r) => t.value = r,
          color: a.value,
          "onUpdate:color": i,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(Jf, {
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
function tv(e, t) {
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
  static: lv,
  // specific viewport position, usually centered
  connected: sv
  // connected to a certain element
}, nv = L({
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
function av(e, t) {
  const n = N({}), a = N();
  $e && mn(() => !!(t.isActive.value && e.locationStrategy), (i) => {
    var s, r;
    G(() => e.locationStrategy, i), qe(() => {
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
function lv() {
}
function iv(e, t) {
  t ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const n = ki(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function sv(e, t, n) {
  (Array.isArray(e.target.value) || zc(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = pi(() => {
    const p = zl(t.location, e.isRtl.value), y = t.origin === "overlap" ? p : t.origin === "auto" ? Ol(p) : zl(t.origin, e.isRtl.value);
    return p.side === y.side && p.align === Il(y).align ? {
      preferredAnchor: ys(p),
      preferredOrigin: ys(y)
    } : {
      preferredAnchor: p,
      preferredOrigin: y
    };
  }), [s, r, o, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => h(() => {
    const y = parseFloat(t[p]);
    return isNaN(y) ? 1 / 0 : y;
  })), d = h(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const p = t.offset.split(" ").map(parseFloat);
      return p.length < 2 && p.push(0), p;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let f = !1;
  const v = new ResizeObserver(() => {
    f && m();
  });
  G([e.target, e.contentEl], (p, y) => {
    let [g, k] = p, [S, _] = y;
    S && !Array.isArray(S) && v.unobserve(S), g && !Array.isArray(g) && v.observe(g), _ && v.unobserve(_), k && v.observe(k);
  }, {
    immediate: !0
  }), qe(() => {
    v.disconnect();
  });
  function m() {
    if (f = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => f = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const p = xr(e.target.value), y = iv(e.contentEl.value, e.isRtl.value), g = Ha(e.contentEl.value), k = 12;
    g.length || (g.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = g.reduce((D, A) => {
      const T = A.getBoundingClientRect(), P = new on({
        x: A === document.documentElement ? 0 : T.x,
        y: A === document.documentElement ? 0 : T.y,
        width: A.clientWidth,
        height: A.clientHeight
      });
      return D ? new on({
        x: Math.max(D.left, P.left),
        y: Math.max(D.top, P.top),
        width: Math.min(D.right, P.right) - Math.max(D.left, P.left),
        height: Math.min(D.bottom, P.bottom) - Math.max(D.top, P.top)
      }) : P;
    }, void 0);
    S.x += k, S.y += k, S.width -= k * 2, S.height -= k * 2;
    let _ = {
      anchor: l.value,
      origin: i.value
    };
    function w(D) {
      const A = new on(y), T = Us(D.anchor, p), P = Us(D.origin, A);
      let {
        x: Y,
        y: X
      } = tv(T, P);
      switch (D.anchor.side) {
        case "top":
          X -= d.value[0];
          break;
        case "bottom":
          X += d.value[0];
          break;
        case "left":
          Y -= d.value[0];
          break;
        case "right":
          Y += d.value[0];
          break;
      }
      switch (D.anchor.align) {
        case "top":
          X -= d.value[1];
          break;
        case "bottom":
          X += d.value[1];
          break;
        case "left":
          Y -= d.value[1];
          break;
        case "right":
          Y += d.value[1];
          break;
      }
      return A.x += Y, A.y += X, A.width = Math.min(A.width, o.value), A.height = Math.min(A.height, c.value), {
        overflows: ks(A, S),
        x: Y,
        y: X
      };
    }
    let x = 0, V = 0;
    const b = {
      x: 0,
      y: 0
    }, M = {
      x: !1,
      y: !1
    };
    let C = -1;
    for (; ; ) {
      if (C++ > 10) {
        Oc("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: D,
        y: A,
        overflows: T
      } = w(_);
      x += D, V += A, y.x += D, y.y += A;
      {
        const P = ps(_.anchor), Y = T.x.before || T.x.after, X = T.y.before || T.y.after;
        let te = !1;
        if (["x", "y"].forEach((I) => {
          if (I === "x" && Y && !M.x || I === "y" && X && !M.y) {
            const E = {
              anchor: {
                ..._.anchor
              },
              origin: {
                ..._.origin
              }
            }, H = I === "x" ? P === "y" ? Il : Ol : P === "y" ? Ol : Il;
            E.anchor = H(E.anchor), E.origin = H(E.origin);
            const {
              overflows: J
            } = w(E);
            (J[I].before <= T[I].before && J[I].after <= T[I].after || J[I].before + J[I].after < (T[I].before + T[I].after) / 2) && (_ = E, te = M[I] = !0);
          }
        }), te)
          continue;
      }
      T.x.before && (x += T.x.before, y.x += T.x.before), T.x.after && (x -= T.x.after, y.x -= T.x.after), T.y.before && (V += T.y.before, y.y += T.y.before), T.y.after && (V -= T.y.after, y.y -= T.y.after);
      {
        const P = ks(y, S);
        b.x = S.width - P.x.before - P.x.after, b.y = S.height - P.y.before - P.y.after, x += P.x.before, y.x += P.x.before, V += P.y.before, y.y += P.y.before;
      }
      break;
    }
    const O = ps(_.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${_.anchor.side} ${_.anchor.align}`,
      transformOrigin: `${_.origin.side} ${_.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: Q(El(V)),
      left: e.isRtl.value ? void 0 : Q(El(x)),
      right: e.isRtl.value ? Q(El(-x)) : void 0,
      minWidth: Q(O === "y" ? Math.min(s.value, p.width) : s.value),
      maxWidth: Q(Hs(rt(b.x, s.value === 1 / 0 ? 0 : s.value, o.value))),
      maxHeight: Q(Hs(rt(b.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: b,
      contentBox: y
    };
  }
  return G(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => m()), He(() => {
    const p = m();
    if (!p)
      return;
    const {
      available: y,
      contentBox: g
    } = p;
    g.height > y.y && requestAnimationFrame(() => {
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
function rv(e) {
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
  close: cv,
  block: dv,
  reposition: fv
}, ov = L({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ea
  }
}, "VOverlay-scroll-strategies");
function uv(e, t) {
  if (!$e)
    return;
  let n;
  je(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = fi(), await He(), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Ea[e.scrollStrategy]) == null || a.call(Ea, t, e, n);
    }));
  }), qe(() => {
    n == null || n.stop();
  });
}
function cv(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Do(e.targetEl.value ?? e.contentEl.value, t);
}
function dv(e, t) {
  var s;
  const n = (s = e.root.value) == null ? void 0 : s.offsetParent, a = [.../* @__PURE__ */ new Set([...Ha(e.targetEl.value, t.contained ? n : void 0), ...Ha(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => _i(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, o) => {
    r.style.setProperty("--v-body-scroll-x", Q(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", Q(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", Q(l)), r.classList.add("v-overlay-scroll-blocked");
  }), qe(() => {
    a.forEach((r, o) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));
      r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function fv(e, t, n) {
  let a = !1, l = -1, i = -1;
  function s(r) {
    rv(() => {
      var d, f;
      const o = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, r), a = (performance.now() - o) / (1e3 / 60) > 2;
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
  }), qe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(l);
  });
}
function Do(e, t) {
  const n = [document, ...Ha(e)];
  n.forEach((a) => {
    a.addEventListener("scroll", t, {
      passive: !0
    });
  }), qe(() => {
    n.forEach((a) => {
      a.removeEventListener("scroll", t);
    });
  });
}
const ei = Symbol.for("vuetify:v-menu"), vv = L({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function mv(e, t) {
  let n = () => {
  };
  function a(s) {
    n == null || n();
    const r = Number(s ? e.openDelay : e.closeDelay);
    return new Promise((o) => {
      n = kc(r, () => {
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
const hv = L({
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
  ...vv()
}, "VOverlay-activator");
function gv(e, t) {
  let {
    isActive: n,
    isTop: a
  } = t;
  const l = Fe("useActivator"), i = N();
  let s = !1, r = !1, o = !0;
  const c = h(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = h(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: v
  } = mv(e, (b) => {
    b === (e.openOnHover && s || c.value && r) && !(e.openOnHover && n.value && !a.value) && (n.value !== b && (o = !0), n.value = b);
  }), m = N(), p = {
    onClick: (b) => {
      b.stopPropagation(), i.value = b.currentTarget || b.target, n.value || (m.value = [b.clientX, b.clientY]), n.value = !n.value;
    },
    onMouseenter: (b) => {
      var M;
      (M = b.sourceCapabilities) != null && M.firesTouchEvents || (s = !0, i.value = b.currentTarget || b.target, f());
    },
    onMouseleave: (b) => {
      s = !1, v();
    },
    onFocus: (b) => {
      Wa(b.target, ":focus-visible") !== !1 && (r = !0, b.stopPropagation(), i.value = b.currentTarget || b.target, f());
    },
    onBlur: (b) => {
      r = !1, b.stopPropagation(), v();
    }
  }, y = h(() => {
    const b = {};
    return d.value && (b.onClick = p.onClick), e.openOnHover && (b.onMouseenter = p.onMouseenter, b.onMouseleave = p.onMouseleave), c.value && (b.onFocus = p.onFocus, b.onBlur = p.onBlur), b;
  }), g = h(() => {
    const b = {};
    if (e.openOnHover && (b.onMouseenter = () => {
      s = !0, f();
    }, b.onMouseleave = () => {
      s = !1, v();
    }), c.value && (b.onFocusin = () => {
      r = !0, f();
    }, b.onFocusout = () => {
      r = !1, v();
    }), e.closeOnContentClick) {
      const M = Te(ei, null);
      b.onClick = () => {
        n.value = !1, M == null || M.closeParents();
      };
    }
    return b;
  }), k = h(() => {
    const b = {};
    return e.openOnHover && (b.onMouseenter = () => {
      o && (s = !0, o = !1, f());
    }, b.onMouseleave = () => {
      s = !1, v();
    }), b;
  });
  G(a, (b) => {
    b && (e.openOnHover && !s && (!c.value || !r) || c.value && !r && (!e.openOnHover || !s)) && (n.value = !1);
  }), G(n, (b) => {
    b || setTimeout(() => {
      m.value = void 0;
    });
  }, {
    flush: "post"
  });
  const S = N();
  je(() => {
    S.value && He(() => {
      i.value = Na(S.value);
    });
  });
  const _ = N(), w = h(() => e.target === "cursor" && m.value ? m.value : _.value ? Na(_.value) : Oo(e.target, l) || i.value), x = h(() => Array.isArray(w.value) ? void 0 : w.value);
  let V;
  return G(() => !!e.activator, (b) => {
    b && $e ? (V = fi(), V.run(() => {
      yv(e, l, {
        activatorEl: i,
        activatorEvents: y
      });
    })) : V && V.stop();
  }, {
    flush: "post",
    immediate: !0
  }), qe(() => {
    V == null || V.stop();
  }), {
    activatorEl: i,
    activatorRef: S,
    target: w,
    targetEl: x,
    targetRef: _,
    activatorEvents: y,
    contentEvents: g,
    scrimEvents: k
  };
}
function yv(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  G(() => e.activator, (o, c) => {
    if (c && o !== c) {
      const d = r(c);
      d && s(d);
    }
    o && He(() => i());
  }, {
    immediate: !0
  }), G(() => e.activatorProps, () => {
    i();
  }), qe(() => {
    s();
  });
  function i() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    o && _c(o, B(l.value, c));
  }
  function s() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    o && Sc(o, B(l.value, c));
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
function pv() {
  if (!$e)
    return re(!1);
  const {
    ssr: e
  } = oo();
  if (e) {
    const t = re(!1);
    return We(() => {
      t.value = !0;
    }), t;
  } else
    return re(!0);
}
const kv = L({
  eager: Boolean
}, "lazy");
function bv(e, t) {
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
function _v(e, t, n) {
  const a = Fe("useStack"), l = !n, i = Te(js, void 0), s = En({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ge(js, s);
  const r = re(+t.value);
  mn(e, () => {
    var f;
    const d = (f = zn.at(-1)) == null ? void 0 : f[1];
    r.value = d ? d + 10 : +t.value, l && zn.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), qe(() => {
      if (l) {
        const v = tn(zn).findIndex((m) => m[0] === a.uid);
        zn.splice(v, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const o = re(!0);
  l && je(() => {
    var f;
    const d = ((f = zn.at(-1)) == null ? void 0 : f[0]) === a.uid;
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
function Sv(e) {
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
function wv() {
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
  return (typeof t.value == "object" && t.value.closeConditional || wv)(e);
}
function Cv(e, t, n) {
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
    const n = (l) => Cv(l, e, t), a = (l) => {
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
function Vv(e) {
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
  ...hv(),
  ...ie(),
  ...Nt(),
  ...kv(),
  ...nv(),
  ...ov(),
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
    } = Sv(h(() => e.attach || e.contained)), {
      themeClasses: o
    } = Ue(e), {
      rtlClasses: c,
      isRtl: d
    } = Ut(), {
      hasContent: f,
      onAfterLeave: v
    } = bv(e, s), m = vt(h(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: p,
      localTop: y,
      stackStyles: g
    } = _v(s, q(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: k,
      activatorRef: S,
      target: _,
      targetEl: w,
      targetRef: x,
      activatorEvents: V,
      contentEvents: b,
      scrimEvents: M
    } = gv(e, {
      isActive: s,
      isTop: y
    }), {
      dimensionStyles: C
    } = Yt(e), O = pv(), {
      scopeId: D
    } = vl();
    G(() => e.disabled, (j) => {
      j && (s.value = !1);
    });
    const A = N(), T = N(), {
      contentStyles: P,
      updateLocation: Y
    } = av(e, {
      isRtl: d,
      contentEl: T,
      target: _,
      isActive: s
    });
    uv(e, {
      root: A,
      contentEl: T,
      targetEl: w,
      isActive: s,
      updateLocation: Y
    });
    function X(j) {
      l("click:outside", j), e.persistent ? J() : s.value = !1;
    }
    function te() {
      return s.value && p.value;
    }
    $e && G(s, (j) => {
      j ? window.addEventListener("keydown", I) : window.removeEventListener("keydown", I);
    }, {
      immediate: !0
    }), Ae(() => {
      $e && window.removeEventListener("keydown", I);
    });
    function I(j) {
      var oe, ge;
      j.key === "Escape" && p.value && (e.persistent ? J() : (s.value = !1, (oe = T.value) != null && oe.contains(document.activeElement) && ((ge = k.value) == null || ge.focus())));
    }
    const E = vd();
    mn(() => e.closeOnBack, () => {
      md(E, (j) => {
        p.value && s.value ? (j(!1), e.persistent ? J() : s.value = !1) : j();
      });
    });
    const H = N();
    G(() => s.value && (e.absolute || e.contained) && r.value == null, (j) => {
      if (j) {
        const oe = Lr(A.value);
        oe && oe !== document.scrollingElement && (H.value = oe.scrollTop);
      }
    });
    function J() {
      e.noClickAnimation || T.value && xn(T.value, [{
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
      v(), l("afterLeave");
    }
    return Z(() => {
      var j;
      return u(pe, null, [(j = n.activator) == null ? void 0 : j.call(n, {
        isActive: s.value,
        props: B({
          ref: S,
          targetRef: x
        }, V.value, e.activatorProps)
      }), !e.disabled && O.value && f.value && u(ec, {
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
            top: Q(H.value)
          }, e.style],
          ref: A
        }, D, a), [u(Vv, B({
          color: m,
          modelValue: !!e.scrim && s.value
        }, M.value), null), u(It, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: _.value,
          onAfterLeave: he
        }, {
          default: () => {
            var oe;
            return [Ve(u("div", B({
              ref: T,
              class: ["v-overlay__content", e.contentClass],
              style: [C.value, P.value]
            }, b.value, e.contentProps), [(oe = n.default) == null ? void 0 : oe.call(n, {
              isActive: s
            })]), [[ut, s.value], [gt("click-outside"), {
              handler: X,
              closeConditional: te,
              include: () => [k.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: k,
      target: _,
      animateClick: J,
      contentEl: T,
      globalTop: p,
      localTop: y,
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
            const f = d.shift(), v = Fl(f.value, i);
            if (v)
              return v;
            const m = f.value && f.value[Ll];
            m && d.push(...m);
          }
        }
      }
    }
  });
}
const xv = L({
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
  props: xv(),
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
    Ge(ei, {
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
    async function d(y) {
      var S, _, w;
      const g = y.relatedTarget, k = y.target;
      await He(), a.value && g !== k && ((S = r.value) != null && S.contentEl) && // We're the topmost menu
      ((_ = r.value) != null && _.globalTop) && // It isn't the document or the menu body
      ![document, r.value.contentEl].includes(k) && // It isn't inside the menu body
      !r.value.contentEl.contains(k) && ((w = Ba(r.value.contentEl)[0]) == null || w.focus());
    }
    G(a, (y) => {
      y ? (o == null || o.register(), document.addEventListener("focusin", d, {
        once: !0
      })) : (o == null || o.unregister(), document.removeEventListener("focusin", d));
    });
    function f() {
      o == null || o.closeParents();
    }
    function v(y) {
      var g, k, S;
      e.disabled || y.key === "Tab" && (wr(Ba((g = r.value) == null ? void 0 : g.contentEl, !1), y.shiftKey ? "prev" : "next", (w) => w.tabIndex >= 0) || (a.value = !1, (S = (k = r.value) == null ? void 0 : k.activatorEl) == null || S.focus()));
    }
    function m(y) {
      var k;
      if (e.disabled)
        return;
      const g = (k = r.value) == null ? void 0 : k.contentEl;
      g && a.value ? y.key === "ArrowDown" ? (y.preventDefault(), $a(g, "next")) : y.key === "ArrowUp" && (y.preventDefault(), $a(g, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (a.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => m(y))));
    }
    const p = h(() => B({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": s.value,
      onKeydown: m
    }, e.activatorProps));
    return Z(() => {
      const y = An.filterProps(e);
      return u(An, B({
        ref: r,
        class: ["v-menu", e.class],
        style: e.style
      }, y, {
        modelValue: a.value,
        "onUpdate:modelValue": (g) => a.value = g,
        absolute: !0,
        activatorProps: p.value,
        "onClick:outside": f,
        onKeydown: v
      }, l), {
        activator: n.activator,
        default: function() {
          for (var g = arguments.length, k = new Array(g), S = 0; S < g; S++)
            k[S] = arguments[S];
          return u(xe, {
            root: "VMenu"
          }, {
            default: () => {
              var _;
              return [(_ = n.default) == null ? void 0 : _.call(n, ...k)];
            }
          });
        }
      });
    }), $n({
      id: s,
      ΨopenChildren: c
    }, r);
  }
}), Pv = /* @__PURE__ */ Le({
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
    function c(p) {
      l.value.value = p, l.value.prepend_inner_icon.color = p, a("update:modelValue", l.value.value);
    }
    function d() {
      l.value.validate(), a("validated", l.value.name);
    }
    function f() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function v() {
      r.value = !r.value;
    }
    const m = G(s.value, (p) => {
      c(p.value);
    });
    return Ae(() => {
      m();
    }), We(() => {
      var p;
      (p = l.value) == null || p.isLoading(!1), !ne(l.value) && !ne(l.value.prepend_inner_icon) && (l.value.prepend_inner_icon.color = s.value.value);
    }), (p, y) => (ee(), se(Ne, { "no-gutters": "" }, {
      default: R(() => [
        u(hl, B({
          modelValue: r.value,
          "onUpdate:modelValue": y[3] || (y[3] = (g) => r.value = g)
        }, i.value.props()), {
          activator: R(({ props: g }) => {
            var k;
            return [
              u(ha, B({
                field: l.value,
                "onUpdate:field": y[0] || (y[0] = (S) => l.value = S)
              }, { ...g, ...(k = l.value) == null ? void 0 : k.props() }, {
                fields: o.value,
                onUpdated: c,
                onValidated: d,
                onInvalidated: f,
                "onClick:prependInner": v,
                "onClick:appendInner": v
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
                      u(ev, B({
                        modelValue: s.value.value,
                        "onUpdate:modelValue": y[1] || (y[1] = (k) => s.value.value = k),
                        mode: s.value.mode,
                        "onUpdate:mode": y[2] || (y[2] = (k) => s.value.mode = k)
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
function Mv(e) {
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
function ze(e) {
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
function Dv() {
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
function le(e) {
  return e._pf == null && (e._pf = Dv()), e._pf;
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
  if (a && (t = le(e), n = ti.call(t.parsedDateParts, function(l) {
    return l != null;
  }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = a;
  else
    return a;
  return e._isValid;
}
function gl(e) {
  var t = Vt(NaN);
  return e != null ? Kt(le(t), e) : le(t).userInvalidated = !0, t;
}
var qs = $.momentProperties = [], Rl = !1;
function Ni(e, t) {
  var n, a, l, i = qs.length;
  if (ze(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ze(t._i) || (e._i = t._i), ze(t._f) || (e._f = t._f), ze(t._l) || (e._l = t._l), ze(t._strict) || (e._strict = t._strict), ze(t._tzm) || (e._tzm = t._tzm), ze(t._isUTC) || (e._isUTC = t._isUTC), ze(t._offset) || (e._offset = t._offset), ze(t._pf) || (e._pf = le(t)), ze(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      a = qs[n], l = t[a], ze(l) || (e[a] = l);
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
function Ov(e) {
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
var Iv = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Tv(e, t, n) {
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
function Av(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Ev(e) {
  var t = e.match(Bi), n, a;
  for (n = 0, a = t.length; n < a; n++)
    Dn[t[n]] ? t[n] = Dn[t[n]] : t[n] = Av(t[n]);
  return function(l) {
    var i = "", s;
    for (s = 0; s < a; s++)
      i += xt(t[s]) ? t[s].call(l, e) : t[s];
    return i;
  };
}
function La(e, t) {
  return e.isValid() ? (t = No(t, e.localeData()), Nl[t] = Nl[t] || Ev(t), Nl[t](e)) : e.localeData().invalidDate();
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
var Lv = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Fv(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Bi).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var Rv = "Invalid date";
function Nv() {
  return this._invalidDate;
}
var Yv = "%d", Bv = /\d{1,2}/;
function $v(e) {
  return this._ordinal.replace("%d", e);
}
var Wv = {
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
function Uv(e, t, n, a) {
  var l = this._relativeTime[n];
  return xt(l) ? l(e, t, n, a) : l.replace(/%d/i, e);
}
function Hv(e, t) {
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
var zv = {
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
function jv(e) {
  var t = [], n;
  for (n in e)
    ve(e, n) && t.push({ unit: n, priority: zv[n] });
  return t.sort(function(a, l) {
    return a.priority - l.priority;
  }), t;
}
var Yo = /\d/, et = /\d\d/, Bo = /\d{3}/, Wi = /\d{4}/, yl = /[+-]?\d{6}/, _e = /\d\d?/, $o = /\d\d\d\d?/, Wo = /\d\d\d\d\d\d?/, pl = /\d{1,3}/, Ui = /\d{1,4}/, kl = /[+-]?\d{1,6}/, Wn = /\d+/, bl = /[+-]?\d+/, Gv = /Z|[+-]\d\d:?\d\d/gi, _l = /Z|[+-]\d\d(?::?\d\d)?/gi, qv = /[+-]?\d+(\.\d{1,3})?/, pa = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Un = /^[1-9]\d?/, Hi = /^([1-9]\d|\d)/, qa;
qa = {};
function W(e, t, n) {
  qa[e] = xt(t) ? t : function(a, l) {
    return a && n ? n : t;
  };
}
function Kv(e, t) {
  return ve(qa, e) ? qa[e](t._strict, t._locale) : new RegExp(Zv(e));
}
function Zv(e) {
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
function ke(e, t) {
  var n, a = t, l;
  for (typeof e == "string" && (e = [e]), Rt(t) && (a = function(i, s) {
    s[t] = ue(i);
  }), l = e.length, n = 0; n < l; n++)
    li[e[n]] = a;
}
function ka(e, t) {
  ke(e, function(n, a, l, i) {
    l._w = l._w || {}, t(n, l._w, l, i);
  });
}
function Xv(e, t, n) {
  t != null && ve(li, e) && li[e](t, n._a, n, e);
}
function Sl(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var Be = 0, Tt = 1, bt = 2, Ie = 3, ot = 4, At = 5, sn = 6, Jv = 7, Qv = 8;
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
W("Y", bl);
W("YY", _e, et);
W("YYYY", Ui, Wi);
W("YYYYY", kl, yl);
W("YYYYYY", kl, yl);
ke(["YYYYY", "YYYYYY"], Be);
ke("YYYY", function(e, t) {
  t[Be] = e.length === 2 ? $.parseTwoDigitYear(e) : ue(e);
});
ke("YY", function(e, t) {
  t[Be] = $.parseTwoDigitYear(e);
});
ke("Y", function(e, t) {
  t[Be] = parseInt(e, 10);
});
function qn(e) {
  return Sl(e) ? 366 : 365;
}
$.parseTwoDigitYear = function(e) {
  return ue(e) + (ue(e) > 68 ? 1900 : 2e3);
};
var Uo = Hn("FullYear", !0);
function em() {
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
function tm(e) {
  return e = st(e), xt(this[e]) ? this[e]() : this;
}
function nm(e, t) {
  if (typeof e == "object") {
    e = $i(e);
    var n = jv(e), a, l = n.length;
    for (a = 0; a < l; a++)
      this[n[a].unit](e[n[a].unit]);
  } else if (e = st(e), xt(this[e]))
    return this[e](t);
  return this;
}
function am(e, t) {
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
  var n = am(t, 12);
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
ke(["M", "MM"], function(e, t) {
  t[Tt] = ue(e) - 1;
});
ke(["MMM", "MMMM"], function(e, t, n, a) {
  var l = n._locale.monthsParse(e, a, n._strict);
  l != null ? t[Tt] = l : le(n).invalidMonth = e;
});
var lm = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), zo = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), jo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, im = pa, sm = pa;
function rm(e, t) {
  return e ? mt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || jo).test(t) ? "format" : "standalone"][e.month()] : mt(this._months) ? this._months : this._months.standalone;
}
function om(e, t) {
  return e ? mt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[jo.test(t) ? "format" : "standalone"][e.month()] : mt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function um(e, t, n) {
  var a, l, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      i = Vt([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : null) : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : null) : t === "MMM" ? (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : null)) : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : null));
}
function cm(e, t, n) {
  var a, l, i;
  if (this._monthsParseExact)
    return um.call(this, e, t, n);
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
function dm() {
  return zi(this.year(), this.month());
}
function fm(e) {
  return this._monthsParseExact ? (ve(this, "_monthsRegex") || Ko.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (ve(this, "_monthsShortRegex") || (this._monthsShortRegex = im), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function vm(e) {
  return this._monthsParseExact ? (ve(this, "_monthsRegex") || Ko.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (ve(this, "_monthsRegex") || (this._monthsRegex = sm), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
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
function mm(e, t, n, a, l, i, s) {
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
ka(
  ["w", "ww", "W", "WW"],
  function(e, t, n, a) {
    t[a.substr(0, 1)] = ue(e);
  }
);
function hm(e) {
  return na(e, this._week.dow, this._week.doy).week;
}
var gm = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function ym() {
  return this._week.dow;
}
function pm() {
  return this._week.doy;
}
function km(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function bm(e) {
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
ka(["dd", "ddd", "dddd"], function(e, t, n, a) {
  var l = n._locale.weekdaysParse(e, a, n._strict);
  l != null ? t.d = l : le(n).invalidWeekday = e;
});
ka(["d", "e", "E"], function(e, t, n, a) {
  t[a] = ue(e);
});
function _m(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Sm(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function ji(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var wm = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Xo = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Cm = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Vm = pa, xm = pa, Pm = pa;
function Mm(e, t) {
  var n = mt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? ji(n, this._week.dow) : e ? n[e.day()] : n;
}
function Dm(e) {
  return e === !0 ? ji(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Om(e) {
  return e === !0 ? ji(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Im(e, t, n) {
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
function Tm(e, t, n) {
  var a, l, i;
  if (this._weekdaysParseExact)
    return Im.call(this, e, t, n);
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
function Am(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = ea(this, "Day");
  return e != null ? (e = _m(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Em(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Lm(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Sm(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Fm(e) {
  return this._weekdaysParseExact ? (ve(this, "_weekdaysRegex") || Gi.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (ve(this, "_weekdaysRegex") || (this._weekdaysRegex = Vm), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Rm(e) {
  return this._weekdaysParseExact ? (ve(this, "_weekdaysRegex") || Gi.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (ve(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = xm), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Nm(e) {
  return this._weekdaysParseExact ? (ve(this, "_weekdaysRegex") || Gi.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (ve(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Pm), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Gi() {
  function e(d, f) {
    return f.length - d.length;
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
function Ym() {
  return this.hours() || 24;
}
K("H", ["HH", 2], 0, "hour");
K("h", ["hh", 2], 0, qi);
K("k", ["kk", 2], 0, Ym);
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
ke(["H", "HH"], Ie);
ke(["k", "kk"], function(e, t, n) {
  var a = ue(e);
  t[Ie] = a === 24 ? 0 : a;
});
ke(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
ke(["h", "hh"], function(e, t, n) {
  t[Ie] = ue(e), le(n).bigHour = !0;
});
ke("hmm", function(e, t, n) {
  var a = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a)), le(n).bigHour = !0;
});
ke("hmmss", function(e, t, n) {
  var a = e.length - 4, l = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a, 2)), t[At] = ue(e.substr(l)), le(n).bigHour = !0;
});
ke("Hmm", function(e, t, n) {
  var a = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a));
});
ke("Hmmss", function(e, t, n) {
  var a = e.length - 4, l = e.length - 2;
  t[Ie] = ue(e.substr(0, a)), t[ot] = ue(e.substr(a, 2)), t[At] = ue(e.substr(l));
});
function Bm(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var $m = /[ap]\.?m?\.?/i, Wm = Hn("Hours", !0);
function Um(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var eu = {
  calendar: Iv,
  longDateFormat: Lv,
  invalidDate: Rv,
  ordinal: Yv,
  dayOfMonthOrdinalParse: Bv,
  relativeTime: Wv,
  months: lm,
  monthsShort: zo,
  week: gm,
  weekdays: wm,
  weekdaysMin: Cm,
  weekdaysShort: Xo,
  meridiemParse: $m
}, Se = {}, jn = {}, aa;
function Hm(e, t) {
  var n, a = Math.min(e.length, t.length);
  for (n = 0; n < a; n += 1)
    if (e[n] !== t[n])
      return n;
  return a;
}
function Xs(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function zm(e) {
  for (var t = 0, n, a, l, i; t < e.length; ) {
    for (i = Xs(e[t]).split("-"), n = i.length, a = Xs(e[t + 1]), a = a ? a.split("-") : null; n > 0; ) {
      if (l = wl(i.slice(0, n).join("-")), l)
        return l;
      if (a && a.length >= n && Hm(i, a) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return aa;
}
function jm(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function wl(e) {
  var t = null, n;
  if (Se[e] === void 0 && typeof module < "u" && module && module.exports && jm(e))
    try {
      t = aa._abbr, n = require, n("./locale/" + e), Jt(t);
    } catch {
      Se[e] = null;
    }
  return Se[e];
}
function Jt(e, t) {
  var n;
  return e && (ze(t) ? n = Ht(e) : n = Ki(e, t), n ? aa = n : typeof console < "u" && console.warn && console.warn(
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
function Gm(e, t) {
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
  return zm(e);
}
function qm() {
  return ai(Se);
}
function Zi(e) {
  var t, n = e._a;
  return n && le(e).overflow === -2 && (t = n[Tt] < 0 || n[Tt] > 11 ? Tt : n[bt] < 1 || n[bt] > zi(n[Be], n[Tt]) ? bt : n[Ie] < 0 || n[Ie] > 24 || n[Ie] === 24 && (n[ot] !== 0 || n[At] !== 0 || n[sn] !== 0) ? Ie : n[ot] < 0 || n[ot] > 59 ? ot : n[At] < 0 || n[At] > 59 ? At : n[sn] < 0 || n[sn] > 999 ? sn : -1, le(e)._overflowDayOfYear && (t < Be || t > bt) && (t = bt), le(e)._overflowWeeks && t === -1 && (t = Jv), le(e)._overflowWeekday && t === -1 && (t = Qv), le(e).overflow = t), e;
}
var Km = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Zm = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Xm = /Z|[+-]\d\d(?::?\d\d)?/, Da = [
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
], Jm = /^\/?Date\((-?\d+)/i, Qm = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, eh = {
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
  var t, n, a = e._i, l = Km.exec(a) || Zm.exec(a), i, s, r, o, c = Da.length, d = Yl.length;
  if (l) {
    for (le(e).iso = !0, t = 0, n = c; t < n; t++)
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
      if (Xm.exec(l[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (r || "") + (o || ""), Ji(e);
  } else
    e._isValid = !1;
}
function th(e, t, n, a, l, i) {
  var s = [
    nh(e),
    zo.indexOf(t),
    parseInt(n, 10),
    parseInt(a, 10),
    parseInt(l, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function nh(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function ah(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function lh(e, t, n) {
  if (e) {
    var a = Xo.indexOf(e), l = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== l)
      return le(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function ih(e, t, n) {
  if (e)
    return eh[e];
  if (t)
    return 0;
  var a = parseInt(n, 10), l = a % 100, i = (a - l) / 100;
  return i * 60 + l;
}
function nu(e) {
  var t = Qm.exec(ah(e._i)), n;
  if (t) {
    if (n = th(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !lh(t[1], n, e))
      return;
    e._a = n, e._tzm = ih(t[8], t[9], t[10]), e._d = ta.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), le(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function sh(e) {
  var t = Jm.exec(e._i);
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
function rh(e) {
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
    for (l = rh(e), e._w && e._a[bt] == null && e._a[Tt] == null && oh(e), e._dayOfYear != null && (s = Sn(e._a[Be], l[Be]), (e._dayOfYear > qn(s) || e._dayOfYear === 0) && (le(e)._overflowDayOfYear = !0), n = ta(s, 0, e._dayOfYear), e._a[Tt] = n.getUTCMonth(), e._a[bt] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = l[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Ie] === 24 && e._a[ot] === 0 && e._a[At] === 0 && e._a[sn] === 0 && (e._nextDay = !0, e._a[Ie] = 0), e._d = (e._useUTC ? ta : mm).apply(
      null,
      a
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Ie] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (le(e).weekdayMismatch = !0);
  }
}
function oh(e) {
  var t, n, a, l, i, s, r, o, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, n = Sn(
    t.GG,
    e._a[Be],
    na(be(), 1, 4).year
  ), a = Sn(t.W, 1), l = Sn(t.E, 1), (l < 1 || l > 7) && (o = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, c = na(be(), i, s), n = Sn(t.gg, e._a[Be], c.year), a = Sn(t.w, c.week), t.d != null ? (l = t.d, (l < 0 || l > 6) && (o = !0)) : t.e != null ? (l = t.e + i, (t.e < 0 || t.e > 6) && (o = !0)) : l = i), a < 1 || a > Lt(n, i, s) ? le(e)._overflowWeeks = !0 : o != null ? le(e)._overflowWeekday = !0 : (r = Zo(n, a, l, i, s), e._a[Be] = r.year, e._dayOfYear = r.dayOfYear);
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
  e._a = [], le(e).empty = !0;
  var t = "" + e._i, n, a, l, i, s, r = t.length, o = 0, c, d;
  for (l = No(e._f, e._locale).match(Bi) || [], d = l.length, n = 0; n < d; n++)
    i = l[n], a = (t.match(Kv(i, e)) || [])[0], a && (s = t.substr(0, t.indexOf(a)), s.length > 0 && le(e).unusedInput.push(s), t = t.slice(
      t.indexOf(a) + a.length
    ), o += a.length), Dn[i] ? (a ? le(e).empty = !1 : le(e).unusedTokens.push(i), Xv(i, a, e)) : e._strict && !a && le(e).unusedTokens.push(i);
  le(e).charsLeftOver = r - o, t.length > 0 && le(e).unusedInput.push(t), e._a[Ie] <= 12 && le(e).bigHour === !0 && e._a[Ie] > 0 && (le(e).bigHour = void 0), le(e).parsedDateParts = e._a.slice(0), le(e).meridiem = e._meridiem, e._a[Ie] = uh(
    e._locale,
    e._a[Ie],
    e._meridiem
  ), c = le(e).era, c !== null && (e._a[Be] = e._locale.erasConvertYear(c, e._a[Be])), Xi(e), Zi(e);
}
function uh(e, t, n) {
  var a;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (a = e.isPM(n), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function ch(e) {
  var t, n, a, l, i, s, r = !1, o = e._f.length;
  if (o === 0) {
    le(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (l = 0; l < o; l++)
    i = 0, s = !1, t = Ni({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[l], Ji(t), Ri(t) && (s = !0), i += le(t).charsLeftOver, i += le(t).unusedTokens.length * 10, le(t).score = i, r ? i < a && (a = i, n = t) : (a == null || i < a || s) && (a = i, n = t, s && (r = !0));
  Kt(e, n || t);
}
function dh(e) {
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
function fh(e) {
  var t = new ya(Zi(au(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function au(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Ht(e._l), t === null || n === void 0 && t === "" ? gl({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ht(t) ? new ya(Zi(t)) : (ga(t) ? e._d = t : mt(n) ? ch(e) : n ? Ji(e) : vh(e), Ri(e) || (e._d = null), e));
}
function vh(e) {
  var t = e._i;
  ze(t) ? e._d = new Date($.now()) : ga(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? sh(e) : mt(t) ? (e._a = Lo(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), Xi(e)) : dn(t) ? dh(e) : Rt(t) ? e._d = new Date(t) : $.createFromInputFallback(e);
}
function lu(e, t, n, a, l) {
  var i = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (n === !0 || n === !1) && (a = n, n = void 0), (dn(e) && Fi(e) || mt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = l, i._l = n, i._i = e, i._f = t, i._strict = a, fh(i);
}
function be(e, t, n, a) {
  return lu(e, t, n, a, !1);
}
var mh = it(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = be.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : gl();
  }
), hh = it(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = be.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : gl();
  }
);
function iu(e, t) {
  var n, a;
  if (t.length === 1 && mt(t[0]) && (t = t[0]), !t.length)
    return be();
  for (n = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](n)) && (n = t[a]);
  return n;
}
function gh() {
  var e = [].slice.call(arguments, 0);
  return iu("isBefore", e);
}
function yh() {
  var e = [].slice.call(arguments, 0);
  return iu("isAfter", e);
}
var ph = function() {
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
function kh(e) {
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
function bh() {
  return this._isValid;
}
function _h() {
  return pt(NaN);
}
function Cl(e) {
  var t = $i(e), n = t.year || 0, a = t.quarter || 0, l = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, r = t.hour || 0, o = t.minute || 0, c = t.second || 0, d = t.millisecond || 0;
  this._isValid = kh(t), this._milliseconds = +d + c * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  r * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +l + a * 3 + n * 12, this._data = {}, this._locale = Ht(), this._bubble();
}
function Fa(e) {
  return e instanceof Cl;
}
function ii(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Sh(e, t, n) {
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
ke(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = Qi(_l, e);
});
var wh = /([\+\-]|\d\d)/gi;
function Qi(e, t) {
  var n = (t || "").match(e), a, l, i;
  return n === null ? null : (a = n[n.length - 1] || [], l = (a + "").match(wh) || ["-", 0, 0], i = +(l[1] * 60) + ue(l[2]), i === 0 ? 0 : l[0] === "+" ? i : -i);
}
function es(e, t) {
  var n, a;
  return t._isUTC ? (n = t.clone(), a = (ht(e) || ga(e) ? e.valueOf() : be(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), $.updateOffset(n, !1), n) : be(e).local();
}
function si(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
$.updateOffset = function() {
};
function Ch(e, t, n) {
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
      pt(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, $.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : si(this);
}
function Vh(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function xh(e) {
  return this.utcOffset(0, e);
}
function Ph(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(si(this), "m")), this;
}
function Mh() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = Qi(Gv, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Dh(e) {
  return this.isValid() ? (e = e ? be(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Oh() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Ih() {
  if (!ze(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Ni(e, this), e = au(e), e._a ? (t = e._isUTC ? Vt(e._a) : be(e._a), this._isDSTShifted = this.isValid() && Sh(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Th() {
  return this.isValid() ? !this._isUTC : !1;
}
function Ah() {
  return this.isValid() ? this._isUTC : !1;
}
function ru() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Eh = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Lh = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function pt(e, t) {
  var n = e, a = null, l, i, s;
  return Fa(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Rt(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (a = Eh.exec(e)) ? (l = a[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ue(a[bt]) * l,
    h: ue(a[Ie]) * l,
    m: ue(a[ot]) * l,
    s: ue(a[At]) * l,
    ms: ue(ii(a[sn] * 1e3)) * l
    // the millisecond decimal point is included in the match
  }) : (a = Lh.exec(e)) ? (l = a[1] === "-" ? -1 : 1, n = {
    y: an(a[2], l),
    M: an(a[3], l),
    w: an(a[4], l),
    d: an(a[5], l),
    h: an(a[6], l),
    m: an(a[7], l),
    s: an(a[8], l)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (s = Fh(
    be(n.from),
    be(n.to)
  ), n = {}, n.ms = s.milliseconds, n.M = s.months), i = new Cl(n), Fa(e) && ve(e, "_locale") && (i._locale = e._locale), Fa(e) && ve(e, "_isValid") && (i._isValid = e._isValid), i;
}
pt.fn = Cl.prototype;
pt.invalid = _h;
function an(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function Js(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Fh(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = es(t, e), e.isBefore(t) ? n = Js(e, t) : (n = Js(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function ou(e, t) {
  return function(n, a) {
    var l, i;
    return a !== null && !isNaN(+a) && (Ro(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = a, a = i), l = pt(n, a), uu(this, l, e), this;
  };
}
function uu(e, t, n, a) {
  var l = t._milliseconds, i = ii(t._days), s = ii(t._months);
  e.isValid() && (a = a ?? !0, s && Go(e, ea(e, "Month") + s * n), i && Ho(e, "Date", ea(e, "Date") + i * n), l && e._d.setTime(e._d.valueOf() + l * n), a && $.updateOffset(e, i || s));
}
var Rh = ou(1, "add"), Nh = ou(-1, "subtract");
function cu(e) {
  return typeof e == "string" || e instanceof String;
}
function Yh(e) {
  return ht(e) || ga(e) || cu(e) || Rt(e) || $h(e) || Bh(e) || e === null || e === void 0;
}
function Bh(e) {
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
function $h(e) {
  var t = mt(e), n = !1;
  return t && (n = e.filter(function(a) {
    return !Rt(a) && cu(e);
  }).length === 0), t && n;
}
function Wh(e) {
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
function Uh(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function Hh(e, t) {
  arguments.length === 1 && (arguments[0] ? Yh(arguments[0]) ? (e = arguments[0], t = void 0) : Wh(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || be(), a = es(n, this).startOf("day"), l = $.calendarFormat(this, a) || "sameElse", i = t && (xt(t[l]) ? t[l].call(this, n) : t[l]);
  return this.format(
    i || this.localeData().calendar(l, this, be(n))
  );
}
function zh() {
  return new ya(this);
}
function jh(e, t) {
  var n = ht(e) ? e : be(e);
  return this.isValid() && n.isValid() ? (t = st(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Gh(e, t) {
  var n = ht(e) ? e : be(e);
  return this.isValid() && n.isValid() ? (t = st(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function qh(e, t, n, a) {
  var l = ht(e) ? e : be(e), i = ht(t) ? t : be(t);
  return this.isValid() && l.isValid() && i.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(l, n) : !this.isBefore(l, n)) && (a[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function Kh(e, t) {
  var n = ht(e) ? e : be(e), a;
  return this.isValid() && n.isValid() ? (t = st(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function Zh(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function Xh(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function Jh(e, t, n) {
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
function Qh() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function eg(e) {
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
function tg() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, a, l, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", l = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + a + l + i);
}
function ng(e) {
  e || (e = this.isUtc() ? $.defaultFormatUtc : $.defaultFormat);
  var t = La(this, e);
  return this.localeData().postformat(t);
}
function ag(e, t) {
  return this.isValid() && (ht(e) && e.isValid() || be(e).isValid()) ? pt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function lg(e) {
  return this.from(be(), e);
}
function ig(e, t) {
  return this.isValid() && (ht(e) && e.isValid() || be(e).isValid()) ? pt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function sg(e) {
  return this.to(be(), e);
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
function rg(e) {
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
function og(e) {
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
function ug() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function cg() {
  return Math.floor(this.valueOf() / 1e3);
}
function dg() {
  return new Date(this.valueOf());
}
function fg() {
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
function vg() {
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
function mg() {
  return this.isValid() ? this.toISOString() : null;
}
function hg() {
  return Ri(this);
}
function gg() {
  return Kt({}, le(this));
}
function yg() {
  return le(this).overflow;
}
function pg() {
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
W("NNNN", Dg);
W("NNNNN", Og);
ke(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, a) {
    var l = n._locale.erasParse(e, a, n._strict);
    l ? le(n).era = l : le(n).invalidEra = e;
  }
);
W("y", Wn);
W("yy", Wn);
W("yyy", Wn);
W("yyyy", Wn);
W("yo", Ig);
ke(["y", "yy", "yyy", "yyyy"], Be);
ke(["yo"], function(e, t, n, a) {
  var l;
  n._locale._eraYearOrdinalRegex && (l = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Be] = n._locale.eraYearOrdinalParse(e, l) : t[Be] = parseInt(e, 10);
});
function kg(e, t) {
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
function bg(e, t, n) {
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
function _g(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? $(e.since).year() : $(e.since).year() + (t - e.offset) * n;
}
function Sg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].name;
  return "";
}
function wg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].narrow;
  return "";
}
function Cg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].abbr;
  return "";
}
function Vg() {
  var e, t, n, a, l = this.localeData().eras();
  for (e = 0, t = l.length; e < t; ++e)
    if (n = l[e].since <= l[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), l[e].since <= a && a <= l[e].until || l[e].until <= a && a <= l[e].since)
      return (this.year() - $(l[e].since).year()) * n + l[e].offset;
  return this.year();
}
function xg(e) {
  return ve(this, "_erasNameRegex") || ns.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Pg(e) {
  return ve(this, "_erasAbbrRegex") || ns.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Mg(e) {
  return ve(this, "_erasNarrowRegex") || ns.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ts(e, t) {
  return t.erasAbbrRegex(e);
}
function Dg(e, t) {
  return t.erasNameRegex(e);
}
function Og(e, t) {
  return t.erasNarrowRegex(e);
}
function Ig(e, t) {
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
W("G", bl);
W("g", bl);
W("GG", _e, et);
W("gg", _e, et);
W("GGGG", Ui, Wi);
W("gggg", Ui, Wi);
W("GGGGG", kl, yl);
W("ggggg", kl, yl);
ka(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, a) {
    t[a.substr(0, 2)] = ue(e);
  }
);
ka(["gg", "GG"], function(e, t, n, a) {
  t[a] = $.parseTwoDigitYear(e);
});
function Tg(e) {
  return yu.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Ag(e) {
  return yu.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Eg() {
  return Lt(this.year(), 1, 4);
}
function Lg() {
  return Lt(this.isoWeekYear(), 1, 4);
}
function Fg() {
  var e = this.localeData()._week;
  return Lt(this.year(), e.dow, e.doy);
}
function Rg() {
  var e = this.localeData()._week;
  return Lt(this.weekYear(), e.dow, e.doy);
}
function yu(e, t, n, a, l) {
  var i;
  return e == null ? na(this, a, l).year : (i = Lt(e, a, l), t > i && (t = i), Ng.call(this, e, t, n, a, l));
}
function Ng(e, t, n, a, l) {
  var i = Zo(e, t, n, a, l), s = ta(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
K("Q", 0, "Qo", "quarter");
W("Q", Yo);
ke("Q", function(e, t) {
  t[Tt] = (ue(e) - 1) * 3;
});
function Yg(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
K("D", ["DD", 2], "Do", "date");
W("D", _e, Un);
W("DD", _e, et);
W("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
ke(["D", "DD"], bt);
ke("Do", function(e, t) {
  t[bt] = ue(e.match(_e)[0]);
});
var pu = Hn("Date", !0);
K("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
W("DDD", pl);
W("DDDD", Bo);
ke(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ue(e);
});
function Bg(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
K("m", ["mm", 2], 0, "minute");
W("m", _e, Hi);
W("mm", _e, et);
ke(["m", "mm"], ot);
var $g = Hn("Minutes", !1);
K("s", ["ss", 2], 0, "second");
W("s", _e, Hi);
W("ss", _e, et);
ke(["s", "ss"], At);
var Wg = Hn("Seconds", !1);
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
W("S", pl, Yo);
W("SS", pl, et);
W("SSS", pl, Bo);
var Zt, ku;
for (Zt = "SSSS"; Zt.length <= 9; Zt += "S")
  W(Zt, Wn);
function Ug(e, t) {
  t[sn] = ue(("0." + e) * 1e3);
}
for (Zt = "S"; Zt.length <= 9; Zt += "S")
  ke(Zt, Ug);
ku = Hn("Milliseconds", !1);
K("z", 0, 0, "zoneAbbr");
K("zz", 0, 0, "zoneName");
function Hg() {
  return this._isUTC ? "UTC" : "";
}
function zg() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var F = ya.prototype;
F.add = Rh;
F.calendar = Hh;
F.clone = zh;
F.diff = Jh;
F.endOf = og;
F.format = ng;
F.from = ag;
F.fromNow = lg;
F.to = ig;
F.toNow = sg;
F.get = tm;
F.invalidAt = yg;
F.isAfter = jh;
F.isBefore = Gh;
F.isBetween = qh;
F.isSame = Kh;
F.isSameOrAfter = Zh;
F.isSameOrBefore = Xh;
F.isValid = hg;
F.lang = fu;
F.locale = du;
F.localeData = vu;
F.max = hh;
F.min = mh;
F.parsingFlags = gg;
F.set = nm;
F.startOf = rg;
F.subtract = Nh;
F.toArray = fg;
F.toObject = vg;
F.toDate = dg;
F.toISOString = eg;
F.inspect = tg;
typeof Symbol < "u" && Symbol.for != null && (F[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
F.toJSON = mg;
F.toString = Qh;
F.unix = cg;
F.valueOf = ug;
F.creationData = pg;
F.eraName = Sg;
F.eraNarrow = wg;
F.eraAbbr = Cg;
F.eraYear = Vg;
F.year = Uo;
F.isLeapYear = em;
F.weekYear = Tg;
F.isoWeekYear = Ag;
F.quarter = F.quarters = Yg;
F.month = qo;
F.daysInMonth = dm;
F.week = F.weeks = km;
F.isoWeek = F.isoWeeks = bm;
F.weeksInYear = Fg;
F.weeksInWeekYear = Rg;
F.isoWeeksInYear = Eg;
F.isoWeeksInISOWeekYear = Lg;
F.date = pu;
F.day = F.days = Am;
F.weekday = Em;
F.isoWeekday = Lm;
F.dayOfYear = Bg;
F.hour = F.hours = Wm;
F.minute = F.minutes = $g;
F.second = F.seconds = Wg;
F.millisecond = F.milliseconds = ku;
F.utcOffset = Ch;
F.utc = xh;
F.local = Ph;
F.parseZone = Mh;
F.hasAlignedHourOffset = Dh;
F.isDST = Oh;
F.isLocal = Th;
F.isUtcOffset = Ah;
F.isUtc = ru;
F.isUTC = ru;
F.zoneAbbr = Hg;
F.zoneName = zg;
F.dates = it(
  "dates accessor is deprecated. Use date instead.",
  pu
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
  Vh
);
F.isDSTShifted = it(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Ih
);
function jg(e) {
  return be(e * 1e3);
}
function Gg() {
  return be.apply(null, arguments).parseZone();
}
function bu(e) {
  return e;
}
var me = Yi.prototype;
me.calendar = Tv;
me.longDateFormat = Fv;
me.invalidDate = Nv;
me.ordinal = $v;
me.preparse = bu;
me.postformat = bu;
me.relativeTime = Uv;
me.pastFuture = Hv;
me.set = Ov;
me.eras = kg;
me.erasParse = bg;
me.erasConvertYear = _g;
me.erasAbbrRegex = Pg;
me.erasNameRegex = xg;
me.erasNarrowRegex = Mg;
me.months = rm;
me.monthsShort = om;
me.monthsParse = cm;
me.monthsRegex = vm;
me.monthsShortRegex = fm;
me.week = hm;
me.firstDayOfYear = pm;
me.firstDayOfWeek = ym;
me.weekdays = Mm;
me.weekdaysMin = Om;
me.weekdaysShort = Dm;
me.weekdaysParse = Tm;
me.weekdaysRegex = Fm;
me.weekdaysShortRegex = Rm;
me.weekdaysMinRegex = Nm;
me.isPM = Bm;
me.meridiem = Um;
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
function qg(e, t) {
  return _u(e, t, "months");
}
function Kg(e, t) {
  return _u(e, t, "monthsShort");
}
function Zg(e, t, n) {
  return as(e, t, n, "weekdays");
}
function Xg(e, t, n) {
  return as(e, t, n, "weekdaysShort");
}
function Jg(e, t, n) {
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
function Qg() {
  var e = this._data;
  return this._milliseconds = Mt(this._milliseconds), this._days = Mt(this._days), this._months = Mt(this._months), e.milliseconds = Mt(e.milliseconds), e.seconds = Mt(e.seconds), e.minutes = Mt(e.minutes), e.hours = Mt(e.hours), e.months = Mt(e.months), e.years = Mt(e.years), this;
}
function Su(e, t, n, a) {
  var l = pt(t, n);
  return e._milliseconds += a * l._milliseconds, e._days += a * l._days, e._months += a * l._months, e._bubble();
}
function ey(e, t) {
  return Su(this, e, t, 1);
}
function ty(e, t) {
  return Su(this, e, t, -1);
}
function Qs(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function ny() {
  var e = this._milliseconds, t = this._days, n = this._months, a = this._data, l, i, s, r, o;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Qs(ri(n) + t) * 864e5, t = 0, n = 0), a.milliseconds = e % 1e3, l = tt(e / 1e3), a.seconds = l % 60, i = tt(l / 60), a.minutes = i % 60, s = tt(i / 60), a.hours = s % 24, t += tt(s / 24), o = tt(wu(t)), n += o, t -= Qs(ri(o)), r = tt(n / 12), n %= 12, a.days = t, a.months = n, a.years = r, this;
}
function wu(e) {
  return e * 4800 / 146097;
}
function ri(e) {
  return e * 146097 / 4800;
}
function ay(e) {
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
var Cu = zt("ms"), ly = zt("s"), iy = zt("m"), sy = zt("h"), ry = zt("d"), oy = zt("w"), uy = zt("M"), cy = zt("Q"), dy = zt("y"), fy = Cu;
function vy() {
  return pt(this);
}
function my(e) {
  return e = st(e), this.isValid() ? this[e + "s"]() : NaN;
}
function kn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var hy = kn("milliseconds"), gy = kn("seconds"), yy = kn("minutes"), py = kn("hours"), ky = kn("days"), by = kn("months"), _y = kn("years");
function Sy() {
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
function wy(e, t, n, a, l) {
  return l.relativeTime(t || 1, !!n, e, a);
}
function Cy(e, t, n, a) {
  var l = pt(e).abs(), i = Dt(l.as("s")), s = Dt(l.as("m")), r = Dt(l.as("h")), o = Dt(l.as("d")), c = Dt(l.as("M")), d = Dt(l.as("w")), f = Dt(l.as("y")), v = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || s <= 1 && ["m"] || s < n.m && ["mm", s] || r <= 1 && ["h"] || r < n.h && ["hh", r] || o <= 1 && ["d"] || o < n.d && ["dd", o];
  return n.w != null && (v = v || d <= 1 && ["w"] || d < n.w && ["ww", d]), v = v || c <= 1 && ["M"] || c < n.M && ["MM", c] || f <= 1 && ["y"] || ["yy", f], v[2] = t, v[3] = +e > 0, v[4] = a, wy.apply(null, v);
}
function Vy(e) {
  return e === void 0 ? Dt : typeof e == "function" ? (Dt = e, !0) : !1;
}
function xy(e, t) {
  return Mn[e] === void 0 ? !1 : t === void 0 ? Mn[e] : (Mn[e] = t, e === "s" && (Mn.ss = t - 1), !0);
}
function Py(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, a = Mn, l, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (a = Object.assign({}, Mn, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), l = this.localeData(), i = Cy(this, !n, a, l), n && (i = l.pastFuture(+this, i)), l.postformat(i);
}
var Bl = Math.abs;
function _n(e) {
  return (e > 0) - (e < 0) || +e;
}
function xl() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Bl(this._milliseconds) / 1e3, t = Bl(this._days), n = Bl(this._months), a, l, i, s, r = this.asSeconds(), o, c, d, f;
  return r ? (a = tt(e / 60), l = tt(a / 60), e %= 60, a %= 60, i = tt(n / 12), n %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = r < 0 ? "-" : "", c = _n(this._months) !== _n(r) ? "-" : "", d = _n(this._days) !== _n(r) ? "-" : "", f = _n(this._milliseconds) !== _n(r) ? "-" : "", o + "P" + (i ? c + i + "Y" : "") + (n ? c + n + "M" : "") + (t ? d + t + "D" : "") + (l || a || e ? "T" : "") + (l ? f + l + "H" : "") + (a ? f + a + "M" : "") + (e ? f + s + "S" : "")) : "P0D";
}
var ce = Cl.prototype;
ce.isValid = bh;
ce.abs = Qg;
ce.add = ey;
ce.subtract = ty;
ce.as = ay;
ce.asMilliseconds = Cu;
ce.asSeconds = ly;
ce.asMinutes = iy;
ce.asHours = sy;
ce.asDays = ry;
ce.asWeeks = oy;
ce.asMonths = uy;
ce.asQuarters = cy;
ce.asYears = dy;
ce.valueOf = fy;
ce._bubble = ny;
ce.clone = vy;
ce.get = my;
ce.milliseconds = hy;
ce.seconds = gy;
ce.minutes = yy;
ce.hours = py;
ce.days = ky;
ce.weeks = Sy;
ce.months = by;
ce.years = _y;
ce.humanize = Py;
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
W("x", bl);
W("X", qv);
ke("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
ke("x", function(e, t, n) {
  n._d = new Date(ue(e));
});
//! moment.js
$.version = "2.30.1";
Mv(be);
$.fn = F;
$.min = gh;
$.max = yh;
$.now = ph;
$.utc = Vt;
$.unix = jg;
$.months = qg;
$.isDate = ga;
$.locale = Jt;
$.invalid = gl;
$.duration = pt;
$.isMoment = ht;
$.weekdays = Zg;
$.parseZone = Gg;
$.localeData = Ht;
$.isDuration = Fa;
$.monthsShort = Kg;
$.weekdaysMin = Jg;
$.defineLocale = Ki;
$.updateLocale = Gm;
$.locales = qm;
$.weekdaysShort = Xg;
$.normalizeUnits = st;
$.relativeTimeRounding = Vy;
$.relativeTimeThreshold = xy;
$.calendarFormat = Uh;
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
    }, null), u(jd, {
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
const My = L({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: dt()
}, "VDatePickerHeader"), tr = z()({
  name: "VDatePickerHeader",
  props: My(),
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
const Dy = Symbol.for("vuetify:date-options");
function Oy(e, t) {
  const n = En(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return G(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function ba() {
  const e = Te(Dy);
  if (!e)
    throw new Error("[Vuetify] Could not find injected date options");
  const t = Yn();
  return Oy(e, t);
}
function Iy(e, t) {
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
const Ty = L({
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
function Ay(e) {
  const t = ba(), n = fe(e, "modelValue", [], (v) => Xe(v)), a = h(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = fe(e, "year", void 0, (v) => {
    const m = v != null ? Number(v) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), m));
  }, (v) => t.getYear(v)), i = fe(e, "month", void 0, (v) => {
    const m = v != null ? Number(v) : t.getMonth(a.value), p = t.setYear(t.date(), t.getYear(l.value));
    return t.setMonth(p, m);
  }, (v) => t.getMonth(v)), s = h(() => {
    const v = t.getWeekArray(i.value), m = v.flat(), p = 6 * 7;
    if (m.length < p) {
      const y = m[m.length - 1];
      let g = [];
      for (let k = 1; k <= p - m.length; k++)
        g.push(t.addDays(y, k)), k % 7 === 0 && (v.push(g), g = []);
    }
    return v;
  });
  function r(v, m) {
    return v.filter((p) => e.weekdays.includes(p.getDay())).map((p, y) => {
      const g = t.toISO(p), k = !t.isSameMonth(p, i.value), S = t.isSameDay(p, t.startOfMonth(i.value)), _ = t.isSameDay(p, t.endOfMonth(i.value)), w = t.isSameDay(p, i.value);
      return {
        date: p,
        isoDate: g,
        formatted: t.format(p, "keyboardDate"),
        year: t.getYear(p),
        month: t.getMonth(p),
        isDisabled: f(p),
        isWeekStart: y % 7 === 0,
        isWeekEnd: y % 7 === 6,
        isToday: t.isSameDay(p, m),
        isAdjacent: k,
        isHidden: k && !e.showAdjacentMonths,
        isStart: S,
        isSelected: n.value.some((x) => t.isSameDay(p, x)),
        isEnd: _,
        isSame: w,
        localized: t.format(p, "dayOfMonth")
      };
    });
  }
  const o = h(() => {
    const v = t.startOfWeek(n.value), m = [];
    for (let g = 0; g <= 6; g++)
      m.push(t.addDays(v, g));
    const p = m, y = t.date();
    return r(p, y);
  }), c = h(() => {
    const v = s.value.flat(), m = t.date();
    return r(v, m);
  }), d = h(() => s.value.map((v) => v.length ? Iy(t, v[0]) : null));
  function f(v) {
    if (e.disabled)
      return !0;
    const m = t.date(v);
    return e.min && t.isAfter(t.date(e.min), m) || e.max && t.isAfter(m, t.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((p) => t.isSameDay(t.date(p), m)) : typeof e.allowedDates == "function" ? !e.allowedDates(m) : !1;
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
  ...Ty()
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
    } = Ay(e), o = ba();
    function c(d) {
      if (e.multiple) {
        const f = s.value.findIndex((v) => o.isSameDay(v, d));
        if (f === -1)
          s.value = [...s.value, d];
        else {
          const v = [...s.value];
          v.splice(f, 1), s.value = v;
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
    }, [d[0]])), i.value.map((d, f) => {
      const v = {
        props: {
          onClick: () => c(d.date)
        },
        item: d,
        i: f
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
          return [((m = a.day) == null ? void 0 : m.call(a, v)) ?? u(Ye, v.props, null)];
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
    const a = ba(), l = fe(e, "modelValue"), i = h(() => {
      let s = a.startOfYear(a.date());
      return gi(12).map((r) => {
        const o = a.format(s, "monthShort");
        return s = a.getNextMonth(s), {
          text: o,
          value: r
        };
      });
    });
    return je(() => {
      l.value = l.value ?? a.getMonth(a.date());
    }), Z(() => u("div", {
      class: "v-date-picker-months",
      style: {
        height: Q(e.height)
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
      function c(f) {
        l.value = f;
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
    const a = ba(), l = fe(e, "modelValue"), i = h(() => {
      const r = a.getYear(a.date());
      let o = r - 100, c = r + 52;
      e.min && (o = a.getYear(a.date(e.min))), e.max && (c = a.getYear(a.date(e.max)));
      let d = a.startOfYear(a.date());
      return d = a.setYear(d, o), gi(c - o + 1, o).map((f) => {
        const v = a.format(d, "year");
        return d = a.setYear(d, a.getYear(d) + 1), {
          text: v,
          value: f
        };
      });
    });
    je(() => {
      l.value = l.value ?? a.getYear(a.date());
    });
    const s = N();
    return We(async () => {
      var r;
      await He(), (r = s.value) == null || r.$el.scrollIntoView({
        block: "center"
      });
    }), Z(() => u("div", {
      class: "v-date-picker-years",
      style: {
        height: Q(e.height)
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
const Ey = nn("v-picker-title"), Du = L({
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
          }, [s && u(Ey, {
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
}), Ly = L({
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
}, "VDatePicker"), Fy = z()({
  name: "VDatePicker",
  props: Ly(),
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
    const l = ba(), {
      t: i
    } = Yn(), s = fe(e, "modelValue", void 0, (b) => Xe(b), (b) => e.multiple ? b : b[0]), r = fe(e, "viewMode"), o = h(() => {
      var M;
      const b = l.date((M = s.value) == null ? void 0 : M[0]);
      return b && l.isValid(b) ? b : l.date();
    }), c = N(Number(e.month ?? l.getMonth(l.startOfMonth(o.value)))), d = N(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(o.value, c.value))))), f = re(!1), v = h(() => e.multiple && s.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", s.value.length) : s.value[0] && l.isValid(s.value[0]) ? l.format(s.value[0], "normalDateWithWeekday") : i(e.header)), m = h(() => l.format(l.setYear(l.setMonth(l.date(), c.value), d.value), "monthAndYear")), p = h(() => `date-picker-header${f.value ? "-reverse" : ""}-transition`), y = h(() => {
      const b = l.date(e.min);
      return e.min && l.isValid(b) ? b : null;
    }), g = h(() => {
      const b = l.date(e.max);
      return e.max && l.isValid(b) ? b : null;
    }), k = h(() => {
      if (e.disabled)
        return !0;
      const b = [];
      if (r.value !== "month")
        b.push("prev", "next");
      else {
        let M = l.date();
        if (M = l.setYear(M, d.value), M = l.setMonth(M, c.value), y.value) {
          const C = l.addDays(l.startOfMonth(M), -1);
          l.isAfter(y.value, C) && b.push("prev");
        }
        if (g.value) {
          const C = l.addDays(l.endOfMonth(M), 1);
          l.isAfter(C, g.value) && b.push("next");
        }
      }
      return b;
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
    function x() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function V() {
      r.value = r.value === "year" ? "month" : "year";
    }
    return G(c, () => {
      r.value === "months" && x(), n("update:month", c.value);
    }), G(d, () => {
      r.value === "year" && V(), n("update:year", d.value);
    }), G(s, (b, M) => {
      const C = l.date(Xe(b)[0]), O = l.date(Xe(M)[0]);
      f.value = l.isBefore(C, O);
    }), Z(() => {
      const b = ir.filterProps(e), M = er.filterProps(e), C = tr.filterProps(e), O = nr.filterProps(e), D = Je(ar.filterProps(e), ["modelValue"]), A = Je(lr.filterProps(e), ["modelValue"]), T = {
        header: v.value,
        transition: p.value
      };
      return u(ir, B(b, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var P;
          return ((P = a.title) == null ? void 0 : P.call(a)) ?? u("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? u(xe, {
          defaults: {
            VDatePickerHeader: {
              ...T
            }
          }
        }, {
          default: () => {
            var P;
            return [(P = a.header) == null ? void 0 : P.call(a, T)];
          }
        }) : u(tr, B({
          key: "header"
        }, C, T, {
          onClick: r.value !== "month" ? w : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => u(pe, null, [u(er, B(M, {
          disabled: k.value,
          text: m.value,
          "onClick:next": S,
          "onClick:prev": _,
          "onClick:month": x,
          "onClick:year": V
        }), null), u(xd, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? u(ar, B({
            key: "date-picker-months"
          }, D, {
            modelValue: c.value,
            "onUpdate:modelValue": (P) => c.value = P,
            min: y.value,
            max: g.value
          }), null) : r.value === "year" ? u(lr, B({
            key: "date-picker-years"
          }, A, {
            modelValue: d.value,
            "onUpdate:modelValue": (P) => d.value = P,
            min: y.value,
            max: g.value
          }), null) : u(nr, B({
            key: "date-picker-month"
          }, O, {
            modelValue: s.value,
            "onUpdate:modelValue": (P) => s.value = P,
            month: c.value,
            "onUpdate:month": (P) => c.value = P,
            year: d.value,
            "onUpdate:year": (P) => d.value = P,
            min: y.value,
            max: g.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), Ry = /* @__PURE__ */ Le({
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
    function c(y) {
      l.value.value = y, a("update:modelValue", y);
    }
    function d() {
      l.value.validate(), a("validated", l.value.name);
    }
    function f() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function v() {
      r.value = !r.value;
    }
    function m() {
      r.value = !1;
    }
    function p(y) {
      r.value = !1;
      const g = $(y).format(s.value.format);
      c(g);
    }
    return We(() => {
      var y;
      (y = l.value) == null || y.isLoading(!1);
    }), (y, g) => (ee(), se(Ne, { "no-gutters": "" }, {
      default: R(() => {
        var k;
        return [
          u(hl, B({
            modelValue: r.value,
            "onUpdate:modelValue": g[2] || (g[2] = (S) => r.value = S)
          }, (k = i.value) == null ? void 0 : k.props()), {
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
                  onInvalidated: f,
                  "onClick:prependInner": v,
                  "onClick:appendInner": v
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
                        u(Fy, B({
                          modelValue: s.value.value,
                          "onUpdate:modelValue": g[1] || (g[1] = (_) => s.value.value = _)
                        }, (S = s.value) == null ? void 0 : S.props(), {
                          "onClick:save": p,
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
const Ny = L({
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
  props: Ny(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = fe(e, "modelValue"), {
      scopeId: l
    } = vl(), i = nt(), s = h(() => e.id || `v-tooltip-${i}`), r = N(), o = h(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = h(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = h(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), f = h(() => B({
      "aria-describedby": s.value
    }, e.activatorProps));
    return Z(() => {
      const v = An.filterProps(e);
      return u(An, B({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: s.value
      }, v, {
        modelValue: a.value,
        "onUpdate:modelValue": (m) => a.value = m,
        transition: d.value,
        absolute: !0,
        location: o.value,
        origin: c.value,
        persistent: !0,
        role: "tooltip",
        activatorProps: f.value,
        _disableGlobalStack: !0
      }, l), {
        activator: n.activator,
        default: function() {
          var g;
          for (var m = arguments.length, p = new Array(m), y = 0; y < m; y++)
            p[y] = arguments[y];
          return ((g = n.default) == null ? void 0 : g.call(n, ...p)) ?? e.text;
        }
      });
    }), $n({}, r);
  }
}), Yy = /* @__PURE__ */ Le({
  __name: "EasyButton",
  props: {
    button: {},
    disabled: { type: Boolean },
    identifier: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.button), i = h(() => {
      var c, d;
      return !ne(n.button.prepend_icon) && !ne((d = (c = n.button) == null ? void 0 : c.prepend_icon) == null ? void 0 : d.icon);
    }), s = h(() => {
      var c, d;
      return !ne(n.button.append_icon) && !ne((d = (c = n.button) == null ? void 0 : c.append_icon) == null ? void 0 : d.icon);
    }), r = h(() => n.disabled ? !0 : l.value.disabled);
    function o() {
      ne(n == null ? void 0 : n.identifier) ? a("click", "") : a("click", n == null ? void 0 : n.identifier);
    }
    return (c, d) => {
      var v, m, p, y;
      const f = Qt("EasyIcon");
      return ee(), se(ls, B((m = (v = l.value) == null ? void 0 : v.tooltip) == null ? void 0 : m.props(), {
        disabled: ((y = (p = l.value) == null ? void 0 : p.tooltip) == null ? void 0 : y.disabled) ?? !0
      }), {
        activator: R(({ props: g }) => [
          u(Ye, B({ ...g, ...l.value.props() }, {
            class: l.value.classes,
            disabled: r.value,
            onClick: o
          }), mi({ _: 2 }, [
            i.value ? {
              name: "prepend",
              fn: R(() => [
                u(f, {
                  icon: l.value.prepend_icon
                }, null, 8, ["icon"])
              ]),
              key: "0"
            } : void 0,
            s.value ? {
              name: "append",
              fn: R(() => [
                u(f, {
                  icon: l.value.append_icon
                }, null, 8, ["icon"])
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["class", "disabled"])
        ]),
        default: R(() => {
          var g, k;
          return [
            ct("span", null, Ze((k = (g = l.value) == null ? void 0 : g.tooltip) == null ? void 0 : k.text), 1)
          ];
        }),
        _: 1
      }, 16, ["disabled"]);
    };
  }
}), By = /* @__PURE__ */ Le({
  __name: "EasyIcon",
  props: {
    icon: {},
    identifier: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.icon ?? new uc({ icon: "mdi-home" }));
    function i() {
      ne(n == null ? void 0 : n.identifier) ? a("click", "") : a("click", n == null ? void 0 : n.identifier);
    }
    return (s, r) => {
      var o, c, d, f;
      return ee(), se(ls, B((c = (o = l.value) == null ? void 0 : o.tooltip) == null ? void 0 : c.props(), {
        disabled: ((f = (d = l.value) == null ? void 0 : d.tooltip) == null ? void 0 : f.disabled) ?? !0
      }), {
        activator: R(({ props: v }) => {
          var m;
          return [
            u(Ce, B({ ...v, ...(m = l.value) == null ? void 0 : m.props() }, {
              onClick: i,
              class: l.value.classes
            }), {
              default: R(() => {
                var p;
                return [
                  Me(Ze((p = l.value) == null ? void 0 : p.icon), 1)
                ];
              }),
              _: 2
            }, 1040, ["class"])
          ];
        }),
        default: R(() => {
          var v, m;
          return [
            ct("span", null, Ze((m = (v = l.value) == null ? void 0 : v.tooltip) == null ? void 0 : m.text), 1)
          ];
        }),
        _: 1
      }, 16, ["disabled"]);
    };
  }
});
const $y = nn("v-alert-title"), Wy = ["success", "info", "warning", "error"], Uy = L({
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
    validator: (e) => Wy.includes(e)
  },
  ...ie(),
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
  props: Uy(),
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
    } = Ue(e), {
      colorClasses: o,
      colorStyles: c,
      variantClasses: d
    } = Rn(s), {
      densityClasses: f
    } = Ct(e), {
      dimensionStyles: v
    } = Yt(e), {
      elevationClasses: m
    } = Wt(e), {
      locationStyles: p
    } = da(e), {
      positionClasses: y
    } = rl(e), {
      roundedClasses: g
    } = lt(e), {
      textColorClasses: k,
      textColorStyles: S
    } = ft(q(e, "borderColor")), {
      t: _
    } = Yn(), w = h(() => ({
      "aria-label": _(e.closeLabel),
      onClick(x) {
        l.value = !1, n("click:close", x);
      }
    }));
    return () => {
      const x = !!(a.prepend || i.value), V = !!(a.title || e.title), b = !!(a.close || e.closable);
      return l.value && u(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, o.value, f.value, m.value, y.value, g.value, d.value, e.class],
        style: [c.value, v.value, p.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var M, C;
          return [Fn(!1, "v-alert"), e.border && u("div", {
            key: "border",
            class: ["v-alert__border", k.value],
            style: S.value
          }, null), x && u("div", {
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
          }, [V && u($y, {
            key: "title"
          }, {
            default: () => {
              var O;
              return [((O = a.title) == null ? void 0 : O.call(a)) ?? e.title];
            }
          }), ((M = a.text) == null ? void 0 : M.call(a)) ?? e.text, (C = a.default) == null ? void 0 : C.call(a)]), a.append && u("div", {
            key: "append",
            class: "v-alert__append"
          }, [a.append()]), b && u("div", {
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
              var O;
              return [(O = a.close) == null ? void 0 : O.call(a, {
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
}), Hy = ["innerHTML"], zy = /* @__PURE__ */ Le({
  __name: "EasyAlerts",
  props: {
    alerts: {}
  },
  setup(e) {
    const n = N(e.alerts);
    function a(i) {
      var s;
      return !ne(i == null ? void 0 : i.append_icon) && !ne((s = i == null ? void 0 : i.append_icon) == null ? void 0 : s.icon);
    }
    function l(i) {
      var s;
      return !ne(i == null ? void 0 : i.prepend_icon) && !ne((s = i == null ? void 0 : i.prepend_icon) == null ? void 0 : s.icon);
    }
    return (i, s) => {
      const r = Qt("EasyIcon");
      return ee(!0), Xt(pe, null, Tn(n.value, (o, c) => Ve((ee(), se(we, {
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
              }, null, 8, Hy)
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
const jy = L({
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
}, "VDialog"), Gy = z()({
  name: "VDialog",
  props: jy(),
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
      var f, v;
      const c = o.relatedTarget, d = o.target;
      if (c !== d && ((f = i.value) != null && f.contentEl) && // We're the topmost dialog
      ((v = i.value) != null && v.globalTop) && // It isn't the document or the dialog body
      ![document, i.value.contentEl].includes(d) && // It isn't inside the dialog body
      !i.value.contentEl.contains(d)) {
        const m = Ba(i.value.contentEl);
        if (!m.length)
          return;
        const p = m[0], y = m[m.length - 1];
        c === p ? y.focus() : p.focus();
      }
    }
    $e && G(() => a.value && e.retainFocus, (o) => {
      o ? document.addEventListener("focusin", s) : document.removeEventListener("focusin", s);
    }, {
      immediate: !0
    }), G(a, async (o) => {
      var c, d;
      await He(), o ? (c = i.value.contentEl) == null || c.focus({
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
          for (var c = arguments.length, d = new Array(c), f = 0; f < c; f++)
            d[f] = arguments[f];
          return u(xe, {
            root: "VDialog"
          }, {
            default: () => {
              var v;
              return [(v = n.default) == null ? void 0 : v.call(n, ...d)];
            }
          });
        }
      });
    }), $n({}, i);
  }
}), qy = /* @__PURE__ */ Le({
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
    const n = e, a = t, l = N(n.modelValue), i = je(() => l.value = n.modelValue), s = G(l, (r) => {
      a("update:modelValue", r);
    });
    return Ae(() => {
      i(), s();
    }), (r, o) => (ee(), se(Gy, {
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
}), Ky = /* @__PURE__ */ ct("span", null, "Click for password requirements", -1), Zy = /* @__PURE__ */ Le({
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
    const n = e, a = t, l = N(n.textfield), i = N(n.modelValue), s = N(!1), r = N(n.errorMessages), o = h(() => f.value === 0 || c.value === 0 ? 0 : f.value / c.value / d.value * 100), c = h(() => 100 / d.value), d = h(() => {
      let V = 0;
      return n.lowerCase && V++, n.upperCase && V++, n.numbers && V++, n.special && V++, n.minLength && V++, V;
    }), f = h(() => {
      var b, M, C, O, D, A, T, P, Y, X;
      let V = 0;
      return n.lowerCase && (M = (b = l.value) == null ? void 0 : b.value) != null && M.match(/[a-z]+/) && (V += 1), n.upperCase && (O = (C = l.value) == null ? void 0 : C.value) != null && O.match(/[A-Z]+/) && (V += 1), n.numbers && (A = (D = l.value) == null ? void 0 : D.value) != null && A.match(/[0-9]+/) && (V += 1), n.special && (P = (T = l.value) == null ? void 0 : T.value) != null && P.match(/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]+/) && (V += 1), n.minLength && ((X = (Y = l.value) == null ? void 0 : Y.value) == null ? void 0 : X.length) >= n.minLength && (V += 1), Math.ceil(c.value * V);
    }), v = h(() => o.value > 75 ? n.strengthSuccessColor : o.value > 50 ? n.strengthWarningColor : n.strengthErrorColor), m = h(() => o.value > 75 ? n.strengthSuccessText : o.value > 50 ? n.strengthWarningText : n.strengthErrorText), p = G(l.value, () => {
      k();
    }), y = G(i, (V) => {
      l.value.value = V;
    }), g = G(r.value, (V) => {
      l.value.error_messages = V;
    });
    Ae(() => {
      p(), y(), g();
    });
    function k() {
      a("update:modelValue", l.value.value);
    }
    function S() {
      l.value.validate(), a("validated", l.value.name);
    }
    function _() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function w(V, b) {
      n.viewMode && (l.value.value.value.type == "password" ? (l.value.value.value.type = "text", b == "prepend" && (a("click:prependInner", V), l.value.value.value.prepend_inner_icon.icon = "mdi-eye-off"), b == "append" && (a("click:appendInner", V), l.value.value.value.append_inner_icon.icon = "mdi-eye-off")) : (l.value.type = "password", b == "prepend" && (a("click:prependInner", V), l.value.value.value.prepend_inner_icon.icon = "mdi-eye"), b == "append" && (a("click:appendInner", V), l.value.value.value.append_inner_icon.icon = "mdi-eye")));
    }
    We(() => {
      var V;
      l.value.value = n.modelValue, (V = l.value) == null || V.isLoading(!1);
    });
    function x() {
      s.value = !0;
    }
    return (V, b) => (ee(), se(Ne, null, {
      default: R(() => [
        u(we, { cols: 12 }, {
          default: R(() => {
            var M;
            return [
              u(ha, B({
                field: l.value,
                "onUpdate:field": b[0] || (b[0] = (C) => l.value = C)
              }, (M = l.value) == null ? void 0 : M.props(), {
                fields: n.fields ?? [],
                onUpdated: k,
                onValidated: S,
                onInvalidated: _,
                "onClick:prependInner": b[1] || (b[1] = (C) => w(C, "prepend")),
                "onClick:appendInner": b[2] || (b[2] = (C) => w(C, "append")),
                "onClick:prepend": b[3] || (b[3] = (C) => a("click:prepend", C)),
                "onClick:append": b[4] || (b[4] = (C) => a("click:append", C))
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
                      modelValue: f.value,
                      "onUpdate:modelValue": b[5] || (b[5] = (M) => f.value = M),
                      striped: "",
                      color: v.value,
                      height: "30"
                    }, {
                      default: R(() => [
                        ct("strong", {
                          class: hr("text-" + v.value + "-lighten-2")
                        }, Ze(m.value) + " - " + Ze(o.value) + "%", 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "color"]),
                    u(ls, null, {
                      activator: R(({ props: M }) => [
                        n.showRequirementsDialog ? (ee(), se(Ye, B({
                          key: 0,
                          icon: "mdi-information-slab-circle-outline"
                        }, M, {
                          density: "compact",
                          style: { position: "absolute", right: "0px", top: "0px" },
                          onClick: x
                        }), null, 16)) : De("", !0)
                      ]),
                      default: R(() => [
                        Ky
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
        n.showRequirementsDialog ? (ee(), se(Oe(qy), {
          key: 1,
          modelValue: s.value,
          "onUpdate:modelValue": b[6] || (b[6] = (M) => s.value = M),
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
const Iu = Symbol.for("vuetify:v-chip-group"), Xy = L({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: hn
  },
  ...ie(),
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
  props: Xy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ue(e), {
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
const Jy = L({
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
  ...ie(),
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
}, "VChip"), Qy = z()({
  name: "VChip",
  directives: {
    Ripple: Bn
  },
  props: Jy(),
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
    } = pn(e), {
      colorClasses: r,
      colorStyles: o,
      variantClasses: c
    } = Rn(e), {
      densityClasses: d
    } = Ct(e), {
      elevationClasses: f
    } = Wt(e), {
      roundedClasses: v
    } = lt(e), {
      sizeClasses: m
    } = oa(e), {
      themeClasses: p
    } = Ue(e), y = fe(e, "modelValue"), g = wo(e, Iu, !1), k = ol(e, n), S = h(() => e.link !== !1 && k.isLink.value), _ = h(() => !e.disabled && e.link !== !1 && (!!g || e.link || k.isClickable.value)), w = h(() => ({
      "aria-label": i(e.closeLabel),
      onClick(b) {
        b.stopPropagation(), y.value = !1, a("click:close", b);
      }
    }));
    function x(b) {
      var M;
      a("click", b), _.value && ((M = k.navigate) == null || M.call(k, b), g == null || g.toggle());
    }
    function V(b) {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), x(b));
    }
    return () => {
      const b = k.isLink.value ? "a" : e.tag, M = !!(e.appendIcon || e.appendAvatar), C = !!(M || l.append), O = !!(l.close || e.closable), D = !!(l.filter || e.filter) && g, A = !!(e.prependIcon || e.prependAvatar), T = !!(A || l.prepend), P = !g || g.isSelected.value;
      return y.value && Ve(u(b, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": _.value,
          "v-chip--filter": D,
          "v-chip--pill": e.pill
        }, p.value, s.value, P ? r.value : void 0, d.value, f.value, v.value, m.value, c.value, g == null ? void 0 : g.selectedClass.value, e.class],
        style: [P ? o.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: k.href.value,
        tabindex: _.value ? 0 : void 0,
        onClick: x,
        onKeydown: _.value && !S.value && V
      }, {
        default: () => {
          var Y;
          return [Fn(_.value, "v-chip"), D && u(io, {
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
          }), T && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? u(xe, {
            key: "prepend-defaults",
            disabled: !A,
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
          }, l.prepend) : u(pe, null, [e.prependIcon && u(Ce, {
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
            disabled: !M,
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
          }, l.append) : u(pe, null, [e.appendIcon && u(Ce, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(vn, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), O && u("button", B({
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
  return Ge(oi, t), e;
}
function Au() {
  return Te(oi, null);
}
const ep = {
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
}, tp = {
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
}, np = (e) => {
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
}, ap = (e) => {
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
}, lp = (e) => {
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
        const f = c.shift();
        i.set(f, l ? "on" : "off"), s.has(f) && c.push(...s.get(f));
      }
      let d = r.get(a);
      for (; d; ) {
        const f = s.get(d), v = f.every((p) => i.get(p) === "on"), m = f.every((p) => !i.has(p) || i.get(p) === "off");
        i.set(d, v ? "on" : m ? "off" : "indeterminate"), d = r.get(d);
      }
      return e && !l && Array.from(i.entries()).reduce((v, m) => {
        let [p, y] = m;
        return y === "on" ? [...v, p] : v;
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
}, ip = L({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested"), sp = (e) => {
  let t = !1;
  const n = N(/* @__PURE__ */ new Map()), a = N(/* @__PURE__ */ new Map()), l = fe(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), i = h(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ap(e.mandatory);
      case "leaf":
        return np(e.mandatory);
      case "independent":
        return is(e.mandatory);
      case "single-independent":
        return Lu(e.mandatory);
      case "classic":
      default:
        return lp(e.mandatory);
    }
  }), s = h(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return tp;
      case "single":
        return ep;
      case "multiple":
      default:
        return Eu;
    }
  }), r = fe(e, "selected", e.selected, (f) => i.value.in(f, n.value, a.value), (f) => i.value.out(f, n.value, a.value));
  Ae(() => {
    t = !0;
  });
  function o(f) {
    const v = [];
    let m = f;
    for (; m != null; )
      v.unshift(m), m = a.value.get(m);
    return v;
  }
  const c = Fe("nested"), d = {
    id: re(),
    root: {
      opened: l,
      selected: r,
      selectedValues: h(() => {
        const f = [];
        for (const [v, m] of r.value.entries())
          m === "on" && f.push(v);
        return f;
      }),
      register: (f, v, m) => {
        v && f !== v && a.value.set(f, v), m && n.value.set(f, []), v != null && n.value.set(v, [...n.value.get(v) || [], f]);
      },
      unregister: (f) => {
        if (t)
          return;
        n.value.delete(f);
        const v = a.value.get(f);
        if (v) {
          const m = n.value.get(v) ?? [];
          n.value.set(v, m.filter((p) => p !== f));
        }
        a.value.delete(f), l.value.delete(f);
      },
      open: (f, v, m) => {
        c.emit("click:open", {
          id: f,
          value: v,
          path: o(f),
          event: m
        });
        const p = s.value.open({
          id: f,
          value: v,
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        p && (l.value = p);
      },
      openOnSelect: (f, v, m) => {
        const p = s.value.select({
          id: f,
          value: v,
          selected: new Map(r.value),
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        p && (l.value = p);
      },
      select: (f, v, m) => {
        c.emit("click:select", {
          id: f,
          value: v,
          path: o(f),
          event: m
        });
        const p = i.value.select({
          id: f,
          value: v,
          selected: new Map(r.value),
          children: n.value,
          parents: a.value,
          event: m
        });
        p && (r.value = p), d.root.openOnSelect(f, v, m);
      },
      children: n,
      parents: a
    }
  };
  return Ge(la, d), d.root;
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
  }), t && Ge(la, i), i;
}, rp = () => {
  const e = Te(la, Fu);
  Ge(la, {
    ...e,
    isGroupActivator: !0
  });
};
function op() {
  const e = re(!1);
  return We(() => {
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
const up = St({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return rp(), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
}), cp = L({
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
  ...ie(),
  ...Re()
}, "VListGroup"), sr = z()({
  name: "VListGroup",
  props: cp(),
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
    } = op();
    function c(m) {
      l(!a.value, m);
    }
    const d = h(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: s.value
    })), f = h(() => a.value ? e.collapseIcon : e.expandIcon), v = h(() => ({
      VListItem: {
        active: a.value,
        activeColor: e.activeColor,
        baseColor: e.baseColor,
        color: e.color,
        prependIcon: e.prependIcon || e.subgroup && f.value,
        appendIcon: e.appendIcon || !e.subgroup && f.value,
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
        defaults: v.value
      }, {
        default: () => [u(up, null, {
          default: () => [n.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), u(It, {
        transition: {
          component: Pd
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
const dp = nn("v-list-item-subtitle"), fp = nn("v-list-item-title"), vp = L({
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
  ...ie(),
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
  props: vp(),
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
      root: f,
      parent: v,
      openOnSelect: m
    } = Ru(s, !1), p = Au(), y = h(() => {
      var I;
      return e.active !== !1 && (e.active || ((I = i.isActive) == null ? void 0 : I.value) || o.value);
    }), g = h(() => e.link !== !1 && i.isLink.value), k = h(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!p)), S = h(() => e.rounded || e.nav), _ = h(() => e.color ?? e.activeColor), w = h(() => ({
      color: y.value ? _.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    G(() => {
      var I;
      return (I = i.isActive) == null ? void 0 : I.value;
    }, (I) => {
      I && v.value != null && f.open(v.value, !0), I && m(I);
    }, {
      immediate: !0
    });
    const {
      themeClasses: x
    } = Ue(e), {
      borderClasses: V
    } = pn(e), {
      colorClasses: b,
      colorStyles: M,
      variantClasses: C
    } = Rn(w), {
      densityClasses: O
    } = Ct(e), {
      dimensionStyles: D
    } = Yt(e), {
      elevationClasses: A
    } = Wt(e), {
      roundedClasses: T
    } = lt(S), P = h(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), Y = h(() => ({
      isActive: y.value,
      select: r,
      isSelected: o.value,
      isIndeterminate: c.value
    }));
    function X(I) {
      var E;
      l("click", I), !(d || !k.value) && ((E = i.navigate) == null || E.call(i, I), e.value != null && r(!o.value, I));
    }
    function te(I) {
      (I.key === "Enter" || I.key === " ") && (I.preventDefault(), X(I));
    }
    return Z(() => {
      const I = g.value ? "a" : e.tag, E = a.title || e.title != null, H = a.subtitle || e.subtitle != null, J = !!(e.appendAvatar || e.appendIcon), he = !!(J || a.append), j = !!(e.prependAvatar || e.prependIcon), oe = !!(j || a.prepend);
      return p == null || p.updateHasPrepend(oe), e.activeColor && Ic("active-color", ["color", "base-color"]), Ve(u(I, {
        class: ["v-list-item", {
          "v-list-item--active": y.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": k.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !oe && (p == null ? void 0 : p.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && y.value
        }, x.value, V.value, b.value, O.value, A.value, P.value, T.value, C.value, e.class],
        style: [M.value, D.value, e.style],
        href: i.href.value,
        tabindex: k.value ? p ? -2 : 0 : void 0,
        onClick: X,
        onKeydown: k.value && !g.value && te
      }, {
        default: () => {
          var ge;
          return [Fn(k.value || y.value, "v-list-item"), oe && u("div", {
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
          }) : u(pe, null, [e.prependAvatar && u(vn, {
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
          }, [E && u(fp, {
            key: "title"
          }, {
            default: () => {
              var U;
              return [((U = a.title) == null ? void 0 : U.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), H && u(dp, {
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
            disabled: !J,
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
          }) : u(pe, null, [e.appendIcon && u(Ce, {
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
      }), [[gt("ripple"), k.value && e.ripple]]);
    }), {};
  }
}), mp = L({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ie(),
  ...Re()
}, "VListSubheader"), hp = z()({
  name: "VListSubheader",
  props: mp(),
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
const gp = L({
  color: String,
  inset: Boolean,
  length: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ie(),
  ...Ee()
}, "VDivider"), yp = z()({
  name: "VDivider",
  props: gp(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      themeClasses: a
    } = Ue(e), {
      textColorClasses: l,
      textColorStyles: i
    } = ft(q(e, "color")), s = h(() => {
      const r = {};
      return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = Q(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Q(e.thickness)), r;
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
}), pp = L({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Nu = z()({
  name: "VListChildren",
  props: pp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Tu(), () => {
      var a, l;
      return ((a = n.default) == null ? void 0 : a.call(n)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var v, m;
        let {
          children: s,
          props: r,
          type: o,
          raw: c
        } = i;
        if (o === "divider")
          return ((v = n.divider) == null ? void 0 : v.call(n, {
            props: r
          })) ?? u(yp, r, null);
        if (o === "subheader")
          return ((m = n.subheader) == null ? void 0 : m.call(n, {
            props: r
          })) ?? u(hp, r, null);
        const d = {
          subtitle: n.subtitle ? (p) => {
            var y;
            return (y = n.subtitle) == null ? void 0 : y.call(n, {
              ...p,
              item: c
            });
          } : void 0,
          prepend: n.prepend ? (p) => {
            var y;
            return (y = n.prepend) == null ? void 0 : y.call(n, {
              ...p,
              item: c
            });
          } : void 0,
          append: n.append ? (p) => {
            var y;
            return (y = n.append) == null ? void 0 : y.call(n, {
              ...p,
              item: c
            });
          } : void 0,
          title: n.title ? (p) => {
            var y;
            return (y = n.title) == null ? void 0 : y.call(n, {
              ...p,
              item: c
            });
          } : void 0
        }, f = sr.filterProps(r);
        return s ? u(sr, B({
          value: r == null ? void 0 : r.value
        }, f), {
          activator: (p) => {
            let {
              props: y
            } = p;
            const g = {
              ...r,
              ...y,
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
function kp(e) {
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
function bp(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function _p(e, t) {
  const n = Ot(t, e.itemType, "item"), a = bp(t) ? t : Ot(t, e.itemTitle), l = Ot(t, e.itemValue, void 0), i = Ot(t, e.itemChildren), s = e.itemProps === !0 ? Je(t, ["children"]) : Ot(t, e.itemProps), r = {
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
    n.push(_p(e, a));
  return n;
}
function Sp(e) {
  return {
    items: h(() => $u(e, e.items))
  };
}
const wp = L({
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
  ...ip({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...yn(),
  ...ie(),
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
}, "VList"), Cp = z()({
  name: "VList",
  props: wp(),
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
    } = Sp(e), {
      themeClasses: l
    } = Ue(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: s
    } = vt(q(e, "bgColor")), {
      borderClasses: r
    } = pn(e), {
      densityClasses: o
    } = Ct(e), {
      dimensionStyles: c
    } = Yt(e), {
      elevationClasses: d
    } = Wt(e), {
      roundedClasses: f
    } = lt(e), {
      open: v,
      select: m
    } = sp(e), p = h(() => e.lines ? `v-list--${e.lines}-line` : void 0), y = q(e, "activeColor"), g = q(e, "baseColor"), k = q(e, "color");
    Tu(), gn({
      VListGroup: {
        activeColor: y,
        baseColor: g,
        color: k
      },
      VListItem: {
        activeClass: q(e, "activeClass"),
        activeColor: y,
        baseColor: g,
        color: k,
        density: q(e, "density"),
        disabled: q(e, "disabled"),
        lines: q(e, "lines"),
        nav: q(e, "nav"),
        slim: q(e, "slim"),
        variant: q(e, "variant")
      }
    });
    const S = re(!1), _ = N();
    function w(O) {
      S.value = !0;
    }
    function x(O) {
      S.value = !1;
    }
    function V(O) {
      var D;
      !S.value && !(O.relatedTarget && ((D = _.value) != null && D.contains(O.relatedTarget))) && C();
    }
    function b(O) {
      if (_.value) {
        if (O.key === "ArrowDown")
          C("next");
        else if (O.key === "ArrowUp")
          C("prev");
        else if (O.key === "Home")
          C("first");
        else if (O.key === "End")
          C("last");
        else
          return;
        O.preventDefault();
      }
    }
    function M(O) {
      S.value = !0;
    }
    function C(O) {
      if (_.value)
        return $a(_.value, O);
    }
    return Z(() => u(e.tag, {
      ref: _,
      class: ["v-list", {
        "v-list--disabled": e.disabled,
        "v-list--nav": e.nav,
        "v-list--slim": e.slim
      }, l.value, i.value, r.value, o.value, d.value, p.value, f.value, e.class],
      style: [s.value, c.value, e.style],
      tabindex: e.disabled || S.value ? -1 : 0,
      role: "listbox",
      "aria-activedescendant": void 0,
      onFocusin: w,
      onFocusout: x,
      onFocus: V,
      onKeydown: b,
      onMousedown: M
    }, {
      default: () => [u(Nu, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: v,
      select: m,
      focus: C
    };
  }
});
const Vp = L({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ie(),
  ...ua({
    transition: {
      component: lo
    }
  })
}, "VCounter"), xp = z()({
  name: "VCounter",
  functional: !0,
  props: Vp(),
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
const Pp = L({
  floating: Boolean,
  ...ie()
}, "VFieldLabel"), Oa = z()({
  name: "VFieldLabel",
  props: Pp(),
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
}), Mp = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Wu = L({
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
    validator: (e) => Mp.includes(e)
  },
  "onClick:clear": dt(),
  "onClick:appendInner": dt(),
  "onClick:prependInner": dt(),
  ...ie(),
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
    } = Ue(e), {
      loaderClasses: s
    } = il(e), {
      focusClasses: r,
      isFocused: o,
      focus: c,
      blur: d
    } = va(e), {
      InputIcon: f
    } = eo(e), {
      roundedClasses: v
    } = lt(e), {
      rtlClasses: m
    } = Ut(), p = h(() => e.dirty || e.active), y = h(() => !e.singleLine && !!(e.label || l.label)), g = nt(), k = h(() => e.id || `input-${g}`), S = h(() => `${k.value}-messages`), _ = N(), w = N(), x = N(), V = h(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: b,
      backgroundColorStyles: M
    } = vt(q(e, "bgColor")), {
      textColorClasses: C,
      textColorStyles: O
    } = ft(h(() => e.error || e.disabled ? void 0 : p.value && o.value ? e.color : e.baseColor));
    G(p, (T) => {
      if (y.value) {
        const P = _.value.$el, Y = w.value.$el;
        requestAnimationFrame(() => {
          const X = ki(P), te = Y.getBoundingClientRect(), I = te.x - X.x, E = te.y - X.y - (X.height / 2 - te.height / 2), H = te.width / 0.75, J = Math.abs(H - X.width) > 1 ? {
            maxWidth: Q(H)
          } : void 0, he = getComputedStyle(P), j = getComputedStyle(Y), oe = parseFloat(he.transitionDuration) * 1e3 || 150, ge = parseFloat(j.getPropertyValue("--v-field-label-scale")), U = j.getPropertyValue("color");
          P.style.visibility = "visible", Y.style.visibility = "hidden", xn(P, {
            transform: `translate(${I}px, ${E}px) scale(${ge})`,
            color: U,
            ...J
          }, {
            duration: oe,
            easing: Ua,
            direction: T ? "normal" : "reverse"
          }).finished.then(() => {
            P.style.removeProperty("visibility"), Y.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const D = h(() => ({
      isActive: p,
      isFocused: o,
      controlRef: x,
      blur: d,
      focus: c
    }));
    function A(T) {
      T.target !== document.activeElement && T.preventDefault();
    }
    return Z(() => {
      var I, E, H;
      const T = e.variant === "outlined", P = l["prepend-inner"] || e.prependInnerIcon, Y = !!(e.clearable || l.clear), X = !!(l["append-inner"] || e.appendInnerIcon || Y), te = () => l.label ? l.label({
        ...D.value,
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label;
      return u("div", B({
        class: ["v-field", {
          "v-field--active": p.value,
          "v-field--appended": X,
          "v-field--center-affix": e.centerAffix ?? !V.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": P,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !te(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, b.value, r.value, s.value, v.value, m.value, e.class],
        style: [M.value, e.style],
        onClick: A
      }, n), [u("div", {
        class: "v-field__overlay"
      }, null), u(Pi, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), P && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (I = l["prepend-inner"]) == null ? void 0 : I.call(l, D.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && y.value && u(Oa, {
        key: "floating-label",
        ref: w,
        class: [C.value],
        floating: !0,
        for: k.value,
        style: O.value
      }, {
        default: () => [te()]
      }), u(Oa, {
        ref: _,
        for: k.value
      }, {
        default: () => [te()]
      }), (E = l.default) == null ? void 0 : E.call(l, {
        ...D.value,
        props: {
          id: k.value,
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
          onMousedown: (J) => {
            J.preventDefault(), J.stopPropagation();
          }
        }, [l.clear ? l.clear() : u(f, {
          name: "clear"
        }, null)]), [[ut, e.dirty]])]
      }), X && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [(H = l["append-inner"]) == null ? void 0 : H.call(l, D.value), e.appendInnerIcon && u(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", C.value],
        style: O.value
      }, [T && u(pe, null, [u("div", {
        class: "v-field__outline__start"
      }, null), y.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Oa, {
        ref: w,
        floating: !0,
        for: k.value
      }, {
        default: () => [te()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), V.value && y.value && u(Oa, {
        ref: w,
        floating: !0,
        for: k.value
      }, {
        default: () => [te()]
      })])]);
    }), {
      controlRef: x
    };
  }
});
function Dp(e) {
  const t = Object.keys(Uu.props).filter((n) => !yi(n) && n !== "class" && n !== "style");
  return kr(e, t);
}
const Op = ["color", "file", "time", "date", "datetime-local", "week", "month"], Hu = L({
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
    }), f = h(() => ["plain", "underlined"].includes(e.variant));
    function v(V, b) {
      var M, C;
      !e.autofocus || !V || (C = (M = b[0].target) == null ? void 0 : M.focus) == null || C.call(M);
    }
    const m = N(), p = N(), y = N(), g = h(() => Op.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
    function k() {
      var V;
      y.value !== document.activeElement && ((V = y.value) == null || V.focus()), s.value || r();
    }
    function S(V) {
      a("mousedown:control", V), V.target !== y.value && (k(), V.preventDefault());
    }
    function _(V) {
      k(), a("click:control", V);
    }
    function w(V) {
      V.stopPropagation(), k(), He(() => {
        i.value = null, pc(e["onClick:clear"], V);
      });
    }
    function x(V) {
      var M;
      const b = V.target;
      if (i.value = b.value, (M = e.modelModifiers) != null && M.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const C = [b.selectionStart, b.selectionEnd];
        He(() => {
          b.selectionStart = C[0], b.selectionEnd = C[1];
        });
      }
    }
    return Z(() => {
      const V = !!(l.counter || e.counter !== !1 && e.counter != null), b = !!(V || l.details), [M, C] = nl(n), {
        modelValue: O,
        ...D
      } = en.filterProps(e), A = Dp(e);
      return u(en, B({
        ref: m,
        modelValue: i.value,
        "onUpdate:modelValue": (T) => i.value = T,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, M, D, {
        centerAffix: !f.value,
        focused: s.value
      }), {
        ...l,
        default: (T) => {
          let {
            id: P,
            isDisabled: Y,
            isDirty: X,
            isReadonly: te,
            isValid: I
          } = T;
          return u(Uu, B({
            ref: p,
            onMousedown: S,
            onClick: _,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, A, {
            id: P.value,
            active: g.value || X.value,
            dirty: X.value || e.dirty,
            disabled: Y.value,
            focused: s.value,
            error: I.value === !1
          }), {
            ...l,
            default: (E) => {
              let {
                props: {
                  class: H,
                  ...J
                }
              } = E;
              const he = Ve(u("input", B({
                ref: y,
                value: i.value,
                onInput: x,
                autofocus: e.autofocus,
                readonly: te.value,
                disabled: Y.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: k,
                onBlur: o
              }, J, C), null), [[gt("intersect"), {
                handler: v
              }, null, {
                once: !0
              }]]);
              return u(pe, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: H,
                "data-no-activator": ""
              }, [l.default(), he]) : tc(he, {
                class: H
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: b ? (T) => {
          var P;
          return u(pe, null, [(P = l.details) == null ? void 0 : P.call(l, T), V && u(pe, null, [u("span", null, null), u(xp, {
            active: e.persistentCounter || s.value,
            value: c.value,
            max: d.value
          }, l.counter)])]);
        } : void 0
      });
    }), $n({}, m, p, y);
  }
});
const Ip = L({
  renderless: Boolean,
  ...ie()
}, "VVirtualScrollItem"), Tp = z()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Ip(),
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
      return e.renderless ? u(pe, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : u("div", B({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(o = l.default) == null ? void 0 : o.call(l)]);
    });
  }
}), Ap = -1, Ep = 1, $l = 100, Lp = L({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Fp(e, t) {
  const n = oo(), a = re(0);
  je(() => {
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
    resizeRef: f,
    contentRect: v
  } = fl();
  je(() => {
    f.value = o.value;
  });
  const m = h(() => {
    var E;
    return o.value === document.documentElement ? n.height.value : ((E = v.value) == null ? void 0 : E.height) || parseInt(e.height) || 0;
  }), p = h(() => !!(o.value && c.value && m.value && a.value));
  let y = Array.from({
    length: t.value.length
  }), g = Array.from({
    length: t.value.length
  });
  const k = re(0);
  let S = -1;
  function _(E) {
    return y[E] || a.value;
  }
  const w = hc(() => {
    const E = performance.now();
    g[0] = 0;
    const H = t.value.length;
    for (let J = 1; J <= H - 1; J++)
      g[J] = (g[J - 1] || 0) + _(J - 1);
    k.value = Math.max(k.value, performance.now() - E);
  }, k), x = G(p, (E) => {
    E && (x(), d = c.value.offsetTop, w.immediate(), Y(), ~S && He(() => {
      $e && window.requestAnimationFrame(() => {
        te(S), S = -1;
      });
    }));
  });
  G(m, (E, H) => {
    H && Y();
  }), qe(() => {
    w.clear();
  });
  function V(E, H) {
    const J = y[E], he = a.value;
    a.value = he ? Math.min(a.value, H) : H, (J !== H || he !== a.value) && (y[E] = H, w());
  }
  function b(E) {
    return E = rt(E, 0, t.value.length - 1), g[E] || 0;
  }
  function M(E) {
    return Rp(g, E);
  }
  let C = 0, O = 0, D = 0;
  function A() {
    if (!o.value || !c.value)
      return;
    const E = o.value.scrollTop, H = performance.now();
    H - D > 500 ? (O = Math.sign(E - C), d = c.value.offsetTop) : O = E - C, C = E, D = H, Y();
  }
  function T() {
    !o.value || !c.value || (O = 0, D = 0, Y());
  }
  let P = -1;
  function Y() {
    cancelAnimationFrame(P), P = requestAnimationFrame(X);
  }
  function X() {
    if (!o.value || !m.value)
      return;
    const E = C - d, H = Math.sign(O), J = Math.max(0, E - $l), he = rt(M(J), 0, t.value.length), j = E + m.value + $l, oe = rt(M(j) + 1, he + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (H !== Ap || he < l.value) && (H !== Ep || oe > i.value)
    ) {
      const ge = b(l.value) - b(he), U = b(oe) - b(i.value);
      Math.max(ge, U) > $l ? (l.value = he, i.value = oe) : (he <= 0 && (l.value = he), oe >= t.value.length && (i.value = oe));
    }
    s.value = b(l.value), r.value = b(t.value.length) - b(i.value);
  }
  function te(E) {
    const H = b(E);
    !o.value || E && !H ? S = E : o.value.scrollTop = H;
  }
  const I = h(() => t.value.slice(l.value, i.value).map((E, H) => ({
    raw: E,
    index: H + l.value
  })));
  return G(t, () => {
    y = Array.from({
      length: t.value.length
    }), g = Array.from({
      length: t.value.length
    }), w.immediate(), Y();
  }, {
    deep: !0
  }), {
    containerRef: o,
    markerRef: c,
    computedItems: I,
    paddingTop: s,
    paddingBottom: r,
    scrollToIndex: te,
    handleScroll: A,
    handleScrollend: T,
    handleItemResize: V
  };
}
function Rp(e, t) {
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
const Np = L({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...Lp(),
  ...ie(),
  ...Nt()
}, "VVirtualScroll"), Yp = z()({
  name: "VVirtualScroll",
  props: Np(),
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
      paddingTop: f,
      paddingBottom: v,
      computedItems: m
    } = Fp(e, q(e, "items"));
    return mn(() => e.renderless, () => {
      function p() {
        var k, S;
        const g = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[g]("scroll", r, {
          passive: !0
        }), document[g]("scrollend", o)) : ((k = i.value) == null || k[g]("scroll", r, {
          passive: !0
        }), (S = i.value) == null || S[g]("scrollend", o));
      }
      We(() => {
        i.value = Lr(a.vnode.el, !0), p(!0);
      }), qe(p);
    }), Z(() => {
      const p = m.value.map((y) => u(Tp, {
        key: y.index,
        renderless: e.renderless,
        "onUpdate:height": (g) => c(y.index, g)
      }, {
        default: (g) => {
          var k;
          return (k = n.default) == null ? void 0 : k.call(n, {
            item: y.raw,
            index: y.index,
            ...g
          });
        }
      }));
      return e.renderless ? u(pe, null, [u("div", {
        ref: s,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: Q(f.value)
        }
      }, null), p, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: Q(v.value)
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
          paddingTop: Q(f.value),
          paddingBottom: Q(v.value)
        }
      }, [p])]);
    }), {
      scrollToIndex: d
    };
  }
});
function Bp(e, t) {
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
    var d, f;
    if (r.key === "Tab" && ((d = t.value) == null || d.focus()), !["PageDown", "PageUp", "Home", "End"].includes(r.key))
      return;
    const o = (f = e.value) == null ? void 0 : f.$el;
    if (!o)
      return;
    (r.key === "Home" || r.key === "End") && o.scrollTo({
      top: r.key === "Home" ? 0 : o.scrollHeight,
      behavior: "smooth"
    }), await i();
    const c = o.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (r.key === "PageDown" || r.key === "Home") {
      const v = o.getBoundingClientRect().top;
      for (const m of c)
        if (m.getBoundingClientRect().top >= v) {
          m.focus();
          break;
        }
    } else {
      const v = o.getBoundingClientRect().bottom;
      for (const m of [...c].reverse())
        if (m.getBoundingClientRect().bottom <= v) {
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
const $p = L({
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
}, "Select"), Wp = L({
  ...$p(),
  ...Je(Hu({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...ua({
    transition: {
      component: Di
    }
  })
}, "VSelect"), Up = z()({
  name: "VSelect",
  props: Wp(),
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
      set: (I) => {
        var E;
        r.value && !I && ((E = i.value) != null && E.ΨopenChildren) || (r.value = I);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: f
    } = kp(e), v = fe(e, "modelValue", [], (I) => d(I === null ? [null] : Xe(I)), (I) => {
      const E = f(I);
      return e.multiple ? E : E[0] ?? null;
    }), m = h(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), p = ro(), y = h(() => v.value.map((I) => I.value)), g = re(!1), k = h(() => o.value ? e.closeText : e.openText);
    let S = "", _;
    const w = h(() => e.hideSelected ? c.value.filter((I) => !v.value.some((E) => E === I)) : c.value), x = h(() => e.hideNoData && !w.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), V = h(() => {
      var I;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((I = e.menuProps) == null ? void 0 : I.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), b = N(), {
      onListScroll: M,
      onListKeydown: C
    } = Bp(b, l);
    function O(I) {
      e.openOnClear && (o.value = !0);
    }
    function D() {
      x.value || (o.value = !o.value);
    }
    function A(I) {
      var j, oe;
      if (!I.key || e.readonly || p != null && p.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(I.key) && I.preventDefault(), ["Enter", "ArrowDown", " "].includes(I.key) && (o.value = !0), ["Escape", "Tab"].includes(I.key) && (o.value = !1), I.key === "Home" ? (j = b.value) == null || j.focus("first") : I.key === "End" && ((oe = b.value) == null || oe.focus("last"));
      const E = 1e3;
      function H(ge) {
        const U = ge.key.length === 1, de = !ge.ctrlKey && !ge.metaKey && !ge.altKey;
        return U && de;
      }
      if (e.multiple || !H(I))
        return;
      const J = performance.now();
      J - _ > E && (S = ""), S += I.key.toLowerCase(), _ = J;
      const he = c.value.find((ge) => ge.title.toLowerCase().startsWith(S));
      he !== void 0 && (v.value = [he]);
    }
    function T(I) {
      if (e.multiple) {
        const E = v.value.findIndex((H) => e.valueComparator(H.value, I.value));
        if (E === -1)
          v.value = [...v.value, I];
        else {
          const H = [...v.value];
          H.splice(E, 1), v.value = H;
        }
      } else
        v.value = [I], o.value = !1;
    }
    function P(I) {
      var E;
      (E = b.value) != null && E.$el.contains(I.relatedTarget) || (o.value = !1);
    }
    function Y() {
      var I;
      g.value && ((I = l.value) == null || I.focus());
    }
    function X(I) {
      g.value = !0;
    }
    function te(I) {
      if (I == null)
        v.value = [];
      else if (Wa(l.value, ":autofill") || Wa(l.value, ":-webkit-autofill")) {
        const E = c.value.find((H) => H.title === I);
        E && T(E);
      } else
        l.value && (l.value.value = "");
    }
    return G(o, () => {
      if (!e.hideSelected && o.value && v.value.length) {
        const I = w.value.findIndex((E) => v.value.some((H) => e.valueComparator(H.value, E.value)));
        $e && window.requestAnimationFrame(() => {
          var E;
          I >= 0 && ((E = s.value) == null || E.scrollToIndex(I));
        });
      }
    }), G(w, (I, E) => {
      g.value && (!I.length && e.hideNoData && (o.value = !1), !E.length && I.length && (o.value = !0));
    }), Z(() => {
      const I = !!(e.chips || n.chip), E = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), H = v.value.length > 0, J = el.filterProps(e), he = H || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(el, B({
        ref: l
      }, J, {
        modelValue: v.value.map((j) => j.props.value).join(", "),
        "onUpdate:modelValue": te,
        focused: g.value,
        "onUpdate:focused": (j) => g.value = j,
        validationValue: v.externalValue,
        counterValue: m.value,
        dirty: H,
        class: ["v-select", {
          "v-select--active-menu": o.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": v.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: he,
        "onClick:clear": O,
        "onMousedown:control": D,
        onBlur: P,
        onKeydown: A,
        "aria-label": a(k.value),
        title: a(k.value)
      }), {
        ...n,
        default: () => u(pe, null, [u(hl, B({
          ref: i,
          modelValue: o.value,
          "onUpdate:modelValue": (j) => o.value = j,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: x.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: Y
        }, V.value), {
          default: () => [E && u(Cp, {
            ref: b,
            selected: y.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (j) => j.preventDefault(),
            onKeydown: C,
            onFocusin: X,
            onScrollPassive: M,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, {
            default: () => {
              var j, oe, ge;
              return [(j = n["prepend-item"]) == null ? void 0 : j.call(n), !w.value.length && !e.hideNoData && (((oe = n["no-data"]) == null ? void 0 : oe.call(n)) ?? u(Qa, {
                title: a(e.noDataText)
              }, null)), u(Yp, {
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
                    onClick: () => T(de)
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
                      return u(pe, null, [e.multiple && !e.hideSelected ? u(Kl, {
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
        }), v.value.map((j, oe) => {
          function ge(Pt) {
            Pt.stopPropagation(), Pt.preventDefault(), T(j);
          }
          const U = {
            "onClick:close": ge,
            onMousedown(Pt) {
              Pt.preventDefault(), Pt.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, de = I ? !!n.chip : !!n.selection, jt = de ? Cr(I ? n.chip({
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
            }, [I ? n.chip ? u(xe, {
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
            }) : u(Qy, B({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: j.title,
              disabled: j.props.disabled
            }, U), null) : jt ?? u("span", {
              class: "v-select__selection-text"
            }, [j.title, e.multiple && oe < v.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [Me(",")])])]);
        })]),
        "append-inner": function() {
          var U;
          for (var j = arguments.length, oe = new Array(j), ge = 0; ge < j; ge++)
            oe[ge] = arguments[ge];
          return u(pe, null, [(U = n["append-inner"]) == null ? void 0 : U.call(n, ...oe), e.menuIcon ? u(Ce, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), $n({
      isFocused: g,
      menu: o,
      select: T
    }, l);
  }
}), Hp = /* @__PURE__ */ ct("div", { class: "v-picker__header" }, null, -1), zp = { class: "v-picker__body" }, jp = /* @__PURE__ */ ct("span", { class: "text-h3" }, ":", -1), Gp = { class: "v-picker__actions" }, qp = /* @__PURE__ */ Le({
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
    }), s = N("10"), r = N("00"), o = N("AM"), c = h(() => a.mode == Gt.Normal), d = h(() => a.rollingNumbers ? -1 : 0), f = h(() => a.rollingNumbers ? a.mode == Gt.Normal ? 13 : 24 : a.mode == Gt.Normal ? 12 : 23), v = h(() => a.rollingNumbers ? -1 : 0), m = h(() => a.rollingNumbers ? 60 : 59), p = h(() => c.value ? s.value + ":" + r.value + " " + o.value : s.value + ":" + r.value);
    function y() {
      l("update:modelValue", p.value), l("click:save", p.value);
    }
    function g() {
      l("click:cancel", void 0);
    }
    function k() {
      l("update:modelValue", p.value);
    }
    function S() {
      a.closeOnOutsideClick && g();
    }
    const _ = G(o, () => {
      k();
    }), w = G(s, (V) => {
      a.mode == Gt.Normal && (a.rollingNumbers ? V <= 0 ? s.value = 12 : V > 12 && (s.value = 1) : V <= 0 ? s.value = 0 : V > 12 && (s.value = 12)), a.mode == Gt.Military && (a.rollingNumbers ? V < 0 ? s.value = 23 : V > 23 && (s.value = 0) : V < 0 ? s.value = 0 : V > 23 && (s.value = 23)), s.value < 10 && a.padStart && (s.value = s.value.toString().padStart(2, "0")), k();
    }), x = G(r, (V) => {
      a.rollingNumbers && (V < 0 && (r.value = 59), V > 59 && (r.value = 0)), r.value < 10 && a.padStart && (r.value = r.value.toString().padStart(2, "0")), k();
    });
    return Ae(() => {
      _(), w(), x();
    }), We(() => {
      if (!ne(a.modelValue)) {
        if (a.mode == Gt.Normal) {
          const V = a.modelValue.split(" ");
          ["am", "pm"].includes(V[1].toLowerCase()) && (o.value = V[1].toUpperCase());
          const M = V[0].split(":");
          s.value = M[0], r.value = M[1];
        }
        if (a.mode == Gt.Military) {
          const V = a.modelValue.split(":");
          s.value = V[0], r.value = V[1];
        }
      }
    }), (V, b) => {
      const M = Qt("VPickerTitle"), C = gt("maska");
      return Ve((ee(), se(Qn, {
        class: "v-picker v-picker--with-actions",
        width: a.width
      }, {
        default: R(() => [
          u(M, null, {
            default: R(() => [
              Me(Ze(a.title), 1)
            ]),
            _: 1
          }),
          Hp,
          ct("div", zp, [
            u(Ne, { justify: "center" }, {
              default: R(() => [
                u(we, { cols: "3" }, {
                  default: R(() => [
                    Ve(u(el, {
                      modelValue: s.value,
                      "onUpdate:modelValue": b[0] || (b[0] = (O) => s.value = O),
                      type: "number",
                      min: d.value,
                      max: f.value
                    }, null, 8, ["modelValue", "min", "max"]), [
                      [C, void 0, i.value]
                    ])
                  ]),
                  _: 1
                }),
                u(we, { cols: "1" }, {
                  default: R(() => [
                    jp
                  ]),
                  _: 1
                }),
                u(we, { cols: "3" }, {
                  default: R(() => [
                    Ve(u(el, {
                      modelValue: r.value,
                      "onUpdate:modelValue": b[1] || (b[1] = (O) => r.value = O),
                      type: "number",
                      min: v.value,
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
                    u(Up, {
                      modelValue: o.value,
                      "onUpdate:modelValue": b[2] || (b[2] = (O) => o.value = O),
                      items: n
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : De("", !0)
              ]),
              _: 1
            })
          ]),
          ct("div", Gp, [
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
                onClick: y
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
}), Kp = /* @__PURE__ */ Le({
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
    function f() {
      l.value.invalidate(), a("invalidated", l.value.name);
    }
    function v() {
      r.value = !r.value;
    }
    function m() {
      r.value = !1;
    }
    function p(g) {
      r.value = !1, c(g);
    }
    const y = G(s.value, (g) => {
      c(g.value);
    });
    return Ae(() => {
      y();
    }), We(() => {
      l.value.value = n.modelValue, l.value.isLoading(!1);
    }), (g, k) => (ee(), se(Ne, { "no-gutters": "" }, {
      default: R(() => {
        var S;
        return [
          u(hl, B({
            modelValue: r.value,
            "onUpdate:modelValue": k[1] || (k[1] = (_) => r.value = _)
          }, (S = i.value) == null ? void 0 : S.props()), {
            activator: R(({ props: _ }) => {
              var w;
              return [
                u(ha, B({ field: l.value }, { ..._, ...(w = l.value) == null ? void 0 : w.props() }, {
                  fields: o.value,
                  onUpdated: c,
                  onValidated: d,
                  onInvalidated: f,
                  "onClick:prependInner": v,
                  "onClick:appendInner": v
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
                        u(qp, B({
                          modelValue: s.value.value,
                          "onUpdate:modelValue": k[0] || (k[0] = (w) => s.value.value = w)
                        }, (_ = s.value) == null ? void 0 : _.props(), {
                          "onClick:save": p,
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
let zu = N(!1);
const Zp = h(() => zu.value);
function ju(e) {
  const t = window;
  if (t && !t.grecaptcha) {
    const n = document.createElement("script");
    document.head.appendChild(n), n.onload = () => {
      window.grecaptcha.ready(() => {
        zu.value = !0;
      });
    }, n.setAttribute(
      "src",
      `https://www.google.com/recaptcha/api.js?render=${e}`
    );
  }
}
const Xp = L({
  ...ie(),
  ...Od()
}, "VForm"), rr = z()({
  name: "VForm",
  props: Xp(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Id(e), i = N();
    function s(o) {
      o.preventDefault(), l.reset();
    }
    function r(o) {
      const c = o, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), a("submit", c), c.defaultPrevented || d.then((f) => {
        var m;
        let {
          valid: v
        } = f;
        v && ((m = i.value) == null || m.submit());
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
}), Jp = /* @__PURE__ */ Le({
  __name: "InputFormLoader",
  props: {
    form: {
      type: wn,
      required: !0,
      validator: (e) => cc(e)
    }
  },
  emits: ["update:form", ...Object.values(ae)],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.form), i = N(rr), s = h(() => !ne(l.value.google_recaptcha_site_key)), r = h(() => {
      var D, A;
      return (A = (D = l.value) == null ? void 0 : D.fields) == null ? void 0 : A.filter((T) => T.isParentPopulated(g(T.depends_on ?? "")));
    }), o = h(() => {
      var D, A;
      return Array.isArray((D = l.value) == null ? void 0 : D.fields) ? (A = l.value) == null ? void 0 : A.fields : [];
    }), c = h(() => {
      var D, A;
      return ((A = (D = l.value) == null ? void 0 : D.buttons) == null ? void 0 : A.length) > 0;
    }), d = h(() => !f.value), f = h(() => v.value ? !y.value : !0), v = h(() => m.value > 0), m = h(() => p.value.length || 0), p = h(() => {
      var D, A;
      return ((A = (D = l.value) == null ? void 0 : D.fields) == null ? void 0 : A.filter(
        (T) => !ne(T.require_confirmation) && T.require_confirmation
      )) || [];
    }), y = h(() => p.value.filter((D) => !D.validated).length > 0 || !1);
    function g(D) {
      var A;
      return (A = l.value) == null ? void 0 : A.fields.find((T) => T.name === D);
    }
    function k(D) {
      return console.log(), D.type === wa.Process ? s.value ? Zp.value ? d.value : !0 : d.value : D.disabled;
    }
    async function S(D) {
      D.type === wa.Process ? await _() : D.type === wa.Reset ? b() : D.type === wa.Cancel && M();
    }
    async function _() {
      if (a(ae.Processing, !0), V(!0), await w()) {
        a(ae.Validated, !0), i.value.resetValidation();
        const A = window;
        let T;
        if (s.value && A.grecaptcha ? A.grecaptcha.ready(function() {
          A.grecaptcha.execute(l.value.google_recaptcha_site_key, {
            action: `process_form_${l.value.name.replace("\\", "_")}`
          }).then(async function(P) {
            T = await l.value.process(P);
          });
        }) : T = await l.value.process(), !T) {
          a(ae.Failed, !0), V(!1);
          return;
        }
        a(ae.Successful, !0), l.value.axios.expecting_results && a(ae.Results, T);
      } else
        a(ae.Validated, !1), l.value.failedValidation(), V(!1), a(ae.Failed, !0);
    }
    async function w() {
      const { valid: D } = await i.value.validate();
      return D;
    }
    async function x(D) {
      const A = o.value.filter((T) => T.depends_on === D.name);
      for (const T of A) {
        const P = await T.load(l.value, D);
        P && (T instanceof lc || T instanceof ic) && T.loadItems(P);
      }
      a(ae.Updated, !0);
    }
    function V(D) {
      l.value.isLoading(D), a(ae.Loading, D);
    }
    function b() {
      i.value.resetValidation(), V(!1), a(ae.Reset, !0);
    }
    function M() {
      a(ae.Cancelled, !0);
    }
    const C = je(() => {
      l.value = n.form;
    }), O = G(l.value, (D) => {
      a(ae.Updated, D);
    });
    return We(() => {
      s.value && ju(l.value.google_recaptcha_site_key);
    }), Ae(() => {
      O(), C();
    }), (D, A) => {
      var P;
      const T = Qt("EasyButton");
      return ee(), se(Oe(rr), B(((P = l.value) == null ? void 0 : P.props()) ?? {}, {
        ref_key: "formReference",
        ref: i,
        class: "mx-auto w-100"
      }), {
        default: R(() => [
          u(we, { cols: "12" }, {
            default: R(() => [
              u(Ne, { class: "easy-fields" }, {
                default: R(() => [
                  (ee(!0), Xt(pe, null, Tn(r.value, (Y, X) => {
                    var te;
                    return ee(), se(we, {
                      cols: ((te = Y.cols) == null ? void 0 : te.toString()) ?? "12",
                      offset: Y.offset,
                      key: X
                    }, {
                      default: R(() => [
                        u(Oe(ha), {
                          field: r.value[X],
                          "onUpdate:field": (I) => r.value[X] = I,
                          fields: o.value,
                          onUpdated: (I) => x(Y),
                          onValidated: Y.validate,
                          onInvalidated: Y.invalidate
                        }, null, 8, ["field", "onUpdate:field", "fields", "onUpdated", "onValidated", "onInvalidated"])
                      ]),
                      _: 2
                    }, 1032, ["cols", "offset"]);
                  }), 128))
                ]),
                _: 1
              }),
              c.value ? (ee(), se(Ne, {
                key: 0,
                align: l.value.button_align_row,
                justify: l.value.button_justify_row,
                class: "easy-buttons"
              }, {
                default: R(() => {
                  var Y;
                  return [
                    (ee(!0), Xt(pe, null, Tn((Y = l.value) == null ? void 0 : Y.buttons, (X, te) => (ee(), se(we, {
                      cols: "auto",
                      key: te
                    }, {
                      default: R(() => [
                        u(T, {
                          button: X,
                          identifier: te,
                          disabled: k(X),
                          onClick: (I) => S(X)
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
}), Qp = /* @__PURE__ */ Le({
  __name: "ActionFormLoader",
  props: {
    form: {
      type: Cn,
      required: !0,
      validator: (e) => dc(e)
    }
  },
  emits: [
    "update:form",
    ae.Loading,
    ae.Loaded,
    ae.Results,
    ae.Cancelled,
    ae.Updated,
    ae.Reset,
    ae.Processing,
    ae.Failed,
    ae.Successful
  ],
  setup(e, { emit: t }) {
    const n = e, a = t, l = N(n.form), i = h(() => !ne(l.value.google_recaptcha_site_key)), s = je(() => l.value = n.form), r = h(() => {
      var m;
      return (((m = l.value) == null ? void 0 : m.actions) ?? []).filter((p) => d(p));
    }), o = h(() => l.value.inline);
    function c(m) {
      return o.value ? "auto" : m.cols;
    }
    function d(m) {
      return ne(m.conditions) ? !0 : m.conditions.every((p) => {
        const y = l.value.additional_data.find(
          (g) => g.key == p.check
        );
        if (ne(y))
          return !1;
        switch (p.operator) {
          case "==":
            return (y == null ? void 0 : y.value) === p.against;
          case "!=":
            return (y == null ? void 0 : y.value) !== p.against;
          case ">":
            return (y == null ? void 0 : y.value) > p.against;
          case "<":
            return (y == null ? void 0 : y.value) < p.against;
          case ">=":
            return (y == null ? void 0 : y.value) >= p.against;
          case "<=":
            return (y == null ? void 0 : y.value) <= p.against;
          default:
            throw new Error(`Unsupported operator: ${p.operator}`);
        }
      });
    }
    function f(m) {
      l.value.isLoading(m), a(ae.Loading, m);
    }
    async function v(m) {
      a(ae.Processing, !0), f(!0);
      const p = window;
      let y;
      if (i.value && p.grecaptcha ? p.grecaptcha.ready(function() {
        p.grecaptcha.execute(l.value.google_recaptcha_site_key, {
          action: `process_form_${l.value.name.replace("\\", "_")}_${m.replace("\\", "_")}`
        }).then(async function(g) {
          y = await l.value.process(m, g);
        });
      }) : y = await l.value.process(m), !y) {
        a(ae.Failed, !0), f(!1);
        return;
      }
      a(ae.Successful, !0), l.value.axios.expecting_results && a(ae.Results, y);
    }
    return Ae(() => {
      s();
    }), We(() => {
      i.value && ju(l.value.google_recaptcha_site_key);
    }), (m, p) => {
      const y = Qt("EasyIcon"), g = Qt("EasyButton");
      return ee(), se(we, { cols: 12 }, {
        default: R(() => [
          u(Ne, {
            justify: l.value.justify_row
          }, {
            default: R(() => [
              (ee(!0), Xt(pe, null, Tn(r.value, (k, S) => (ee(), se(we, {
                key: S,
                cols: c(k),
                class: "py-0 px-2"
              }, {
                default: R(() => [
                  Oe(ne)(k.icon) ? De("", !0) : (ee(), se(y, {
                    key: 0,
                    icon: k.icon,
                    identifier: k.identifier,
                    onClick: (_) => v(k.identifier)
                  }, null, 8, ["icon", "identifier", "onClick"])),
                  Oe(ne)(k.button) ? De("", !0) : (ee(), se(g, {
                    key: 1,
                    button: k.button,
                    identifier: k.identifier,
                    disabled: !1,
                    onClick: (_) => v(k.identifier)
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
}), ek = /* @__PURE__ */ Le({
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
}), tk = /* @__PURE__ */ Le({
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
          var r, o, c, d, f, v;
          return [
            ((r = n.value) == null ? void 0 : r.type) === Oe(us).Circular ? (ee(), se(Ai, rs(B({ key: 0 }, (c = (o = n.value) == null ? void 0 : o.progress) == null ? void 0 : c.props())), null, 16)) : De("", !0),
            ((d = n.value) == null ? void 0 : d.type) === Oe(us).Linear ? (ee(), se(Vi, rs(B({ key: 1 }, (v = (f = n.value) == null ? void 0 : f.progress) == null ? void 0 : v.props())), null, 16)) : De("", !0)
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
}), nk = /* @__PURE__ */ Le({
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
  emits: ["update:form", ...Object.values(ae)],
  setup(e, { emit: t }) {
    const n = t, a = e, l = gr.getInstance(), i = N(!1), s = N(Ul.csrf ?? new yr()), r = N(!0), o = N(a.form), c = h(() => new oc({
      cols: a.cols,
      sm: a.sm,
      md: a.md,
      lg: a.lg
    })), d = h(() => !ne(o.value.text)), f = h(
      () => l.csrf_endpoint === null ? !0 : s.value.isValidCsrfToken()
    ), v = h(() => s.value.isLoading()), m = h(
      () => {
        var P, Y;
        return (((Y = (P = o == null ? void 0 : o.value) == null ? void 0 : P.alerts) == null ? void 0 : Y.filter((X) => X.display).length) ?? 0) > 0;
      }
    ), p = h(() => {
      var P;
      return !o.value.loading && (o.value instanceof wn || o.value instanceof Cn || !ne((P = o.value) == null ? void 0 : P.text));
    }), y = h(() => {
      if (!r.value || !ne(o.value.name)) {
        if (o.value instanceof wn)
          return kt.Input;
        if (o.value instanceof Cn)
          return kt.Action;
      }
      return kt.Error;
    }), g = h(() => y.value === kt.Action), k = h(() => y.value === kt.Input), S = h(() => y.value === kt.Error);
    function _() {
      var P;
      n(ae.Reset, !0), (P = o.value) == null || P.reset();
    }
    function w() {
      var P;
      n(ae.Cancelled, !0), (P = o.value) == null || P.cancelled();
    }
    function x(P) {
      n(ae.Processing, P);
    }
    function V() {
      n(ae.Failed, !0);
    }
    function b(P) {
      n(ae.Updated, P);
    }
    function M() {
      n(ae.Successful, !0);
    }
    function C(P) {
      o.value.hasResults(P), n(ae.Results, P);
    }
    function O(P) {
      n(ae.Validated, P);
    }
    function D(P) {
      n(ae.Loading, P), o.value.isLoading(P), r.value = P;
    }
    const A = G(f, async (P) => {
      i.value && P && await T();
    });
    Ae(() => {
      A();
    }), di(async () => {
      D(!0), !ne(a.form) && ne(a.name) ? (i.value = !1, o.value = a.form, o.value.additional_data = a.additionalData, o.value.additional_load_data = a.additionalLoadData, D(!1), n(ae.Loaded, !0)) : ne(a.name) || (i.value = !0, f.value ? await T() : v.value || await s.value.fetchNewToken() || (o.value.text = s.value.error_message, D(!1)));
    });
    async function T() {
      o.value.name = a.name, o.value.additional_load_data = a.additionalLoadData;
      const P = await o.value.load();
      P ? (P == null ? void 0 : P.type) == kt.Input ? (o.value = new wn(P), o.value.triggerAlert(rc.AfterLoad), n(ae.Loaded, !0)) : P.type == kt.Action && (o.value = new Cn(P), n(ae.Loaded, !0)) : (o.value.text = "Error Loading Form - Not Found", n(ae.Loaded, !1)), o.value.additional_data = a.additionalData, o.value.additional_load_data = a.additionalLoadData, D(!1);
    }
    return (P, Y) => {
      var te, I, E, H;
      const X = Qt("EasyAlerts");
      return ee(), se(we, {
        cols: ((te = c.value) == null ? void 0 : te.cols) ?? 12,
        sm: ((I = c.value) == null ? void 0 : I.sm) ?? 12,
        md: ((E = c.value) == null ? void 0 : E.md) ?? 12,
        lg: ((H = c.value) == null ? void 0 : H.lg) ?? 12
      }, {
        default: R(() => [
          Ve(u(Ne, {
            justify: "center",
            class: "easy-loader"
          }, {
            default: R(() => {
              var J;
              return [
                u(tk, {
                  loader: (J = o.value) == null ? void 0 : J.loader
                }, null, 8, ["loader"])
              ];
            }),
            _: 1
          }, 512), [
            [ut, !p.value]
          ]),
          Ve(u(Ne, { class: "easy-title" }, {
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
          m.value ? (ee(), se(Ne, {
            key: 0,
            class: "easy-alerts"
          }, {
            default: R(() => {
              var J;
              return [
                u(X, {
                  alerts: (J = o.value) == null ? void 0 : J.alerts
                }, null, 8, ["alerts"])
              ];
            }),
            _: 1
          })) : De("", !0),
          Ve(u(Ne, {
            "no-gutters": "",
            class: "easy-form"
          }, {
            default: R(() => [
              k.value && !d.value ? (ee(), se(Oe(Jp), B({
                key: 0,
                form: o.value,
                "onUpdate:form": Y[0] || (Y[0] = (J) => o.value = J)
              }, o.value.props(), {
                onResults: C,
                onLoading: D,
                onReset: _,
                onUpdated: b,
                onCancelled: w,
                onProcessing: x,
                onFailed: V,
                onSuccessful: M,
                onValidated: O
              }), null, 16, ["form"])) : g.value && !d.value ? (ee(), se(Oe(Qp), B({
                key: 1,
                form: o.value,
                "onUpdate:form": Y[1] || (Y[1] = (J) => o.value = J)
              }, o.value.props(), {
                onResults: C,
                onLoading: D,
                onReset: _,
                onUpdated: b,
                onCancelled: w,
                onProcessing: x,
                onFailed: V,
                onSuccessful: M,
                onValidated: O
              }), null, 16, ["form"])) : S.value || d.value ? (ee(), se(Oe(ek), {
                key: 2,
                text: o.value.text
              }, null, 8, ["text"])) : De("", !0)
            ]),
            _: 1
          }, 512), [
            [ut, p.value]
          ])
        ]),
        _: 1
      }, 8, ["cols", "sm", "md", "lg"]);
    };
  }
});
/*! maska v2.1.11 | (c) Alexander Shabunevich | Released under the MIT license */
var ak = Object.defineProperty, lk = (e, t, n) => t in e ? ak(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Kn = (e, t, n) => (lk(e, typeof t != "symbol" ? t + "" : t, n), n);
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
    const { mask: i, escaped: s } = this.escapeMask(n), r = [], o = this.opts.tokens != null ? this.opts.tokens : {}, c = this.isReversed() ? -1 : 1, d = this.isReversed() ? "unshift" : "push", f = this.isReversed() ? 0 : i.length - 1, v = this.isReversed() ? () => g > -1 && k > -1 : () => g < i.length && k < t.length, m = (_) => !this.isReversed() && _ <= f || this.isReversed() && _ >= f;
    let p, y = -1, g = this.isReversed() ? i.length - 1 : 0, k = this.isReversed() ? t.length - 1 : 0, S = !1;
    for (; v(); ) {
      const _ = i.charAt(g), w = o[_], x = (w == null ? void 0 : w.transform) != null ? w.transform(t.charAt(k)) : t.charAt(k);
      if (!s.includes(g) && w != null ? (x.match(w.pattern) != null ? (r[d](x), w.repeated ? (y === -1 ? y = g : g === f && g !== y && (g = y - c), f === y && (g -= c)) : w.multiple && (S = !0, g -= c), g += c) : w.multiple ? S && (g += c, k -= c, S = !1) : x === p ? p = void 0 : w.optional && (g += c, k -= c), k += c) : (a && !this.isEager() && r[d](_), x === _ && !this.isEager() ? k += c : p = _, this.isEager() || (g += c)), this.isEager())
        for (; m(g) && (o[i.charAt(g)] == null || s.includes(g)); )
          a ? r[d](i.charAt(g)) : i.charAt(g) === t.charAt(k) && (k += c), g += c;
    }
    return this.memo.set(l, r.join("")), this.memo.get(l);
  }
}
const Gu = (e) => JSON.parse(e.replaceAll("'", '"')), cr = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = ik(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = Wl(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = Wl(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = Wl(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = sk(e.dataset.maskaTokens)), n;
}, Wl = (e) => e !== "" ? !!JSON.parse(e) : !0, ik = (e) => e.startsWith("[") && e.endsWith("]") ? Gu(e) : e, sk = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return Gu(e);
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
class rk {
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
        const d = i.masked(s), f = i.unmasked(s);
        f === "" && "data" in a && a.data != null ? c = a.data : f !== i.unmasked(d) && (c = f);
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
const ci = /* @__PURE__ */ new WeakMap(), ok = (e) => {
  setTimeout(() => {
    var t;
    ((t = ci.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, uk = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), a = { ...t.arg };
  if (n == null || (n == null ? void 0 : n.type) === "file")
    return;
  ok(n);
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
  ci.set(n, new rk(n, a));
}, Rk = {
  install(e, t) {
    const n = new gr(t);
    e.directive("maska", uk).component("EasyIcon", By).component("EasyButton", Yy).component("EasyAlerts", zy).component("EasyDatePicker", Ry).component("EasyTimePicker", Kp).component("EasyColorPicker", Pv).component("EasyCheckboxGroup", Zd).component("EasyPassword", Zy).component("FormLoader", nk), Ul.options = n, n.csrf_endpoint !== null && (Ul.csrf = new yr({
      endpoint: n.buildDomain(n.csrf_endpoint)
    }));
  }
};
export {
  Rk as default
};
