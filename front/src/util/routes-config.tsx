import React from "react";
import { Route, Redirect } from "react-router-dom";
import { StorageService } from "../services";

export const PublicRoute = ({ component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      StorageService.isAuthenticated() ? (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      ) : (
        React.createElement(component, props)
      )
    }
  />
);

export const PrivateRoute = ({ component, ...rest }: any) => (
  <Route
    {...rest}
    render={(props: any) =>
      StorageService.isAuthenticated() ? (
        React.createElement(component, props)
      ) : (
        <Redirect to={{ pathname: "/sign-in", state: { from: props.location } }} />
      )
    }
  />
);