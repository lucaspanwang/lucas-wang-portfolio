import { configureStore } from "@reduxjs/toolkit";
import { defaultReducer } from "./reducers";
export const initialState = {
  isAboutInView: true,
  sectionName: "",
};

export const store = configureStore({
  reducer: defaultReducer,
});
