import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStyles } from "./styles/Globalstyle";
import { lightTheme, darkTheme } from "./styles/Themes";
import { initApplication } from "./actions/app";

import Routes from "./routes/index";

export const history = createBrowserHistory();

const App = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector((state) => state.app.theme);
  const themeMode = appTheme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    dispatch(initApplication());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const routes = (
    <Router history={history}>
      <Routes />
    </Router>
  );

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      {routes}
    </ThemeProvider>
  );
};

export default App;
