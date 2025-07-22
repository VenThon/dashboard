"use client";

import * as React from "react";

import { NavDocuments } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileWord,
  IconInnerShadowTop,
  IconReport,
} from "@tabler/icons-react";

import NavBarDashboard from "./nav-dashboard";

const data = {
  user: {
    name: "PossPov",
    email: "posspov@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },

  documents: [
    {
      name: "Data Library",
      href: "#",
      icon: IconDatabase,
    },
    {
      name: "Reports",
      href: "#",
      icon: IconReport,
    },
    {
      name: "Word Assistant",
      href: "#",
      icon: IconFileWord,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="bg-blue-900" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="text-white [&_a:hover]:bg-gray-100 [&_a:hover]:text-blue-950">
            <SidebarMenuButton
              asChild
              className="text-white transition-colors data-[slot=sidebar-menu-button]:!p-1.5 hover:[&_span]:text-blue-950"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-8 text-white hover:text-blue-950" />
                <span className="text-2xl font-bold">Poss Pov</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="text-3xl font-bold text-white [&_a:hover]:bg-gray-100 [&_a:hover]:text-blue-950">
        <NavBarDashboard />
        <SidebarMenu>
          {/* <NavBarDashboard /> */}
          <SidebarMenuItem>
            <NavMain
              items={[
                {
                  title: "Dashboard",
                  href: "/dashboard",
                  icon: IconDashboard,
                },
                {
                  title: "Analytics",
                  href: "#",
                  icon: IconChartBar,
                },
                {
                  icon: IconFileWord,
                  title: "Lifecycle",
                  href: ["/dashboard/lifecycle", "/dashboard/lifecycle/create"],
                },
              ]}
            />
          </SidebarMenuItem>
        </SidebarMenu>
        {/* <NavMain items={data.navMain} /> */}
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter className="text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
