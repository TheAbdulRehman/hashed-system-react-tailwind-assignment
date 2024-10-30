import React from "react";
import { BodySm, BodyBase } from "@/components/ui/typography";

const AppointmentItem = ({
  imgUrl,
  timeSlot,
  service,
  clientName,
  month,
  date,
}) => {
  return (
    <li className="p-4 lg:p-4.5 rounded-2xl bg-[#101928] text-white flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-[72px] h-[72px] bg-gray-400 rounded-md">
          <img src={imgUrl} alt={clientName} />
        </div>
        <div className="flex flex-col space-y-1.5">
          <BodySm className="font-light">{timeSlot}</BodySm>
          <BodyBase className="font-medium">{service}</BodyBase>
          <BodySm className="font-light">{clientName}</BodySm>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <p className="font-medium text-5xl leading-tight">{date}</p>
        <BodySm className="font-light">{month}</BodySm>
      </div>
    </li>
  );
};

export default AppointmentItem;
