import { types } from "../types/types";

const initialState = {
  item: null,
};

const item = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ITEM:
      return {
        item: action.payload,
      };

    case types.UNSET_ITEM:
      return initialState;

    default:
      return state;
  }
};

export default item;
