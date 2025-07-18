import React, { useEffect, useState } from "react";

export default function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchLeaderboard() {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/v1/leaderboard`);
      const data = await res.json();
      setUsers(data.payload);
    } catch (error) {
      console.error("Failed to fetch leaderboard:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">🏆 Leaderboard</h2>

      <div className="max-w-3xl mx-auto bg-[#131416] rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-center">
          <thead className="bg-[#1f1f23] text-gray-300">
            <tr>
              <th className="py-3">Rank</th>
              <th>Name</th>
              <th>Total Points</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="3" className="py-6 text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : users.length === 0 ? (
              <tr>
                <td colSpan="3" className="py-6 text-gray-400">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className={`border-t border-[#2c2c2c] ${
                    index === 0 ? "bg-yellow-800/20 font-bold" : ""
                  }`}
                >
                  <td className="py-3">{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.totalPoints}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
