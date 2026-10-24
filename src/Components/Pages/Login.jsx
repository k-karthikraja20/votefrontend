import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    try { const user = await login(email, password); alert(`${user.role} login successful`); navigate(`/${user.role}/dashboard`); } catch (error) { alert(error.response?.data?.message || "Unable to log in. Is the API running?"); }
  };

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#F8FAFC;
        }

        /* Space for Fixed Navbar */
        .login-page{
          margin-top:70px;       /* Navbar Height */
          padding:30px;          /* Inside Padding */
          min-height:calc(100vh - 70px);
          display:flex;
          justify-content:center;
          align-items:center;
          background:linear-gradient(135deg,#EFF6FF,#DBEAFE,#F0F9FF);
        }

        .login-box{
          width:100%;
          max-width:420px;
          background:#FFFFFF;
          padding:35px;
          border-radius:20px;
          box-shadow:0 8px 25px rgba(37,99,235,0.15);
          border:1px solid #E5E7EB;
        }

        .logo{
          width:80px;
          height:80px;
          margin:0 auto 15px;
          background:#2563EB;
          color:#fff;
          border-radius:50%;
          display:flex;
          justify-content:center;
          align-items:center;
          font-size:34px;
        }

        h1{
          text-align:center;
          color:#1E3A8A;
          font-size:26px;
          margin-bottom:8px;
        }

        .subtitle{
          text-align:center;
          color:#64748B;
          margin-bottom:25px;
        }

        label{
          display:block;
          margin:15px 0 6px;
          font-weight:bold;
          color:#334155;
        }

        input,select{
          width:100%;
          padding:12px;
          border:1px solid #CBD5E1;
          border-radius:10px;
          background:#F8FAFC;
          font-size:15px;
          outline:none;
        }

        input:focus,
        select:focus{
          border-color:#2563EB;
          box-shadow:0 0 6px rgba(37,99,235,0.3);
        }

        .forgot{
          text-align:right;
          margin-top:10px;
          color:#2563EB;
          font-size:14px;
          cursor:pointer;
        }

        button{
          width:100%;
          margin-top:20px;
          padding:13px;
          border:none;
          border-radius:10px;
          background:#2563EB;
          color:#fff;
          font-size:17px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        button:hover{
          background:#1D4ED8;
        }

        @media(max-width:768px){
          .login-page{
            margin-top:70px;
            padding:20px;
          }

          .login-box{
            padding:25px;
          }
        }
      `}</style>

      <div className="login-page">
        <div className="login-box">

          <div className="logo">🗳️</div>

          <h1>Campus Election Voting System</h1>
          <p className="subtitle">Secure Login Portal</p>

          <form onSubmit={handleLogin}>
            {/* <label>Select Role</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">🎓 Student</option>
              <option value="candidate">🧑 Candidate</option>
              <option value="admin">👨‍💼 Admin</option>
            </select>  */}

            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter College Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="forgot">Forgot Password?</div>

            <button type="submit">Login</button>
          </form>

          <p>
            New voter? <Link to="/register">Create an account</Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;
