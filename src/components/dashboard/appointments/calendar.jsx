import React from "react";
import { Calendar } from "@/components/ui/calendar";

const MyCalendar = () => {
  const [date, setDate] = React.useState(new Date());
  return <Calendar mode="single" selected={date} onSelect={setDate} />;
};

export default MyCalendar;
