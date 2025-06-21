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
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  const doctorList = doctors.map((doctor, idx) => {
    return <DoctorCard key={idx} doctor={doctor} />;
  });
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center">
      {doctorList}
    </div>
  );
};

export default DoctorList;
