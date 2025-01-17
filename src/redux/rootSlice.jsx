import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowUpDown } from "lucide-react";

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
          header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                className="bg-transparent"
                onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
                }
              >
                {action.payload.header}
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            );
          },
        },
      ];
    },
  },
});

export const { addColumn } = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
