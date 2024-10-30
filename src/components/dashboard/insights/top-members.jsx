import React from "react";
import { Card } from "@/components/ui/card";
import { HeadingXl, BodyBase, BodySm } from "@/components/ui/typography";
import { topMembers } from "@/config/dashboard-data";
import SelectMonth from "../../ui/select-month";

const TopMembers = () => {
  return (
    <Card cardType="topProducts">
      <div className="flex items-center justify-between mb-6 md:mb-8">
        <HeadingXl className="text-[#3F3F44] font-semibold">
          Top Team Members
        </HeadingXl>
        <SelectMonth />
      </div>
      <div className="flex flex-col space-y-4">
        {topMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 border-b last:border-b-0 pb-4 last:pb-0"
          >
            <img
              className="rounded w-16 h-16"
              src={member.imgUrl}
              alt={member.name}
            />
            <div>
              <BodyBase className="font-medium text-[#101928]">
                {member.name}
              </BodyBase>
              <BodySm className="font-normal text-[#3F3F44] opacity-70">
                {member.numberOfAppoitments} Appointments
              </BodySm>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopMembers;
