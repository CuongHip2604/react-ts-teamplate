import React from "react";
import modulesRoutes from "./modules";

const Dashboard = React.lazy(() => import("../shared/pages/Dashboard"));

let routes: any = [
  { path: "/", exact: true },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

function configRoutes() {
  if (modulesRoutes && Object.values(modulesRoutes).length) {
    let allRoutes = new Set();
    Object.values(modulesRoutes).forEach((routes: any) => {
      routes.forEach((route: any) => {
        allRoutes.add(route);
      });
    });

    return [...Array.from(allRoutes), ...routes];
  }

  return [...routes];
}
export default routes = configRoutes();
