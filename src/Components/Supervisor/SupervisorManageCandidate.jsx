import React, { useState } from "react";
import {
  FaSearch,
  FaCheckCircle,
  FaTimesCircle,
  FaTrash,
  FaUserTie,
} from "react-icons/fa";

function SupervisorManageCandidate() {
  const [search, setSearch] = useState("");

  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      department: "BCA",
      year: "III Year",
      position: "Chairman",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Devi",
      department: "B.Sc CS",
      year: "II Year",
      position: "Secretary",
      status: "Approved",
    },
    {
      id: 3,
      name: "Rahul Raj",
      department: "B.Com",
      year: "III Year",
      position: "Treasurer",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Meena Lakshmi",
      department: "BBA",
      year: "I Year",
      position: "Joint Secretary",
      status: "Pending",
    },
  ]);

  const approveCandidate = (id) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, status: "Approved" }
          : candidate
      )
    );
  };

  const rejectCandidate = (id) => {
    setCandidates(
      candidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, status: "Rejected" }
          : candidate
      )
    );
  };

  const deleteCandidate = (id) => {
    setCandidates(candidates.filter((candidate) => candidate.id !== id));
  };

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.position.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>
        <FaUserTie /> Supervisor Manage Candidates
      </h2>

      {/* Search */}
      <div style={styles.searchBox}>
        <FaSearch color="#555" />
        <input
          type="text"
          placeholder="Search Candidate..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Year</th>
              <th>Position</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td>{candidate.id}</td>
                <td>{candidate.name}</td>
                <td>{candidate.department}</td>
                <td>{candidate.year}</td>
                <td>{candidate.position}</td>

                <td>
                  <span
                    style={{
                      ...styles.status,
                      backgroundColor:
                        candidate.status === "Approved"
                          ? "#2ecc71"
                          : candidate.status === "Rejected"
                          ? "#e74c3c"
                          : "#f39c12",
                    }}
                  >
                    {candidate.status}
                  </span>
                </td>

                <td>
                  <button
                    style={styles.approveBtn}
                    onClick={() => approveCandidate(candidate.id)}
                  >
                    <FaCheckCircle /> Approve
                  </button>

                  <button
                    style={styles.rejectBtn}
                    onClick={() => rejectCandidate(candidate.id)}
                  >
                    <FaTimesCircle /> Reject
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteCandidate(candidate.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredCandidates.length === 0 && (
              <tr>
                <td colSpan="7" style={styles.noData}>
                  No Candidate Found
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
    padding: "25px",
    background: "#f4f7fc",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  },

  heading: {
    color: "#1e3a8a",
    marginBottom: "20px",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    background: "#fff",
    padding: "10px 15px",
    borderRadius: "8px",
    width: "350px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },

  input: {
    border: "none",
    outline: "none",
    marginLeft: "10px",
    width: "100%",
    fontSize: "15px",
  },

  tableContainer: {
    overflowX: "auto",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
  },

  thead: {
    background: "#1e40af",
    color: "#fff",
  },

  status: {
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "13px",
    fontWeight: "bold",
  },

  approveBtn: {
    background: "#16a34a",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    margin: "2px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  rejectBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    margin: "2px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  deleteBtn: {
    background: "#374151",
    color: "#fff",
    border: "none",
    padding: "8px 10px",
    margin: "2px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  noData: {
    padding: "20px",
    color: "red",
    fontWeight: "bold",
  },
};

export default SupervisorManageCandidate;