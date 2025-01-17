import { editRowValue } from "@/redux/rootSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export const EditableDiv = ({ column, row }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [rowValue, setRowValue] = useState({
    rowId: null,
    column: null,
    value: "",
  });

  return (
    <Input
      //   className="capitalize truncate border-none"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 truncate shadow-none border-r-2",
        "h-full px-4 py-3 rounded-none",
        (isHovered || isFocused) && "bg-blue-50"
      )}
      onChange={(e) =>
        dispatch(
          editRowValue({
            rowId: row.original.id,
            column: column,
            value: e.target.value,
          })
        )
      }
      value={row.getValue(column)}
    />
  );
};
