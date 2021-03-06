import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../../router";
import { RouteDTO } from "../Modals/route.modal";
import RouteWithSubRoutes from "../components/RouteWitchRoutes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function TheContent(props: any) {
  return (
    <div>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route: RouteDTO, idx: number) => {
            return (
              route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => (
                    <RouteWithSubRoutes key={idx} {...route} />
                  )}
                />
              )
            );
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default TheContent;
