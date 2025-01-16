import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    addColumn: (state, action) => {},
  },
});

export const { addColumn } = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
