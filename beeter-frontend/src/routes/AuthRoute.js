import PATHS from "./paths";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthLayout from "../Auth/components/AuthLayout";
import PageTitle from "../components/PageTitle";

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Redirect to={PATHS.base} />
        ) : (
          <AuthLayout>
            <PageTitle title={"Welcome!"} />
            <Component {...props} />
          </AuthLayout>
        )
      }
    />
  );
};

export default AuthRoute;
