import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import PATHS from "./paths";
import loadable from "@loadable/component";
import PrivateRoute from "./PrivateRoute";
import AuthRoute from "./AuthRoute";

import HomeContainer from "../Home/containers/HomeContainer";
import IdeasContainer from "../Ideas/containers/IdeasContainer";
import AuthSignInContainer from "../Auth/containers/AuthSignInContainer";
import AuthSignUpContainer from "../Auth/containers/AuthSignUpContainer";
import AuthForgotPasswordContainer from "../Auth/containers/AuthForgotPasswordContainer";
import LoadingLayout from "../components/LoadingLayout";

const PageNotFound = loadable(() => import("../components/PageNotFound"));

const Routes = () => {
  return (
    <Suspense fallback={<LoadingLayout />}>
      <Switch>
        <PrivateRoute path={PATHS.ideas} component={IdeasContainer} />
        <AuthRoute path={PATHS.signIn} exact component={AuthSignInContainer} />
        <AuthRoute path={PATHS.signUp} exact component={AuthSignUpContainer} />
        <AuthRoute
          path={PATHS.forgotPassword}
          exact
          component={AuthForgotPasswordContainer}
        />
        <Route path={PATHS.base} exact component={HomeContainer} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
