export interface TextareaProps {
  className?: string;
  onChange?(e: React.ChangeEvent<HTMLTextAreaElement>): void;
  value?: string;
  name?: string;
  placeholder?: string;
  error?: boolean;
}
