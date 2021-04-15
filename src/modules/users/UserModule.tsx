import React from "react";
import { Switch, useRouteMatch } from "react-router";
import RouteWithSubRoutes from "../../shared/components/RouteWitchRoutes";
import { RouteDTO } from "../../shared/Modals/Route.modal";

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
    </Switch>
  );
}

export default UserModules;
