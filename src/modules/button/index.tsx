import React from "react";

import { ButtonProps } from "./types/props";

import "./style.scss";

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = "button" }) => {
  return (
    <button className={`button ${className}`} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
