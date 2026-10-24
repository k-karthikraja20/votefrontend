import React from "react";
import { FaTrophy, FaMedal, FaVoteYea, FaUsers, FaDownload } from "react-icons/fa";

function SupervisorResult() {
  const candidates = [
    {
      id: 1,
      name: "Arun Kumar",
      department: "BCA",
      position: "Chairman",
      votes: 520,
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "Priya Devi",
      department: "B.Sc CS",
      position: "Chairman",
      votes: 460,
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 3,
      name: "Rahul Raj",
      department: "B.Com",
      position: "Chairman",
      votes: 390,
      image: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: 4,
      name: "Kavya Sri",
      department: "BBA",
      position: "Chairman",
      votes: 300,
      image: "https://i.pravatar.cc/150?img=45",
    },
  ];

  const totalVotes = candidates.reduce((sum, item) => sum + item.votes, 0);

  const winner = candidates.reduce((prev, current) =>
    prev.votes > current.votes ? prev : current
  );

  const downloadResult = () => {
    alert("Election Result Downloaded Successfully!");
  };

  return (
    <div
      style={{
        padding: "30px",
        backgroundColor: "#F4F8FC",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#1E3A8A",
          color: "white",
          padding: "20px",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Supervisor Election Result</h2>
          <p style={{ marginTop: "5px" }}>
            Student Campus Election 2026
          </p>
        </div>

        <button
          onClick={downloadResult}
          style={{
            background: "white",
            color: "#1E3A8A",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          <FaDownload /> Download
        </button>
      </div>

      {/* Winner Card */}
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          padding: "25px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          marginBottom: "30px",
        }}
      >
        <img
          src={winner.image}
          alt={winner.name}
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "5px solid gold",
          }}
        />

        <div>
          <h2 style={{ color: "#F59E0B" }}>
            <FaTrophy /> Winner
          </h2>

          <h3>{winner.name}</h3>

          <p>
            <strong>Department:</strong> {winner.department}
          </p>

          <p>
            <strong>Position:</strong> {winner.position}
          </p>

          <p>
            <strong>Total Votes:</strong> {winner.votes}
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            background: "#2563EB",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <FaUsers size={30} />
          <h2>{candidates.length}</h2>
          <p>Total Candidates</p>
        </div>

        <div
          style={{
            background: "#16A34A",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <FaVoteYea size={30} />
          <h2>{totalVotes}</h2>
          <p>Total Votes</p>
        </div>

        <div
          style={{
            background: "#F59E0B",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <FaTrophy size={30} />
          <h2>{winner.votes}</h2>
          <p>Winning Votes</p>
        </div>
      </div>

      {/* Result Table */}
      <div
        style={{
          background: "white",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        }}
      >
        <h3 style={{ color: "#1E3A8A", marginBottom: "20px" }}>
          Candidate Result List
        </h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ background: "#2563EB", color: "white" }}>
              <th style={{ padding: "12px" }}>Rank</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
              <th>Votes</th>
              <th>Vote %</th>
            </tr>
          </thead>

          <tbody>
            {candidates
              .sort((a, b) => b.votes - a.votes)
              .map((item, index) => {
                const percent = (
                  (item.votes / totalVotes) *
                  100
                ).toFixed(1);

                return (
                  <tr
                    key={item.id}
                    style={{ borderBottom: "1px solid #ddd" }}
                  >
                    <td style={{ padding: "15px" }}>
                      {index === 0 ? (
                        <FaTrophy color="gold" size={22} />
                      ) : (
                        <FaMedal color="#2563EB" size={20} />
                      )}
                      <br />
                      #{index + 1}
                    </td>

                    <td>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: "55px",
                          height: "55px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>

                    <td>{item.name}</td>

                    <td>{item.department}</td>

                    <td>{item.position}</td>

                    <td
                      style={{
                        color: "#16A34A",
                        fontWeight: "bold",
                      }}
                    >
                      {item.votes}
                    </td>

                    <td style={{ width: "220px" }}>
                      <div
                        style={{
                          background: "#E5E7EB",
                          height: "10px",
                          borderRadius: "20px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${percent}%`,
                            background: "#2563EB",
                            height: "100%",
                          }}
                        ></div>
                      </div>

                      <small>{percent}%</small>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "30px",
          color: "#555",
          fontWeight: "bold",
        }}
      >
        © 2026 Student Campus Election System | Supervisor Result Page
      </div>
    </div>
  );
}

export default SupervisorResult;