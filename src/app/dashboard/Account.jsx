"use client"; // If using Next.js App Router

import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const Account = ({ user }) => {
  const router = useRouter();
  const { logOut } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => {
    setShowMenu(false);
    setShowSubmenu(false);
  };

  const handleLogout = () => {
    logOut()
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        console.error("Logout failed:", err);
      });
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
      label: "Account",
      action: () => router.push("/dashboard/user/@wapborhan"),
    },
    {
      icon: <i className="fas fa-share-alt"></i>,
      label: "Settings",
      action: () => router.push("/dashboard/user/update"),
    },
    {
      icon: <i className="fas fa-pen"></i>,
      label: "Logout",
      action: () => handleLogout(),
    },
  ];

  const handleItemClick = (item) => {
    if (!item.hasSubmenu) {
      item.action?.();
      closeMenu();
    }
  };

  return (
    <div className="cursor-pointer">
      <div onClick={toggleMenu}>
        <img src={user?.photoURL} alt="P" className="rounded-md shadow-md" />
      </div>

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
                className={`w-full px-4 py-2 text-left text-sm flex justify-between items-center cursor-pointer rounded-md hover:bg-slate-500 hover:text-white ${
                  item.label === "Logout" ? "text-red-500" : ""
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
