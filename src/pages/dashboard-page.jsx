import React from "react";
import StatsSection from "@/components/dashboard/stats/stats-section";
import { Heading3xl } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import AppointmentsSetion from "@/components/dashboard/appointments/appointments-setion";
import InsightsSection from "@/components/dashboard/insights/insights-section";
import RecentAppointmentsSection from "@/components/dashboard/appointments/recent-appointments-section";
import RevenueChart from "@/components/dashboard/charts/revenue-chart";
import { CalendarDays } from "lucide-react";

const DashboardPage = () => {
  return (
    <div>
      <div className="flex flex-col space-y-6 md:space-y-0 items-start justify-start md:flex-row md:items-center md:justify-between mt-4 md:mt-0 mb-10 md:mb-12">
        <Heading3xl>
          <span className="font-light">Good Morning,</span>{" "}
          <span className="font-semibold">Bella Famina</span>
        </Heading3xl>
        <Button className="flex items-center gap-4">
          <CalendarDays className="text-white" />
          <span className="leading-tight font-semibold text-white text-base">
            New Appointment
          </span>
        </Button>
      </div>
      <StatsSection />
      <RevenueChart />
      <AppointmentsSetion />
      <InsightsSection />
      <RecentAppointmentsSection />
    </div>
  );
};

export default DashboardPage;
