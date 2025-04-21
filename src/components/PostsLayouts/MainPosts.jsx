import { useEffect, useState } from "react";
import useFetch, { API_BASE } from "../../hooks/useFetch";

import axios from "axios";
import { Anime } from "../Swiper/HomePageSwiper";
import usePagination from "../../hooks/usePagination";
import { useParams } from "react-router-dom";

function MainPosts() {
  let {category} = useParams();
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);
  const itemsPerPage = 10;
  console.log(category);
  
  
  const {
    isLoading,
    data: animeList,
    error,
    pagination,
  } = useFetch(`${API_BASE}/top/anime`, `filter=${category || ''}&page=${page}&limit=${itemsPerPage}`);

  
  useEffect(() => {
    if(pagination){
      setHasNextPage(pagination.has_next_page);
    }
  } , [pagination])

  const handleNextPage = () => {
    if (hasNextPage) {
      setPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full dark:text-white">Loading data...</div>
    );
  }

  return (
    <div className="w-full relative flex flex-col gap-10">
      {/* Loading overlay */}
      {/* {isChangingPage && (
        <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center z-10">
          <div className="bg-white p-4 rounded-md shadow-lg">
            Loading page {page}...
          </div>
        </div>
      )} */}

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

