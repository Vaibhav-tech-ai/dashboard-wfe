import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addColumn } from "../redux/rootSlice.jsx";
export const AddNewColumn = ({ setnewColPop }) => {
  const dispatch = useDispatch();

  const [columnData, setColumnData] = useState({
    accessorKey: "",
    header: "",
    type: "",
  });
  console.log(columnData);
  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Column Details</h4>
        <p className="text-sm text-muted-foreground">
          Set the Details for the Column.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Key</Label>
          <Input
            id="width"
            value={columnData["accessorKey"]}
            onChange={(e) =>
              setColumnData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            name="accessorKey"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Name</Label>
          <Input
            id="width"
            className="col-span-2 h-8"
            value={columnData["header"]}
            onChange={(e) =>
              setColumnData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            name="header"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Type</Label>
          <Input
            id="maxWidth"
            value={columnData["type"]}
            onChange={(e) =>
              setColumnData((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            name="type"
            className="col-span-2 h-8"
          />
        </div>
      </div>
      <Separator orientation="horizontal" />
      <div className="flex gap-2 ml-auto">
        <Button
          variant="destructive"
          onClick={() => {
            setnewColPop(false);
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            dispatch(addColumn(columnData));
            setnewColPop(false);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
