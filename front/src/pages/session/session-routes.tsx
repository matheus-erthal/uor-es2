import { PrivateRoute } from "../../util/routes-config";
import { withRouter } from "react-router-dom";

import HomePage from "./home";
import PlayersPage from "./players";
import InGamePage from "./in-game";

const AuthRoutes = (
  <>
    <PrivateRoute exact path="/" component={withRouter(HomePage)} />
    <PrivateRoute exact path="/players" component={withRouter(PlayersPage)} />
    <PrivateRoute exact path="/in-game" component={withRouter(InGamePage)} />
  </>
);

export default AuthRoutes;