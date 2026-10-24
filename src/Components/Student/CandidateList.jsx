import React, { useState } from "react";

function CandidateList() {
  const [candidates] = useState([
    {
      id: 1,
      name: "Karthik Raja",
      department: "BCA",
      year: "III Year",
      position: "Chairman",
      votes: 245,
    },
    {
      id: 2,
      name: "Priya Sharma",
      department: "B.Sc Computer Science",
      year: "II Year",
      position: "Vice Chairman",
      votes: 198,
    },
    {
      id: 3,
      name: "Rahul Kumar",
      department: "B.Com",
      year: "III Year",
      position: "Secretary",
      votes: 176,
    },
    {
      id: 4,
      name: "Anitha Devi",
      department: "BBA",
      year: "II Year",
      position: "Treasurer",
      votes: 155,
    },
    {
      id: 5,
      name: "Arun Prakash",
      department: "BCA",
      year: "I Year",
      position: "Joint Secretary",
      votes: 120,
    },
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🗳 Candidate List</h1>
      <p style={styles.subtitle}>
        Campus Election Voting System - Candidates Overview
      </p>

      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Candidate Name</th>
              <th style={styles.th}>Department</th>
              <th style={styles.th}>Year</th>
              <th style={styles.th}>Position</th>
              <th style={styles.th}>Votes</th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate) => (
              <tr key={candidate.id} style={styles.row}>
                <td style={styles.td}>{candidate.id}</td>
                <td style={styles.td}>{candidate.name}</td>
                <td style={styles.td}>{candidate.department}</td>
                <td style={styles.td}>{candidate.year}</td>
                <td style={styles.td}>{candidate.position}</td>
                <td style={styles.vote}>{candidate.votes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={styles.footer}>
        <h3>Total Candidates: {candidates.length}</h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f4f7fc",
    padding: "30px",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    textAlign: "center",
    color: "#1d4ed8",
    marginBottom: "5px",
  },

  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: "25px",
  },

  tableContainer: {
    overflowX: "auto",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  headerRow: {
    background: "#2563eb",
  },

  th: {
    color: "#fff",
    padding: "15px",
    textAlign: "left",
    fontSize: "15px",
  },

  row: {
    borderBottom: "1px solid #e5e7eb",
  },

  td: {
    padding: "14px",
    color: "#333",
  },

  vote: {
    padding: "14px",
    fontWeight: "bold",
    color: "#16a34a",
  },

  footer: {
    marginTop: "25px",
    textAlign: "center",
    color: "#1d4ed8",
    fontWeight: "bold",
  },
};

export default CandidateList;