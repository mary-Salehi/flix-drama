import { useEffect } from "react";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Anime from "../../ui/Anime";
import PaginationControls from "../../ui/PaginationControls";
import useUrlPagination from "../../hooks/useUrlPagination";
import Loader from "../../ui/Loader";

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
    prevPage,
  } = useUrlPagination();

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
      <Loader/>
    );
  }

  return (
    <div className="w-full relative flex flex-col">
      <div className="flex flex-col gap-5 items-center">
        {animeList?.map((anime) => (
          <Anime key={anime.mal_id} anime={anime} page="posts" />
        ))}
      </div>

      <PaginationControls
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        hasNextPage={hasNextPage}
        isLoading={isLoading}
      />
    </div>
  );
}

export default MainPosts;
