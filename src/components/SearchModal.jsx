import { useSearchModal } from "../contexts/SearchModalContext";
import { useTheme } from "../contexts/ThemeContext.";

function SearchModal() {
  const { theme } = useTheme();
  const { isOpenSearchModal, setIsOpenSearchModal } = useSearchModal();
  if (!isOpenSearchModal) return;
  return (
    <div>
      {/* backdrop */}
      <div
        onClick={() => setIsOpenSearchModal(false)}
        className="fixed inset-0 bg-black/30 backdrop-blur-2xl z-50"
      ></div>
      {/* modal */}
      <div className="flex flex-col sm:flex-row-reverse sm:h-[149px] items-center justify-between px-5  py-9 fixed top-10 left-5 right-5 z-[60] rounded-3xl bg-white opacity-70 dark:opacity-100 dark:bg-[#100617]">
        <img
          className="w-7 h-7"
          src={
            theme === "dark"
              ? "https://flix3drama.com/_app/immutable/assets/dark-search-normal-9c11321f.svg"
              : "https://flix3drama.com/_app/immutable/assets/search-normal-ce312e83.svg"
          }
          alt="search-logo"
        />
        <input
          className="focus:outline-0 py-4 w-full placeholder:text-sm dark:placeholder-zinc-300 dark:text-zinc-100 sm:placeholder:text-lg placeholder:font-semibold "
          placeholder="نام فیلم،سریال یا هرچیزی که دنبال آن هستید را وارد کنید"
          type="text"
        />
      </div>
    </div>
  );
}

export default SearchModal;
