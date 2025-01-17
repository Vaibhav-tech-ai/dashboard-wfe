import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/AppSidebar";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { UserMetaData } from "./UserMetaData";
import { DataTable } from "./DataTable";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Layout() {
  const [open, setOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [fileName, setFileName] = useState("Sample File Name");
  return (
    <div>
      <SidebarProvider
        open={open}
        onOpenChange={setOpen}
        style={{
          "--sidebar-width": "12rem",
          "--sidebar-width-mobile": "12rem",
        }}
      >
        <AppSidebar />
        <SidebarInset className="flex gap-5">
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4 w-[100%]">
              <div className="flex items-center justify-around gap-2 px-4">
                <SidebarTrigger style={{ backgroundColor: "white" }} />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Input
                  //   className="capitalize truncate border-none"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={cn(
                    "border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 truncate shadow-none border-r-4 text-md font-medium",
                    "h-full py-2",
                    (isHovered || isFocused) && "bg-gray-100"
                  )}
                  onChange={(e) => setFileName(e.target.value)}
                  value={fileName}
                />
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
          <DataTable fileName={fileName} />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
