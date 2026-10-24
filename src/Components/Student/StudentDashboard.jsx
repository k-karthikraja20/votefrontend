import React from "react";
import { useNavigate } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";

function StudentDashboard() {
  const navigate = useNavigate();
  const candidates = [
    {
      id: 1,
      name: "Karthik Raja",
      post: "Chairman",
      department: "BCA Final Year",
    },
    {
      id: 2,
      name: "Priya Sharma",
      post: "Vice Chairman",
      department: "B.Sc Computer Science",
    },
    {
      id: 3,
      name: "Arun Kumar",
      post: "Secretary",
      department: "B.Com Final Year",
    },
  ];

  return (
    <><StudentNavbar /><div style={{ ...styles.page, paddingTop: "95px" }}>
      {/* Header */}
      <div style={styles.header}>
        <h1>🎓 Student Dashboard</h1>
        <p>Campus Election Voting System</p>
      </div>

      {/* Dashboard Cards */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>1</h2>
          <p>Active Election</p>
        </div>

        <div style={styles.card}>
          <h2>3</h2>
          <p>Total Candidates</p>
        </div>

        <div style={styles.card}>
          <h2>Not Voted</h2>
          <p>Voting Status</p>
        </div>

        <div style={styles.card}>
          <h2>12 Sept 2026</h2>
          <p>Election Date</p>
        </div>
      </div>

      {/* Active Election */}
      <div style={styles.section}>
        <h2>🗳 Active Election</h2>

        <div style={styles.electionCard}>
          <h3>Student Council Election 2026</h3>
          <p>
            Vote for your representatives and help build a better campus
            community.
          </p>

          <button style={styles.voteButton} onClick={() => navigate("/student/vote")}>Vote Now</button>
        </div>
      </div>

      {/* Candidate List */}
      <div style={styles.section}>
        <h2>👨‍🎓 Candidates</h2>

        {candidates.map((candidate) => (
          <div key={candidate.id} style={styles.candidateCard}>
            <div style={styles.avatar}>
              {candidate.name.charAt(0)}
            </div>

            <div style={{ flex: 1 }}>
              <h3>{candidate.name}</h3>
              <p>{candidate.post}</p>
              <p>{candidate.department}</p>
            </div>

            <button style={styles.profileButton} onClick={() => navigate("/student/candidates")}>View Candidates</button>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div style={styles.section}>
        <h2>📢 Recent Activity</h2>

        <div style={styles.activityBox}>
          <p>✅ Election registration is completed.</p>
          <p>📅 Voting starts on 12 September 2026.</p>
          <p>🕒 Voting ends on 13 September 2026.</p>
          <p>📊 Results will be announced after voting closes.</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div style={styles.section}>
        <h2>⚡ Quick Actions</h2>

        <div style={styles.actionContainer}>
          <button style={styles.actionButton} onClick={() => navigate("/student/candidates")}>Candidate List</button>

          <button style={styles.actionButton} onClick={() => navigate("/student/history")}>Vote Status</button>

          <button style={styles.actionButton} onClick={() => navigate("/student/vote")}>Cast Vote</button>

          <button style={styles.logoutButton} onClick={() => { localStorage.removeItem("token"); localStorage.removeItem("user"); navigate("/login"); }}>Logout</button>
        </div>
      </div>
    </div></>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F4F8FF",
    padding: "25px",
    fontFamily: "Arial, sans-serif",
  },

  header: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#1E40AF",
  },

  cardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    borderTop: "5px solid #2563EB",
  },

  section: {
    marginBottom: "30px",
  },

  electionCard: {
    background: "#DBEAFE",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 5px 12px rgba(0,0,0,0.08)",
  },

  voteButton: {
    marginTop: "15px",
    background: "#16A34A",
    color: "#fff",
    padding: "12px 25px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  candidateCard: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    background: "#FFFFFF",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "15px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.08)",
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#2563EB",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
  },

  profileButton: {
    background: "#2563EB",
    color: "#fff",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  activityBox: {
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "12px",
    lineHeight: "2",
    boxShadow: "0 5px 10px rgba(0,0,0,0.08)",
  },

  actionContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "15px",
  },

  actionButton: {
    background: "#2563EB",
    color: "#fff",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  logoutButton: {
    background: "#DC2626",
    color: "#fff",
    border: "none",
    padding: "14px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default StudentDashboard;
