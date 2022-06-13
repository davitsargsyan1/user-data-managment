import { Route } from "react-router-dom";

const generateRoutes = (routes) =>
  routes.map(({ component: Component, path, subRoutes = [] }) => {
    if (subRoutes.length) {
      return (
        <Route
          key={path}
          path={path}
          element={<Component />}
          children={generateRoutes(subRoutes)}
        />
      );
    }

    return <Route key={path} path={path} element={<Component />} />;
  });

export default generateRoutes;
