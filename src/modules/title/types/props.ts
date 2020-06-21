import { ReactNode } from "react";

import { TitleType } from "./type";

export interface TitleProps {
  children?: ReactNode;
  className?: string;
  title?: string;
  type?: TitleType;
}
