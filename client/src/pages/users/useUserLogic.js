import React, { useContext, useRef, useState } from "react";
import { globalContext } from "../../context/global";

export default function useUserLogic() {
  const { users, pagination, setUsers, setPagination } =
    useContext(globalContext);

  const [newUserName, setNewUserName] = useState("");
  const [limit, setLimit] = useState(10);

  const hasFetching = useRef(false);

  async function fetchUsers({ page = 1, limit = 10 }) {
    console.log(import.meta.env);
    if (hasFetching.current) return;
    hasFetching.current = true;
    const response = await fetch(
      `${
        import.meta.env.VITE_BACKEND_BASE_URL
      }/v1/users?page=${page}&limit=${limit}`
    );
    const data = await response.json();
    setUsers(data.payload.users);
    setPagination(data.payload.pagination);
    console.log(data);
  }

  async function addUser(newUser) {
    const res = await fetch("http://localhost:3000/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUser,
      }),
    });
  }

  async function claimPoints(userId) {
    const res = await fetch(`http://localhost:3000/v1/claim?userId=${userId}`, {
      method: "POST",
    });
  }

  function handleAddUser() {
    if (newUserName) {
      addUser(newUserName);
    }
  }

  function handleClaimPoints(userId) {
    return () => claimPoints(userId);
  }

  return {
    users,
    pagination,
    newUserName,
    hasFetching,
    setLimit,
    setNewUserName,
    setUsers,
    fetchUsers,
    handleAddUser,
    handleClaimPoints,
  };
}
