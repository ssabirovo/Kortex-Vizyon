import { Route, Routes as Elements } from "react-router-dom";

import { routes } from "./config";

const Routes = () => (
  <Elements>
    {routes.map((route) => (
      <Route key={route.path} path={route.path} element={<route.Component />} />
    ))}
  </Elements>
);

export default Routes;
