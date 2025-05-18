function PaginationControls({page, prevPage, nextPage,isLoading,hasNextPage}) {
  return (
    <div className="flex justify-center items-center mt-8 gap-4">
      <div className="flex justify-center items-center mt-8 gap-4">
        <button
          onClick={prevPage}
          disabled={page === 1 || isLoading}
          className={`flex items-center justify-center w-[100px] px-4 py-2 rounded-md ${
            page === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-800 hover:bg-purple-700 text-white cursor-pointer"
          }`}
        >
          قبلی
        </button>

        <span className="px-4 py-2 bg-gray-100 rounded-md">صفحه {page}</span>

        <button
          onClick={nextPage}
          disabled={!hasNextPage || isLoading}
          className={`flex items-center justify-center px-4 py-2 w-[100px] rounded-md ${
            !hasNextPage
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purple-800 hover:bg-purple-700 text-white cursor-pointer"
          }`}
        >
          بعدی
        </button>
      </div>
    </div>
  );
}

export default PaginationControls;
