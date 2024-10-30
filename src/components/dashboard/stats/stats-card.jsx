import React from "react";
import { Card } from "../../ui/card";
import { Heading4xl, HeadingMd } from "@/components/ui/typography";
import StatsChart from "@/components/dashboard/charts/stats-chart";

const StatsCard = ({ stats }) => {
  const { title, amount, trend, icon, chartsData, chartConfig, dataKey } =
    stats;
  return (
    <Card cardType="stats">
      <div className="flex items-center justify-between mb-4">
        <div>{icon}</div>

        <Heading4xl
          className={`${
            trend === "increase" ? "text-secondary" : "text-destructive"
          } font-medium`}
        >
          {amount}
        </Heading4xl>
      </div>
      <div className="flex items-center justify-between">
        <HeadingMd className="font-semibold">{title}</HeadingMd>
        <StatsChart
          chartsData={chartsData}
          chartConfig={chartConfig}
          dataKey={dataKey}
          trend={trend}
        />
      </div>
    </Card>
  );
};

export default StatsCard;
