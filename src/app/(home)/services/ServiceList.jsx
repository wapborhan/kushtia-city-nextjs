const ServiceList = () => {
  return (
    <div className="slider-wrap text-center">
      <div className="grid grid-cols-4 gap-8">
        {[1, 2, 3, 4, 1, 2, 3, 4].map((item, index) => (
          <div key={index}>
            <div className="service-block">
              <div className="box-img">
                <img
                  src={`/assets/img/service/service_block_${item}.jpg`}
                  alt="Service"
                />
              </div>
              <a href="service-details.html" className="icon-btn">
                <i className="far fa-arrow-up-right"></i>
              </a>
              <div className="box-content">
                <div className="box-icon flex justify-center items-center">
                  <img
                    src={`/assets/img/icon/service_block_${item}.svg`}
                    alt="Icon"
                  />
                </div>
                <h3 className="box-title">
                  <a href="service-details.html">
                    {
                      [
                        "Electrical Inspections",
                        "Lightning Installation",
                        "Wiring and Rewiring",
                        "EV Charging Station",
                      ][(item - 1) % 4]
                    }
                  </a>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
