import React from 'react'

function MiniCard({item}) {
  return (
    <div className="flex flex-col w-[140px] rounded-3xl overflow-hidden bg-white dark:bg-primary-1-dark">
      <div className="w-full h-[150px] flex items-center justify-center bg-purple-800">
        <img
          className="w-full h-full object-fit"
          src={item?.character?.images?.webp?.image_url}
          alt=""
        />
        {!item?.character?.images?.webp?.image_url && (
          <UserCircleIcon className="w-20" />
        )}
      </div>
      <Link  to={`/character/${item?.character?.mal_id}`}
          className="flex flex-col items-center justify-center px-2 py-5 h-full">
        <span className="font-bold dark:text-white text-center mb-2">
          {item.character.name}
        </span>
        <span className="text-[#858585] dark:text-[#DEDEDE]">
          {item.role === "Main" ? "کاراکتر اصلی" : "کاراکتر فرعی"}
        </span>
      </Link>
    </div>
  );
}

export default MiniCard