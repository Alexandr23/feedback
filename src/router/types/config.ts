import { ComponentType } from "react";

interface Route {
  path: string;
  name: string;
  component: ComponentType<any>;
  exact?: boolean;
}

export type RouterConfig = Array<Route>;
