import React from "react";
import { CalendarIcon, User } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
export const UserMetaData = () => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar className="bg-red">
          <AvatarFallback className="bg-[#FEECDC]">
            <img src="/pf.jpeg" />
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-5">
          <Avatar className="bg-red">
            <AvatarFallback className="bg-[#FEECDC]">
              <img src="/pf.jpeg" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Vaibhav Ch</h4>
            <p className="text-sm">vaibhavch304@gmail.com</p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined January 2025
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
