import { configureStore } from "@reduxjs/toolkit";
import data from "../reducers/data";
import item from "../reducers/item";
import search from "../reducers/search";
import sort from "../reducers/sort";

export const store = configureStore({
  reducer: {
    data,
    sort,
    item,
    search,
  },
});
