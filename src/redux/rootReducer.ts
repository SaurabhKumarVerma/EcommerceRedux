import { combineReducers } from "@reduxjs/toolkit";
import AuthSlices from "./slices/AuthSlices";

const rootReducer = combineReducers({
  auth: AuthSlices,
});

export type RootState = ReturnType<typeof rootReducer>;
