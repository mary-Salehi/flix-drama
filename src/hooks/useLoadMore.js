import { useState } from "react"

export const useLoadMore = (initialCount = 10, increment = 10) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const loadMore = () => {
    setVisibleCount(prev => prev + increment)
  }

  const reset = () => {
    setVisibleCount(initialCount)
  }

  return {
    visibleCount,
    loadMore,
    reset,
    hasMore: (totalItems) => totalItems > visibleCount
  }
}