import { useState } from "react";
import Dramas from "./Dramas";
import Header from "./Header";
import HeaderSwiper from "./HeaderSwiper";
import Search from "./Search";
import DramasContainer from "./DramasContainer";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SearchModal from "./SearchModal";

const sidebarLinks = [
  {
    id: 1,
    name: "صفحه اصلی",
    icon: "https://flix3drama.com/_app/immutable/assets/home-ed2012c8.svg",
    path: "dj",
  },
  {
    id: 2,
    name: "فیلم و سریال ها",
    icon: "https://flix3drama.com/_app/immutable/assets/video-square-8e982d65.svg",
    path: "dj",
  },
  {
    id: 3,
    name: "بازیگران",
    icon: "https://flix3drama.com/_app/immutable/assets/profile-2user-5befa9bb.svg",
    path: "dj",
  },
  {
    id: 4,
    name: "چی ببینم؟",
    icon: "https://flix3drama.com/_app/immutable/assets/play-cricle-d6bcaaec.svg",
    path: "dj",
  },
  {
    id: 5,
    name: "جدول پخش هفتگی",
    icon: "https://flix3drama.com/_app/immutable/assets/calendar-496301c3.svg",
    path: "dj",
  },
];

function MainComponent({ setIsDarkMode, isDarkMode }) {
  const darkMode = { isDarkMode, setIsDarkMode };
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setIsOpenSidebar((prev) => !prev);
  };
  return (
    <main className="bg-background-light dark:bg-background-dark min-h-lvh">
      <SearchModal
        isDarkMode={isDarkMode}
        onOpen={setIsOpenSearchModal}
        open={isOpenSearchModal}
      />
      <Header
        darkMode={darkMode}
        toggleSidebar={toggleSidebar}
        setIsOpenSearchModal={setIsOpenSearchModal}
      />
      <div className="flex justify-between">
        {/* sidebar */}
        <Sidebar
          darkMode={darkMode}
          toggleSidebar={toggleSidebar}
          isOpenSidebar={isOpenSidebar}
          isOpenSearchModal={isOpenSearchModal}
          setIsOpenSearchModal={setIsOpenSearchModal}
        />
        <div id="components" className="min-w-0 px-5 py-10 pt-[116px] lg:pt-10">
          <HeaderSwiper />
          <Search />
          <DramasContainer />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default MainComponent;
