import { Line, LineChart } from "recharts";
import { ChartContainer } from "@/components/ui/chart";

export default function StatsChart({
  chartsData,
  chartConfig,
  dataKey,
  trend,
}) {
  return (
    <ChartContainer config={chartConfig} className="h-[48px]">
      <LineChart
        accessibilityLayer
        data={chartsData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <defs>
          <linearGradient id="increaseGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="45%" stopColor="#007930" stopOpacity={1} />
            <stop offset="100%" stopColor="#CCEABB" stopOpacity={0.5} />
          </linearGradient>
          <linearGradient id="decreaseGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="45%" stopColor="#FFB3B3" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#F52525" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Line
          dataKey={dataKey}
          type="linear"
          stroke={`url(#${
            trend === "increase" ? "increaseGradient" : "decreaseGradient"
          })`}
          strokeWidth={4}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
