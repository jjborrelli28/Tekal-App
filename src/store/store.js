import { configureStore } from "@reduxjs/toolkit";
import data from "../reducers/data";

export const store = configureStore({
  reducer: {
    data,
  },
});
