import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { chartData } from "@/config/dashboard-data";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { HeadingXl, HeadingBase } from "@/components/ui/typography";
import SelectMonth from "@/components/ui/select-month";

const chartConfig = {
  desktop: {
    label: "Sales",
    color: "(var(--chart-1)",
  },
  mobile: {
    label: "Appointments",
    color: "(var(--chart-2)",
  },
};

const RevenueChart = () => {
  return (
    <div className="mb-10 md:mb-12">
      <div className="mb-6 md:mb-8 lg:mb-10 flex flex-col md:flex-row space-y-5 md:space-y-0 md:items-center md:justify-between">
        <HeadingXl className="text-[#3F3F44] font-semibold">Revenue</HeadingXl>
        <div className="flex flex-col-reverse md:flex-row gap-y-5 md:md-gap-y-0 md:items-center md:space-x-8">
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 inline-block rounded-full bg-[#5679FF]"></div>
              <HeadingBase className="ms-2 text-[#3F3F44]">Sales</HeadingBase>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 inline-block rounded-full bg-[#000000]"></div>
              <HeadingBase className="ms-2 text-[#3F3F44]">
                Appointments
              </HeadingBase>
            </div>
          </div>
          <SelectMonth />
        </div>
      </div>
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            domain={[0, 125]}
            ticks={[0, 25, 50, 75, 100, 125]}
            tickFormatter={(value) => `$${value}`}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="sales" fill="#5679FF" radius={0} />
          <Bar dataKey="appointments" fill="#101928" radius={0} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default RevenueChart;
