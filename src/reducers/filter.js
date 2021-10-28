import { types } from "../types/types";

const initialState = {
  filterBy: null,
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case types.F_DISABLE:
      return initialState;

    case types.IMAGES:
      return {
        filterBy: "images",
      };

    case types.VIDEOS:
      return {
        filterBy: "videos",
      };

    default:
      return state;
  }
};

export default filter;
