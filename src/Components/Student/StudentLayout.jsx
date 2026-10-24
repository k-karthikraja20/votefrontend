import React from "react";
import { Outlet } from "react-router-dom";

import StudentNavbar from "./StudentNavbar";
import StudentSidebar from "./StudentSidebar";

function StudentLayout() {

  return (
    <>
      <StudentNavbar />
      <StudentSidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default StudentLayout;
