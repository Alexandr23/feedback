export interface ButtonProps {
  children: string;
  onClick?(): void;
  className?: string;
  type?: "submit" | "reset" | "button";
}
