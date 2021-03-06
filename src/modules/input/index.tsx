import React, { FC } from "react";
import cn from "classnames";

import { InputProps } from "./types/props";

import "./style.scss";

export const Input: FC<InputProps> = ({ className, onChange, name, placeholder, error, value = "", type = "text" }) => (
  <input
    className={cn({
      input: true,
      input_error: error,
      [`${className}`]: true,
    })}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
