import {
  DollarIcon,
  CustomerIcon,
  CalendarIcon,
} from "@/components/icons/Icons";

export const statsData = [
  {
    id: 1,
    title: "Total Revenue",
    amount: 1682,
    trend: "increase",
    icon: <DollarIcon />,
    chartsData: [
      { month: "January", revenue: 25 },
      { month: "February", revenue: 39 },
      { month: "March", revenue: 29 },
      { month: "April", revenue: 45 },
      { month: "May", revenue: 33 },
      { month: "June", revenue: 51 },
    ],
    chartConfig: {
      revenue: {
        label: "Revenue",
        color: "var(--chart-1)",
      },
    },
    dataKey: "revenue",
  },
  {
    id: 2,
    title: "Total Customers",
    amount: 60,
    trend: "increase",
    icon: <CustomerIcon />,
    chartsData: [
      { month: "January", customers: 25 },
      { month: "February", customers: 39 },
      { month: "March", customers: 29 },
      { month: "April", customers: 45 },
      { month: "May", customers: 33 },
      { month: "June", customers: 51 },
    ],
    chartConfig: {
      customers: {
        label: "Customers",
        color: "var(--chart-2)",
      },
    },
    dataKey: "customers",
  },
  {
    id: 3,
    title: "Total Appointments",
    amount: 78,
    trend: "decrease",
    icon: <CalendarIcon />,
    chartsData: [
      { month: "January", appointments: 51 },
      { month: "February", appointments: 33 },
      { month: "March", appointments: 45 },
      { month: "April", appointments: 29 },
      { month: "May", appointments: 39 },
      { month: "June", appointments: 24 },
    ],
    chartConfig: {
      appointments: {
        label: "Appointments",
        color: "var(--chart-3)",
      },
    },
    dataKey: "appointments",
  },
];
