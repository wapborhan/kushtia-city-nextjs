import BreadCumb from "@/components/shared/BreadCumb";
import React from "react";
import About from "./About";
import List from "./List";

const page = () => {
  return (
    <>
      <BreadCumb title="পুলিশ স্টেশন" />
      <About />
      <List />
    </>
  );
};

export default page;
