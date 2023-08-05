import {configureStore} from "@reduxjs/toolkit";
import titleReducer from "./titleSlice";
import usersReducer from "./usersSlice";
import calcReducer from "./calcSlice";

export const store = configureStore({
  reducer: {
    titleReducer,
    usersReducer,
    calcReducer
  }
})