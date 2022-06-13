import { lazy } from "react";

import withSuspense from "helpers/withSuspense";

const routes = [
  {
    path: "/",
    component: withSuspense(lazy(() => import("pages/home"))),
  },
  {
    path: "/profile",
    component: withSuspense(lazy(() => import("pages/userDetailed"))),
    subRoutes: [
      {
        path: ":id",
        component: withSuspense(lazy(() => import("pages/userDetailed"))),
      },
    ],
  },
  {
    path: "/community",
    component: withSuspense(lazy(() => import("pages/community"))),
  },
  {
    path: "*",
    component: withSuspense(lazy(() => import("pages/notFound"))),
  },
];

export default routes;
