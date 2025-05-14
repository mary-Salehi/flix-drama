import React from "react";

function FavoriteButton() {
  return (
    <button className="cursor-pointer">
      <span className="w-[38px] h-[38px] rounded-lg flex justify-center items-center  bg-[#F7DFEF] dark:bg-[#2F112A] ">
        <svg
          width="20"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
            fill="#E9485B"
          ></path>
        </svg>
      </span>
    </button>
  );
}

export default FavoriteButton;

//notif
