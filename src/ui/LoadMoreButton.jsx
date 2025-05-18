import React from "react";

function LoadMoreButton({
  onClick,
  isLoading,
  hasMore,
  text = "نمایش بیشتر",
  loadingText = "در حال بارگذاری...",
}) {
  if (!hasMore) return null;

  return (
    <div className="text-center mt-6">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="px-4 py-2 bg-purple-800 text-white rounded hover:bg-purple-700 transition-colors disabled:opacity-50 cursor-pointer"
      >
        {isLoading ? loadingText : text}
      </button>
    </div>
  );
}

export default LoadMoreButton;
