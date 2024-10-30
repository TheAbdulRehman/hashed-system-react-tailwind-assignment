import React from "react";
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import SidebarHeader from "./sidebar-header";

export default function AppLayout() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <main className="w-full">
        <SidebarHeader />
        <div className="p-4 md:p-8 lg:p-12">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
