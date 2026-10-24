import React from "react";
import {
  FaUserShield,
  FaUsers,
  FaVoteYea,
  FaCheckCircle,
  FaClock,
  FaChartBar,
  FaUserTie,
  FaClipboardCheck,
} from "react-icons/fa";
import SupervisorNavbar from "./SupervisorNavbar";
import SupervisorSidebar from "./SupervisorSidebar";

function SupervisorDashboard() {
  const cards = [
    { title: "Total Students", value: "1,250", color: "#2563EB", icon: <FaUsers size={30} /> },
    { title: "Approved Candidates", value: "24", color: "#16A34A", icon: <FaUserTie size={30} /> },
    { title: "Active Elections", value: "2", color: "#EA580C", icon: <FaVoteYea size={30} /> },
    { title: "Votes Verified", value: "980", color: "#9333EA", icon: <FaClipboardCheck size={30} /> },
  ];

  const activities = [
    { election: "Chairman Election", status: "Active", date: "15 Sep 2026" },
    { election: "Secretary Election", status: "Completed", date: "10 Sep 2026" },
    { election: "Treasurer Election", status: "Upcoming", date: "20 Sep 2026" },
  ];

  return (
    <>
    <SupervisorNavbar/>
    <SupervisorSidebar/>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#EEF4FF;
        }

        /* Navbar + Sidebar Space */
        .supervisor-dashboard{
          margin-top: 70px;
          margin-left: 240px;
          margin-right: 0;
          padding:30px;
          min-height:calc(100vh - 70px);
          background:#EEF4FF;
          transition:0.3s ease;

        }

        /* Header */
        .header{
          background:linear-gradient(135deg,#1D4ED8,#3B82F6);
          color:#fff;
          padding:25px;
          border-radius:18px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          margin-bottom:25px;
        }

        .profile{
          display:flex;
          align-items:center;
          gap:15px;
        }

        .profile img{
          width: 70px;
          height:60px;
          border-radius:50%;
          border:3px solid white;
        }

        /* Cards */
        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
          margin-bottom:30px;
        }

        .card{
          background:#fff;
          border-radius:15px;
          padding:20px;
          box-shadow:0 5px 12px rgba(0,0,0,0.08);
          transition:.3s;
        }

        .card:hover{
          transform:translateY(-6px);
        }

        .card h3{
          color:#64748B;
          margin-top:10px;
          font-size:16px;
        }

        .card h2{
          color:#1E40AF;
          margin-top:8px;
          font-size:30px;
        }

        /* Grid */
        .grid{
          display:grid;
          grid-template-columns:2fr 1fr;
          gap:20px;
          margin-bottom:25px;
        }

        .box{
          background:#fff;
          border-radius:15px;
          padding:20px;
          box-shadow:0 5px 12px rgba(0,0,0,0.08);
        }

        .box h2{
          color:#1E40AF;
          margin-bottom:15px;
        }

        /* Progress */
        .progress{
          background:#E5E7EB;
          height:12px;
          border-radius:10px;
          overflow:hidden;
          margin:10px 0;
        }

        .progress-fill{
          height:100%;
          background:#2563EB;
          border-radius:10px;
        }

        /* Candidate List */
        .candidate{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:12px 0;
          border-bottom:1px solid #E5E7EB;
        }

        .approve-btn{
          background:#16A34A;
          color:#fff;
          border:none;
          padding:8px 12px;
          border-radius:8px;
          cursor:pointer;
        }

        /* Table */
        table{
          width: 50%;
          border-collapse:collapse;
        }

        th{
          background:#2563EB;
          color:#fff;
          padding:12px;
        }

        td{
          padding:12px;
          text-align:center;
          border-bottom:1px solid #E5E7EB;
        }

        tr:hover{
          background:#EFF6FF;
        }

        .status-active{
          color:#16A34A;
          font-weight:bold;
        }

        .status-completed{
          color:#2563EB;
          font-weight:bold;
        }

        .status-upcoming{
          color:#EA580C;
          font-weight:bold;
        }

        @media(max-width:992px){
          .supervisor-dashboard{
            margin-left:260px;
            margin-right:0;
            padding:20px;
          }

          .grid{
            grid-template-columns:1fr;
          }
        }

        @media(max-width:768px){
          .supervisor-dashboard{
            margin-left:0;
            margin-right:0;
            padding:15px;
          }

          .header{
            flex-direction:column;
            text-align:center;
            gap:15px;
          }

          table{
            min-width:650px;
          }
        }
      `}</style>

      <div className="supervisor-dashboard">

        {/* Header */}
        <div className="header">
          <div>
            <h1>Supervisor Dashboard</h1>
            <p>Campus Election Voting System 2026</p>
          </div>

          <div className="profile">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Supervisor"
            />
            <div>
              <h3>Karthik Raja</h3>
              <small>Election Supervisor</small>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          {cards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{ borderTop: `5px solid ${card.color}` }}
            >
              <div style={{ color: card.color }}>{card.icon}</div>
              <h3>{card.title}</h3>
              <h2>{card.value}</h2>
            </div>
          ))}
        </div>

        {/* Election Monitoring */}
        <div className="grid">
          <div className="box">
            <h2><FaChartBar /> Live Election Monitoring</h2>

            <p>Chairman Election</p>
            <div className="progress">
              <div className="progress-fill" style={{ width: "78%" }}></div>
            </div>
            <small>78% Voting Completed</small>

            <br /><br />

            <p>Secretary Election</p>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: "100%", background: "#16A34A" }}
              ></div>
            </div>
            <small>Completed</small>

            <br /><br />

            <p>Treasurer Election</p>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: "25%", background: "#EA580C" }}
              ></div>
            </div>
            <small>Upcoming Voting Process</small>
          </div>

          {/* Candidate Approval */}
          <div className="box">
            <h2><FaCheckCircle /> Candidate Approval</h2>

            {["Karthik Raja", "Priya", "Arun Kumar", "Divya"].map((name, i) => (
              <div className="candidate" key={i}>
                <span>{name}</span>
                <button className="approve-btn">Approve</button>
              </div>
            ))}
          </div>
        </div>

        {/* Voting Summary */}
        <div className="box" style={{ marginBottom: "25px" }}>
          <h2><FaVoteYea /> Voting Summary</h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <div style={{ flex: 1, minWidth: "220px" }}>
              <h3 style={{ color: "#16A34A" }}>Votes Cast</h3>
              <h1>980</h1>
            </div>

            <div style={{ flex: 1, minWidth: "220px" }}>
              <h3 style={{ color: "#EA580C" }}>Pending Votes</h3>
              <h1>270</h1>
            </div>

            <div style={{ flex: 1, minWidth: "220px" }}>
              <h3 style={{ color: "#2563EB" }}>Turnout Percentage</h3>
              <h1>78%</h1>
            </div>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="box">
          <h2><FaClock /> Recent Election Activities</h2>

          <div style={{ overflowX: "auto" }}>
            <table>
              <thead>
                <tr>
                  <th>Election</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {activities.map((item, index) => (
                  <tr key={index}>
                    <td>{item.election}</td>
                    <td>
                      <span
                        className={
                          item.status === "Active"
                            ? "status-active"
                            : item.status === "Completed"
                            ? "status-completed"
                            : "status-upcoming"
                        }
                      >
                        {item.status}
                      </span>
                    </td>
                    <td>{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
}

export default SupervisorDashboard;