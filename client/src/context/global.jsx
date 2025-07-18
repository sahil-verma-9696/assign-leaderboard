import { createContext, useState } from "react";

export const globalContext = createContext({
  users: {},
  setUsers: () => {},
  pagination: {},
  setPagination: () => {},
});

export default function GlobalContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState({});
  return (
    <globalContext.Provider
      value={{ users, pagination, setUsers, setPagination }}
    >
      {children}
    </globalContext.Provider>
  );
}
