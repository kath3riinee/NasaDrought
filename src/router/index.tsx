import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {/* ✅ Default route: redirect / to /heatmap */}
        <Route exact path="/">
          <Redirect to="/heatmap" />
        </Route>

        {/* ✅ Dynamic routes (Home, Heatmap) */}
        {routes.map((routeItem) => (
          <Route
            key={routeItem.component}
            path={routeItem.path}
            exact={routeItem.exact}
            component={lazy(() => import(`../pages/${routeItem.component}`))}
          />
        ))}

        {/* ✅ Fallback for unknown routes */}
        <Redirect to="/heatmap" />
      </Switch>
    </Suspense>
  );
};

export default Router;
