import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import { flattenMessages, locale, translations } from "./translations";
import { GlobalStyles } from "./styles/Globalstyle";
import { lightTheme, darkTheme } from "./styles/Themes";
import { initApplication } from "./actions/app";

import Routes from "./routes/index";

export const history = createBrowserHistory();

const App = () => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.user.language) || locale;
  const appTheme = useSelector((state) => state.app.theme);
  const themeMode = appTheme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    dispatch(initApplication());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <IntlProvider
      locale={language}
      key={language}
      messages={flattenMessages(translations[language])}
    >
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </IntlProvider>
  );
};

export default App;
