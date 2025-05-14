import React from "react";
import { Link } from "react-router-dom";

function AnimeThumbnail({anime}) {
  return (
    <div
      key={anime.mal_id}
      className="w-full sm:max-w-[420px] h-[95px] flex bg-white opacity-100 z-[80] rounded-3xl overflow-hidden dark:bg-primary-1-dark shadow-md"
    >
      <div className="h-full text-center text-white bg-purple-500 w-[96px]">
        <img
          src={anime.images?.webp.large_image_url}
          alt={anime.title_english}
          className="text-xs h-full w-full object-fit"
        />
      </div>
      <div className="p-4 w-full flex items-center justify-between gap-3">
        <div>
          <p className="dark:text-white text-sm font-semibold">
            {anime.title_japanese}
          </p>
          <p className="text-xs text-slate-400">{anime.title_english}</p>
        </div>
        <Link
          to={`/post/${encodeURIComponent(anime.title)}`}
          state={{ mal_id: anime.mal_id }}
          onClick={() => setIsOpenSearchModal(false)}
          className="bg-yellow-primary text-white rounded-md text-center p-2 px-4"
        >
          مشاهده
        </Link>
      </div>
    </div>
  );
}

export default AnimeThumbnail;
