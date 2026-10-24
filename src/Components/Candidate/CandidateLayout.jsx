import React from "react";
import { Outlet } from "react-router-dom";

import CandidateNavbar from "./CandidateNavbar";
import CandidateSidebar from "./CandidateSidebar";

function CandidateLayout() {

  return (
    <>
      <CandidateNavbar />
      <CandidateSidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default CandidateLayout;
