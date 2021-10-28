import { types } from "../types/types";

const initialState = {
  sortBy: null,
  mode: null,
  title: "Disable",
  status: {
    disable: true,
    m1_asc: null,
    m1_dsc: null,
    m2_asc: null,
    m2_dsc: null,
    m3_asc: null,
    m3_dsc: null,
  },
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case types.S_DISABLE:
      return initialState;

    case types.M1_ASC:
      return {
        sortBy: "perc_score_m1",
        mode: "asc",
        title: action.payload,
        status: {
          ...initialState.status,
          disable: null,
          m1_asc: true,
        },
      };

    case types.M1_DSC:
      return {
        sortBy: "perc_score_m1",
        mode: "dsc",
        title: action.payload,
        status: {
          ...initialState.status,
          disable: null,
          m1_dsc: true,
        },
      };

    case types.M2_ASC:
      return {
        sortBy: "perc_score_m2",
        mode: "asc",
        title: action.payload,
        status: {
          ...initialState.status,
          disable: null,
          m2_asc: true,
        },
      };

    case types.M2_DSC:
      return {
        sortBy: "perc_score_m2",
        mode: "dsc",
        title: action.payload,
        status: {
          ...initialState.status,
          disable: null,
          m2_dsc: true,
        },
      };

    case types.M3_ASC:
      return {
        sortBy: "perc_score_m3",
        mode: "asc",
        title: action.payload,
        status: {
          ...initialState.status,
          disable: null,
          m3_asc: true,
        },
      };

    case types.M3_DSC:
      return {
        sortBy: "perc_score_m3",
        mode: "dsc",
        title: action.payload,
        status: {
          ...initialState.status,
          disable: null,
          m3_dsc: true,
        },
      };
    default:
      return state;
  }
};

export default sort;
