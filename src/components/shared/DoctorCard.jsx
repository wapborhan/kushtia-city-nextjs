const DoctorCard = ({ doctor }) => {
  return (
    <div className="doctor-card relative">
      <div className="info">
        <div className="img">
          <img
            src="https://healthxbd.com/_next/image?url=https%3A%2F%2Fcdn.healthxbd.com%2Fprod%2Fimg%2Fpropic%2F311b8500-8cf2-46b4-a5b9-6da66e6e7951-inbound5275680364695289737.jpg&w=256&q=75"
            alt="doctor"
            className="w-full"
          />
          <div className="flex flex-col justify-center items-center">
            <span>BMDC / Reg</span> <span>#61068</span>
          </div>
        </div>
        <div className="cont">
          <h1 className="!text-lg">Dr. Ashraf Siddiqui</h1>
          <p>MBBS,BCS,DA( BSMMU),EOC</p>
          <p>
            Anaesthesia,Analgesia,Pain,Palliative and Intensive Care Medicine
            Specialist
          </p>
          <p>10 Years of work experience overall</p>
        </div>
      </div>
      <div className="right">
        <div className="fee">
          <div className="online">
            Online Fee: <span className="text-red-600">৳ --</span>
          </div>
          <div className="offline">
            Chamber Fee: <span className="text-red-600">৳ 650</span>
          </div>
        </div>
        <div className="button">
          <button className="appoinment">Appoinment</button>
          <button className="profile">View Profile</button>
        </div>
      </div>
      <div className="verified">
        <span>verified</span>
      </div>
    </div>
  );
};

export default DoctorCard;
