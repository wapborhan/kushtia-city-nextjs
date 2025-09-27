"use client";
import Loader from "@/components/shared/Loader";
import { useState } from "react";
import MySidebar from "./MySidebar";
import Header from "./Header";
import useAuth from "@/hooks/useAuth";

const DashWrapper = ({ children }) => {
  const { user } = useAuth();
  const navigation = true;
  const [collapsed, setCollapsed] = useState(false);
  const [broken, setBroken] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div id="wrapper" className="flex">
      <div className="sidebars">
        <MySidebar
          collapsed={collapsed}
          setBroken={setBroken}
          setToggled={setToggled}
          toggled={toggled}
          broken={broken}
        />
      </div>
      <div id="content-wrapper" className="flex flex-col w-full">
        <div id="content w-full relative" className="content">
          <Header
            collapsed={collapsed}
            setBroken={setBroken}
            setCollapsed={setCollapsed}
            setToggled={setToggled}
            toggled={toggled}
            broken={broken}
          />
          <div className="p-5">
            {navigation.state === "loading" && (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            )}
            {children}
          </div>
          <div className="credit flex justify-center items-center py-3 bg-[#1c244a] text-white">
            2025
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashWrapper;
