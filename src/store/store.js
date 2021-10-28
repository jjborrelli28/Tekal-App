import { configureStore } from "@reduxjs/toolkit";
import data from "../reducers/data";
import sort from "../reducers/sort";

export const store = configureStore({
  reducer: {
    data,
    sort,
  },
});
