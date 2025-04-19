import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.svg";
import { FileClock, Home, Settings, WalletCards } from "lucide-react";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  return (
    <div className="h-screen p-5 shadow-sm">
      <div className="flex justify-center">
        <Image src={logo} alt="Logo" width={75} height={55} />
      </div>

      <div className="mt-5">
        {MenuList.map((menu, index) => (
          <div
            className="flex gap-2 mb-2 p-3 
          hover:bg-orange-400 hover:text-white rounded-lg cursor-pointer"
          >
            <menu.icon />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
