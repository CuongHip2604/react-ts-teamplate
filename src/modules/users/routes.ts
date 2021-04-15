import React from "react";
import { RouteDTO } from "../../shared/Modals/Route.modal";

const UserModule = React.lazy(() => import("./UserModule"));
const UserManagement = React.lazy(() => import("./pages/UserManagement"));
const CreateUser = React.lazy(() => import("./pages/CreateUser"));
const UserDetail = React.lazy(() => import("./pages/UserDetail"));

const userRoutes: RouteDTO[] = [
  {
    path: "/users",
    name: "User",
    component: UserModule,
    chilrends: [
      {
        path: "/list",
        exact: true,
        component: UserManagement,
        name: "User Management",
      },
      {
        path: "/create",
        exact: true,
        component: CreateUser,
        name: "Create User",
      },
      {
        path: "/:id",
        exact: true,
        name: "User Detail",
        component: UserDetail,
      },
    ],
  },
];

export default userRoutes;
