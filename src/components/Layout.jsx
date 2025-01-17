import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/AppSidebar";
import {
  Search,
  Play,
  Share,
  Download,
  Trash2,
  Plus,
  Filter,
  ArrowUpDown,
  User,
  Rows,
  Columns,
  Star,
  Stars,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { UserMetaData } from "./UserMetaData";
import { DataTable } from "./DataTable";
import { FilteredDataTable } from "./FilteredDataTable";

export default function Layout() {
  return (
    <div>
      <SidebarProvider
        style={{
          "--sidebar-width": "20rem",
          "--sidebar-width-mobile": "20rem",
        }}
      >
        <AppSidebar />
        <SidebarInset className="flex gap-5">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 w-[100%]">
              <div className="flex items-center justify-around gap-2 px-4">
                <SidebarTrigger style={{ backgroundColor: "white" }} />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <span className="truncate px-4 text-md font-medium">
                  Sample File Name
                </span>
              </div>
              <div className="flex items-center gap-5 px-4 ml-auto">
                <div className="flex items-center space-x-2">
                  <Switch
                    className="hover:border-transparent focus:outline-none"
                    id="auto-save"
                  />
                  <Label htmlFor="auto-save" className="whitespace-nowrap">
                    Auto Save
                  </Label>
                </div>
                <UserMetaData />
              </div>
            </div>
          </header>
          <DataTable />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
