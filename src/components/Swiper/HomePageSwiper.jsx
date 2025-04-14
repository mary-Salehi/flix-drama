import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import "swiper/css/scrollbar";

function HomePageAnimeSwiper({ page, category, title, endpoint }) {

  
  const navigate = useNavigate();
  const { isLoading, data, error } = useFetch(endpoint);

  const sliderItems = data.slice(0, 6) || [];
  const allItems = data || [];

  console.log(data);
  

  const getClasses = () => {
    switch (page) {
      case "home":
        return "flex gap-x-10 overflow-scroll bg-red-600";
      case "posts":
        return "flex flex-col gap-y-7";
    }
  };
  
  const handleNavigate = () => {
    navigate(`posts/${category}`)
  }

  if (error) return <div className="dark:text-white">{error.message}</div>;

  if (isLoading)
    return <div className="text-center py-8 dark:text-white">Loading...</div>;

  return (
    <div className={`${getClasses()} flex flex-col`}>
      <div className="flex items-center justify-between mb-10">
        <h2 className="font-bold text-lg dark:text-white">{title}</h2>
        <button
          className="text-sm text-[#5F5F5F] dark:text-white font-semibold cursor-pointer"
          // to={`posts/${category}`}
          state={{ items: allItems, title }}
          onClick={handleNavigate}
        >
          مشاهده
        </button>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        className="w-full flex"
      >
        {sliderItems.map((anime) => (
          <SwiperSlide
            key={anime.mal_id}
            className="!h-auto !w-auto"
          >
            <div className="h-full">
              <Anime anime={anime} page="home" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomePageAnimeSwiper;

export function Anime({ anime, page, isLoading }) {
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
              loading image
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
          <div className={`min-h-[56px] min-w-0 ${page === 'home' ? ' max-w-[170px]' : ''} flex flex-col justify-center`}>
            <h3 className={`text-lg font-bold dark:text-white text-wrap break-words min-w-0 ${page === 'home' ? 'truncate line-clamp-2' : ''}`}>
              {anime.title}
            </h3>
          </div>
          <div className="w-full px-2 py-[6px] inline-block  dark:text-[#00FFFF] text-[#057E7E] bg-[#d6f8f2] dark:bg-[#1a2b2b] rounded-lg">
            زیرنویس قسمت {anime.latestSubtitle} اضافه شد
          </div>
          <div className="flex justify-between">
            <div>
              <span className="text-[#777777] dark:text-white">
                تاریخ بروزرسانی :
              </span>
              <span className="dark:text-white"> {anime.lastUpdate}</span>
            </div>
            <div className={`${page === "home" ? "hidden" : "block"}`}>
              <span className="text-[#777777] dark:text-white">
                آخرین قسمت :
              </span>
              <span className="dark:text-white"> {anime.latestEpisode}</span>
            </div>
          </div>
          <div className={`${page === "posts" ? "hidden" : "block"}`}>
            <span className="text-[#777777] dark:text-white">آخرین قسمت :</span>
            <span className="dark:text-white"> {anime.latestEpisode}</span>
          </div>
          <div className={`${page === "home" ? "hidden" : "block"}`}>
            <span className="text-[#777777] dark:text-white">آخرین قسمت :</span>
            <span className="dark:text-white"> {anime.latestEpisode}</span>
          </div>
          <div className={`${page === "home" ? "hidden" : "block"}`}>
            <span className="text-[#777777] dark:text-white">آخرین قسمت :</span>
            <span className="dark:text-white"> {anime.summary}</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse items-center sm:items-end justify-between min-w-fit">
        <Link
          to={`${location.pathname === '/'? 'posts/post' : 'post'}`}
          className="px-5 py-3 text-xs font-bold bg-[#F9F0FF] dark:bg-[#100617] dark:text-white rounded-xl cursor-pointer"
        >
          تماشاو دانلود
        </Link>
        <span
          className={`rounded-xl w-[45px] h-[45px] flex justify-center items-center bg-yellow-primary font-bold ${
            page === "home" ? "text-white" : "text-black"
          }`}
        >
          {anime.score || anime.rank}
        </span>
      </div>
    </div>
  );
}
