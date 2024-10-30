import React from "react";
import TopProducts from "./top-products";
import TopMembers from "./top-members";

const InsightsSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-6 lg:gap:8 mb-10 md:mb-12">
      <TopProducts />
      <TopMembers />
    </div>
  );
};

export default InsightsSection;
