import React from "react";
import StatsCard from "./stats-card";
import { statsData } from "@/components/dashboard/stats/stats-data";

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap:8 mb-10 md:mb-12">
      {statsData.map((stats) => (
        <StatsCard key={stats.id} stats={stats} />
      ))}
    </div>
  );
};

export default StatsSection;
