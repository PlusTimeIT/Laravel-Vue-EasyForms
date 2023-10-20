export type ValidationFunction<T> = (s: T, b?: T, d?: T) => (c: T) => boolean | string;
