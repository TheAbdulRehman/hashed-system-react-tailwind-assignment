import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  useSidebar,
} from "@/components/ui/sidebar";
import { X } from "lucide-react";

import Menu from "./sidebar-menu";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar variant="sidebar">
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <img src="/images/logo.png" alt="NSTYLE company Logo" />
            <X
              onClick={() => toggleSidebar()}
              size={24}
              strokeWidth={2.5}
              className="cursor-pointer"
            />
          </div>
          <SidebarGroupContent>
            <Menu />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
