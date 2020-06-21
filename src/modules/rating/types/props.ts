export interface RatingProps {
  value: number;
  onChange?(value: number): void;
  className?: string;
  isReadonly?: boolean;
}
