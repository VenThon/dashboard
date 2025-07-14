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
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconUsers,
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
    {
      title: "Projects",
      href: "#",
      icon: IconFolder,
    },
    {
      title: "Team",
      href: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      href: "#",
      items: [
        {
          title: "Active Proposals",
          href: "#",
        },
        {
          title: "Archived",
          href: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      href: "#",
      items: [
        {
          title: "Active Proposals",
          href: "#",
        },
        {
          title: "Archived",
          href: "#",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      href: "#",
      items: [
        {
          title: "Active Proposals",
          href: "#",
        },
        {
          title: "Archived",
          href: "#",
        },
      ],
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
    <Sidebar className="bg-blue-950" collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="text-white [&_a:hover]:bg-gray-100 [&_a:hover]:text-blue-950">
            <SidebarMenuButton
              asChild
              className="text-white transition-colors data-[slot=sidebar-menu-button]:!p-1.5 hover:[&_span]:text-blue-950"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5 text-white" />
                <span className="text-base font-semibold">Poss Pov</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="text-white [&_a:hover]:bg-gray-100 [&_a:hover]:text-blue-950">
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
      </SidebarContent>
      <SidebarFooter className="text-white">
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
