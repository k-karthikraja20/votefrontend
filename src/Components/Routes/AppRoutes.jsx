// import { Navigate, Route, Routes } from "react-router-dom";
// import Login from "../Pages/Login";
// import Register from "../Pages/Register";
// import RoleRoute from "../card/RoleRoute";
// import AdminDashboard from "../Admin/AdminDashboard";
// import ElectionResults from "../Admin/ElectionResults";
// import ManageCandidates from "../Admin/ManageCandidates";
// import ManageElections from "../Admin/ManageElections";
// import ManageStudents from "../Admin/ManageStudents";
// import CandidateDashboard from "../Candidate/CandidateDashboard";
// import CandidateProfile from "../Candidate/CandidateProfile";
// import ElectionStatus from "../Candidate/ElectionStatus";
// import CandidateList from "../Student/CandidateList";
// import StudentDashboard from "../Student/StudentDashboard";
// import Vote from "../Student/Vote";
// import VoteHistory from "../Student/VoteHistory";
// import SupervisorDashboard from "../Supervisor/SupervisorDashboard";
// import ApproveVotes from "../Supervisor/ApproveVotes";
// import SupervisorResult from "../Supervisor/SupervisorResult";
// import SupervisorManageCandidate from "../Supervisor/SupervisorManageCandidate";
// import AdminSidebar from "../Admin/AdminSidebar";
// import AdminNavbar from "../Admin/AdminNavbar";

// function RoleRoutes({ roles }) {
// 	return <RoleRoute allowedRoles={roles} />;
// }

// function AppRoutes() {
// 	return (
// 		<Routes>
// 			<Route path="/" element={<Navigate to="/login" replace />} />
// 			<Route path="/login" element={<Login />} />
// 			<Route path="/register" element={<Register />} />

// 			<Route element={<RoleRoutes roles={["admin"]} />}>
// 			    <Route path="/admin/AdminSidebar" element={<AdminSidebar />} />
// 				<Route path="/admin/AdminNavbar" element={<AdminNavbar />} />
// 				<Route path="/admin/dashboard" element={<AdminDashboard />} />
// 				<Route path="/admin/election-results" element={<ElectionResults />} />
// 				<Route path="/admin/manage-candidates" element={<ManageCandidates />} />
// 				<Route path="/admin/manage-elections" element={<ManageElections />} />
// 				<Route path="/admin/manage-students" element={<ManageStudents />} />
// 			</Route>

// 			<Route element={<RoleRoutes roles={["candidate"]} />}>
// 				<Route path="/candidate/dashboard" element={<CandidateDashboard />} />
// 				<Route path="/candidate/profile" element={<CandidateProfile />} />
// 				<Route path="/candidate/election-status" element={<ElectionStatus />} />
// 			</Route>

// 			<Route element={<RoleRoutes roles={["student"]} />}>
// 				<Route path="/student/dashboard" element={<StudentDashboard />} />
// 				<Route path="/student/candidates" element={<CandidateList />} />
// 				<Route path="/student/vote" element={<Vote />} />
// 				<Route path="/student/history" element={<VoteHistory />} />
// 				<Route path="/student/votehistory" element={<VoteHistory />} />
// 			</Route>

// 			<Route element={<RoleRoutes roles={["supervisor"]} />}>
// 				<Route path="/supervisor/dashboard" element={<SupervisorDashboard />} />
// 				<Route path="/supervisor/approve-votes" element={<ApproveVotes />} />
// 				<Route path="/supervisor/election-results" element={<SupervisorResult />} />
// 				<Route path="/supervisor/manage-candidates" element={<SupervisorManageCandidate />} />
// 			</Route>

// 			<Route path="/unauthorized" element={<h1>Unauthorized</h1>} />
// 			<Route path="*" element={<Navigate to="/login" replace />} />
// 		</Routes>
		import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import RoleRoute from "../card/RoleRoute";

/* ================= ADMIN ================= */

import AdminLayout from "../Admin/AdminLayout";
import AdminDashboard from "../Admin/AdminDashboard";
import ElectionResults from "../Admin/ElectionResults";
import ManageCandidates from "../Admin/ManageCandidates";
import ManageElections from "../Admin/ManageElections";
import ManageStudents from "../Admin/ManageStudents";

/* ================= CANDIDATE ================= */

import CandidateLayout from "../Candidate/CandidateLayout";
import CandidateDashboard from "../Candidate/CandidateDashboard";
import CandidateProfile from "../Candidate/CandidateProfile";
import ElectionStatus from "../Candidate/ElectionStatus";

/* ================= STUDENT ================= */

import StudentLayout from "../Student/StudentLayout";
import CandidateList from "../Student/CandidateList";
import StudentDashboard from "../Student/StudentDashboard";
import Vote from "../Student/Vote";
import VoteHistory from "../Student/VoteHistory";

/* ================= SUPERVISOR ================= */

import SupervisorLayout from "../Supervisor/SupervisorLayout";
import SupervisorDashboard from "../Supervisor/SupervisorDashboard";
import ApproveVotes from "../Supervisor/ApproveVotes";
import SupervisorResult from "../Supervisor/SupervisorResult";
import SupervisorManageCandidate from "../Supervisor/SupervisorManageCandidate";


function RoleRoutes({ roles }) {
  return (
    <RoleRoute
      allowedRoles={roles}
    />
  );
}


function AppRoutes() {

  return (

    <Routes>

      {/* ================= PUBLIC ================= */}

      <Route
        path="/"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* ================================================= */}
      {/* ===================== ADMIN ===================== */}
      {/* ================================================= */}

      <Route
        element={
          <RoleRoutes
            roles={["admin"]}
          />
        }
      >

        <Route element={<AdminLayout />}>

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/manage-students"
            element={<ManageStudents />}
          />

          <Route
            path="/admin/manage-candidates"
            element={<ManageCandidates />}
          />

          <Route
            path="/admin/manage-elections"
            element={<ManageElections />}
          />

          <Route
            path="/admin/election-results"
            element={<ElectionResults />}
          />

        </Route>

      </Route>


      {/* ================================================= */}
      {/* =================== CANDIDATE =================== */}
      {/* ================================================= */}

      <Route
        element={
          <RoleRoutes
            roles={["candidate"]}
          />
        }
      >

        <Route
          element={<CandidateLayout />}
        >

          <Route
            path="/candidate/dashboard"
            element={<CandidateDashboard />}
          />

          <Route
            path="/candidate/profile"
            element={<CandidateProfile />}
          />

          <Route
            path="/candidate/election-status"
            element={<ElectionStatus />}
          />

        </Route>

      </Route>


      {/* ================================================= */}
      {/* ===================== STUDENT =================== */}
      {/* ================================================= */}

      <Route
        element={
          <RoleRoutes
            roles={["student"]}
          />
        }
      >

        <Route
          element={<StudentLayout />}
        >

          <Route
            path="/student/dashboard"
            element={<StudentDashboard />}
          />

          <Route
            path="/student/candidates"
            element={<CandidateList />}
          />

          <Route
            path="/student/vote"
            element={<Vote />}
          />

          <Route
            path="/student/history"
            element={<VoteHistory />}
          />

          <Route
            path="/student/votehistory"
            element={<VoteHistory />}
          />

        </Route>

      </Route>


      {/* ================================================= */}
      {/* =================== SUPERVISOR ================== */}
      {/* ================================================= */}

      <Route
        element={
          <RoleRoutes
            roles={["supervisor"]}
          />
        }
      >

        <Route
          element={<SupervisorLayout />}
        >

          <Route
            path="/supervisor/dashboard"
            element={<SupervisorDashboard />}
          />

          <Route
            path="/supervisor/approve-votes"
            element={<ApproveVotes />}
          />

          <Route
            path="/supervisor/election-results"
            element={<SupervisorResult />}
          />

          <Route
            path="/supervisor/manage-candidates"
            element={
              <SupervisorManageCandidate />
            }
          />

        </Route>

      </Route>


      {/* ================= UNAUTHORIZED ================= */}

      <Route
        path="/unauthorized"
        element={
          <div
            style={{
              textAlign: "center",
              padding: "100px",
            }}
          >
            <h1>403</h1>

            <h2>
              Unauthorized
            </h2>

            <p>
              You don't have permission
              to access this page.
            </p>

          </div>
        }
      />


      {/* ================= NOT FOUND ================= */}

      <Route
        path="*"
        element={
          <Navigate
            to="/login"
            replace
          />
        }
      />

    </Routes>
  );
}

export default AppRoutes;





