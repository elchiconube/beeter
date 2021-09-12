import * as CONSTANTS from "../constants";
import { getLocalStorage, setLocalStorage } from "../utils/storage";

const localTheme = getLocalStorage(CONSTANTS.THEME_KEY) || "light";

export const initApplication = () => async (dispatch) => {
  dispatch(saveTheme(localTheme));
};

export const saveTheme = (theme) => {
  setLocalStorage(CONSTANTS.THEME_KEY, theme);
  return {
    type: "SAVE_THEME",
    payload: theme,
  };
};
