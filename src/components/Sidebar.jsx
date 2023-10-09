"use client";

import { useState } from "react";
import Link from "next/link";
import { Trophy, List, UserSquare } from "@phosphor-icons/react";

const iconSize = 25;
const options = [
  { 
    icon: <Trophy size={iconSize} />, 
    label: "Campeonatos", 
    key: "championships",
    goTo: "/"
  },
  { 
    icon: <UserSquare size={iconSize} />, 
    label: "Minha conta", 
    key: "account", 
    goTo: "profile"
  },
];

export function Sidebar() {
  const [sideBarIsVisible, setSideBarIsVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("championships");

  return (
    <aside className={`min-h-full p-5 ${sideBarIsVisible ? "w-72" : "w-13"} overflow-hidden transition all duration-300`}>
      <button 
        className={`flex items-center bg-purple-500 ${sideBarIsVisible ? "p-4" : "p-2"} rounded text-white`}
        onClick={() => setSideBarIsVisible(previousState => !previousState)}
      >
        <List size={sideBarIsVisible ? 20 : 15} />
        {sideBarIsVisible && <p className="ml-3">Menu</p>}
      </button>
      
      {sideBarIsVisible && (
        <ul className="mt-8">
          {options.map(({ label, key, icon, goTo }) => (
              <Link 
                className={`flex items-center ${activeItem === key ? "bg-white" : "text-black"} p-5 cursor-pointer rounded-3xl overflow-hidden`}
                key={label}
                onClick={() => setActiveItem(key)}
                href={goTo}
              >
                {icon}
                <a href="#" className="ml-5">{label}</a>
              </Link>
              )
          )}
        </ul>
      )}
    </aside>
  )
}
