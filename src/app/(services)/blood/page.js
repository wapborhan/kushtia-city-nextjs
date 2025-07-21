import About from "./About";
import Hero from "./Hero";
import Donar from "./Donar";
import BreadCumb from "@/components/shared/BreadCumb";
import BloodRequest from "./BloodRequest";

const Blood = () => {
  return (
    <>
      <BreadCumb title="রক্ত" />
      <Hero />
      <About />
      <BloodRequest />
      <Donar />
    </>
  );
};

export default Blood;
