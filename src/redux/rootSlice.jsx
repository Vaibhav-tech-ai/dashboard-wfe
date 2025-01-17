import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState.jsx";
import { Button } from "@/components/ui/button.jsx";
import { ArrowUpDown } from "lucide-react";
import { EditableDiv } from "@/components/EditableDiv.jsx";

export const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    addColumn: (state, action) => {
      state.columns = [
        ...state.columns,
        {
          ...action.payload,
          accessorKey: action.payload.columnKey,
          cell: ({ row }) => (
            <EditableDiv column={action.payload.columnKey} row={row} />
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

      state.rowValues = state.rowValues.map((value) => ({
        ...value,
        [action.payload.columnKey]: "",
      }));
    },
    addRow: (state, action) => {
      const newRow = {};

      Object.keys(state.rowValues[0]).map((key) => (newRow[key] = ""));
      state.rowValues = [
        ...state.rowValues,
        { ...newRow, id: state.rowValues.length + 1 },
      ];
    },
    editRowValue: (state, action) => {
      const { rowId, column, value } = action.payload;
      state.rowValues = state.rowValues.map((row) =>
        row.id === +rowId ? { ...row, [column]: value } : row
      );
    },
  },
});

export const { addColumn, addRow, editRowValue } = rootSlice.actions;
export const rootReducer = rootSlice.reducer;
