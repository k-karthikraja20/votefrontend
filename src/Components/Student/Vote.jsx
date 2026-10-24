import React, { useState } from "react";

function Vote() {
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [voteSubmitted, setVoteSubmitted] = useState(false);

  const candidates = [
    {
      id: 1,
      name: "Karthik Raja",
      position: "Chairman",
      department: "BCA Final Year",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Vice Chairman",
      department: "B.Sc Computer Science",
    },
    {
      id: 3,
      name: "Arun Kumar",
      position: "Secretary",
      department: "B.Com Final Year",
    },
    {
      id: 4,
      name: "Sneha Devi",
      position: "Treasurer",
      department: "BBA Final Year",
    },
  ];

  const handleVote = () => {
    if (!selectedCandidate) {
      alert("Please select a candidate before voting.");
      return;
    }

    alert("Your vote has been submitted successfully!");
    setVoteSubmitted(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.heading}>🗳 Campus Election Voting</h1>
        <p style={styles.subHeading}>
          Select one candidate and cast your vote.
        </p>

        {voteSubmitted ? (
          <div style={styles.successBox}>
            <h2>✅ Vote Submitted Successfully!</h2>
            <p>Thank you for participating in the Campus Election 2026.</p>
          </div>
        ) : (
          <>
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                style={{
                  ...styles.card,
                  border:
                    selectedCandidate === candidate.id
                      ? "2px solid #16A34A"
                      : "2px solid transparent",
                }}
              >
                <div style={styles.info}>
                  <div style={styles.avatar}>
                    {candidate.name.charAt(0)}
                  </div>

                  <div>
                    <h3>{candidate.name}</h3>
                    <p>{candidate.position}</p>
                    <p>{candidate.department}</p>
                  </div>
                </div>

                <input
                  type="radio"
                  name="candidate"
                  checked={selectedCandidate === candidate.id}
                  onChange={() => setSelectedCandidate(candidate.id)}
                />
              </div>
            ))}

            <button style={styles.voteButton} onClick={handleVote}>
              Cast Vote
            </button>
          </>
        )}
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
    maxWidth: "700px",
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#EFF6FF",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "15px",
    cursor: "pointer",
  },

  info: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  avatar: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#2563EB",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px",
    fontWeight: "bold",
  },

  voteButton: {
    width: "100%",
    padding: "14px",
    background: "#16A34A",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "15px",
  },

  successBox: {
    textAlign: "center",
    background: "#DCFCE7",
    padding: "30px",
    borderRadius: "15px",
    color: "#166534",
  },
};

export default Vote;