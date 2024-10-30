import React from "react";
import { HeadingMd } from "@/components/ui/typography";
import AppointmentItem from "./appointment-item";
import { scheduledAppointments } from "@/config/dashboard-data";
import { ChevronIcon } from "@/components/icons/Icons";

const AppointmentsList = () => {
  return (
    <div className="">
      <HeadingMd className="font-semibold text-[#3F3F44]">
        Today’s Appointments
      </HeadingMd>
      <ul className="flex mt-5 md:mt-6 lg:mt-7 flex-col space-y-3 lg:space-y-4">
        {scheduledAppointments.map((appointment) => (
          <AppointmentItem key={appointment.id} {...appointment} />
        ))}
      </ul>
      <div className="mt-6 flex justify-center">
        <ChevronIcon />
      </div>
    </div>
  );
};

export default AppointmentsList;
