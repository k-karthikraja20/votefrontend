import React from "react";

function VoteHistory() {
  const voteHistory = [
    {
      id: 1,
      election: "Student Council Election 2026",
      candidate: "Karthik Raja",
      position: "Chairman",
      date: "12 Sept 2026",
      status: "Voted",
    },
    {
      id: 2,
      election: "Department Representative Election",
      candidate: "Priya Sharma",
      position: "Vice Chairman",
      date: "15 Aug 2026",
      status: "Voted",
    },
    {
      id: 3,
      election: "Sports Club Election",
      candidate: "Arun Kumar",
      position: "Secretary",
      date: "20 July 2026",
      status: "Voted",
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>🗳 Vote History</h1>
        <p style={styles.subHeading}>
          View all the elections you have participated in.
        </p>

        {voteHistory.map((vote) => (
          <div key={vote.id} style={styles.card}>
            <div style={styles.topRow}>
              <h3>{vote.election}</h3>
              <span style={styles.status}>{vote.status}</span>
            </div>

            <p><strong>Candidate :</strong> {vote.candidate}</p>
            <p><strong>Position :</strong> {vote.position}</p>
            <p><strong>Voted Date :</strong> {vote.date}</p>
          </div>
        ))}

        <button style={styles.button}>Back to Dashboard</button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#F4F8FF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    width: "100%",
    maxWidth: "800px",
    background: "#FFFFFF",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
  },

  heading: {
    textAlign: "center",
    color: "#1E40AF",
    marginBottom: "10px",
  },

  subHeading: {
    textAlign: "center",
    color: "#555",
    marginBottom: "25px",
  },

  card: {
    background: "#EFF6FF",
    borderLeft: "6px solid #2563EB",
    borderRadius: "12px",
    padding: "18px",
    marginBottom: "18px",
  },

  topRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },

  status: {
    background: "#16A34A",
    color: "#FFFFFF",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    fontWeight: "bold",
  },

  button: {
    width: "100%",
    marginTop: "20px",
    padding: "14px",
    background: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default VoteHistory;