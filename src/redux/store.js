import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootSlice.jsx";

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
