import React from "react";
import { Outlet } from "react-router-dom";

import SupervisorNavbar from "./SupervisorNavbar";
import SupervisorSidebar from "./SupervisorSidebar";

function SupervisorLayout() {

  return (
    <>
      <SupervisorNavbar />
      <SupervisorSidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default SupervisorLayout;
