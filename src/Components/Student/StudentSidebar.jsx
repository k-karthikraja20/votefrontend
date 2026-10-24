import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaVoteYea,
  FaHistory,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

function StudentSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const buttonStyle = (path) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 18px",
    marginBottom: "12px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    backgroundColor: isActive(path) ? "#2563EB" : "transparent",
    color: "#FFFFFF",
    transition: "0.3s",
    textAlign: "left",
    
  });

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      style={{
        width: "250px",
        height: "calc(100vh - 70px)",
        marginLeft: 0,
        flexShrink: 0,
        position: "fixed",
        left: 0,
        top: "70px",
        overflowY: "auto",
        backgroundColor: "#1E3A8A",
        padding: "20px",
        boxSizing: "border-box",
        color: "#FFFFFF",
      }}
    >
      {/* Sidebar Title */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#FFFFFF",
        }}
      >
        Student Panel
      </h2>

      {/* Dashboard */}
      <button
        style={buttonStyle("/student/dashboard")}
        onClick={() => navigate("/student/dashboard")}
      >
        <FaHome size={20} />
        Dashboard
      </button>

      {/* Candidate List */}
      <button
        style={buttonStyle("/student/candidates")}
        onClick={() => navigate("/student/candidates")}
      >
        <FaUsers size={20} />
        Candidate List
      </button>

      {/* Vote */}
      <button
        style={buttonStyle("/student/vote")}
        onClick={() => navigate("/student/vote")}
      >
        <FaVoteYea size={20} />
        Vote Now
      </button>

      {/* Vote History */}
      <button
        style={buttonStyle("/student/votehistory")}
        onClick={() => navigate("/student/votehistory")}
      >
        <FaHistory size={20} />
        Vote History
      </button>

      {/* Profile */}
      {/* <button
        style={buttonStyle("/student/profile")}
        onClick={() => navigate("/student/profile")}
      >
        <FaUser size={20} />
        My Profile
      </button> */}

      {/* Logout */}
      <button
        onClick={logout}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "14px 18px",
          marginTop: "40px",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "600",
          backgroundColor: "#DC2626",
          color: "#FFFFFF",
        }}
      >
        <FaSignOutAlt size={20} />
        Logout
      </button>
    </div>
  );
}

export default StudentSidebar;

