import DoctorCard from "@/components/shared/DoctorCard";
import React from "react";

const DoctorList = () => {
  const doctors = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];

  const doctorList = doctors.map((doctor, idx) => {
    return <DoctorCard key={idx} doctor={doctor} />;
  });
  return <div className="grid grid-cols-2 gap-4">{doctorList}</div>;
};

export default DoctorList;
