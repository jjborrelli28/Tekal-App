import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../helpers/fetchData";

export const getList = createAsyncThunk(
  "data/getList",
  async (dispatch, getState) => {
    const data = await fetchData();
    return data;
  }
);

const data = createSlice({
  name: "data",
  initialState: {
    data: null,
    status: null,
  },
  extraReducers: {
    [getList.pending]: (state, action) => {
      state.status = "loading";
    },
    [getList.fulfilled]: (state, action) => {
      state.status = "success";
      state.data = action.payload;
    },
    [getList.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default data.reducer;
