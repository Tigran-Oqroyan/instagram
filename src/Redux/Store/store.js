import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { infoAPI } from "../RTKqueries/infoAPI";

const reducer = combineReducers({
  [infoAPI.reducerPath]: infoAPI.reducer,
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(infoAPI.middleware),
});
