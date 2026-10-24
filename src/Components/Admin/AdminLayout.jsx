import React from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminLayout() {

  return (
    <>
      <AdminNavbar />

      <AdminSidebar />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default AdminLayout;
