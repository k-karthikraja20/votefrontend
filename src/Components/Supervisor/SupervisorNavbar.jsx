import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

function SupervisorNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={styles.navbar}>
      {/* Left Side */}
      <div style={styles.leftSection}>
        <div style={styles.logo}>🗳️</div>

        <div>
          <h2 style={styles.title}>Campus Election</h2>
          <p style={styles.subtitle}>Supervisor Panel</p>
        </div>
      </div>

      {/* Right Side */}
      <div style={styles.rightSection}>
        <button type="button" style={styles.notificationButton} aria-label="Notifications">
          <FaBell size={19} color="#2563EB" />
          <span style={styles.badge}>3</span>
        </button>

        <div style={styles.profile}>
        <FaUserCircle size={38} color="#2563EB" />
        <div>
          <h4 style={styles.userName}>Supervisor</h4>
          <p style={styles.userRole}>Election Officer</p>
        </div>
        </div>

        <button type="button" style={styles.logoutButton} onClick={handleLogout}>
          <FaSignOutAlt size={17} />
          Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    width: "100vw",
    height: "70px",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 25px",
    borderBottom: "2px solid #E5E7EB",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxSizing: "border-box",
  },

  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#2563EB",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
  },

  title: {
    margin: 0,
    color: "#1E3A8A",
    fontSize: "22px",
    fontWeight: "700",
  },

  subtitle: {
    margin: 0,
    color: "#64748B",
    fontSize: "13px",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  rightSection: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  notificationButton: {
    width: "38px",
    height: "38px",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "#EFF6FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
  },

  badge: {
    position: "absolute",
    top: "-3px",
    right: "-3px",
    width: "17px",
    height: "17px",
    borderRadius: "50%",
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    fontSize: "10px",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutButton: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
    padding: "9px 14px",
    border: "none",
    borderRadius: "7px",
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  userName: {
    margin: 0,
    color: "#111827",
    fontSize: "15px",
    fontWeight: "600",
  },

  userRole: {
    margin: 0,
    color: "#6B7280",
    fontSize: "12px",
  },
};

export default SupervisorNavbar;