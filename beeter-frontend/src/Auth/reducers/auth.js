export const initialState = {
  token: null,
  isAuthenticated: null,
  isLoading: null,
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "SAVE_TOKEN":
      return {
        ...state,
        isAuthenticated: true,
        token: payload,
      };
    case "SIGN_IN":
      return {
        ...state,
        isLoading: true,
      };
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
      };
    case "LOG_OUT":
    case "RESET_USER":
      return {
        ...initialState,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default reducer;
