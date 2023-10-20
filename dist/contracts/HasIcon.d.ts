import { Tooltip } from "#/classes/elements";
export default interface HasIcon {
    class: string | undefined;
    color: string;
    icon: string;
    size: string | undefined;
    tooltip: Tooltip | undefined;
    allowedProps(): string[];
    props(): object;
}
//# sourceMappingURL=HasIcon.d.ts.map