export default interface HasProps {
  props(): object;
  allowedProps(): string[];
}
