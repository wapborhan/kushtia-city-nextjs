import BreadCumb from "@/components/shared/BreadCumb";
import React from "react";
import About from "./About";
import Fireservices from "./Fireservices";

const page = () => {
  return (
    <>
      <BreadCumb title="ফায়ার সার্ভিস" />
      <About />
      <Fireservices />
    </>
  );
};

export default page;
