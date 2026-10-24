import React, { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaVoteYea,
} from "react-icons/fa";

function SupervisorApproveVotes() {
  const [search, setSearch] = useState("");

  const [votes, setVotes] = useState([
    {
      id: 1,
      student: "Karthik Raja",
      regNo: "BCA001",
      candidate: "Arun Kumar",
      position: "Chairman",
      status: "Pending",
    },
    {
      id: 2,
      student: "Priya Devi",
      regNo: "BCA002",
      candidate: "Meena Lakshmi",
      position: "Secretary",
      status: "Approved",
    },
    {
      id: 3,
      student: "Rahul Kumar",
      regNo: "BCA003",
      candidate: "Vijay Kumar",
      position: "Treasurer",
      status: "Pending",
    },
    {
      id: 4,
      student: "Anitha Rani",
      regNo: "BCA004",
      candidate: "Arun Kumar",
      position: "Chairman",
      status: "Rejected",
    },
    {
      id: 5,
      student: "Suresh Kumar",
      regNo: "BCA005",
      candidate: "Priya Devi",
      position: "Secretary",
      status: "Pending",
    },
  ]);

  const approveVote = (id) => {
    setVotes((prev) =>
      prev.map((vote) =>
        vote.id === id ? { ...vote, status: "Approved" } : vote
      )
    );
  };

  const rejectVote = (id) => {
    setVotes((prev) =>
      prev.map((vote) =>
        vote.id === id ? { ...vote, status: "Rejected" } : vote
      )
    );
  };

  const filteredVotes = votes.filter(
    (vote) =>
      vote.student.toLowerCase().includes(search.toLowerCase()) ||
      vote.regNo.toLowerCase().includes(search.toLowerCase()) ||
      vote.candidate.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <FaVoteYea color="#2563EB" /> Approve Votes
      </h2>

      {/* Search */}
      <div style={styles.searchBox}>
        <FaSearch color="#6B7280" />
        <input
          type="text"
          placeholder="Search Student, Register No or Candidate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {/* Vote Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.tableHeader}>
              <th style={styles.th}>ID</th>
              <th style={styles.th}>Student Name</th>
              <th style={styles.th}>Register No</th>
              <th style={styles.th}>Candidate</th>
              <th style={styles.th}>Position</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredVotes.map((vote) => (
              <tr key={vote.id}>
                <td style={styles.td}>{vote.id}</td>
                <td style={styles.td}>{vote.student}</td>
                <td style={styles.td}>{vote.regNo}</td>
                <td style={styles.td}>{vote.candidate}</td>
                <td style={styles.td}>{vote.position}</td>

                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.status,
                      background:
                        vote.status === "Approved"
                          ? "#DCFCE7"
                          : vote.status === "Rejected"
                          ? "#FEE2E2"
                          : "#FEF3C7",
                      color:
                        vote.status === "Approved"
                          ? "#15803D"
                          : vote.status === "Rejected"
                          ? "#B91C1C"
                          : "#B45309",
                    }}
                  >
                    {vote.status}
                  </span>
                </td>

                <td style={styles.td}>
                  <button
                    style={styles.approveBtn}
                    onClick={() => approveVote(vote.id)}
                  >
                    <FaCheckCircle /> Approve
                  </button>

                  <button
                    style={styles.rejectBtn}
                    onClick={() => rejectVote(vote.id)}
                  >
                    <FaTimesCircle /> Reject
                  </button>
                </td>
              </tr>
            ))}

            {filteredVotes.length === 0 && (
              <tr>
                <td colSpan="7" style={styles.noData}>
                  No Vote Records Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginTop: "70px",
    marginLeft: "240px",
    padding: "30px",
    background: "#F3F4F6",
    minHeight: "calc(100vh - 70px)",
    fontFamily: "Arial, sans-serif",
    boxSizing: "border-box",
  },

  heading: {
    color: "#1E3A8A",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "12px 15px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  searchInput: {
    border: "none",
    outline: "none",
    marginLeft: "10px",
    width: "100%",
    fontSize: "15px",
  },

  tableContainer: {
    background: "#fff",
    borderRadius: "10px",
    overflowX: "auto",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },

  tableHeader: {
    background: "#2563EB",
    color: "#fff",
  },

  th: {
    padding: "14px",
    textAlign: "left",
    fontSize: "14px",
  },

  td: {
    padding: "12px",
    borderBottom: "1px solid #E5E7EB",
    fontSize: "14px",
  },

  status: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "bold",
    fontSize: "13px",
  },

  approveBtn: {
    background: "#16A34A",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    marginRight: "8px",
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
  },

  rejectBtn: {
    background: "#DC2626",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
  },

  noData: {
    textAlign: "center",
    padding: "20px",
    color: "#6B7280",
    fontWeight: "bold",
  },
};

export default SupervisorApproveVotes;