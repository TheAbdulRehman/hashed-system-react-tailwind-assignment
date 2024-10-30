import React from "react";
import RecentAppointmentsTable from "./recent-appointments-table";
import { Card } from "@/components/ui/card";
import { Heading2xl } from "@/components/ui/typography";

const RecentAppointmentsSection = () => {
  return (
    <Card cardType="appointment">
      <Heading2xl className="font-semibold text-[#3F3F44] mb-5 lg:mb-7">
        Recent Appointments
      </Heading2xl>
      <RecentAppointmentsTable />
    </Card>
  );
};

export default RecentAppointmentsSection;
