import React, { FC } from "react";
import cn from "classnames";

import { TextareaProps } from "./types/props";

import "./style.scss";

export const Textarea: FC<TextareaProps> = ({ className, onChange, name, placeholder, error, value = "" }) => (
  <textarea
    className={cn({
      textarea: true,
      textarea_error: error,
      [`${className}`]: true,
    })}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
