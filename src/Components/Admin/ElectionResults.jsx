import React from "react";
import { FaBars, FaTrophy } from "react-icons/fa";

const candidates = [
  {
    id: 1,
    name: "Arun Kumar",
    post: "Chairman",
    votes: 320,
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Priya Devi",
    post: "Chairman",
    votes: 280,
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Rahul Raj",
    post: "Chairman",
    votes: 150,
    image: "https://i.pravatar.cc/150?img=8",
  },
];

function ElectionResult() {
  const totalVotes = candidates.reduce((sum, c) => sum + c.votes, 0);
  const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);
  const winner = sortedCandidates[0];

  return (
    <div style={styles.container}>
      {/* Navbar */}``
      <div style={styles.navbar}>
        <button style={styles.menuButton}>
          <FaBars size={20} />
        </button>

        <h2 style={styles.navTitle}>Campus Election Result</h2>

        <div style={styles.profile}>
          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Admin"
            style={styles.profileImg}
          />
          <span>Admin</span>
        </div>
      </div>

      {/* Page Content */}
      <div style={styles.page}>
        <h1 style={styles.heading}>Campus Election Results 2026</h1>

        {/* Winner Card */}
        <div style={styles.winnerCard}>
          <FaTrophy size={45} color="#F59E0B" />

          <img
            src={winner.image}
            alt={winner.name}
            style={styles.winnerImage}
          />

          <h2 style={{ color: "#16A34A", margin: "10px 0" }}>🏆 Winner</h2>

          <h3>{winner.name}</h3>
          <p>{winner.post}</p>

          <h2 style={{ color: "#2563EB" }}>{winner.votes} Votes</h2>
        </div>

        <h2 style={styles.subHeading}>Vote Results</h2>

        {sortedCandidates.map((candidate) => {
          const percentage = (
            (candidate.votes / totalVotes) *
            100
          ).toFixed(1);

          return (
            <div key={candidate.id} style={styles.card}>
              <div style={styles.info}>
                <img
                  src={candidate.image}
                  alt={candidate.name}
                  style={styles.image}
                />

                <div>
                  <h3>{candidate.name}</h3>
                  <p style={styles.post}>{candidate.post}</p>
                </div>
              </div>

              <div style={styles.voteRow}>
                <span>{candidate.votes} Votes</span>
                <span>{percentage}%</span>
              </div>

              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}

        {/* Summary */}
        <div style={styles.summary}>
          <h3>Total Votes: {totalVotes}</h3>
          <h3 style={{ color: "#16A34A" }}>
            Election Status: Completed ✅
          </h3>
        </div>

        {/* Download Button */}
        <button style={styles.button}>Download Result</button>
      </div>
    </div>
  );
}

const styles = {
  /* Main Layout */
  container: {
    marginLeft: "250px", // Sidebar Width
    marginTop: "56px", // Navbar Height
    minHeight: "100vh",
    backgroundColor: "#F4F8FB",
    fontFamily: "Arial, sans-serif",
  },

  /* Top Navbar */
  navbar: {
    position: "fixed",
    top: 0,
    left: "250px", // Sidebar Width
    width: "calc(100% - 250px)",
    height: "56px", // Navbar Height
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    zIndex: 1000,
  },

  menuButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#1E3A8A",
  },

  navTitle: {
    color: "#1E3A8A",
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0,
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    color: "#1E3A8A",
    fontWeight: "bold",
  },

  profileImg: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
  },

  /* Page */
  page: {
    padding: "25px",
  },

  heading: {
    textAlign: "center",
    color: "#1E3A8A",
    marginBottom: "25px",
  },

  subHeading: {
    color: "#1E3A8A",
    marginBottom: "15px",
  },

  /* Winner */
  winnerCard: {
    background: "#FFFFFF",
    border: "3px solid #16A34A",
    borderRadius: "18px",
    padding: "25px",
    textAlign: "center",
    marginBottom: "30px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  winnerImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    border: "4px solid #F59E0B",
    margin: "15px 0",
  },

  /* Candidate Card */
  card: {
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
  },

  info: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  image: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    border: "2px solid #2563EB",
  },

  post: {
    color: "#666",
    margin: "5px 0",
  },

  voteRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    fontWeight: "bold",
  },

  progressBar: {
    width: "100%",
    height: "12px",
    background: "#E5E7EB",
    borderRadius: "10px",
    overflow: "hidden",
    marginTop: "8px",
  },

  progressFill: {
    height: "100%",
    background: "linear-gradient(to right,#2563EB,#16A34A)",
    borderRadius: "10px",
  },

  /* Summary */
  summary: {
    background: "#E0F2FE",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    marginTop: "30px",
  },

  /* Button */
  button: {
    width: "250px",
    height: "54px",
    backgroundColor: "#2563EB",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    display: "block",
    margin: "30px auto",
  },
};

export default ElectionResult;