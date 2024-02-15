import { ref as B, computed as y, Fragment as pe, reactive as Ln, watchEffect as je, toRefs as kr, capitalize as ra, isVNode as Ju, Comment as Qu, unref as Me, warn as nl, defineComponent as Fe, camelize as br, h as Rn, getCurrentInstance as ec, inject as Te, provide as Ge, shallowRef as ae, createVNode as u, isRef as oa, mergeProps as W, toRef as X, Text as tc, Transition as fn, watch as J, onBeforeMount as fi, nextTick as He, onBeforeUnmount as Ae, withDirectives as Ve, resolveDirective as gt, vShow as dt, onScopeDispose as qe, effectScope as vi, toRaw as tn, resolveDynamicComponent as _r, TransitionGroup as nc, onMounted as We, readonly as mi, openBlock as ne, createBlock as ue, withCtx as N, createTextVNode as De, toDisplayString as Ze, createCommentVNode as Ie, createElementBlock as Xt, renderList as Tn, resolveComponent as Qt, createSlots as hi, onUnmounted as ac, Teleport as lc, createElementVNode as ft, normalizeClass as Sr, cloneVNode as ic, normalizeProps as ds } from "vue";
import { InputForm as wn, ActionForm as Cn, EasyForm as fs } from "./forms.js";
import { i as oe, P as wr, s as Ul } from "./Store-03b8f4cc.js";
import { F as kt } from "./JustifyRow-eb5715b2.js";
import "axios";
import { a as xa } from "./ButtonVariantTypes-85a127bd.js";
import { L as ve } from "./LoaderEvents-57799137.js";
import { CheckboxGroupField as sc, TextField as rc, SelectField as oc, AutoCompleteField as uc } from "./fields.js";
import { k as cc } from "./ServerCall-badff9b1.js";
import { a as Gt } from "./ViewModeTypes-25f1573e.js";
import { A as dc } from "./AlertTriggers-18dccfa1.js";
import { FormContainer as fc } from "./elements.js";
import { C as Cr } from "./Csrf-74d54fab.js";
import { F as vs } from "./FormLoaderTypes-b32e44d6.js";
import { I as vc } from "./Icon-e8a0240f.js";
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
function Va(e) {
  return e <= 12 && e >= 1;
}
function mc(e) {
  return e.type === kt.Input && e instanceof wn;
}
function hc(e) {
  return e.type === kt.Action && e instanceof Cn;
}
const xr = (e) => {
  const t = window, n = B(!1), a = y(() => e != null && e !== "");
  return {
    loadRecaptcha: () => {
      if (a.value && t && !t.grecaptcha) {
        const l = document.createElement("script");
        document.head.appendChild(l), l.onload = () => {
          t.grecaptcha.ready(() => {
            n.value = !0;
          });
        }, l.setAttribute("src", `https://www.google.com/recaptcha/api.js?render=${e}`);
      }
    },
    getToken: async (l) => !a.value || !t.grecaptcha ? Promise.resolve(void 0) : new Promise((i) => {
      t.grecaptcha.ready(
        () => void (async () => {
          const s = await t.grecaptcha.execute(e, { action: l });
          i(s);
        })()
      );
    }),
    recaptchaIsLoaded: n,
    hasRecaptcha: a
  };
};
function R(e, t) {
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
const ie = R({
  class: [String, Array],
  style: {
    type: [String, Array, Object],
    default: null
  }
}, "component"), Re = typeof window < "u", gi = Re && "IntersectionObserver" in window, ms = Re && "EyeDropper" in window;
function Vr(e, t, n) {
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
function gc(e, t, n) {
  return e == null || !t || typeof t != "string" ? n : e[t] !== void 0 ? e[t] : (t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, ""), Vr(e, t.split("."), n));
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
    return gc(e, t, n);
  if (Array.isArray(t))
    return Vr(e, t, n);
  if (typeof t != "function")
    return n;
  const a = t(e, n);
  return typeof a > "u" ? n : a;
}
function yi(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return Array.from({
    length: e
  }, (n, a) => t + a);
}
function te(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  if (!(e == null || e === ""))
    return isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Hl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ya(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const hs = Object.freeze({
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
}), yc = Object.freeze({
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
function Pr(e, t) {
  const n = {}, a = new Set(Object.keys(e));
  for (const l of t)
    a.has(l) && (n[l] = e[l]);
  return n;
}
function gs(e, t, n) {
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
const Mr = /^on[^a-z]/, pi = (e) => Mr.test(e), pc = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function al(e) {
  const [t, n] = gs(e, [Mr]), a = Je(t, pc), [l, i] = gs(n, ["class", "style", "id", /^data-/]);
  return Object.assign(l, t), Object.assign(i, a), [l, i];
}
function Xe(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function kc(e, t) {
  let n = 0;
  const a = function() {
    for (var l = arguments.length, i = new Array(l), s = 0; s < l; s++)
      i[s] = arguments[s];
    clearTimeout(n), n = setTimeout(() => e(...i), Me(t));
  };
  return a.clear = () => {
    clearTimeout(n);
  }, a.immediate = e, a;
}
function lt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function ys(e) {
  const t = e.toString().trim();
  return t.includes(".") ? t.length - t.indexOf(".") - 1 : 0;
}
function ps(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0";
  return e + n.repeat(Math.max(0, t - e.length));
}
function bc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  const n = [];
  let a = 0;
  for (; a < e.length; )
    n.push(e.substr(a, t)), a += t;
  return n;
}
function xn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const a = {};
  for (const l in e)
    a[l] = e[l];
  for (const l in t) {
    const i = e[l], s = t[l];
    if (Hl(i) && Hl(s)) {
      a[l] = xn(i, s, n);
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
function Dr(e) {
  return e.map((t) => t.type === pe ? Dr(t.children) : t).flat();
}
function rn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (rn.cache.has(e))
    return rn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return rn.cache.set(e, t), t;
}
rn.cache = /* @__PURE__ */ new Map();
function Aa(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => Aa(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => Aa(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Aa(e, t.component.subTree).flat(1);
  }
  return [];
}
function _c(e) {
  return "touches" in e ? {
    clientX: e.touches[0].clientX,
    clientY: e.touches[0].clientY
  } : {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function ki(e) {
  const t = Ln({}), n = y(e);
  return je(() => {
    for (const a in n.value)
      t[a] = n.value[a];
  }, {
    flush: "sync"
  }), kr(t);
}
function $a(e, t) {
  return e.includes(t);
}
function Ir(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const it = () => [Function, Array];
function ks(e, t) {
  return t = "on" + ra(t), !!(e[t] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function Sc(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
    n[a - 1] = arguments[a];
  if (Array.isArray(e))
    for (const l of e)
      l(...n);
  else
    typeof e == "function" && e(...n);
}
function Xn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((a) => `${a}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function Or(e, t, n) {
  let a, l = e.indexOf(document.activeElement);
  const i = t === "next" ? 1 : -1;
  do
    l += i, a = e[l];
  while ((!a || a.offsetParent == null || !((n == null ? void 0 : n(a)) ?? !0)) && l < e.length && l >= 0);
  return a;
}
function Wa(e, t) {
  var a, l, i, s;
  const n = Xn(e);
  if (!t)
    (e === document.activeElement || !e.contains(document.activeElement)) && ((a = n[0]) == null || a.focus());
  else if (t === "first")
    (l = n[0]) == null || l.focus();
  else if (t === "last")
    (i = n.at(-1)) == null || i.focus();
  else if (typeof t == "number")
    (s = n[t]) == null || s.focus();
  else {
    const r = Or(n, t);
    r ? r.focus() : Wa(e, t === "next" ? "first" : "last");
  }
}
function Ua(e, t) {
  if (!(Re && typeof CSS < "u" && typeof CSS.supports < "u" && CSS.supports(`selector(${t})`)))
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function Tr(e) {
  return e.some((t) => Ju(t) ? t.type === Qu ? !1 : t.type !== pe || Tr(t.children) : !0) ? e : null;
}
function wc(e, t) {
  if (!Re || e === 0)
    return t(), () => {
    };
  const n = window.setTimeout(t, e);
  return () => window.clearTimeout(n);
}
const Ar = ["top", "bottom"], Cc = ["start", "end", "left", "right"];
function zl(e, t) {
  let [n, a] = e.split(" ");
  return a || (a = $a(Ar, n) ? "start" : $a(Cc, n) ? "top" : "center"), {
    side: bs(n, t),
    align: bs(a, t)
  };
}
function bs(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function Il(e) {
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
function Ol(e) {
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
function _s(e) {
  return {
    side: e.align,
    align: e.side
  };
}
function Ss(e) {
  return $a(Ar, e.side) ? "y" : "x";
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
function ws(e, t) {
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
function Er(e) {
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
    const c = n.transformOrigin, d = t.x - r - (1 - i) * parseFloat(c), f = t.y - o - (1 - s) * parseFloat(c.slice(c.indexOf(" ") + 1)), v = i ? t.width / i : e.offsetWidth + 1, g = s ? t.height / s : e.offsetHeight + 1;
    return new on({
      x: d,
      y: f,
      width: v,
      height: g
    });
  } else
    return new on(t);
}
function Vn(e, t, n) {
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
const Ea = /* @__PURE__ */ new WeakMap();
function xc(e, t) {
  Object.keys(t).forEach((n) => {
    if (pi(n)) {
      const a = Ir(n), l = Ea.get(e);
      if (t[n] == null)
        l == null || l.forEach((i) => {
          const [s, r] = i;
          s === a && (e.removeEventListener(a, r), l.delete(i));
        });
      else if (!l || ![...l].some((i) => i[0] === a && i[1] === t[n])) {
        e.addEventListener(a, t[n]);
        const i = l || /* @__PURE__ */ new Set();
        i.add([a, t[n]]), Ea.has(e) || Ea.set(e, i);
      }
    } else
      t[n] == null ? e.removeAttribute(n) : e.setAttribute(n, t[n]);
  });
}
function Vc(e, t) {
  Object.keys(t).forEach((n) => {
    if (pi(n)) {
      const a = Ir(n), l = Ea.get(e);
      l == null || l.forEach((i) => {
        const [s, r] = i;
        s === a && (e.removeEventListener(a, r), l.delete(i));
      });
    } else
      e.removeAttribute(n);
  });
}
const bn = 2.4, Cs = 0.2126729, xs = 0.7151522, Vs = 0.072175, Pc = 0.55, Mc = 0.58, Dc = 0.57, Ic = 0.62, Pa = 0.03, Ps = 1.45, Oc = 5e-4, Tc = 1.25, Ac = 1.25, Ms = 0.078, Ds = 12.82051282051282, Ma = 0.06, Is = 1e-3;
function Os(e, t) {
  const n = (e.r / 255) ** bn, a = (e.g / 255) ** bn, l = (e.b / 255) ** bn, i = (t.r / 255) ** bn, s = (t.g / 255) ** bn, r = (t.b / 255) ** bn;
  let o = n * Cs + a * xs + l * Vs, c = i * Cs + s * xs + r * Vs;
  if (o <= Pa && (o += (Pa - o) ** Ps), c <= Pa && (c += (Pa - c) ** Ps), Math.abs(c - o) < Oc)
    return 0;
  let d;
  if (c > o) {
    const f = (c ** Pc - o ** Mc) * Tc;
    d = f < Is ? 0 : f < Ms ? f - f * Ds * Ma : f - Ma;
  } else {
    const f = (c ** Ic - o ** Dc) * Ac;
    d = f > -Is ? 0 : f > -Ms ? f - f * Ds * Ma : f + Ma;
  }
  return d * 100;
}
function un(e) {
  nl(`Vuetify: ${e}`);
}
function Ec(e) {
  nl(`Vuetify error: ${e}`);
}
function Lc(e, t) {
  t = Array.isArray(t) ? t.slice(0, -1).map((n) => `'${n}'`).join(", ") + ` or '${t.at(-1)}'` : `'${t}'`, nl(`[Vuetify UPGRADE] '${e}' is deprecated, use ${t} instead.`);
}
const Rc = [[0.4124, 0.3576, 0.1805], [0.2126, 0.7152, 0.0722], [0.0193, 0.1192, 0.9505]], Fc = (e) => e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
function Nc(e) {
  let {
    r: t,
    g: n,
    b: a
  } = e;
  const l = [0, 0, 0], i = Fc, s = Rc;
  t = i(t / 255), n = i(n / 255), a = i(a / 255);
  for (let r = 0; r < 3; ++r)
    l[r] = s[r][0] * t + s[r][1] * n + s[r][2] * a;
  return l;
}
function jl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Bc(e) {
  return jl(e) && !/^((rgb|hsl)a?\()?var\(--/.test(e);
}
const Ts = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Yc = {
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
  hsl: (e, t, n, a) => As({
    h: e,
    s: t,
    l: n,
    a
  }),
  hsla: (e, t, n, a) => As({
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
  if (typeof e == "string" && Ts.test(e)) {
    const {
      groups: t
    } = e.match(Ts), {
      fn: n,
      values: a
    } = t, l = a.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(i) / 100 : parseFloat(i));
    return Yc[n](...l);
  } else if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((a) => a + a).join("") : [6, 8].includes(t.length) || un(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && un(`'${e}' is not a valid hex(a) color`), Nr(t);
  } else if (typeof e == "object") {
    if (ln(e, ["r", "g", "b"]))
      return e;
    if (ln(e, ["h", "s", "l"]))
      return Ft(_i(e));
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
function As(e) {
  return Ft(_i(e));
}
function ll(e) {
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
function Lr(e) {
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
function _i(e) {
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
function Rr(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return l === void 0 ? `rgb(${t}, ${n}, ${a})` : `rgba(${t}, ${n}, ${a}, ${l})`;
}
function Fr(e) {
  return Rr(Ft(e));
}
function Da(e) {
  const t = Math.round(e).toString(16);
  return ("00".substr(0, 2 - t.length) + t).toUpperCase();
}
function $c(e) {
  let {
    r: t,
    g: n,
    b: a,
    a: l
  } = e;
  return `#${[Da(t), Da(n), Da(a), l !== void 0 ? Da(Math.round(l * 255)) : ""].join("")}`;
}
function Nr(e) {
  e = Wc(e);
  let [t, n, a, l] = bc(e, 2).map((i) => parseInt(i, 16));
  return l = l === void 0 ? l : l / 255, {
    r: t,
    g: n,
    b: a,
    a: l
  };
}
function Br(e) {
  const t = Nr(e);
  return ll(t);
}
function Yr(e) {
  return $c(Ft(e));
}
function Wc(e) {
  return e.startsWith("#") && (e = e.slice(1)), e = e.replace(/([^0-9a-f])/gi, "F"), (e.length === 3 || e.length === 4) && (e = e.split("").map((t) => t + t).join("")), e.length !== 6 && (e = ps(ps(e, 6), 8, "F")), e;
}
function Es(e) {
  const t = qt(e);
  return Nc(t)[1];
}
function Uc(e, t) {
  const n = Es(e), a = Es(t), l = Math.max(n, a), i = Math.min(n, a);
  return (l + 0.05) / (i + 0.05);
}
function Hc(e) {
  const t = Math.abs(Os(qt(0), qt(e)));
  return Math.abs(Os(qt(16777215), qt(e))) > Math.min(t, 50) ? "#fff" : "#000";
}
function St(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return un("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = R(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(a) {
      return Pr(a, t);
    }, e.props._as = String, e.setup = function(a, l) {
      const i = wi();
      if (!i.value)
        return e._setup(a, l);
      const {
        props: s,
        provideSubDefaults: r
      } = Xc(a, a._as ?? e.name, i), o = e._setup(s, l);
      return r(), o;
    };
  }
  return e;
}
function K() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  return (t) => (e ? St : Fe)(t);
}
function nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return K()({
    name: n ?? ra(br(e.replace(/__/g, "-"))),
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
        return Rn(a.tag, {
          class: [e, a.class],
          style: a.style
        }, (s = i.default) == null ? void 0 : s.call(i));
      };
    }
  });
}
function $r(e) {
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
const Ha = "cubic-bezier(0.4, 0, 0.2, 1)", zc = "cubic-bezier(0.0, 0, 0.2, 1)", jc = "cubic-bezier(0.4, 0, 1, 1)";
function Ne(e, t) {
  const n = ec();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function wt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables";
  const t = Ne(e).type;
  return rn((t == null ? void 0 : t.aliasName) || (t == null ? void 0 : t.name));
}
let Wr = 0, La = /* @__PURE__ */ new WeakMap();
function rt() {
  const e = Ne("getUid");
  if (La.has(e))
    return La.get(e);
  {
    const t = Wr++;
    return La.set(e, t), t;
  }
}
rt.reset = () => {
  Wr = 0, La = /* @__PURE__ */ new WeakMap();
};
function Ur(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  for (; e; ) {
    if (t ? Gc(e) : Si(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function za(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (Si(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Si(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Gc(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function qc(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ne("injectSelf");
  const {
    provides: n
  } = t;
  if (n && e in n)
    return n[e];
}
function Kc(e) {
  for (; e; ) {
    if (window.getComputedStyle(e).position === "fixed")
      return !0;
    e = e.offsetParent;
  }
  return !1;
}
function Q(e) {
  const t = Ne("useRender");
  t.render = e;
}
const ja = Symbol.for("vuetify:defaults");
function wi() {
  const e = Te(ja);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function gn(e, t) {
  const n = wi(), a = B(e), l = y(() => {
    if (Me(t == null ? void 0 : t.disabled))
      return n.value;
    const s = Me(t == null ? void 0 : t.scoped), r = Me(t == null ? void 0 : t.reset), o = Me(t == null ? void 0 : t.root);
    if (a.value == null && !(s || r || o))
      return n.value;
    let c = xn(a.value, {
      prev: n.value
    });
    if (s)
      return c;
    if (r || o) {
      const d = Number(r || 1 / 0);
      for (let f = 0; f <= d && !(!c || !("prev" in c)); f++)
        c = c.prev;
      return c && typeof o == "string" && o in c && (c = xn(xn(c, {
        prev: c
      }), c[o])), c;
    }
    return c.prev ? xn(c.prev, c) : c;
  });
  return Ge(ja, l), l;
}
function Zc(e, t) {
  var n, a;
  return typeof ((n = e.props) == null ? void 0 : n[t]) < "u" || typeof ((a = e.props) == null ? void 0 : a[rn(t)]) < "u";
}
function Xc() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wi();
  const a = Ne("useDefaults");
  if (t = t ?? a.type.name ?? a.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const l = y(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? t];
  }), i = new Proxy(e, {
    get(o, c) {
      var f, v, g, p;
      const d = Reflect.get(o, c);
      return c === "class" || c === "style" ? [(f = l.value) == null ? void 0 : f[c], d].filter((m) => m != null) : typeof c == "string" && !Zc(a.vnode, c) ? ((v = l.value) == null ? void 0 : v[c]) ?? ((p = (g = n.value) == null ? void 0 : g.global) == null ? void 0 : p[c]) ?? d : d;
    }
  }), s = ae();
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
    const o = qc(ja, a);
    Ge(ja, y(() => s.value ? xn((o == null ? void 0 : o.value) ?? {}, s.value) : o == null ? void 0 : o.value));
  }
  return {
    props: i,
    provideSubDefaults: r
  };
}
const Hr = K()({
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
    }), Q(() => {
      var a;
      return u("div", {
        class: ["v-card-actions", e.class],
        style: e.style
      }, [(a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
}), Jc = nn("v-card-subtitle"), Ci = nn("v-card-title");
const Qc = R({
  defaults: Object,
  disabled: Boolean,
  reset: [Number, String],
  root: [Boolean, String],
  scoped: Boolean
}, "VDefaultsProvider"), xe = K(!1)({
  name: "VDefaultsProvider",
  props: Qc(),
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
    } = kr(e);
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
});
function xi(e) {
  return ki(() => {
    const t = [], n = {};
    if (e.value.background)
      if (jl(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && Bc(e.value.background)) {
          const a = qt(e.value.background);
          if (a.a == null || a.a === 1) {
            const l = Hc(a);
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
function vt(e, t) {
  const n = y(() => ({
    text: oa(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = xi(n);
  return {
    textColorClasses: a,
    textColorStyles: l
  };
}
function st(e, t) {
  const n = y(() => ({
    background: oa(e) ? e.value : t ? e[t] : null
  })), {
    colorClasses: a,
    colorStyles: l
  } = xi(n);
  return {
    backgroundColorClasses: a,
    backgroundColorStyles: l
  };
}
const ye = [String, Function, Object, Array], ed = Symbol.for("vuetify:icons"), il = R({
  icon: {
    type: ye
  },
  // Could not remove this and use makeTagProps, types complained because it is not required
  tag: {
    type: String,
    required: !0
  }
}, "icon"), Ls = K()({
  name: "VComponentIcon",
  props: il(),
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
}), td = St({
  name: "VSvgIcon",
  inheritAttrs: !1,
  props: il(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    return () => u(e.tag, W(n, {
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
  props: il(),
  setup(e) {
    return () => u(e.tag, null, {
      default: () => [e.icon]
    });
  }
});
St({
  name: "VClassIcon",
  props: il(),
  setup(e) {
    return () => u(e.tag, {
      class: e.icon
    }, null);
  }
});
const nd = (e) => {
  const t = Te(ed);
  if (!t)
    throw new Error("Missing Vuetify Icons provide!");
  return {
    iconData: y(() => {
      var o;
      const a = Me(e);
      if (!a)
        return {
          component: Ls
        };
      let l = a;
      if (typeof l == "string" && (l = l.trim(), l.startsWith("$") && (l = (o = t.aliases) == null ? void 0 : o[l.slice(1)])), !l)
        throw new Error(`Could not find aliased icon "${a}"`);
      if (Array.isArray(l))
        return {
          component: td,
          icon: l
        };
      if (typeof l != "string")
        return {
          component: Ls,
          icon: l
        };
      const i = Object.keys(t.sets).find((c) => typeof l == "string" && l.startsWith(`${c}:`)), s = i ? l.slice(i.length + 1) : l;
      return {
        component: t.sets[i ?? t.defaultSet].component,
        icon: s
      };
    })
  };
}, ad = ["x-small", "small", "default", "large", "x-large"], ua = R({
  size: {
    type: [String, Number],
    default: "default"
  }
}, "size");
function ca(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return ki(() => {
    let n, a;
    return $a(ad, e.size) ? n = `${t}--size-${e.size}` : e.size && (a = {
      width: te(e.size),
      height: te(e.size)
    }), {
      sizeClasses: n,
      sizeStyles: a
    };
  });
}
const Ee = R({
  tag: {
    type: String,
    default: "div"
  }
}, "tag"), Rs = Symbol.for("vuetify:theme"), Le = R({
  theme: String
}, "theme");
function Ue(e) {
  Ne("provideTheme");
  const t = Te(Rs, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = y(() => e.theme ?? t.name.value), a = y(() => t.themes.value[n.value]), l = y(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), i = {
    ...t,
    name: n,
    current: a,
    themeClasses: l
  };
  return Ge(Rs, i), i;
}
const ld = R({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: ye,
  ...ie(),
  ...ua(),
  ...Ee({
    tag: "i"
  }),
  ...Le()
}, "VIcon"), be = K()({
  name: "VIcon",
  props: ld(),
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = B(), {
      themeClasses: i
    } = Ue(e), {
      iconData: s
    } = nd(y(() => l.value || e.icon)), {
      sizeClasses: r
    } = ca(e), {
      textColorClasses: o,
      textColorStyles: c
    } = vt(X(e, "color"));
    return Q(() => {
      var f, v;
      const d = (f = a.default) == null ? void 0 : f.call(a);
      return d && (l.value = (v = Dr(d).filter((g) => g.type === tc && g.children && typeof g.children == "string")[0]) == null ? void 0 : v.children), u(s.value.component, {
        tag: e.tag,
        icon: s.value.icon,
        class: ["v-icon", "notranslate", i.value, r.value, o.value, {
          "v-icon--clickable": !!n.onClick,
          "v-icon--start": e.start,
          "v-icon--end": e.end
        }, e.class],
        style: [r.value ? void 0 : {
          fontSize: te(e.size),
          height: te(e.size),
          width: te(e.size)
        }, c.value, e.style],
        role: n.onClick ? "button" : void 0,
        "aria-hidden": !n.onClick
      }, {
        default: () => [d]
      });
    }), {};
  }
});
const Bt = R({
  height: [Number, String],
  maxHeight: [Number, String],
  maxWidth: [Number, String],
  minHeight: [Number, String],
  minWidth: [Number, String],
  width: [Number, String]
}, "dimension");
function Yt(e) {
  return {
    dimensionStyles: y(() => ({
      height: te(e.height),
      maxHeight: te(e.maxHeight),
      maxWidth: te(e.maxWidth),
      minHeight: te(e.minHeight),
      minWidth: te(e.minWidth),
      width: te(e.width)
    }))
  };
}
function id(e) {
  return {
    aspectStyles: y(() => {
      const t = Number(e.aspectRatio);
      return t ? {
        paddingBottom: String(1 / t * 100) + "%"
      } : void 0;
    })
  };
}
const zr = R({
  aspectRatio: [String, Number],
  contentClass: String,
  inline: Boolean,
  ...ie(),
  ...Bt()
}, "VResponsive"), Fs = K()({
  name: "VResponsive",
  props: zr(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      aspectStyles: a
    } = id(e), {
      dimensionStyles: l
    } = Yt(e);
    return Q(() => {
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
}), Qe = R({
  rounded: {
    type: [Boolean, Number, String],
    default: void 0
  }
}, "rounded");
function et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    roundedClasses: y(() => {
      const a = oa(e) ? e.value : e.rounded, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--rounded`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`rounded-${i}`);
      return l;
    })
  };
}
const da = R({
  transition: {
    type: [Boolean, String, Object],
    default: "fade-transition",
    validator: (e) => e !== !0
  }
}, "transition"), Tt = (e, t) => {
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
  return Rn(s, W(typeof a == "string" ? {
    name: l ? "" : a
  } : r, i, {
    disabled: l
  }), n);
};
function sd(e, t) {
  if (!gi)
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
    l && (!n.quiet || c.init) && (!n.once || d || c.init) && l(d, r, o), d && n.once ? jr(e, t) : c.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = {
    init: !1,
    observer: s
  }, s.observe(e);
}
function jr(e, t) {
  var a;
  const n = (a = e._observe) == null ? void 0 : a[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const rd = {
  mounted: sd,
  unmounted: jr
}, Gr = rd, od = R({
  alt: String,
  cover: Boolean,
  color: String,
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
  ...zr(),
  ...ie(),
  ...Qe(),
  ...da()
}, "VImg"), qr = K()({
  name: "VImg",
  directives: {
    intersect: Gr
  },
  props: od(),
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
    const {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = st(X(e, "color")), {
      roundedClasses: s
    } = et(e), r = Ne("VImg"), o = ae(""), c = B(), d = ae(e.eager ? "loading" : "idle"), f = ae(), v = ae(), g = y(() => e.src && typeof e.src == "object" ? {
      src: e.src.src,
      srcset: e.srcset || e.src.srcset,
      lazySrc: e.lazySrc || e.src.lazySrc,
      aspect: Number(e.aspectRatio || e.src.aspect || 0)
    } : {
      src: e.src,
      srcset: e.srcset,
      lazySrc: e.lazySrc,
      aspect: Number(e.aspectRatio || 0)
    }), p = y(() => g.value.aspect || f.value / v.value || 0);
    J(() => e.src, () => {
      m(d.value !== "idle");
    }), J(p, (I, D) => {
      !I && D && c.value && w(c.value);
    }), fi(() => m());
    function m(I) {
      if (!(e.eager && I) && !(gi && !I && !e.eager)) {
        if (d.value = "loading", g.value.lazySrc) {
          const D = new Image();
          D.src = g.value.lazySrc, w(D, null);
        }
        g.value.src && He(() => {
          var D;
          n("loadstart", ((D = c.value) == null ? void 0 : D.currentSrc) || g.value.src), setTimeout(() => {
            var V;
            if (!r.isUnmounted)
              if ((V = c.value) != null && V.complete) {
                if (c.value.naturalWidth || k(), d.value === "error")
                  return;
                p.value || w(c.value, null), d.value === "loading" && h();
              } else
                p.value || w(c.value), S();
          });
        });
      }
    }
    function h() {
      var I;
      r.isUnmounted || (S(), w(c.value), d.value = "loaded", n("load", ((I = c.value) == null ? void 0 : I.currentSrc) || g.value.src));
    }
    function k() {
      var I;
      r.isUnmounted || (d.value = "error", n("error", ((I = c.value) == null ? void 0 : I.currentSrc) || g.value.src));
    }
    function S() {
      const I = c.value;
      I && (o.value = I.currentSrc || I.src);
    }
    let _ = -1;
    Ae(() => {
      clearTimeout(_);
    });
    function w(I) {
      let D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
      const V = () => {
        if (clearTimeout(_), r.isUnmounted)
          return;
        const {
          naturalHeight: O,
          naturalWidth: U
        } = I;
        O || U ? (f.value = U, v.value = O) : !I.complete && d.value === "loading" && D != null ? _ = window.setTimeout(V, D) : (I.currentSrc.endsWith(".svg") || I.currentSrc.startsWith("data:image/svg+xml")) && (f.value = 1, v.value = 1);
      };
      V();
    }
    const P = y(() => ({
      "v-img__img--cover": e.cover,
      "v-img__img--contain": !e.cover
    })), C = () => {
      var V;
      if (!g.value.src || d.value === "idle")
        return null;
      const I = u("img", {
        class: ["v-img__img", P.value],
        style: {
          objectPosition: e.position
        },
        src: g.value.src,
        srcset: g.value.srcset,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable,
        sizes: e.sizes,
        ref: c,
        onLoad: h,
        onError: k
      }, null), D = (V = a.sources) == null ? void 0 : V.call(a);
      return u(Tt, {
        transition: e.transition,
        appear: !0
      }, {
        default: () => [Ve(D ? u("picture", {
          class: "v-img__picture"
        }, [D, I]) : I, [[dt, d.value === "loaded"]])]
      });
    }, b = () => u(Tt, {
      transition: e.transition
    }, {
      default: () => [g.value.lazySrc && d.value !== "loaded" && u("img", {
        class: ["v-img__img", "v-img__img--preload", P.value],
        style: {
          objectPosition: e.position
        },
        src: g.value.lazySrc,
        alt: e.alt,
        crossorigin: e.crossorigin,
        referrerpolicy: e.referrerpolicy,
        draggable: e.draggable
      }, null)]
    }), M = () => a.placeholder ? u(Tt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [(d.value === "loading" || d.value === "error" && !a.error) && u("div", {
        class: "v-img__placeholder"
      }, [a.placeholder()])]
    }) : null, x = () => a.error ? u(Tt, {
      transition: e.transition,
      appear: !0
    }, {
      default: () => [d.value === "error" && u("div", {
        class: "v-img__error"
      }, [a.error()])]
    }) : null, E = () => e.gradient ? u("div", {
      class: "v-img__gradient",
      style: {
        backgroundImage: `linear-gradient(${e.gradient})`
      }
    }, null) : null, Y = ae(!1);
    {
      const I = J(p, (D) => {
        D && (requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            Y.value = !0;
          });
        }), I());
      });
    }
    return Q(() => {
      const I = Fs.filterProps(e);
      return Ve(u(Fs, W({
        class: ["v-img", {
          "v-img--booting": !Y.value
        }, l.value, s.value, e.class],
        style: [{
          width: te(e.width === "auto" ? f.value : e.width)
        }, i.value, e.style]
      }, I, {
        aspectRatio: p.value,
        "aria-label": e.alt,
        role: e.alt ? "img" : void 0
      }), {
        additional: () => u(pe, null, [u(C, null, null), u(b, null, null), u(E, null, null), u(M, null, null), u(x, null, null)]),
        default: a.default
      }), [[gt("intersect"), {
        handler: m,
        options: e.options
      }, null, {
        once: !0
      }]]);
    }), {
      currentSrc: o,
      image: c,
      state: d,
      naturalWidth: f,
      naturalHeight: v
    };
  }
}), ud = [null, "default", "comfortable", "compact"], yt = R({
  density: {
    type: String,
    default: "default",
    validator: (e) => ud.includes(e)
  }
}, "density");
function Ct(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    densityClasses: y(() => `${t}--density-${e.density}`)
  };
}
const cd = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Fn(e, t) {
  return u(pe, null, [e && u("span", {
    key: "overlay",
    class: `${t}__overlay`
  }, null), u("span", {
    key: "underlay",
    class: `${t}__underlay`
  }, null)]);
}
const $t = R({
  color: String,
  variant: {
    type: String,
    default: "elevated",
    validator: (e) => cd.includes(e)
  }
}, "variant");
function Nn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  const n = y(() => {
    const {
      variant: i
    } = Me(e);
    return `${t}--variant-${i}`;
  }), {
    colorClasses: a,
    colorStyles: l
  } = xi(y(() => {
    const {
      variant: i,
      color: s
    } = Me(e);
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
const dd = R({
  start: Boolean,
  end: Boolean,
  icon: ye,
  image: String,
  text: String,
  ...ie(),
  ...yt(),
  ...Qe(),
  ...ua(),
  ...Ee(),
  ...Le(),
  ...$t({
    variant: "flat"
  })
}, "VAvatar"), vn = K()({
  name: "VAvatar",
  props: dd(),
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
    } = Nn(e), {
      densityClasses: r
    } = Ct(e), {
      roundedClasses: o
    } = et(e), {
      sizeClasses: c,
      sizeStyles: d
    } = ca(e);
    return Q(() => u(e.tag, {
      class: ["v-avatar", {
        "v-avatar--start": e.start,
        "v-avatar--end": e.end
      }, a.value, l.value, r.value, o.value, c.value, s.value, e.class],
      style: [i.value, d.value, e.style]
    }, {
      default: () => [n.default ? u(xe, {
        key: "content-defaults",
        defaults: {
          VImg: {
            cover: !0,
            image: e.image
          },
          VIcon: {
            icon: e.icon
          }
        }
      }, {
        default: () => [n.default()]
      }) : e.image ? u(qr, {
        key: "image",
        src: e.image,
        alt: "",
        cover: !0
      }, null) : e.icon ? u(be, {
        key: "icon",
        icon: e.icon
      }, null) : e.text, Fn(!1, "v-avatar")]
    })), {};
  }
}), fd = R({
  appendAvatar: String,
  appendIcon: ye,
  prependAvatar: String,
  prependIcon: ye,
  subtitle: [String, Number],
  title: [String, Number],
  ...ie(),
  ...yt()
}, "VCardItem"), vd = K()({
  name: "VCardItem",
  props: fd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Q(() => {
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
            image: e.prependAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.prependIcon
          }
        }
      }, n.prepend) : u(pe, null, [e.prependAvatar && u(vn, {
        key: "prepend-avatar",
        density: e.density,
        image: e.prependAvatar
      }, null), e.prependIcon && u(be, {
        key: "prepend-icon",
        density: e.density,
        icon: e.prependIcon
      }, null)])]), u("div", {
        class: "v-card-item__content"
      }, [r && u(Ci, {
        key: "title"
      }, {
        default: () => {
          var d;
          return [((d = n.title) == null ? void 0 : d.call(n)) ?? e.title];
        }
      }), o && u(Jc, {
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
            image: e.appendAvatar
          },
          VIcon: {
            density: e.density,
            icon: e.appendIcon
          }
        }
      }, n.append) : u(pe, null, [e.appendIcon && u(be, {
        key: "append-icon",
        density: e.density,
        icon: e.appendIcon
      }, null), e.appendAvatar && u(vn, {
        key: "append-avatar",
        density: e.density,
        image: e.appendAvatar
      }, null)])])]);
    }), {};
  }
}), Bn = nn("v-card-text"), yn = R({
  border: [Boolean, Number, String]
}, "border");
function pn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    borderClasses: y(() => {
      const a = oa(e) ? e.value : e.border, l = [];
      if (a === !0 || a === "")
        l.push(`${t}--border`);
      else if (typeof a == "string" || a === 0)
        for (const i of String(a).split(" "))
          l.push(`border-${i}`);
      return l;
    })
  };
}
const Wt = R({
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
function Ut(e) {
  return {
    elevationClasses: y(() => {
      const n = oa(e) ? e.value : e.elevation, a = [];
      return n == null || a.push(`elevation-${n}`), a;
    })
  };
}
function Kr(e, t) {
  const n = B(), a = ae(!1);
  if (gi) {
    const l = new IntersectionObserver((i) => {
      e == null || e(i, l), a.value = !!i.find((s) => s.isIntersecting);
    }, t);
    Ae(() => {
      l.disconnect();
    }), J(n, (i, s) => {
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
    n = vi(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), a();
    }) : t());
  }
  J(e, (l) => {
    l && !n ? a() : l || (n == null || n.stop(), n = void 0);
  }, {
    immediate: !0
  }), qe(() => {
    n == null || n.stop();
  });
}
function me(e, t, n) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (f) => f, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (f) => f;
  const i = Ne("useProxiedModel"), s = B(e[t] !== void 0 ? e[t] : n), r = rn(t), c = r !== t ? y(() => {
    var f, v, g, p;
    return e[t], !!(((f = i.vnode.props) != null && f.hasOwnProperty(t) || (v = i.vnode.props) != null && v.hasOwnProperty(r)) && ((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${t}`) || (p = i.vnode.props) != null && p.hasOwnProperty(`onUpdate:${r}`)));
  }) : y(() => {
    var f, v;
    return e[t], !!((f = i.vnode.props) != null && f.hasOwnProperty(t) && ((v = i.vnode.props) != null && v.hasOwnProperty(`onUpdate:${t}`)));
  });
  mn(() => !c.value, () => {
    J(() => e[t], (f) => {
      s.value = f;
    });
  });
  const d = y({
    get() {
      const f = e[t];
      return a(c.value ? f : s.value);
    },
    set(f) {
      const v = l(f), g = tn(c.value ? e[t] : s.value);
      g === v || a(g) === f || (s.value = v, i == null || i.emit(`update:${t}`, v));
    }
  });
  return Object.defineProperty(d, "externalValue", {
    get: () => c.value ? e[t] : s.value
  }), d;
}
const Zr = Symbol.for("vuetify:locale");
function Yn() {
  const e = Te(Zr);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function xt() {
  const e = Te(Zr);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return {
    isRtl: e.isRtl,
    rtlClasses: e.rtlClasses
  };
}
const Ns = {
  center: "center",
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, fa = R({
  location: String
}, "location");
function va(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 ? arguments[2] : void 0;
  const {
    isRtl: a
  } = xt();
  return {
    locationStyles: y(() => {
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
      return i !== "center" && (t ? o[Ns[i]] = `calc(100% - ${r(i)}px)` : o[i] = 0), s !== "center" ? t ? o[Ns[s]] = `calc(100% - ${r(s)}px)` : o[s] = 0 : (i === "center" ? o.top = o.left = "50%" : o[{
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
const md = R({
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
  ...fa({
    location: "top"
  }),
  ...Qe(),
  ...Ee(),
  ...Le()
}, "VProgressLinear"), Vi = K()({
  name: "VProgressLinear",
  props: md(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), {
      isRtl: l,
      rtlClasses: i
    } = xt(), {
      themeClasses: s
    } = Ue(e), {
      locationStyles: r
    } = va(e), {
      textColorClasses: o,
      textColorStyles: c
    } = vt(e, "color"), {
      backgroundColorClasses: d,
      backgroundColorStyles: f
    } = st(y(() => e.bgColor || e.color)), {
      backgroundColorClasses: v,
      backgroundColorStyles: g
    } = st(e, "color"), {
      roundedClasses: p
    } = et(e), {
      intersectionRef: m,
      isIntersecting: h
    } = Kr(), k = y(() => parseInt(e.max, 10)), S = y(() => parseInt(e.height, 10)), _ = y(() => parseFloat(e.bufferValue) / k.value * 100), w = y(() => parseFloat(a.value) / k.value * 100), P = y(() => l.value !== e.reverse), C = y(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), b = y(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
    function M(x) {
      if (!m.value)
        return;
      const {
        left: E,
        right: Y,
        width: I
      } = m.value.getBoundingClientRect(), D = P.value ? I - x.clientX + (Y - I) : x.clientX - E;
      a.value = Math.round(D / I * k.value);
    }
    return Q(() => u(e.tag, {
      ref: m,
      class: ["v-progress-linear", {
        "v-progress-linear--absolute": e.absolute,
        "v-progress-linear--active": e.active && h.value,
        "v-progress-linear--reverse": P.value,
        "v-progress-linear--rounded": e.rounded,
        "v-progress-linear--rounded-bar": e.roundedBar,
        "v-progress-linear--striped": e.striped
      }, p.value, s.value, i.value, e.class],
      style: [{
        bottom: e.location === "bottom" ? 0 : void 0,
        top: e.location === "top" ? 0 : void 0,
        height: e.active ? te(S.value) : 0,
        "--v-progress-linear-height": te(S.value),
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
          [P.value ? "left" : "right"]: te(-S.value),
          borderTop: `${te(S.value / 2)} dotted`,
          opacity: b.value,
          top: `calc(50% - ${te(S.value / 4)})`,
          width: te(100 - _.value, "%"),
          "--v-progress-linear-stream-to": te(S.value * (P.value ? 1 : -1))
        }
      }, null), u("div", {
        class: ["v-progress-linear__background", d.value],
        style: [f.value, {
          opacity: b.value,
          width: te(e.stream ? _.value : 100, "%")
        }]
      }, null), u(fn, {
        name: C.value
      }, {
        default: () => [e.indeterminate ? u("div", {
          class: "v-progress-linear__indeterminate"
        }, [["long", "short"].map((x) => u("div", {
          key: x,
          class: ["v-progress-linear__indeterminate", x, v.value],
          style: g.value
        }, null))]) : u("div", {
          class: ["v-progress-linear__determinate", v.value],
          style: [g.value, {
            width: te(w.value, "%")
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
}), Pi = R({
  loading: [Boolean, String]
}, "loader");
function sl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    loaderClasses: y(() => ({
      [`${t}--loading`]: e.loading
    }))
  };
}
function Mi(e, t) {
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
const hd = ["static", "relative", "fixed", "absolute", "sticky"], rl = R({
  position: {
    type: String,
    validator: (
      /* istanbul ignore next */
      (e) => hd.includes(e)
    )
  }
}, "position");
function ol(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  return {
    positionClasses: y(() => e.position ? `${t}--${e.position}` : void 0)
  };
}
function gd() {
  const e = Ne("useRoute");
  return y(() => {
    var t;
    return (t = e == null ? void 0 : e.proxy) == null ? void 0 : t.$route;
  });
}
function yd() {
  var e, t;
  return (t = (e = Ne("useRouter")) == null ? void 0 : e.proxy) == null ? void 0 : t.$router;
}
function ul(e, t) {
  const n = _r("RouterLink"), a = y(() => !!(e.href || e.to)), l = y(() => (a == null ? void 0 : a.value) || ks(t, "click") || ks(e, "click"));
  if (typeof n == "string")
    return {
      isLink: a,
      isClickable: l,
      href: X(e, "href")
    };
  const i = e.to ? n.useLink(e) : void 0, s = gd();
  return {
    isLink: a,
    isClickable: l,
    route: i == null ? void 0 : i.route,
    navigate: i == null ? void 0 : i.navigate,
    isActive: i && y(() => {
      var r, o, c;
      return e.exact ? s.value ? ((c = i.isExactActive) == null ? void 0 : c.value) && hn(i.route.value.query, s.value.query) : (o = i.isExactActive) == null ? void 0 : o.value : (r = i.isActive) == null ? void 0 : r.value;
    }),
    href: y(() => e.to ? i == null ? void 0 : i.route.value.href : e.href)
  };
}
const cl = R({
  href: String,
  replace: Boolean,
  to: [String, Object],
  exact: Boolean
}, "router");
let Tl = !1;
function pd(e, t) {
  let n = !1, a, l;
  Re && (He(() => {
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
const Gl = Symbol("rippleStop"), kd = 80;
function Bs(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function ql(e) {
  return e.constructor.name === "TouchEvent";
}
function Xr(e) {
  return e.constructor.name === "KeyboardEvent";
}
const bd = function(e, t) {
  var f;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = 0, l = 0;
  if (!Xr(e)) {
    const v = t.getBoundingClientRect(), g = ql(e) ? e.touches[e.touches.length - 1] : e;
    a = g.clientX - v.left, l = g.clientY - v.top;
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
}, Ga = {
  /* eslint-disable max-statements */
  show(e, t) {
    var g;
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!((g = t == null ? void 0 : t._ripple) != null && g.enabled))
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
    } = bd(e, t, n), f = `${i * 2}px`;
    l.className = "v-ripple__animation", l.style.width = f, l.style.height = f, t.appendChild(a);
    const v = window.getComputedStyle(t);
    v && v.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), l.classList.add("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--visible"), Bs(l, `translate(${r}, ${o}) scale3d(${s},${s},${s})`), l.dataset.activated = String(performance.now()), setTimeout(() => {
      l.classList.remove("v-ripple__animation--enter"), l.classList.add("v-ripple__animation--in"), Bs(l, `translate(${c}, ${d}) scale3d(1,1,1)`);
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
function Jr(e) {
  return typeof e > "u" || !!e;
}
function Jn(e) {
  const t = {}, n = e.currentTarget;
  if (!(!(n != null && n._ripple) || n._ripple.touched || e[Gl])) {
    if (e[Gl] = !0, ql(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Xr(e), n._ripple.class && (t.class = n._ripple.class), ql(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Ga.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var a;
        (a = n == null ? void 0 : n._ripple) != null && a.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, kd);
    } else
      Ga.show(e, n, t);
  }
}
function Ys(e) {
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
    }), Ga.hide(t);
  }
}
function Qr(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let Qn = !1;
function eo(e) {
  !Qn && (e.keyCode === hs.enter || e.keyCode === hs.space) && (Qn = !0, Jn(e));
}
function to(e) {
  Qn = !1, Ke(e);
}
function no(e) {
  Qn && (Qn = !1, Ke(e));
}
function ao(e, t, n) {
  const {
    value: a,
    modifiers: l
  } = t, i = Jr(a);
  if (i || Ga.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = l.center, e._ripple.circle = l.circle, Hl(a) && a.class && (e._ripple.class = a.class), i && !n) {
    if (l.stop) {
      e.addEventListener("touchstart", Ys, {
        passive: !0
      }), e.addEventListener("mousedown", Ys);
      return;
    }
    e.addEventListener("touchstart", Jn, {
      passive: !0
    }), e.addEventListener("touchend", Ke, {
      passive: !0
    }), e.addEventListener("touchmove", Qr, {
      passive: !0
    }), e.addEventListener("touchcancel", Ke), e.addEventListener("mousedown", Jn), e.addEventListener("mouseup", Ke), e.addEventListener("mouseleave", Ke), e.addEventListener("keydown", eo), e.addEventListener("keyup", to), e.addEventListener("blur", no), e.addEventListener("dragstart", Ke, {
      passive: !0
    });
  } else
    !i && n && lo(e);
}
function lo(e) {
  e.removeEventListener("mousedown", Jn), e.removeEventListener("touchstart", Jn), e.removeEventListener("touchend", Ke), e.removeEventListener("touchmove", Qr), e.removeEventListener("touchcancel", Ke), e.removeEventListener("mouseup", Ke), e.removeEventListener("mouseleave", Ke), e.removeEventListener("keydown", eo), e.removeEventListener("keyup", to), e.removeEventListener("dragstart", Ke), e.removeEventListener("blur", no);
}
function _d(e, t) {
  ao(e, t, !1);
}
function Sd(e) {
  delete e._ripple, lo(e);
}
function wd(e, t) {
  if (t.value === t.oldValue)
    return;
  const n = Jr(t.oldValue);
  ao(e, t, n);
}
const $n = {
  mounted: _d,
  unmounted: Sd,
  updated: wd
}, Cd = R({
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
  ...Bt(),
  ...Wt(),
  ...Pi(),
  ...fa(),
  ...rl(),
  ...Qe(),
  ...cl(),
  ...Ee(),
  ...Le(),
  ...$t({
    variant: "elevated"
  })
}, "VCard"), ma = K()({
  name: "VCard",
  directives: {
    Ripple: $n
  },
  props: Cd(),
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
    } = Nn(e), {
      densityClasses: c
    } = Ct(e), {
      dimensionStyles: d
    } = Yt(e), {
      elevationClasses: f
    } = Ut(e), {
      loaderClasses: v
    } = sl(e), {
      locationStyles: g
    } = va(e), {
      positionClasses: p
    } = ol(e), {
      roundedClasses: m
    } = et(e), h = ul(e, n), k = y(() => e.link !== !1 && h.isLink.value), S = y(() => !e.disabled && e.link !== !1 && (e.link || h.isClickable.value));
    return Q(() => {
      const _ = k.value ? "a" : e.tag, w = !!(a.title || e.title != null), P = !!(a.subtitle || e.subtitle != null), C = w || P, b = !!(a.append || e.appendAvatar || e.appendIcon), M = !!(a.prepend || e.prependAvatar || e.prependIcon), x = !!(a.image || e.image), E = C || M || b, Y = !!(a.text || e.text != null);
      return Ve(u(_, {
        class: ["v-card", {
          "v-card--disabled": e.disabled,
          "v-card--flat": e.flat,
          "v-card--hover": e.hover && !(e.disabled || e.flat),
          "v-card--link": S.value
        }, l.value, i.value, s.value, c.value, f.value, v.value, p.value, m.value, o.value, e.class],
        style: [r.value, d.value, g.value, e.style],
        href: h.href.value,
        onClick: S.value && h.navigate,
        tabindex: e.disabled ? -1 : void 0
      }, {
        default: () => {
          var I;
          return [x && u("div", {
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
          }, a.image) : u(qr, {
            key: "image-img",
            cover: !0,
            src: e.image
          }, null)]), u(Mi, {
            name: "v-card",
            active: !!e.loading,
            color: typeof e.loading == "boolean" ? void 0 : e.loading
          }, {
            default: a.loader
          }), E && u(vd, {
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
          }), Y && u(Bn, {
            key: "text"
          }, {
            default: () => {
              var D;
              return [((D = a.text) == null ? void 0 : D.call(a)) ?? e.text];
            }
          }), (I = a.default) == null ? void 0 : I.call(a), a.actions && u(Hr, null, {
            default: a.actions
          }), Fn(S.value, "v-card")];
        }
      }), [[gt("ripple"), S.value && e.ripple]]);
    }), {};
  }
});
const xd = R({
  text: String,
  onClick: it(),
  ...ie(),
  ...Le()
}, "VLabel"), Di = K()({
  name: "VLabel",
  props: xd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Q(() => {
      var a;
      return u("label", {
        class: ["v-label", {
          "v-label--clickable": !!e.onClick
        }, e.class],
        style: e.style,
        onClick: e.onClick
      }, [e.text, (a = n.default) == null ? void 0 : a.call(n)]);
    }), {};
  }
});
const io = Symbol.for("vuetify:selection-control-group"), so = R({
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
  ...Le()
}, "SelectionControlGroup"), Vd = R({
  ...so({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
K()({
  name: "VSelectionControlGroup",
  props: Vd(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), l = rt(), i = y(() => e.id || `v-selection-control-group-${l}`), s = y(() => e.name || i.value), r = /* @__PURE__ */ new Set();
    return Ge(io, {
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
        color: X(e, "color"),
        disabled: X(e, "disabled"),
        density: X(e, "density"),
        error: X(e, "error"),
        inline: X(e, "inline"),
        modelValue: a,
        multiple: y(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)),
        name: s,
        falseIcon: X(e, "falseIcon"),
        trueIcon: X(e, "trueIcon"),
        readonly: X(e, "readonly"),
        ripple: X(e, "ripple"),
        type: X(e, "type"),
        valueComparator: X(e, "valueComparator")
      }
    }), Q(() => {
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
const dl = R({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...ie(),
  ...so()
}, "VSelectionControl");
function Pd(e) {
  const t = Te(io, void 0), {
    densityClasses: n
  } = Ct(e), a = me(e, "modelValue"), l = y(() => e.trueValue !== void 0 ? e.trueValue : e.value !== void 0 ? e.value : !0), i = y(() => e.falseValue !== void 0 ? e.falseValue : !1), s = y(() => !!e.multiple || e.multiple == null && Array.isArray(a.value)), r = y({
    get() {
      const g = t ? t.modelValue.value : a.value;
      return s.value ? Xe(g).some((p) => e.valueComparator(p, l.value)) : e.valueComparator(g, l.value);
    },
    set(g) {
      if (e.readonly)
        return;
      const p = g ? l.value : i.value;
      let m = p;
      s.value && (m = g ? [...Xe(a.value), p] : Xe(a.value).filter((h) => !e.valueComparator(h, l.value))), t ? t.modelValue.value = m : a.value = m;
    }
  }), {
    textColorClasses: o,
    textColorStyles: c
  } = vt(y(() => {
    if (!(e.error || e.disabled))
      return r.value ? e.color : e.baseColor;
  })), {
    backgroundColorClasses: d,
    backgroundColorStyles: f
  } = st(y(() => r.value && !e.error && !e.disabled ? e.color : void 0)), v = y(() => r.value ? e.trueIcon : e.falseIcon);
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
const ea = K()({
  name: "VSelectionControl",
  directives: {
    Ripple: $n
  },
  inheritAttrs: !1,
  props: dl(),
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
    } = Pd(e), g = rt(), p = ae(!1), m = ae(!1), h = B(), k = y(() => e.id || `input-${g}`), S = y(() => !e.disabled && !e.readonly);
    l == null || l.onForceUpdate(() => {
      h.value && (h.value.checked = r.value);
    });
    function _(b) {
      S.value && (p.value = !0, Ua(b.target, ":focus-visible") !== !1 && (m.value = !0));
    }
    function w() {
      p.value = !1, m.value = !1;
    }
    function P(b) {
      b.stopPropagation();
    }
    function C(b) {
      S.value && (e.readonly && l && He(() => l.forceUpdate()), r.value = b.target.checked);
    }
    return Q(() => {
      var Y, I;
      const b = a.label ? a.label({
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label, [M, x] = al(n), E = u("input", W({
        ref: h,
        checked: r.value,
        disabled: !!e.disabled,
        id: k.value,
        onBlur: w,
        onFocus: _,
        onInput: C,
        "aria-disabled": !!e.disabled,
        type: e.type,
        value: v.value,
        name: e.name,
        "aria-checked": e.type === "checkbox" ? r.value : void 0
      }, x), null);
      return u("div", W({
        class: ["v-selection-control", {
          "v-selection-control--dirty": r.value,
          "v-selection-control--disabled": e.disabled,
          "v-selection-control--error": e.error,
          "v-selection-control--focused": p.value,
          "v-selection-control--focus-visible": m.value,
          "v-selection-control--inline": e.inline
        }, i.value, e.class]
      }, M, {
        style: e.style
      }), [u("div", {
        class: ["v-selection-control__wrapper", o.value],
        style: c.value
      }, [(Y = a.default) == null ? void 0 : Y.call(a, {
        backgroundColorClasses: d,
        backgroundColorStyles: f
      }), Ve(u("div", {
        class: ["v-selection-control__input"]
      }, [((I = a.input) == null ? void 0 : I.call(a, {
        model: r,
        textColorClasses: o,
        textColorStyles: c,
        backgroundColorClasses: d,
        backgroundColorStyles: f,
        inputNode: E,
        icon: s.value,
        props: {
          onFocus: _,
          onBlur: w,
          id: k.value
        }
      })) ?? u(pe, null, [s.value && u(be, {
        key: "icon",
        icon: s.value
      }, null), E])]), [[gt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), b && u(Di, {
        for: k.value,
        onClick: P
      }, {
        default: () => [b]
      })]);
    }), {
      isFocused: p,
      input: h
    };
  }
}), ro = R({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: ye,
    default: "$checkboxIndeterminate"
  },
  ...dl({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn"), Kl = K()({
  name: "VCheckboxBtn",
  props: ro(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:indeterminate": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "indeterminate"), l = me(e, "modelValue");
    function i(o) {
      a.value && (a.value = !1);
    }
    const s = y(() => a.value ? e.indeterminateIcon : e.falseIcon), r = y(() => a.value ? e.indeterminateIcon : e.trueIcon);
    return Q(() => {
      const o = Je(ea.filterProps(e), ["modelValue"]);
      return u(ea, W(o, {
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
function oo(e) {
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
    return u(be, {
      icon: e[`${l}Icon`],
      "aria-label": r,
      onClick: s
    }, null);
  }
  return {
    InputIcon: n
  };
}
const Md = R({
  disabled: Boolean,
  group: Boolean,
  hideOnLeave: Boolean,
  leaveAbsolute: Boolean,
  mode: String,
  origin: String
}, "transition");
function tt(e, t, n) {
  return K()({
    name: e,
    props: Md({
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
        const r = a.group ? nc : fn;
        return Rn(r, {
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
function uo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return K()({
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
      return () => Rn(fn, {
        name: a.disabled ? "" : e,
        css: !a.disabled,
        // mode: props.mode, // TODO: vuejs/vue-next#3104
        ...a.disabled ? {} : t
      }, i.default);
    }
  });
}
function co() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) ? "width" : "height", a = br(`offset-${n}`);
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
const Dd = R({
  target: [Object, Array]
}, "v-dialog-transition"), Ii = K()({
  name: "VDialogTransition",
  props: Dd(),
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
        await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), l.style.visibility = "";
        const {
          x: s,
          y: r,
          sx: o,
          sy: c,
          speed: d
        } = Ws(e.target, l), f = Vn(l, [{
          transform: `translate(${s}px, ${r}px) scale(${o}, ${c})`,
          opacity: 0
        }, {}], {
          duration: 225 * d,
          easing: zc
        });
        (v = $s(l)) == null || v.forEach((g) => {
          Vn(g, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * d,
            easing: Ha
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
        await new Promise((g) => requestAnimationFrame(g));
        const {
          x: s,
          y: r,
          sx: o,
          sy: c,
          speed: d
        } = Ws(e.target, l);
        Vn(l, [{}, {
          transform: `translate(${s}px, ${r}px) scale(${o}, ${c})`,
          opacity: 0
        }], {
          duration: 125 * d,
          easing: jc
        }).finished.then(() => i()), (v = $s(l)) == null || v.forEach((g) => {
          Vn(g, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * d,
            easing: Ha
          });
        });
      },
      onAfterLeave(l) {
        l.style.removeProperty("pointer-events");
      }
    };
    return () => e.target ? u(fn, W({
      name: "dialog-transition"
    }, a, {
      css: !1
    }), n) : u(fn, {
      name: "dialog-transition"
    }, n);
  }
});
function $s(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Ws(e, t) {
  const n = Er(e), a = bi(t), [l, i] = getComputedStyle(t).transformOrigin.split(" ").map((k) => parseFloat(k)), [s, r] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let o = n.left + n.width / 2;
  s === "left" || r === "left" ? o -= n.width / 2 : (s === "right" || r === "right") && (o += n.width / 2);
  let c = n.top + n.height / 2;
  s === "top" || r === "top" ? c -= n.height / 2 : (s === "bottom" || r === "bottom") && (c += n.height / 2);
  const d = n.width / a.width, f = n.height / a.height, v = Math.max(1, d, f), g = d / v || 0, p = f / v || 0, m = a.width * a.height / (window.innerWidth * window.innerHeight), h = m > 0.12 ? Math.min(1.5, (m - 0.12) * 10 + 1) : 1;
  return {
    x: o - (l + a.left),
    y: c - (i + a.top),
    sx: g,
    sy: p,
    speed: h
  };
}
tt("fab-transition", "center center", "out-in");
tt("dialog-bottom-transition");
tt("dialog-top-transition");
const Zl = tt("fade-transition"), fo = tt("scale-transition");
tt("scroll-x-transition");
tt("scroll-x-reverse-transition");
tt("scroll-y-transition");
tt("scroll-y-reverse-transition");
tt("slide-x-transition");
tt("slide-x-reverse-transition");
const vo = tt("slide-y-transition");
tt("slide-y-reverse-transition");
const Id = uo("expand-transition", co()), mo = uo("expand-x-transition", co("", !0)), Od = R({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...ie(),
  ...da({
    transition: {
      component: vo,
      leaveAbsolute: !0,
      group: !0
    }
  })
}, "VMessages"), Td = K()({
  name: "VMessages",
  props: Od(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = y(() => Xe(e.messages)), {
      textColorClasses: l,
      textColorStyles: i
    } = vt(y(() => e.color));
    return Q(() => u(Tt, {
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
}), Oi = R({
  focused: Boolean,
  "onUpdate:focused": it()
}, "focus");
function ha(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  const n = me(e, "focused"), a = y(() => ({
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
const ho = Symbol.for("vuetify:form"), Ad = R({
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
function Ed(e) {
  const t = me(e, "modelValue"), n = y(() => e.disabled), a = y(() => e.readonly), l = ae(!1), i = B([]), s = B([]);
  async function r() {
    const d = [];
    let f = !0;
    s.value = [], l.value = !0;
    for (const v of i.value) {
      const g = await v.validate();
      if (g.length > 0 && (f = !1, d.push({
        id: v.id,
        errorMessages: g
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
  return J(i, () => {
    let d = 0, f = 0;
    const v = [];
    for (const g of i.value)
      g.isValid === !1 ? (f++, v.push({
        id: g.id,
        errorMessages: g.errorMessages
      })) : g.isValid === !0 && d++;
    s.value = v, t.value = f > 0 ? !1 : d === i.value.length ? !0 : null;
  }, {
    deep: !0
  }), Ge(ho, {
    register: (d) => {
      let {
        id: f,
        validate: v,
        reset: g,
        resetValidation: p
      } = d;
      i.value.some((m) => m.id === f) && un(`Duplicate input name "${f}"`), i.value.push({
        id: f,
        validate: v,
        reset: g,
        resetValidation: p,
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (d) => {
      i.value = i.value.filter((f) => f.id !== d);
    },
    update: (d, f, v) => {
      const g = i.value.find((p) => p.id === d);
      g && (g.isValid = f, g.errorMessages = v);
    },
    isDisabled: n,
    isReadonly: a,
    isValidating: l,
    isValid: t,
    items: i,
    validateOn: X(e, "validateOn")
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
function go() {
  return Te(ho, null);
}
const Ld = R({
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
function Rd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt(), n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : rt();
  const a = me(e, "modelValue"), l = y(() => e.validationValue === void 0 ? a.value : e.validationValue), i = go(), s = B([]), r = ae(!0), o = y(() => !!(Xe(a.value === "" ? null : a.value).length || Xe(l.value === "" ? null : l.value).length)), c = y(() => !!(e.disabled ?? (i == null ? void 0 : i.isDisabled.value))), d = y(() => !!(e.readonly ?? (i == null ? void 0 : i.isReadonly.value))), f = y(() => {
    var w;
    return (w = e.errorMessages) != null && w.length ? Xe(e.errorMessages).concat(s.value).slice(0, Math.max(0, +e.maxErrors)) : s.value;
  }), v = y(() => {
    let w = (e.validateOn ?? (i == null ? void 0 : i.validateOn.value)) || "input";
    w === "lazy" && (w = "input lazy");
    const P = new Set((w == null ? void 0 : w.split(" ")) ?? []);
    return {
      blur: P.has("blur") || P.has("input"),
      input: P.has("input"),
      submit: P.has("submit"),
      lazy: P.has("lazy")
    };
  }), g = y(() => {
    var w;
    return e.error || (w = e.errorMessages) != null && w.length ? !1 : e.rules.length ? r.value ? s.value.length || v.value.lazy ? null : !0 : !s.value.length : !0;
  }), p = ae(!1), m = y(() => ({
    [`${t}--error`]: g.value === !1,
    [`${t}--dirty`]: o.value,
    [`${t}--disabled`]: c.value,
    [`${t}--readonly`]: d.value
  })), h = y(() => e.name ?? Me(n));
  fi(() => {
    i == null || i.register({
      id: h.value,
      validate: _,
      reset: k,
      resetValidation: S
    });
  }), Ae(() => {
    i == null || i.unregister(h.value);
  }), We(async () => {
    v.value.lazy || await _(!0), i == null || i.update(h.value, g.value, f.value);
  }), mn(() => v.value.input, () => {
    J(l, () => {
      if (l.value != null)
        _();
      else if (e.focused) {
        const w = J(() => e.focused, (P) => {
          P || _(), w();
        });
      }
    });
  }), mn(() => v.value.blur, () => {
    J(() => e.focused, (w) => {
      w || _();
    });
  }), J([g, f], () => {
    i == null || i.update(h.value, g.value, f.value);
  });
  function k() {
    a.value = null, He(S);
  }
  function S() {
    r.value = !0, v.value.lazy ? s.value = [] : _(!0);
  }
  async function _() {
    let w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    const P = [];
    p.value = !0;
    for (const C of e.rules) {
      if (P.length >= +(e.maxErrors ?? 1))
        break;
      const M = await (typeof C == "function" ? C : () => C)(l.value);
      if (M !== !0) {
        if (M !== !1 && typeof M != "string") {
          console.warn(`${M} is not a valid value. Rule functions must return boolean true or a string.`);
          continue;
        }
        P.push(M || "");
      }
    }
    return s.value = P, p.value = !1, r.value = w, s.value;
  }
  return {
    errorMessages: f,
    isDirty: o,
    isDisabled: c,
    isReadonly: d,
    isPristine: r,
    isValid: g,
    isValidating: p,
    reset: k,
    resetValidation: S,
    validate: _,
    validationClasses: m
  };
}
const ga = R({
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
  "onClick:prepend": it(),
  "onClick:append": it(),
  ...ie(),
  ...yt(),
  ...Ld()
}, "VInput"), en = K()({
  name: "VInput",
  props: {
    ...ga()
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
    } = xt(), {
      InputIcon: r
    } = oo(e), o = rt(), c = y(() => e.id || `input-${o}`), d = y(() => `${c.value}-messages`), {
      errorMessages: f,
      isDirty: v,
      isDisabled: g,
      isReadonly: p,
      isPristine: m,
      isValid: h,
      isValidating: k,
      reset: S,
      resetValidation: _,
      validate: w,
      validationClasses: P
    } = Rd(e, "v-input", c), C = y(() => ({
      id: c,
      messagesId: d,
      isDirty: v,
      isDisabled: g,
      isReadonly: p,
      isPristine: m,
      isValid: h,
      isValidating: k,
      reset: S,
      resetValidation: _,
      validate: w
    })), b = y(() => {
      var M;
      return (M = e.errorMessages) != null && M.length || !m.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
    });
    return Q(() => {
      var I, D, V, O;
      const M = !!(a.prepend || e.prependIcon), x = !!(a.append || e.appendIcon), E = b.value.length > 0, Y = !e.hideDetails || e.hideDetails === "auto" && (E || !!a.details);
      return u("div", {
        class: ["v-input", `v-input--${e.direction}`, {
          "v-input--center-affix": e.centerAffix,
          "v-input--hide-spin-buttons": e.hideSpinButtons
        }, i.value, s.value, P.value, e.class],
        style: e.style
      }, [M && u("div", {
        key: "prepend",
        class: "v-input__prepend"
      }, [(I = a.prepend) == null ? void 0 : I.call(a, C.value), e.prependIcon && u(r, {
        key: "prepend-icon",
        name: "prepend"
      }, null)]), a.default && u("div", {
        class: "v-input__control"
      }, [(D = a.default) == null ? void 0 : D.call(a, C.value)]), x && u("div", {
        key: "append",
        class: "v-input__append"
      }, [e.appendIcon && u(r, {
        key: "append-icon",
        name: "append"
      }, null), (V = a.append) == null ? void 0 : V.call(a, C.value)]), Y && u("div", {
        class: "v-input__details"
      }, [u(Td, {
        id: d.value,
        active: E,
        messages: b.value
      }, {
        message: a.message
      }), (O = a.details) == null ? void 0 : O.call(a, C.value)])]);
    }), {
      reset: S,
      resetValidation: _,
      validate: w,
      isValid: h,
      errorMessages: f
    };
  }
}), Fd = R({
  ...ga(),
  ...Je(ro(), ["inline"])
}, "VCheckbox"), Nd = K()({
  name: "VCheckbox",
  inheritAttrs: !1,
  props: Fd(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:focused": (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a
    } = t;
    const l = me(e, "modelValue"), {
      isFocused: i,
      focus: s,
      blur: r
    } = ha(e), o = rt(), c = y(() => e.id || `checkbox-${o}`);
    return Q(() => {
      const [d, f] = al(n), v = en.filterProps(e), g = Kl.filterProps(e);
      return u(en, W({
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
            id: m,
            messagesId: h,
            isDisabled: k,
            isReadonly: S
          } = p;
          return u(Kl, W(g, {
            id: m.value,
            "aria-describedby": h.value,
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
const fl = ["sm", "md", "lg", "xl", "xxl"], Bd = Symbol.for("vuetify:display"), Yd = R({
  mobileBreakpoint: [Number, String]
}, "display");
function Ti() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wt();
  const n = Te(Bd);
  if (!n)
    throw new Error("Could not find Vuetify display injection");
  const a = y(() => {
    if (!e.mobileBreakpoint)
      return n.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < i;
  }), l = y(() => t ? {
    [`${t}--mobile`]: a.value
  } : {});
  return {
    ...n,
    displayClasses: l,
    mobile: a
  };
}
const yo = (() => fl.reduce((e, t) => (e[t] = {
  type: [Boolean, String, Number],
  default: !1
}, e), {}))(), po = (() => fl.reduce((e, t) => {
  const n = "offset" + ra(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}))(), ko = (() => fl.reduce((e, t) => {
  const n = "order" + ra(t);
  return e[n] = {
    type: [String, Number],
    default: null
  }, e;
}, {}))(), Us = {
  col: Object.keys(yo),
  offset: Object.keys(po),
  order: Object.keys(ko)
};
function $d(e, t, n) {
  let a = e;
  if (!(n == null || n === !1)) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return e === "col" && (a = "v-" + a), e === "col" && (n === "" || n === !0) || (a += `-${n}`), a.toLowerCase();
  }
}
const Wd = ["auto", "start", "end", "center", "baseline", "stretch"], Ud = R({
  cols: {
    type: [Boolean, String, Number],
    default: !1
  },
  ...yo,
  offset: {
    type: [String, Number],
    default: null
  },
  ...po,
  order: {
    type: [String, Number],
    default: null
  },
  ...ko,
  alignSelf: {
    type: String,
    default: null,
    validator: (e) => Wd.includes(e)
  },
  ...ie(),
  ...Ee()
}, "VCol"), Ce = K()({
  name: "VCol",
  props: Ud(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = y(() => {
      const l = [];
      let i;
      for (i in Us)
        Us[i].forEach((r) => {
          const o = e[r], c = $d(i, r, o);
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
      return Rn(e.tag, {
        class: [a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), Ai = ["start", "end", "center"], bo = ["space-between", "space-around", "space-evenly"];
function Ei(e, t) {
  return fl.reduce((n, a) => {
    const l = e + ra(a);
    return n[l] = t(), n;
  }, {});
}
const Hd = [...Ai, "baseline", "stretch"], _o = (e) => Hd.includes(e), So = Ei("align", () => ({
  type: String,
  default: null,
  validator: _o
})), zd = [...Ai, ...bo], wo = (e) => zd.includes(e), Co = Ei("justify", () => ({
  type: String,
  default: null,
  validator: wo
})), jd = [...Ai, ...bo, "stretch"], xo = (e) => jd.includes(e), Vo = Ei("alignContent", () => ({
  type: String,
  default: null,
  validator: xo
})), Hs = {
  align: Object.keys(So),
  justify: Object.keys(Co),
  alignContent: Object.keys(Vo)
}, Gd = {
  align: "align",
  justify: "justify",
  alignContent: "align-content"
};
function qd(e, t, n) {
  let a = Gd[e];
  if (n != null) {
    if (t) {
      const l = t.replace(e, "");
      a += `-${l}`;
    }
    return a += `-${n}`, a.toLowerCase();
  }
}
const Kd = R({
  dense: Boolean,
  noGutters: Boolean,
  align: {
    type: String,
    default: null,
    validator: _o
  },
  ...So,
  justify: {
    type: String,
    default: null,
    validator: wo
  },
  ...Co,
  alignContent: {
    type: String,
    default: null,
    validator: xo
  },
  ...Vo,
  ...ie(),
  ...Ee()
}, "VRow"), Be = K()({
  name: "VRow",
  props: Kd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = y(() => {
      const l = [];
      let i;
      for (i in Hs)
        Hs[i].forEach((s) => {
          const r = e[s], o = qd(i, s, r);
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
      return Rn(e.tag, {
        class: ["v-row", a.value, e.class],
        style: e.style
      }, (l = n.default) == null ? void 0 : l.call(n));
    };
  }
}), Zd = nn("v-spacer", "div", "VSpacer");
function An(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = B(), a = B();
  if (Re) {
    const l = new ResizeObserver((i) => {
      e == null || e(i, l), i.length && (t === "content" ? a.value = i[0].contentRect : a.value = i[0].target.getBoundingClientRect());
    });
    Ae(() => {
      l.disconnect();
    }), J(n, (i, s) => {
      s && (l.unobserve(Ya(s)), a.value = void 0), i && l.observe(Ya(i));
    }, {
      flush: "post"
    });
  }
  return {
    resizeRef: n,
    contentRect: mi(a)
  };
}
const Xd = R({
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
  ...ua(),
  ...Ee({
    tag: "div"
  }),
  ...Le()
}, "VProgressCircular"), Li = K()({
  name: "VProgressCircular",
  props: Xd(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = 20, l = 2 * Math.PI * a, i = B(), {
      themeClasses: s
    } = Ue(e), {
      sizeClasses: r,
      sizeStyles: o
    } = ca(e), {
      textColorClasses: c,
      textColorStyles: d
    } = vt(X(e, "color")), {
      textColorClasses: f,
      textColorStyles: v
    } = vt(X(e, "bgColor")), {
      intersectionRef: g,
      isIntersecting: p
    } = Kr(), {
      resizeRef: m,
      contentRect: h
    } = An(), k = y(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), S = y(() => Number(e.width)), _ = y(() => o.value ? Number(e.size) : h.value ? h.value.width : Math.max(S.value, 32)), w = y(() => a / (1 - S.value / _.value) * 2), P = y(() => S.value / _.value * w.value), C = y(() => te((100 - k.value) / 100 * l));
    return je(() => {
      g.value = i.value, m.value = i.value;
    }), Q(() => u(e.tag, {
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
        "stroke-dashoffset": C.value
      }, null)]), n.default && u("div", {
        class: "v-progress-circular__content"
      }, [n.default({
        value: k.value
      })])]
    })), {};
  }
}), Jd = R({
  indeterminate: Boolean,
  inset: Boolean,
  flat: Boolean,
  loading: {
    type: [Boolean, String],
    default: !1
  },
  ...ga(),
  ...dl()
}, "VSwitch"), Qd = K()({
  name: "VSwitch",
  inheritAttrs: !1,
  props: Jd(),
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
    const l = me(e, "indeterminate"), i = me(e, "modelValue"), {
      loaderClasses: s
    } = sl(e), {
      isFocused: r,
      focus: o,
      blur: c
    } = ha(e), d = B(), f = y(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), v = rt(), g = y(() => e.id || `switch-${v}`);
    function p() {
      l.value && (l.value = !1);
    }
    function m(h) {
      var k, S;
      h.stopPropagation(), h.preventDefault(), (S = (k = d.value) == null ? void 0 : k.input) == null || S.click();
    }
    return Q(() => {
      const [h, k] = al(n), S = en.filterProps(e), _ = ea.filterProps(e);
      return u(en, W({
        class: ["v-switch", {
          "v-switch--inset": e.inset
        }, {
          "v-switch--indeterminate": l.value
        }, s.value, e.class]
      }, h, S, {
        modelValue: i.value,
        "onUpdate:modelValue": (w) => i.value = w,
        id: g.value,
        focused: r.value,
        style: e.style
      }), {
        ...a,
        default: (w) => {
          let {
            id: P,
            messagesId: C,
            isDisabled: b,
            isReadonly: M,
            isValid: x
          } = w;
          const E = {
            model: i,
            isValid: x
          };
          return u(ea, W({
            ref: d
          }, _, {
            modelValue: i.value,
            "onUpdate:modelValue": [(Y) => i.value = Y, p],
            id: P.value,
            "aria-describedby": C.value,
            type: "checkbox",
            "aria-checked": l.value ? "mixed" : void 0,
            disabled: b.value,
            readonly: M.value,
            onFocus: o,
            onBlur: c
          }, k), {
            ...a,
            default: (Y) => {
              let {
                backgroundColorClasses: I,
                backgroundColorStyles: D
              } = Y;
              return u("div", {
                class: ["v-switch__track", ...I.value],
                style: D.value,
                onClick: m
              }, [a["track-true"] && u("div", {
                key: "prepend",
                class: "v-switch__track-true"
              }, [a["track-true"](E)]), a["track-false"] && u("div", {
                key: "append",
                class: "v-switch__track-false"
              }, [a["track-false"](E)])]);
            },
            input: (Y) => {
              let {
                inputNode: I,
                icon: D,
                backgroundColorClasses: V,
                backgroundColorStyles: O
              } = Y;
              return u(pe, null, [I, u("div", {
                class: ["v-switch__thumb", {
                  "v-switch__thumb--filled": D || e.loading
                }, e.inset ? void 0 : V.value],
                style: e.inset ? void 0 : O.value
              }, [a.thumb ? u(xe, {
                defaults: {
                  VIcon: {
                    icon: D,
                    size: "x-small"
                  }
                }
              }, {
                default: () => [a.thumb({
                  ...E,
                  icon: D
                })]
              }) : u(fo, null, {
                default: () => [e.loading ? u(Mi, {
                  name: "v-switch",
                  active: !0,
                  color: x.value === !1 ? void 0 : f.value
                }, {
                  default: (U) => a.loader ? a.loader(U) : u(Li, {
                    active: U.isActive,
                    color: U.color,
                    indeterminate: !0,
                    size: "16",
                    width: "2"
                  }, null)
                }) : D && u(be, {
                  key: String(D),
                  icon: D,
                  size: "x-small"
                }, null)]
              })])]);
            }
          });
        }
      });
    }), {};
  }
}), ef = /* @__PURE__ */ Fe({
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
    const n = e, a = t, l = B(
      new sc({
        label: n.label,
        items: n.items,
        switch: n.switch,
        class: n.class
      })
    ), i = y(() => !oe(n.switch));
    function s(o, c = !1) {
      o ? c || l.value.addAllItems() : c || l.value.clear(), a("update:modelValue", l.value.value);
    }
    function r(o, c) {
      var f;
      const d = l.value.find(c);
      !o && !oe(d) ? (l.value.removeItem(d), !oe(l.value.switch) && ((f = l.value.switch) != null && f.value) && (l.value.switch.value = !1, s(!1, !0))) : oe(d) && (l.value.addItem(c.name, c.value), !oe(l.value.switch) && l.value.value.length === l.value.items.length && (l.value.switch.value = !0, s(!0, !0))), a("update:modelValue", l.value.value);
    }
    return (o, c) => (ne(), ue(ma, { elevation: "0" }, {
      default: N(() => [
        u(Ci, null, {
          default: N(() => [
            De(Ze(l.value.label) + " ", 1),
            i.value ? (ne(), ue(Qd, W({
              key: 0,
              modelValue: l.value.switch.value,
              "onUpdate:modelValue": c[0] || (c[0] = (d) => l.value.switch.value = d)
            }, l.value.switch.props(), { "onUpdate:modelValue": s }), null, 16, ["modelValue"])) : Ie("", !0)
          ]),
          _: 1
        }),
        u(Bn, null, {
          default: N(() => [
            u(Be, null, {
              default: N(() => [
                (ne(!0), Xt(pe, null, Tn(l.value.items, (d, f) => (ne(), ue(Ce, {
                  key: f,
                  cols: 12,
                  md: d.cols
                }, {
                  default: N(() => [
                    u(Nd, W({
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
}), tf = R({
  ...dl({
    falseIcon: "$radioOff",
    trueIcon: "$radioOn"
  })
}, "VRadio"), nf = K()({
  name: "VRadio",
  props: tf(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Q(() => u(ea, W(e, {
      class: ["v-radio", e.class],
      style: e.style,
      type: "radio"
    }), n)), {};
  }
}), af = {
  key: 0,
  class: "mb-3 mt-4"
}, lf = {
  key: 1,
  class: "mb-3 mt-4"
}, ya = /* @__PURE__ */ Fe({
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
    }, a = e, l = t, i = B(a.field), s = je(() => i.value = a.field), r = Ln({
      ...n,
      mask: (a == null ? void 0 : a.field) instanceof rc ? (S = a.field) == null ? void 0 : S.masking : ""
    }), o = y(() => {
      var _;
      return (_ = i.value) == null ? void 0 : _.validationRules();
    }), c = y(() => {
      var _, w, P;
      return !oe((_ = a.field) == null ? void 0 : _.prepend_icon) && !oe((P = (w = a.field) == null ? void 0 : w.prepend_icon) == null ? void 0 : P.icon);
    }), d = y(() => {
      var _, w, P;
      return !oe((_ = a.field) == null ? void 0 : _.append_icon) && !oe((P = (w = a.field) == null ? void 0 : w.append_icon) == null ? void 0 : P.icon);
    }), f = y(() => {
      var _, w, P;
      return !oe((_ = a.field) == null ? void 0 : _.clear_icon) && !oe((P = (w = a.field) == null ? void 0 : w.clear_icon) == null ? void 0 : P.icon);
    }), v = y(
      () => {
        var _, w, P;
        return !oe((_ = a.field) == null ? void 0 : _.prepend_inner_icon) && !oe((P = (w = a.field) == null ? void 0 : w.prepend_inner_icon) == null ? void 0 : P.icon);
      }
    ), g = y(
      () => {
        var _, w, P;
        return !oe((_ = a.field) == null ? void 0 : _.append_inner_icon) && !oe((P = (w = a.field) == null ? void 0 : w.append_inner_icon) == null ? void 0 : P.icon);
      }
    ), p = y(() => {
      var _, w, P;
      return !(oe((_ = a == null ? void 0 : a.field) == null ? void 0 : _.component) || ((w = a == null ? void 0 : a.field) == null ? void 0 : w.type) === "hidden" || (P = a == null ? void 0 : a.field) != null && P.loading);
    });
    function m() {
      l("updated", i.value);
    }
    function h() {
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
      const P = Qt("EasyIcon"), C = gt("maska");
      return p.value ? Ve((ne(), ue(_r(Me(cc)((b = e.field) == null ? void 0 : b.component)), W({
        key: 0,
        modelValue: i.value.value,
        "onUpdate:modelValue": w[5] || (w[5] = (x) => i.value.value = x)
      }, (M = e.field) == null ? void 0 : M.props(), {
        rules: o.value,
        fields: a.fields ?? [],
        "onUpdate:modelValue": m,
        onValidated: h,
        onInvalidated: k,
        "onClick:clear": w[6] || (w[6] = (x) => l("click:clear", x)),
        "onClick:prepend": w[7] || (w[7] = (x) => l("click:prepend", x)),
        "onClick:prependInner": w[8] || (w[8] = (x) => l("click:prependInner", x)),
        "onClick:append": w[9] || (w[9] = (x) => l("click:append", x)),
        "onClick:appendInner": w[10] || (w[10] = (x) => l("click:appendInner", x))
      }), hi({
        default: N(() => [
          e.field.component == "v-radio-group" ? (ne(), Xt("p", af, [
            (ne(!0), Xt(pe, null, Tn(e.field.items, (x, E) => (ne(), ue(nf, W({ key: E }, x.props()), null, 16))), 128))
          ])) : Ie("", !0),
          e.field.component == "h2" ? (ne(), Xt("p", lf, Ze(i.value.value), 1)) : Ie("", !0)
        ]),
        _: 2
      }, [
        f.value ? {
          name: "clear",
          fn: N(() => {
            var x;
            return [
              u(P, {
                icon: (x = a == null ? void 0 : a.field) == null ? void 0 : x.clear_icon,
                onClick: w[0] || (w[0] = (E) => l("click:clear", E))
              }, null, 8, ["icon"])
            ];
          }),
          key: "0"
        } : void 0,
        d.value ? {
          name: "append",
          fn: N(() => {
            var x;
            return [
              u(P, {
                icon: (x = a == null ? void 0 : a.field) == null ? void 0 : x.append_icon,
                onClick: w[1] || (w[1] = (E) => l("click:append", E))
              }, null, 8, ["icon"])
            ];
          }),
          key: "1"
        } : void 0,
        g.value ? {
          name: "append-inner",
          fn: N(() => {
            var x;
            return [
              u(P, {
                icon: (x = a == null ? void 0 : a.field) == null ? void 0 : x.append_inner_icon,
                onClick: w[2] || (w[2] = (E) => l("click:appendInner", E))
              }, null, 8, ["icon"])
            ];
          }),
          key: "2"
        } : void 0,
        c.value ? {
          name: "prepend",
          fn: N(() => {
            var x;
            return [
              u(P, {
                icon: (x = a == null ? void 0 : a.field) == null ? void 0 : x.prepend_icon,
                onClick: w[3] || (w[3] = (E) => l("click:prepend", E))
              }, null, 8, ["icon"])
            ];
          }),
          key: "3"
        } : void 0,
        v.value ? {
          name: "prepend-inner",
          fn: N(() => {
            var x;
            return [
              u(P, {
                icon: (x = a == null ? void 0 : a.field) == null ? void 0 : x.prepend_inner_icon,
                onClick: w[4] || (w[4] = (E) => l("click:prependInner", E))
              }, null, 8, ["icon"])
            ];
          }),
          key: "4"
        } : void 0
      ]), 1040, ["modelValue", "rules", "fields"])), [
        [C, void 0, r]
      ]) : Ie("", !0);
    };
  }
});
const sf = R({
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
}, "VColorPickerCanvas"), rf = St({
  name: "VColorPickerCanvas",
  props: sf(),
  emits: {
    "update:color": (e) => !0,
    "update:position": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = ae(!1), l = B(), i = ae(parseFloat(e.width)), s = ae(parseFloat(e.height)), r = B({
      x: 0,
      y: 0
    }), o = y({
      get: () => r.value,
      set(h) {
        var _, w;
        if (!l.value)
          return;
        const {
          x: k,
          y: S
        } = h;
        r.value = h, n("update:color", {
          h: ((_ = e.color) == null ? void 0 : _.h) ?? 0,
          s: lt(k, 0, i.value) / i.value,
          v: 1 - lt(S, 0, s.value) / s.value,
          a: ((w = e.color) == null ? void 0 : w.a) ?? 1
        });
      }
    }), c = y(() => {
      const {
        x: h,
        y: k
      } = o.value, S = parseInt(e.dotSize, 10) / 2;
      return {
        width: te(e.dotSize),
        height: te(e.dotSize),
        transform: `translate(${te(h - S)}, ${te(k - S)})`
      };
    }), {
      resizeRef: d
    } = An((h) => {
      var _;
      if (!((_ = d.value) != null && _.offsetParent))
        return;
      const {
        width: k,
        height: S
      } = h[0].contentRect;
      i.value = k, s.value = S;
    });
    function f(h, k, S) {
      const {
        left: _,
        top: w,
        width: P,
        height: C
      } = S;
      o.value = {
        x: lt(h - _, 0, P),
        y: lt(k - w, 0, C)
      };
    }
    function v(h) {
      h.type === "mousedown" && h.preventDefault(), !e.disabled && (g(h), window.addEventListener("mousemove", g), window.addEventListener("mouseup", p), window.addEventListener("touchmove", g), window.addEventListener("touchend", p));
    }
    function g(h) {
      if (e.disabled || !l.value)
        return;
      a.value = !0;
      const k = _c(h);
      f(k.clientX, k.clientY, l.value.getBoundingClientRect());
    }
    function p() {
      window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", p), window.removeEventListener("touchmove", g), window.removeEventListener("touchend", p);
    }
    function m() {
      var w;
      if (!l.value)
        return;
      const h = l.value, k = h.getContext("2d");
      if (!k)
        return;
      const S = k.createLinearGradient(0, 0, h.width, 0);
      S.addColorStop(0, "hsla(0, 0%, 100%, 1)"), S.addColorStop(1, `hsla(${((w = e.color) == null ? void 0 : w.h) ?? 0}, 100%, 50%, 1)`), k.fillStyle = S, k.fillRect(0, 0, h.width, h.height);
      const _ = k.createLinearGradient(0, 0, 0, h.height);
      _.addColorStop(0, "hsla(0, 0%, 0%, 0)"), _.addColorStop(1, "hsla(0, 0%, 0%, 1)"), k.fillStyle = _, k.fillRect(0, 0, h.width, h.height);
    }
    return J(() => {
      var h;
      return (h = e.color) == null ? void 0 : h.h;
    }, m, {
      immediate: !0
    }), J(() => [i.value, s.value], (h, k) => {
      m(), r.value = {
        x: o.value.x * h[0] / k[0],
        y: o.value.y * h[1] / k[1]
      };
    }, {
      flush: "post"
    }), J(() => e.color, () => {
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
    }), We(() => m()), Q(() => u("div", {
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
const Po = R({
  divided: Boolean,
  ...yn(),
  ...ie(),
  ...yt(),
  ...Wt(),
  ...Qe(),
  ...Ee(),
  ...Le(),
  ...$t()
}, "VBtnGroup"), zs = K()({
  name: "VBtnGroup",
  props: Po(),
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
    } = Ut(e), {
      roundedClasses: r
    } = et(e);
    gn({
      VBtn: {
        height: "auto",
        color: X(e, "color"),
        density: X(e, "density"),
        flat: !0,
        variant: X(e, "variant")
      }
    }), Q(() => u(e.tag, {
      class: ["v-btn-group", {
        "v-btn-group--divided": e.divided
      }, a.value, i.value, l.value, s.value, r.value, e.class],
      style: e.style
    }, n));
  }
}), Ri = R({
  modelValue: {
    type: null,
    default: void 0
  },
  multiple: Boolean,
  mandatory: [Boolean, String],
  max: Number,
  selectedClass: String,
  disabled: Boolean
}, "group"), Mo = R({
  value: null,
  disabled: Boolean,
  selectedClass: String
}, "group-item");
function Do(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
  const a = Ne("useGroupItem");
  if (!a)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const l = rt();
  Ge(Symbol.for(`${t.description}:id`), l);
  const i = Te(t, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const s = X(e, "value"), r = y(() => !!(i.disabled.value || e.disabled));
  i.register({
    id: l,
    value: s,
    disabled: r
  }, a), Ae(() => {
    i.unregister(l);
  });
  const o = y(() => i.isSelected(l)), c = y(() => o.value && [i.selectedClass.value, e.selectedClass]);
  return J(o, (d) => {
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
function Fi(e, t) {
  let n = !1;
  const a = Ln([]), l = me(e, "modelValue", [], (v) => v == null ? [] : Io(a, Xe(v)), (v) => {
    const g = uf(a, v);
    return e.multiple ? g : g[0];
  }), i = Ne("useGroup");
  function s(v, g) {
    const p = v, m = Symbol.for(`${t.description}:id`), k = Aa(m, i == null ? void 0 : i.vnode).indexOf(g);
    Me(p.value) == null && (p.value = k), k > -1 ? a.splice(k, 0, p) : a.push(p);
  }
  function r(v) {
    if (n)
      return;
    o();
    const g = a.findIndex((p) => p.id === v);
    a.splice(g, 1);
  }
  function o() {
    const v = a.find((g) => !g.disabled);
    v && e.mandatory === "force" && !l.value.length && (l.value = [v.id]);
  }
  We(() => {
    o();
  }), Ae(() => {
    n = !0;
  });
  function c(v, g) {
    const p = a.find((m) => m.id === v);
    if (!(g && (p != null && p.disabled)))
      if (e.multiple) {
        const m = l.value.slice(), h = m.findIndex((S) => S === v), k = ~h;
        if (g = g ?? !k, k && e.mandatory && m.length <= 1 || !k && e.max != null && m.length + 1 > e.max)
          return;
        h < 0 && g ? m.push(v) : h >= 0 && !g && m.splice(h, 1), l.value = m;
      } else {
        const m = l.value.includes(v);
        if (e.mandatory && m)
          return;
        l.value = g ?? !m ? [v] : [];
      }
  }
  function d(v) {
    if (e.multiple && un('This method is not supported when using "multiple" prop'), l.value.length) {
      const g = l.value[0], p = a.findIndex((k) => k.id === g);
      let m = (p + v) % a.length, h = a[m];
      for (; h.disabled && m !== p; )
        m = (m + v) % a.length, h = a[m];
      if (h.disabled)
        return;
      l.value = [a[m].id];
    } else {
      const g = a.find((p) => !p.disabled);
      g && (l.value = [g.id]);
    }
  }
  const f = {
    register: s,
    unregister: r,
    selected: l,
    select: c,
    disabled: X(e, "disabled"),
    prev: () => d(a.length - 1),
    next: () => d(1),
    isSelected: (v) => l.value.includes(v),
    selectedClass: y(() => e.selectedClass),
    items: y(() => a),
    getItemIndex: (v) => of(a, v)
  };
  return Ge(t, f), f;
}
function of(e, t) {
  const n = Io(e, [t]);
  return n.length ? e.findIndex((a) => a.id === n[0]) : -1;
}
function Io(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.find((s) => hn(a, s.value)), i = e[a];
    (l == null ? void 0 : l.value) != null ? n.push(l.id) : i != null && n.push(i.id);
  }), n;
}
function uf(e, t) {
  const n = [];
  return t.forEach((a) => {
    const l = e.findIndex((i) => i.id === a);
    if (~l) {
      const i = e[l];
      n.push(i.value != null ? i.value : l);
    }
  }), n;
}
const Oo = Symbol.for("vuetify:v-btn-toggle"), cf = R({
  ...Po(),
  ...Ri()
}, "VBtnToggle");
K()({
  name: "VBtnToggle",
  props: cf(),
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
    } = Fi(e, Oo);
    return Q(() => {
      const o = zs.filterProps(e);
      return u(zs, W({
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
function df(e, t) {
  J(() => {
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
const ff = R({
  active: {
    type: Boolean,
    default: void 0
  },
  symbol: {
    type: null,
    default: Oo
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
  ...Bt(),
  ...Wt(),
  ...Mo(),
  ...Pi(),
  ...fa(),
  ...rl(),
  ...Qe(),
  ...cl(),
  ...ua(),
  ...Ee({
    tag: "button"
  }),
  ...Le(),
  ...$t({
    variant: "elevated"
  })
}, "VBtn"), Ye = K()({
  name: "VBtn",
  directives: {
    Ripple: $n
  },
  props: ff(),
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
    } = Nn(e), {
      densityClasses: c
    } = Ct(e), {
      dimensionStyles: d
    } = Yt(e), {
      elevationClasses: f
    } = Ut(e), {
      loaderClasses: v
    } = sl(e), {
      locationStyles: g
    } = va(e), {
      positionClasses: p
    } = ol(e), {
      roundedClasses: m
    } = et(e), {
      sizeClasses: h,
      sizeStyles: k
    } = ca(e), S = Do(e, e.symbol, !1), _ = ul(e, n), w = y(() => {
      var x;
      return e.active !== void 0 ? e.active : _.isLink.value ? (x = _.isActive) == null ? void 0 : x.value : S == null ? void 0 : S.isSelected.value;
    }), P = y(() => (S == null ? void 0 : S.disabled.value) || e.disabled), C = y(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), b = y(() => {
      if (!(e.value === void 0 || typeof e.value == "symbol"))
        return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
    });
    function M(x) {
      var E;
      P.value || _.isLink.value && (x.metaKey || x.ctrlKey || x.shiftKey || x.button !== 0 || n.target === "_blank") || ((E = _.navigate) == null || E.call(_, x), S == null || S.toggle());
    }
    return df(_, S == null ? void 0 : S.select), Q(() => {
      var V, O;
      const x = _.isLink.value ? "a" : e.tag, E = !!(e.prependIcon || a.prepend), Y = !!(e.appendIcon || a.append), I = !!(e.icon && e.icon !== !0), D = (S == null ? void 0 : S.isSelected.value) && (!_.isLink.value || ((V = _.isActive) == null ? void 0 : V.value)) || !S || ((O = _.isActive) == null ? void 0 : O.value);
      return Ve(u(x, {
        type: x === "a" ? void 0 : "button",
        class: ["v-btn", S == null ? void 0 : S.selectedClass.value, {
          "v-btn--active": w.value,
          "v-btn--block": e.block,
          "v-btn--disabled": P.value,
          "v-btn--elevated": C.value,
          "v-btn--flat": e.flat,
          "v-btn--icon": !!e.icon,
          "v-btn--loading": e.loading,
          "v-btn--slim": e.slim,
          "v-btn--stacked": e.stacked
        }, l.value, i.value, D ? s.value : void 0, c.value, f.value, v.value, p.value, m.value, h.value, o.value, e.class],
        style: [D ? r.value : void 0, d.value, g.value, k.value, e.style],
        disabled: P.value || void 0,
        href: _.href.value,
        onClick: M,
        value: b.value
      }, {
        default: () => {
          var U;
          return [Fn(!0, "v-btn"), !e.icon && E && u("span", {
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
          }, a.prepend) : u(be, {
            key: "prepend-icon",
            icon: e.prependIcon
          }, null)]), u("span", {
            class: "v-btn__content",
            "data-no-activator": ""
          }, [!a.default && I ? u(be, {
            key: "content-icon",
            icon: e.icon
          }, null) : u(xe, {
            key: "content-defaults",
            disabled: !I,
            defaults: {
              VIcon: {
                icon: e.icon
              }
            }
          }, {
            default: () => {
              var Z;
              return [((Z = a.default) == null ? void 0 : Z.call(a)) ?? e.text];
            }
          })]), !e.icon && Y && u("span", {
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
          }, a.append) : u(be, {
            key: "append-icon",
            icon: e.appendIcon
          }, null)]), !!e.loading && u("span", {
            key: "loader",
            class: "v-btn__loader"
          }, [((U = a.loader) == null ? void 0 : U.call(a)) ?? u(Li, {
            color: typeof e.loading == "boolean" ? void 0 : e.loading,
            indeterminate: !0,
            size: "23",
            width: "2"
          }, null)])];
        }
      }), [[gt("ripple"), !P.value && e.ripple, null]]);
    }), {
      group: S
    };
  }
});
function vf(e, t) {
  if (t) {
    const {
      a: n,
      ...a
    } = e;
    return a;
  }
  return e;
}
function mf(e, t) {
  if (t == null || typeof t == "string") {
    const n = Yr(e);
    return e.a === 1 ? n.slice(0, 7) : n;
  }
  if (typeof t == "object") {
    let n;
    return ln(t, ["r", "g", "b"]) ? n = Ft(e) : ln(t, ["h", "s", "l"]) ? n = Lr(e) : ln(t, ["h", "s", "v"]) && (n = e), vf(n, !ln(t, ["a"]) && e.a === 1);
  }
  return e;
}
const Pn = {
  h: 0,
  s: 0,
  v: 0,
  a: 1
}, Xl = {
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
  from: ll
};
var pr;
const hf = {
  ...Xl,
  inputs: (pr = Xl.inputs) == null ? void 0 : pr.slice(0, 3)
}, Jl = {
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
  to: Lr,
  from: _i
}, gf = {
  ...Jl,
  inputs: Jl.inputs.slice(0, 3)
}, To = {
  inputProps: {
    type: "text"
  },
  inputs: [{
    label: "HEXA",
    getValue: (e) => e,
    getColor: (e, t) => t
  }],
  to: Yr,
  from: Br
}, yf = {
  ...To,
  inputs: [{
    label: "HEX",
    getValue: (e) => e.slice(0, 7),
    getColor: (e, t) => t
  }]
}, cn = {
  rgb: hf,
  rgba: Xl,
  hsl: gf,
  hsla: Jl,
  hex: yf,
  hexa: To
}, pf = (e) => {
  let {
    label: t,
    ...n
  } = e;
  return u("div", {
    class: "v-color-picker-edit__input"
  }, [u("input", n, null), u("span", null, [t])]);
}, kf = R({
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
}, "VColorPickerEdit"), bf = St({
  name: "VColorPickerEdit",
  props: kf(),
  emits: {
    "update:color": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = y(() => e.modes.map((i) => ({
      ...cn[i],
      name: i
    }))), l = y(() => {
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
            const g = v.target;
            g && n("update:color", i.from(d(s ?? i.to(Pn), g.value)));
          }
        };
      });
    });
    return Q(() => {
      var i;
      return u("div", {
        class: ["v-color-picker-edit", e.class],
        style: e.style
      }, [(i = l.value) == null ? void 0 : i.map((s) => u(pf, s, null)), a.value.length > 1 && u(Ye, {
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
const Ni = Symbol.for("vuetify:v-slider");
function _f(e, t, n) {
  const a = n === "vertical", l = t.getBoundingClientRect(), i = "touches" in e ? e.touches[0] : e;
  return a ? i.clientY - (l.top + l.height / 2) : i.clientX - (l.left + l.width / 2);
}
function Sf(e, t) {
  return "touches" in e && e.touches.length ? e.touches[0][t] : "changedTouches" in e && e.changedTouches.length ? e.changedTouches[0][t] : e[t];
}
const wf = R({
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
  ...Qe(),
  ...Wt({
    elevation: 2
  }),
  ripple: {
    type: Boolean,
    default: !0
  }
}, "Slider"), Cf = (e) => {
  const t = y(() => parseFloat(e.min)), n = y(() => parseFloat(e.max)), a = y(() => +e.step > 0 ? parseFloat(e.step) : 0), l = y(() => Math.max(ys(a.value), ys(t.value)));
  function i(s) {
    if (s = parseFloat(s), a.value <= 0)
      return s;
    const r = lt(s, t.value, n.value), o = t.value % a.value, c = Math.round((r - o) / a.value) * a.value + o;
    return parseFloat(Math.min(c, n.value).toFixed(l.value));
  }
  return {
    min: t,
    max: n,
    step: a,
    decimals: l,
    roundValue: i
  };
}, xf = (e) => {
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
  } = xt(), o = X(t, "reverse"), c = y(() => t.direction === "vertical"), d = y(() => c.value !== o.value), {
    min: f,
    max: v,
    step: g,
    decimals: p,
    roundValue: m
  } = n, h = y(() => parseInt(t.thumbSize, 10)), k = y(() => parseInt(t.tickSize, 10)), S = y(() => parseInt(t.trackSize, 10)), _ = y(() => (v.value - f.value) / g.value), w = X(t, "disabled"), P = y(() => t.error || t.disabled ? void 0 : t.thumbColor ?? t.color), C = y(() => t.error || t.disabled ? void 0 : t.trackColor ?? t.color), b = y(() => t.error || t.disabled ? void 0 : t.trackFillColor ?? t.color), M = ae(!1), x = ae(0), E = B(), Y = B();
  function I(j) {
    var cs;
    const re = t.direction === "vertical", jt = re ? "top" : "left", Mt = re ? "height" : "width", wa = re ? "clientY" : "clientX", {
      [jt]: Ca,
      [Mt]: Pl
    } = (cs = E.value) == null ? void 0 : cs.$el.getBoundingClientRect(), Ml = Sf(j, wa);
    let Dl = Math.min(Math.max((Ml - Ca - x.value) / Pl, 0), 1) || 0;
    return (re ? d.value : d.value !== r.value) && (Dl = 1 - Dl), m(f.value + Dl * (v.value - f.value));
  }
  const D = (j) => {
    i({
      value: I(j)
    }), M.value = !1, x.value = 0;
  }, V = (j) => {
    Y.value = s(j), Y.value && (Y.value.focus(), M.value = !0, Y.value.contains(j.target) ? x.value = _f(j, Y.value, t.direction) : (x.value = 0, l({
      value: I(j)
    })), a({
      value: I(j)
    }));
  }, O = {
    passive: !0,
    capture: !0
  };
  function U(j) {
    l({
      value: I(j)
    });
  }
  function Z(j) {
    j.stopPropagation(), j.preventDefault(), D(j), window.removeEventListener("mousemove", U, O), window.removeEventListener("mouseup", Z);
  }
  function T(j) {
    var re;
    D(j), window.removeEventListener("touchmove", U, O), (re = j.target) == null || re.removeEventListener("touchend", T);
  }
  function L(j) {
    var re;
    V(j), window.addEventListener("touchmove", U, O), (re = j.target) == null || re.addEventListener("touchend", T, {
      passive: !1
    });
  }
  function $(j) {
    j.preventDefault(), V(j), window.addEventListener("mousemove", U, O), window.addEventListener("mouseup", Z, {
      passive: !1
    });
  }
  const A = (j) => {
    const re = (j - f.value) / (v.value - f.value) * 100;
    return lt(isNaN(re) ? 0 : re, 0, 100);
  }, q = X(t, "showTicks"), z = y(() => q.value ? t.ticks ? Array.isArray(t.ticks) ? t.ticks.map((j) => ({
    value: j,
    position: A(j),
    label: j.toString()
  })) : Object.keys(t.ticks).map((j) => ({
    value: parseFloat(j),
    position: A(parseFloat(j)),
    label: t.ticks[j]
  })) : _.value !== 1 / 0 ? yi(_.value + 1).map((j) => {
    const re = f.value + j * g.value;
    return {
      value: re,
      position: A(re)
    };
  }) : [] : []), le = y(() => z.value.some((j) => {
    let {
      label: re
    } = j;
    return !!re;
  })), de = {
    activeThumbRef: Y,
    color: X(t, "color"),
    decimals: p,
    disabled: w,
    direction: X(t, "direction"),
    elevation: X(t, "elevation"),
    hasLabels: le,
    isReversed: o,
    indexFromEnd: d,
    min: f,
    max: v,
    mousePressed: M,
    numTicks: _,
    onSliderMousedown: $,
    onSliderTouchstart: L,
    parsedTicks: z,
    parseMouseMove: I,
    position: A,
    readonly: X(t, "readonly"),
    rounded: X(t, "rounded"),
    roundValue: m,
    showTicks: q,
    startOffset: x,
    step: g,
    thumbSize: h,
    thumbColor: P,
    thumbLabel: X(t, "thumbLabel"),
    ticks: X(t, "ticks"),
    tickSize: k,
    trackColor: C,
    trackContainerRef: E,
    trackFillColor: b,
    trackSize: S,
    vertical: c
  };
  return Ge(Ni, de), de;
}, Vf = R({
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
}, "VSliderThumb"), Pf = K()({
  name: "VSliderThumb",
  directives: {
    Ripple: $n
  },
  props: Vf(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Te(Ni), {
      isRtl: i,
      rtlClasses: s
    } = xt();
    if (!l)
      throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider");
    const {
      thumbColor: r,
      step: o,
      disabled: c,
      thumbSize: d,
      thumbLabel: f,
      direction: v,
      isReversed: g,
      vertical: p,
      readonly: m,
      elevation: h,
      mousePressed: k,
      decimals: S,
      indexFromEnd: _
    } = l, w = y(() => c.value ? void 0 : h.value), {
      elevationClasses: P
    } = Ut(w), {
      textColorClasses: C,
      textColorStyles: b
    } = vt(r), {
      pageup: M,
      pagedown: x,
      end: E,
      home: Y,
      left: I,
      right: D,
      down: V,
      up: O
    } = yc, U = [M, x, E, Y, I, D, V, O], Z = y(() => o.value ? [1, 2, 3] : [1, 5, 10]);
    function T($, A) {
      if (!U.includes($.key))
        return;
      $.preventDefault();
      const q = o.value || 0.1, z = (e.max - e.min) / q;
      if ([I, D, V, O].includes($.key)) {
        const de = (p.value ? [i.value ? I : D, g.value ? V : O] : _.value !== i.value ? [I, O] : [D, O]).includes($.key) ? 1 : -1, j = $.shiftKey ? 2 : $.ctrlKey ? 1 : 0;
        A = A + de * q * Z.value[j];
      } else if ($.key === Y)
        A = e.min;
      else if ($.key === E)
        A = e.max;
      else {
        const le = $.key === x ? 1 : -1;
        A = A - le * q * (z > 100 ? z / 10 : 10);
      }
      return Math.max(e.min, Math.min(e.max, A));
    }
    function L($) {
      const A = T($, e.modelValue);
      A != null && a("update:modelValue", A);
    }
    return Q(() => {
      const $ = te(_.value ? 100 - e.position : e.position, "%");
      return u("div", {
        class: ["v-slider-thumb", {
          "v-slider-thumb--focused": e.focused,
          "v-slider-thumb--pressed": e.focused && k.value
        }, e.class, s.value],
        style: [{
          "--v-slider-thumb-position": $,
          "--v-slider-thumb-size": te(d.value)
        }, e.style],
        role: "slider",
        tabindex: c.value ? -1 : 0,
        "aria-valuemin": e.min,
        "aria-valuemax": e.max,
        "aria-valuenow": e.modelValue,
        "aria-readonly": !!m.value,
        "aria-orientation": v.value,
        onKeydown: m.value ? void 0 : L
      }, [u("div", {
        class: ["v-slider-thumb__surface", C.value, P.value],
        style: {
          ...b.value
        }
      }, null), Ve(u("div", {
        class: ["v-slider-thumb__ripple", C.value],
        style: b.value
      }, null), [[gt("ripple"), e.ripple, null, {
        circle: !0,
        center: !0
      }]]), u(fo, {
        origin: "bottom center"
      }, {
        default: () => {
          var A;
          return [Ve(u("div", {
            class: "v-slider-thumb__label-container"
          }, [u("div", {
            class: ["v-slider-thumb__label"]
          }, [u("div", null, [((A = n["thumb-label"]) == null ? void 0 : A.call(n, {
            modelValue: e.modelValue
          })) ?? e.modelValue.toFixed(o.value ? S.value : 1)])])]), [[dt, f.value && e.focused || f.value === "always"]])];
        }
      })]);
    }), {};
  }
});
const Mf = R({
  start: {
    type: Number,
    required: !0
  },
  stop: {
    type: Number,
    required: !0
  },
  ...ie()
}, "VSliderTrack"), Df = K()({
  name: "VSliderTrack",
  props: Mf(),
  emits: {},
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Te(Ni);
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
      min: g,
      max: p,
      indexFromEnd: m
    } = a, {
      roundedClasses: h
    } = et(s), {
      backgroundColorClasses: k,
      backgroundColorStyles: S
    } = st(d), {
      backgroundColorClasses: _,
      backgroundColorStyles: w
    } = st(c), P = y(() => `inset-${v.value ? "block" : "inline"}-${m.value ? "end" : "start"}`), C = y(() => v.value ? "height" : "width"), b = y(() => ({
      [P.value]: "0%",
      [C.value]: "100%"
    })), M = y(() => e.stop - e.start), x = y(() => ({
      [P.value]: te(e.start, "%"),
      [C.value]: te(M.value, "%")
    })), E = y(() => r.value ? (v.value ? i.value.slice().reverse() : i.value).map((I, D) => {
      var O;
      const V = I.value !== g.value && I.value !== p.value ? te(I.position, "%") : void 0;
      return u("div", {
        key: I.value,
        class: ["v-slider-track__tick", {
          "v-slider-track__tick--filled": I.position >= e.start && I.position <= e.stop,
          "v-slider-track__tick--first": I.value === g.value,
          "v-slider-track__tick--last": I.value === p.value
        }],
        style: {
          [P.value]: V
        }
      }, [(I.label || n["tick-label"]) && u("div", {
        class: "v-slider-track__tick-label"
      }, [((O = n["tick-label"]) == null ? void 0 : O.call(n, {
        tick: I,
        index: D
      })) ?? I.label])]);
    }) : []);
    return Q(() => u("div", {
      class: ["v-slider-track", h.value, e.class],
      style: [{
        "--v-slider-track-size": te(f.value),
        "--v-slider-tick-size": te(o.value)
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
        ...x.value,
        ...S.value
      }
    }, null), r.value && u("div", {
      class: ["v-slider-track__ticks", {
        "v-slider-track__ticks--always-show": r.value === "always"
      }]
    }, [E.value])])), {};
  }
}), If = R({
  ...Oi(),
  ...wf(),
  ...ga(),
  modelValue: {
    type: [Number, String],
    default: 0
  }
}, "VSlider"), js = K()({
  name: "VSlider",
  props: If(),
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
    const l = B(), {
      rtlClasses: i
    } = xt(), s = Cf(e), r = me(e, "modelValue", void 0, (C) => s.roundValue(C ?? s.min.value)), {
      min: o,
      max: c,
      mousePressed: d,
      roundValue: f,
      onSliderMousedown: v,
      onSliderTouchstart: g,
      trackContainerRef: p,
      position: m,
      hasLabels: h,
      readonly: k
    } = xf({
      props: e,
      steps: s,
      onSliderStart: () => {
        a("start", r.value);
      },
      onSliderEnd: (C) => {
        let {
          value: b
        } = C;
        const M = f(b);
        r.value = M, a("end", M);
      },
      onSliderMove: (C) => {
        let {
          value: b
        } = C;
        return r.value = f(b);
      },
      getActiveThumb: () => {
        var C;
        return (C = l.value) == null ? void 0 : C.$el;
      }
    }), {
      isFocused: S,
      focus: _,
      blur: w
    } = ha(e), P = y(() => m(r.value));
    return Q(() => {
      const C = en.filterProps(e), b = !!(e.label || n.label || n.prepend);
      return u(en, W({
        class: ["v-slider", {
          "v-slider--has-labels": !!n["tick-label"] || h.value,
          "v-slider--focused": S.value,
          "v-slider--pressed": d.value,
          "v-slider--disabled": e.disabled
        }, i.value, e.class],
        style: e.style
      }, C, {
        focused: S.value
      }), {
        ...n,
        prepend: b ? (M) => {
          var x, E;
          return u(pe, null, [((x = n.label) == null ? void 0 : x.call(n, M)) ?? (e.label ? u(Di, {
            id: M.id.value,
            class: "v-slider__label",
            text: e.label
          }, null) : void 0), (E = n.prepend) == null ? void 0 : E.call(n, M)]);
        } : void 0,
        default: (M) => {
          let {
            id: x,
            messagesId: E
          } = M;
          return u("div", {
            class: "v-slider__container",
            onMousedown: k.value ? void 0 : v,
            onTouchstartPassive: k.value ? void 0 : g
          }, [u("input", {
            id: x.value,
            name: e.name || x.value,
            disabled: !!e.disabled,
            readonly: !!e.readonly,
            tabindex: "-1",
            value: r.value
          }, null), u(Df, {
            ref: p,
            start: 0,
            stop: P.value
          }, {
            "tick-label": n["tick-label"]
          }), u(Pf, {
            ref: l,
            "aria-describedby": E.value,
            focused: S.value,
            min: o.value,
            max: c.value,
            modelValue: r.value,
            "onUpdate:modelValue": (Y) => r.value = Y,
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
}), Of = R({
  color: {
    type: Object
  },
  disabled: Boolean,
  hideAlpha: Boolean,
  ...ie()
}, "VColorPickerPreview"), Tf = St({
  name: "VColorPickerPreview",
  props: Of(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    const a = new AbortController();
    ac(() => a.abort());
    async function l() {
      if (!ms)
        return;
      const i = new window.EyeDropper();
      try {
        const s = await i.open({
          signal: a.signal
        }), r = Br(s.sRGBHex);
        n("update:color", {
          ...e.color ?? Pn,
          ...r
        });
      } catch {
      }
    }
    return Q(() => {
      var i, s;
      return u("div", {
        class: ["v-color-picker-preview", {
          "v-color-picker-preview--hide-alpha": e.hideAlpha
        }, e.class],
        style: e.style
      }, [ms && u("div", {
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
          background: Fr(e.color ?? Pn)
        }
      }, null)]), u("div", {
        class: "v-color-picker-preview__sliders"
      }, [u(js, {
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
      }, null), !e.hideAlpha && u(js, {
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
const Af = {
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
}, Ef = {
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
}, Lf = {
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
}, Rf = {
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
}, Ff = {
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
}, Nf = {
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
}, Bf = {
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
}, Yf = {
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
}, $f = {
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
}, Wf = {
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
}, Uf = {
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
}, Hf = {
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
}, zf = {
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
}, jf = {
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
}, Gf = {
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
}, qf = {
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
}, Kf = {
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
}, Zf = {
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
}, Xf = {
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
}, Jf = {
  black: "#000000",
  white: "#ffffff",
  transparent: "#ffffff00"
}, Qf = {
  red: Af,
  pink: Ef,
  purple: Lf,
  deepPurple: Rf,
  indigo: Ff,
  blue: Nf,
  lightBlue: Bf,
  cyan: Yf,
  teal: $f,
  green: Wf,
  lightGreen: Uf,
  lime: Hf,
  yellow: zf,
  amber: jf,
  orange: Gf,
  deepOrange: qf,
  brown: Kf,
  blueGrey: Zf,
  grey: Xf,
  shades: Jf
}, ev = R({
  swatches: {
    type: Array,
    default: () => tv(Qf)
  },
  disabled: Boolean,
  color: Object,
  maxHeight: [Number, String],
  ...ie()
}, "VColorPickerSwatches");
function tv(e) {
  return Object.keys(e).map((t) => {
    const n = e[t];
    return n.base ? [n.base, n.darken4, n.darken3, n.darken2, n.darken1, n.lighten1, n.lighten2, n.lighten3, n.lighten4, n.lighten5] : [n.black, n.white, n.transparent];
  });
}
const nv = St({
  name: "VColorPickerSwatches",
  props: ev(),
  emits: {
    "update:color": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n
    } = t;
    return Q(() => u("div", {
      class: ["v-color-picker-swatches", e.class],
      style: [{
        maxHeight: te(e.maxHeight)
      }, e.style]
    }, [u("div", null, [e.swatches.map((a) => u("div", {
      class: "v-color-picker-swatches__swatch"
    }, [a.map((l) => {
      const i = qt(l), s = ll(i), r = Rr(i);
      return u("div", {
        class: "v-color-picker-swatches__color",
        onClick: () => s && n("update:color", s)
      }, [u("div", {
        style: {
          background: r
        }
      }, [e.color && hn(e.color, s) ? u(be, {
        size: "x-small",
        icon: "$success",
        color: Uc(l, "#FFFFFF") > 2 ? "white" : "black"
      }, null) : void 0])]);
    })]))])])), {};
  }
});
const Bi = R({
  color: String,
  ...yn(),
  ...ie(),
  ...Bt(),
  ...Wt(),
  ...fa(),
  ...rl(),
  ...Qe(),
  ...Ee(),
  ...Le()
}, "VSheet"), ta = K()({
  name: "VSheet",
  props: Bi(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      themeClasses: a
    } = Ue(e), {
      backgroundColorClasses: l,
      backgroundColorStyles: i
    } = st(X(e, "color")), {
      borderClasses: s
    } = pn(e), {
      dimensionStyles: r
    } = Yt(e), {
      elevationClasses: o
    } = Ut(e), {
      locationStyles: c
    } = va(e), {
      positionClasses: d
    } = ol(e), {
      roundedClasses: f
    } = et(e);
    return Q(() => u(e.tag, {
      class: ["v-sheet", a.value, l.value, s.value, o.value, d.value, f.value, e.class],
      style: [i.value, r.value, c.value, e.style]
    }, n)), {};
  }
}), av = R({
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
  ...Je(Bi({
    width: 300
  }), ["height", "location", "minHeight", "maxHeight", "minWidth", "maxWidth"])
}, "VColorPicker"), lv = St({
  name: "VColorPicker",
  props: av(),
  emits: {
    "update:modelValue": (e) => !0,
    "update:mode": (e) => !0
  },
  setup(e) {
    const t = me(e, "mode"), n = B(null), a = me(e, "modelValue", void 0, (o) => {
      if (o == null || o === "")
        return null;
      let c;
      try {
        c = ll(qt(o));
      } catch (d) {
        return un(d), null;
      }
      return c;
    }, (o) => o ? mf(o, e.modelValue) : null), l = y(() => a.value ? {
      ...a.value,
      h: n.value ?? a.value.h
    } : null), {
      rtlClasses: i
    } = xt();
    let s = !0;
    J(a, (o) => {
      if (!s) {
        s = !0;
        return;
      }
      o && (n.value = o.h);
    }, {
      immediate: !0
    });
    const r = (o) => {
      s = !1, n.value = o.h, a.value = o;
    };
    return We(() => {
      e.modes.includes(t.value) || (t.value = e.modes[0]);
    }), gn({
      VSlider: {
        color: void 0,
        trackColor: void 0,
        trackFillColor: void 0
      }
    }), Q(() => {
      const o = ta.filterProps(e);
      return u(ta, W({
        rounded: e.rounded,
        elevation: e.elevation,
        theme: e.theme,
        class: ["v-color-picker", i.value, e.class],
        style: [{
          "--v-color-picker-color-hsv": Fr({
            ...l.value ?? Pn,
            a: 1
          })
        }, e.style]
      }, o, {
        maxWidth: e.width
      }), {
        default: () => [!e.hideCanvas && u(rf, {
          key: "canvas",
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled,
          dotSize: e.dotSize,
          width: e.width,
          height: e.canvasHeight
        }, null), (!e.hideSliders || !e.hideInputs) && u("div", {
          key: "controls",
          class: "v-color-picker__controls"
        }, [!e.hideSliders && u(Tf, {
          key: "preview",
          color: l.value,
          "onUpdate:color": r,
          hideAlpha: !t.value.endsWith("a"),
          disabled: e.disabled
        }, null), !e.hideInputs && u(bf, {
          key: "edit",
          modes: e.modes,
          mode: t.value,
          "onUpdate:mode": (c) => t.value = c,
          color: l.value,
          "onUpdate:color": r,
          disabled: e.disabled
        }, null)]), e.showSwatches && u(nv, {
          key: "swatches",
          color: l.value,
          "onUpdate:color": r,
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
function iv(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Gs(e, t) {
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
const Ao = {
  static: ov,
  // specific viewport position, usually centered
  connected: cv
  // connected to a certain element
}, sv = R({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (e) => typeof e == "function" || e in Ao
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
function rv(e, t) {
  const n = B({}), a = B();
  Re && mn(() => !!(t.isActive.value && e.locationStrategy), (i) => {
    var s, r;
    J(() => e.locationStrategy, i), qe(() => {
      window.removeEventListener("resize", l), a.value = void 0;
    }), window.addEventListener("resize", l, {
      passive: !0
    }), typeof e.locationStrategy == "function" ? a.value = (s = e.locationStrategy(t, e, n)) == null ? void 0 : s.updateLocation : a.value = (r = Ao[e.locationStrategy](t, e, n)) == null ? void 0 : r.updateLocation;
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
function ov() {
}
function uv(e, t) {
  t ? e.style.removeProperty("left") : e.style.removeProperty("right");
  const n = bi(e);
  return t ? n.x += parseFloat(e.style.right || 0) : n.x -= parseFloat(e.style.left || 0), n.y -= parseFloat(e.style.top || 0), n;
}
function cv(e, t, n) {
  (Array.isArray(e.target.value) || Kc(e.target.value)) && Object.assign(n.value, {
    position: "fixed",
    top: 0,
    [e.isRtl.value ? "right" : "left"]: 0
  });
  const {
    preferredAnchor: l,
    preferredOrigin: i
  } = ki(() => {
    const p = zl(t.location, e.isRtl.value), m = t.origin === "overlap" ? p : t.origin === "auto" ? Il(p) : zl(t.origin, e.isRtl.value);
    return p.side === m.side && p.align === Ol(m).align ? {
      preferredAnchor: _s(p),
      preferredOrigin: _s(m)
    } : {
      preferredAnchor: p,
      preferredOrigin: m
    };
  }), [s, r, o, c] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((p) => y(() => {
    const m = parseFloat(t[p]);
    return isNaN(m) ? 1 / 0 : m;
  })), d = y(() => {
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
    f && g();
  });
  J([e.target, e.contentEl], (p, m) => {
    let [h, k] = p, [S, _] = m;
    S && !Array.isArray(S) && v.unobserve(S), h && !Array.isArray(h) && v.observe(h), _ && v.unobserve(_), k && v.observe(k);
  }, {
    immediate: !0
  }), qe(() => {
    v.disconnect();
  });
  function g() {
    if (f = !1, requestAnimationFrame(() => f = !0), !e.target.value || !e.contentEl.value)
      return;
    const p = Er(e.target.value), m = uv(e.contentEl.value, e.isRtl.value), h = za(e.contentEl.value), k = 12;
    h.length || (h.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (m.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), m.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = h.reduce((Y, I) => {
      const D = I.getBoundingClientRect(), V = new on({
        x: I === document.documentElement ? 0 : D.x,
        y: I === document.documentElement ? 0 : D.y,
        width: I.clientWidth,
        height: I.clientHeight
      });
      return Y ? new on({
        x: Math.max(Y.left, V.left),
        y: Math.max(Y.top, V.top),
        width: Math.min(Y.right, V.right) - Math.max(Y.left, V.left),
        height: Math.min(Y.bottom, V.bottom) - Math.max(Y.top, V.top)
      }) : V;
    }, void 0);
    S.x += k, S.y += k, S.width -= k * 2, S.height -= k * 2;
    let _ = {
      anchor: l.value,
      origin: i.value
    };
    function w(Y) {
      const I = new on(m), D = Gs(Y.anchor, p), V = Gs(Y.origin, I);
      let {
        x: O,
        y: U
      } = iv(D, V);
      switch (Y.anchor.side) {
        case "top":
          U -= d.value[0];
          break;
        case "bottom":
          U += d.value[0];
          break;
        case "left":
          O -= d.value[0];
          break;
        case "right":
          O += d.value[0];
          break;
      }
      switch (Y.anchor.align) {
        case "top":
          U -= d.value[1];
          break;
        case "bottom":
          U += d.value[1];
          break;
        case "left":
          O -= d.value[1];
          break;
        case "right":
          O += d.value[1];
          break;
      }
      return I.x += O, I.y += U, I.width = Math.min(I.width, o.value), I.height = Math.min(I.height, c.value), {
        overflows: ws(I, S),
        x: O,
        y: U
      };
    }
    let P = 0, C = 0;
    const b = {
      x: 0,
      y: 0
    }, M = {
      x: !1,
      y: !1
    };
    let x = -1;
    for (; ; ) {
      if (x++ > 10) {
        Ec("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: Y,
        y: I,
        overflows: D
      } = w(_);
      P += Y, C += I, m.x += Y, m.y += I;
      {
        const V = Ss(_.anchor), O = D.x.before || D.x.after, U = D.y.before || D.y.after;
        let Z = !1;
        if (["x", "y"].forEach((T) => {
          if (T === "x" && O && !M.x || T === "y" && U && !M.y) {
            const L = {
              anchor: {
                ..._.anchor
              },
              origin: {
                ..._.origin
              }
            }, $ = T === "x" ? V === "y" ? Ol : Il : V === "y" ? Il : Ol;
            L.anchor = $(L.anchor), L.origin = $(L.origin);
            const {
              overflows: A
            } = w(L);
            (A[T].before <= D[T].before && A[T].after <= D[T].after || A[T].before + A[T].after < (D[T].before + D[T].after) / 2) && (_ = L, Z = M[T] = !0);
          }
        }), Z)
          continue;
      }
      D.x.before && (P += D.x.before, m.x += D.x.before), D.x.after && (P -= D.x.after, m.x -= D.x.after), D.y.before && (C += D.y.before, m.y += D.y.before), D.y.after && (C -= D.y.after, m.y -= D.y.after);
      {
        const V = ws(m, S);
        b.x = S.width - V.x.before - V.x.after, b.y = S.height - V.y.before - V.y.after, P += V.x.before, m.x += V.x.before, C += V.y.before, m.y += V.y.before;
      }
      break;
    }
    const E = Ss(_.anchor);
    return Object.assign(n.value, {
      "--v-overlay-anchor-origin": `${_.anchor.side} ${_.anchor.align}`,
      transformOrigin: `${_.origin.side} ${_.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: te(El(C)),
      left: e.isRtl.value ? void 0 : te(El(P)),
      right: e.isRtl.value ? te(El(-P)) : void 0,
      minWidth: te(E === "y" ? Math.min(s.value, p.width) : s.value),
      maxWidth: te(qs(lt(b.x, s.value === 1 / 0 ? 0 : s.value, o.value))),
      maxHeight: te(qs(lt(b.y, r.value === 1 / 0 ? 0 : r.value, c.value)))
    }), {
      available: b,
      contentBox: m
    };
  }
  return J(() => [l.value, i.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => g()), He(() => {
    const p = g();
    if (!p)
      return;
    const {
      available: m,
      contentBox: h
    } = p;
    h.height > m.y && requestAnimationFrame(() => {
      g(), requestAnimationFrame(() => {
        g();
      });
    });
  }), {
    updateLocation: g
  };
}
function El(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function qs(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Ql = !0;
const qa = [];
function dv(e) {
  !Ql || qa.length ? (qa.push(e), ei()) : (Ql = !1, e(), ei());
}
let Ks = -1;
function ei() {
  cancelAnimationFrame(Ks), Ks = requestAnimationFrame(() => {
    const e = qa.shift();
    e && e(), qa.length ? ei() : Ql = !0;
  });
}
const Ra = {
  none: null,
  close: mv,
  block: hv,
  reposition: gv
}, fv = R({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (e) => typeof e == "function" || e in Ra
  }
}, "VOverlay-scroll-strategies");
function vv(e, t) {
  if (!Re)
    return;
  let n;
  je(async () => {
    n == null || n.stop(), t.isActive.value && e.scrollStrategy && (n = vi(), await He(), n.active && n.run(() => {
      var a;
      typeof e.scrollStrategy == "function" ? e.scrollStrategy(t, e, n) : (a = Ra[e.scrollStrategy]) == null || a.call(Ra, t, e, n);
    }));
  }), qe(() => {
    n == null || n.stop();
  });
}
function mv(e) {
  function t(n) {
    e.isActive.value = !1;
  }
  Eo(e.targetEl.value ?? e.contentEl.value, t);
}
function hv(e, t) {
  var s;
  const n = (s = e.root.value) == null ? void 0 : s.offsetParent, a = [.../* @__PURE__ */ new Set([...za(e.targetEl.value, t.contained ? n : void 0), ...za(e.contentEl.value, t.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), l = window.innerWidth - document.documentElement.offsetWidth, i = ((r) => Si(r) && r)(n || document.documentElement);
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), a.forEach((r, o) => {
    r.style.setProperty("--v-body-scroll-x", te(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", te(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", te(l)), r.classList.add("v-overlay-scroll-blocked");
  }), qe(() => {
    a.forEach((r, o) => {
      const c = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(r.style.getPropertyValue("--v-body-scroll-y")), f = r.style.scrollBehavior;
      r.style.scrollBehavior = "auto", r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -c, r.scrollTop = -d, r.style.scrollBehavior = f;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}
function gv(e, t, n) {
  let a = !1, l = -1, i = -1;
  function s(r) {
    dv(() => {
      var d, f;
      const o = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, r), a = (performance.now() - o) / (1e3 / 60) > 2;
    });
  }
  i = (typeof requestIdleCallback > "u" ? (r) => r() : requestIdleCallback)(() => {
    n.run(() => {
      Eo(e.targetEl.value ?? e.contentEl.value, (r) => {
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
function Eo(e, t) {
  const n = [document, ...za(e)];
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
const ti = Symbol.for("vuetify:v-menu"), yv = R({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function pv(e, t) {
  let n = () => {
  };
  function a(s) {
    n == null || n();
    const r = Number(s ? e.openDelay : e.closeDelay);
    return new Promise((o) => {
      n = wc(r, () => {
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
const kv = R({
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
  ...yv()
}, "VOverlay-activator");
function bv(e, t) {
  let {
    isActive: n,
    isTop: a
  } = t;
  const l = Ne("useActivator"), i = B();
  let s = !1, r = !1, o = !0;
  const c = y(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = y(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !c.value), {
    runOpenDelay: f,
    runCloseDelay: v
  } = pv(e, (b) => {
    b === (e.openOnHover && s || c.value && r) && !(e.openOnHover && n.value && !a.value) && (n.value !== b && (o = !0), n.value = b);
  }), g = B(), p = {
    onClick: (b) => {
      b.stopPropagation(), i.value = b.currentTarget || b.target, n.value || (g.value = [b.clientX, b.clientY]), n.value = !n.value;
    },
    onMouseenter: (b) => {
      var M;
      (M = b.sourceCapabilities) != null && M.firesTouchEvents || (s = !0, i.value = b.currentTarget || b.target, f());
    },
    onMouseleave: (b) => {
      s = !1, v();
    },
    onFocus: (b) => {
      Ua(b.target, ":focus-visible") !== !1 && (r = !0, b.stopPropagation(), i.value = b.currentTarget || b.target, f());
    },
    onBlur: (b) => {
      r = !1, b.stopPropagation(), v();
    }
  }, m = y(() => {
    const b = {};
    return d.value && (b.onClick = p.onClick), e.openOnHover && (b.onMouseenter = p.onMouseenter, b.onMouseleave = p.onMouseleave), c.value && (b.onFocus = p.onFocus, b.onBlur = p.onBlur), b;
  }), h = y(() => {
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
      const M = Te(ti, null);
      b.onClick = () => {
        n.value = !1, M == null || M.closeParents();
      };
    }
    return b;
  }), k = y(() => {
    const b = {};
    return e.openOnHover && (b.onMouseenter = () => {
      o && (s = !0, o = !1, f());
    }, b.onMouseleave = () => {
      s = !1, v();
    }), b;
  });
  J(a, (b) => {
    b && (e.openOnHover && !s && (!c.value || !r) || c.value && !r && (!e.openOnHover || !s)) && (n.value = !1);
  }), J(n, (b) => {
    b || setTimeout(() => {
      g.value = void 0;
    });
  }, {
    flush: "post"
  });
  const S = B();
  je(() => {
    S.value && He(() => {
      i.value = Ya(S.value);
    });
  });
  const _ = B(), w = y(() => e.target === "cursor" && g.value ? g.value : _.value ? Ya(_.value) : Lo(e.target, l) || i.value), P = y(() => Array.isArray(w.value) ? void 0 : w.value);
  let C;
  return J(() => !!e.activator, (b) => {
    b && Re ? (C = vi(), C.run(() => {
      _v(e, l, {
        activatorEl: i,
        activatorEvents: m
      });
    })) : C && C.stop();
  }, {
    flush: "post",
    immediate: !0
  }), qe(() => {
    C == null || C.stop();
  }), {
    activatorEl: i,
    activatorRef: S,
    target: w,
    targetEl: P,
    targetRef: _,
    activatorEvents: m,
    contentEvents: h,
    scrimEvents: k
  };
}
function _v(e, t, n) {
  let {
    activatorEl: a,
    activatorEvents: l
  } = n;
  J(() => e.activator, (o, c) => {
    if (c && o !== c) {
      const d = r(c);
      d && s(d);
    }
    o && He(() => i());
  }, {
    immediate: !0
  }), J(() => e.activatorProps, () => {
    i();
  }), qe(() => {
    s();
  });
  function i() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    o && xc(o, W(l.value, c));
  }
  function s() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : r(), c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.activatorProps;
    o && Vc(o, W(l.value, c));
  }
  function r() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : e.activator;
    const c = Lo(o, t);
    return a.value = (c == null ? void 0 : c.nodeType) === Node.ELEMENT_NODE ? c : void 0, a.value;
  }
}
function Lo(e, t) {
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
function Sv() {
  if (!Re)
    return ae(!1);
  const {
    ssr: e
  } = Ti();
  if (e) {
    const t = ae(!1);
    return We(() => {
      t.value = !0;
    }), t;
  } else
    return ae(!0);
}
const wv = R({
  eager: Boolean
}, "lazy");
function Cv(e, t) {
  const n = ae(!1), a = y(() => n.value || e.eager || t.value);
  J(t, () => n.value = !0);
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
  const t = Ne("useScopeId").vnode.scopeId;
  return {
    scopeId: t ? {
      [t]: ""
    } : void 0
  };
}
const Zs = Symbol.for("vuetify:stack"), jn = Ln([]);
function xv(e, t, n) {
  const a = Ne("useStack"), l = !n, i = Te(Zs, void 0), s = Ln({
    activeChildren: /* @__PURE__ */ new Set()
  });
  Ge(Zs, s);
  const r = ae(+t.value);
  mn(e, () => {
    var f;
    const d = (f = jn.at(-1)) == null ? void 0 : f[1];
    r.value = d ? d + 10 : +t.value, l && jn.push([a.uid, r.value]), i == null || i.activeChildren.add(a.uid), qe(() => {
      if (l) {
        const v = tn(jn).findIndex((g) => g[0] === a.uid);
        jn.splice(v, 1);
      }
      i == null || i.activeChildren.delete(a.uid);
    });
  });
  const o = ae(!0);
  l && je(() => {
    var f;
    const d = ((f = jn.at(-1)) == null ? void 0 : f[0]) === a.uid;
    setTimeout(() => o.value = d);
  });
  const c = y(() => !s.activeChildren.size);
  return {
    globalTop: mi(o),
    localTop: c,
    stackStyles: y(() => ({
      zIndex: r.value
    }))
  };
}
function Vv(e) {
  return {
    teleportTarget: y(() => {
      const n = e.value;
      if (n === !0 || !Re)
        return;
      const a = n === !1 ? document.body : typeof n == "string" ? document.querySelector(n) : n;
      if (a == null) {
        nl(`Unable to locate target ${n}`);
        return;
      }
      let l = a.querySelector(":scope > .v-overlay-container");
      return l || (l = document.createElement("div"), l.className = "v-overlay-container", a.appendChild(l)), l;
    })
  };
}
function Pv() {
  return !0;
}
function Ro(e, t, n) {
  if (!e || Fo(e, n) === !1)
    return !1;
  const a = $r(t);
  if (typeof ShadowRoot < "u" && a instanceof ShadowRoot && a.host === e.target)
    return !1;
  const l = (typeof n.value == "object" && n.value.include || (() => []))();
  return l.push(t), !l.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Fo(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Pv)(e);
}
function Mv(e, t, n) {
  const a = typeof n.value == "function" ? n.value : n.value.handler;
  t._clickOutside.lastMousedownWasOutside && Ro(e, t, n) && setTimeout(() => {
    Fo(e, n) && a && a(e);
  }, 0);
}
function Xs(e, t) {
  const n = $r(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const No = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(e, t) {
    const n = (l) => Mv(l, e, t), a = (l) => {
      e._clickOutside.lastMousedownWasOutside = Ro(l, e, t);
    };
    Xs(e, (l) => {
      l.addEventListener("click", n, !0), l.addEventListener("mousedown", a, !0);
    }), e._clickOutside || (e._clickOutside = {
      lastMousedownWasOutside: !1
    }), e._clickOutside[t.instance.$.uid] = {
      onClick: n,
      onMousedown: a
    };
  },
  unmounted(e, t) {
    e._clickOutside && (Xs(e, (n) => {
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
function Dv(e) {
  const {
    modelValue: t,
    color: n,
    ...a
  } = e;
  return u(fn, {
    name: "fade-transition",
    appear: !0
  }, {
    default: () => [e.modelValue && u("div", W({
      class: ["v-overlay__scrim", e.color.backgroundColorClasses.value],
      style: e.color.backgroundColorStyles.value
    }, a), null)]
  });
}
const ml = R({
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
  opacity: [Number, String],
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
  ...kv(),
  ...ie(),
  ...Bt(),
  ...wv(),
  ...sv(),
  ...fv(),
  ...Le(),
  ...da()
}, "VOverlay"), En = K()({
  name: "VOverlay",
  directives: {
    ClickOutside: No
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
    const i = me(e, "modelValue"), s = y({
      get: () => i.value,
      set: (z) => {
        z && e.disabled || (i.value = z);
      }
    }), {
      teleportTarget: r
    } = Vv(y(() => e.attach || e.contained)), {
      themeClasses: o
    } = Ue(e), {
      rtlClasses: c,
      isRtl: d
    } = xt(), {
      hasContent: f,
      onAfterLeave: v
    } = Cv(e, s), g = st(y(() => typeof e.scrim == "string" ? e.scrim : null)), {
      globalTop: p,
      localTop: m,
      stackStyles: h
    } = xv(s, X(e, "zIndex"), e._disableGlobalStack), {
      activatorEl: k,
      activatorRef: S,
      target: _,
      targetEl: w,
      targetRef: P,
      activatorEvents: C,
      contentEvents: b,
      scrimEvents: M
    } = bv(e, {
      isActive: s,
      isTop: m
    }), {
      dimensionStyles: x
    } = Yt(e), E = Sv(), {
      scopeId: Y
    } = vl();
    J(() => e.disabled, (z) => {
      z && (s.value = !1);
    });
    const I = B(), D = B(), {
      contentStyles: V,
      updateLocation: O
    } = rv(e, {
      isRtl: d,
      contentEl: D,
      target: _,
      isActive: s
    });
    vv(e, {
      root: I,
      contentEl: D,
      targetEl: w,
      isActive: s,
      updateLocation: O
    });
    function U(z) {
      l("click:outside", z), e.persistent ? A() : s.value = !1;
    }
    function Z() {
      return s.value && p.value;
    }
    Re && J(s, (z) => {
      z ? window.addEventListener("keydown", T) : window.removeEventListener("keydown", T);
    }, {
      immediate: !0
    }), Ae(() => {
      Re && window.removeEventListener("keydown", T);
    });
    function T(z) {
      var le, de;
      z.key === "Escape" && p.value && (e.persistent ? A() : (s.value = !1, (le = D.value) != null && le.contains(document.activeElement) && ((de = k.value) == null || de.focus())));
    }
    const L = yd();
    mn(() => e.closeOnBack, () => {
      pd(L, (z) => {
        p.value && s.value ? (z(!1), e.persistent ? A() : s.value = !1) : z();
      });
    });
    const $ = B();
    J(() => s.value && (e.absolute || e.contained) && r.value == null, (z) => {
      if (z) {
        const le = Ur(I.value);
        le && le !== document.scrollingElement && ($.value = le.scrollTop);
      }
    });
    function A() {
      e.noClickAnimation || D.value && Vn(D.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: Ha
      });
    }
    function q() {
      v(), l("afterLeave");
    }
    return Q(() => {
      var z;
      return u(pe, null, [(z = n.activator) == null ? void 0 : z.call(n, {
        isActive: s.value,
        props: W({
          ref: S,
          targetRef: P
        }, C.value, e.activatorProps)
      }), E.value && f.value && u(lc, {
        disabled: !r.value,
        to: r.value
      }, {
        default: () => [u("div", W({
          class: ["v-overlay", {
            "v-overlay--absolute": e.absolute || e.contained,
            "v-overlay--active": s.value,
            "v-overlay--contained": e.contained
          }, o.value, c.value, e.class],
          style: [h.value, {
            "--v-overlay-opacity": e.opacity,
            top: te($.value)
          }, e.style],
          ref: I
        }, Y, a), [u(Dv, W({
          color: g,
          modelValue: s.value && !!e.scrim
        }, M.value), null), u(Tt, {
          appear: !0,
          persisted: !0,
          transition: e.transition,
          target: _.value,
          onAfterLeave: q
        }, {
          default: () => {
            var le;
            return [Ve(u("div", W({
              ref: D,
              class: ["v-overlay__content", e.contentClass],
              style: [x.value, V.value]
            }, b.value, e.contentProps), [(le = n.default) == null ? void 0 : le.call(n, {
              isActive: s
            })]), [[dt, s.value], [gt("click-outside"), {
              handler: U,
              closeConditional: Z,
              include: () => [k.value]
            }]])];
          }
        })])]
      })]);
    }), {
      activatorEl: k,
      target: _,
      animateClick: A,
      contentEl: D,
      globalTop: p,
      localTop: m,
      updateLocation: O
    };
  }
}), Ll = Symbol("Forwarded refs");
function Rl(e, t) {
  let n = e;
  for (; n; ) {
    const a = Reflect.getOwnPropertyDescriptor(n, t);
    if (a)
      return a;
    n = Object.getPrototypeOf(n);
  }
}
function Wn(e) {
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
          const c = Rl(o.value, i) ?? ("_" in o.value ? Rl((r = o.value._) == null ? void 0 : r.setupState, i) : void 0);
          if (c)
            return c;
        }
        for (const o of n) {
          const c = o.value && o.value[Ll];
          if (!c)
            continue;
          const d = c.slice();
          for (; d.length; ) {
            const f = d.shift(), v = Rl(f.value, i);
            if (v)
              return v;
            const g = f.value && f.value[Ll];
            g && d.push(...g);
          }
        }
      }
    }
  });
}
const Iv = R({
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
      component: Ii
    }
  }), ["absolute"])
}, "VMenu"), hl = K()({
  name: "VMenu",
  props: Iv(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), {
      scopeId: l
    } = vl(), i = rt(), s = y(() => e.id || `v-menu-${i}`), r = B(), o = Te(ti, null), c = ae(0);
    Ge(ti, {
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
    async function d(m) {
      var S, _, w;
      const h = m.relatedTarget, k = m.target;
      await He(), a.value && h !== k && ((S = r.value) != null && S.contentEl) && // We're the topmost menu
      ((_ = r.value) != null && _.globalTop) && // It isn't the document or the menu body
      ![document, r.value.contentEl].includes(k) && // It isn't inside the menu body
      !r.value.contentEl.contains(k) && ((w = Xn(r.value.contentEl)[0]) == null || w.focus());
    }
    J(a, (m) => {
      m ? (o == null || o.register(), document.addEventListener("focusin", d, {
        once: !0
      })) : (o == null || o.unregister(), document.removeEventListener("focusin", d));
    });
    function f() {
      o == null || o.closeParents();
    }
    function v(m) {
      var h, k, S;
      e.disabled || m.key === "Tab" && (Or(Xn((h = r.value) == null ? void 0 : h.contentEl, !1), m.shiftKey ? "prev" : "next", (w) => w.tabIndex >= 0) || (a.value = !1, (S = (k = r.value) == null ? void 0 : k.activatorEl) == null || S.focus()));
    }
    function g(m) {
      var k;
      if (e.disabled)
        return;
      const h = (k = r.value) == null ? void 0 : k.contentEl;
      h && a.value ? m.key === "ArrowDown" ? (m.preventDefault(), Wa(h, "next")) : m.key === "ArrowUp" && (m.preventDefault(), Wa(h, "prev")) : ["ArrowDown", "ArrowUp"].includes(m.key) && (a.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => g(m))));
    }
    const p = y(() => W({
      "aria-haspopup": "menu",
      "aria-expanded": String(a.value),
      "aria-owns": s.value,
      onKeydown: g
    }, e.activatorProps));
    return Q(() => {
      const m = En.filterProps(e);
      return u(En, W({
        ref: r,
        id: s.value,
        class: ["v-menu", e.class],
        style: e.style
      }, m, {
        modelValue: a.value,
        "onUpdate:modelValue": (h) => a.value = h,
        absolute: !0,
        activatorProps: p.value,
        "onClick:outside": f,
        onKeydown: v
      }, l), {
        activator: n.activator,
        default: function() {
          for (var h = arguments.length, k = new Array(h), S = 0; S < h; S++)
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
    }), Wn({
      id: s,
      ΨopenChildren: c
    }, r);
  }
}), Ov = /* @__PURE__ */ Fe({
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
    const n = e, a = t, l = B(n.textfield), i = B(n.menu), s = B(n.picker), r = B(!1), o = y(() => n.fields ?? []);
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
    const g = J(s.value, (p) => {
      c(p.value);
    });
    return Ae(() => {
      g();
    }), We(() => {
      var p;
      (p = l.value) == null || p.isLoading(!1), !oe(l.value) && !oe(l.value.prepend_inner_icon) && (l.value.prepend_inner_icon.color = s.value.value);
    }), (p, m) => (ne(), ue(Be, { "no-gutters": "" }, {
      default: N(() => [
        u(hl, W({
          modelValue: r.value,
          "onUpdate:modelValue": m[3] || (m[3] = (h) => r.value = h)
        }, i.value.props()), {
          activator: N(({ props: h }) => {
            var k;
            return [
              u(ya, W({
                field: l.value,
                "onUpdate:field": m[0] || (m[0] = (S) => l.value = S)
              }, { ...h, ...(k = l.value) == null ? void 0 : k.props() }, {
                fields: o.value,
                onUpdated: c,
                onValidated: d,
                onInvalidated: f,
                "onClick:prependInner": v,
                "onClick:appendInner": v
              }), null, 16, ["field", "fields"])
            ];
          }),
          default: N(() => [
            u(ma, { width: "300" }, {
              default: N(() => [
                u(Bn, { class: "pa-0" }, {
                  default: N(() => {
                    var h;
                    return [
                      u(lv, W({
                        modelValue: s.value.value,
                        "onUpdate:modelValue": m[1] || (m[1] = (k) => s.value.value = k),
                        mode: s.value.mode,
                        "onUpdate:mode": m[2] || (m[2] = (k) => s.value.mode = k)
                      }, (h = s.value) == null ? void 0 : h.props()), null, 16, ["modelValue", "mode"])
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
var Bo;
function H() {
  return Bo.apply(null, arguments);
}
function Tv(e) {
  Bo = e;
}
function mt(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function dn(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function he(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Yi(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (he(e, t))
      return !1;
  return !0;
}
function ze(e) {
  return e === void 0;
}
function Nt(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function pa(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Yo(e, t) {
  var n = [], a, l = e.length;
  for (a = 0; a < l; ++a)
    n.push(t(e[a], a));
  return n;
}
function Kt(e, t) {
  for (var n in t)
    he(t, n) && (e[n] = t[n]);
  return he(t, "toString") && (e.toString = t.toString), he(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Vt(e, t, n, a) {
  return uu(e, t, n, a, !0).utc();
}
function Av() {
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
function se(e) {
  return e._pf == null && (e._pf = Av()), e._pf;
}
var ni;
Array.prototype.some ? ni = Array.prototype.some : ni = function(e) {
  var t = Object(this), n = t.length >>> 0, a;
  for (a = 0; a < n; a++)
    if (a in t && e.call(this, t[a], a, t))
      return !0;
  return !1;
};
function $i(e) {
  var t = null, n = !1, a = e._d && !isNaN(e._d.getTime());
  if (a && (t = se(e), n = ni.call(t.parsedDateParts, function(l) {
    return l != null;
  }), a = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (a = a && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = a;
  else
    return a;
  return e._isValid;
}
function gl(e) {
  var t = Vt(NaN);
  return e != null ? Kt(se(t), e) : se(t).userInvalidated = !0, t;
}
var Js = H.momentProperties = [], Fl = !1;
function Wi(e, t) {
  var n, a, l, i = Js.length;
  if (ze(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ze(t._i) || (e._i = t._i), ze(t._f) || (e._f = t._f), ze(t._l) || (e._l = t._l), ze(t._strict) || (e._strict = t._strict), ze(t._tzm) || (e._tzm = t._tzm), ze(t._isUTC) || (e._isUTC = t._isUTC), ze(t._offset) || (e._offset = t._offset), ze(t._pf) || (e._pf = se(t)), ze(t._locale) || (e._locale = t._locale), i > 0)
    for (n = 0; n < i; n++)
      a = Js[n], l = t[a], ze(l) || (e[a] = l);
  return e;
}
function ka(e) {
  Wi(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), Fl === !1 && (Fl = !0, H.updateOffset(this), Fl = !1);
}
function ht(e) {
  return e instanceof ka || e != null && e._isAMomentObject != null;
}
function $o(e) {
  H.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function ot(e, t) {
  var n = !0;
  return Kt(function() {
    if (H.deprecationHandler != null && H.deprecationHandler(null, e), n) {
      var a = [], l, i, s, r = arguments.length;
      for (i = 0; i < r; i++) {
        if (l = "", typeof arguments[i] == "object") {
          l += `
[` + i + "] ";
          for (s in arguments[0])
            he(arguments[0], s) && (l += s + ": " + arguments[0][s] + ", ");
          l = l.slice(0, -2);
        } else
          l = arguments[i];
        a.push(l);
      }
      $o(
        e + `
Arguments: ` + Array.prototype.slice.call(a).join("") + `
` + new Error().stack
      ), n = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var Qs = {};
function Wo(e, t) {
  H.deprecationHandler != null && H.deprecationHandler(e, t), Qs[e] || ($o(t), Qs[e] = !0);
}
H.suppressDeprecationWarnings = !1;
H.deprecationHandler = null;
function Pt(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ev(e) {
  var t, n;
  for (n in e)
    he(e, n) && (t = e[n], Pt(t) ? this[n] = t : this["_" + n] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function ai(e, t) {
  var n = Kt({}, e), a;
  for (a in t)
    he(t, a) && (dn(e[a]) && dn(t[a]) ? (n[a] = {}, Kt(n[a], e[a]), Kt(n[a], t[a])) : t[a] != null ? n[a] = t[a] : delete n[a]);
  for (a in e)
    he(e, a) && !he(t, a) && dn(e[a]) && (n[a] = Kt({}, n[a]));
  return n;
}
function Ui(e) {
  e != null && this.set(e);
}
var li;
Object.keys ? li = Object.keys : li = function(e) {
  var t, n = [];
  for (t in e)
    he(e, t) && n.push(t);
  return n;
};
var Lv = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Rv(e, t, n) {
  var a = this._calendar[e] || this._calendar.sameElse;
  return Pt(a) ? a.call(t, n) : a;
}
function _t(e, t, n) {
  var a = "" + Math.abs(e), l = t - a.length, i = e >= 0;
  return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, l)).toString().substr(1) + a;
}
var Hi = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ia = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Nl = {}, Dn = {};
function ee(e, t, n, a) {
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
function Fv(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Nv(e) {
  var t = e.match(Hi), n, a;
  for (n = 0, a = t.length; n < a; n++)
    Dn[t[n]] ? t[n] = Dn[t[n]] : t[n] = Fv(t[n]);
  return function(l) {
    var i = "", s;
    for (s = 0; s < a; s++)
      i += Pt(t[s]) ? t[s].call(l, e) : t[s];
    return i;
  };
}
function Fa(e, t) {
  return e.isValid() ? (t = Uo(t, e.localeData()), Nl[t] = Nl[t] || Nv(t), Nl[t](e)) : e.localeData().invalidDate();
}
function Uo(e, t) {
  var n = 5;
  function a(l) {
    return t.longDateFormat(l) || l;
  }
  for (Ia.lastIndex = 0; n >= 0 && Ia.test(e); )
    e = e.replace(
      Ia,
      a
    ), Ia.lastIndex = 0, n -= 1;
  return e;
}
var Bv = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Yv(e) {
  var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
  return t || !n ? t : (this._longDateFormat[e] = n.match(Hi).map(function(a) {
    return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a;
  }).join(""), this._longDateFormat[e]);
}
var $v = "Invalid date";
function Wv() {
  return this._invalidDate;
}
var Uv = "%d", Hv = /\d{1,2}/;
function zv(e) {
  return this._ordinal.replace("%d", e);
}
var jv = {
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
function Gv(e, t, n, a) {
  var l = this._relativeTime[n];
  return Pt(l) ? l(e, t, n, a) : l.replace(/%d/i, e);
}
function qv(e, t) {
  var n = this._relativeTime[e > 0 ? "future" : "past"];
  return Pt(n) ? n(t) : n.replace(/%s/i, t);
}
var er = {
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
function ut(e) {
  return typeof e == "string" ? er[e] || er[e.toLowerCase()] : void 0;
}
function zi(e) {
  var t = {}, n, a;
  for (a in e)
    he(e, a) && (n = ut(a), n && (t[n] = e[a]));
  return t;
}
var Kv = {
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
function Zv(e) {
  var t = [], n;
  for (n in e)
    he(e, n) && t.push({ unit: n, priority: Kv[n] });
  return t.sort(function(a, l) {
    return a.priority - l.priority;
  }), t;
}
var Ho = /\d/, nt = /\d\d/, zo = /\d{3}/, ji = /\d{4}/, yl = /[+-]?\d{6}/, Se = /\d\d?/, jo = /\d\d\d\d?/, Go = /\d\d\d\d\d\d?/, pl = /\d{1,3}/, Gi = /\d{1,4}/, kl = /[+-]?\d{1,6}/, Un = /\d+/, bl = /[+-]?\d+/, Xv = /Z|[+-]\d\d:?\d\d/gi, _l = /Z|[+-]\d\d(?::?\d\d)?/gi, Jv = /[+-]?\d+(\.\d{1,3})?/, ba = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Hn = /^[1-9]\d?/, qi = /^([1-9]\d|\d)/, Ka;
Ka = {};
function G(e, t, n) {
  Ka[e] = Pt(t) ? t : function(a, l) {
    return a && n ? n : t;
  };
}
function Qv(e, t) {
  return he(Ka, e) ? Ka[e](t._strict, t._locale) : new RegExp(em(e));
}
function em(e) {
  return Lt(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, n, a, l, i) {
        return n || a || l || i;
      }
    )
  );
}
function Lt(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function at(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function ce(e) {
  var t = +e, n = 0;
  return t !== 0 && isFinite(t) && (n = at(t)), n;
}
var ii = {};
function ke(e, t) {
  var n, a = t, l;
  for (typeof e == "string" && (e = [e]), Nt(t) && (a = function(i, s) {
    s[t] = ce(i);
  }), l = e.length, n = 0; n < l; n++)
    ii[e[n]] = a;
}
function _a(e, t) {
  ke(e, function(n, a, l, i) {
    l._w = l._w || {}, t(n, l._w, l, i);
  });
}
function tm(e, t, n) {
  t != null && he(ii, e) && ii[e](t, n._a, n, e);
}
function Sl(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var $e = 0, At = 1, bt = 2, Oe = 3, ct = 4, Et = 5, sn = 6, nm = 7, am = 8;
ee("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? _t(e, 4) : "+" + e;
});
ee(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
ee(0, ["YYYY", 4], 0, "year");
ee(0, ["YYYYY", 5], 0, "year");
ee(0, ["YYYYYY", 6, !0], 0, "year");
G("Y", bl);
G("YY", Se, nt);
G("YYYY", Gi, ji);
G("YYYYY", kl, yl);
G("YYYYYY", kl, yl);
ke(["YYYYY", "YYYYYY"], $e);
ke("YYYY", function(e, t) {
  t[$e] = e.length === 2 ? H.parseTwoDigitYear(e) : ce(e);
});
ke("YY", function(e, t) {
  t[$e] = H.parseTwoDigitYear(e);
});
ke("Y", function(e, t) {
  t[$e] = parseInt(e, 10);
});
function Kn(e) {
  return Sl(e) ? 366 : 365;
}
H.parseTwoDigitYear = function(e) {
  return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
};
var qo = zn("FullYear", !0);
function lm() {
  return Sl(this.year());
}
function zn(e, t) {
  return function(n) {
    return n != null ? (Ko(this, e, n), H.updateOffset(this, t), this) : na(this, e);
  };
}
function na(e, t) {
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
function Ko(e, t, n) {
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
function im(e) {
  return e = ut(e), Pt(this[e]) ? this[e]() : this;
}
function sm(e, t) {
  if (typeof e == "object") {
    e = zi(e);
    var n = Zv(e), a, l = n.length;
    for (a = 0; a < l; a++)
      this[n[a].unit](e[n[a].unit]);
  } else if (e = ut(e), Pt(this[e]))
    return this[e](t);
  return this;
}
function rm(e, t) {
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
function Ki(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var n = rm(t, 12);
  return e += (t - n) / 12, n === 1 ? Sl(e) ? 29 : 28 : 31 - n % 7 % 2;
}
ee("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
ee("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
ee("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
G("M", Se, Hn);
G("MM", Se, nt);
G("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
G("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
ke(["M", "MM"], function(e, t) {
  t[At] = ce(e) - 1;
});
ke(["MMM", "MMMM"], function(e, t, n, a) {
  var l = n._locale.monthsParse(e, a, n._strict);
  l != null ? t[At] = l : se(n).invalidMonth = e;
});
var om = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Zo = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Xo = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, um = ba, cm = ba;
function dm(e, t) {
  return e ? mt(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Xo).test(t) ? "format" : "standalone"][e.month()] : mt(this._months) ? this._months : this._months.standalone;
}
function fm(e, t) {
  return e ? mt(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Xo.test(t) ? "format" : "standalone"][e.month()] : mt(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function vm(e, t, n) {
  var a, l, i, s = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], a = 0; a < 12; ++a)
      i = Vt([2e3, a]), this._shortMonthsParse[a] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[a] = this.months(i, "").toLocaleLowerCase();
  return n ? t === "MMM" ? (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : null) : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : null) : t === "MMM" ? (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : null)) : (l = Pe.call(this._longMonthsParse, s), l !== -1 ? l : (l = Pe.call(this._shortMonthsParse, s), l !== -1 ? l : null));
}
function mm(e, t, n) {
  var a, l, i;
  if (this._monthsParseExact)
    return vm.call(this, e, t, n);
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
function Jo(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = ce(t);
    else if (t = e.localeData().monthsParse(t), !Nt(t))
      return e;
  }
  var n = t, a = e.date();
  return a = a < 29 ? a : Math.min(a, Ki(e.year(), n)), e._isUTC ? e._d.setUTCMonth(n, a) : e._d.setMonth(n, a), e;
}
function Qo(e) {
  return e != null ? (Jo(this, e), H.updateOffset(this, !0), this) : na(this, "Month");
}
function hm() {
  return Ki(this.year(), this.month());
}
function gm(e) {
  return this._monthsParseExact ? (he(this, "_monthsRegex") || eu.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (he(this, "_monthsShortRegex") || (this._monthsShortRegex = um), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function ym(e) {
  return this._monthsParseExact ? (he(this, "_monthsRegex") || eu.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (he(this, "_monthsRegex") || (this._monthsRegex = cm), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function eu() {
  function e(o, c) {
    return c.length - o.length;
  }
  var t = [], n = [], a = [], l, i, s, r;
  for (l = 0; l < 12; l++)
    i = Vt([2e3, l]), s = Lt(this.monthsShort(i, "")), r = Lt(this.months(i, "")), t.push(s), n.push(r), a.push(r), a.push(s);
  t.sort(e), n.sort(e), a.sort(e), this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function pm(e, t, n, a, l, i, s) {
  var r;
  return e < 100 && e >= 0 ? (r = new Date(e + 400, t, n, a, l, i, s), isFinite(r.getFullYear()) && r.setFullYear(e)) : r = new Date(e, t, n, a, l, i, s), r;
}
function aa(e) {
  var t, n;
  return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function Za(e, t, n) {
  var a = 7 + t - n, l = (7 + aa(e, 0, a).getUTCDay() - t) % 7;
  return -l + a - 1;
}
function tu(e, t, n, a, l) {
  var i = (7 + n - a) % 7, s = Za(e, a, l), r = 1 + 7 * (t - 1) + i + s, o, c;
  return r <= 0 ? (o = e - 1, c = Kn(o) + r) : r > Kn(e) ? (o = e + 1, c = r - Kn(e)) : (o = e, c = r), {
    year: o,
    dayOfYear: c
  };
}
function la(e, t, n) {
  var a = Za(e.year(), t, n), l = Math.floor((e.dayOfYear() - a - 1) / 7) + 1, i, s;
  return l < 1 ? (s = e.year() - 1, i = l + Rt(s, t, n)) : l > Rt(e.year(), t, n) ? (i = l - Rt(e.year(), t, n), s = e.year() + 1) : (s = e.year(), i = l), {
    week: i,
    year: s
  };
}
function Rt(e, t, n) {
  var a = Za(e, t, n), l = Za(e + 1, t, n);
  return (Kn(e) - a + l) / 7;
}
ee("w", ["ww", 2], "wo", "week");
ee("W", ["WW", 2], "Wo", "isoWeek");
G("w", Se, Hn);
G("ww", Se, nt);
G("W", Se, Hn);
G("WW", Se, nt);
_a(
  ["w", "ww", "W", "WW"],
  function(e, t, n, a) {
    t[a.substr(0, 1)] = ce(e);
  }
);
function km(e) {
  return la(e, this._week.dow, this._week.doy).week;
}
var bm = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function _m() {
  return this._week.dow;
}
function Sm() {
  return this._week.doy;
}
function wm(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Cm(e) {
  var t = la(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
ee("d", 0, "do", "day");
ee("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
ee("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
ee("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
ee("e", 0, 0, "weekday");
ee("E", 0, 0, "isoWeekday");
G("d", Se);
G("e", Se);
G("E", Se);
G("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
G("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
G("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
_a(["dd", "ddd", "dddd"], function(e, t, n, a) {
  var l = n._locale.weekdaysParse(e, a, n._strict);
  l != null ? t.d = l : se(n).invalidWeekday = e;
});
_a(["d", "e", "E"], function(e, t, n, a) {
  t[a] = ce(e);
});
function xm(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Vm(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Zi(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Pm = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), nu = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Mm = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Dm = ba, Im = ba, Om = ba;
function Tm(e, t) {
  var n = mt(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Zi(n, this._week.dow) : e ? n[e.day()] : n;
}
function Am(e) {
  return e === !0 ? Zi(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Em(e) {
  return e === !0 ? Zi(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Lm(e, t, n) {
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
function Rm(e, t, n) {
  var a, l, i;
  if (this._weekdaysParseExact)
    return Lm.call(this, e, t, n);
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
function Fm(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = na(this, "Day");
  return e != null ? (e = xm(e, this.localeData()), this.add(e - t, "d")) : t;
}
function Nm(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Bm(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Vm(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Ym(e) {
  return this._weekdaysParseExact ? (he(this, "_weekdaysRegex") || Xi.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (he(this, "_weekdaysRegex") || (this._weekdaysRegex = Dm), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function $m(e) {
  return this._weekdaysParseExact ? (he(this, "_weekdaysRegex") || Xi.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (he(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Im), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Wm(e) {
  return this._weekdaysParseExact ? (he(this, "_weekdaysRegex") || Xi.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (he(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Om), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Xi() {
  function e(d, f) {
    return f.length - d.length;
  }
  var t = [], n = [], a = [], l = [], i, s, r, o, c;
  for (i = 0; i < 7; i++)
    s = Vt([2e3, 1]).day(i), r = Lt(this.weekdaysMin(s, "")), o = Lt(this.weekdaysShort(s, "")), c = Lt(this.weekdays(s, "")), t.push(r), n.push(o), a.push(c), l.push(r), l.push(o), l.push(c);
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
function Ji() {
  return this.hours() % 12 || 12;
}
function Um() {
  return this.hours() || 24;
}
ee("H", ["HH", 2], 0, "hour");
ee("h", ["hh", 2], 0, Ji);
ee("k", ["kk", 2], 0, Um);
ee("hmm", 0, 0, function() {
  return "" + Ji.apply(this) + _t(this.minutes(), 2);
});
ee("hmmss", 0, 0, function() {
  return "" + Ji.apply(this) + _t(this.minutes(), 2) + _t(this.seconds(), 2);
});
ee("Hmm", 0, 0, function() {
  return "" + this.hours() + _t(this.minutes(), 2);
});
ee("Hmmss", 0, 0, function() {
  return "" + this.hours() + _t(this.minutes(), 2) + _t(this.seconds(), 2);
});
function au(e, t) {
  ee(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
au("a", !0);
au("A", !1);
function lu(e, t) {
  return t._meridiemParse;
}
G("a", lu);
G("A", lu);
G("H", Se, qi);
G("h", Se, Hn);
G("k", Se, Hn);
G("HH", Se, nt);
G("hh", Se, nt);
G("kk", Se, nt);
G("hmm", jo);
G("hmmss", Go);
G("Hmm", jo);
G("Hmmss", Go);
ke(["H", "HH"], Oe);
ke(["k", "kk"], function(e, t, n) {
  var a = ce(e);
  t[Oe] = a === 24 ? 0 : a;
});
ke(["a", "A"], function(e, t, n) {
  n._isPm = n._locale.isPM(e), n._meridiem = e;
});
ke(["h", "hh"], function(e, t, n) {
  t[Oe] = ce(e), se(n).bigHour = !0;
});
ke("hmm", function(e, t, n) {
  var a = e.length - 2;
  t[Oe] = ce(e.substr(0, a)), t[ct] = ce(e.substr(a)), se(n).bigHour = !0;
});
ke("hmmss", function(e, t, n) {
  var a = e.length - 4, l = e.length - 2;
  t[Oe] = ce(e.substr(0, a)), t[ct] = ce(e.substr(a, 2)), t[Et] = ce(e.substr(l)), se(n).bigHour = !0;
});
ke("Hmm", function(e, t, n) {
  var a = e.length - 2;
  t[Oe] = ce(e.substr(0, a)), t[ct] = ce(e.substr(a));
});
ke("Hmmss", function(e, t, n) {
  var a = e.length - 4, l = e.length - 2;
  t[Oe] = ce(e.substr(0, a)), t[ct] = ce(e.substr(a, 2)), t[Et] = ce(e.substr(l));
});
function Hm(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var zm = /[ap]\.?m?\.?/i, jm = zn("Hours", !0);
function Gm(e, t, n) {
  return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
}
var iu = {
  calendar: Lv,
  longDateFormat: Bv,
  invalidDate: $v,
  ordinal: Uv,
  dayOfMonthOrdinalParse: Hv,
  relativeTime: jv,
  months: om,
  monthsShort: Zo,
  week: bm,
  weekdays: Pm,
  weekdaysMin: Mm,
  weekdaysShort: nu,
  meridiemParse: zm
}, we = {}, Gn = {}, ia;
function qm(e, t) {
  var n, a = Math.min(e.length, t.length);
  for (n = 0; n < a; n += 1)
    if (e[n] !== t[n])
      return n;
  return a;
}
function tr(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Km(e) {
  for (var t = 0, n, a, l, i; t < e.length; ) {
    for (i = tr(e[t]).split("-"), n = i.length, a = tr(e[t + 1]), a = a ? a.split("-") : null; n > 0; ) {
      if (l = wl(i.slice(0, n).join("-")), l)
        return l;
      if (a && a.length >= n && qm(i, a) >= n - 1)
        break;
      n--;
    }
    t++;
  }
  return ia;
}
function Zm(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function wl(e) {
  var t = null, n;
  if (we[e] === void 0 && typeof module < "u" && module && module.exports && Zm(e))
    try {
      t = ia._abbr, n = require, n("./locale/" + e), Jt(t);
    } catch {
      we[e] = null;
    }
  return we[e];
}
function Jt(e, t) {
  var n;
  return e && (ze(t) ? n = Ht(e) : n = Qi(e, t), n ? ia = n : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), ia._abbr;
}
function Qi(e, t) {
  if (t !== null) {
    var n, a = iu;
    if (t.abbr = e, we[e] != null)
      Wo(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), a = we[e]._config;
    else if (t.parentLocale != null)
      if (we[t.parentLocale] != null)
        a = we[t.parentLocale]._config;
      else if (n = wl(t.parentLocale), n != null)
        a = n._config;
      else
        return Gn[t.parentLocale] || (Gn[t.parentLocale] = []), Gn[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return we[e] = new Ui(ai(a, t)), Gn[e] && Gn[e].forEach(function(l) {
      Qi(l.name, l.config);
    }), Jt(e), we[e];
  } else
    return delete we[e], null;
}
function Xm(e, t) {
  if (t != null) {
    var n, a, l = iu;
    we[e] != null && we[e].parentLocale != null ? we[e].set(ai(we[e]._config, t)) : (a = wl(e), a != null && (l = a._config), t = ai(l, t), a == null && (t.abbr = e), n = new Ui(t), n.parentLocale = we[e], we[e] = n), Jt(e);
  } else
    we[e] != null && (we[e].parentLocale != null ? (we[e] = we[e].parentLocale, e === Jt() && Jt(e)) : we[e] != null && delete we[e]);
  return we[e];
}
function Ht(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return ia;
  if (!mt(e)) {
    if (t = wl(e), t)
      return t;
    e = [e];
  }
  return Km(e);
}
function Jm() {
  return li(we);
}
function es(e) {
  var t, n = e._a;
  return n && se(e).overflow === -2 && (t = n[At] < 0 || n[At] > 11 ? At : n[bt] < 1 || n[bt] > Ki(n[$e], n[At]) ? bt : n[Oe] < 0 || n[Oe] > 24 || n[Oe] === 24 && (n[ct] !== 0 || n[Et] !== 0 || n[sn] !== 0) ? Oe : n[ct] < 0 || n[ct] > 59 ? ct : n[Et] < 0 || n[Et] > 59 ? Et : n[sn] < 0 || n[sn] > 999 ? sn : -1, se(e)._overflowDayOfYear && (t < $e || t > bt) && (t = bt), se(e)._overflowWeeks && t === -1 && (t = nm), se(e)._overflowWeekday && t === -1 && (t = am), se(e).overflow = t), e;
}
var Qm = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, eh = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, th = /Z|[+-]\d\d(?::?\d\d)?/, Oa = [
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
], Bl = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], nh = /^\/?Date\((-?\d+)/i, ah = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, lh = {
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
function su(e) {
  var t, n, a = e._i, l = Qm.exec(a) || eh.exec(a), i, s, r, o, c = Oa.length, d = Bl.length;
  if (l) {
    for (se(e).iso = !0, t = 0, n = c; t < n; t++)
      if (Oa[t][1].exec(l[1])) {
        s = Oa[t][0], i = Oa[t][2] !== !1;
        break;
      }
    if (s == null) {
      e._isValid = !1;
      return;
    }
    if (l[3]) {
      for (t = 0, n = d; t < n; t++)
        if (Bl[t][1].exec(l[3])) {
          r = (l[2] || " ") + Bl[t][0];
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
      if (th.exec(l[4]))
        o = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = s + (r || "") + (o || ""), ns(e);
  } else
    e._isValid = !1;
}
function ih(e, t, n, a, l, i) {
  var s = [
    sh(e),
    Zo.indexOf(t),
    parseInt(n, 10),
    parseInt(a, 10),
    parseInt(l, 10)
  ];
  return i && s.push(parseInt(i, 10)), s;
}
function sh(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function rh(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function oh(e, t, n) {
  if (e) {
    var a = nu.indexOf(e), l = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (a !== l)
      return se(n).weekdayMismatch = !0, n._isValid = !1, !1;
  }
  return !0;
}
function uh(e, t, n) {
  if (e)
    return lh[e];
  if (t)
    return 0;
  var a = parseInt(n, 10), l = a % 100, i = (a - l) / 100;
  return i * 60 + l;
}
function ru(e) {
  var t = ah.exec(rh(e._i)), n;
  if (t) {
    if (n = ih(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !oh(t[1], n, e))
      return;
    e._a = n, e._tzm = uh(t[8], t[9], t[10]), e._d = aa.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), se(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ch(e) {
  var t = nh.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if (su(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (ru(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : H.createFromInputFallback(e);
}
H.createFromInputFallback = ot(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function Sn(e, t, n) {
  return e ?? t ?? n;
}
function dh(e) {
  var t = new Date(H.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function ts(e) {
  var t, n, a = [], l, i, s;
  if (!e._d) {
    for (l = dh(e), e._w && e._a[bt] == null && e._a[At] == null && fh(e), e._dayOfYear != null && (s = Sn(e._a[$e], l[$e]), (e._dayOfYear > Kn(s) || e._dayOfYear === 0) && (se(e)._overflowDayOfYear = !0), n = aa(s, 0, e._dayOfYear), e._a[At] = n.getUTCMonth(), e._a[bt] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = a[t] = l[t];
    for (; t < 7; t++)
      e._a[t] = a[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[Oe] === 24 && e._a[ct] === 0 && e._a[Et] === 0 && e._a[sn] === 0 && (e._nextDay = !0, e._a[Oe] = 0), e._d = (e._useUTC ? aa : pm).apply(
      null,
      a
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Oe] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (se(e).weekdayMismatch = !0);
  }
}
function fh(e) {
  var t, n, a, l, i, s, r, o, c;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, s = 4, n = Sn(
    t.GG,
    e._a[$e],
    la(_e(), 1, 4).year
  ), a = Sn(t.W, 1), l = Sn(t.E, 1), (l < 1 || l > 7) && (o = !0)) : (i = e._locale._week.dow, s = e._locale._week.doy, c = la(_e(), i, s), n = Sn(t.gg, e._a[$e], c.year), a = Sn(t.w, c.week), t.d != null ? (l = t.d, (l < 0 || l > 6) && (o = !0)) : t.e != null ? (l = t.e + i, (t.e < 0 || t.e > 6) && (o = !0)) : l = i), a < 1 || a > Rt(n, i, s) ? se(e)._overflowWeeks = !0 : o != null ? se(e)._overflowWeekday = !0 : (r = tu(n, a, l, i, s), e._a[$e] = r.year, e._dayOfYear = r.dayOfYear);
}
H.ISO_8601 = function() {
};
H.RFC_2822 = function() {
};
function ns(e) {
  if (e._f === H.ISO_8601) {
    su(e);
    return;
  }
  if (e._f === H.RFC_2822) {
    ru(e);
    return;
  }
  e._a = [], se(e).empty = !0;
  var t = "" + e._i, n, a, l, i, s, r = t.length, o = 0, c, d;
  for (l = Uo(e._f, e._locale).match(Hi) || [], d = l.length, n = 0; n < d; n++)
    i = l[n], a = (t.match(Qv(i, e)) || [])[0], a && (s = t.substr(0, t.indexOf(a)), s.length > 0 && se(e).unusedInput.push(s), t = t.slice(
      t.indexOf(a) + a.length
    ), o += a.length), Dn[i] ? (a ? se(e).empty = !1 : se(e).unusedTokens.push(i), tm(i, a, e)) : e._strict && !a && se(e).unusedTokens.push(i);
  se(e).charsLeftOver = r - o, t.length > 0 && se(e).unusedInput.push(t), e._a[Oe] <= 12 && se(e).bigHour === !0 && e._a[Oe] > 0 && (se(e).bigHour = void 0), se(e).parsedDateParts = e._a.slice(0), se(e).meridiem = e._meridiem, e._a[Oe] = vh(
    e._locale,
    e._a[Oe],
    e._meridiem
  ), c = se(e).era, c !== null && (e._a[$e] = e._locale.erasConvertYear(c, e._a[$e])), ts(e), es(e);
}
function vh(e, t, n) {
  var a;
  return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (a = e.isPM(n), a && t < 12 && (t += 12), !a && t === 12 && (t = 0)), t);
}
function mh(e) {
  var t, n, a, l, i, s, r = !1, o = e._f.length;
  if (o === 0) {
    se(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (l = 0; l < o; l++)
    i = 0, s = !1, t = Wi({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[l], ns(t), $i(t) && (s = !0), i += se(t).charsLeftOver, i += se(t).unusedTokens.length * 10, se(t).score = i, r ? i < a && (a = i, n = t) : (a == null || i < a || s) && (a = i, n = t, s && (r = !0));
  Kt(e, n || t);
}
function hh(e) {
  if (!e._d) {
    var t = zi(e._i), n = t.day === void 0 ? t.date : t.day;
    e._a = Yo(
      [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
      function(a) {
        return a && parseInt(a, 10);
      }
    ), ts(e);
  }
}
function gh(e) {
  var t = new ka(es(ou(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function ou(e) {
  var t = e._i, n = e._f;
  return e._locale = e._locale || Ht(e._l), t === null || n === void 0 && t === "" ? gl({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), ht(t) ? new ka(es(t)) : (pa(t) ? e._d = t : mt(n) ? mh(e) : n ? ns(e) : yh(e), $i(e) || (e._d = null), e));
}
function yh(e) {
  var t = e._i;
  ze(t) ? e._d = new Date(H.now()) : pa(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ch(e) : mt(t) ? (e._a = Yo(t.slice(0), function(n) {
    return parseInt(n, 10);
  }), ts(e)) : dn(t) ? hh(e) : Nt(t) ? e._d = new Date(t) : H.createFromInputFallback(e);
}
function uu(e, t, n, a, l) {
  var i = {};
  return (t === !0 || t === !1) && (a = t, t = void 0), (n === !0 || n === !1) && (a = n, n = void 0), (dn(e) && Yi(e) || mt(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = l, i._l = n, i._i = e, i._f = t, i._strict = a, gh(i);
}
function _e(e, t, n, a) {
  return uu(e, t, n, a, !1);
}
var ph = ot(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = _e.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : gl();
  }
), kh = ot(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = _e.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : gl();
  }
);
function cu(e, t) {
  var n, a;
  if (t.length === 1 && mt(t[0]) && (t = t[0]), !t.length)
    return _e();
  for (n = t[0], a = 1; a < t.length; ++a)
    (!t[a].isValid() || t[a][e](n)) && (n = t[a]);
  return n;
}
function bh() {
  var e = [].slice.call(arguments, 0);
  return cu("isBefore", e);
}
function _h() {
  var e = [].slice.call(arguments, 0);
  return cu("isAfter", e);
}
var Sh = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, qn = [
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
function wh(e) {
  var t, n = !1, a, l = qn.length;
  for (t in e)
    if (he(e, t) && !(Pe.call(qn, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (a = 0; a < l; ++a)
    if (e[qn[a]]) {
      if (n)
        return !1;
      parseFloat(e[qn[a]]) !== ce(e[qn[a]]) && (n = !0);
    }
  return !0;
}
function Ch() {
  return this._isValid;
}
function xh() {
  return pt(NaN);
}
function Cl(e) {
  var t = zi(e), n = t.year || 0, a = t.quarter || 0, l = t.month || 0, i = t.week || t.isoWeek || 0, s = t.day || 0, r = t.hour || 0, o = t.minute || 0, c = t.second || 0, d = t.millisecond || 0;
  this._isValid = wh(t), this._milliseconds = +d + c * 1e3 + // 1000
  o * 6e4 + // 1000 * 60
  r * 1e3 * 60 * 60, this._days = +s + i * 7, this._months = +l + a * 3 + n * 12, this._data = {}, this._locale = Ht(), this._bubble();
}
function Na(e) {
  return e instanceof Cl;
}
function si(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Vh(e, t, n) {
  var a = Math.min(e.length, t.length), l = Math.abs(e.length - t.length), i = 0, s;
  for (s = 0; s < a; s++)
    (n && e[s] !== t[s] || !n && ce(e[s]) !== ce(t[s])) && i++;
  return i + l;
}
function du(e, t) {
  ee(e, 0, 0, function() {
    var n = this.utcOffset(), a = "+";
    return n < 0 && (n = -n, a = "-"), a + _t(~~(n / 60), 2) + t + _t(~~n % 60, 2);
  });
}
du("Z", ":");
du("ZZ", "");
G("Z", _l);
G("ZZ", _l);
ke(["Z", "ZZ"], function(e, t, n) {
  n._useUTC = !0, n._tzm = as(_l, e);
});
var Ph = /([\+\-]|\d\d)/gi;
function as(e, t) {
  var n = (t || "").match(e), a, l, i;
  return n === null ? null : (a = n[n.length - 1] || [], l = (a + "").match(Ph) || ["-", 0, 0], i = +(l[1] * 60) + ce(l[2]), i === 0 ? 0 : l[0] === "+" ? i : -i);
}
function ls(e, t) {
  var n, a;
  return t._isUTC ? (n = t.clone(), a = (ht(e) || pa(e) ? e.valueOf() : _e(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + a), H.updateOffset(n, !1), n) : _e(e).local();
}
function ri(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
H.updateOffset = function() {
};
function Mh(e, t, n) {
  var a = this._offset || 0, l;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = as(_l, e), e === null)
        return this;
    } else
      Math.abs(e) < 16 && !n && (e = e * 60);
    return !this._isUTC && t && (l = ri(this)), this._offset = e, this._isUTC = !0, l != null && this.add(l, "m"), a !== e && (!t || this._changeInProgress ? mu(
      this,
      pt(e - a, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, H.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? a : ri(this);
}
function Dh(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ih(e) {
  return this.utcOffset(0, e);
}
function Oh(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(ri(this), "m")), this;
}
function Th() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = as(Xv, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ah(e) {
  return this.isValid() ? (e = e ? _e(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Eh() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Lh() {
  if (!ze(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Wi(e, this), e = ou(e), e._a ? (t = e._isUTC ? Vt(e._a) : _e(e._a), this._isDSTShifted = this.isValid() && Vh(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Rh() {
  return this.isValid() ? !this._isUTC : !1;
}
function Fh() {
  return this.isValid() ? this._isUTC : !1;
}
function fu() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Nh = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Bh = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function pt(e, t) {
  var n = e, a = null, l, i, s;
  return Na(e) ? n = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : Nt(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (a = Nh.exec(e)) ? (l = a[1] === "-" ? -1 : 1, n = {
    y: 0,
    d: ce(a[bt]) * l,
    h: ce(a[Oe]) * l,
    m: ce(a[ct]) * l,
    s: ce(a[Et]) * l,
    ms: ce(si(a[sn] * 1e3)) * l
    // the millisecond decimal point is included in the match
  }) : (a = Bh.exec(e)) ? (l = a[1] === "-" ? -1 : 1, n = {
    y: an(a[2], l),
    M: an(a[3], l),
    w: an(a[4], l),
    d: an(a[5], l),
    h: an(a[6], l),
    m: an(a[7], l),
    s: an(a[8], l)
  }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (s = Yh(
    _e(n.from),
    _e(n.to)
  ), n = {}, n.ms = s.milliseconds, n.M = s.months), i = new Cl(n), Na(e) && he(e, "_locale") && (i._locale = e._locale), Na(e) && he(e, "_isValid") && (i._isValid = e._isValid), i;
}
pt.fn = Cl.prototype;
pt.invalid = xh;
function an(e, t) {
  var n = e && parseFloat(e.replace(",", "."));
  return (isNaN(n) ? 0 : n) * t;
}
function nr(e, t) {
  var n = {};
  return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
}
function Yh(e, t) {
  var n;
  return e.isValid() && t.isValid() ? (t = ls(t, e), e.isBefore(t) ? n = nr(e, t) : (n = nr(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
}
function vu(e, t) {
  return function(n, a) {
    var l, i;
    return a !== null && !isNaN(+a) && (Wo(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = n, n = a, a = i), l = pt(n, a), mu(this, l, e), this;
  };
}
function mu(e, t, n, a) {
  var l = t._milliseconds, i = si(t._days), s = si(t._months);
  e.isValid() && (a = a ?? !0, s && Jo(e, na(e, "Month") + s * n), i && Ko(e, "Date", na(e, "Date") + i * n), l && e._d.setTime(e._d.valueOf() + l * n), a && H.updateOffset(e, i || s));
}
var $h = vu(1, "add"), Wh = vu(-1, "subtract");
function hu(e) {
  return typeof e == "string" || e instanceof String;
}
function Uh(e) {
  return ht(e) || pa(e) || hu(e) || Nt(e) || zh(e) || Hh(e) || e === null || e === void 0;
}
function Hh(e) {
  var t = dn(e) && !Yi(e), n = !1, a = [
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
    i = a[l], n = n || he(e, i);
  return t && n;
}
function zh(e) {
  var t = mt(e), n = !1;
  return t && (n = e.filter(function(a) {
    return !Nt(a) && hu(e);
  }).length === 0), t && n;
}
function jh(e) {
  var t = dn(e) && !Yi(e), n = !1, a = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], l, i;
  for (l = 0; l < a.length; l += 1)
    i = a[l], n = n || he(e, i);
  return t && n;
}
function Gh(e, t) {
  var n = e.diff(t, "days", !0);
  return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
}
function qh(e, t) {
  arguments.length === 1 && (arguments[0] ? Uh(arguments[0]) ? (e = arguments[0], t = void 0) : jh(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var n = e || _e(), a = ls(n, this).startOf("day"), l = H.calendarFormat(this, a) || "sameElse", i = t && (Pt(t[l]) ? t[l].call(this, n) : t[l]);
  return this.format(
    i || this.localeData().calendar(l, this, _e(n))
  );
}
function Kh() {
  return new ka(this);
}
function Zh(e, t) {
  var n = ht(e) ? e : _e(e);
  return this.isValid() && n.isValid() ? (t = ut(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Xh(e, t) {
  var n = ht(e) ? e : _e(e);
  return this.isValid() && n.isValid() ? (t = ut(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
}
function Jh(e, t, n, a) {
  var l = ht(e) ? e : _e(e), i = ht(t) ? t : _e(t);
  return this.isValid() && l.isValid() && i.isValid() ? (a = a || "()", (a[0] === "(" ? this.isAfter(l, n) : !this.isBefore(l, n)) && (a[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
}
function Qh(e, t) {
  var n = ht(e) ? e : _e(e), a;
  return this.isValid() && n.isValid() ? (t = ut(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (a = n.valueOf(), this.clone().startOf(t).valueOf() <= a && a <= this.clone().endOf(t).valueOf())) : !1;
}
function eg(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function tg(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function ng(e, t, n) {
  var a, l, i;
  if (!this.isValid())
    return NaN;
  if (a = ls(e, this), !a.isValid())
    return NaN;
  switch (l = (a.utcOffset() - this.utcOffset()) * 6e4, t = ut(t), t) {
    case "year":
      i = Ba(this, a) / 12;
      break;
    case "month":
      i = Ba(this, a);
      break;
    case "quarter":
      i = Ba(this, a) / 3;
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
  return n ? i : at(i);
}
function Ba(e, t) {
  if (e.date() < t.date())
    return -Ba(t, e);
  var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), a = e.clone().add(n, "months"), l, i;
  return t - a < 0 ? (l = e.clone().add(n - 1, "months"), i = (t - a) / (a - l)) : (l = e.clone().add(n + 1, "months"), i = (t - a) / (l - a)), -(n + i) || 0;
}
H.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
H.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function ag() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function lg(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, n = t ? this.clone().utc() : this;
  return n.year() < 0 || n.year() > 9999 ? Fa(
    n,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : Pt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Fa(n, "Z")) : Fa(
    n,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function ig() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", n, a, l, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', a = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", l = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + a + l + i);
}
function sg(e) {
  e || (e = this.isUtc() ? H.defaultFormatUtc : H.defaultFormat);
  var t = Fa(this, e);
  return this.localeData().postformat(t);
}
function rg(e, t) {
  return this.isValid() && (ht(e) && e.isValid() || _e(e).isValid()) ? pt({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function og(e) {
  return this.from(_e(), e);
}
function ug(e, t) {
  return this.isValid() && (ht(e) && e.isValid() || _e(e).isValid()) ? pt({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function cg(e) {
  return this.to(_e(), e);
}
function gu(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = Ht(e), t != null && (this._locale = t), this);
}
var yu = ot(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function pu() {
  return this._locale;
}
var Xa = 1e3, In = 60 * Xa, Ja = 60 * In, ku = (365 * 400 + 97) * 24 * Ja;
function On(e, t) {
  return (e % t + t) % t;
}
function bu(e, t, n) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, n) - ku : new Date(e, t, n).valueOf();
}
function _u(e, t, n) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - ku : Date.UTC(e, t, n);
}
function dg(e) {
  var t, n;
  if (e = ut(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? _u : bu, e) {
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
      t = this._d.valueOf(), t -= On(
        t + (this._isUTC ? 0 : this.utcOffset() * In),
        Ja
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= On(t, In);
      break;
    case "second":
      t = this._d.valueOf(), t -= On(t, Xa);
      break;
  }
  return this._d.setTime(t), H.updateOffset(this, !0), this;
}
function fg(e) {
  var t, n;
  if (e = ut(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (n = this._isUTC ? _u : bu, e) {
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
      t = this._d.valueOf(), t += Ja - On(
        t + (this._isUTC ? 0 : this.utcOffset() * In),
        Ja
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += In - On(t, In) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += Xa - On(t, Xa) - 1;
      break;
  }
  return this._d.setTime(t), H.updateOffset(this, !0), this;
}
function vg() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function mg() {
  return Math.floor(this.valueOf() / 1e3);
}
function hg() {
  return new Date(this.valueOf());
}
function gg() {
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
function yg() {
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
function pg() {
  return this.isValid() ? this.toISOString() : null;
}
function kg() {
  return $i(this);
}
function bg() {
  return Kt({}, se(this));
}
function _g() {
  return se(this).overflow;
}
function Sg() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
ee("N", 0, 0, "eraAbbr");
ee("NN", 0, 0, "eraAbbr");
ee("NNN", 0, 0, "eraAbbr");
ee("NNNN", 0, 0, "eraName");
ee("NNNNN", 0, 0, "eraNarrow");
ee("y", ["y", 1], "yo", "eraYear");
ee("y", ["yy", 2], 0, "eraYear");
ee("y", ["yyy", 3], 0, "eraYear");
ee("y", ["yyyy", 4], 0, "eraYear");
G("N", is);
G("NN", is);
G("NNN", is);
G("NNNN", Ag);
G("NNNNN", Eg);
ke(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, n, a) {
    var l = n._locale.erasParse(e, a, n._strict);
    l ? se(n).era = l : se(n).invalidEra = e;
  }
);
G("y", Un);
G("yy", Un);
G("yyy", Un);
G("yyyy", Un);
G("yo", Lg);
ke(["y", "yy", "yyy", "yyyy"], $e);
ke(["yo"], function(e, t, n, a) {
  var l;
  n._locale._eraYearOrdinalRegex && (l = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[$e] = n._locale.eraYearOrdinalParse(e, l) : t[$e] = parseInt(e, 10);
});
function wg(e, t) {
  var n, a, l, i = this._eras || Ht("en")._eras;
  for (n = 0, a = i.length; n < a; ++n) {
    switch (typeof i[n].since) {
      case "string":
        l = H(i[n].since).startOf("day"), i[n].since = l.valueOf();
        break;
    }
    switch (typeof i[n].until) {
      case "undefined":
        i[n].until = 1 / 0;
        break;
      case "string":
        l = H(i[n].until).startOf("day").valueOf(), i[n].until = l.valueOf();
        break;
    }
  }
  return i;
}
function Cg(e, t, n) {
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
function xg(e, t) {
  var n = e.since <= e.until ? 1 : -1;
  return t === void 0 ? H(e.since).year() : H(e.since).year() + (t - e.offset) * n;
}
function Vg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].name;
  return "";
}
function Pg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].narrow;
  return "";
}
function Mg() {
  var e, t, n, a = this.localeData().eras();
  for (e = 0, t = a.length; e < t; ++e)
    if (n = this.clone().startOf("day").valueOf(), a[e].since <= n && n <= a[e].until || a[e].until <= n && n <= a[e].since)
      return a[e].abbr;
  return "";
}
function Dg() {
  var e, t, n, a, l = this.localeData().eras();
  for (e = 0, t = l.length; e < t; ++e)
    if (n = l[e].since <= l[e].until ? 1 : -1, a = this.clone().startOf("day").valueOf(), l[e].since <= a && a <= l[e].until || l[e].until <= a && a <= l[e].since)
      return (this.year() - H(l[e].since).year()) * n + l[e].offset;
  return this.year();
}
function Ig(e) {
  return he(this, "_erasNameRegex") || ss.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Og(e) {
  return he(this, "_erasAbbrRegex") || ss.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Tg(e) {
  return he(this, "_erasNarrowRegex") || ss.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function is(e, t) {
  return t.erasAbbrRegex(e);
}
function Ag(e, t) {
  return t.erasNameRegex(e);
}
function Eg(e, t) {
  return t.erasNarrowRegex(e);
}
function Lg(e, t) {
  return t._eraYearOrdinalRegex || Un;
}
function ss() {
  var e = [], t = [], n = [], a = [], l, i, s, r, o, c = this.eras();
  for (l = 0, i = c.length; l < i; ++l)
    s = Lt(c[l].name), r = Lt(c[l].abbr), o = Lt(c[l].narrow), t.push(s), e.push(r), n.push(o), a.push(s), a.push(r), a.push(o);
  this._erasRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + n.join("|") + ")",
    "i"
  );
}
ee(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
ee(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function xl(e, t) {
  ee(0, [e, e.length], 0, t);
}
xl("gggg", "weekYear");
xl("ggggg", "weekYear");
xl("GGGG", "isoWeekYear");
xl("GGGGG", "isoWeekYear");
G("G", bl);
G("g", bl);
G("GG", Se, nt);
G("gg", Se, nt);
G("GGGG", Gi, ji);
G("gggg", Gi, ji);
G("GGGGG", kl, yl);
G("ggggg", kl, yl);
_a(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, n, a) {
    t[a.substr(0, 2)] = ce(e);
  }
);
_a(["gg", "GG"], function(e, t, n, a) {
  t[a] = H.parseTwoDigitYear(e);
});
function Rg(e) {
  return Su.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Fg(e) {
  return Su.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Ng() {
  return Rt(this.year(), 1, 4);
}
function Bg() {
  return Rt(this.isoWeekYear(), 1, 4);
}
function Yg() {
  var e = this.localeData()._week;
  return Rt(this.year(), e.dow, e.doy);
}
function $g() {
  var e = this.localeData()._week;
  return Rt(this.weekYear(), e.dow, e.doy);
}
function Su(e, t, n, a, l) {
  var i;
  return e == null ? la(this, a, l).year : (i = Rt(e, a, l), t > i && (t = i), Wg.call(this, e, t, n, a, l));
}
function Wg(e, t, n, a, l) {
  var i = tu(e, t, n, a, l), s = aa(i.year, 0, i.dayOfYear);
  return this.year(s.getUTCFullYear()), this.month(s.getUTCMonth()), this.date(s.getUTCDate()), this;
}
ee("Q", 0, "Qo", "quarter");
G("Q", Ho);
ke("Q", function(e, t) {
  t[At] = (ce(e) - 1) * 3;
});
function Ug(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
ee("D", ["DD", 2], "Do", "date");
G("D", Se, Hn);
G("DD", Se, nt);
G("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
ke(["D", "DD"], bt);
ke("Do", function(e, t) {
  t[bt] = ce(e.match(Se)[0]);
});
var wu = zn("Date", !0);
ee("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
G("DDD", pl);
G("DDDD", zo);
ke(["DDD", "DDDD"], function(e, t, n) {
  n._dayOfYear = ce(e);
});
function Hg(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
ee("m", ["mm", 2], 0, "minute");
G("m", Se, qi);
G("mm", Se, nt);
ke(["m", "mm"], ct);
var zg = zn("Minutes", !1);
ee("s", ["ss", 2], 0, "second");
G("s", Se, qi);
G("ss", Se, nt);
ke(["s", "ss"], Et);
var jg = zn("Seconds", !1);
ee("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
ee(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
ee(0, ["SSS", 3], 0, "millisecond");
ee(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
ee(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
ee(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
ee(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
ee(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
ee(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
G("S", pl, Ho);
G("SS", pl, nt);
G("SSS", pl, zo);
var Zt, Cu;
for (Zt = "SSSS"; Zt.length <= 9; Zt += "S")
  G(Zt, Un);
function Gg(e, t) {
  t[sn] = ce(("0." + e) * 1e3);
}
for (Zt = "S"; Zt.length <= 9; Zt += "S")
  ke(Zt, Gg);
Cu = zn("Milliseconds", !1);
ee("z", 0, 0, "zoneAbbr");
ee("zz", 0, 0, "zoneName");
function qg() {
  return this._isUTC ? "UTC" : "";
}
function Kg() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var F = ka.prototype;
F.add = $h;
F.calendar = qh;
F.clone = Kh;
F.diff = ng;
F.endOf = fg;
F.format = sg;
F.from = rg;
F.fromNow = og;
F.to = ug;
F.toNow = cg;
F.get = im;
F.invalidAt = _g;
F.isAfter = Zh;
F.isBefore = Xh;
F.isBetween = Jh;
F.isSame = Qh;
F.isSameOrAfter = eg;
F.isSameOrBefore = tg;
F.isValid = kg;
F.lang = yu;
F.locale = gu;
F.localeData = pu;
F.max = kh;
F.min = ph;
F.parsingFlags = bg;
F.set = sm;
F.startOf = dg;
F.subtract = Wh;
F.toArray = gg;
F.toObject = yg;
F.toDate = hg;
F.toISOString = lg;
F.inspect = ig;
typeof Symbol < "u" && Symbol.for != null && (F[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
F.toJSON = pg;
F.toString = ag;
F.unix = mg;
F.valueOf = vg;
F.creationData = Sg;
F.eraName = Vg;
F.eraNarrow = Pg;
F.eraAbbr = Mg;
F.eraYear = Dg;
F.year = qo;
F.isLeapYear = lm;
F.weekYear = Rg;
F.isoWeekYear = Fg;
F.quarter = F.quarters = Ug;
F.month = Qo;
F.daysInMonth = hm;
F.week = F.weeks = wm;
F.isoWeek = F.isoWeeks = Cm;
F.weeksInYear = Yg;
F.weeksInWeekYear = $g;
F.isoWeeksInYear = Ng;
F.isoWeeksInISOWeekYear = Bg;
F.date = wu;
F.day = F.days = Fm;
F.weekday = Nm;
F.isoWeekday = Bm;
F.dayOfYear = Hg;
F.hour = F.hours = jm;
F.minute = F.minutes = zg;
F.second = F.seconds = jg;
F.millisecond = F.milliseconds = Cu;
F.utcOffset = Mh;
F.utc = Ih;
F.local = Oh;
F.parseZone = Th;
F.hasAlignedHourOffset = Ah;
F.isDST = Eh;
F.isLocal = Rh;
F.isUtcOffset = Fh;
F.isUtc = fu;
F.isUTC = fu;
F.zoneAbbr = qg;
F.zoneName = Kg;
F.dates = ot(
  "dates accessor is deprecated. Use date instead.",
  wu
);
F.months = ot(
  "months accessor is deprecated. Use month instead",
  Qo
);
F.years = ot(
  "years accessor is deprecated. Use year instead",
  qo
);
F.zone = ot(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  Dh
);
F.isDSTShifted = ot(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Lh
);
function Zg(e) {
  return _e(e * 1e3);
}
function Xg() {
  return _e.apply(null, arguments).parseZone();
}
function xu(e) {
  return e;
}
var ge = Ui.prototype;
ge.calendar = Rv;
ge.longDateFormat = Yv;
ge.invalidDate = Wv;
ge.ordinal = zv;
ge.preparse = xu;
ge.postformat = xu;
ge.relativeTime = Gv;
ge.pastFuture = qv;
ge.set = Ev;
ge.eras = wg;
ge.erasParse = Cg;
ge.erasConvertYear = xg;
ge.erasAbbrRegex = Og;
ge.erasNameRegex = Ig;
ge.erasNarrowRegex = Tg;
ge.months = dm;
ge.monthsShort = fm;
ge.monthsParse = mm;
ge.monthsRegex = ym;
ge.monthsShortRegex = gm;
ge.week = km;
ge.firstDayOfYear = Sm;
ge.firstDayOfWeek = _m;
ge.weekdays = Tm;
ge.weekdaysMin = Em;
ge.weekdaysShort = Am;
ge.weekdaysParse = Rm;
ge.weekdaysRegex = Ym;
ge.weekdaysShortRegex = $m;
ge.weekdaysMinRegex = Wm;
ge.isPM = Hm;
ge.meridiem = Gm;
function Qa(e, t, n, a) {
  var l = Ht(), i = Vt().set(a, t);
  return l[n](i, e);
}
function Vu(e, t, n) {
  if (Nt(e) && (t = e, e = void 0), e = e || "", t != null)
    return Qa(e, t, n, "month");
  var a, l = [];
  for (a = 0; a < 12; a++)
    l[a] = Qa(e, a, n, "month");
  return l;
}
function rs(e, t, n, a) {
  typeof e == "boolean" ? (Nt(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, Nt(t) && (n = t, t = void 0), t = t || "");
  var l = Ht(), i = e ? l._week.dow : 0, s, r = [];
  if (n != null)
    return Qa(t, (n + i) % 7, a, "day");
  for (s = 0; s < 7; s++)
    r[s] = Qa(t, (s + i) % 7, a, "day");
  return r;
}
function Jg(e, t) {
  return Vu(e, t, "months");
}
function Qg(e, t) {
  return Vu(e, t, "monthsShort");
}
function ey(e, t, n) {
  return rs(e, t, n, "weekdays");
}
function ty(e, t, n) {
  return rs(e, t, n, "weekdaysShort");
}
function ny(e, t, n) {
  return rs(e, t, n, "weekdaysMin");
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
    var t = e % 10, n = ce(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + n;
  }
});
H.lang = ot(
  "moment.lang is deprecated. Use moment.locale instead.",
  Jt
);
H.langData = ot(
  "moment.langData is deprecated. Use moment.localeData instead.",
  Ht
);
var Dt = Math.abs;
function ay() {
  var e = this._data;
  return this._milliseconds = Dt(this._milliseconds), this._days = Dt(this._days), this._months = Dt(this._months), e.milliseconds = Dt(e.milliseconds), e.seconds = Dt(e.seconds), e.minutes = Dt(e.minutes), e.hours = Dt(e.hours), e.months = Dt(e.months), e.years = Dt(e.years), this;
}
function Pu(e, t, n, a) {
  var l = pt(t, n);
  return e._milliseconds += a * l._milliseconds, e._days += a * l._days, e._months += a * l._months, e._bubble();
}
function ly(e, t) {
  return Pu(this, e, t, 1);
}
function iy(e, t) {
  return Pu(this, e, t, -1);
}
function ar(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function sy() {
  var e = this._milliseconds, t = this._days, n = this._months, a = this._data, l, i, s, r, o;
  return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += ar(oi(n) + t) * 864e5, t = 0, n = 0), a.milliseconds = e % 1e3, l = at(e / 1e3), a.seconds = l % 60, i = at(l / 60), a.minutes = i % 60, s = at(i / 60), a.hours = s % 24, t += at(s / 24), o = at(Mu(t)), n += o, t -= ar(oi(o)), r = at(n / 12), n %= 12, a.days = t, a.months = n, a.years = r, this;
}
function Mu(e) {
  return e * 4800 / 146097;
}
function oi(e) {
  return e * 146097 / 4800;
}
function ry(e) {
  if (!this.isValid())
    return NaN;
  var t, n, a = this._milliseconds;
  if (e = ut(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + a / 864e5, n = this._months + Mu(t), e) {
      case "month":
        return n;
      case "quarter":
        return n / 3;
      case "year":
        return n / 12;
    }
  else
    switch (t = this._days + Math.round(oi(this._months)), e) {
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
var Du = zt("ms"), oy = zt("s"), uy = zt("m"), cy = zt("h"), dy = zt("d"), fy = zt("w"), vy = zt("M"), my = zt("Q"), hy = zt("y"), gy = Du;
function yy() {
  return pt(this);
}
function py(e) {
  return e = ut(e), this.isValid() ? this[e + "s"]() : NaN;
}
function kn(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var ky = kn("milliseconds"), by = kn("seconds"), _y = kn("minutes"), Sy = kn("hours"), wy = kn("days"), Cy = kn("months"), xy = kn("years");
function Vy() {
  return at(this.days() / 7);
}
var It = Math.round, Mn = {
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
function Py(e, t, n, a, l) {
  return l.relativeTime(t || 1, !!n, e, a);
}
function My(e, t, n, a) {
  var l = pt(e).abs(), i = It(l.as("s")), s = It(l.as("m")), r = It(l.as("h")), o = It(l.as("d")), c = It(l.as("M")), d = It(l.as("w")), f = It(l.as("y")), v = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || s <= 1 && ["m"] || s < n.m && ["mm", s] || r <= 1 && ["h"] || r < n.h && ["hh", r] || o <= 1 && ["d"] || o < n.d && ["dd", o];
  return n.w != null && (v = v || d <= 1 && ["w"] || d < n.w && ["ww", d]), v = v || c <= 1 && ["M"] || c < n.M && ["MM", c] || f <= 1 && ["y"] || ["yy", f], v[2] = t, v[3] = +e > 0, v[4] = a, Py.apply(null, v);
}
function Dy(e) {
  return e === void 0 ? It : typeof e == "function" ? (It = e, !0) : !1;
}
function Iy(e, t) {
  return Mn[e] === void 0 ? !1 : t === void 0 ? Mn[e] : (Mn[e] = t, e === "s" && (Mn.ss = t - 1), !0);
}
function Oy(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var n = !1, a = Mn, l, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (a = Object.assign({}, Mn, t), t.s != null && t.ss == null && (a.ss = t.s - 1)), l = this.localeData(), i = My(this, !n, a, l), n && (i = l.pastFuture(+this, i)), l.postformat(i);
}
var Yl = Math.abs;
function _n(e) {
  return (e > 0) - (e < 0) || +e;
}
function Vl() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = Yl(this._milliseconds) / 1e3, t = Yl(this._days), n = Yl(this._months), a, l, i, s, r = this.asSeconds(), o, c, d, f;
  return r ? (a = at(e / 60), l = at(a / 60), e %= 60, a %= 60, i = at(n / 12), n %= 12, s = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", o = r < 0 ? "-" : "", c = _n(this._months) !== _n(r) ? "-" : "", d = _n(this._days) !== _n(r) ? "-" : "", f = _n(this._milliseconds) !== _n(r) ? "-" : "", o + "P" + (i ? c + i + "Y" : "") + (n ? c + n + "M" : "") + (t ? d + t + "D" : "") + (l || a || e ? "T" : "") + (l ? f + l + "H" : "") + (a ? f + a + "M" : "") + (e ? f + s + "S" : "")) : "P0D";
}
var fe = Cl.prototype;
fe.isValid = Ch;
fe.abs = ay;
fe.add = ly;
fe.subtract = iy;
fe.as = ry;
fe.asMilliseconds = Du;
fe.asSeconds = oy;
fe.asMinutes = uy;
fe.asHours = cy;
fe.asDays = dy;
fe.asWeeks = fy;
fe.asMonths = vy;
fe.asQuarters = my;
fe.asYears = hy;
fe.valueOf = gy;
fe._bubble = sy;
fe.clone = yy;
fe.get = py;
fe.milliseconds = ky;
fe.seconds = by;
fe.minutes = _y;
fe.hours = Sy;
fe.days = wy;
fe.weeks = Vy;
fe.months = Cy;
fe.years = xy;
fe.humanize = Oy;
fe.toISOString = Vl;
fe.toString = Vl;
fe.toJSON = Vl;
fe.locale = gu;
fe.localeData = pu;
fe.toIsoString = ot(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  Vl
);
fe.lang = yu;
ee("X", 0, 0, "unix");
ee("x", 0, 0, "valueOf");
G("x", bl);
G("X", Jv);
ke("X", function(e, t, n) {
  n._d = new Date(parseFloat(e) * 1e3);
});
ke("x", function(e, t, n) {
  n._d = new Date(ce(e));
});
//! moment.js
H.version = "2.30.1";
Tv(_e);
H.fn = F;
H.min = bh;
H.max = _h;
H.now = Sh;
H.utc = Vt;
H.unix = Zg;
H.months = Jg;
H.isDate = pa;
H.locale = Jt;
H.invalid = gl;
H.duration = pt;
H.isMoment = ht;
H.weekdays = ey;
H.parseZone = Xg;
H.localeData = Ht;
H.isDuration = Na;
H.monthsShort = Qg;
H.weekdaysMin = ny;
H.defineLocale = Qi;
H.updateLocale = Xm;
H.locales = Jm;
H.weekdaysShort = ty;
H.normalizeUnits = ut;
H.relativeTimeRounding = Dy;
H.relativeTimeThreshold = Iy;
H.calendarFormat = Gh;
H.prototype = F;
H.HTML5_FMT = {
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
const Iu = R({
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
}, "VDatePickerControls"), lr = K()({
  name: "VDatePickerControls",
  props: Iu(),
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
    const a = y(() => Array.isArray(e.disabled) ? e.disabled.includes("text") : !!e.disabled), l = y(() => Array.isArray(e.disabled) ? e.disabled.includes("mode") : !!e.disabled), i = y(() => Array.isArray(e.disabled) ? e.disabled.includes("prev") : !!e.disabled), s = y(() => Array.isArray(e.disabled) ? e.disabled.includes("next") : !!e.disabled);
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
    return Q(() => u("div", {
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
    }, null), u(Zd, {
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
const Ty = R({
  appendIcon: String,
  color: String,
  header: String,
  transition: String,
  onClick: it()
}, "VDatePickerHeader"), ir = K()({
  name: "VDatePickerHeader",
  props: Ty(),
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
    } = st(e, "color");
    function s() {
      n("click");
    }
    function r() {
      n("click:append");
    }
    return Q(() => {
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
      }, [a.prepend()]), o && u(Tt, {
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
const Ay = Symbol.for("vuetify:date-options");
function Ey(e, t) {
  const n = Ln(typeof e.adapter == "function" ? new e.adapter({
    locale: e.locale[t.current.value] ?? t.current.value,
    formats: e.formats
  }) : e.adapter);
  return J(t.current, (a) => {
    n.locale = e.locale[a] ?? a ?? n.locale;
  }), n;
}
function Sa() {
  const e = Te(Ay);
  if (!e)
    throw new Error("[Vuetify] Could not find injected date options");
  const t = Yn();
  return Ey(e, t);
}
function Ly(e, t) {
  const n = e.toJsDate(t);
  let a = n.getFullYear(), l = new Date(a, 0, 1);
  if (n < l)
    a = a - 1, l = new Date(a, 0, 1);
  else {
    const r = new Date(a + 1, 0, 1);
    n >= r && (a = a + 1, l = r);
  }
  const i = Math.abs(n.getTime() - l.getTime()), s = Math.ceil(i / (1e3 * 60 * 60 * 24));
  return Math.floor(s / 7) + 1;
}
const Ry = R({
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
function Fy(e) {
  const t = Sa(), n = me(e, "modelValue", [], (v) => Xe(v)), a = y(() => e.displayValue ? t.date(e.displayValue) : n.value.length > 0 ? t.date(n.value[0]) : e.min ? t.date(e.min) : Array.isArray(e.allowedDates) ? t.date(e.allowedDates[0]) : t.date()), l = me(e, "year", void 0, (v) => {
    const g = v != null ? Number(v) : t.getYear(a.value);
    return t.startOfYear(t.setYear(t.date(), g));
  }, (v) => t.getYear(v)), i = me(e, "month", void 0, (v) => {
    const g = v != null ? Number(v) : t.getMonth(a.value), p = t.setYear(t.startOfMonth(t.date()), t.getYear(l.value));
    return t.setMonth(p, g);
  }, (v) => t.getMonth(v)), s = y(() => {
    const v = t.getWeekArray(i.value), g = v.flat(), p = 6 * 7;
    if (g.length < p) {
      const m = g[g.length - 1];
      let h = [];
      for (let k = 1; k <= p - g.length; k++)
        h.push(t.addDays(m, k)), k % 7 === 0 && (v.push(h), h = []);
    }
    return v;
  });
  function r(v, g) {
    return v.filter((p) => e.weekdays.includes(t.toJsDate(p).getDay())).map((p, m) => {
      const h = t.toISO(p), k = !t.isSameMonth(p, i.value), S = t.isSameDay(p, t.startOfMonth(i.value)), _ = t.isSameDay(p, t.endOfMonth(i.value)), w = t.isSameDay(p, i.value);
      return {
        date: p,
        isoDate: h,
        formatted: t.format(p, "keyboardDate"),
        year: t.getYear(p),
        month: t.getMonth(p),
        isDisabled: f(p),
        isWeekStart: m % 7 === 0,
        isWeekEnd: m % 7 === 6,
        isToday: t.isSameDay(p, g),
        isAdjacent: k,
        isHidden: k && !e.showAdjacentMonths,
        isStart: S,
        isSelected: n.value.some((P) => t.isSameDay(p, P)),
        isEnd: _,
        isSame: w,
        localized: t.format(p, "dayOfMonth")
      };
    });
  }
  const o = y(() => {
    const v = t.startOfWeek(n.value), g = [];
    for (let h = 0; h <= 6; h++)
      g.push(t.addDays(v, h));
    const p = g, m = t.date();
    return r(p, m);
  }), c = y(() => {
    const v = s.value.flat(), g = t.date();
    return r(v, g);
  }), d = y(() => s.value.map((v) => v.length ? Ly(t, v[0]) : null));
  function f(v) {
    if (e.disabled)
      return !0;
    const g = t.date(v);
    return e.min && t.isAfter(t.date(e.min), g) || e.max && t.isAfter(g, t.date(e.max)) ? !0 : Array.isArray(e.allowedDates) && e.allowedDates.length > 0 ? !e.allowedDates.some((p) => t.isSameDay(t.date(p), g)) : typeof e.allowedDates == "function" ? !e.allowedDates(g) : !1;
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
const Ou = R({
  color: String,
  hideWeekdays: Boolean,
  multiple: [Boolean, Number, String],
  showWeek: Boolean,
  ...Ry()
}, "VDatePickerMonth"), sr = K()({
  name: "VDatePickerMonth",
  props: Ou(),
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
    const l = B(), {
      daysInMonth: i,
      model: s,
      weekNumbers: r
    } = Fy(e), o = Sa(), c = ae(), d = ae(), f = y(() => {
      const m = ["number", "string"].includes(typeof e.multiple) ? Number(e.multiple) : 1 / 0;
      return s.value.length >= m;
    });
    function v(m) {
      const h = o.startOfDay(m);
      if (!c.value)
        c.value = h, s.value = [c.value];
      else if (d.value)
        c.value = m, d.value = void 0, s.value = [c.value];
      else {
        if (o.isSameDay(m, c.value)) {
          c.value = void 0, s.value = [];
          return;
        } else
          o.isBefore(m, c.value) ? (d.value = c.value, c.value = h) : d.value = h;
        const k = o.getDiff(d.value, c.value), S = [c.value];
        for (let _ = 1; _ < k; _++) {
          const w = o.addDays(c.value, _);
          S.push(w);
        }
        S.push(d.value), s.value = S;
      }
    }
    function g(m) {
      const h = s.value.findIndex((k) => o.isSameDay(k, m));
      if (h === -1)
        s.value = [...s.value, m];
      else {
        const k = [...s.value];
        k.splice(h, 1), s.value = k;
      }
    }
    function p(m) {
      e.multiple === "range" ? v(m) : e.multiple ? g(m) : s.value = [m];
    }
    return () => u("div", {
      class: "v-date-picker-month"
    }, [e.showWeek && u("div", {
      key: "weeks",
      class: "v-date-picker-month__weeks"
    }, [!e.hideWeekdays && u("div", {
      key: "hide-week-days",
      class: "v-date-picker-month__day"
    }, [De(" ")]), r.value.map((m) => u("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__day--adjacent"]
    }, [m]))]), u("div", {
      ref: l,
      class: "v-date-picker-month__days"
    }, [!e.hideWeekdays && o.getWeekdays().map((m) => u("div", {
      class: ["v-date-picker-month__day", "v-date-picker-month__weekday"]
    }, [m])), i.value.map((m, h) => {
      const k = {
        props: {
          onClick: () => p(m.date)
        },
        item: m,
        i: h
      };
      return f.value && !m.isSelected && (m.isDisabled = !0), u("div", {
        class: ["v-date-picker-month__day", {
          "v-date-picker-month__day--adjacent": m.isAdjacent,
          "v-date-picker-month__day--hide-adjacent": m.isHidden,
          "v-date-picker-month__day--selected": m.isSelected,
          "v-date-picker-month__day--week-end": m.isWeekEnd,
          "v-date-picker-month__day--week-start": m.isWeekStart
        }],
        "data-v-date": m.isDisabled ? void 0 : m.isoDate
      }, [(e.showAdjacentMonths || !m.isAdjacent) && u(xe, {
        defaults: {
          VBtn: {
            color: (m.isSelected || m.isToday) && !m.isDisabled ? e.color : void 0,
            disabled: m.isDisabled,
            icon: !0,
            ripple: !1,
            text: m.localized,
            variant: m.isDisabled ? "text" : m.isToday && !m.isSelected ? "outlined" : "flat",
            onClick: () => p(m.date)
          }
        }
      }, {
        default: () => {
          var S;
          return [((S = a.day) == null ? void 0 : S.call(a, k)) ?? u(Ye, k.props, null)];
        }
      })]);
    })])]);
  }
});
const Tu = R({
  color: String,
  height: [String, Number],
  modelValue: Number
}, "VDatePickerMonths"), rr = K()({
  name: "VDatePickerMonths",
  props: Tu(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Sa(), l = me(e, "modelValue"), i = y(() => {
      let s = a.startOfYear(a.date());
      return yi(12).map((r) => {
        const o = a.format(s, "monthShort");
        return s = a.getNextMonth(s), {
          text: o,
          value: r
        };
      });
    });
    return je(() => {
      l.value = l.value ?? a.getMonth(a.date());
    }), Q(() => u("div", {
      class: "v-date-picker-months",
      style: {
        height: te(e.height)
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
      })) ?? u(Ye, W({
        key: "month"
      }, o, {
        onClick: () => c(r)
      }), null);
    })])])), {};
  }
});
const Au = R({
  color: String,
  height: [String, Number],
  min: null,
  max: null,
  modelValue: Number
}, "VDatePickerYears"), or = K()({
  name: "VDatePickerYears",
  props: Au(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Sa(), l = me(e, "modelValue"), i = y(() => {
      const r = a.getYear(a.date());
      let o = r - 100, c = r + 52;
      e.min && (o = a.getYear(a.date(e.min))), e.max && (c = a.getYear(a.date(e.max)));
      let d = a.startOfYear(a.date());
      return d = a.setYear(d, o), yi(c - o + 1, o).map((f) => {
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
    const s = B();
    return We(async () => {
      var r;
      await He(), (r = s.value) == null || r.$el.scrollIntoView({
        block: "center"
      });
    }), Q(() => u("div", {
      class: "v-date-picker-years",
      style: {
        height: te(e.height)
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
      })) ?? u(Ye, W({
        key: "month"
      }, c), null);
    })])])), {};
  }
});
const Ny = nn("v-picker-title"), Eu = R({
  bgColor: String,
  landscape: Boolean,
  title: String,
  hideHeader: Boolean,
  ...Bi()
}, "VPicker"), ur = K()({
  name: "VPicker",
  props: Eu(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      backgroundColorClasses: a,
      backgroundColorStyles: l
    } = st(X(e, "color"));
    return Q(() => {
      const i = ta.filterProps(e), s = !!(e.title || n.title);
      return u(ta, W(i, {
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
          }, [s && u(Ny, {
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
}), By = R({
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
  ...Iu(),
  ...Ou(),
  ...Je(Tu(), ["modelValue"]),
  ...Je(Au(), ["modelValue"]),
  ...Eu({
    title: "$vuetify.datePicker.title"
  }),
  modelValue: null
}, "VDatePicker"), Yy = K()({
  name: "VDatePicker",
  props: By(),
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
    const l = Sa(), {
      t: i
    } = Yn(), s = me(e, "modelValue", void 0, (b) => Xe(b), (b) => e.multiple ? b : b[0]), r = me(e, "viewMode"), o = y(() => {
      var M;
      const b = l.date((M = s.value) == null ? void 0 : M[0]);
      return b && l.isValid(b) ? b : l.date();
    }), c = B(Number(e.month ?? l.getMonth(l.startOfMonth(o.value)))), d = B(Number(e.year ?? l.getYear(l.startOfYear(l.setMonth(o.value, c.value))))), f = ae(!1), v = y(() => e.multiple && s.value.length > 1 ? i("$vuetify.datePicker.itemsSelected", s.value.length) : s.value[0] && l.isValid(s.value[0]) ? l.format(s.value[0], "normalDateWithWeekday") : i(e.header)), g = y(() => l.format(l.date(new Date(d.value, c.value, 1)), "monthAndYear")), p = y(() => `date-picker-header${f.value ? "-reverse" : ""}-transition`), m = y(() => {
      const b = l.date(e.min);
      return e.min && l.isValid(b) ? b : null;
    }), h = y(() => {
      const b = l.date(e.max);
      return e.max && l.isValid(b) ? b : null;
    }), k = y(() => {
      if (e.disabled)
        return !0;
      const b = [];
      if (r.value !== "month")
        b.push("prev", "next");
      else {
        let M = l.date();
        if (M = l.setYear(M, d.value), M = l.setMonth(M, c.value), m.value) {
          const x = l.addDays(l.startOfMonth(M), -1);
          l.isAfter(m.value, x) && b.push("prev");
        }
        if (h.value) {
          const x = l.addDays(l.endOfMonth(M), 1);
          l.isAfter(x, h.value) && b.push("next");
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
    function P() {
      r.value = r.value === "months" ? "month" : "months";
    }
    function C() {
      r.value = r.value === "year" ? "month" : "year";
    }
    return J(c, () => {
      r.value === "months" && P(), n("update:month", c.value);
    }), J(d, () => {
      r.value === "year" && C(), n("update:year", d.value);
    }), J(s, (b, M) => {
      const x = l.date(Xe(b)[0]), E = l.date(Xe(M)[0]);
      f.value = l.isBefore(x, E);
    }), Q(() => {
      const b = ur.filterProps(e), M = lr.filterProps(e), x = ir.filterProps(e), E = sr.filterProps(e), Y = Je(rr.filterProps(e), ["modelValue"]), I = Je(or.filterProps(e), ["modelValue"]), D = {
        header: v.value,
        transition: p.value
      };
      return u(ur, W(b, {
        class: ["v-date-picker", `v-date-picker--${r.value}`, {
          "v-date-picker--show-week": e.showWeek
        }, e.class],
        style: e.style
      }), {
        title: () => {
          var V;
          return ((V = a.title) == null ? void 0 : V.call(a)) ?? u("div", {
            class: "v-date-picker__title"
          }, [i(e.title)]);
        },
        header: () => a.header ? u(xe, {
          defaults: {
            VDatePickerHeader: {
              ...D
            }
          }
        }, {
          default: () => {
            var V;
            return [(V = a.header) == null ? void 0 : V.call(a, D)];
          }
        }) : u(ir, W({
          key: "header"
        }, x, D, {
          onClick: r.value !== "month" ? w : void 0
        }), {
          ...a,
          default: void 0
        }),
        default: () => u(pe, null, [u(lr, W(M, {
          disabled: k.value,
          text: g.value,
          "onClick:next": S,
          "onClick:prev": _,
          "onClick:month": P,
          "onClick:year": C
        }), null), u(Zl, {
          hideOnLeave: !0
        }, {
          default: () => [r.value === "months" ? u(rr, W({
            key: "date-picker-months"
          }, Y, {
            modelValue: c.value,
            "onUpdate:modelValue": (V) => c.value = V,
            min: m.value,
            max: h.value
          }), null) : r.value === "year" ? u(or, W({
            key: "date-picker-years"
          }, I, {
            modelValue: d.value,
            "onUpdate:modelValue": (V) => d.value = V,
            min: m.value,
            max: h.value
          }), null) : u(sr, W({
            key: "date-picker-month"
          }, E, {
            modelValue: s.value,
            "onUpdate:modelValue": (V) => s.value = V,
            month: c.value,
            "onUpdate:month": (V) => c.value = V,
            year: d.value,
            "onUpdate:year": (V) => d.value = V,
            min: m.value,
            max: h.value
          }), null)]
        })]),
        actions: a.actions
      });
    }), {};
  }
}), $y = /* @__PURE__ */ Fe({
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
    const n = e, a = t, l = B(n.textfield), i = B(n.menu), s = B(n.picker), r = B(!1), o = y(() => n.fields ?? []);
    function c(m) {
      l.value.value = m, a("update:modelValue", m);
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
    function g() {
      r.value = !1;
    }
    function p(m) {
      r.value = !1;
      const h = H(m).format(s.value.format);
      c(h);
    }
    return We(() => {
      var m;
      (m = l.value) == null || m.isLoading(!1);
    }), (m, h) => (ne(), ue(Be, { "no-gutters": "" }, {
      default: N(() => {
        var k;
        return [
          u(hl, W({
            modelValue: r.value,
            "onUpdate:modelValue": h[2] || (h[2] = (S) => r.value = S)
          }, (k = i.value) == null ? void 0 : k.props()), {
            activator: N(({ props: S }) => {
              var _;
              return [
                u(ya, W({
                  field: l.value,
                  "onUpdate:field": h[0] || (h[0] = (w) => l.value = w)
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
            default: N(() => [
              u(ma, {
                class: "pa-0",
                width: s.value.width,
                "max-width": s.value.width
              }, {
                default: N(() => [
                  u(Bn, {
                    class: "pa-0",
                    width: s.value.width,
                    "max-width": s.value.width
                  }, {
                    default: N(() => {
                      var S;
                      return [
                        u(Yy, W({
                          modelValue: s.value.value,
                          "onUpdate:modelValue": h[1] || (h[1] = (_) => s.value.value = _)
                        }, (S = s.value) == null ? void 0 : S.props(), {
                          "onClick:save": p,
                          "onClick:cancel": g
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
const Wy = R({
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
}, "VTooltip"), os = K()({
  name: "VTooltip",
  props: Wy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), {
      scopeId: l
    } = vl(), i = rt(), s = y(() => e.id || `v-tooltip-${i}`), r = B(), o = y(() => e.location.split(" ").length > 1 ? e.location : e.location + " center"), c = y(() => e.origin === "auto" || e.origin === "overlap" || e.origin.split(" ").length > 1 || e.location.split(" ").length > 1 ? e.origin : e.origin + " center"), d = y(() => e.transition ? e.transition : a.value ? "scale-transition" : "fade-transition"), f = y(() => W({
      "aria-describedby": s.value
    }, e.activatorProps));
    return Q(() => {
      const v = En.filterProps(e);
      return u(En, W({
        ref: r,
        class: ["v-tooltip", e.class],
        style: e.style,
        id: s.value
      }, v, {
        modelValue: a.value,
        "onUpdate:modelValue": (g) => a.value = g,
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
          var h;
          for (var g = arguments.length, p = new Array(g), m = 0; m < g; m++)
            p[m] = arguments[m];
          return ((h = n.default) == null ? void 0 : h.call(n, ...p)) ?? e.text;
        }
      });
    }), Wn({}, r);
  }
}), Uy = /* @__PURE__ */ Fe({
  __name: "EasyButton",
  props: {
    button: {},
    disabled: { type: Boolean },
    identifier: {}
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = B(n.button), i = y(() => {
      var c, d;
      return !oe(n.button.prepend_icon) && !oe((d = (c = n.button) == null ? void 0 : c.prepend_icon) == null ? void 0 : d.icon);
    }), s = y(() => {
      var c, d;
      return !oe(n.button.append_icon) && !oe((d = (c = n.button) == null ? void 0 : c.append_icon) == null ? void 0 : d.icon);
    }), r = y(() => n.disabled ? !0 : l.value.disabled);
    function o() {
      oe(n == null ? void 0 : n.identifier) ? a("click", "") : a("click", n == null ? void 0 : n.identifier);
    }
    return (c, d) => {
      var v, g, p, m;
      const f = Qt("EasyIcon");
      return ne(), ue(os, W((g = (v = l.value) == null ? void 0 : v.tooltip) == null ? void 0 : g.props(), {
        disabled: ((m = (p = l.value) == null ? void 0 : p.tooltip) == null ? void 0 : m.disabled) ?? !0
      }), {
        activator: N(({ props: h }) => [
          u(Ye, W({ ...h, ...l.value.props() }, {
            class: l.value.classes,
            disabled: r.value,
            onClick: o
          }), hi({ _: 2 }, [
            i.value ? {
              name: "prepend",
              fn: N(() => [
                u(f, {
                  icon: l.value.prepend_icon
                }, null, 8, ["icon"])
              ]),
              key: "0"
            } : void 0,
            s.value ? {
              name: "append",
              fn: N(() => [
                u(f, {
                  icon: l.value.append_icon
                }, null, 8, ["icon"])
              ]),
              key: "1"
            } : void 0
          ]), 1040, ["class", "disabled"])
        ]),
        default: N(() => {
          var h, k;
          return [
            ft("span", null, Ze((k = (h = l.value) == null ? void 0 : h.tooltip) == null ? void 0 : k.text), 1)
          ];
        }),
        _: 1
      }, 16, ["disabled"]);
    };
  }
}), Hy = /* @__PURE__ */ Fe({
  __name: "EasyIcon",
  props: {
    icon: {},
    identifier: { default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const n = e, a = t, l = B(n.icon ?? new vc({ icon: "mdi-home" }));
    function i() {
      oe(n == null ? void 0 : n.identifier) ? a("click", "") : a("click", n == null ? void 0 : n.identifier);
    }
    return (s, r) => {
      var o, c, d, f;
      return ne(), ue(os, W((c = (o = l.value) == null ? void 0 : o.tooltip) == null ? void 0 : c.props(), {
        disabled: ((f = (d = l.value) == null ? void 0 : d.tooltip) == null ? void 0 : f.disabled) ?? !0
      }), {
        activator: N(({ props: v }) => {
          var g;
          return [
            u(be, W({ ...v, ...(g = l.value) == null ? void 0 : g.props() }, {
              onClick: i,
              class: l.value.classes
            }), {
              default: N(() => {
                var p;
                return [
                  De(Ze((p = l.value) == null ? void 0 : p.icon), 1)
                ];
              }),
              _: 2
            }, 1040, ["class"])
          ];
        }),
        default: N(() => {
          var v, g;
          return [
            ft("span", null, Ze((g = (v = l.value) == null ? void 0 : v.tooltip) == null ? void 0 : g.text), 1)
          ];
        }),
        _: 1
      }, 16, ["disabled"]);
    };
  }
});
const zy = nn("v-alert-title"), jy = ["success", "info", "warning", "error"], Gy = R({
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
    validator: (e) => jy.includes(e)
  },
  ...ie(),
  ...yt(),
  ...Bt(),
  ...Wt(),
  ...fa(),
  ...rl(),
  ...Qe(),
  ...Ee(),
  ...Le(),
  ...$t({
    variant: "flat"
  })
}, "VAlert"), Lu = K()({
  name: "VAlert",
  props: Gy(),
  emits: {
    "click:close": (e) => !0,
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      emit: n,
      slots: a
    } = t;
    const l = me(e, "modelValue"), i = y(() => {
      if (e.icon !== !1)
        return e.type ? e.icon ?? `$${e.type}` : e.icon;
    }), s = y(() => ({
      color: e.color ?? e.type,
      variant: e.variant
    })), {
      themeClasses: r
    } = Ue(e), {
      colorClasses: o,
      colorStyles: c,
      variantClasses: d
    } = Nn(s), {
      densityClasses: f
    } = Ct(e), {
      dimensionStyles: v
    } = Yt(e), {
      elevationClasses: g
    } = Ut(e), {
      locationStyles: p
    } = va(e), {
      positionClasses: m
    } = ol(e), {
      roundedClasses: h
    } = et(e), {
      textColorClasses: k,
      textColorStyles: S
    } = vt(X(e, "borderColor")), {
      t: _
    } = Yn(), w = y(() => ({
      "aria-label": _(e.closeLabel),
      onClick(P) {
        l.value = !1, n("click:close", P);
      }
    }));
    return () => {
      const P = !!(a.prepend || i.value), C = !!(a.title || e.title), b = !!(a.close || e.closable);
      return l.value && u(e.tag, {
        class: ["v-alert", e.border && {
          "v-alert--border": !!e.border,
          [`v-alert--border-${e.border === !0 ? "start" : e.border}`]: !0
        }, {
          "v-alert--prominent": e.prominent
        }, r.value, o.value, f.value, g.value, m.value, h.value, d.value, e.class],
        style: [c.value, v.value, p.value, e.style],
        role: "alert"
      }, {
        default: () => {
          var M, x;
          return [Fn(!1, "v-alert"), e.border && u("div", {
            key: "border",
            class: ["v-alert__border", k.value],
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
          }, a.prepend) : u(be, {
            key: "prepend-icon",
            density: e.density,
            icon: i.value,
            size: e.prominent ? 44 : 28
          }, null)]), u("div", {
            class: "v-alert__content"
          }, [C && u(zy, {
            key: "title"
          }, {
            default: () => {
              var E;
              return [((E = a.title) == null ? void 0 : E.call(a)) ?? e.title];
            }
          }), ((M = a.text) == null ? void 0 : M.call(a)) ?? e.text, (x = a.default) == null ? void 0 : x.call(a)]), a.append && u("div", {
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
              var E;
              return [(E = a.close) == null ? void 0 : E.call(a, {
                props: w.value
              })];
            }
          }) : u(Ye, W({
            key: "close-btn",
            icon: e.closeIcon,
            size: "x-small",
            variant: "text"
          }, w.value), null)])];
        }
      });
    };
  }
}), qy = ["innerHTML"], Ky = /* @__PURE__ */ Fe({
  __name: "EasyAlerts",
  props: {
    alerts: {}
  },
  setup(e) {
    const n = B(e.alerts);
    function a(i) {
      var s;
      return !oe(i == null ? void 0 : i.append_icon) && !oe((s = i == null ? void 0 : i.append_icon) == null ? void 0 : s.icon);
    }
    function l(i) {
      var s;
      return !oe(i == null ? void 0 : i.prepend_icon) && !oe((s = i == null ? void 0 : i.prepend_icon) == null ? void 0 : s.icon);
    }
    return (i, s) => {
      const r = Qt("EasyIcon");
      return ne(!0), Xt(pe, null, Tn(n.value, (o, c) => Ve((ne(), ue(Ce, {
        key: c,
        cols: o.cols
      }, {
        default: N(() => [
          u(Lu, W({
            modelValue: o.display,
            "onUpdate:modelValue": (d) => o.display = d
          }, o.props()), hi({
            default: N(() => [
              ft("div", {
                innerHTML: o.text
              }, null, 8, qy)
            ]),
            _: 2
          }, [
            l(o) ? {
              name: "prepend",
              fn: N(() => [
                u(r, {
                  icon: o == null ? void 0 : o.prepend_icon
                }, null, 8, ["icon"])
              ]),
              key: "0"
            } : void 0,
            a(o) ? {
              name: "append",
              fn: N(() => [
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
        [dt, o.display]
      ])), 128);
    };
  }
});
const Zy = R({
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
      component: Ii
    },
    zIndex: 2400
  })
}, "VDialog"), Xy = K()({
  name: "VDialog",
  props: Zy(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = me(e, "modelValue"), {
      scopeId: l
    } = vl(), i = B();
    function s(o) {
      var f, v;
      const c = o.relatedTarget, d = o.target;
      if (c !== d && ((f = i.value) != null && f.contentEl) && // We're the topmost dialog
      ((v = i.value) != null && v.globalTop) && // It isn't the document or the dialog body
      ![document, i.value.contentEl].includes(d) && // It isn't inside the dialog body
      !i.value.contentEl.contains(d)) {
        const g = Xn(i.value.contentEl);
        if (!g.length)
          return;
        const p = g[0], m = g[g.length - 1];
        c === p ? m.focus() : p.focus();
      }
    }
    Re && J(() => a.value && e.retainFocus, (o) => {
      o ? document.addEventListener("focusin", s) : document.removeEventListener("focusin", s);
    }, {
      immediate: !0
    }), J(a, async (o) => {
      var c, d;
      await He(), o ? (c = i.value.contentEl) == null || c.focus({
        preventScroll: !0
      }) : (d = i.value.activatorEl) == null || d.focus({
        preventScroll: !0
      });
    });
    const r = y(() => W({
      "aria-haspopup": "dialog",
      "aria-expanded": String(a.value)
    }, e.activatorProps));
    return Q(() => {
      const o = En.filterProps(e);
      return u(En, W({
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
    }), Wn({}, i);
  }
}), Jy = /* @__PURE__ */ Fe({
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
    const n = e, a = t, l = B(n.modelValue), i = je(() => l.value = n.modelValue), s = J(l, (r) => {
      a("update:modelValue", r);
    });
    return Ae(() => {
      i(), s();
    }), (r, o) => (ne(), ue(Xy, {
      modelValue: l.value,
      "onUpdate:modelValue": o[1] || (o[1] = (c) => l.value = c),
      width: "auto"
    }, {
      default: N(() => [
        u(ma, null, {
          default: N(() => [
            u(Ci, null, {
              default: N(() => [
                De(" Your password must contain: ")
              ]),
              _: 1
            }),
            u(Bn, null, {
              default: N(() => [
                u(Be, null, {
                  default: N(() => [
                    n.lowerCase ? (ne(), ue(Ce, {
                      key: 0,
                      cols: 12,
                      md: 6
                    }, {
                      default: N(() => [
                        u(be, { color: "success" }, {
                          default: N(() => [
                            De("mdi-check")
                          ]),
                          _: 1
                        }),
                        De(" Lowercase Characters ")
                      ]),
                      _: 1
                    })) : Ie("", !0),
                    n.upperCase ? (ne(), ue(Ce, {
                      key: 1,
                      cols: 12,
                      md: 6
                    }, {
                      default: N(() => [
                        u(be, { color: "success" }, {
                          default: N(() => [
                            De("mdi-check")
                          ]),
                          _: 1
                        }),
                        De(" Uppercase Characters ")
                      ]),
                      _: 1
                    })) : Ie("", !0),
                    n.special ? (ne(), ue(Ce, {
                      key: 2,
                      cols: 12,
                      md: 6
                    }, {
                      default: N(() => [
                        u(be, { color: "success" }, {
                          default: N(() => [
                            De("mdi-check")
                          ]),
                          _: 1
                        }),
                        De(" Special Characters ")
                      ]),
                      _: 1
                    })) : Ie("", !0),
                    n.numbers ? (ne(), ue(Ce, {
                      key: 3,
                      cols: 12,
                      md: 6
                    }, {
                      default: N(() => [
                        u(be, { color: "success" }, {
                          default: N(() => [
                            De("mdi-check")
                          ]),
                          _: 1
                        }),
                        De(" Numbers ")
                      ]),
                      _: 1
                    })) : Ie("", !0),
                    n.minLength ? (ne(), ue(Ce, {
                      key: 4,
                      cols: 12,
                      md: 6
                    }, {
                      default: N(() => [
                        u(be, { color: "success" }, {
                          default: N(() => [
                            De("mdi-check")
                          ]),
                          _: 1
                        }),
                        De(" Minimum Length - " + Ze(n.minLength), 1)
                      ]),
                      _: 1
                    })) : Ie("", !0)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            u(Hr, null, {
              default: N(() => [
                u(Ye, {
                  color: "primary",
                  onClick: o[0] || (o[0] = (c) => l.value = !1),
                  class: "mx-auto"
                }, {
                  default: N(() => [
                    De("Close Dialog")
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
}), Qy = /* @__PURE__ */ ft("span", null, "Click for password requirements", -1), ep = /* @__PURE__ */ Fe({
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
    const n = e, a = t, l = B(n.textfield), i = B(n.modelValue), s = B(!1), r = B(n.errorMessages), o = y(() => f.value === 0 || c.value === 0 ? 0 : f.value / c.value / d.value * 100), c = y(() => 100 / d.value), d = y(() => {
      let C = 0;
      return n.lowerCase && C++, n.upperCase && C++, n.numbers && C++, n.special && C++, n.minLength && C++, C;
    }), f = y(() => {
      var b, M, x, E, Y, I, D, V, O, U;
      let C = 0;
      return n.lowerCase && (M = (b = l.value) == null ? void 0 : b.value) != null && M.match(/[a-z]+/) && (C += 1), n.upperCase && (E = (x = l.value) == null ? void 0 : x.value) != null && E.match(/[A-Z]+/) && (C += 1), n.numbers && (I = (Y = l.value) == null ? void 0 : Y.value) != null && I.match(/[0-9]+/) && (C += 1), n.special && (V = (D = l.value) == null ? void 0 : D.value) != null && V.match(/[`!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?~ ]+/) && (C += 1), n.minLength && ((U = (O = l.value) == null ? void 0 : O.value) == null ? void 0 : U.length) >= n.minLength && (C += 1), Math.ceil(c.value * C);
    }), v = y(() => o.value > 75 ? n.strengthSuccessColor : o.value > 50 ? n.strengthWarningColor : n.strengthErrorColor), g = y(() => o.value > 75 ? n.strengthSuccessText : o.value > 50 ? n.strengthWarningText : n.strengthErrorText), p = J(l.value, () => {
      k();
    }), m = J(i, (C) => {
      l.value.value = C;
    }), h = J(r.value, (C) => {
      l.value.error_messages = C;
    });
    Ae(() => {
      p(), m(), h();
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
    function w(C, b) {
      n.viewMode && (l.value.value.value.type == "password" ? (l.value.value.value.type = "text", b == "prepend" && (a("click:prependInner", C), l.value.value.value.prepend_inner_icon.icon = "mdi-eye-off"), b == "append" && (a("click:appendInner", C), l.value.value.value.append_inner_icon.icon = "mdi-eye-off")) : (l.value.type = "password", b == "prepend" && (a("click:prependInner", C), l.value.value.value.prepend_inner_icon.icon = "mdi-eye"), b == "append" && (a("click:appendInner", C), l.value.value.value.append_inner_icon.icon = "mdi-eye")));
    }
    We(() => {
      var C;
      l.value.value = n.modelValue, (C = l.value) == null || C.isLoading(!1);
    });
    function P() {
      s.value = !0;
    }
    return (C, b) => (ne(), ue(Be, null, {
      default: N(() => [
        u(Ce, { cols: 12 }, {
          default: N(() => {
            var M;
            return [
              u(ya, W({
                field: l.value,
                "onUpdate:field": b[0] || (b[0] = (x) => l.value = x)
              }, (M = l.value) == null ? void 0 : M.props(), {
                fields: n.fields ?? [],
                onUpdated: k,
                onValidated: S,
                onInvalidated: _,
                "onClick:prependInner": b[1] || (b[1] = (x) => w(x, "prepend")),
                "onClick:appendInner": b[2] || (b[2] = (x) => w(x, "append")),
                "onClick:prepend": b[3] || (b[3] = (x) => a("click:prepend", x)),
                "onClick:append": b[4] || (b[4] = (x) => a("click:append", x))
              }), null, 16, ["field", "fields"])
            ];
          }),
          _: 1
        }),
        n.showStrengthBar ? (ne(), ue(Ce, {
          key: 0,
          cols: 12
        }, {
          default: N(() => [
            u(Be, null, {
              default: N(() => [
                u(Ce, {
                  cols: "12",
                  style: { position: "relative" }
                }, {
                  default: N(() => [
                    u(Vi, {
                      modelValue: f.value,
                      "onUpdate:modelValue": b[5] || (b[5] = (M) => f.value = M),
                      striped: "",
                      color: v.value,
                      height: "30"
                    }, {
                      default: N(() => [
                        ft("strong", {
                          class: Sr("text-" + v.value + "-lighten-2")
                        }, Ze(g.value) + " - " + Ze(o.value) + "%", 3)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "color"]),
                    u(os, null, {
                      activator: N(({ props: M }) => [
                        n.showRequirementsDialog ? (ne(), ue(Ye, W({
                          key: 0,
                          icon: "mdi-information-slab-circle-outline"
                        }, M, {
                          density: "compact",
                          style: { position: "absolute", right: "0px", top: "0px" },
                          onClick: P
                        }), null, 16)) : Ie("", !0)
                      ]),
                      default: N(() => [
                        Qy
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
        })) : Ie("", !0),
        n.showRequirementsDialog ? (ne(), ue(Me(Jy), {
          key: 1,
          modelValue: s.value,
          "onUpdate:modelValue": b[6] || (b[6] = (M) => s.value = M),
          "lower-case": n.lowerCase,
          "upper-case": n.upperCase,
          numbers: n.numbers,
          special: n.special,
          "min-length": n.minLength
        }, null, 8, ["modelValue", "lower-case", "upper-case", "numbers", "special", "min-length"])) : Ie("", !0)
      ]),
      _: 1
    }));
  }
});
function cr(e) {
  const n = Math.abs(e);
  return Math.sign(e) * (n / ((1 / 0.501 - 2) * (1 - n) + 1));
}
function dr(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: l,
    currentScrollOffset: i,
    isHorizontal: s
  } = e;
  const r = s ? t.clientWidth : t.clientHeight, o = s ? t.offsetLeft : t.offsetTop, c = l && s ? a - o - r : o, d = n + i, f = r + c, v = r * 0.4;
  return c <= i ? i = Math.max(c - v, 0) : d <= f && (i = Math.min(i - (d - f - v), a - n)), i;
}
function tp(e) {
  let {
    selectedElement: t,
    containerSize: n,
    contentSize: a,
    isRtl: l,
    isHorizontal: i
  } = e;
  const s = i ? t.clientWidth : t.clientHeight, r = i ? t.offsetLeft : t.offsetTop, o = l && i ? a - r - s / 2 - n / 2 : r + s / 2 - n / 2;
  return Math.min(a - n, Math.max(0, o));
}
const np = Symbol.for("vuetify:v-slide-group"), Ru = R({
  centerActive: Boolean,
  direction: {
    type: String,
    default: "horizontal"
  },
  symbol: {
    type: null,
    default: np
  },
  nextIcon: {
    type: ye,
    default: "$next"
  },
  prevIcon: {
    type: ye,
    default: "$prev"
  },
  showArrows: {
    type: [Boolean, String],
    validator: (e) => typeof e == "boolean" || ["always", "desktop", "mobile"].includes(e)
  },
  ...ie(),
  ...Yd(),
  ...Ee(),
  ...Ri({
    selectedClass: "v-slide-group-item--active"
  })
}, "VSlideGroup"), fr = K()({
  name: "VSlideGroup",
  props: Ru(),
  emits: {
    "update:modelValue": (e) => !0
  },
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isRtl: a
    } = xt(), {
      displayClasses: l,
      mobile: i
    } = Ti(e), s = Fi(e, e.symbol), r = ae(!1), o = ae(0), c = ae(0), d = ae(0), f = y(() => e.direction === "horizontal"), {
      resizeRef: v,
      contentRect: g
    } = An(), {
      resizeRef: p,
      contentRect: m
    } = An(), h = y(() => s.selected.value.length ? s.items.value.findIndex((A) => A.id === s.selected.value[0]) : -1), k = y(() => s.selected.value.length ? s.items.value.findIndex((A) => A.id === s.selected.value[s.selected.value.length - 1]) : -1);
    if (Re) {
      let A = -1;
      J(() => [s.selected.value, g.value, m.value, f.value], () => {
        cancelAnimationFrame(A), A = requestAnimationFrame(() => {
          if (g.value && m.value) {
            const q = f.value ? "width" : "height";
            c.value = g.value[q], d.value = m.value[q], r.value = c.value + 1 < d.value;
          }
          if (h.value >= 0 && p.value) {
            const q = p.value.children[k.value];
            h.value === 0 || !r.value ? o.value = 0 : e.centerActive ? o.value = tp({
              selectedElement: q,
              containerSize: c.value,
              contentSize: d.value,
              isRtl: a.value,
              isHorizontal: f.value
            }) : r.value && (o.value = dr({
              selectedElement: q,
              containerSize: c.value,
              contentSize: d.value,
              isRtl: a.value,
              currentScrollOffset: o.value,
              isHorizontal: f.value
            }));
          }
        });
      });
    }
    const S = ae(!1);
    let _ = 0, w = 0;
    function P(A) {
      const q = f.value ? "clientX" : "clientY";
      w = (a.value && f.value ? -1 : 1) * o.value, _ = A.touches[0][q], S.value = !0;
    }
    function C(A) {
      if (!r.value)
        return;
      const q = f.value ? "clientX" : "clientY", z = a.value && f.value ? -1 : 1;
      o.value = z * (w + _ - A.touches[0][q]);
    }
    function b(A) {
      const q = d.value - c.value;
      o.value < 0 || !r.value ? o.value = 0 : o.value >= q && (o.value = q), S.value = !1;
    }
    function M() {
      v.value && (v.value[f.value ? "scrollLeft" : "scrollTop"] = 0);
    }
    const x = ae(!1);
    function E(A) {
      if (x.value = !0, !(!r.value || !p.value)) {
        for (const q of A.composedPath())
          for (const z of p.value.children)
            if (z === q) {
              o.value = dr({
                selectedElement: z,
                containerSize: c.value,
                contentSize: d.value,
                isRtl: a.value,
                currentScrollOffset: o.value,
                isHorizontal: f.value
              });
              return;
            }
      }
    }
    function Y(A) {
      x.value = !1;
    }
    function I(A) {
      var q;
      !x.value && !(A.relatedTarget && ((q = p.value) != null && q.contains(A.relatedTarget))) && V();
    }
    function D(A) {
      p.value && (f.value ? A.key === "ArrowRight" ? V(a.value ? "prev" : "next") : A.key === "ArrowLeft" && V(a.value ? "next" : "prev") : A.key === "ArrowDown" ? V("next") : A.key === "ArrowUp" && V("prev"), A.key === "Home" ? V("first") : A.key === "End" && V("last"));
    }
    function V(A) {
      var q, z, le, de, j;
      if (p.value)
        if (!A)
          (q = Xn(p.value)[0]) == null || q.focus();
        else if (A === "next") {
          const re = (z = p.value.querySelector(":focus")) == null ? void 0 : z.nextElementSibling;
          re ? re.focus() : V("first");
        } else if (A === "prev") {
          const re = (le = p.value.querySelector(":focus")) == null ? void 0 : le.previousElementSibling;
          re ? re.focus() : V("last");
        } else
          A === "first" ? (de = p.value.firstElementChild) == null || de.focus() : A === "last" && ((j = p.value.lastElementChild) == null || j.focus());
    }
    function O(A) {
      const q = o.value + (A === "prev" ? -1 : 1) * c.value;
      o.value = lt(q, 0, d.value - c.value);
    }
    const U = y(() => {
      let A = o.value > d.value - c.value ? -(d.value - c.value) + cr(d.value - c.value - o.value) : -o.value;
      o.value <= 0 && (A = cr(-o.value));
      const q = a.value && f.value ? -1 : 1;
      return {
        transform: `translate${f.value ? "X" : "Y"}(${q * A}px)`,
        transition: S.value ? "none" : "",
        willChange: S.value ? "transform" : ""
      };
    }), Z = y(() => ({
      next: s.next,
      prev: s.prev,
      select: s.select,
      isSelected: s.isSelected
    })), T = y(() => {
      switch (e.showArrows) {
        case "always":
          return !0;
        case "desktop":
          return !i.value;
        case !0:
          return r.value || Math.abs(o.value) > 0;
        case "mobile":
          return i.value || r.value || Math.abs(o.value) > 0;
        default:
          return !i.value && (r.value || Math.abs(o.value) > 0);
      }
    }), L = y(() => Math.abs(o.value) > 0), $ = y(() => d.value > Math.abs(o.value) + c.value);
    return Q(() => u(e.tag, {
      class: ["v-slide-group", {
        "v-slide-group--vertical": !f.value,
        "v-slide-group--has-affixes": T.value,
        "v-slide-group--is-overflowing": r.value
      }, l.value, e.class],
      style: e.style,
      tabindex: x.value || s.selected.value.length ? -1 : 0,
      onFocus: I
    }, {
      default: () => {
        var A, q, z;
        return [T.value && u("div", {
          key: "prev",
          class: ["v-slide-group__prev", {
            "v-slide-group__prev--disabled": !L.value
          }],
          onClick: () => L.value && O("prev")
        }, [((A = n.prev) == null ? void 0 : A.call(n, Z.value)) ?? u(Zl, null, {
          default: () => [u(be, {
            icon: a.value ? e.nextIcon : e.prevIcon
          }, null)]
        })]), u("div", {
          key: "container",
          ref: v,
          class: "v-slide-group__container",
          onScroll: M
        }, [u("div", {
          ref: p,
          class: "v-slide-group__content",
          style: U.value,
          onTouchstartPassive: P,
          onTouchmovePassive: C,
          onTouchendPassive: b,
          onFocusin: E,
          onFocusout: Y,
          onKeydown: D
        }, [(q = n.default) == null ? void 0 : q.call(n, Z.value)])]), T.value && u("div", {
          key: "next",
          class: ["v-slide-group__next", {
            "v-slide-group__next--disabled": !$.value
          }],
          onClick: () => $.value && O("next")
        }, [((z = n.next) == null ? void 0 : z.call(n, Z.value)) ?? u(Zl, null, {
          default: () => [u(be, {
            icon: a.value ? e.prevIcon : e.nextIcon
          }, null)]
        })])];
      }
    })), {
      selected: s.selected,
      scrollTo: O,
      scrollOffset: o,
      focus: V
    };
  }
}), Fu = Symbol.for("vuetify:v-chip-group"), ap = R({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: hn
  },
  ...Ru(),
  ...ie(),
  ...Ri({
    selectedClass: "v-chip--selected"
  }),
  ...Ee(),
  ...Le(),
  ...$t({
    variant: "tonal"
  })
}, "VChipGroup");
K()({
  name: "VChipGroup",
  props: ap(),
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
    } = Fi(e, Fu);
    return gn({
      VChip: {
        color: X(e, "color"),
        disabled: X(e, "disabled"),
        filter: X(e, "filter"),
        variant: X(e, "variant")
      }
    }), Q(() => {
      const c = fr.filterProps(e);
      return u(fr, W(c, {
        class: ["v-chip-group", {
          "v-chip-group--column": e.column
        }, a.value, e.class],
        style: e.style
      }), {
        default: () => {
          var d;
          return [(d = n.default) == null ? void 0 : d.call(n, {
            isSelected: l,
            select: i,
            next: s,
            prev: r,
            selected: o.value
          })];
        }
      });
    }), {};
  }
});
const lp = R({
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
  onClick: it(),
  onClickOnce: it(),
  ...yn(),
  ...ie(),
  ...yt(),
  ...Wt(),
  ...Mo(),
  ...Qe(),
  ...cl(),
  ...ua(),
  ...Ee({
    tag: "span"
  }),
  ...Le(),
  ...$t({
    variant: "tonal"
  })
}, "VChip"), ip = K()({
  name: "VChip",
  directives: {
    Ripple: $n
  },
  props: lp(),
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
    } = Nn(e), {
      densityClasses: d
    } = Ct(e), {
      elevationClasses: f
    } = Ut(e), {
      roundedClasses: v
    } = et(e), {
      sizeClasses: g
    } = ca(e), {
      themeClasses: p
    } = Ue(e), m = me(e, "modelValue"), h = Do(e, Fu, !1), k = ul(e, n), S = y(() => e.link !== !1 && k.isLink.value), _ = y(() => !e.disabled && e.link !== !1 && (!!h || e.link || k.isClickable.value)), w = y(() => ({
      "aria-label": i(e.closeLabel),
      onClick(b) {
        b.stopPropagation(), m.value = !1, a("click:close", b);
      }
    }));
    function P(b) {
      var M;
      a("click", b), _.value && ((M = k.navigate) == null || M.call(k, b), h == null || h.toggle());
    }
    function C(b) {
      (b.key === "Enter" || b.key === " ") && (b.preventDefault(), P(b));
    }
    return () => {
      const b = k.isLink.value ? "a" : e.tag, M = !!(e.appendIcon || e.appendAvatar), x = !!(M || l.append), E = !!(l.close || e.closable), Y = !!(l.filter || e.filter) && h, I = !!(e.prependIcon || e.prependAvatar), D = !!(I || l.prepend), V = !h || h.isSelected.value;
      return m.value && Ve(u(b, {
        class: ["v-chip", {
          "v-chip--disabled": e.disabled,
          "v-chip--label": e.label,
          "v-chip--link": _.value,
          "v-chip--filter": Y,
          "v-chip--pill": e.pill
        }, p.value, s.value, V ? r.value : void 0, d.value, f.value, v.value, g.value, c.value, h == null ? void 0 : h.selectedClass.value, e.class],
        style: [V ? o.value : void 0, e.style],
        disabled: e.disabled || void 0,
        draggable: e.draggable,
        href: k.href.value,
        tabindex: _.value ? 0 : void 0,
        onClick: P,
        onKeydown: _.value && !S.value && C
      }, {
        default: () => {
          var O;
          return [Fn(_.value, "v-chip"), Y && u(mo, {
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
            }, l.filter) : u(be, {
              key: "filter-icon",
              icon: e.filterIcon
            }, null)]), [[dt, h.isSelected.value]])]
          }), D && u("div", {
            key: "prepend",
            class: "v-chip__prepend"
          }, [l.prepend ? u(xe, {
            key: "prepend-defaults",
            disabled: !I,
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
          }, l.prepend) : u(pe, null, [e.prependIcon && u(be, {
            key: "prepend-icon",
            icon: e.prependIcon,
            start: !0
          }, null), e.prependAvatar && u(vn, {
            key: "prepend-avatar",
            image: e.prependAvatar,
            start: !0
          }, null)])]), u("div", {
            class: "v-chip__content",
            "data-no-activator": ""
          }, [((O = l.default) == null ? void 0 : O.call(l, {
            isSelected: h == null ? void 0 : h.isSelected.value,
            selectedClass: h == null ? void 0 : h.selectedClass.value,
            select: h == null ? void 0 : h.select,
            toggle: h == null ? void 0 : h.toggle,
            value: h == null ? void 0 : h.value.value,
            disabled: e.disabled
          })) ?? e.text]), x && u("div", {
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
          }, l.append) : u(pe, null, [e.appendIcon && u(be, {
            key: "append-icon",
            end: !0,
            icon: e.appendIcon
          }, null), e.appendAvatar && u(vn, {
            key: "append-avatar",
            end: !0,
            image: e.appendAvatar
          }, null)])]), E && u("button", W({
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
          }, l.close) : u(be, {
            key: "close-icon",
            icon: e.closeIcon,
            size: "x-small"
          }, null)])];
        }
      }), [[gt("ripple"), _.value && e.ripple, null]]);
    };
  }
});
const ui = Symbol.for("vuetify:list");
function Nu() {
  const e = Te(ui, {
    hasPrepend: ae(!1),
    updateHasPrepend: () => null
  }), t = {
    hasPrepend: ae(!1),
    updateHasPrepend: (n) => {
      n && (t.hasPrepend.value = n);
    }
  };
  return Ge(ui, t), e;
}
function Bu() {
  return Te(ui, null);
}
const sp = {
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
}, Yu = {
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
}, rp = {
  open: Yu.open,
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
}, us = (e) => {
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
}, $u = (e) => {
  const t = us(e);
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
}, op = (e) => {
  const t = us(e);
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
}, up = (e) => {
  const t = $u(e);
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
}, cp = (e) => {
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
        const f = s.get(d), v = f.every((p) => i.get(p) === "on"), g = f.every((p) => !i.has(p) || i.get(p) === "off");
        i.set(d, v ? "on" : g ? "off" : "indeterminate"), d = r.get(d);
      }
      return e && !l && Array.from(i.entries()).reduce((v, g) => {
        let [p, m] = g;
        return m === "on" ? [...v, p] : v;
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
}, sa = Symbol.for("vuetify:nested"), Wu = {
  id: ae(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: B(/* @__PURE__ */ new Map()),
    children: B(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    select: () => null,
    opened: B(/* @__PURE__ */ new Set()),
    selected: B(/* @__PURE__ */ new Map()),
    selectedValues: B([])
  }
}, dp = R({
  selectStrategy: [String, Function],
  openStrategy: [String, Object],
  opened: Array,
  selected: Array,
  mandatory: Boolean
}, "nested"), fp = (e) => {
  let t = !1;
  const n = B(/* @__PURE__ */ new Map()), a = B(/* @__PURE__ */ new Map()), l = me(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), i = y(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return up(e.mandatory);
      case "leaf":
        return op(e.mandatory);
      case "independent":
        return us(e.mandatory);
      case "single-independent":
        return $u(e.mandatory);
      case "classic":
      default:
        return cp(e.mandatory);
    }
  }), s = y(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return rp;
      case "single":
        return sp;
      case "multiple":
      default:
        return Yu;
    }
  }), r = me(e, "selected", e.selected, (f) => i.value.in(f, n.value, a.value), (f) => i.value.out(f, n.value, a.value));
  Ae(() => {
    t = !0;
  });
  function o(f) {
    const v = [];
    let g = f;
    for (; g != null; )
      v.unshift(g), g = a.value.get(g);
    return v;
  }
  const c = Ne("nested"), d = {
    id: ae(),
    root: {
      opened: l,
      selected: r,
      selectedValues: y(() => {
        const f = [];
        for (const [v, g] of r.value.entries())
          g === "on" && f.push(v);
        return f;
      }),
      register: (f, v, g) => {
        v && f !== v && a.value.set(f, v), g && n.value.set(f, []), v != null && n.value.set(v, [...n.value.get(v) || [], f]);
      },
      unregister: (f) => {
        if (t)
          return;
        n.value.delete(f);
        const v = a.value.get(f);
        if (v) {
          const g = n.value.get(v) ?? [];
          n.value.set(v, g.filter((p) => p !== f));
        }
        a.value.delete(f), l.value.delete(f);
      },
      open: (f, v, g) => {
        c.emit("click:open", {
          id: f,
          value: v,
          path: o(f),
          event: g
        });
        const p = s.value.open({
          id: f,
          value: v,
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: g
        });
        p && (l.value = p);
      },
      openOnSelect: (f, v, g) => {
        const p = s.value.select({
          id: f,
          value: v,
          selected: new Map(r.value),
          opened: new Set(l.value),
          children: n.value,
          parents: a.value,
          event: g
        });
        p && (l.value = p);
      },
      select: (f, v, g) => {
        c.emit("click:select", {
          id: f,
          value: v,
          path: o(f),
          event: g
        });
        const p = i.value.select({
          id: f,
          value: v,
          selected: new Map(r.value),
          children: n.value,
          parents: a.value,
          event: g
        });
        p && (r.value = p), d.root.openOnSelect(f, v, g);
      },
      children: n,
      parents: a
    }
  };
  return Ge(sa, d), d.root;
}, Uu = (e, t) => {
  const n = Te(sa, Wu), a = Symbol(rt()), l = y(() => e.value !== void 0 ? e.value : a), i = {
    ...n,
    id: l,
    open: (s, r) => n.root.open(l.value, s, r),
    openOnSelect: (s, r) => n.root.openOnSelect(l.value, s, r),
    isOpen: y(() => n.root.opened.value.has(l.value)),
    parent: y(() => n.root.parents.value.get(l.value)),
    select: (s, r) => n.root.select(l.value, s, r),
    isSelected: y(() => n.root.selected.value.get(tn(l.value)) === "on"),
    isIndeterminate: y(() => n.root.selected.value.get(l.value) === "indeterminate"),
    isLeaf: y(() => !n.root.children.value.get(l.value)),
    isGroupActivator: n.isGroupActivator
  };
  return !n.isGroupActivator && n.root.register(l.value, n.id.value, t), Ae(() => {
    !n.isGroupActivator && n.root.unregister(l.value);
  }), t && Ge(sa, i), i;
}, vp = () => {
  const e = Te(sa, Wu);
  Ge(sa, {
    ...e,
    isGroupActivator: !0
  });
};
function mp() {
  const e = ae(!1);
  return We(() => {
    window.requestAnimationFrame(() => {
      e.value = !0;
    });
  }), {
    ssrBootStyles: y(() => e.value ? void 0 : {
      transition: "none !important"
    }),
    isBooted: mi(e)
  };
}
const hp = St({
  name: "VListGroupActivator",
  setup(e, t) {
    let {
      slots: n
    } = t;
    return vp(), () => {
      var a;
      return (a = n.default) == null ? void 0 : a.call(n);
    };
  }
}), gp = R({
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
  ...Ee()
}, "VListGroup"), vr = K()({
  name: "VListGroup",
  props: gp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      isOpen: a,
      open: l,
      id: i
    } = Uu(X(e, "value"), !0), s = y(() => `v-list-group--id-${String(i.value)}`), r = Bu(), {
      isBooted: o
    } = mp();
    function c(g) {
      l(!a.value, g);
    }
    const d = y(() => ({
      onClick: c,
      class: "v-list-group__header",
      id: s.value
    })), f = y(() => a.value ? e.collapseIcon : e.expandIcon), v = y(() => ({
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
    return Q(() => u(e.tag, {
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
        default: () => [u(hp, null, {
          default: () => [n.activator({
            props: d.value,
            isOpen: a.value
          })]
        })]
      }), u(Tt, {
        transition: {
          component: Id
        },
        disabled: !o.value
      }, {
        default: () => {
          var g;
          return [Ve(u("div", {
            class: "v-list-group__items",
            role: "group",
            "aria-labelledby": s.value
          }, [(g = n.default) == null ? void 0 : g.call(n)]), [[dt, a.value]])];
        }
      })]
    })), {};
  }
});
const yp = nn("v-list-item-subtitle"), pp = nn("v-list-item-title"), kp = R({
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
  onClick: it(),
  onClickOnce: it(),
  ...yn(),
  ...ie(),
  ...yt(),
  ...Bt(),
  ...Wt(),
  ...Qe(),
  ...cl(),
  ...Ee(),
  ...Le(),
  ...$t({
    variant: "text"
  })
}, "VListItem"), el = K()({
  name: "VListItem",
  directives: {
    Ripple: $n
  },
  props: kp(),
  emits: {
    click: (e) => !0
  },
  setup(e, t) {
    let {
      attrs: n,
      slots: a,
      emit: l
    } = t;
    const i = ul(e, n), s = y(() => e.value === void 0 ? i.href.value : e.value), {
      select: r,
      isSelected: o,
      isIndeterminate: c,
      isGroupActivator: d,
      root: f,
      parent: v,
      openOnSelect: g
    } = Uu(s, !1), p = Bu(), m = y(() => {
      var T;
      return e.active !== !1 && (e.active || ((T = i.isActive) == null ? void 0 : T.value) || o.value);
    }), h = y(() => e.link !== !1 && i.isLink.value), k = y(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!p)), S = y(() => e.rounded || e.nav), _ = y(() => e.color ?? e.activeColor), w = y(() => ({
      color: m.value ? _.value ?? e.baseColor : e.baseColor,
      variant: e.variant
    }));
    J(() => {
      var T;
      return (T = i.isActive) == null ? void 0 : T.value;
    }, (T) => {
      T && v.value != null && f.open(v.value, !0), T && g(T);
    }, {
      immediate: !0
    });
    const {
      themeClasses: P
    } = Ue(e), {
      borderClasses: C
    } = pn(e), {
      colorClasses: b,
      colorStyles: M,
      variantClasses: x
    } = Nn(w), {
      densityClasses: E
    } = Ct(e), {
      dimensionStyles: Y
    } = Yt(e), {
      elevationClasses: I
    } = Ut(e), {
      roundedClasses: D
    } = et(S), V = y(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), O = y(() => ({
      isActive: m.value,
      select: r,
      isSelected: o.value,
      isIndeterminate: c.value
    }));
    function U(T) {
      var L;
      l("click", T), !(d || !k.value) && ((L = i.navigate) == null || L.call(i, T), e.value != null && r(!o.value, T));
    }
    function Z(T) {
      (T.key === "Enter" || T.key === " ") && (T.preventDefault(), U(T));
    }
    return Q(() => {
      const T = h.value ? "a" : e.tag, L = a.title || e.title != null, $ = a.subtitle || e.subtitle != null, A = !!(e.appendAvatar || e.appendIcon), q = !!(A || a.append), z = !!(e.prependAvatar || e.prependIcon), le = !!(z || a.prepend);
      return p == null || p.updateHasPrepend(le), e.activeColor && Lc("active-color", ["color", "base-color"]), Ve(u(T, {
        class: ["v-list-item", {
          "v-list-item--active": m.value,
          "v-list-item--disabled": e.disabled,
          "v-list-item--link": k.value,
          "v-list-item--nav": e.nav,
          "v-list-item--prepend": !le && (p == null ? void 0 : p.hasPrepend.value),
          "v-list-item--slim": e.slim,
          [`${e.activeClass}`]: e.activeClass && m.value
        }, P.value, C.value, b.value, E.value, I.value, V.value, D.value, x.value, e.class],
        style: [M.value, Y.value, e.style],
        href: i.href.value,
        tabindex: k.value ? p ? -2 : 0 : void 0,
        onClick: U,
        onKeydown: k.value && !h.value && Z
      }, {
        default: () => {
          var de;
          return [Fn(k.value || m.value, "v-list-item"), le && u("div", {
            key: "prepend",
            class: "v-list-item__prepend"
          }, [a.prepend ? u(xe, {
            key: "prepend-defaults",
            disabled: !z,
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
              var j;
              return [(j = a.prepend) == null ? void 0 : j.call(a, O.value)];
            }
          }) : u(pe, null, [e.prependAvatar && u(vn, {
            key: "prepend-avatar",
            density: e.density,
            image: e.prependAvatar
          }, null), e.prependIcon && u(be, {
            key: "prepend-icon",
            density: e.density,
            icon: e.prependIcon
          }, null)]), u("div", {
            class: "v-list-item__spacer"
          }, null)]), u("div", {
            class: "v-list-item__content",
            "data-no-activator": ""
          }, [L && u(pp, {
            key: "title"
          }, {
            default: () => {
              var j;
              return [((j = a.title) == null ? void 0 : j.call(a, {
                title: e.title
              })) ?? e.title];
            }
          }), $ && u(yp, {
            key: "subtitle"
          }, {
            default: () => {
              var j;
              return [((j = a.subtitle) == null ? void 0 : j.call(a, {
                subtitle: e.subtitle
              })) ?? e.subtitle];
            }
          }), (de = a.default) == null ? void 0 : de.call(a, O.value)]), q && u("div", {
            key: "append",
            class: "v-list-item__append"
          }, [a.append ? u(xe, {
            key: "append-defaults",
            disabled: !A,
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
              var j;
              return [(j = a.append) == null ? void 0 : j.call(a, O.value)];
            }
          }) : u(pe, null, [e.appendIcon && u(be, {
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
}), bp = R({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...ie(),
  ...Ee()
}, "VListSubheader"), _p = K()({
  name: "VListSubheader",
  props: bp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const {
      textColorClasses: a,
      textColorStyles: l
    } = vt(X(e, "color"));
    return Q(() => {
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
const Sp = R({
  color: String,
  inset: Boolean,
  length: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...ie(),
  ...Le()
}, "VDivider"), wp = K()({
  name: "VDivider",
  props: Sp(),
  setup(e, t) {
    let {
      attrs: n
    } = t;
    const {
      themeClasses: a
    } = Ue(e), {
      textColorClasses: l,
      textColorStyles: i
    } = vt(X(e, "color")), s = y(() => {
      const r = {};
      return e.length && (r[e.vertical ? "maxHeight" : "maxWidth"] = te(e.length)), e.thickness && (r[e.vertical ? "borderRightWidth" : "borderTopWidth"] = te(e.thickness)), r;
    });
    return Q(() => u("hr", {
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
}), Cp = R({
  items: Array,
  returnObject: Boolean
}, "VListChildren"), Hu = K()({
  name: "VListChildren",
  props: Cp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Nu(), () => {
      var a, l;
      return ((a = n.default) == null ? void 0 : a.call(n)) ?? ((l = e.items) == null ? void 0 : l.map((i) => {
        var v, g;
        let {
          children: s,
          props: r,
          type: o,
          raw: c
        } = i;
        if (o === "divider")
          return ((v = n.divider) == null ? void 0 : v.call(n, {
            props: r
          })) ?? u(wp, r, null);
        if (o === "subheader")
          return ((g = n.subheader) == null ? void 0 : g.call(n, {
            props: r
          })) ?? u(_p, r, null);
        const d = {
          subtitle: n.subtitle ? (p) => {
            var m;
            return (m = n.subtitle) == null ? void 0 : m.call(n, {
              ...p,
              item: c
            });
          } : void 0,
          prepend: n.prepend ? (p) => {
            var m;
            return (m = n.prepend) == null ? void 0 : m.call(n, {
              ...p,
              item: c
            });
          } : void 0,
          append: n.append ? (p) => {
            var m;
            return (m = n.append) == null ? void 0 : m.call(n, {
              ...p,
              item: c
            });
          } : void 0,
          title: n.title ? (p) => {
            var m;
            return (m = n.title) == null ? void 0 : m.call(n, {
              ...p,
              item: c
            });
          } : void 0
        }, f = vr.filterProps(r);
        return s ? u(vr, W({
          value: r == null ? void 0 : r.value
        }, f), {
          activator: (p) => {
            let {
              props: m
            } = p;
            const h = {
              ...r,
              ...m,
              value: e.returnObject ? c : r.value
            };
            return n.header ? n.header({
              props: h
            }) : u(el, h, d);
          },
          default: () => u(Hu, {
            items: s
          }, n)
        }) : n.item ? n.item({
          props: r
        }) : u(el, W(r, {
          value: e.returnObject ? c : r.value
        }), d);
      }));
    };
  }
}), zu = R({
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
function ci(e, t) {
  const n = Ot(t, e.itemTitle, t), a = Ot(t, e.itemValue, n), l = Ot(t, e.itemChildren), i = e.itemProps === !0 ? typeof t == "object" && t != null && !Array.isArray(t) ? "children" in t ? Je(t, ["children"]) : t : void 0 : Ot(t, e.itemProps), s = {
    title: n,
    value: a,
    ...i
  };
  return {
    title: String(s.title ?? ""),
    value: s.value,
    props: s,
    children: Array.isArray(l) ? ju(e, l) : void 0,
    raw: t
  };
}
function ju(e, t) {
  const n = [];
  for (const a of t)
    n.push(ci(e, a));
  return n;
}
function xp(e) {
  const t = y(() => ju(e, e.items)), n = y(() => t.value.some((i) => i.value === null));
  function a(i) {
    return n.value || (i = i.filter((s) => s !== null)), i.map((s) => e.returnObject && typeof s == "string" ? ci(e, s) : t.value.find((r) => e.valueComparator(s, r.value)) || ci(e, s));
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
function Vp(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Pp(e, t) {
  const n = Ot(t, e.itemType, "item"), a = Vp(t) ? t : Ot(t, e.itemTitle), l = Ot(t, e.itemValue, void 0), i = Ot(t, e.itemChildren), s = e.itemProps === !0 ? Je(t, ["children"]) : Ot(t, e.itemProps), r = {
    title: a,
    value: l,
    ...s
  };
  return {
    type: n,
    title: r.title,
    value: r.value,
    props: r,
    children: n === "item" && i ? Gu(e, i) : void 0,
    raw: t
  };
}
function Gu(e, t) {
  const n = [];
  for (const a of t)
    n.push(Pp(e, a));
  return n;
}
function Mp(e) {
  return {
    items: y(() => Gu(e, e.items))
  };
}
const Dp = R({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  ...dp({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...yn(),
  ...ie(),
  ...yt(),
  ...Bt(),
  ...Wt(),
  itemType: {
    type: String,
    default: "type"
  },
  ...zu(),
  ...Qe(),
  ...Ee(),
  ...Le(),
  ...$t({
    variant: "text"
  })
}, "VList"), Ip = K()({
  name: "VList",
  props: Dp(),
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
    } = Mp(e), {
      themeClasses: l
    } = Ue(e), {
      backgroundColorClasses: i,
      backgroundColorStyles: s
    } = st(X(e, "bgColor")), {
      borderClasses: r
    } = pn(e), {
      densityClasses: o
    } = Ct(e), {
      dimensionStyles: c
    } = Yt(e), {
      elevationClasses: d
    } = Ut(e), {
      roundedClasses: f
    } = et(e), {
      open: v,
      select: g
    } = fp(e), p = y(() => e.lines ? `v-list--${e.lines}-line` : void 0), m = X(e, "activeColor"), h = X(e, "baseColor"), k = X(e, "color");
    Nu(), gn({
      VListGroup: {
        activeColor: m,
        baseColor: h,
        color: k,
        expandIcon: X(e, "expandIcon"),
        collapseIcon: X(e, "collapseIcon")
      },
      VListItem: {
        activeClass: X(e, "activeClass"),
        activeColor: m,
        baseColor: h,
        color: k,
        density: X(e, "density"),
        disabled: X(e, "disabled"),
        lines: X(e, "lines"),
        nav: X(e, "nav"),
        slim: X(e, "slim"),
        variant: X(e, "variant")
      }
    });
    const S = ae(!1), _ = B();
    function w(E) {
      S.value = !0;
    }
    function P(E) {
      S.value = !1;
    }
    function C(E) {
      var Y;
      !S.value && !(E.relatedTarget && ((Y = _.value) != null && Y.contains(E.relatedTarget))) && x();
    }
    function b(E) {
      if (_.value) {
        if (E.key === "ArrowDown")
          x("next");
        else if (E.key === "ArrowUp")
          x("prev");
        else if (E.key === "Home")
          x("first");
        else if (E.key === "End")
          x("last");
        else
          return;
        E.preventDefault();
      }
    }
    function M(E) {
      S.value = !0;
    }
    function x(E) {
      if (_.value)
        return Wa(_.value, E);
    }
    return Q(() => u(e.tag, {
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
      onFocusout: P,
      onFocus: C,
      onKeydown: b,
      onMousedown: M
    }, {
      default: () => [u(Hu, {
        items: a.value,
        returnObject: e.returnObject
      }, n)]
    })), {
      open: v,
      select: g,
      focus: x
    };
  }
});
const Op = R({
  active: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...ie(),
  ...da({
    transition: {
      component: vo
    }
  })
}, "VCounter"), Tp = K()({
  name: "VCounter",
  functional: !0,
  props: Op(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = y(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
    return Q(() => u(Tt, {
      transition: e.transition
    }, {
      default: () => [Ve(u("div", {
        class: ["v-counter", e.class],
        style: e.style
      }, [n.default ? n.default({
        counter: a.value,
        max: e.max,
        value: e.value
      }) : a.value]), [[dt, e.active]])]
    })), {};
  }
});
const Ap = R({
  floating: Boolean,
  ...ie()
}, "VFieldLabel"), Ta = K()({
  name: "VFieldLabel",
  props: Ap(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    return Q(() => u(Di, {
      class: ["v-field-label", {
        "v-field-label--floating": e.floating
      }, e.class],
      style: e.style,
      "aria-hidden": e.floating || void 0
    }, n)), {};
  }
}), Ep = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], qu = R({
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
    validator: (e) => Ep.includes(e)
  },
  "onClick:clear": it(),
  "onClick:appendInner": it(),
  "onClick:prependInner": it(),
  ...ie(),
  ...Pi(),
  ...Qe(),
  ...Le()
}, "VField"), Ku = K()({
  name: "VField",
  inheritAttrs: !1,
  props: {
    id: String,
    ...Oi(),
    ...qu()
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
    } = sl(e), {
      focusClasses: r,
      isFocused: o,
      focus: c,
      blur: d
    } = ha(e), {
      InputIcon: f
    } = oo(e), {
      roundedClasses: v
    } = et(e), {
      rtlClasses: g
    } = xt(), p = y(() => e.dirty || e.active), m = y(() => !e.singleLine && !!(e.label || l.label)), h = rt(), k = y(() => e.id || `input-${h}`), S = y(() => `${k.value}-messages`), _ = B(), w = B(), P = B(), C = y(() => ["plain", "underlined"].includes(e.variant)), {
      backgroundColorClasses: b,
      backgroundColorStyles: M
    } = st(X(e, "bgColor")), {
      textColorClasses: x,
      textColorStyles: E
    } = vt(y(() => e.error || e.disabled ? void 0 : p.value && o.value ? e.color : e.baseColor));
    J(p, (D) => {
      if (m.value) {
        const V = _.value.$el, O = w.value.$el;
        requestAnimationFrame(() => {
          const U = bi(V), Z = O.getBoundingClientRect(), T = Z.x - U.x, L = Z.y - U.y - (U.height / 2 - Z.height / 2), $ = Z.width / 0.75, A = Math.abs($ - U.width) > 1 ? {
            maxWidth: te($)
          } : void 0, q = getComputedStyle(V), z = getComputedStyle(O), le = parseFloat(q.transitionDuration) * 1e3 || 150, de = parseFloat(z.getPropertyValue("--v-field-label-scale")), j = z.getPropertyValue("color");
          V.style.visibility = "visible", O.style.visibility = "hidden", Vn(V, {
            transform: `translate(${T}px, ${L}px) scale(${de})`,
            color: j,
            ...A
          }, {
            duration: le,
            easing: Ha,
            direction: D ? "normal" : "reverse"
          }).finished.then(() => {
            V.style.removeProperty("visibility"), O.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const Y = y(() => ({
      isActive: p,
      isFocused: o,
      controlRef: P,
      blur: d,
      focus: c
    }));
    function I(D) {
      D.target !== document.activeElement && D.preventDefault();
    }
    return Q(() => {
      var T, L, $;
      const D = e.variant === "outlined", V = l["prepend-inner"] || e.prependInnerIcon, O = !!(e.clearable || l.clear), U = !!(l["append-inner"] || e.appendInnerIcon || O), Z = () => l.label ? l.label({
        ...Y.value,
        label: e.label,
        props: {
          for: k.value
        }
      }) : e.label;
      return u("div", W({
        class: ["v-field", {
          "v-field--active": p.value,
          "v-field--appended": U,
          "v-field--center-affix": e.centerAffix ?? !C.value,
          "v-field--disabled": e.disabled,
          "v-field--dirty": e.dirty,
          "v-field--error": e.error,
          "v-field--flat": e.flat,
          "v-field--has-background": !!e.bgColor,
          "v-field--persistent-clear": e.persistentClear,
          "v-field--prepended": V,
          "v-field--reverse": e.reverse,
          "v-field--single-line": e.singleLine,
          "v-field--no-label": !Z(),
          [`v-field--variant-${e.variant}`]: !0
        }, i.value, b.value, r.value, s.value, v.value, g.value, e.class],
        style: [M.value, e.style],
        onClick: I
      }, n), [u("div", {
        class: "v-field__overlay"
      }, null), u(Mi, {
        name: "v-field",
        active: !!e.loading,
        color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color
      }, {
        default: l.loader
      }), V && u("div", {
        key: "prepend",
        class: "v-field__prepend-inner"
      }, [e.prependInnerIcon && u(f, {
        key: "prepend-icon",
        name: "prependInner"
      }, null), (T = l["prepend-inner"]) == null ? void 0 : T.call(l, Y.value)]), u("div", {
        class: "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && u(Ta, {
        key: "floating-label",
        ref: w,
        class: [x.value],
        floating: !0,
        for: k.value,
        style: E.value
      }, {
        default: () => [Z()]
      }), u(Ta, {
        ref: _,
        for: k.value
      }, {
        default: () => [Z()]
      }), (L = l.default) == null ? void 0 : L.call(l, {
        ...Y.value,
        props: {
          id: k.value,
          class: "v-field__input",
          "aria-describedby": S.value
        },
        focus: c,
        blur: d
      })]), O && u(mo, {
        key: "clear"
      }, {
        default: () => [Ve(u("div", {
          class: "v-field__clearable",
          onMousedown: (A) => {
            A.preventDefault(), A.stopPropagation();
          }
        }, [l.clear ? l.clear() : u(f, {
          name: "clear"
        }, null)]), [[dt, e.dirty]])]
      }), U && u("div", {
        key: "append",
        class: "v-field__append-inner"
      }, [($ = l["append-inner"]) == null ? void 0 : $.call(l, Y.value), e.appendInnerIcon && u(f, {
        key: "append-icon",
        name: "appendInner"
      }, null)]), u("div", {
        class: ["v-field__outline", x.value],
        style: E.value
      }, [D && u(pe, null, [u("div", {
        class: "v-field__outline__start"
      }, null), m.value && u("div", {
        class: "v-field__outline__notch"
      }, [u(Ta, {
        ref: w,
        floating: !0,
        for: k.value
      }, {
        default: () => [Z()]
      })]), u("div", {
        class: "v-field__outline__end"
      }, null)]), C.value && m.value && u(Ta, {
        ref: w,
        floating: !0,
        for: k.value
      }, {
        default: () => [Z()]
      })])]);
    }), {
      controlRef: P
    };
  }
});
function Lp(e) {
  const t = Object.keys(Ku.props).filter((n) => !pi(n) && n !== "class" && n !== "style");
  return Pr(e, t);
}
const Rp = ["color", "file", "time", "date", "datetime-local", "week", "month"], Zu = R({
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
  ...ga(),
  ...qu()
}, "VTextField"), tl = K()({
  name: "VTextField",
  directives: {
    Intersect: Gr
  },
  inheritAttrs: !1,
  props: Zu(),
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
    const i = me(e, "modelValue"), {
      isFocused: s,
      focus: r,
      blur: o
    } = ha(e), c = y(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), d = y(() => {
      if (n.maxlength)
        return n.maxlength;
      if (!(!e.counter || typeof e.counter != "number" && typeof e.counter != "string"))
        return e.counter;
    }), f = y(() => ["plain", "underlined"].includes(e.variant));
    function v(C, b) {
      var M, x;
      !e.autofocus || !C || (x = (M = b[0].target) == null ? void 0 : M.focus) == null || x.call(M);
    }
    const g = B(), p = B(), m = B(), h = y(() => Rp.includes(e.type) || e.persistentPlaceholder || s.value || e.active);
    function k() {
      var C;
      m.value !== document.activeElement && ((C = m.value) == null || C.focus()), s.value || r();
    }
    function S(C) {
      a("mousedown:control", C), C.target !== m.value && (k(), C.preventDefault());
    }
    function _(C) {
      k(), a("click:control", C);
    }
    function w(C) {
      C.stopPropagation(), k(), He(() => {
        i.value = null, Sc(e["onClick:clear"], C);
      });
    }
    function P(C) {
      var M;
      const b = C.target;
      if (i.value = b.value, (M = e.modelModifiers) != null && M.trim && ["text", "search", "password", "tel", "url"].includes(e.type)) {
        const x = [b.selectionStart, b.selectionEnd];
        He(() => {
          b.selectionStart = x[0], b.selectionEnd = x[1];
        });
      }
    }
    return Q(() => {
      const C = !!(l.counter || e.counter !== !1 && e.counter != null), b = !!(C || l.details), [M, x] = al(n), {
        modelValue: E,
        ...Y
      } = en.filterProps(e), I = Lp(e);
      return u(en, W({
        ref: g,
        modelValue: i.value,
        "onUpdate:modelValue": (D) => i.value = D,
        class: ["v-text-field", {
          "v-text-field--prefixed": e.prefix,
          "v-text-field--suffixed": e.suffix,
          "v-input--plain-underlined": f.value
        }, e.class],
        style: e.style
      }, M, Y, {
        centerAffix: !f.value,
        focused: s.value
      }), {
        ...l,
        default: (D) => {
          let {
            id: V,
            isDisabled: O,
            isDirty: U,
            isReadonly: Z,
            isValid: T
          } = D;
          return u(Ku, W({
            ref: p,
            onMousedown: S,
            onClick: _,
            "onClick:clear": w,
            "onClick:prependInner": e["onClick:prependInner"],
            "onClick:appendInner": e["onClick:appendInner"],
            role: e.role
          }, I, {
            id: V.value,
            active: h.value || U.value,
            dirty: U.value || e.dirty,
            disabled: O.value,
            focused: s.value,
            error: T.value === !1
          }), {
            ...l,
            default: (L) => {
              let {
                props: {
                  class: $,
                  ...A
                }
              } = L;
              const q = Ve(u("input", W({
                ref: m,
                value: i.value,
                onInput: P,
                autofocus: e.autofocus,
                readonly: Z.value,
                disabled: O.value,
                name: e.name,
                placeholder: e.placeholder,
                size: 1,
                type: e.type,
                onFocus: k,
                onBlur: o
              }, A, x), null), [[gt("intersect"), {
                handler: v
              }, null, {
                once: !0
              }]]);
              return u(pe, null, [e.prefix && u("span", {
                class: "v-text-field__prefix"
              }, [u("span", {
                class: "v-text-field__prefix__text"
              }, [e.prefix])]), l.default ? u("div", {
                class: $,
                "data-no-activator": ""
              }, [l.default(), q]) : ic(q, {
                class: $
              }), e.suffix && u("span", {
                class: "v-text-field__suffix"
              }, [u("span", {
                class: "v-text-field__suffix__text"
              }, [e.suffix])])]);
            }
          });
        },
        details: b ? (D) => {
          var V;
          return u(pe, null, [(V = l.details) == null ? void 0 : V.call(l, D), C && u(pe, null, [u("span", null, null), u(Tp, {
            active: e.persistentCounter || s.value,
            value: c.value,
            max: d.value
          }, l.counter)])]);
        } : void 0
      });
    }), Wn({}, g, p, m);
  }
});
const Fp = R({
  renderless: Boolean,
  ...ie()
}, "VVirtualScrollItem"), Np = K()({
  name: "VVirtualScrollItem",
  inheritAttrs: !1,
  props: Fp(),
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
    } = An(void 0, "border");
    J(() => {
      var r;
      return (r = s.value) == null ? void 0 : r.height;
    }, (r) => {
      r != null && a("update:height", r);
    }), Q(() => {
      var r, o;
      return e.renderless ? u(pe, null, [(r = l.default) == null ? void 0 : r.call(l, {
        itemRef: i
      })]) : u("div", W({
        ref: i,
        class: ["v-virtual-scroll__item", e.class],
        style: e.style
      }, n), [(o = l.default) == null ? void 0 : o.call(l)]);
    });
  }
}), Bp = -1, Yp = 1, $l = 100, $p = R({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function Wp(e, t) {
  const n = Ti(), a = ae(0);
  je(() => {
    a.value = parseFloat(e.itemHeight || 0);
  });
  const l = ae(0), i = ae(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(e.height) || n.height.value) / (a.value || 16)
  ) || 1), s = ae(0), r = ae(0), o = B(), c = B();
  let d = 0;
  const {
    resizeRef: f,
    contentRect: v
  } = An();
  je(() => {
    f.value = o.value;
  });
  const g = y(() => {
    var L;
    return o.value === document.documentElement ? n.height.value : ((L = v.value) == null ? void 0 : L.height) || parseInt(e.height) || 0;
  }), p = y(() => !!(o.value && c.value && g.value && a.value));
  let m = Array.from({
    length: t.value.length
  }), h = Array.from({
    length: t.value.length
  });
  const k = ae(0);
  let S = -1;
  function _(L) {
    return m[L] || a.value;
  }
  const w = kc(() => {
    const L = performance.now();
    h[0] = 0;
    const $ = t.value.length;
    for (let A = 1; A <= $ - 1; A++)
      h[A] = (h[A - 1] || 0) + _(A - 1);
    k.value = Math.max(k.value, performance.now() - L);
  }, k), P = J(p, (L) => {
    L && (P(), d = c.value.offsetTop, w.immediate(), O(), ~S && He(() => {
      Re && window.requestAnimationFrame(() => {
        Z(S), S = -1;
      });
    }));
  });
  J(g, (L, $) => {
    $ && O();
  }), qe(() => {
    w.clear();
  });
  function C(L, $) {
    const A = m[L], q = a.value;
    a.value = q ? Math.min(a.value, $) : $, (A !== $ || q !== a.value) && (m[L] = $, w());
  }
  function b(L) {
    return L = lt(L, 0, t.value.length - 1), h[L] || 0;
  }
  function M(L) {
    return Up(h, L);
  }
  let x = 0, E = 0, Y = 0;
  function I() {
    if (!o.value || !c.value)
      return;
    const L = o.value.scrollTop, $ = performance.now();
    $ - Y > 500 ? (E = Math.sign(L - x), d = c.value.offsetTop) : E = L - x, x = L, Y = $, O();
  }
  function D() {
    !o.value || !c.value || (E = 0, Y = 0, O());
  }
  let V = -1;
  function O() {
    cancelAnimationFrame(V), V = requestAnimationFrame(U);
  }
  function U() {
    if (!o.value || !g.value)
      return;
    const L = x - d, $ = Math.sign(E), A = Math.max(0, L - $l), q = lt(M(A), 0, t.value.length), z = L + g.value + $l, le = lt(M(z) + 1, q + 1, t.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      ($ !== Bp || q < l.value) && ($ !== Yp || le > i.value)
    ) {
      const de = b(l.value) - b(q), j = b(le) - b(i.value);
      Math.max(de, j) > $l ? (l.value = q, i.value = le) : (q <= 0 && (l.value = q), le >= t.value.length && (i.value = le));
    }
    s.value = b(l.value), r.value = b(t.value.length) - b(i.value);
  }
  function Z(L) {
    const $ = b(L);
    !o.value || L && !$ ? S = L : o.value.scrollTop = $;
  }
  const T = y(() => t.value.slice(l.value, i.value).map((L, $) => ({
    raw: L,
    index: $ + l.value
  })));
  return J(t, () => {
    m = Array.from({
      length: t.value.length
    }), h = Array.from({
      length: t.value.length
    }), w.immediate(), O();
  }, {
    deep: !0
  }), {
    containerRef: o,
    markerRef: c,
    computedItems: T,
    paddingTop: s,
    paddingBottom: r,
    scrollToIndex: Z,
    handleScroll: I,
    handleScrollend: D,
    handleItemResize: C
  };
}
function Up(e, t) {
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
const Hp = R({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...$p(),
  ...ie(),
  ...Bt()
}, "VVirtualScroll"), zp = K()({
  name: "VVirtualScroll",
  props: Hp(),
  setup(e, t) {
    let {
      slots: n
    } = t;
    const a = Ne("VVirtualScroll"), {
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
      computedItems: g
    } = Wp(e, X(e, "items"));
    return mn(() => e.renderless, () => {
      function p() {
        var k, S;
        const h = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1) ? "addEventListener" : "removeEventListener";
        i.value === document.documentElement ? (document[h]("scroll", r, {
          passive: !0
        }), document[h]("scrollend", o)) : ((k = i.value) == null || k[h]("scroll", r, {
          passive: !0
        }), (S = i.value) == null || S[h]("scrollend", o));
      }
      We(() => {
        i.value = Ur(a.vnode.el, !0), p(!0);
      }), qe(p);
    }), Q(() => {
      const p = g.value.map((m) => u(Np, {
        key: m.index,
        renderless: e.renderless,
        "onUpdate:height": (h) => c(m.index, h)
      }, {
        default: (h) => {
          var k;
          return (k = n.default) == null ? void 0 : k.call(n, {
            item: m.raw,
            index: m.index,
            ...h
          });
        }
      }));
      return e.renderless ? u(pe, null, [u("div", {
        ref: s,
        class: "v-virtual-scroll__spacer",
        style: {
          paddingTop: te(f.value)
        }
      }, null), p, u("div", {
        class: "v-virtual-scroll__spacer",
        style: {
          paddingBottom: te(v.value)
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
          paddingTop: te(f.value),
          paddingBottom: te(v.value)
        }
      }, [p])]);
    }), {
      scrollToIndex: d
    };
  }
});
function jp(e, t) {
  const n = ae(!1);
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
        const o = J(n, () => {
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
      for (const g of c)
        if (g.getBoundingClientRect().top >= v) {
          g.focus();
          break;
        }
    } else {
      const v = o.getBoundingClientRect().bottom;
      for (const g of [...c].reverse())
        if (g.getBoundingClientRect().bottom <= v) {
          g.focus();
          break;
        }
    }
  }
  return {
    onListScroll: l,
    onListKeydown: s
  };
}
const Gp = R({
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
  listProps: {
    type: Object
  },
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
  ...zu({
    itemChildren: !1
  })
}, "Select"), qp = R({
  ...Gp(),
  ...Je(Zu({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...da({
    transition: {
      component: Ii
    }
  })
}, "VSelect"), Kp = K()({
  name: "VSelect",
  props: qp(),
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
    } = Yn(), l = B(), i = B(), s = B(), r = me(e, "menu"), o = y({
      get: () => r.value,
      set: (T) => {
        var L;
        r.value && !T && ((L = i.value) != null && L.ΨopenChildren) || (r.value = T);
      }
    }), {
      items: c,
      transformIn: d,
      transformOut: f
    } = xp(e), v = me(e, "modelValue", [], (T) => d(T === null ? [null] : Xe(T)), (T) => {
      const L = f(T);
      return e.multiple ? L : L[0] ?? null;
    }), g = y(() => typeof e.counterValue == "function" ? e.counterValue(v.value) : typeof e.counterValue == "number" ? e.counterValue : v.value.length), p = go(), m = y(() => v.value.map((T) => T.value)), h = ae(!1), k = y(() => o.value ? e.closeText : e.openText);
    let S = "", _;
    const w = y(() => e.hideSelected ? c.value.filter((T) => !v.value.some((L) => L === T)) : c.value), P = y(() => e.hideNoData && !w.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), C = y(() => {
      var T;
      return {
        ...e.menuProps,
        activatorProps: {
          ...((T = e.menuProps) == null ? void 0 : T.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    }), b = B(), {
      onListScroll: M,
      onListKeydown: x
    } = jp(b, l);
    function E(T) {
      e.openOnClear && (o.value = !0);
    }
    function Y() {
      P.value || (o.value = !o.value);
    }
    function I(T) {
      var z, le;
      if (!T.key || e.readonly || p != null && p.isReadonly.value)
        return;
      ["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(T.key) && T.preventDefault(), ["Enter", "ArrowDown", " "].includes(T.key) && (o.value = !0), ["Escape", "Tab"].includes(T.key) && (o.value = !1), T.key === "Home" ? (z = b.value) == null || z.focus("first") : T.key === "End" && ((le = b.value) == null || le.focus("last"));
      const L = 1e3;
      function $(de) {
        const j = de.key.length === 1, re = !de.ctrlKey && !de.metaKey && !de.altKey;
        return j && re;
      }
      if (e.multiple || !$(T))
        return;
      const A = performance.now();
      A - _ > L && (S = ""), S += T.key.toLowerCase(), _ = A;
      const q = c.value.find((de) => de.title.toLowerCase().startsWith(S));
      q !== void 0 && (v.value = [q]);
    }
    function D(T) {
      if (e.multiple) {
        const L = v.value.findIndex(($) => e.valueComparator($.value, T.value));
        if (L === -1)
          v.value = [...v.value, T];
        else {
          const $ = [...v.value];
          $.splice(L, 1), v.value = $;
        }
      } else
        v.value = [T], o.value = !1;
    }
    function V(T) {
      var L;
      (L = b.value) != null && L.$el.contains(T.relatedTarget) || (o.value = !1);
    }
    function O() {
      var T;
      h.value && ((T = l.value) == null || T.focus());
    }
    function U(T) {
      h.value = !0;
    }
    function Z(T) {
      if (T == null)
        v.value = [];
      else if (Ua(l.value, ":autofill") || Ua(l.value, ":-webkit-autofill")) {
        const L = c.value.find(($) => $.title === T);
        L && D(L);
      } else
        l.value && (l.value.value = "");
    }
    return J(o, () => {
      if (!e.hideSelected && o.value && v.value.length) {
        const T = w.value.findIndex((L) => v.value.some(($) => e.valueComparator($.value, L.value)));
        Re && window.requestAnimationFrame(() => {
          var L;
          T >= 0 && ((L = s.value) == null || L.scrollToIndex(T));
        });
      }
    }), J(w, (T, L) => {
      h.value && (!T.length && e.hideNoData && (o.value = !1), !L.length && T.length && (o.value = !0));
    }), Q(() => {
      const T = !!(e.chips || n.chip), L = !!(!e.hideNoData || w.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), $ = v.value.length > 0, A = tl.filterProps(e), q = $ || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
      return u(tl, W({
        ref: l
      }, A, {
        modelValue: v.value.map((z) => z.props.value).join(", "),
        "onUpdate:modelValue": Z,
        focused: h.value,
        "onUpdate:focused": (z) => h.value = z,
        validationValue: v.externalValue,
        counterValue: g.value,
        dirty: $,
        class: ["v-select", {
          "v-select--active-menu": o.value,
          "v-select--chips": !!e.chips,
          [`v-select--${e.multiple ? "multiple" : "single"}`]: !0,
          "v-select--selected": v.value.length,
          "v-select--selection-slot": !!n.selection
        }, e.class],
        style: e.style,
        inputmode: "none",
        placeholder: q,
        "onClick:clear": E,
        "onMousedown:control": Y,
        onBlur: V,
        onKeydown: I,
        "aria-label": a(k.value),
        title: a(k.value)
      }), {
        ...n,
        default: () => u(pe, null, [u(hl, W({
          ref: i,
          modelValue: o.value,
          "onUpdate:modelValue": (z) => o.value = z,
          activator: "parent",
          contentClass: "v-select__content",
          disabled: P.value,
          eager: e.eager,
          maxHeight: 310,
          openOnClick: !1,
          closeOnContentClick: !1,
          transition: e.transition,
          onAfterLeave: O
        }, C.value), {
          default: () => [L && u(Ip, W({
            ref: b,
            selected: m.value,
            selectStrategy: e.multiple ? "independent" : "single-independent",
            onMousedown: (z) => z.preventDefault(),
            onKeydown: x,
            onFocusin: U,
            onScrollPassive: M,
            tabindex: "-1",
            "aria-live": "polite",
            color: e.itemColor ?? e.color
          }, e.listProps), {
            default: () => {
              var z, le, de;
              return [(z = n["prepend-item"]) == null ? void 0 : z.call(n), !w.value.length && !e.hideNoData && (((le = n["no-data"]) == null ? void 0 : le.call(n)) ?? u(el, {
                title: a(e.noDataText)
              }, null)), u(zp, {
                ref: s,
                renderless: !0,
                items: w.value
              }, {
                default: (j) => {
                  var Ca;
                  let {
                    item: re,
                    index: jt,
                    itemRef: Mt
                  } = j;
                  const wa = W(re.props, {
                    ref: Mt,
                    key: jt,
                    onClick: () => D(re)
                  });
                  return ((Ca = n.item) == null ? void 0 : Ca.call(n, {
                    item: re,
                    index: jt,
                    props: wa
                  })) ?? u(el, W(wa, {
                    role: "option"
                  }), {
                    prepend: (Pl) => {
                      let {
                        isSelected: Ml
                      } = Pl;
                      return u(pe, null, [e.multiple && !e.hideSelected ? u(Kl, {
                        key: re.value,
                        modelValue: Ml,
                        ripple: !1,
                        tabindex: "-1"
                      }, null) : void 0, re.props.prependAvatar && u(vn, {
                        image: re.props.prependAvatar
                      }, null), re.props.prependIcon && u(be, {
                        icon: re.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (de = n["append-item"]) == null ? void 0 : de.call(n)];
            }
          })]
        }), v.value.map((z, le) => {
          function de(Mt) {
            Mt.stopPropagation(), Mt.preventDefault(), D(z);
          }
          const j = {
            "onClick:close": de,
            onMousedown(Mt) {
              Mt.preventDefault(), Mt.stopPropagation();
            },
            modelValue: !0,
            "onUpdate:modelValue": void 0
          }, re = T ? !!n.chip : !!n.selection, jt = re ? Tr(T ? n.chip({
            item: z,
            index: le,
            props: j
          }) : n.selection({
            item: z,
            index: le
          })) : void 0;
          if (!(re && !jt))
            return u("div", {
              key: z.value,
              class: "v-select__selection"
            }, [T ? n.chip ? u(xe, {
              key: "chip-defaults",
              defaults: {
                VChip: {
                  closable: e.closableChips,
                  size: "small",
                  text: z.title
                }
              }
            }, {
              default: () => [jt]
            }) : u(ip, W({
              key: "chip",
              closable: e.closableChips,
              size: "small",
              text: z.title,
              disabled: z.props.disabled
            }, j), null) : jt ?? u("span", {
              class: "v-select__selection-text"
            }, [z.title, e.multiple && le < v.value.length - 1 && u("span", {
              class: "v-select__selection-comma"
            }, [De(",")])])]);
        })]),
        "append-inner": function() {
          var j;
          for (var z = arguments.length, le = new Array(z), de = 0; de < z; de++)
            le[de] = arguments[de];
          return u(pe, null, [(j = n["append-inner"]) == null ? void 0 : j.call(n, ...le), e.menuIcon ? u(be, {
            class: "v-select__menu-icon",
            icon: e.menuIcon
          }, null) : void 0]);
        }
      });
    }), Wn({
      isFocused: h,
      menu: o,
      select: D
    }, l);
  }
}), Zp = /* @__PURE__ */ ft("div", { class: "v-picker__header" }, null, -1), Xp = { class: "v-picker__body" }, Jp = /* @__PURE__ */ ft("span", { class: "text-h3" }, ":", -1), Qp = { class: "v-picker__actions" }, ek = /* @__PURE__ */ Fe({
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
    const n = ["AM", "PM"], a = e, l = t, i = B({
      mask: "##",
      eager: !0
    }), s = B("10"), r = B("00"), o = B("AM"), c = y(() => a.mode == Gt.Normal), d = y(() => a.rollingNumbers ? -1 : 0), f = y(() => a.rollingNumbers ? a.mode == Gt.Normal ? 13 : 24 : a.mode == Gt.Normal ? 12 : 23), v = y(() => a.rollingNumbers ? -1 : 0), g = y(() => a.rollingNumbers ? 60 : 59), p = y(() => c.value ? s.value + ":" + r.value + " " + o.value : s.value + ":" + r.value);
    function m() {
      l("update:modelValue", p.value), l("click:save", p.value);
    }
    function h() {
      l("click:cancel", void 0);
    }
    function k() {
      l("update:modelValue", p.value);
    }
    function S() {
      a.closeOnOutsideClick && h();
    }
    const _ = J(o, () => {
      k();
    }), w = J(s, (C) => {
      a.mode == Gt.Normal && (a.rollingNumbers ? C <= 0 ? s.value = 12 : C > 12 && (s.value = 1) : C <= 0 ? s.value = 0 : C > 12 && (s.value = 12)), a.mode == Gt.Military && (a.rollingNumbers ? C < 0 ? s.value = 23 : C > 23 && (s.value = 0) : C < 0 ? s.value = 0 : C > 23 && (s.value = 23)), s.value < 10 && a.padStart && (s.value = s.value.toString().padStart(2, "0")), k();
    }), P = J(r, (C) => {
      a.rollingNumbers && (C < 0 && (r.value = 59), C > 59 && (r.value = 0)), r.value < 10 && a.padStart && (r.value = r.value.toString().padStart(2, "0")), k();
    });
    return Ae(() => {
      _(), w(), P();
    }), We(() => {
      if (!oe(a.modelValue)) {
        if (a.mode == Gt.Normal) {
          const C = a.modelValue.split(" ");
          ["am", "pm"].includes(C[1].toLowerCase()) && (o.value = C[1].toUpperCase());
          const M = C[0].split(":");
          s.value = M[0], r.value = M[1];
        }
        if (a.mode == Gt.Military) {
          const C = a.modelValue.split(":");
          s.value = C[0], r.value = C[1];
        }
      }
    }), (C, b) => {
      const M = Qt("VPickerTitle"), x = gt("maska");
      return Ve((ne(), ue(ta, {
        class: "v-picker v-picker--with-actions",
        width: a.width
      }, {
        default: N(() => [
          u(M, null, {
            default: N(() => [
              De(Ze(a.title), 1)
            ]),
            _: 1
          }),
          Zp,
          ft("div", Xp, [
            u(Be, { justify: "center" }, {
              default: N(() => [
                u(Ce, { cols: "3" }, {
                  default: N(() => [
                    Ve(u(tl, {
                      modelValue: s.value,
                      "onUpdate:modelValue": b[0] || (b[0] = (E) => s.value = E),
                      type: "number",
                      min: d.value,
                      max: f.value
                    }, null, 8, ["modelValue", "min", "max"]), [
                      [x, void 0, i.value]
                    ])
                  ]),
                  _: 1
                }),
                u(Ce, { cols: "1" }, {
                  default: N(() => [
                    Jp
                  ]),
                  _: 1
                }),
                u(Ce, { cols: "3" }, {
                  default: N(() => [
                    Ve(u(tl, {
                      modelValue: r.value,
                      "onUpdate:modelValue": b[1] || (b[1] = (E) => r.value = E),
                      type: "number",
                      min: v.value,
                      max: g.value
                    }, null, 8, ["modelValue", "min", "max"]), [
                      [x, void 0, i.value]
                    ])
                  ]),
                  _: 1
                }),
                c.value ? (ne(), ue(Ce, {
                  key: 0,
                  cols: "4"
                }, {
                  default: N(() => [
                    u(Kp, {
                      modelValue: o.value,
                      "onUpdate:modelValue": b[2] || (b[2] = (E) => o.value = E),
                      items: n
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : Ie("", !0)
              ]),
              _: 1
            })
          ]),
          ft("div", Qp, [
            ft("div", null, [
              u(Ye, {
                rounded: "rounded-md",
                elevation: 0,
                variant: "flat",
                onClick: h
              }, {
                default: N(() => [
                  De(Ze(a.cancelText), 1)
                ]),
                _: 1
              }),
              u(Ye, {
                rounded: "rounded-md",
                elevation: 0,
                variant: "flat",
                onClick: m
              }, {
                default: N(() => [
                  De(Ze(a.okText), 1)
                ]),
                _: 1
              })
            ])
          ])
        ]),
        _: 1
      }, 8, ["width"])), [
        [No, S]
      ]);
    };
  }
}), tk = /* @__PURE__ */ Fe({
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
    const n = e, a = t, l = B(n.textfield), i = B(n.menu), s = B(n.picker), r = B(!1), o = y(() => n.fields ?? []);
    function c(h) {
      l.value.value = h, a("update:modelValue", h);
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
    function g() {
      r.value = !1;
    }
    function p(h) {
      r.value = !1, c(h);
    }
    const m = J(s.value, (h) => {
      c(h.value);
    });
    return Ae(() => {
      m();
    }), We(() => {
      l.value.value = n.modelValue, l.value.isLoading(!1);
    }), (h, k) => (ne(), ue(Be, { "no-gutters": "" }, {
      default: N(() => {
        var S;
        return [
          u(hl, W({
            modelValue: r.value,
            "onUpdate:modelValue": k[1] || (k[1] = (_) => r.value = _)
          }, (S = i.value) == null ? void 0 : S.props()), {
            activator: N(({ props: _ }) => {
              var w;
              return [
                u(ya, W({ field: l.value }, { ..._, ...(w = l.value) == null ? void 0 : w.props() }, {
                  fields: o.value,
                  onUpdated: c,
                  onValidated: d,
                  onInvalidated: f,
                  "onClick:prependInner": v,
                  "onClick:appendInner": v
                }), null, 16, ["field", "fields"])
              ];
            }),
            default: N(() => [
              u(ma, {
                class: "pa-0",
                width: s.value.width,
                "max-width": s.value.width
              }, {
                default: N(() => [
                  u(Bn, {
                    class: "pa-0",
                    width: s.value.width,
                    "max-width": s.value.width
                  }, {
                    default: N(() => {
                      var _;
                      return [
                        u(ek, W({
                          modelValue: s.value.value,
                          "onUpdate:modelValue": k[0] || (k[0] = (w) => s.value.value = w)
                        }, (_ = s.value) == null ? void 0 : _.props(), {
                          "onClick:save": p,
                          "onClick:cancel": g
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
}), nk = R({
  ...ie(),
  ...Ad()
}, "VForm"), mr = K()({
  name: "VForm",
  props: nk(),
  emits: {
    "update:modelValue": (e) => !0,
    submit: (e) => !0
  },
  setup(e, t) {
    let {
      slots: n,
      emit: a
    } = t;
    const l = Ed(e), i = B();
    function s(o) {
      o.preventDefault(), l.reset();
    }
    function r(o) {
      const c = o, d = l.validate();
      c.then = d.then.bind(d), c.catch = d.catch.bind(d), c.finally = d.finally.bind(d), a("submit", c), c.defaultPrevented || d.then((f) => {
        var g;
        let {
          valid: v
        } = f;
        v && ((g = i.value) == null || g.submit());
      }), c.preventDefault();
    }
    return Q(() => {
      var o;
      return u("form", {
        ref: i,
        class: ["v-form", e.class],
        style: e.style,
        novalidate: !0,
        onReset: s,
        onSubmit: r
      }, [(o = n.default) == null ? void 0 : o.call(n, l)]);
    }), Wn(l, i);
  }
}), ak = /* @__PURE__ */ Fe({
  __name: "InputFormLoader",
  props: {
    form: {
      type: wn,
      required: !0,
      validator: (e) => mc(e)
    }
  },
  emits: ["update:form", ...Object.values(ve)],
  setup(e, { emit: t }) {
    const n = e, a = t, l = B(n.form), { recaptchaIsLoaded: i, hasRecaptcha: s, loadRecaptcha: r, getToken: o } = xr(
      l.value.google_recaptcha_site_key
    ), c = B(mr), d = y(() => {
      var O, U;
      return (U = (O = l.value) == null ? void 0 : O.fields) == null ? void 0 : U.filter((Z) => Z.isParentPopulated(_(Z.depends_on ?? "")));
    }), f = y(() => {
      var O, U;
      return Array.isArray((O = l.value) == null ? void 0 : O.fields) ? (U = l.value) == null ? void 0 : U.fields : [];
    }), v = y(() => {
      var O, U;
      return ((U = (O = l.value) == null ? void 0 : O.buttons) == null ? void 0 : U.length) > 0;
    }), g = y(() => !p.value), p = y(() => m.value ? !S.value : !0), m = y(() => h.value > 0), h = y(() => k.value.length || 0), k = y(() => {
      var O, U;
      return ((U = (O = l.value) == null ? void 0 : O.fields) == null ? void 0 : U.filter(
        (Z) => !oe(Z.require_confirmation) && Z.require_confirmation
      )) || [];
    }), S = y(() => k.value.filter((O) => !O.validated).length > 0 || !1);
    function _(O) {
      var U;
      return (U = l.value) == null ? void 0 : U.fields.find((Z) => Z.name === O);
    }
    function w(O) {
      return O.type === xa.Process ? s.value ? i.value ? g.value : !0 : g.value : O.disabled;
    }
    async function P(O) {
      O.type === xa.Process ? await C() : O.type === xa.Reset ? Y() : O.type === xa.Cancel && I();
    }
    async function C() {
      if (a(ve.Processing, !0), E(!0), await M()) {
        a(ve.Validated, !0), c.value.resetValidation();
        const U = await o(`process_form_${l.value.name.replace("\\", "_")}`), Z = await l.value.process(U);
        b(Z);
      } else
        a(ve.Validated, !1), l.value.failedValidation(), E(!1), a(ve.Failed, !0);
    }
    function b(O) {
      if (!O) {
        a(ve.Failed, !0), E(!1);
        return;
      }
      a(ve.Successful, !0), l.value.axios.expecting_results && a(ve.Results, O);
    }
    async function M() {
      const { valid: O } = await c.value.validate();
      return O;
    }
    async function x(O) {
      const U = f.value.filter((Z) => Z.depends_on === O.name);
      for (const Z of U) {
        const T = await Z.load(l.value, O);
        T && (Z instanceof oc || Z instanceof uc) && Z.loadItems(T);
      }
      a(ve.Updated, !0);
    }
    function E(O) {
      l.value.isLoading(O), a(ve.Loading, O);
    }
    function Y() {
      c.value.resetValidation(), E(!1), a(ve.Reset, !0);
    }
    function I() {
      a(ve.Cancelled, !0);
    }
    const D = je(() => {
      l.value = n.form;
    }), V = J(l.value, (O) => {
      a(ve.Updated, O);
    });
    return We(() => {
      r();
    }), Ae(() => {
      V(), D();
    }), (O, U) => {
      var T;
      const Z = Qt("EasyButton");
      return ne(), ue(Me(mr), W(((T = l.value) == null ? void 0 : T.props()) ?? {}, {
        ref_key: "formReference",
        ref: c,
        class: "mx-auto w-100"
      }), {
        default: N(() => [
          u(Ce, { cols: "12" }, {
            default: N(() => [
              u(Be, { class: "easy-fields" }, {
                default: N(() => [
                  (ne(!0), Xt(pe, null, Tn(d.value, (L, $) => {
                    var A;
                    return ne(), ue(Ce, {
                      cols: ((A = L.cols) == null ? void 0 : A.toString()) ?? "12",
                      offset: L.offset,
                      key: $
                    }, {
                      default: N(() => [
                        u(Me(ya), {
                          field: d.value[$],
                          "onUpdate:field": (q) => d.value[$] = q,
                          fields: f.value,
                          onUpdated: (q) => x(L),
                          onValidated: L.validate,
                          onInvalidated: L.invalidate
                        }, null, 8, ["field", "onUpdate:field", "fields", "onUpdated", "onValidated", "onInvalidated"])
                      ]),
                      _: 2
                    }, 1032, ["cols", "offset"]);
                  }), 128))
                ]),
                _: 1
              }),
              v.value ? (ne(), ue(Be, {
                key: 0,
                align: l.value.button_align_row,
                justify: l.value.button_justify_row,
                class: "easy-buttons"
              }, {
                default: N(() => {
                  var L;
                  return [
                    (ne(!0), Xt(pe, null, Tn((L = l.value) == null ? void 0 : L.buttons, ($, A) => (ne(), ue(Ce, {
                      cols: "auto",
                      key: A
                    }, {
                      default: N(() => [
                        u(Z, {
                          button: $,
                          identifier: A,
                          disabled: w($),
                          onClick: (q) => P($)
                        }, null, 8, ["button", "identifier", "disabled", "onClick"])
                      ]),
                      _: 2
                    }, 1024))), 128))
                  ];
                }),
                _: 1
              }, 8, ["align", "justify"])) : Ie("", !0)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16);
    };
  }
}), lk = /* @__PURE__ */ Fe({
  __name: "ActionFormLoader",
  props: {
    form: {
      type: Cn,
      required: !0,
      validator: (e) => hc(e)
    }
  },
  emits: ["update:form", ...Object.values(ve)],
  setup(e, { emit: t }) {
    const n = e, a = t, l = B(n.form), { loadRecaptcha: i, getToken: s } = xr(l.value.google_recaptcha_site_key), r = je(() => l.value = n.form), o = y(() => {
      var m;
      return (((m = l.value) == null ? void 0 : m.actions) ?? []).filter((h) => f(h));
    }), c = y(() => l.value.inline);
    function d(m) {
      return c.value ? "auto" : m.cols;
    }
    function f(m) {
      return oe(m.conditions) ? !0 : m.conditions.every((h) => {
        const k = l.value.additional_data.find(
          (S) => S.key == h.check
        );
        if (oe(k))
          return !1;
        switch (h.operator) {
          case "==":
            return (k == null ? void 0 : k.value) === h.against;
          case "!=":
            return (k == null ? void 0 : k.value) !== h.against;
          case ">":
            return (k == null ? void 0 : k.value) > h.against;
          case "<":
            return (k == null ? void 0 : k.value) < h.against;
          case ">=":
            return (k == null ? void 0 : k.value) >= h.against;
          case "<=":
            return (k == null ? void 0 : k.value) <= h.against;
          default:
            throw new Error(`Unsupported operator: ${h.operator}`);
        }
      });
    }
    function v(m) {
      l.value.isLoading(m), a(ve.Loading, m);
    }
    async function g(m) {
      a(ve.Processing, !0), v(!0), console.log(
        "Action Name:",
        `process_form_${l.value.name.replace("\\", "_")}_${m.replace("\\", "_")}`
      );
      const h = await s(
        `process_form_${l.value.name.replace("\\", "_")}_${m.replace("\\", "_")}`
      ), k = await l.value.process(m, h);
      p(k);
    }
    function p(m) {
      if (!m) {
        a(ve.Failed, !0), v(!1);
        return;
      }
      a(ve.Successful, !0), l.value.axios.expecting_results && a(ve.Results, m);
    }
    return Ae(() => {
      r();
    }), We(() => {
      i();
    }), (m, h) => {
      const k = Qt("EasyIcon"), S = Qt("EasyButton");
      return ne(), ue(Ce, { cols: 12 }, {
        default: N(() => [
          u(Be, {
            justify: l.value.justify_row
          }, {
            default: N(() => [
              (ne(!0), Xt(pe, null, Tn(o.value, (_, w) => (ne(), ue(Ce, {
                key: w,
                cols: d(_),
                class: "py-0 px-2"
              }, {
                default: N(() => [
                  Me(oe)(_.icon) ? Ie("", !0) : (ne(), ue(k, {
                    key: 0,
                    icon: _.icon,
                    identifier: _.identifier,
                    onClick: (P) => g(_.identifier)
                  }, null, 8, ["icon", "identifier", "onClick"])),
                  Me(oe)(_.button) ? Ie("", !0) : (ne(), ue(S, {
                    key: 1,
                    button: _.button,
                    identifier: _.identifier,
                    disabled: !1,
                    onClick: (P) => g(_.identifier)
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
}), ik = /* @__PURE__ */ Fe({
  __name: "ErrorFormLoader",
  props: {
    text: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const t = e;
    return (n, a) => (ne(), ue(Ce, { cols: 12 }, {
      default: N(() => [
        u(Be, null, {
          default: N(() => [
            u(Ce, { cols: "12" }, {
              default: N(() => [
                u(Lu, { color: "error" }, {
                  default: N(() => [
                    ft("div", null, Ze(t.text), 1)
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
}), sk = /* @__PURE__ */ Fe({
  __name: "EasyLoader",
  props: {
    loader: {}
  },
  setup(e) {
    const n = B(e.loader);
    return (a, l) => {
      var i, s;
      return ne(), ue(Ce, {
        cols: "auto",
        class: Sr(((s = (i = n.value) == null ? void 0 : i.progress) == null ? void 0 : s.classes) ?? "")
      }, {
        default: N(() => {
          var r, o, c, d, f, v;
          return [
            ((r = n.value) == null ? void 0 : r.type) === Me(vs).Circular ? (ne(), ue(Li, ds(W({ key: 0 }, (c = (o = n.value) == null ? void 0 : o.progress) == null ? void 0 : c.props())), null, 16)) : Ie("", !0),
            ((d = n.value) == null ? void 0 : d.type) === Me(vs).Linear ? (ne(), ue(Vi, ds(W({ key: 1 }, (v = (f = n.value) == null ? void 0 : f.progress) == null ? void 0 : v.props())), null, 16)) : Ie("", !0)
          ];
        }),
        _: 1
      }, 8, ["class"]);
    };
  }
}), rk = /* @__PURE__ */ Fe({
  __name: "FormLoader",
  props: {
    form: {
      type: [Cn, wn, fs],
      default: new fs({ name: "default" })
    },
    name: {
      type: String,
      default: ""
    },
    cols: {
      type: Number,
      default: 12,
      validator: (e) => Va(e)
    },
    sm: {
      type: Number,
      default: 12,
      validator: (e) => Va(e)
    },
    md: {
      type: Number,
      default: 12,
      validator: (e) => Va(e)
    },
    lg: {
      type: Number,
      default: 12,
      validator: (e) => Va(e)
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
  emits: ["update:form", ...Object.values(ve)],
  setup(e, { emit: t }) {
    const n = t, a = e, l = wr.getInstance(), i = B(!1), s = B(Ul.csrf ?? new Cr()), r = B(!0), o = B(a.form), c = y(() => new fc({
      cols: a.cols,
      sm: a.sm,
      md: a.md,
      lg: a.lg
    })), d = y(() => !oe(o.value.text)), f = y(
      () => l.csrf_endpoint === null ? !0 : s.value.isValidCsrfToken()
    ), v = y(() => s.value.isLoading()), g = y(
      () => {
        var V, O;
        return (((O = (V = o == null ? void 0 : o.value) == null ? void 0 : V.alerts) == null ? void 0 : O.filter((U) => U.display).length) ?? 0) > 0;
      }
    ), p = y(() => {
      var V;
      return !o.value.loading && (o.value instanceof wn || o.value instanceof Cn || !oe((V = o.value) == null ? void 0 : V.text));
    }), m = y(() => {
      if (!r.value || !oe(o.value.name)) {
        if (o.value instanceof wn)
          return kt.Input;
        if (o.value instanceof Cn)
          return kt.Action;
      }
      return kt.Error;
    }), h = y(() => m.value === kt.Action), k = y(() => m.value === kt.Input), S = y(() => m.value === kt.Error);
    function _() {
      var V;
      n(ve.Reset, !0), (V = o.value) == null || V.reset();
    }
    function w() {
      var V;
      n(ve.Cancelled, !0), (V = o.value) == null || V.cancelled();
    }
    function P(V) {
      n(ve.Processing, V);
    }
    function C() {
      n(ve.Failed, !0);
    }
    function b(V) {
      n(ve.Updated, V);
    }
    function M() {
      n(ve.Successful, !0);
    }
    function x(V) {
      o.value.hasResults(V), n(ve.Results, V);
    }
    function E(V) {
      n(ve.Validated, V);
    }
    function Y(V) {
      n(ve.Loading, V), o.value.isLoading(V), r.value = V;
    }
    const I = J(f, async (V) => {
      i.value && V && await D();
    });
    Ae(() => {
      I();
    }), fi(async () => {
      Y(!0), !oe(a.form) && oe(a.name) ? (i.value = !1, o.value = a.form, o.value.additional_data = a.additionalData, o.value.additional_load_data = a.additionalLoadData, Y(!1), n(ve.Loaded, !0)) : oe(a.name) || (i.value = !0, f.value ? await D() : v.value || await s.value.fetchNewToken() || (o.value.text = s.value.error_message, Y(!1)));
    });
    async function D() {
      o.value.name = a.name, o.value.additional_load_data = a.additionalLoadData;
      const V = await o.value.load();
      V ? (V == null ? void 0 : V.type) == kt.Input ? (o.value = new wn(V), o.value.triggerAlert(dc.AfterLoad), n(ve.Loaded, !0)) : V.type == kt.Action && (o.value = new Cn(V), n(ve.Loaded, !0)) : (o.value.text = "Error Loading Form - Not Found", n(ve.Loaded, !1)), o.value.additional_data = a.additionalData, o.value.additional_load_data = a.additionalLoadData, Y(!1);
    }
    return (V, O) => {
      var Z, T, L, $;
      const U = Qt("EasyAlerts");
      return ne(), ue(Ce, {
        cols: ((Z = c.value) == null ? void 0 : Z.cols) ?? 12,
        sm: ((T = c.value) == null ? void 0 : T.sm) ?? 12,
        md: ((L = c.value) == null ? void 0 : L.md) ?? 12,
        lg: (($ = c.value) == null ? void 0 : $.lg) ?? 12
      }, {
        default: N(() => [
          Ve(u(Be, {
            justify: "center",
            class: "easy-loader"
          }, {
            default: N(() => {
              var A;
              return [
                u(sk, {
                  loader: (A = o.value) == null ? void 0 : A.loader
                }, null, 8, ["loader"])
              ];
            }),
            _: 1
          }, 512), [
            [dt, !p.value]
          ]),
          Ve(u(Be, { class: "easy-title" }, {
            default: N(() => [
              u(Ce, { class: "pl-6 text-h3 text-h6" }, {
                default: N(() => [
                  De(Ze(o.value.title), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 512), [
            [dt, o.value.show_title]
          ]),
          g.value ? (ne(), ue(Be, {
            key: 0,
            class: "easy-alerts"
          }, {
            default: N(() => {
              var A;
              return [
                u(U, {
                  alerts: (A = o.value) == null ? void 0 : A.alerts
                }, null, 8, ["alerts"])
              ];
            }),
            _: 1
          })) : Ie("", !0),
          Ve(u(Be, {
            "no-gutters": "",
            class: "easy-form"
          }, {
            default: N(() => [
              k.value && !d.value ? (ne(), ue(Me(ak), W({
                key: 0,
                form: o.value,
                "onUpdate:form": O[0] || (O[0] = (A) => o.value = A)
              }, o.value.props(), {
                onResults: x,
                onLoading: Y,
                onReset: _,
                onUpdated: b,
                onCancelled: w,
                onProcessing: P,
                onFailed: C,
                onSuccessful: M,
                onValidated: E
              }), null, 16, ["form"])) : h.value && !d.value ? (ne(), ue(Me(lk), W({
                key: 1,
                form: o.value,
                "onUpdate:form": O[1] || (O[1] = (A) => o.value = A)
              }, o.value.props(), {
                onResults: x,
                onLoading: Y,
                onReset: _,
                onUpdated: b,
                onCancelled: w,
                onProcessing: P,
                onFailed: C,
                onSuccessful: M,
                onValidated: E
              }), null, 16, ["form"])) : S.value || d.value ? (ne(), ue(Me(ik), {
                key: 2,
                text: o.value.text
              }, null, 8, ["text"])) : Ie("", !0)
            ]),
            _: 1
          }, 512), [
            [dt, p.value]
          ])
        ]),
        _: 1
      }, 8, ["cols", "sm", "md", "lg"]);
    };
  }
});
/*! maska v2.1.11 | (c) Alexander Shabunevich | Released under the MIT license */
var ok = Object.defineProperty, uk = (e, t, n) => t in e ? ok(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Zn = (e, t, n) => (uk(e, typeof t != "symbol" ? t + "" : t, n), n);
const hr = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class gr {
  constructor(t = {}) {
    Zn(this, "opts", {}), Zn(this, "memo", /* @__PURE__ */ new Map());
    const n = { ...t };
    if (n.tokens != null) {
      n.tokens = n.tokensReplace ? { ...n.tokens } : { ...hr, ...n.tokens };
      for (const a of Object.values(n.tokens))
        typeof a.pattern == "string" && (a.pattern = new RegExp(a.pattern));
    } else
      n.tokens = hr;
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
    const { mask: i, escaped: s } = this.escapeMask(n), r = [], o = this.opts.tokens != null ? this.opts.tokens : {}, c = this.isReversed() ? -1 : 1, d = this.isReversed() ? "unshift" : "push", f = this.isReversed() ? 0 : i.length - 1, v = this.isReversed() ? () => h > -1 && k > -1 : () => h < i.length && k < t.length, g = (_) => !this.isReversed() && _ <= f || this.isReversed() && _ >= f;
    let p, m = -1, h = this.isReversed() ? i.length - 1 : 0, k = this.isReversed() ? t.length - 1 : 0, S = !1;
    for (; v(); ) {
      const _ = i.charAt(h), w = o[_], P = (w == null ? void 0 : w.transform) != null ? w.transform(t.charAt(k)) : t.charAt(k);
      if (!s.includes(h) && w != null ? (P.match(w.pattern) != null ? (r[d](P), w.repeated ? (m === -1 ? m = h : h === f && h !== m && (h = m - c), f === m && (h -= c)) : w.multiple && (S = !0, h -= c), h += c) : w.multiple ? S && (h += c, k -= c, S = !1) : P === p ? p = void 0 : w.optional && (h += c, k -= c), k += c) : (a && !this.isEager() && r[d](_), P === _ && !this.isEager() ? k += c : p = _, this.isEager() || (h += c)), this.isEager())
        for (; g(h) && (o[i.charAt(h)] == null || s.includes(h)); )
          a ? r[d](i.charAt(h)) : i.charAt(h) === t.charAt(k) && (k += c), h += c;
    }
    return this.memo.set(l, r.join("")), this.memo.get(l);
  }
}
const Xu = (e) => JSON.parse(e.replaceAll("'", '"')), yr = (e, t = {}) => {
  const n = { ...t };
  return e.dataset.maska != null && e.dataset.maska !== "" && (n.mask = ck(e.dataset.maska)), e.dataset.maskaEager != null && (n.eager = Wl(e.dataset.maskaEager)), e.dataset.maskaReversed != null && (n.reversed = Wl(e.dataset.maskaReversed)), e.dataset.maskaTokensReplace != null && (n.tokensReplace = Wl(e.dataset.maskaTokensReplace)), e.dataset.maskaTokens != null && (n.tokens = dk(e.dataset.maskaTokens)), n;
}, Wl = (e) => e !== "" ? !!JSON.parse(e) : !0, ck = (e) => e.startsWith("[") && e.endsWith("]") ? Xu(e) : e, dk = (e) => {
  if (e.startsWith("{") && e.endsWith("}"))
    return Xu(e);
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
class fk {
  constructor(t, n = {}) {
    Zn(this, "items", /* @__PURE__ */ new Map()), Zn(this, "beforeinputEvent", (a) => {
      const l = a.target, i = this.items.get(l);
      i.isEager() && "inputType" in a && a.inputType.startsWith("delete") && i.unmasked(l.value).length <= 1 && this.setMaskedValue(l, "");
    }), Zn(this, "inputEvent", (a) => {
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
    const a = this.items.get(t), l = new gr(yr(t, this.getMaskOpts(n)));
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
      const l = new gr(yr(a, n));
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
const di = /* @__PURE__ */ new WeakMap(), vk = (e) => {
  setTimeout(() => {
    var t;
    ((t = di.get(e)) == null ? void 0 : t.needUpdateValue(e)) === !0 && e.dispatchEvent(new CustomEvent("input"));
  });
}, mk = (e, t) => {
  const n = e instanceof HTMLInputElement ? e : e.querySelector("input"), a = { ...t.arg };
  if (n == null || (n == null ? void 0 : n.type) === "file")
    return;
  vk(n);
  const l = di.get(n);
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
  di.set(n, new fk(n, a));
}, Wk = {
  install(e, t) {
    const n = new wr(t);
    e.directive("maska", mk).component("EasyIcon", Hy).component("EasyButton", Uy).component("EasyAlerts", Ky).component("EasyDatePicker", $y).component("EasyTimePicker", tk).component("EasyColorPicker", Ov).component("EasyCheckboxGroup", ef).component("EasyPassword", ep).component("FormLoader", rk), Ul.options = n, n.csrf_endpoint !== null && (Ul.csrf = new Cr({
      endpoint: n.buildDomain(n.csrf_endpoint)
    }));
  }
};
export {
  Wk as default
};
