import {
  CreditCard,
  Coins,
  Puzzle,
  LucideDatabaseZap,
  Table2,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { PaymentCard } from "./PaymentCard";

// Menu items.
const items = [
  {
    title: "Grid",
    url: "#",
    icon: Table2,
  },
  {
    title: "Playbook",
    url: "#",
    icon: Puzzle,
  },
  {
    title: "Integrations",
    url: "#",
    icon: Coins,
  },
];

const footer = [
  {
    title: "Payment",
    url: "#",
    icon: CreditCard,
    color: "black",
  },
  {
    title: "Credits",
    url: "#",
    icon: LucideDatabaseZap,
    color: "rgba(153, 21, 75, 1)",
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild tooltip={item.title}>
                    <a href={item.url}>
                      <item.icon style={{ color: "black" }} />
                      <span style={{ color: "black" }}>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {footer.map((item) =>
            item.title === "Payment" ? (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon style={{ color: item.color }} />
                        <span style={{ color: item.color }}>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </HoverCardTrigger>
                <HoverCardContent side="right" className="w-80">
                  <PaymentCard />
                </HoverCardContent>
              </HoverCard>
            ) : (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href={item.url}>
                    <item.icon style={{ color: item.color }} />
                    <span style={{ color: item.color }}>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
