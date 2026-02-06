import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import { AnimatePresence } from "framer-motion";
import PageTransition from "../ui/PageTransition";

const AdminLayout = () => {
  const location = useLocation();
  
  return (
    <>
      <div className="min-h-screen flex justify-center">
        <AdminNavbar />

        <AnimatePresence mode="wait">
          <main className="grow  mt-40 md:mt-50 xl:mt-55">
            <Outlet key={location.pathname} />
          </main>
        </AnimatePresence>
      </div>
    </>
  );
};

export default AdminLayout;
