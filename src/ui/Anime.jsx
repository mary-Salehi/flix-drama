import React from "react";
import { Link } from "react-router-dom";
import truncateText from "../utils/truncateText";

function Anime({ anime, page, isLoading }) {
  console.log("anime data", anime);
  const genres = anime.genres.map((g) => g.name).join(",");
  console.log(genres);

  return (
    <div
      className={`h-full flex flex-col sm:flex-row justify-between p-3 bg-white dark:bg-[#24152E] rounded-3xl ${
        page === "posts" ? "w-full gap-x-8" : "w-[330px] sm:w-[420px]"
      } `}
    >
      <div className="flex items-center gap-x-4 mb-2 sm:mb-0 w-full">
        <div className="!w-[100px] h-full">
          {isLoading ? (
            <div className="w-full h-full rounded-xl flex items-center justify-center bg-purple-950 text-white text-xs">
              در حال بارگذاری
            </div>
          ) : (
            <img
              className="rounded-xl h-full"
              src={anime.images.optimized_url}
              alt="drama-image"
            />
          )}
        </div>
        <div
          className={`flex flex-col gap-y-3  text-xs font-semibold ${
            page === "posts" ? "w-full" : ""
          }`}
        >
          <div
            className={`min-h-[56px] min-w-0 ${
              page === "home" ? " max-w-[170px]" : ""
            } flex flex-col justify-center`}
          >
            <h3
              className={`text-lg font-bold dark:text-white text-wrap break-words min-w-0 ${
                page === "home" ? "truncate line-clamp-2" : ""
              }`}
            >
              {anime.title_english || anime.title}
            </h3>
          </div>
          <AnimeDetail anime={anime} page={page}/>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse items-center sm:items-end justify-between min-w-fit">
        <Link
          to={`/post/${encodeURIComponent(anime.title)}`}
          state={{ mal_id: anime.mal_id }}
          className="px-5 py-3 text-xs font-bold bg-[#F9F0FF] dark:bg-[#100617] dark:text-white rounded-xl cursor-pointer"
        >
          تماشاو دانلود
        </Link>
        <span
          className={`rounded-xl w-[45px] h-[45px] flex justify-center items-center bg-yellow-primary font-bold ${
            page === "home" ? "text-white" : "text-black"
          }`}
        >
          {anime.score || anime.rank || "-"}
        </span>
      </div>
    </div>
  );
}

export default Anime;

function AnimeDetail({ anime, page, truncateLength = 135 }) {
  const genresText =
    anime.genres?.map((g) => g.name).join(" , ") ?? "مشخص نیست";

  const DetailsPostPage = [
    { "قسمت ها": anime.episodes || 1 },
    { ژانرها: genresText },
    { سال: anime.year || "مشخص نیست" },
    { "خلاصه داستان": truncateText(anime.synopsis, truncateLength) },
  ];

  const DetailsHomePage = [
    { "قسمت ها": anime.episodes || 1 },
    { "رده سنی": anime.rating || "_" },
  ];

  const details = page === "home" ? DetailsHomePage : DetailsPostPage;
  return (
    <div className="space-y-3"
    >
      <div className="w-full px-2 py-[6px] inline-block  dark:text-[#00FFFF] text-[#057E7E] bg-[#d6f8f2] dark:bg-[#1a2b2b] rounded-lg flex-1">
        زیرنویس قسمت {anime.latestSubtitle} اضافه شد
      </div>
      <div className={ `flex flex-col gap-3${
        page === "posts"
          ? "flex md:flex-row justify-between gap-3 flex-wrap"
          : ""
      }`}>
        {details.map((item, index) => {
        const [key, value] = Object.entries(item)[0];
        return (
          <div key={index} className="">
            <span className="text-[#777777] dark:text-white">{key} :</span>
            <span className="dark:text-white"> {value}</span>
          </div>
        );
      })}
      </div>
    </div>
  );
}
