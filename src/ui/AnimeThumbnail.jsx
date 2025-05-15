import { Link } from "react-router-dom";

//z-80

function AnimeThumbnail({ anime, page }) {
  console.log(anime.anime.mal_id);

  return (
    <div
      key={page === "singleCharacter" ? anime.anime.mal_id : anime.mal_id}
      className="w-full sm:max-w-[420px] h-[95px] flex bg-white opacity-100 z-[10] rounded-3xl overflow-hidden dark:bg-primary-1-dark shadow-md"
    >
      <div className="h-full text-center text-white bg-purple-500 w-[96px]">
        <img
          src={
            page === "singleCharacter"
              ? anime.anime.images.webp.large_image_url
              : anime.images?.webp.large_image_url
          }
          alt={anime.title_english || "image"}
          className="text-xs h-full w-full object-fit"
        />
      </div>
      <div className="p-4 w-full flex items-center justify-between gap-3 dark:text-white">
        <div>
          {page === "singleCharacter" ? (
            <p>{anime.anime.title}</p>
          ) : (
            <div>
              <p className="dark:text-white text-sm font-semibold truncate">
                {anime.title_japanese}
              </p>
              <p className="text-xs text-slate-400 truncate">
                {anime.title_english}
              </p>
            </div>
          )}
        </div>

        <Link
          to={`/post/${encodeURIComponent(
            page === "singleCharacter" ? anime.anime.title : anime.title
          )}`}
          state={{
            mal_id:
              page === "singleCharacter" ? anime.anime.mal_id : anime.mal_id,
          }}
          // to={{
          //   pathname: `/post/${encodeURIComponent(
          //     page === "singleCharacter" ? anime.anime.title : anime.title
          //   )}`,
          //   state: {
          //     mal_id:
          //       page === "singleCharacter" ? anime.anime.mal_id : anime.mal_id,
          //   },
          // }}
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
