import BreadCumb from "@/components/shared/BreadCumb";
import Hospital from "./Hospital";
import HospitalSearch from "./HospitalSearch";

const page = () => {
  return (
    <>
      <BreadCumb title="হাসপাতাল" />
      <HospitalSearch />
      <Hospital />
    </>
  );
};

export default page;
