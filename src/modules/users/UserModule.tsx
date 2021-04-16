import React from "react";
import { Switch, useRouteMatch, Redirect } from "react-router-dom";
import RouteWithSubRoutes from "../../shared/components/RouteWitchRoutes";
import { RouteDTO } from "../../shared/Modals/route.modal";

function UserModules(props: any) {
  const { routes } = props;

  const match = useRouteMatch();
  let newRoutes: RouteDTO[] = routes.map((route: RouteDTO) => {
    return {
      ...route,
      path: `${match.path}${route.path}`,
    };
  });

  return (
    <Switch>
      {newRoutes.map((route: RouteDTO, i: number) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
      <Redirect from="/users" to="/users/list" />
    </Switch>
  );
}

export default UserModules;
