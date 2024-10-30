import React from "react";
import MyCalendar from "./calendar";
import AppointmentsList from "./appointments-list";

const AppointmentsSetion = () => {
  return (
    <div className="grid grid-cols-12  gap-4 md:gap-6 lg:gap:8 mb-9 md:mb-10">
      <div className="col-span-12 lg:col-span-6">
        <MyCalendar />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <AppointmentsList />
      </div>
    </div>
  );
};

export default AppointmentsSetion;
