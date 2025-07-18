import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import Leaderboard from "./pages/leaderboard/index.jsx";
import Users from "./pages/users/index.jsx";
import History from "./pages/history/index.jsx";
import GlobalContextProvider from "./context/global.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Leaderboard },
      {
        path: "/leaderboard",
        Component: Leaderboard,
      },
      {
        path: "/users",
        Component: Users,
      },
      {
        path: "/history",
        Component: History,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </GlobalContextProvider>
  </StrictMode>
);
