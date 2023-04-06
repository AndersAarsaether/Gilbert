import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer";
import themeReducer from "./theme/reducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
