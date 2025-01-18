"use client";
import {
  ALargeSmall,
  Apple,
  ArrowUpDown,
  Car,
  ChartBar,
  ChartGanttIcon,
  Codesandbox,
  Figma,
  FormInput,
  LucideFigma,
  LucidePlayCircle,
  PackageOpen,
  SquareActivity,
  Trash,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { AddNewColumn } from "../components/AddNewColumn";
import { EditableDiv } from "@/components/EditableDiv";

export const initialState = {
  columnData: {},
  columns: [
    {
      accessorKey: "serial",
      header: "",
      cell: ({ row }) => <></>,
      enableHiding: false,
    },
    {
      accessorKey: "open",
      header: "",
      cell: ({ row }) => (
        <Button
          variant="ghost"
          size="icon"
          className="bg-transparent hover:border-transparent focus:outline-none p-0"
        >
          <LucidePlayCircle style={{ color: "#525CE9" }} className="p-0" />
        </Button>
      ),
      enableHiding: false,
    },
    {
      accessorKey: "timestamp",
      name: "Input Column",
      icon: <ALargeSmall className="text-white bg-black"/>,
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

      cell: ({ row }) => <EditableDiv column={"timestamp"} row={row} />,
    },
    {
      accessorKey: "status",
      icon: <Codesandbox className="text-black"/>,
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="bg-transparent"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Action Column
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      name: "Action Column",
      cell: ({ row }) => <EditableDiv column={"status"} row={row} />,
    },
    {
      accessorKey: "content",
      icon: <SquareActivity className="text-white bg-yellow-600"/>,
      name: "Enrich Company",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="bg-white"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Enrich Company
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      // header: "Erich Company",
      cell: ({ row }) => <EditableDiv column={"content"} row={row} />,
    },
  ],
  rowValues: [
    {
      id: 1,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: "success",
      content: "Bitscale Evaluation - Account relevancy",
    },
    {
      id: 2,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: "cell data size exceeds limit",
      content: "BMW Evaluation - Relevancy check",
    },
    {
      id: 3,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: "https://www.linkedin.com/bitS",
      content: "Google Evaluation - Lilevancy check",
    },
    {
      id: 4,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: "loading",
      content: "Apple Evaluation - Olvancy check",
    },
    {
      id: 5,
      timestamp: "Oct 12, 2024 at 14:08 PM",
      status: "loading",
      content: "Figma Evaluation - Evancy check",
    },
  ],
};
