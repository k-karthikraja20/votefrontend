import React from "react";
import CandidateNavbar from "./CandidateNavbar";

function CandidateProfile() {
  const candidate = {
    name: "Karthik Raja",
    position: "Chairman Candidate",
    department: "BCA - Final Year",
    registerNo: "BCA2026001",
    email: "karthikraja@gmail.com",
    phone: "+91 9876543210",
    age: 21,
    slogan: "Your Vote, Your Voice, Our Campus Future!",
    manifesto: [
      "Improve campus facilities for students.",
      "Conduct more technical and cultural events.",
      "Provide better placement opportunities.",
      "Ensure transparent student council activities.",
      "Support sports and extracurricular clubs.",
    ],
    achievements: [
      "Class Representative - 2025",
      "College Tech Fest Coordinator",
      "Winner - Coding Competition",
      "NSS Volunteer",
    ],
  };

  return (
    <div style={styles.page}>
      <CandidateNavbar />

      {/* Candidate Profile Content */}
      <div style={styles.card}>
        <div style={styles.header}>
          <img
            src="https://i.pravatar.cc/200?img=12"
            alt="Candidate"
            style={styles.image}
          />

          <h1 style={styles.name}>{candidate.name}</h1>
          <h3 style={styles.position}>{candidate.position}</h3>
          <p style={styles.slogan}>{candidate.slogan}</p>
        </div>

        {/* Candidate Information */}
        <h2 style={styles.title}>Candidate Information</h2>

        <div style={styles.infoGrid}>
          <div style={styles.infoBox}>
            <strong>Department</strong>
            <p>{candidate.department}</p>
          </div>

          <div style={styles.infoBox}>
            <strong>Register Number</strong>
            <p>{candidate.registerNo}</p>
          </div>

          <div style={styles.infoBox}>
            <strong>Age</strong>
            <p>{candidate.age} Years</p>
          </div>

          <div style={styles.infoBox}>
            <strong>Email</strong>
            <p>{candidate.email}</p>
          </div>

          <div style={styles.infoBox}>
            <strong>Phone</strong>
            <p>{candidate.phone}</p>
          </div>

          <div style={styles.infoBox}>
            <strong>Election Position</strong>
            <p>{candidate.position}</p>
          </div>
        </div>

        {/* Manifesto */}
        <h2 style={styles.title}>Election Manifesto</h2>

        {candidate.manifesto.map((item, index) => (
          <div key={index} style={styles.listItem}>
            ✅ {item}
          </div>
        ))}

        {/* Achievements */}
        <h2 style={styles.title}>Achievements</h2>

        {candidate.achievements.map((item, index) => (
          <div key={index} style={styles.listItem}>
            🏆 {item}
          </div>
        ))}

        {/* About Candidate */}
        <h2 style={styles.title}>About Candidate</h2>

        <p style={styles.about}>
          I am committed to making our campus a better place for every student.
          My focus is on student welfare, academic development, cultural growth,
          and creating equal opportunities for everyone.
        </p>

        {/* Buttons */}
        <div style={styles.buttonArea}>
          <button
            style={styles.voteBtn}
            onClick={() => alert("Vote Submitted Successfully!")}
          >
            Vote for Me
          </button>

          <button
            style={styles.backBtn}
            onClick={() => alert("Back to Dashboard")}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F1F5F9",
    fontFamily: "Arial, sans-serif",

    // Space for Sidebar and Navbar
    marginLeft: "250px",
    paddingTop: "56px",
  },

  /* Fixed Navbar */
  navbar: {
    position: "fixed",
    top: 0,
    left: "250px",
    width: "calc(100% - 250px)",
    height: "56px",
    background: "#FFFFFF",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 25px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },

  logo: {
    color: "#1E3A8A",
    margin: 0,
    fontSize: "20px",
    fontWeight: "bold",
  },

  navRight: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#1E3A8A",
    fontWeight: "600",
  },

  /* Profile Card */
  card: {
    margin: "25px",
    background: "#FFFFFF",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
  },

  image: {
    width: "170px",
    height: "170px",
    borderRadius: "50%",
    border: "5px solid #2563EB",
    objectFit: "cover",
  },

  name: {
    color: "#1E3A8A",
    marginTop: "15px",
    marginBottom: "5px",
  },

  position: {
    color: "#2563EB",
    margin: "5px 0",
  },

  slogan: {
    color: "#555",
    fontStyle: "italic",
  },

  title: {
    marginTop: "25px",
    marginBottom: "15px",
    color: "#1D4ED8",
    borderLeft: "5px solid #2563EB",
    paddingLeft: "10px",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
    gap: "15px",
  },

  infoBox: {
    background: "#EFF6FF",
    padding: "15px",
    borderRadius: "10px",
    border: "1px solid #BFDBFE",
  },

  listItem: {
    background: "#F9FAFB",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "8px",
    borderLeft: "5px solid #22C55E",
    color: "#333",
  },

  about: {
    lineHeight: "1.8",
    color: "#444",
  },

  buttonArea: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  },

  voteBtn: {
    background: "#16A34A",
    color: "#FFFFFF",
    border: "none",
    padding: "14px 28px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },

  backBtn: {
    background: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    padding: "14px 28px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

export default CandidateProfile;