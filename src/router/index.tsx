import React, { FC } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { ROUTER_CONFIG } from "../router/config";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {ROUTER_CONFIG.map((route, idx) => {
          const Page = route.component;

          return (
            <Route key={idx} path={route.path} exact={route.exact} name={route.name}>
              <Page />
            </Route>
          );
        })}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
