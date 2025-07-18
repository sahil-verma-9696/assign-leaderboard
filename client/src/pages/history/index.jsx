import React, { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchHistory() {
    try {
      const res = await fetch("http://localhost:3000/v1/history");
      const data = await res.json();
      setHistory(data.payload);
    } catch (error) {
      console.error("Failed to fetch history:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">📜 Claim History</h2>

      <div className="max-w-4xl mx-auto bg-[#131416] rounded-lg shadow-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-center">
          <thead className="bg-[#1f1f23] text-gray-300">
            <tr>
              <th className="py-3">#</th>
              <th>User</th>
              <th>Points</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="py-6 text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : history.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-6 text-gray-400">
                  No history records found.
                </td>
              </tr>
            ) : (
              history.map((entry, index) => (
                <tr key={entry._id} className="border-t border-[#2c2c2c]">
                  <td className="py-2">{index + 1}</td>
                  <td>{entry.userName || "Unknown"}</td>
                  <td>{entry.points}</td>
                  <td>{new Date(entry.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
