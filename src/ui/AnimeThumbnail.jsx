import { Link } from "react-router-dom";
import truncateText from "../utils/truncateText";
import Spinner from "./Spinner";

//z-80

function AnimeThumbnail({
  anime,
  page,
  setIsOpenSearchModal,
  buttonColor,
  isLoading,
}) {
  // Handling different data structures based on page
  const getValue = (key) => {
    if (page === "recommendations") {
      return anime.entry?.[key] || anime[key];
    }
    if (page === "singleCharacter") {
      return anime.anime?.[key] || anime[key];
    }
    return anime[key];
  };

  const imageUrl =
    getValue("images")?.webp?.large_image_url || getValue("image_url");
  const animeId = getValue("mal_id");
  const animeTitle = getValue("title");
  const titleJapanese = getValue("title_japanese");
  const titleEnglish = getValue("title_english");

  return (
    <div
      key={animeId}
      className="w-full sm:max-w-[420px] h-[95px] flex bg-white opacity-100 z-[10] rounded-3xl overflow-hidden dark:bg-primary-1-dark shadow-md"
    >
      <div className="h-full flex items-center justify-center text-white bg-purple-300 w-[96px]">
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={imageUrl}
            alt={anime.title_english || "image"}
            className="text-xs h-full w-full object-fit"
          />
        )}
      </div>
      <div className="p-4 w-full flex items-center justify-between gap-3 dark:text-white">
        <div>
          {page === "singleCharacter" ? (
            <p>{truncateText(anime.anime.title, 20)}</p>
          ) : (
            <div>
              <p className="dark:text-white text-sm font-semibold truncate line-clamp-2">
                {truncateText(titleJapanese, 10) ||
                  truncateText(animeTitle, 20)}
              </p>
              <p className="text-xs text-slate-400 truncate">
                {truncateText(titleEnglish, 20)}
              </p>
            </div>
          )}
        </div>
        <Link
          to={`/post/${encodeURIComponent(animeTitle)}`}
          state={{
            mal_id: animeId,
          }}
          onClick={() => setIsOpenSearchModal?.(false)}
          className={`${buttonColor} bg-yellow-primary text-white rounded-md text-center p-2 px-4`}
        >
          مشاهده
        </Link>
      </div>
    </div>
  );
}

export default AnimeThumbnail;
