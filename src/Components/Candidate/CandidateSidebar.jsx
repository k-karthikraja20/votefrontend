import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserTie,
  FaVoteYea,
  FaChartLine,
  FaSignOutAlt,
} from "react-icons/fa";

function CandidateSidebar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.sidebar(open)}>
      {/* Header */}
      <div style={styles.header}>
        {open && <h2 style={styles.logo}>🗳️ Candidate</h2>}

        <button
          style={styles.toggleBtn}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu */}
      <div style={styles.menu}>
        <button
          onClick={() => navigate("/candidate/dashboard")}
          style={{
            ...styles.menuButton,
            background: isActive("/candidate/dashboard")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaHome style={styles.icon} />
          {open && <span style={styles.text}>Dashboard</span>}
        </button>

        <button
          onClick={() => navigate("/candidate/profile")}
          style={{
            ...styles.menuButton,
            background: isActive("/candidate/profile")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaUserTie style={styles.icon} />
          {open && <span style={styles.text}>My Profile</span>}
        </button>

        <button
          onClick={() => navigate("/candidate/election-status")}
          style={{
            ...styles.menuButton,
            background: isActive("/candidate/election-status")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaVoteYea style={styles.icon} />
          {open && <span style={styles.text}>Election Status</span>}
        </button>

         {/* <button
          onClick={() => navigate("/candidate/results")}
          style={{
            ...styles.menuButton,
            background: isActive("/candidate/results")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaChartLine style={styles.icon} />
          {open && <span style={styles.text}>Result / Votes</span>}
        </button>  */}

        <button
          onClick={() => navigate("/login")}
          style={{
            ...styles.menuButton,
            background: "#DC2626",
          }}
        >
          <FaSignOutAlt style={styles.icon} />
          {open && <span style={styles.text}>Logout</span>}
        </button>
      </div>

      {/* Footer */}
      {open && (
        <div style={styles.footer}>
          <p style={{ margin: 0 }}>Campus Election 2026</p>
          <small>Candidate Panel</small>
        </div>
      )}
    </div>
  );
}

const styles = {
  sidebar: (open) => ({
    position: "fixed",
    top: "56px",
    left: 0,
    width: open ? "250px" : "80px",
    height: "calc(100vh - 56px)",
    background: "#0F172A",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s ease",
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
    zIndex: 1000,
  }),

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 20px",
    borderBottom: "1px solid #1E293B",
  },

  logo: {
    margin: 0,
    color: "#3B82F6",
    fontSize: "22px",
    fontWeight: "bold",
  },

  toggleBtn: {
    background: "transparent",
    border: "none",
    color: "#FFFFFF",
    fontSize: "20px",
    cursor: "pointer",
  },

  menu: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "15px 10px",
  },

  menuButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "14px 16px",
    border: "none",
    borderRadius: "10px",
    background: "transparent",
    color: "#FFFFFF",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    textAlign: "left",
    transition: "0.3s",
  },

  icon: {
    fontSize: "20px",
    minWidth: "30px",
  },

  text: {
    marginLeft: "12px",
  },

  footer: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #1E293B",
    color: "#CBD5E1",
    fontSize: "13px",
  },
};

export default CandidateSidebar;