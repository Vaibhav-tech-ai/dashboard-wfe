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
                <span className="px-4 text-md font-medium">
                  Sample File Name
                </span>
              </div>
              <div className="flex items-center gap-5 px-4 ml-auto">
                <div className="flex items-center space-x-2">
                  <Switch
                    style={{
                      backgroundColor: "green",
                    }}
                    className="hover:border-transparent focus:outline-none"
                    id="auto-save"
                  />
                  <Label htmlFor="auto-save">Auto Save</Label>
                </div>
                <UserMetaData />
              </div>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 gap-5">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search"
                    className="pl-10 w-64"
                    // value={searchTerm}
                    // onChange={(e) => setSearchTerm(e.target.value)}
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

                <div className="flex gap-2 items-center">
                  <Filter className="w-[14px]" />
                  <span className="text-sm font-medium">0 Filter</span>
                </div>

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
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
