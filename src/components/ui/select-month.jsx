import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectMonth = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a Month" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="jan">January</SelectItem>
          <SelectItem value="feb">Febraury</SelectItem>
          <SelectItem value="march">March</SelectItem>
          <SelectItem value="april">April</SelectItem>
          <SelectItem value="may">May</SelectItem>
          <SelectItem value="june">June</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
export default SelectMonth;
