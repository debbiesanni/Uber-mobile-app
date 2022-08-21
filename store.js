import { configureStore } from "@reduxjs/toolkit";
import navReduccer from "./slices/navSlice.js";

export const store = configureStore({
  reducer: {
    nav: navReduccer,
  },
});
