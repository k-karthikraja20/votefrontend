import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaVoteYea,
  FaClipboardCheck,
  FaChartBar,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

function SupervisorSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const buttonStyle = (path) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 16px",
    marginBottom: "12px",
    border: "none",
    borderRadius: "10px",
    background: isActive(path) ? "#2563EB" : "transparent",
    color: "#FFFFFF",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "left",
    transition: "0.3s",
  });

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successful!");
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "240px",
        height: "calc(100vh - 70px)",
        background: "#0F172A",
        color: "#FFFFFF",
        padding: "20px",
        position: "fixed",
        inset: "70px auto 0 0",
        zIndex: 900,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <FaVoteYea size={45} color="#FBBF24" />
        <h2 style={{ margin: "10px 0 0" }}>Supervisor</h2>
        <p style={{ color: "#CBD5E1", fontSize: "14px" }}>
          Campus Election System
        </p>
      </div>

      {/* Sidebar Buttons */}

      <button
        style={buttonStyle("/supervisor/dashboard")}
        onClick={() => navigate("/supervisor/dashboard")}
      >
        <FaHome />
        Dashboard
      </button>

      {/* <button
        style={buttonStyle("/supervisor/students")}
        onClick={() => navigate("/supervisor/students")}
      >
        <FaUsers />
        Manage Students
      </button> */}

      <button
        style={buttonStyle("/supervisor/manage-candidates")}
        onClick={() => navigate("/supervisor/manage-candidates")}
      >
        <FaUserTie />
        Manage Candidates
      </button>

      {/* <button
        style={buttonStyle("/supervisor/elections")}
        onClick={() => navigate("/supervisor/elections")}
      >
        <FaVoteYea />
        Manage Elections
      </button> */}

      <button
        style={buttonStyle("/supervisor/approve-votes")}
        onClick={() => navigate("/supervisor/approve-votes")}
      >
        <FaClipboardCheck />
        Approve Votes
      </button>

      <button
        style={buttonStyle("/supervisor/results")}
        onClick={() => navigate("/supervisor/election-results")}
      >
        <FaChartBar />
        Election Results
      </button>
{/* 
      <button
        style={buttonStyle("/supervisor/notifications")}
        onClick={() => navigate("/supervisor/notifications")}
      >
        <FaBell />
        Notifications
      </button> */}
{/* 
      <button
        style={buttonStyle("/supervisor/settings")}
        onClick={() => navigate("/supervisor/settings")}
      >
        <FaCog />
        Settings
      </button> */}

      {/* Logout Button */}
      <div style={{ marginTop: "auto" }}>
        <button
          onClick={logout}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "14px 16px",
            border: "none",
            borderRadius: "10px",
            background: "#DC2626",
            color: "#FFFFFF",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </div>
  );
}

export default SupervisorSidebar;