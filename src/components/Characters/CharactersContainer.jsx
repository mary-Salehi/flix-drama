import React, { useEffect, useState } from "react";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import SingleCharacter from "./SingleCharacter";
import { useLocation } from "react-router-dom";
import useUrlPagination from "../../hooks/useUrlPagination";
import PaginationControls from "../../ui/PaginationControls";
// import PaginationButtons from "../Pagination/PaginationButtons";

function CharactersContainer() {
  const { state } = useLocation();
  const {
    page,
    itemsPerPage,
    hasNextPage,
    nextPage,
    prevPage,
    setHasNextPage,
    getPaginationQuery,
  } = useUrlPagination(12);

  const {
    data: characters,
    isLoading,
    pagination,
    error,
  } = useFetch(`${API_BASE}/characters?${getPaginationQuery()}`);

  // Sync pagination info from API
  useEffect(() => {
    if (pagination) {
      setHasNextPage(pagination.has_next_page);
    }
  }, [pagination]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        {characters.map((character) => {
          return (
            <SingleCharacter character={character} key={character.mal_id} />
          );
        })}
      </div>
      {!isLoading && !error && characters.length > 0 && (
        <PaginationControls
          page={page}
          nextPage={nextPage}
          prevPage={prevPage}
          hasNextPage={hasNextPage}
        />
      )}
    </div>
  );
}

export default CharactersContainer;
