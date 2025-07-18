import React from "react";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router";

export default function App() {
  console.log(import.meta.env.VITE_SOME_KEY)
  return (
    <div className="dark:bg-black dark:text-white w-screen h-screen flex">
      <Sidebar />
      <div className="flex-1 h-screen p-2 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
