const DonarCard = ({ data }) => {
  const { image, name, location, bloodGroup, connect } = data;

  return (
    <div className="th-team team-element  text-center mt-4">
      <div className="box-img">
        <img src={image} alt="Team" />
      </div>
      <div className="icons">
        <a href={`tel:${connect}`} className="icon-btn arrow-icon">
          <i className="fal fa-phone"></i>
        </a>{" "}
        <a href={`sms:${connect}`} className="icon-btn arrow-icon">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <div className="box-content">
        <span className="icon-btn whatsapp">{bloodGroup}</span>
        <h3 className="box-title">{name}</h3>
        <span className="box-desig">{location}</span>
        <span className="box-desig mt-2">সর্বশেষ রক্তদানঃ 12 Feb 2025</span>
      </div>
    </div>
  );
};

export default DonarCard;
