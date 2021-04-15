import React from "react";
import { Route } from "react-router";
import { RouteDTO } from "../Modals/Route.modal";

function RouteWithSubRoutes(route: RouteDTO) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.chilrends} />
      )}
    />
  );
}

export default RouteWithSubRoutes;
