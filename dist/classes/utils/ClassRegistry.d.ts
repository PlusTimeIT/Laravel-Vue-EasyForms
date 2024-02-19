type ClassConstructor<T> = new () => T;
export declare function registerClass<T>(className: string, classConstructor: ClassConstructor<T>): void;
export declare function getClassConstructor<T>(className: string): ClassConstructor<T> | undefined;
export {};
//# sourceMappingURL=ClassRegistry.d.ts.map