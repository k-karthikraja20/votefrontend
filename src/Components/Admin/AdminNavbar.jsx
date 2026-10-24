import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function AdminNavbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow fixed-top">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand fw-bold" href="#">
            🗳️ Campus Election
          </a>

          {/* Mobile Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Candidates
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Vote
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Results
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>

            {/* Right Side */}
            <button className="btn btn-warning btn-sm fw-bold">Logout</button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      {/* <div className="container text-center mt-5 pt-5 ">
        <h1 className="display-4 text-primary fw-bold">
          Welcome to the Campus Election Portal
        </h1>

        <p className="lead mt-3 fw-bold text-align-center">
          Welcome to the College Campus Election Portal.
        </p>

        <button className="btn btn-primary btn-lg mt-3">
          Vote Now
        </button>
      </div>  */}

      {/* CSS */}
      <style>{`
        body {
          background: #f4f8fb;
        }

        .navbar-brand {
          font-size: 24px;
        }

        .nav-link {
          color: white !important;
          font-weight: 500;
          margin: 0 8px;
        }

        .nav-link:hover {
          color: yellow !important;
        }

        .btn-warning:hover {
          background: orange;
        }
      `}</style>
    </>
  );
}

export default AdminNavbar;