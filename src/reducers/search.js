import { types } from "../types/types";

const initialState = "";

const search = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      return action.payload;

    case types.RESET_SEARCH:
      return initialState;

    default:
      return state;
  }
};

export default search;
