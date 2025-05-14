import React, { useEffect, useState } from "react";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import SingleCharacter from "./SingleCharacter";
import { useLocation } from "react-router-dom";
import useUrlPagination from "../../hooks/useUrlPagination";
import PaginationButtons from "../Pagination/PaginationButtons";

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

  console.log(characters);
  
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
      <PaginationButtons
        handleNextPage={nextPage}
        handlePrevPage={prevPage}
        page={page}
        hasNextPage={hasNextPage}
      />
    </div>
  );
}

export default CharactersContainer;
