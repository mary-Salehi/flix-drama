import {
  Bars3Icon,
  MagnifyingGlassIcon,
  MoonIcon,
} from "@heroicons/react/24/solid";
import SearchModal from "./SearchModal";
import { useSidebar } from "../contexts/SidebarContext";
import { useSearchModal} from "../contexts/SearchModalContext";
import { useTheme } from "../contexts/ThemeContext.";

function Header() {
  const {theme , toggleTheme} = useTheme()
  const {toggleSidebar} = useSidebar();
  const {setIsOpenSearchModal} = useSearchModal();
  return (
    <>
      {/* <SearchModal isDarkMode={isDarkMode} onOpen={setIsOpenSearchModal} open={isOpenSearchModal} /> */}
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
                theme === 'dark'
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
                theme === 'dark'
                  ? "https://flix3drama.com/_app/immutable/assets/sun-1db16952.svg"
                  : "https://flix3drama.com/_app/immutable/assets/moon-08401da2.svg"
              }
              alt=""
            />
          </button>
          <span className="user-account mr-2">
            <img
              className="h-12 w-12"
              src="https://flix3drama.com/_app/immutable/assets/user-octagon-e6035b1c.svg"
              alt=""
            />
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;

function Backdrop({onOpenSidebar , openSidebar}) {
  if(!openSidebar) return;
  return (
    <div onClick={() => onOpenSidebar(false)} className="fixed inset-0 bg-[#060208] backdrop-blur-xl opacity-70 z-30"></div>
  )
}
