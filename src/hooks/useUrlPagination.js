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


// import { useEffect, useState } from "react";

// export default function usePagination(totalItems, itemsPerPage = 10) {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isChangingPage, setIsChangingPage] = useState(false);
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   // Calculate the range of pages to show with ellipsis
//   const getPageRange = () => {
//     const pages = [];
//     const maxVisiblePages = 5; // Number of page buttons to show (not including ellipsis)

//     // Always show first page
//     pages.push(1);

//     // Calculate left and right range
//     let left = Math.max(2, currentPage - 1);
//     let right = Math.min(totalPages - 1, currentPage + 1);

//     // Adjust if we're at the start or end
//     if (currentPage <= 3) {
//       right = Math.min(4, totalPages - 1);
//     }
//     if (currentPage >= totalPages - 2) {
//       left = Math.max(totalPages - 3, 2);
//     }

    
//     // Add left ellipsis if needed
//     if (left > 2) {
//       pages.push('...');
//     }

//     // Add middle pages
//     for (let i = left; i <= right; i++) {
//       pages.push(i);
//     }

//     // Add right ellipsis if needed
//     if (right < totalPages - 1) {
//       pages.push('...');
//     }

//     // Always show last page if different from first
//     if (totalPages > 1) {
//       pages.push(totalPages);
//     }

//     return pages;
//   }

//   const changePage = (newPage) => {
//     if (newPage < 1 || newPage > totalPages || newPage === currentPage) {
//       return;
//     }

//     setIsChangingPage(true);
//     setCurrentPage(newPage);
    
//     // Small delay to allow animations to complete
//     setTimeout(() => setIsChangingPage(false), 300);
//   };

//   // Reset to page 1 when total items changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [totalItems]);

//   return {
//     currentPage,
//     totalPages,
//     isChangingPage,
//     pageRange: getPageRange(),
//     changePage,
//   };

// }