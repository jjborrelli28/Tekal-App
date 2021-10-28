import { configureStore } from "@reduxjs/toolkit";
import data from "../reducers/data";
import filter from "../reducers/filter";
import item from "../reducers/item";
import sort from "../reducers/sort";

export const store = configureStore({
  reducer: {
    data,
    filter,
    sort,
    item,
  },
});
