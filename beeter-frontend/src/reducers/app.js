export const initialState = {
  theme: "light",
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "SAVE_THEME":
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default reducer;
