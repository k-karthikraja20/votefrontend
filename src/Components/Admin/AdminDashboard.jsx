import React from "react";
import { useNavigate } from "react-router-dom";

import AdminNavbar from "../Admin/AdminNavbar";
import AdminSidebar from "../Admin/AdminSidebar";

function AdminDashboard() {
  const navigate = useNavigate();

  const dashboardData = [
    {
      title: "Total Students",
      count: 1250,
      color: "#2563EB",
    },
    {
      title: "Total Candidates",
      count: 24,
      color: "#16A34A",
    },
    {
      title: "Active Elections",
      count: 2,
      color: "#EA580C",
    },
    {
      title: "Votes Cast",
      count: 980,
      color: "#9333EA",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AdminNavbar />

      {/* ================= SIDEBAR ================= */}
      <AdminSidebar />

      {/* ================= DASHBOARD ================= */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          background: #EEF2FF;
        }

        .dashboard {
          min-height: 100vh;
          background: #EEF2FF;

          /* Navbar */
          margin-top: 70px;

          /* Sidebar */
          margin-left: 250px;

          padding: 30px;

          transition: 0.3s ease;
        }

        /* Header */
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .header h1 {
          color: #1E3A8A;
          font-size: 32px;
        }

        .admin-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          padding: 10px 18px;
          border-radius: 30px;
          box-shadow: 0 5px 12px rgba(0,0,0,0.1);
        }

        .admin-profile img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
        }

        .admin-profile h3 {
          color: #1E3A8A;
        }

        /* Cards */
        .cards {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(220px, 1fr)
          );
          gap: 20px;
          margin-bottom: 35px;
        }

        .card {
          background: #fff;
          padding: 22px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.12);
          transition: 0.3s;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 20px rgba(37,99,235,0.25);
        }

        .card h3 {
          color: #555;
          margin-bottom: 10px;
        }

        .card h2 {
          color: #1E3A8A;
          font-size: 30px;
        }

        /* Management */
        .management {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 35px;
        }

        .management button {
          padding: 14px 20px;
          background: #2563EB;
          color: #fff;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          transition: 0.3s;
        }

        .management button:hover {
          background: #1E40AF;
          transform: scale(1.05);
        }

        /* Activity */
        .activity {
          background: #fff;
          padding: 22px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          overflow-x: auto;
        }

        .activity h2 {
          color: #1E3A8A;
          margin-bottom: 15px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        th {
          background: #2563EB;
          color: #fff;
          padding: 12px;
        }

        td {
          padding: 12px;
          text-align: center;
          border-bottom: 1px solid #ddd;
        }

        tbody tr:hover {
          background: #DBEAFE;
        }

        /* Tablet */
        @media (max-width: 992px) {
          .dashboard {
            margin-left: 80px;
            padding: 20px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .dashboard {
            margin-left: 0;
            margin-top: 70px;
            padding: 15px;
          }

          .header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .management {
            flex-direction: column;
          }

          .management button {
            width: 100%;
          }

          .admin-profile {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="dashboard">

        {/* Header */}
        <div className="header">
          <h1>🗳 Admin Dashboard</h1>

          <div className="admin-profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Admin"
            />

            <h3>Admin</h3>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          {dashboardData.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                borderTop: `6px solid ${item.color}`,
              }}
            >
              <h3>{item.title}</h3>
              <h2>{item.count}</h2>
            </div>
          ))}
        </div>

        {/* Management Buttons */}
        <div className="management">

          <button
            onClick={() => navigate("/admin/students")}
          >
            👨‍🎓 Manage Students
          </button>

          <button
            onClick={() => navigate("/admin/candidates")}
          >
            🗳 Manage Candidates
          </button>

          <button
            onClick={() => navigate("/admin/elections")}
          >
            📅 Manage Elections
          </button>

          <button
            onClick={() => navigate("/admin/results")}
          >
            📊 View Results
          </button>

        </div>

        {/* Activity Table */}
        <div className="activity">

          <h2>📋 Recent Activity</h2>

          <table>
            <thead>
              <tr>
                <th>Election</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Chairman Election</td>
                <td>🟢 Active</td>
                <td>01-09-2026</td>
              </tr>

              <tr>
                <td>Secretary Election</td>
                <td>✅ Completed</td>
                <td>30-08-2026</td>
              </tr>

              <tr>
                <td>Treasurer Election</td>
                <td>🟡 Upcoming</td>
                <td>05-09-2026</td>
              </tr>

            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}

export default AdminDashboard;