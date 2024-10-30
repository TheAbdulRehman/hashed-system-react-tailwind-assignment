import React from "react";
import { recentAppointments } from "@/config/dashboard-data";
import { BodyBase, BodySm } from "@/components/ui/typography";
import Badge from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RecentAppointmentsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-0">
          <TableHead>Service</TableHead>
          <TableHead>Employee</TableHead>
          <TableHead>Sale</TableHead>
          <TableHead className="text-right lg:pe-10">Earnings</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentAppointments.map((appointment) => (
          <TableRow key={appointment.id}>
            <TableCell className="flex items-center space-x-2 md:space-x-3 lg:space-x-4">
              <img
                className="rounded w-12 h-12"
                src={appointment.imgUrl}
                alt={appointment.employeeName}
              />
              <div>
                <BodyBase className="font-medium text-[#101928]">
                  {appointment.service}
                </BodyBase>
                <BodySm className="font-normal text-[#3F3F44]">
                  {appointment.date}
                </BodySm>
              </div>
            </TableCell>
            <TableCell>{appointment.employeeName}</TableCell>
            <TableCell>{appointment.sale}</TableCell>
            <TableCell className="text-right">
              <Badge>${appointment.earnings}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RecentAppointmentsTable;
