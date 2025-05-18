import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

export default function useUrlPagination(defaultItemsPerPage = 10) {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  // Get initial values from URL
  const urlPage = parseInt(searchParams.get('page')) || 1;
  const searchQuery = searchParams.get('query') || '';
  
  // State management
  const [page, setPage] = useState(urlPage);
  const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
  const [hasNextPage, setHasNextPage] = useState(false);

  // Sync page state with URL changes
  useEffect(() => {
    const currentPage = parseInt(searchParams.get('page')) || 1;
    setPage(currentPage);
  }, [location.search]);

  // Reset to page 1 when search query changes
  useEffect(() => {
    if (searchQuery && page !== 1) {
      const params = new URLSearchParams(searchParams);
      params.set('page', '1');
      setSearchParams(params, { replace: true });
    }
  }, [searchQuery]);

  // Pagination controls
  const goToPage = (newPage) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', newPage.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextPage = () => hasNextPage && goToPage(page + 1);
  const prevPage = () => page > 1 && goToPage(page - 1);

  return {
    page,
    itemsPerPage,
    hasNextPage,
    searchQuery,
    setItemsPerPage,
    setHasNextPage,
    goToPage,
    nextPage,
    prevPage,
    // For building API URLs
    getPaginationQuery: () => `page=${page}&limit=${itemsPerPage}`
  };
}
