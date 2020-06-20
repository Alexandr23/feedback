import React, { FC } from "react";

import { InputProps } from "./types/props";

import "./style.scss";

export const Input: FC<InputProps> = ({ className, onChange, name, value = "", type = "text" }) => (
  <input name={name} type={type} value={value} className={`input ${className || ""}`} onChange={onChange} />
);
