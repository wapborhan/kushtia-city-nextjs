"use client"; // If using Next.js App Router

import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const Account = () => {
  const router = useRouter();
  const { logOut, user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setShowMenu((prev) => !prev);
  const closeMenu = () => {
    setShowMenu(false);
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
      icon: <i className="fas fa-share-alt"></i>,
      label: "Settings",
      action: () => router.push(`/dashboard/user/update/${user?.userName}`),
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
        <img src={user?.photo} alt="P" className="rounded-md shadow-md" />
      </div>

      {showMenu && (
        <div
          ref={menuRef}
          className="absolute right-0 z-50 mt-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-md py-2 shadow-md w-56"
        >
          <Link
            href={`/user/${user?.userName}`}
            className="acount flex gap-2 py-3 px-4"
          >
            <img
              src={user?.photo}
              alt={user?.name}
              className="w-12 rounded-full"
            />
            <div className="ac">
              <h2 className="!text-[15px]">{user?.name} </h2>
              <h2 className="!text-[15px]">{user?.badge} </h2>
            </div>
          </Link>
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative border-t"
              onMouseEnter={() => item.hasSubmenu && setShowSubmenu(true)}
              onMouseLeave={() => item.hasSubmenu && setShowSubmenu(false)}
            >
              <button
                onClick={() => handleItemClick(item)}
                className={`w-full px-4 py-2 text-left text-sm flex justify-between items-center cursor-pointer  hover:bg-slate-300  ${
                  item.label === "Logout" ? "text-red-500" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Account;
