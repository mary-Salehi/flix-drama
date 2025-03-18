import React from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SearchModal from "./SearchModal";

function Layout() {
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-lvh">
      <SearchModal/>
      <Header />
      <div className="flex">
        {/* sidebar */}
        <Sidebar />
        <div id="components" className="min-w-0 px-5 py-10 pt-[116px] lg:pt-10 w-full">
          <Outlet/>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Layout;
