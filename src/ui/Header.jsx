import {
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { useSidebar } from "../contexts/SidebarContext";
import { useSearchModal } from "../contexts/SearchModalContext";
import { useTheme } from "../contexts/ThemeContext.";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useClickOutside } from "../hooks/useClickOutside";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSidebar } = useSidebar();
  const { setIsOpenSearchModal } = useSearchModal();
  const [ openAccount, setOpenAccount ] = useState(false);

  const dropDownRef = useClickOutside(() => setOpenAccount(false))
  return (
    <>
      <div className="flex lg:hidden items-center justify-between w-full bg-white dark:bg-primary-2-dark fixed top-0 z-20 shadow-xl px-5 py-2">
        <button
          onClick={toggleSidebar}
          className="w-12 h-12 dark:text-white cursor-pointer"
        >
          <Bars3Icon />
        </button>
        <div className="flex justify-between items-center gap-x-2 text-[#575459]">
          <button
            onClick={() => setIsOpenSearchModal(true)}
            className="p-4 dark:bg-[#241A2B] rounded-xl bg-[#FBFBFB] cursor-pointer"
          >
            <img
              className="w-7 h-7"
              src={
                theme === "dark"
                  ? "https://flix3drama.com/_app/immutable/assets/dark-search-normal-9c11321f.svg"
                  : "https://flix3drama.com/_app/immutable/assets/search-normal-ce312e83.svg"
              }
              alt=""
            />
          </button>
          <button
            onClick={toggleTheme}
            className="p-4 dark:bg-[#241A2B] rounded-xl bg-[#FBFBFB] cursor-pointer"
          >
            <img
              className="w-7 h-7"
              src={
                theme === "dark"
                  ? "https://flix3drama.com/_app/immutable/assets/sun-1db16952.svg"
                  : "https://flix3drama.com/_app/immutable/assets/moon-08401da2.svg"
              }
              alt=""
            />
          </button>
          <div ref={dropDownRef} className="relative">
            <div
              onClick={() => setOpenAccount(!openAccount)}
              
              className="user-account mr-2"
            >
              <img
                className="h-12 w-12"
                src="https://flix3drama.com/_app/immutable/assets/user-octagon-e6035b1c.svg"
                alt=""
              />
            </div>
            {openAccount && <div className="w-[84px] flex flex-col text-black dark:text-white bg-white dark:bg-[#100617] py-1 absolute bg-opacity-95 mt-4 -right-16 rounded-xl text-sm overflow-hidden">
              <Link to={'account/login'} className="py-2 px-5 cursor-pointer font-semibold hover:bg-purple-800 hover:text-white overflow-hidden">
              ورود
              </Link>
              <Link to={'account/signUp'} className="py-2 px-5 cursor-pointer font-semibold hover:bg-purple-800 hover:text-white overflow-hidden">
              ثبت نام
              </Link>
            </div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
