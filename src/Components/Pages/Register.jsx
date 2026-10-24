import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    regNo: "",
    email: "",
    role: "student",
    phone: "",
    department: "",
    year: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(form).includes("")) {
      alert("Please fill all fields!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try { const { confirmPassword, role, ...newUser } = form; await api.post("/auth/register", newUser); alert("Registration successful! Please log in."); navigate("/login"); } catch (error) { alert(error.response?.data?.message || "Unable to register. Is the API running?"); }
  };

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial,sans-serif;
        }

        body{
          background:#ffffff;
        }

        .container{
          min-height:80vh;
          display:flex;
          justify-content:center;
          align-items:center;
        }

        .register-box{
          width:420px;
          background:#ffffff;
          padding:15px;
          border-radius:12px;
          border:1px solid #ddd;
          box-shadow:0 5px 15px rgba(0,0,0,0.1);
        }

        h2{
          text-align:center;
          color:#2563eb;
          margin-bottom:20px;
        }

        input, select{
          width:100%;
          padding:12px;
          margin:10px 0;
          border:1px solid #ccc;
          border-radius:8px;
          outline:none;
        }

        input:focus, select:focus{
          border-color:#2563eb;
        }

        button{
          width:100%;
          padding:12px;
          background:#2563eb;
          color:white;
          border:none;
          border-radius:8px;
          font-size:16px;
          cursor:pointer;
        }

        button:hover{
          background:#1d4ed8;
        }

        p{
          text-align:center;
          margin-top:15px;
        }

        span{
          color:#2563eb;
          font-weight:bold;
          cursor:pointer;
        }
      `}</style>

      <div className="container">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2>Campus Election Register</h2>

          <input type="text" name="name" placeholder="Student Name" value={form.name} onChange={handleChange} />
          <input type="text" name="regNo" placeholder="Register Number" value={form.regNo} onChange={handleChange} />
          <input type="email" name="email" placeholder="College Email" value={form.email} onChange={handleChange} />
{/* 
          <select name="role" value={form.role} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="candidate">Candidate</option>
            <option value="admin">Admin</option>
          </select> */}

          <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />

          <select name="department" value={form.department} onChange={handleChange}>
            <option value="">Select Department</option>
            <option>BCA</option>
            <option>B.Sc Computer Science</option>
            <option>B.Com</option>
            <option>BBA</option>
            <option>BA English</option>
          </select>

          <select name="year" value={form.year} onChange={handleChange}>
            <option value="">Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
          </select>

          <input type="password" name="password" placeholder="Create Password" value={form.password} onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />

          <button type="submit">Register</button>

          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    </>
  );
}

export default Register;
