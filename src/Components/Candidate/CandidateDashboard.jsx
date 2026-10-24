import React from "react";
import CandidateNavbar from "./CandidateNavbar";
import {
  FaUserTie,
  FaVoteYea,
  FaBullhorn,
  FaUsers,
  FaBell,
  FaCheckCircle,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

function CandidateDashboard() {
  const cardStyle = {
    background: "#fff",
    borderRadius: "15px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    flex: "1",
    minWidth: "220px",
    transition: "0.3s",
  };

  const notificationStyle = {
    background: "#F9FAFB",
    padding: "12px",
    borderRadius: "10px",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <>
      <CandidateNavbar />
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#F3F8FF;
        }

        /* Dashboard spacing for Navbar & Sidebar */
        .candidate-dashboard{
          min-height:100vh;
          background:#F3F8FF;
          margin-top:70px;
          margin-left:250px;
          padding:30px;
          transition:0.3s ease;
        }

        .header{
          background:linear-gradient(135deg,#2563EB,#3B82F6);
          color:#fff;
          padding:25px;
          border-radius:18px;
          margin-bottom:25px;
        }

        .cards{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
          margin-bottom:25px;
        }

        .profile,
        .progress,
        .manifesto,
        .notifications{
          background:#fff;
          border-radius:15px;
          padding:25px;
          margin-bottom:25px;
          box-shadow:0 4px 12px rgba(0,0,0,0.08);
        }

        .profile-info{
          display:flex;
          align-items:center;
          gap:25px;
          flex-wrap:wrap;
          margin-top:15px;
        }

        .profile-img{
          width:120px;
          height:120px;
          border-radius:50%;
          border:4px solid #2563EB;
        }

        .progress-bar{
          background:#E5E7EB;
          height:15px;
          border-radius:10px;
          overflow:hidden;
          margin-top:10px;
        }

        .progress-fill{
          width:42%;
          height:100%;
          background:#2563EB;
          border-radius:10px;
        }

        .notification-box{
          background:#F9FAFB;
          padding:12px;
          border-radius:10px;
          margin-bottom:12px;
          display:flex;
          align-items:center;
          gap:10px;
        }

        @media(max-width:992px){
          .candidate-dashboard{
            margin-left:80px;
            padding:20px;
          }
        }

        @media(max-width:768px){
          .candidate-dashboard{
            margin-left:0;
            margin-top:70px;
            padding:15px;
          }

          .profile-info{
            flex-direction:column;
            text-align:center;
          }
        }
      `}</style>

      <div className="candidate-dashboard">
        {/* Header */}
        <div className="header">
          <h1>🗳 Candidate Dashboard</h1>
          <p style={{ marginTop: "8px" }}>
            Welcome, <b>Karthik Raja</b> 👋 | Campus Election 2026
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="cards">
          <div style={cardStyle}>
            <FaVoteYea size={35} color="#2563EB" />
            <h2>520</h2>
            <p>Total Votes Received</p>
          </div>

          <div style={cardStyle}>
            <FaUsers size={35} color="#16A34A" />
            <h2>1,250</h2>
            <p>Eligible Students</p>
          </div>

          <div style={cardStyle}>
            <FaChartBar size={35} color="#EA580C" />
            <h2>41.6%</h2>
            <p>Vote Percentage</p>
          </div>

          <div style={cardStyle}>
            <FaCheckCircle size={35} color="#9333EA" />
            <h2>Active</h2>
            <p>Election Status</p>
          </div>
        </div>

        {/* Candidate Profile */}
        <div className="profile">
          <h2 style={{ color: "#1E40AF" }}>Candidate Profile</h2>

          <div className="profile-info">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="Candidate"
              className="profile-img"
            />

            <div>
              <h3>Karthik Raja</h3>
              <p>
                <FaUserTie color="#2563EB" /> Position: Chairman Candidate
              </p>
              <p>
                <FaCalendarAlt color="#16A34A" /> Election Year: 2026
              </p>
              <p>
                <FaCheckCircle color="#22C55E" /> Status: Approved Candidate
              </p>
            </div>
          </div>
        </div>

        {/* Vote Progress */}
        <div className="progress">
          <h2 style={{ color: "#1E40AF" }}>Vote Progress</h2>

          <p style={{ marginTop: "10px" }}>Votes Received</p>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p
            style={{
              marginTop: "12px",
              color: "#2563EB",
              fontWeight: "bold",
            }}
          >
            520 Votes (42% of Total Students)
          </p>
        </div>

        {/* Manifesto */}
        <div className="manifesto">
          <h2 style={{ color: "#1E40AF" }}>
            <FaBullhorn color="#EA580C" /> Election Manifesto
          </h2>

          <ul style={{ marginTop: "15px", lineHeight: "2" }}>
            <li>Improve campus digital voting transparency.</li>
            <li>Organize more technical workshops and seminars.</li>
            <li>Enhance library and lab facilities.</li>
            <li>Increase sports and cultural events.</li>
            <li>Provide better student grievance support.</li>
          </ul>
        </div>

        {/* Notifications */}
        <div className="notifications">
          <h2 style={{ color: "#1E40AF", marginBottom: "15px" }}>
            <FaBell color="#F59E0B" /> Recent Notifications
          </h2>

          <div style={notificationStyle}>
            <FaBell color="#2563EB" />
            <span>Your nomination has been approved successfully.</span>
          </div>

          <div style={notificationStyle}>
            <FaBell color="#16A34A" />
            <span>Election campaign starts from 10 September 2026.</span>
          </div>

          <div style={notificationStyle}>
            <FaBell color="#EA580C" />
            <span>Voting date: 15 September 2026 (9:00 AM – 4:00 PM).</span>
          </div>

          <div style={notificationStyle}>
            <FaBell color="#9333EA" />
            <span>Results will be announced after vote counting.</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CandidateDashboard;