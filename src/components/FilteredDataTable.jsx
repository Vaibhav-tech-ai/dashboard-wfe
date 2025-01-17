import {
  Search,
  Share,
  Download,
  Trash2,
  Filter,
  ArrowUpDown,
  Rows,
  Columns,
  Stars,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTable } from "./DataTable";
import { useState } from "react";

export const FilteredDataTable = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 gap-5">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search"
              className="pl-10 w-64"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 items-center">
            <Rows className="w-[14px]" />
            <span className="text-sm font-medium">1/1 Row</span>
          </div>
          <div className="flex gap-2 items-center">
            <Columns className="w-[14px]" />
            <span className="text-sm font-medium">3/3 Column</span>
          </div>

          <Button variant="outline" className="flex gap-2 items-center">
            <Filter className="w-[14px]" />F
            {/* <span className="text-sm font-medium">0 Filter</span> */}
          </Button>

          <div className="flex gap-2 items-center">
            <ArrowUpDown className="w-[14px]" />
            <span className="text-sm font-medium">Sort</span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button>
            <Stars />
            Enrich
          </Button>
          <Button variant="outline" size="icon">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="min-h-[100vh] flex-1  md:min-h-min">
        <DataTable />
      </div>
    </div>
  );
};
