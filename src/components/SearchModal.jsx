import { useEffect, useRef, useState } from "react";
import { useSearchModal } from "../contexts/SearchModalContext";
import { useTheme } from "../contexts/ThemeContext.";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function SearchModal() {
  const { theme } = useTheme();
  const { isOpenSearchModal, setIsOpenSearchModal } = useSearchModal();
  const [searchQuery, setSearchQuery] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [searchResults, setSearchResults] = useState(null);
  const searchInputRef = useRef(null);

  // Focus the input when modal opens
  useEffect(() => {
    if (isOpenSearchModal && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpenSearchModal]);

  let { data, isLoading, error } = useFetch(
    shouldFetch ? `https://api.jikan.moe/v4/anime?q=${searchQuery}` : null
  );

  console.log("error is:  ", error);

  // Update search results when data changes
  useEffect(() => {
    if (data) {
      setSearchResults(data);
    }
  }, [data]);

  const resetSearch = () => {
    setSearchQuery("");
    setShouldFetch(false);
    setSearchResults(null);
  };

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setShouldFetch(true);
    } else {
      setShouldFetch(false);
      setSearchResults(null); // Clear when query becomes empty
    }
  }, [searchQuery]);

  useEffect(() => {
    if (!isOpenSearchModal) {
      resetSearch();
    }
  }, [isOpenSearchModal]);

  if (!isOpenSearchModal) return null;
  return (
    <div>
      {/* backdrop */}
      <div
        onClick={() => setIsOpenSearchModal(false)}
        className="fixed inset-0 bg-black/30 backdrop-blur-2xl z-50"
      ></div>
      {/* modal */}
      <div className="px-5 py-9 fixed top-10 left-5 right-5 z-[60] rounded-3xl bg-white/60 dark:opacity-100 dark:bg-[#100617]">
        <div className="flex flex-col sm:flex-row-reverse items-center justify-between">
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
            ref={searchInputRef}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="focus:outline-0 py-4 w-full placeholder:text-sm dark:placeholder-zinc-300 dark:text-zinc-100 sm:placeholder:text-lg placeholder:font-semibold "
            placeholder="نام فیلم،سریال یا هرچیزی که دنبال آن هستید را وارد کنید"
            type="text"
          />
        </div>
        {isLoading && (
          <div className="flex justify-center items-center my-8">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="animate-spin size-5 rounded-full h-14 w-14 border-5 border-b-4 border-b-transparent border-dotted border-purple-700"></div>
              <div className="w-full dark:text-white/70 text-black/70 font-semibold">
                در حال جستوجو
              </div>
            </div>
          </div>
        )}
        {/* {error && (
          <div className="w-full dark:text-white/70 bg-blue-200 text-black/70 text-center my-8">
            نتیجه ای یافت نشد
          </div>
        )}
        {/* No results found */}
        {/* {!isLoading &&
          !error &&
          searchResults &&
          searchResults.length === 0 && (
            <div className="text-center mt-6 bg-yellow-200 text-gray-500 dark:text-gray-400">
              نتیجه ای یافت نشد
            </div>
          )} */}
        {searchResults && (
          <div className="flex flex-col justify-center items-center gap-3 mt-5 ">
            {searchResults.slice(0, 3).map((anime) => {
              return (
                <div
                  key={anime.mal_id}
                  className="w-[380px] h-[95px] flex bg-white opacity-100 z-[80] rounded-xl overflow-hidden dark:bg-primary-1-dark shadow-md"
                >
                  <div className="h-full text-center text-white bg-purple-500 w-[96px]">
                    <img
                      src={anime.images?.webp.large_image_url}
                      alt={anime.title_english}
                      className="text-xs h-full w-full object-fit"
                    />
                  </div>
                  <div className="p-4 w-full flex items-center justify-between gap-3">
                    <div>
                      <p className="dark:text-white text-sm font-semibold">
                        {anime.title_japanese}
                      </p>
                      <p className="text-xs text-slate-400">
                        {anime.title_english}
                      </p>
                    </div>
                    <Link
                      to={`/post/${encodeURIComponent(anime.title)}`}
                      state={{ mal_id: anime.mal_id }}
                      onClick={() => setIsOpenSearchModal(false)}
                      className="bg-yellow-primary text-white rounded-md text-center p-2 px-4"
                    >
                      مشاهده
                    </Link>
                  </div>
                </div>
              );
            })}
            <div className="mt-6">
              <Link
                to={{
                  pathname: "/posts",
                  search: `?query=${encodeURIComponent(searchQuery)}`,
                  state: {
                    searchResults: searchResults, // optional additional state
                  },
                }}
                onClick={() => setIsOpenSearchModal(false)}
                className="p-3 px-5 bg-black/50 dark:bg-black/70 rounded-xl text-sm text-white font-black"
              >
                مشاهده بیشتر
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchModal;
