import { TitleType } from "./type";
import { ReactNode } from "react";

export interface TitleProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  type?: TitleType;
}
