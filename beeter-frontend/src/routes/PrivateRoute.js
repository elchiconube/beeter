import PATHS from "./paths";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import BaseLayout from "../components/BaseLayout";

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <BaseLayout>
            <Component {...props} />
          </BaseLayout>
        ) : (
          <Redirect to={PATHS.signIn} />
        )
      }
    />
  );
};

export default PrivateRoute;
