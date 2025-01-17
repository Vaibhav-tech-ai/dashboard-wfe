"use client";
import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  ArrowUpDown,
  ChevronDown,
  Circle,
  LucidePlayCircle,
  Play,
  PlayCircle,
  Share2,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AddNewColumn } from "./AddNewColumn";
import {
  Search,
  Share,
  Download,
  Trash2,
  Filter,
  Rows,
  Columns,
  Stars,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useDispatch, useSelector } from "react-redux";
import { useIsMobile } from "@/hooks/use-mobile";
import { addRow } from "@/redux/rootSlice";
import EnrichDataModal from "./EnrichDataModal";
import { downloadCSV } from "@/helper";

const data = [
  {
    id: 1,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "success",
    content: "Bitscale Evaluation - Account relevancy",
    icon: "🔵",
  },
  {
    id: 2,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "error",
    content: "BMW Evaluation - Relevancy check",
    icon: "🔵",
    error: "cell data size exceeds limit",
  },
  {
    id: 3,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "link",
    content: "Google Evaluation - Lilevancy check",
    icon: "🔵",
    link: "https://www.linkedin.com/bitS",
  },
  {
    id: 4,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "loading",
    content: "Apple Evaluation - Olvancy check",
    icon: "🟡",
  },
  {
    id: 5,
    timestamp: "Oct 12, 2024 at 14:08 PM",
    status: "loading",
    content: "Figma Evaluation - Evancy check",
    icon: "⚪",
  },
];
// export const columns = [
//   {
//     accessorKey: "serial",
//     header: "",
//     cell: ({ row }) => <div className="capitalize">{row.index + 1}</div>,
//   },
//   {
//     accessorKey: "open",
//     header: "",
//     cell: ({ row }) => (
//       <Button
//         variant="ghost"
//         size="icon"
//         className="bg-transparent hover:border-transparent focus:outline-none"
//       >
//         <LucidePlayCircle className="h-10 w-10" />
//       </Button>
//     ),
//   },
//   {
//     accessorKey: "timestamp",
//     header: "Input Column",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("timestamp")}</div>
//     ),
//   },
//   {
//     accessorKey: "status",
//     header: "Action Column",
//     cell: ({ row }) => (
//       <div className="lowercase">{row.getValue("status")}</div>
//     ),
//   },
//   {
//     accessorKey: "Enrich Company",
//     header: () => <div className="text-right">Erich Company</div>,
//     cell: ({ row }) => (
//       <div className="lowercase">{row.getValue("content")}</div>
//     ),
//     // cell: ({ row }) => {
//     //   const amount = parseFloat(row.getValue("content"));

//     //   // Format the amount as a dollar amount
//     //   const formatted = new Intl.NumberFormat("en-US", {
//     //     style: "currency",
//     //     currency: "USD",
//     //   }).format(amount);

//     //   return <div className="text-right font-medium">{formatted}</div>;
//     // },
//   },
//   {
//     accessorKey: "actions",
//     header: () => (
//       <Popover>
//         <PopoverTrigger asChild>
//           <Button
//             variant="ghost"
//             className="items-center bg-white w-[100%] hover:border-transparent focus:outline-none"
//           >
//             + Add Column
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-80">
//           <AddNewColumn />
//         </PopoverContent>
//       </Popover>
//     ),
//     cell: ({ row }) => {
//       return <></>;
//     },
//   },
// ];

export function DataTable({ fileName }) {
  const dispatch = useDispatch();
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [globalFilter, setGlobalFilter] = React.useState([]);
  const columns = useSelector((state) => state.root.columns);
  const rowValues = useSelector((state) => state.root.rowValues);

  const [newColPop, setnewColPop] = React.useState(false);
  const isMobile = useIsMobile();
  const table = useReactTable({
    data: rowValues,
    columns: [
      ...columns,
      {
        accessorKey: "actions",
        header: () => (
          <Popover open={newColPop} onOpenChange={setnewColPop}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                className="items-center font-medium text-black bg-white w-[100%] hover:border-transparent focus:outline-none"
              >
                + Add Column
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <AddNewColumn setnewColPop={setnewColPop} />
            </PopoverContent>
          </Popover>
        ),
        cell: ({ row }) => {
          return <></>;
        },
        enableHiding: false,
      },
    ],
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      globalFilter,
    },
  });
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 w-[100%]">
      <EnrichDataModal open={open} onOpenChange={setOpen} />
      {!isMobile ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 gap-5 flex-wrap">
            <div className="relative ">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 max-w-full" />
              <Input
                placeholder="Search"
                className="pl-10 w-64"
                value={globalFilter ?? ""}
                onChange={(event) => table.setGlobalFilter(event.target.value)}
              />
            </div>
            <div className="flex gap-2 items-center">
              {" "}
              <div className="flex gap-2 items-center">
                <Rows className="w-[14px]" />
                <span className="text-sm font-medium">
                  {rowValues.length} Rows
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <Columns className="w-[14px]" />
                <span className="text-sm font-medium">
                  {columns.length - 2}/{columns.length - 2} Column
                </span>
              </div>
            </div>

            {/* 
          <Button className="flex gap-2 items-center">
            <Filter className="w-[14px]" />
            <span className="text-sm font-medium">0 Filter</span>
          </Button> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="ml-auto flex gap-2 items-center"
                >
                  <Filter className="w-[14px]" /> Filter Columns <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {table
                  .getAllColumns()
                  .filter((column) => column.getCanHide())
                  .map((column) => {
                    return (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) =>
                          column.toggleVisibility(!!value)
                        }
                      >
                        {column.columnDef?.name}
                      </DropdownMenuCheckboxItem>
                    );
                  })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center space-x-2">
            <Button onClick={() => setOpen(true)}>
              <Stars />
              Enrich
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => downloadCSV(fileName, rowValues)}
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500 max-w-full" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-64"
                  value={globalFilter ?? ""}
                  onChange={(event) =>
                    table.setGlobalFilter(event.target.value)
                  }
                />
              </div>
              <div className="flex gap-2 items-center">
                {" "}
                <div className="flex gap-2 items-center">
                  <Rows className="w-[14px]" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {rowValues.length} Rows
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <Columns className="w-[14px]" />
                  <span className="text-sm font-medium whitespace-nowrap">
                    {columns.length - 2}/{columns.length - 2} Column
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex gap-2 items-center">
                    <Filter className="w-[14px]" /> Filter Columns{" "}
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.columnDef?.name}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex gap-2 items-center ml-auto">
                <Button onClick={() => setOpen(true)}>
                  <Stars />
                  Enrich
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => downloadCSV(fileName, rowValues)}
                >
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-md border overflow-x-auto">
        <Table className="min-w-full w-full relative">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-b border-slate-200"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="border-r border-slate-200"
                    >
                      <div className="flex items-center gap-1">
                        <div>{header.column.columnDef.icon}</div>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </div>
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-b border-slate-200"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="border-r border-slate-200 w-auto"
                    >
                      {cell.column.columnDef.accessorKey === "serial"
                        ? index + 1
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Button
        variant="ghost"
        className="items-start justify-start bg-white w-[100%] hover:border-transparent focus:outline-none"
        onClick={() => dispatch(addRow())}
      >
        + Add Row
      </Button>
    </div>
  );
}
