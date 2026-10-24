import React from "react";
import CandidateNavbar from "./CandidateNavbar";

function ElectionStatus() {
  const elections = [
    {
      id: 1,
      title: "Chairman Election 2026",
      status: "Active",
      totalVotes: 820,
      voters: 1200,
      winner: "Voting in Progress",
      color: "#16A34A",
    },
    {
      id: 2,
      title: "Vice Chairman Election 2026",
      status: "Completed",
      totalVotes: 1105,
      voters: 1200,
      winner: "Karthik Raja",
      color: "#2563EB",
    },
    {
      id: 3,
      title: "Secretary Election 2026",
      status: "Upcoming",
      totalVotes: 0,
      voters: 1200,
      winner: "Election Not Started",
      color: "#F59E0B",
    },
    {
      id: 4,
      title: "Treasurer Election 2026",
      status: "Completed",
      totalVotes: 980,
      voters: 1200,
      winner: "Priya Sharma",
      color: "#9333EA",
    },
  ];

  return (
    <div style={styles.page}>
      <CandidateNavbar />

      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Election Status Dashboard</h1>
        <p style={styles.subtitle}>
          Campus Election Voting System - Live Election Overview
        </p>
      </div>

      {/* Summary Cards */}
      <div style={styles.summaryContainer}>
        <div style={styles.summaryCard}>
          <h2>4</h2>
          <p>Total Elections</p>
        </div>

        <div style={{ ...styles.summaryCard, background: "#DCFCE7" }}>
          <h2 style={{ color: "#16A34A" }}>1</h2>
          <p>Active</p>
        </div>

        <div style={{ ...styles.summaryCard, background: "#DBEAFE" }}>
          <h2 style={{ color: "#2563EB" }}>2</h2>
          <p>Completed</p>
        </div>

        <div style={{ ...styles.summaryCard, background: "#FEF3C7" }}>
          <h2 style={{ color: "#D97706" }}>1</h2>
          <p>Upcoming</p>
        </div>
      </div>

      {/* Election Cards */}
      <div style={styles.grid}>
        {elections.map((election) => {
          const percent = Math.round(
            (election.totalVotes / election.voters) * 100
          );

          return (
            <div key={election.id} style={styles.card}>
              <div style={styles.cardTop}>
                <h3>{election.title}</h3>

                <span
                  style={{
                    ...styles.badge,
                    background:
                      election.status === "Active"
                        ? "#16A34A"
                        : election.status === "Completed"
                        ? "#2563EB"
                        : "#F59E0B",
                  }}
                >
                  {election.status}
                </span>
              </div>

              <p style={styles.text}>
                👥 Eligible Voters: <b>{election.voters}</b>
              </p>

              <p style={styles.text}>
                🗳 Votes Cast: <b>{election.totalVotes}</b>
              </p>

              <p style={styles.text}>
                📊 Voting Percentage: <b>{percent}%</b>
              </p>

              {/* Progress Bar */}
              <div style={styles.progress}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${percent}%`,
                    background: election.color,
                  }}
                ></div>
              </div>

              <div style={styles.footer}>
                <strong>🏆 Winner / Status</strong>
                <p style={{ color: election.color, fontWeight: "bold" }}>
                  {election.winner}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const styles = {
  /* Page Layout (250px Sidebar + 56px Navbar) */
  page: {
    minHeight: "100vh",
    background: "#F3F6FB",
    marginLeft: "250px", // Candidate Sidebar Width
    paddingTop: "56px", // Candidate Navbar Height
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "30px",
    fontFamily: "Arial, sans-serif",
  },

  /* Navbar */
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
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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
    gap: "20px",
  },

  notification: {
    fontSize: "20px",
    cursor: "pointer",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  profileImg: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    border: "2px solid #2563EB",
  },

  userName: {
    color: "#1E3A8A",
    fontWeight: "600",
  },

  /* Header */
  header: {
    textAlign: "center",
    margin: "25px 0 30px",
  },

  title: {
    color: "#1E3A8A",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#555",
    fontSize: "16px",
  },

  /* Summary Cards */
  summaryContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  summaryCard: {
    background: "#FFFFFF",
    borderRadius: "15px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
  },

  /* Election Cards */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "#FFFFFF",
    borderRadius: "18px",
    padding: "20px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  },

  cardTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
  },

  badge: {
    color: "#FFFFFF",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
  },

  text: {
    margin: "8px 0",
    color: "#444",
  },

  progress: {
    height: "12px",
    background: "#E5E7EB",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "15px 0",
  },

  progressFill: {
    height: "100%",
    borderRadius: "10px",
  },

  footer: {
    borderTop: "1px solid #EEEEEE",
    paddingTop: "15px",
    marginTop: "15px",
  },
};

export default ElectionStatus;