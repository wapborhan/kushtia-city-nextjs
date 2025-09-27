import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import Account from "./Account";

const Header = (props) => {
  const { user } = useAuth();
  const { setCollapsed, collapsed, broken, setToggled, toggled } = props;

  console.log(user);

  return (
    <>
      <nav
        id="topbar"
        className="topbar navbar-expand navbar-light bg-white  mb-4 static-top shadow flex justify-between px-4 py-2 items-center"
      >
        {broken ? (
          <>
            <button className="sb-button" onClick={() => setToggled(!toggled)}>
              <i className="far fa-arrow-right ms-2"></i>
            </button>
          </>
        ) : (
          <div
            className="sidebars-button text-dark cursor-pointer"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <i className="far fa-arrow-right ms-2"></i>
            ) : (
              <i className="far fa-arrow-left ms-2"></i>
            )}
          </div>
        )}

        <h2 id="nameTitle" className="text-center text-dark font-bold">
          Kushtia City
        </h2>
        <div className="flex items-center gap-3">
          <div className="account btn-circle w-12 flex justify-center items-center h-12 ">
            <Account />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
