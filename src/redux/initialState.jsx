"use client";
import { ArrowUpDown, FormInput, LucidePlayCircle } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { AddNewColumn } from "../components/AddNewColumn";

export const initialState = {
  columnData: {},
  columns: [
    {
      accessorKey: "serial",
      header: "",
      cell: ({ row }) => <></>,
      enableHiding: false,
      enablePinning: false
    },
    {
      accessorKey: "open",
      header: "",
      cell: ({ row }) => (
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent hover:border-transparent focus:outline-none"
        >
          <LucidePlayCircle className="h-10 w-10 p-0" />
        </Button>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "timestamp",
      name: "Input Column",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Input Column
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },

      cell: ({ row }) => (
        <div className="capitalize truncate">{row.getValue("timestamp")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: "Action Column",
      name: "Action Column",
      cell: ({ row }) => (
        <div className="capitalize truncate">{row.getValue("status")}</div>
      ),
    },
    {
      accessorKey: "content",
      name: "Erich Company",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="bg-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Erich Company
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      // header: "Erich Company",
      cell: ({ row }) => (
        <div className="capitalize truncate">{row.getValue("content")}</div>
      ),
    },
  ],
};
