import BreadCumb from "@/components/shared/BreadCumb";
import Hospital from "./Hospital";
import HospitalSearch from "./HospitalSearch";
import { HospitalLinks } from "../doctor/HospitalLinks";

const page = () => {
  return (
    <>
      <BreadCumb title="হাসপাতাল" />
      <HospitalSearch />
      <Hospital hospitals={HospitalLinks} />
    </>
  );
};

export default page;
