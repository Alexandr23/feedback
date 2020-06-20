import React, { FC } from "react";

import "./style.scss";

export const Layout: FC = ({ children }) => (
  <div className="layout">
    <div className="layout__content">{children}</div>
  </div>
);
