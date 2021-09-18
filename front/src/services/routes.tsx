import { BrowserRouter, Switch } from "react-router-dom";

import AuthRoutes from "../pages/auth/auth-routes";
import AppRoutes from "../pages/session/session-routes";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <>
        {AuthRoutes}
        {AppRoutes}
      </>
    </Switch>
  </BrowserRouter>
);