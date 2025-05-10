import { useEffect, useState } from "react";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Anime from "../Anime";

function MainPosts() {
  let { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const searchQuery = searchParams.get("query");
  const urlPage = parseInt(searchParams.get("page")) || 1;

  const [page, setPage] = useState(urlPage);
  const [hasNextPage, setHasNextPage] = useState(true);
  const itemsPerPage = 10;

  // Sync state with URL changes
  useEffect(() => {
    const currentPage = parseInt(searchParams.get("page")) || 1;
    setPage(currentPage);
  }, [location.search]); // Trigger when URL search params change

  // Reset page to 1 when search query changes-✅
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    setSearchParams(params, { replace: true });
  }, [searchQuery]);
  

  const apiUrl = searchQuery
    ? `${API_BASE}/anime?q=${encodeURIComponent(
        searchQuery
      )}&page=${page}&limit=${itemsPerPage}`
    : `${API_BASE}/top/anime?filter=${
        category || ""
      }&page=${page}&limit=${itemsPerPage}`;

  const { isLoading, data: animeList, error, pagination } = useFetch(apiUrl);

  useEffect(() => {
    if (pagination) {
      setHasNextPage(pagination.has_next_page);
    }
  }, [pagination]);

  const handleNextPage = () => {
    if (hasNextPage) {
      const newPage = page + 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", newPage.toString());
      setSearchParams(params);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      const params = new URLSearchParams(searchParams);
      params.set("page", newPage.toString());
      setSearchParams(params);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full dark:text-white pt-5">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="w-full relative flex flex-col gap-10">
      <div className="flex flex-col gap-5 items-center">
        {animeList.map((anime) => (
          <Anime key={anime.mal_id} anime={anime} page="posts" />
        ))}
      </div>

      {/* pagination buttons */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1 || isLoading}
            className={`flex items-center justify-center w-[100px] px-4 py-2 rounded-md ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-900 hover:bg-purple-700 text-white"
            }`}
          >
            Prev
          </button>

          <span className="px-4 py-2 bg-gray-100 rounded-md">Page {page}</span>

          <button
            onClick={handleNextPage}
            disabled={!hasNextPage || isLoading}
            className={`flex items-center justify-center px-4 py-2 w-[100px] rounded-md ${
              !hasNextPage
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-900 hover:bg-purple-700 text-white"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPosts;
