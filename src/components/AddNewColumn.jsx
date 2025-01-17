import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useDispatch, useSelector } from "react-redux";
import { addColumn } from "../redux/rootSlice.jsx";

export const AddNewColumn = ({ setnewColPop }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const columns = useSelector((state) => state.root.columns);
  const [columnData, setColumnData] = useState({
    columnKey: "",
    header: "",
    type: "",
  });

  const handleSave = () => {
    if (!columnData.columnKey.trim() || !columnData.header.trim()) {
      setError("Column Key and Name are required fields");
      return;
    }
    if (
      columns
        .map((column) => column.accessorKey.toLowerCase())
        .includes(columnData.columnKey.trim().toLowerCase())
    ) {
      setError("Column Key already exist. Please create an unique column.");
      return;
    }
    dispatch(addColumn(columnData));
    setnewColPop(false);
  };

  const handleInputChange = (e) => {
    setError(""); // Clear error when user types
    setColumnData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Column Details</h4>
        <p className="text-sm text-muted-foreground">
          Set the Details for the Column.
        </p>
      </div>

      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="columnKey">Key *</Label>
          <Input
            id="columnKey"
            value={columnData.columnKey}
            onChange={handleInputChange}
            name="columnKey"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="header">Name *</Label>
          <Input
            id="header"
            className="col-span-2 h-8"
            value={columnData.header}
            onChange={handleInputChange}
            name="header"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="type">Type</Label>
          <Input
            id="type"
            value={columnData.type}
            onChange={handleInputChange}
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
        <Button onClick={handleSave}>Save</Button>
      </div>
    </div>
  );
};
