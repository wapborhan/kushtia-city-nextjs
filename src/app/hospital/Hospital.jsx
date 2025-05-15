import HosptalCard from "@/components/shared/HosptalCard";
import React from "react";

const Hospital = () => {
  return (
    <div className="grid grid-cols-2 gap-5 container">
      <HosptalCard />
      <HosptalCard />
      <HosptalCard />
      <HosptalCard />
    </div>
  );
};

export default Hospital;
