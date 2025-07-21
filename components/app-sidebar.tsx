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
  IconListDetails,
  IconReport,
} from "@tabler/icons-react";

const data = {
  user: {
    name: "PossPov",
    email: "posspov@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: IconDashboard,
    },
    {
      title: "Lifecycle",
      href: "/dashboard/lifecycle",
      icon: IconListDetails,
    },
    {
      title: "Analytics",
      href: "#",
      icon: IconChartBar,
    },
  ],

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
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter className="text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
