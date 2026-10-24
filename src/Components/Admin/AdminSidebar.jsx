import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUsers,
  FaUserTie,
  FaVoteYea,
  FaChartBar,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function AdminSidebar() {
  const [open, setOpen] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div style={styles.sidebar(open)}>
      {/* Header */}
      <div style={styles.header}>
        {open && <h2 style={styles.logo}>Campus Vote</h2>}

        <button
          style={styles.toggleBtn}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu Buttons */}
      <div style={styles.menu}>
        <button
          onClick={() => navigate("/AdminDashboard")}
          style={{
            ...styles.menuButton,
            background: isActive("/admin/dashboard")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaHome style={styles.icon} />
          {open && <span style={styles.text}>Dashboard</span>}
        </button>

        <button
          onClick={() => navigate("/admin/manage-students")}
          style={{
            ...styles.menuButton,
            background: isActive("/Admin/students")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaUsers style={styles.icon} />
          {open && <span style={styles.text}>Manage Students</span>}
        </button>

        <button
          onClick={() => navigate("/admin/manage-candidates")}
          style={{
            ...styles.menuButton,
            background: isActive("/Admin/candidates")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaUserTie style={styles.icon} />
          {open && <span style={styles.text}>Manage Candidates</span>}
        </button>

        <button
          onClick={() => navigate("/admin/manage-elections")}
          style={{
            ...styles.menuButton,
            background: isActive("/admin/elections")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaVoteYea style={styles.icon} />
          {open && <span style={styles.text}>Manage Elections</span>}
        </button>

        <button
            path="/admin/election-results"
          onClick={() => navigate("/admin/election-results")}
          style={{
            ...styles.menuButton,
            background: isActive("/admin/results")
              ? "#2563EB"
              : "transparent",
          }}
        >
          <FaChartBar style={styles.icon} />
          {open && <span style={styles.text}>Election Results</span>}
        </button>

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
          <small>Admin Panel</small>
        </div>
      )}
    </div>
  );
}

const styles = {
  sidebar: (open) => ({
    position: "fixed",
    top: 0,
    left: 0,
    width: open ? "250px" : "80px",
    height: "100vh",
    background: "#0F172A",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "0.3s ease",
    boxShadow: "2px 0 10px rgba(0,0,0,0.2)",
  }),

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    borderBottom: "1px solid #1E293B",
  },

  logo: {
    color: "#3B82F6",
    margin: 0,
    fontSize: "22px",
    fontWeight: "bold",
  },

  toggleBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
  },

  menu: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    padding: "10px",
    flex: 1,
  },

  menuButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "14px 18px",
    border: "none",
    borderRadius: "10px",
    background: "transparent",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    textAlign: "left",
  },

  icon: {
    fontSize: "20px",
    minWidth: "30px",
  },

  text: {
    marginLeft: "15px",
  },

  footer: {
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #1E293B",
    fontSize: "13px",
    color: "#CBD5E1",
  },
};

export default AdminSidebar;