import * as CONSTANTS from "../../constants";
import PATHS from "../../Routes/paths";
import {
  setCookie,
  getCookie,
  getLocalStorage,
  setLocalStorage,
  removeCookie,
  removeLocalStorage,
  removeSessionStorage,
} from "../../utils/storage";
import { history } from "../../App";
import { fetchUser } from "../../actions/user";
import { fetchTaxes } from "../../Taxes/actions/taxes";

export const signIn =
  ({ identifier, password, remember }) =>
  async (dispatch) => {
    const action = await dispatch(fetchSignIn({ identifier, password }));
    if (action.type === "SIGN_IN_SUCCESS" && !action.error) {
      const token = action.payload.data.token;
      dispatch(initApp({ token, remember }));
    } else if (action.type === "SIGN_IN_FAIL") {
      const error = action.error.meta;
      console.error(error);
    }

    return action;
  };

export const fetchSignIn = ({ identifier, password }) => ({
  type: "SIGN_IN",
  payload: {
    request: {
      method: "POST",
      // url: '/auth/local',
      url: "https://run.mocky.io/v3/3398b3b4-3392-4203-b0a5-c419b2dab88c",
      // data: {
      //   identifier,
      //   password
      // }
    },
  },
});

export const initApp =
  ({ token, remember }) =>
  (dispatch) => {
    dispatch(fetchUser());
    dispatch(setToken({ token, remember }));
  };

export const setToken = ({ token, remember = false }) => {
  if (remember) {
    setCookie(CONSTANTS.TOKEN_KEY, token);
  } else {
    setLocalStorage(CONSTANTS.TOKEN_KEY, token);
  }

  return {
    type: "SAVE_TOKEN",
    payload: token,
  };
};

export const checkUserIsLogged = () => async (dispatch) => {
  const token =
    getCookie(CONSTANTS.TOKEN_KEY) || getLocalStorage(CONSTANTS.TOKEN_KEY);
  if (token) {
    dispatch({ type: "SAVE_TOKEN", payload: token });
    const action = await dispatch(fetchUser());
    if (action.type === "FETCH_USER_SUCCESS") {
      dispatch(fetchTaxes());
    }
    if (action.type === "FETCH_USER_FAIL") {
      dispatch(signOut());
      history.push(PATHS.signIn);
    }
  } else {
    dispatch({ type: "RESET_USER" });
    history.push(PATHS.signIn);
  }
};

export const resetUser = () => {
  removeCookie(CONSTANTS.TOKEN_KEY);
  removeLocalStorage(CONSTANTS.TOKEN_KEY);
  removeSessionStorage(CONSTANTS.TOKEN_KEY);
  return {
    type: "RESET_USER",
  };
};

export const logOut = () => ({
  type: "LOG_OUT",
  payload: null,
});

export const signOut =
  (shouldForceReload = false) =>
  async (dispatch) => {
    dispatch(resetUser());
    dispatch(logOut());

    if (shouldForceReload) {
      window.location.reload();
    } else {
      history.push(PATHS.signIn);
    }
  };
