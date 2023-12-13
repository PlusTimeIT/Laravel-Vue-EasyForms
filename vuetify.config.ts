import resize_observer_polyfill from "resize-observer-polyfill";

(global as any).CSS = { supports: () => false };
global.ResizeObserver = resize_observer_polyfill;
