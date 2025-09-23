import HosptalCard from "@/components/shared/HosptalCard";
import React from "react";

const Hospital = ({ hospitals }) => {
  return (
    <div className="grid grid-cols-2 gap-5 container">
      {hospitals.map((hospital, idx) => {
        return <HosptalCard key={idx} hospital={hospital} />;
      })}
    </div>
  );
};

export default Hospital;
