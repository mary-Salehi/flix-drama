
function PaginationButtons({handleNextPage, handlePrevPage, page ,hasNextPage}) {
  return (
    <div className="flex justify-center items-center mt-8 gap-4">
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className={`flex items-center justify-center w-[100px] px-4 py-2 rounded-md cursor-pointer ${
              page === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-900 hover:bg-purple-700 text-white"
            }`}
          >
            قبلی
          </button>

          <span className="px-4 py-2 bg-gray-100 rounded-md">صفحه {page}</span>

          <button
            onClick={handleNextPage}
            disabled={!hasNextPage}
            className={`flex items-center justify-center px-4 py-2 w-[100px] rounded-md cursor-pointer ${
              !hasNextPage
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-purple-900 hover:bg-purple-700 text-white"
            }`}
          >
            بعدی
          </button>
        </div>
      </div>
  )
}

export default PaginationButtons