import React from "react";
import { RouteDTO } from "../shared/Modals/route.modal";
import modulesRoutes from "./modules";

const Dashboard = React.lazy(() => import("../shared/pages/Dashboard"));

let routes: RouteDTO[] = [
  { path: "/", exact: true },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: Dashboard,
  },
];

function configRoutes(): RouteDTO[] {
  if (modulesRoutes && Object.values(modulesRoutes).length) {
    let otherRoutes = new Set();
    Object.values(modulesRoutes).forEach((routes: any) => {
      routes.forEach((route: RouteDTO) => {
        otherRoutes.add(route);
      });
    });

    const allRoutes: any = Array.from(otherRoutes);
    return [...allRoutes, ...routes];
  }

  return [...routes];
}
export default routes = configRoutes();
