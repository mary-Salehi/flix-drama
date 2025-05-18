import { useEffect, useState } from "react";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Anime from "../Anime";
import PaginationControls from "../../ui/PaginationControls";
import useUrlPagination from "../../hooks/useUrlPagination";

function MainPosts() {
  let { category } = useParams();

  const {
    page,
    itemsPerPage,
    hasNextPage,
    searchQuery,
    setItemsPerPage,
    setHasNextPage,
    goToPage,
    nextPage,
    prevPage
  } = useUrlPagination()

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
        {animeList?.map((anime) => (
          <Anime key={anime.mal_id} anime={anime} page="posts" />
        ))}
      </div>

      <PaginationControls page={page} prevPage={prevPage} nextPage={nextPage} hasNextPage={hasNextPage} isLoading={isLoading}/>
    </div>
  );
}

export default MainPosts;
