"use client";
import useAuth from "@/hooks/useAuth";
import React from "react";

const DashboardPage = () => {
  const { logOut } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={logOut} className="btn btn-primary">
        Logout
      </button>
    </>
  );
};

export default DashboardPage;
