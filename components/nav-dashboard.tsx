"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { FileText, LucideIcon } from "lucide-react";
import { useLocale } from "next-intl";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

interface SideBarMenuBtnProps {
  href: string | string[];
  title: string;
  icon: LucideIcon;
}
const SideBarMenuBtn = ({
  href,
  title,
  icon: Icon,
  ...props
}: SideBarMenuBtnProps) => {
  const pathname = usePathname();
  const locale = useLocale();
  const params = useParams();

  const hrefs = Array.isArray(href) ? href : [href];

  // Convert dynamic paths to regex patterns
  const localizedPatterns = hrefs.map((path) => {
    const fullPath = `/${locale}${path}`;
    const regexPattern = fullPath.replace(
      /\[([^\]]+)\]/g,
      (_: string, param: string) => {
        const paramsValue = params[param];
        if (typeof paramsValue === "string") {
          return paramsValue;
        }
        return "[^/]+";
      },
    );
    return new RegExp(`^${regexPattern}$`);
  });

  const isActive = localizedPatterns.some((regex) => regex.test(pathname));

  return (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      tooltip={title}
      className="data-[active=true]:bg-secondary text-white hover:text-white data-[active=true]:text-white"
    >
      <Link href={Array.isArray(href) ? href[0] : href} {...props}>
        <Icon />
        <span>{title}</span>
      </Link>
    </SidebarMenuButton>
  );
};

export default function NavBarDashboard() {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu key="lifecycle">
          <SidebarMenuItem>
            <SideBarMenuBtn
              icon={FileText}
              href={["/dashboard/lifecyle", "/dashboard/lifecycle/create"]}
              title="Lifecycle"
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
