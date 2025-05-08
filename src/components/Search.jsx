import { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <div className="my-14">
      <div className="flex flex-col sm:flex-row sm:items-center bg-white dark:bg-[#241A2B] rounded-2xl gap-y-5 p-3 pr-6 text-sm">
        <div className="flex w-full gap-x-3">
          <span className="">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                fill="url(#paint0_linear_103_3945)"
              ></path>
              <path
                d="M15.975 16.5C15.84 16.5 15.705 16.4475 15.6075 16.35L14.2125 14.955C14.01 14.7525 14.01 14.4225 14.2125 14.2125C14.415 14.01 14.745 14.01 14.955 14.2125L16.35 15.6075C16.5525 15.81 16.5525 16.14 16.35 16.35C16.245 16.4475 16.11 16.5 15.975 16.5Z"
                fill="url(#paint1_linear_103_3945)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_103_3945"
                  x1="8.625"
                  y1="1.5"
                  x2="8.625"
                  y2="15.75"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1CA7F5"></stop>
                  <stop offset="1" stopColor="#1CA7F5" stopOpacity="0.5"></stop>
                </linearGradient>
                <linearGradient
                  id="paint1_linear_103_3945"
                  x1="15.2813"
                  y1="14.0606"
                  x2="15.2813"
                  y2="16.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#1CA7F5"></stop>
                  <stop offset="1" stopColor="#1CA7F5" stopOpacity="0.5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <input
            className="w-full focus:outline-0 placeholder:text-[#939191] dark:text-white"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="اسم فیلم یا سریال مد نظر خود را وارد کنید"
          />
        </div>
        <div className="flex shrink-0 items-center justify-center font-semibold sm:text-sm gap-x-4">
          <button
            onClick={handleClear}
            className="text-[#737373] dark:text-white cursor-pointer"
          >
            پاک کردن
          </button>
          <Link
            to={
              { 
                pathname: "/posts",
                search: `?query=${encodeURIComponent(searchQuery)}` 
              }}
            className="bg-[#9600FF] px-5 py-3 rounded-xl text-white cursor-pointer"
          >
            جست و جو
          </Link>
        </div>
      </div>
      <div className="hidden sm:block bg-[#EFE6F5] dark:bg-[#100617] w-11/12 mx-auto rounded-b-2xl p-3"></div>
    </div>
  );
}

export default Search;
