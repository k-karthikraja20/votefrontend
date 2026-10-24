import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaVoteYea,
  FaHistory,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function StudentNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const buttonStyle = (path) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "600",
    background: isActive(path) ? "#2563EB" : "#FFFFFF",
    color: isActive(path) ? "#FFFFFF" : "#1F2937",
    transition: "0.3s ease",
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav
      style={{
        width: "100vw",
        height: "70px",
        backgroundColor: "#1E40AF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 25px",
        boxSizing: "border-box",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 1000,
      
      }}
    >
      {/* Logo */}
      <h2
        style={{
          color: "#FFFFFF",
          margin: 0,
          position: "absolute",
          left: "25px",
          fontWeight: "bold",
        }}
      >
        Student Portal
      </h2>

      {/* Navigation Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <button
          style={buttonStyle("/student/dashboard")}
          onClick={() => navigate("/student/dashboard")}
        >
          <FaHome />
          Dashboard
        </button>

        <button
          style={buttonStyle("/student/candidates")}
          onClick={() => navigate("/student/candidates")}
        >
          <FaUsers />
          Candidates
        </button>

        <button
          style={buttonStyle("/student/vote")}
          onClick={() => navigate("/student/vote")}
        >
          <FaVoteYea />
          Vote
        </button>

        <button
          style={buttonStyle("/student/history")}
          onClick={() => navigate("/student/history")}
        >
          <FaHistory />
          Vote History
        </button>

        {/* <button
          style={buttonStyle("/student/profile")}
          onClick={() => navigate("/student/profile")}
        >
          <FaUserCircle />
          Profile
        </button> */}

        <button
          onClick={logout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            position: "absolute",
            right: "25px",
            padding: "10px 12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: "600",
            backgroundColor: "#DC2626",
            color: "#FFFFFF",
          }}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>
    </nav>
  );
}

export default StudentNavbar;
