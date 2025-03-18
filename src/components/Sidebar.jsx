import { Link, NavLink } from "react-router-dom";
import { useSearchModal} from "../contexts/SearchModalContext";
import { useSidebar } from "../contexts/SidebarContext";
import { useTheme } from "../contexts/ThemeContext.";

const sidebarLinks = [
  {
    id: 1,
    name: "صفحه اصلی",
    icon: "https://flix3drama.com/_app/immutable/assets/home-ed2012c8.svg",
    path: "/",
  },
  {
    id: 2,
    name: "فیلم و سریال ها",
    icon: "https://flix3drama.com/_app/immutable/assets/video-square-8e982d65.svg",
    path: "posts",
  },
  {
    id: 3,
    name: "بازیگران",
    icon: "https://flix3drama.com/_app/immutable/assets/profile-2user-5befa9bb.svg",
    path: "/actors",
  },
  {
    id: 4,
    name: "چی ببینم؟",
    icon: "https://flix3drama.com/_app/immutable/assets/play-cricle-d6bcaaec.svg",
    path: "/playlists",
  },
  {
    id: 5,
    name: "جدول پخش هفتگی",
    icon: "https://flix3drama.com/_app/immutable/assets/calendar-496301c3.svg",
    path: "/dailySchedule",
  },
];

function Sidebar() {
  const {theme , toggleTheme} = useTheme()
  const {isOpenSidebar , toggleSidebar} = useSidebar();
  const {setIsOpenSearchModal} = useSearchModal();

  return (
    <div className="">
      {/* backdrop */}
      {isOpenSidebar && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-[#060208] backdrop-blur-xl opacity-70 z-30"
        ></div>
      )}
      {/* sidebar */}
      <div
        className={`w-[230px] lg:w-[270px] transition-transform transform duration-500 ${
          isOpenSidebar ? "translate-x-0" : "translate-x-full"
        } lg:translate-x-0 lg:relative min-h-full bg-white dark:bg-[#100617] fixed top-0 right-0 z-40`}
      >
        <div className=" dark:text-white">
          <div className="py-5 flex items-center justify-center">
            <img
              src={
                theme === 'dark'
                  ? "https://flix3drama.com/_app/immutable/assets/logo-dark-2b843ca3.svg"
                  : "https://flix3drama.com/_app/immutable/assets/logo-light-d17b3f8b.svg"
              }
              alt="flix-drama-logo"
            />
          </div>
          <ul className="text-sm font-semibold">
            {sidebarLinks.map((link) => (
              <li
                key={link.id}
                className="dark:hover:bg-[#2b2133] hover:bg-[#f2eaf9]"
              >
                <NavLink to={link.path} onClick={isOpenSidebar ? toggleSidebar : ''} className={({ isActive }) =>
                    `flex items-center gap-x-5 py-5 px-7 cursor-pointer ${
                      isActive ? 'font-black text-black dark:text-white' : 'text-[#646464] dark:text-white'
                    }`
                  }>
                  
                  <img src={link.icon} alt="icon" />
                  <span className="text">{link.name}</span>
                </NavLink>
              </li>
            ))}
            {/* desktop search */}
            <div className="hidden lg:block px-2 py-5 border-t border-gray-600">
              <div className="space-y-2 dark:text-white text-[#575459]">
                <button
                  onClick={() => setIsOpenSearchModal(true)}
                  className="p-4 flex gap-x-2 w-full dark:bg-primary-1-dark bg-secondary-light rounded-xl cursor-pointer"
                >
                  <img
                    className="w-7 h-7"
                    src={
                      theme === 'dark'
                        ? "https://flix3drama.com/_app/immutable/assets/dark-search-normal-9c11321f.svg"
                        : "https://flix3drama.com/_app/immutable/assets/search-normal-ce312e83.svg"
                    }
                    alt=""
                  />
                  <span>جست و جو در سایت</span>
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-4 flex gap-x-2 w-full dark:bg-primary-1-dark bg-secondary-light rounded-xl cursor-pointer"
                >
                  <img
                    className="w-7 h-7"
                    src={
                      theme === 'dark'
                        ? "https://flix3drama.com/_app/immutable/assets/sun-1db16952.svg"
                        : "https://flix3drama.com/_app/immutable/assets/moon-08401da2.svg"
                    }
                    alt=""
                  />
                  <span>{theme === 'light' ? 'تاریک کردن تم سایت' : 'روشن کردن تم سایت'}</span>
                </button>
                <a className="user-account flex items-center gap-x-2 dark:bg-[#0F1020] bg-[#F2FDFD] p-4">
                  <img
                    className="h-12 w-12"
                    src="https://flix3drama.com/_app/immutable/assets/user-octagon-e6035b1c.svg"
                    alt=""
                  />
                  <div>
                    <span className="text-base font-bold cursor-pointer dark:text-[#00FFFF] text-[#0F8D8D]">کاربر مهمان</span>
                    <p className="text-xs font-bold dark:text-[#0A8686] text-[#10D2D2] mt-1">برای ثبت نام یا ورود کلیک کنید.</p>
                  </div>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
