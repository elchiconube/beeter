export const initialState = {
  language: null,
};

const reducer = (state = initialState, { type, payload, ...action }) => {
  switch (type) {
    case "SAVE_LANGUAGE":
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
};

export default reducer;
