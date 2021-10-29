import { types } from "../types/types";

const initialState = {
  sortBy: null,
  mode: null,
  status: {
    disable: true,
    name_asc: null,
    name_dsc: null,
    sector_asc: null,
    sector_dsc: null,
    video: null,
    image: null,
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
    case types.DISABLE:
      return initialState;

    case types.NAME_ASC:
      return {
        sortBy: "name",
        mode: "asc",
        status: {
          ...initialState.status,
          disable: null,
          name_asc: true,
        },
      };

    case types.NAME_DSC:
      return {
        sortBy: "name",
        mode: "dsc",
        status: {
          ...initialState.status,
          disable: null,
          name_dsc: true,
        },
      };

    case types.SECTOR_ASC:
      return {
        sortBy: "sector",
        mode: "asc",
        status: {
          ...initialState.status,
          disable: null,
          sector_asc: true,
        },
      };

    case types.SECTOR_DSC:
      return {
        sortBy: "sector",
        mode: "dsc",
        status: {
          ...initialState.status,
          disable: null,
          sector_dsc: true,
        },
      };

    case types.VIDEO:
      return {
        sortBy: "type",
        mode: "asc",
        status: {
          ...initialState.status,
          disable: null,
          video: true,
        },
      };

    case types.IMAGE:
      return {
        sortBy: "type",
        mode: "dsc",
        status: {
          ...initialState.status,
          disable: null,
          image: true,
        },
      };

    case types.M1_ASC:
      return {
        sortBy: "perc_score_m1",
        mode: "asc",
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

