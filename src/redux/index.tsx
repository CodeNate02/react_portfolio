import { configureStore } from "@reduxjs/toolkit";
import string from "./stringReducer";

const Store = configureStore({
  reducer: {
    style: string("red", "style"),
  },
});
