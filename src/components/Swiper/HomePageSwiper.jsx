import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import useFetch from "../../hooks/useFetch";
import "swiper/css/scrollbar";
import Anime from "../Anime";

function HomePageAnimeSwiper({ page, category, title, endpoint }) {
  const navigate = useNavigate();
  const { isLoading, data, error } = useFetch(endpoint);

  const sliderItems = data.slice(0, 6) || [];
  const allItems = data || [];

  const getClasses = () => {
    switch (page) {
      case "home":
        return "flex gap-x-10 overflow-scroll bg-red-600";
      case "posts":
        return "flex flex-col gap-y-7";
    }
  };

  const handleNavigate = () => {
    navigate(`posts/${category}`);
  };

  if (error) return <div className="dark:text-white  text-black/70">محتوا یافت نشد</div>;

  if (isLoading)
    return <div className="text-center py-8 dark:text-white">در حال بارگذاری</div>;

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
      <Swiper slidesPerView={"auto"} spaceBetween={30} className="w-full flex">
        {sliderItems.map((anime) => (
          <SwiperSlide key={anime.mal_id} className="!h-auto !w-auto">
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
