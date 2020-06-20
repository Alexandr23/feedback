import React, { FC } from "react";

import { TitleProps } from "./types/props";
import { TitleType } from "./types/type";

import "./style.scss";

export const Title: FC<TitleProps> = ({ children, className, title, type = TitleType.h1 }) => {
  const Component = type;

  return (
    <Component className={`title title_${type} ${className || ''}`} title={title}>
      {children}
    </Component>
  );
};
