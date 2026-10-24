// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   FaHome,
//   FaUserTie,
//   FaVoteYea,
//   FaChartBar,
//   FaBell,
//   FaSignOutAlt,
// } from "react-icons/fa";

// function CandidateNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const isActive = (path) => location.pathname === path;

//   return (
//     <nav style={styles.navbar}>
//       {/* Left Side */}
//       <div style={styles.left}>
//         <h2 style={styles.logo}>🗳️ Campus Election</h2>
//       </div>

//       {/* Center Menu */}
//       <div style={styles.menu}>
//         <button
//           onClick={() => navigate("/candidate/dashboard")}
//           style={{
//             ...styles.menuButton,
//             color: isActive("/candidate/dashboard") ? "#FACC15" : "#FFFFFF",
//           }}
//         >
//           <FaHome /> Dashboard
//         </button>

//         <button
//           onClick={() => navigate("/candidate/profile")}
//           style={{
//             ...styles.menuButton,
//             color: isActive("/candidate/profile") ? "#FACC15" : "#FFFFFF",
//           }}
//         >
//           <FaUserTie /> Profile
//         </button>

//         <button
//           onClick={() => navigate("/candidate/election-status")}
//           style={{
//             ...styles.menuButton,
//             color: isActive("/candidate/election-status")
//               ? "#FACC15"
//               : "#FFFFFF",
//           }}
//         >
//           <FaVoteYea /> Election Status
//         </button>

//         <button
//           onClick={() => navigate("/candidate/results")}
//           style={{
//             ...styles.menuButton,
//             color: isActive("/candidate/results") ? "#FACC15" : "#FFFFFF",
//           }}
//         >
//           <FaChartBar /> Results
//         </button>
//       </div>

//       {/* Right Side */}
//       <div style={styles.right}>
//         <FaBell size={20} style={styles.bell} />

//         <div style={styles.profile}>
//           <img
//             src="https://i.pravatar.cc/100?img=12"
//             alt="Candidate"
//             style={styles.profileImg}
//           />
//           <span style={styles.userName}>Candidate</span>
//         </div>

//         <button
//           onClick={() => navigate("/login")}
//           style={styles.logoutButton}
//         >
//           <FaSignOutAlt /> Logout
//         </button>
//       </div>
//     </nav>
//   );
// }

// const styles = {
//   navbar: {
//     position: "fixed",
//     top: 0,
//     left: "250px", // Sidebar Width
//     width: "calc(100% - 250px)",
//     height: "56px", // Navbar Height
//     backgroundColor: "#2563EB",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     padding: "0 20px",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
//     zIndex: 1000,
//     fontFamily: "Arial, sans-serif",
//   },

//   left: {
//     display: "flex",
//     alignItems: "center",
//   },

//   logo: {
//     color: "#FFFFFF",
//     margin: 0,
//     fontSize: "20px",
//     fontWeight: "bold",
//   },

//   menu: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//   },

//   menuButton: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     background: "transparent",
//     border: "none",
//     color: "#FFFFFF",
//     cursor: "pointer",
//     fontSize: "15px",
//     fontWeight: "500",
//     padding: "8px 12px",
//     borderRadius: "6px",
//   },

//   right: {
//     display: "flex",
//     alignItems: "center",
//     gap: "15px",
//   },

//   bell: {
//     color: "#FFFFFF",
//     cursor: "pointer",
//   },

//   profile: {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",
//   },

//   profileImg: {
//     width: "36px",
//     height: "36px",
//     borderRadius: "50%",
//     border: "2px solid #FFFFFF",
//   },

//   userName: {
//     color: "#FFFFFF",
//     fontWeight: "600",
//   },

//   logoutButton: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     backgroundColor: "#DC2626",
//     color: "#FFFFFF",
//     border: "none",
//     padding: "8px 12px",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// };

// export default CandidateNavbar;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHome,
  FaUserTie,
  FaVoteYea,
  FaChartBar,
  FaBell,
  FaSignOutAlt,
} from "react-icons/fa";

function CandidateNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.left}>
        <h2 style={styles.logo}>🗳️ Campus Election</h2>
      </div>

      {/* Menu */}
      <div style={styles.menu}>
        <button
          onClick={() => navigate("/candidate/dashboard")}
          style={{
            ...styles.menuButton,
            color: isActive("/candidate/dashboard") ? "#FACC15" : "#FFFFFF",
          }}
        >
          <FaHome /> Dashboard
        </button>

        <button
          onClick={() => navigate("/candidate/profile")}
          style={{
            ...styles.menuButton,
            color: isActive("/candidate/profile") ? "#FACC15" : "#FFFFFF",
          }}
        >
          <FaUserTie /> Profile
        </button>

        <button
          onClick={() => navigate("/candidate/election-status")}
          style={{
            ...styles.menuButton,
            color: isActive("/candidate/election-status") ? "#FACC15" : "#FFFFFF",
          }}
        >
          <FaVoteYea /> Election Status
        </button>

        <button
          onClick={() => navigate("/candidate/results")}
          style={{
            ...styles.menuButton,
            color: isActive("/candidate/results") ? "#FACC15" : "#FFFFFF",
          }}
        >
          <FaChartBar /> Results
        </button>
      </div>

      {/* Right Side */}
      <div style={styles.right}>
        <FaBell size={20} style={styles.bell} />

        <div style={styles.profile}>
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Candidate"
            style={styles.profileImg}
          />
          <span style={styles.userName}>Candidate</span>
        </div>

        <button
          onClick={() => navigate("/login")}
          style={styles.logoutButton}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "56px",              // Fixed navbar height
    backgroundColor: "#2563EB",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    zIndex: 1100,
    boxSizing: "border-box",
    fontFamily: "Arial, sans-serif",
  },

  left: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    color: "#FFFFFF",
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
  },

  menu: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  menuButton: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "500",
    padding: "8px 12px",
    borderRadius: "6px",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  bell: {
    color: "#FFFFFF",
    cursor: "pointer",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  profileImg: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "2px solid #FFFFFF",
  },

  userName: {
    color: "#FFFFFF",
    fontWeight: "600",
  },

  logoutButton: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    backgroundColor: "#DC2626",
    color: "#FFFFFF",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default CandidateNavbar;