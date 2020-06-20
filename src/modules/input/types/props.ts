export interface InputProps {
  className?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
  type?: string;
  name?: string;
}
