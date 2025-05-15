import BreadCumb from "@/components/shared/BreadCumb";
import Hospital from "./Hospital";
import HospitalSearch from "./HospitalSearch";

const page = () => {
  return (
    <div>
      <BreadCumb title="হাসপাতাল" />
      <HospitalSearch />
      <Hospital />
    </div>
  );
};

export default page;
