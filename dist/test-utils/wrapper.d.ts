declare const testWrapper: {
    global: {
        directives: {
            maska: import("vue").ObjectDirective<HTMLElement, import("maska").MaskaDetail | undefined> | import("vue").FunctionDirective<HTMLElement, import("maska").MaskaDetail | undefined>;
        };
        components: {
            EasyAlerts: import("vue").DefineComponent<{
                alerts: {
                    type: import("vue").PropType<import("../elements").Alert[]>;
                    required: true;
                };
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                alerts: {
                    type: import("vue").PropType<import("../elements").Alert[]>;
                    required: true;
                };
            }>>, {}, {}>;
            EasyIcon: import("vue").DefineComponent<{
                icon: {
                    type: import("vue").PropType<import("../elements").Icon | undefined>;
                    required: true;
                };
                identifier: {
                    type: import("vue").PropType<string | number>;
                    default: string;
                };
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (value: string | number | undefined) => void;
            }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                icon: {
                    type: import("vue").PropType<import("../elements").Icon | undefined>;
                    required: true;
                };
                identifier: {
                    type: import("vue").PropType<string | number>;
                    default: string;
                };
            }>> & {
                onClick?: ((value: string | number | undefined) => any) | undefined;
            }, {
                identifier: string | number;
            }, {}>;
            EasyButton: import("vue").DefineComponent<{
                button: {
                    type: import("vue").PropType<import("../elements").Button>;
                    required: true;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    required: true;
                };
                identifier: {
                    type: import("vue").PropType<string | number>;
                };
            }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (value: string | number | undefined) => void;
            }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
                button: {
                    type: import("vue").PropType<import("../elements").Button>;
                    required: true;
                };
                disabled: {
                    type: import("vue").PropType<boolean>;
                    required: true;
                };
                identifier: {
                    type: import("vue").PropType<string | number>;
                };
            }>> & {
                onClick?: ((value: string | number | undefined) => any) | undefined;
            }, {}, {}>;
        };
        plugins: {
            install: (app: import("vue").App<any>) => void;
            defaults: import("vue").Ref<import("vuetify").DefaultsInstance>;
            display: import("vuetify").DisplayInstance;
            theme: import("vuetify").ThemeInstance & {
                install: (app: import("vue").App<any>) => void;
            };
            icons: Record<string, any>;
            locale: {
                isRtl: import("vue").Ref<boolean>;
                rtl: import("vue").Ref<Record<string, boolean>>;
                rtlClasses: import("vue").Ref<string>;
                name: string;
                messages: import("vue").Ref<import("vuetify").LocaleMessages>;
                current: import("vue").Ref<string>;
                fallback: import("vue").Ref<string>;
                t: (key: string, ...params: unknown[]) => string;
                n: (value: number) => string;
                provide: (props: import("vuetify").LocaleOptions) => import("vuetify").LocaleInstance;
            };
            date: {
                options: {
                    adapter: (new (options: {
                        locale: any;
                        formats?: any;
                    }) => import("vuetify").DateInstance<unknown>) | import("vuetify").DateInstance<unknown>;
                    formats?: Record<string, any> | undefined;
                    locale: Record<string, any>;
                };
                instance: {
                    locale?: any;
                    date: (value?: any) => unknown;
                    format: (date: unknown, formatString: string) => string;
                    toJsDate: (value: unknown) => Date;
                    parseISO: (date: string) => unknown;
                    toISO: (date: unknown) => string;
                    startOfDay: (date: unknown) => unknown;
                    endOfDay: (date: unknown) => unknown;
                    startOfWeek: (date: unknown) => unknown;
                    endOfWeek: (date: unknown) => unknown;
                    startOfMonth: (date: unknown) => unknown;
                    endOfMonth: (date: unknown) => unknown;
                    startOfYear: (date: unknown) => unknown;
                    endOfYear: (date: unknown) => unknown;
                    isBefore: (date: unknown, comparing: unknown) => boolean;
                    isAfter: (date: unknown, comparing: unknown) => boolean;
                    isEqual: (date: unknown, comparing: unknown) => boolean;
                    isSameDay: (date: unknown, comparing: unknown) => boolean;
                    isSameMonth: (date: unknown, comparing: unknown) => boolean;
                    isValid: (date: any) => boolean;
                    isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;
                    addMinutes: (date: unknown, amount: number) => unknown;
                    addHours: (date: unknown, amount: number) => unknown;
                    addDays: (date: unknown, amount: number) => unknown;
                    addWeeks: (date: unknown, amount: number) => unknown;
                    addMonths: (date: unknown, amount: number) => unknown;
                    getYear: (date: unknown) => number;
                    setYear: (date: unknown, year: number) => unknown;
                    getDiff: (date: unknown, comparing: unknown, unit?: string | undefined) => number;
                    getWeekArray: (date: unknown) => unknown[][];
                    getWeekdays: () => string[];
                    getMonth: (date: unknown) => number;
                    setMonth: (date: unknown, month: number) => unknown;
                    getNextMonth: (date: unknown) => unknown;
                    getHours: (date: unknown) => number;
                    setHours: (date: unknown, hours: number) => unknown;
                    getMinutes: (date: unknown) => number;
                    setMinutes: (date: unknown, minutes: number) => unknown;
                };
            };
        }[];
    };
};
export { testWrapper };
//# sourceMappingURL=wrapper.d.ts.map