"use client"; // If using Next.js App Router

import React, { useState, useRef, useEffect } from "react";

const Account = ({ user }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => {
    setShowMenu(false);
    setShowSubmenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    {
      icon: <i className="fas fa-copy"></i>,
      label: "Copy",
      action: () => console.log("Copy clicked"),
    },
    {
      icon: <i className="fas fa-share-alt"></i>,
      label: "Share",
      action: () => console.log("Copy clicked"),
    },
    {
      icon: <i className="fas fa-pen"></i>,
      label: "Rename",
      action: () => console.log("Rename clicked"),
    },
    {
      icon: <i className="fas fa-trash"></i>,
      label: "Delete",
      action: () => console.log("Delete clicked"),
    },
  ];

  const handleItemClick = (item) => {
    if (!item.hasSubmenu) {
      item.action?.();
      closeMenu();
    }
  };

  return (
    <div className="">
      <button
        onClick={toggleMenu}
        className=" bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <img src={user?.photoURL} alt="P" className="w-8 h-8 rounded-full" />
      </button>

      {showMenu && (
        <div
          ref={menuRef}
          className="absolute right-0 z-50 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-md w-48"
        >
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.hasSubmenu && setShowSubmenu(true)}
              onMouseLeave={() => item.hasSubmenu && setShowSubmenu(false)}
            >
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full px-4 py-2 text-left text-sm flex justify-between items-center dark:text-[#abc2d3] text-gray-700 hover:bg-gray-100 dark:hover:bg-slate-700 ${
                  item.label === "Delete" ? "text-red-500" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
                {item.hasSubmenu && (
                  <i className="fas fa-chevron-right text-xs"></i>
                )}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Account;
