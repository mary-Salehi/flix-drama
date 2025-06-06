import React, { useEffect } from "react";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import SearchModal from "../components/search/SearchModal";


function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isSinglePost = location.pathname.startsWith("/post/");
  const isSingleCharacter = location.pathname.startsWith("/character/");
  const isPostsSection =
    location.pathname.startsWith("/posts/") && !isSinglePost;

  return (
    <main className="bg-background-light dark:bg-background-dark min-h-lvh max-w-[1440px] mx-auto">
      <SearchModal />
      <Header />
      <div className="flex">
        {/* sidebar */}
        <Sidebar />
        <div
          id="components"
          className={`min-w-0 ${
            isSinglePost || isSingleCharacter
              ? "p-0 pb-10 pt-[76px] lg:pt-0"
              : "px-5 py-10 pt-[116px] lg:pt-10"
          } w-full`}
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Layout;
