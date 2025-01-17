import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.jsx";

export const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns = [
        ...state.columns,
        {
          ...action.payload,
          cell: ({ row }) => (
            <div className="capitalize">
              {row.getValue(action.payload.accesorKey)}
            </div>
          ),
        },
      ];
    },
  },
});

export const { addColumn } = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
