import React, { useRef, useEffect } from "react";
import useUserLogic from "./useUserLogic";

export default function Users() {
  const {
    users,
    pagination,
    newUserName,
    hasFetching,
    setLimit,
    setNewUserName,
    fetchUsers,
    handleAddUser,
    handleClaimPoints,
  } = useUserLogic();

  fetchUsers({});

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">User Dashboard</h2>

      <section className="max-w-4xl mx-auto space-y-6">
        {/* Controls */}
        <div className="flex flex-wrap items-center gap-4 justify-between bg-[#1f1f23] p-4 rounded-md shadow">
          <div className="flex gap-2 items-center">
            <label htmlFor="limit" className="text-sm">
              Limit:
            </label>
            <select
              onChange={(e) => {
                hasFetching.current = false;
                fetchUsers({ limit: e.target.value });
              }}
              name="limit"
              id="limit"
              className="bg-[#2a2a2e] px-2 py-1 rounded text-white"
            >
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="bg-[#2a2a2e] px-3 py-1 rounded"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded">
              Search
            </button>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              name="name"
              id="name"
              value={newUserName}
              placeholder="Add User by Name"
              onChange={(e) => setNewUserName(e.target.value)}
              className="bg-[#2a2a2e] px-3 py-1 rounded"
            />
            <button
              onClick={handleAddUser}
              className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
            >
              Add User
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-md shadow">
          <table className="w-full bg-[#131416] text-sm text-center">
            <thead className="bg-[#1f1f23] text-gray-300">
              <tr>
                <th className="py-2">S.No</th>
                <th>Name</th>
                <th>Points</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id} className="border-t border-[#2c2c2c]">
                  <td className="py-2">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.totalPoints}</td>
                  <td>
                    <button
                      onClick={handleClaimPoints(user._id)}
                      className="bg-purple-600 hover:bg-purple-700 px-3 py-1 rounded"
                    >
                      Claim
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-4 flex-wrap">
          <button className="bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded">
            Previous
          </button>

          {Array(pagination.totalPages)
            .fill(null)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  hasFetching.current = false;
                  fetchUsers({ page: index + 1 });
                }}
                className="bg-[#131416] hover:bg-blue-600 px-3 py-1 rounded"
              >
                {index + 1}
              </button>
            ))}

          <button className="bg-gray-700 hover:bg-gray-800 px-3 py-1 rounded">
            Next
          </button>
        </div>
      </section>
    </div>
  );
}
