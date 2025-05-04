import Link from "next/link";

const BreadCumb = ({ title }) => {
  return (
    <div
      className="breadcumb-wrapper"
      data-bg-src="assets/img/bg/breadcumb-bg.jpg"
      style={{
        backgroundImage: "url(assets/img/bg/breadcumb-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
          <ul className="breadcumb-menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li> {title}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BreadCumb;
