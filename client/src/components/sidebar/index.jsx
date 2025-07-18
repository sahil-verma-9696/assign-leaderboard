import React from "react";
import { config } from "./config";
import Links from "./links";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const { organization, links } = config;
  const location = useLocation();

  return (
    <aside className="bg-[#131416] text-white w-64 min-h-screen p-4 space-y-6 shadow-lg">
      {/* Organization Name */}
      <div className="text-xl font-bold border-b border-gray-700 pb-2">
        <span>{organization.name}</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-2">
        <Links links={links} currentPath={location.pathname} />
      </nav>
    </aside>
  );
}
