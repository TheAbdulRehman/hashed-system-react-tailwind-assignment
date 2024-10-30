import React from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSidebar } from "../ui/sidebar";
import { MenuIcon } from "@/components/icons/Icons";
import { HeadingXl, BodySm } from "../ui/typography";
import { BellIcon } from "@/components/icons/Icons";

const SidebarHeader = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="flex items-center justify-between pt-4 ps-4 pe-4 md:ps-6 lg:ps-9 md:pe-8 lg:pe-12">
      <div>
        <MenuIcon onClick={() => toggleSidebar()} />
      </div>
      <div className="flex items-center space-x-3 md:space-x-6">
        <div className="flex items-center space-x-2 md:space-x-4">
          <Avatar>
            <AvatarImage src="/images/bella-avatar.png" />
          </Avatar>
          <div>
            <HeadingXl className="font-bold text-[#101928]">
              Bella Famina
            </HeadingXl>
            <BodySm className="font-normal text-[#7B7B7B]">
              Joined 2 months ago
            </BodySm>
          </div>
        </div>
        <img
          className="w-10 h-10"
          src="/images/hr-manager.png"
          alt="HR Manager Icon"
        />
        <div className="relative">
          <div className="absolute top-1 right-0 bg-blue-500 w-3 h-3 rounded-full z-10"></div>
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
