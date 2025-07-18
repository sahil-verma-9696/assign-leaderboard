import React from "react";
import { Link } from "react-router-dom";

export default function Links({ links, currentPath }) {
  console.log(links);
  return links.map((link) => {
    const isActive = currentPath === link.url;

    return (
      <Link
        key={link.url}
        to={link.url}
        className={`block px-4 py-2 rounded-md transition-colors ${
          isActive
            ? "bg-blue-600 text-white font-medium"
            : "text-gray-300 hover:bg-[#1f1f23] hover:text-white"
        }`}
      >
        {link.name}
      </Link>
    );
  });
}
