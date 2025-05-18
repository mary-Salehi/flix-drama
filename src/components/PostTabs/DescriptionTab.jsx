import React from "react";
import VerticalSwiper from "../Swiper/VerticalSwiper";
import AnimeThumbnail from "../../ui/AnimeThumbnail";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Loader from "../../ui/Loader";

function DescriptionTab() {
  const location = useLocation();
  const { data, error, isLoading } = useFetch(
    `${API_BASE}/anime/${location.state.mal_id}/recommendations`
  );
  console.log(data);
  const animeRecomendations = data.slice(0, 15);
  console.log(animeRecomendations);

  return (
    <div className="flex flex-col lg:flex-row gap-5 px-6 py-10">
      <div className="">
        <p className="font-extrabold mb-8 dark:text-white">توضیحات انیمه</p>
        <div className="px-7 pt-7 pb-16 border border-[#e9e5e5] dark:border-[#24152E] rounded-3xl dark:text-white">
          کیم یو هان (Kang Ha Neul) کارآموز قضایی است که وارد شدنش به یک پرونده،
          منجر به زندانی شدن او می گردد و …
        </div>
      </div>
      <div className="flex flex-col mx-auto w-full max-w-[430px] h-[380px]">
        <div className="flex justify-between gap-4 mb-4 dark:text-white">
          <div className="font-extrabold">پست های مشابه</div>
          <div className="flex gap-1">
            <button className="down-arrow bg-[#FF049B] cursor-pointer p-1 flex justify-center items-center rounded-lg transition-colors">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="up-arrow bg-[#02BDA0] cursor-pointer p-1 rounded-lg flex justify-center items-center transition-colors">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        {animeRecomendations.length === 0 && (
          <div className="text-lg font-semibold w-full text-gray-600 dark:text-gray-300 text-center rounded-md py-8 mt-10">متاسفانه انیمه ای یافت نشد :(</div>
        )}
        {isLoading && <Loader text="در حال بارگذاری محتوا" />}
        {!error && !isLoading && (
          <VerticalSwiper
            slidesPerView={3}
            data={animeRecomendations}
            renderItem={(animeRecomendations) => (
              <AnimeThumbnail
                isLoading={isLoading}
                anime={animeRecomendations}
                page="recommendations"
                buttonColor="bg-[#7C03D0]"
              />
            )}
          />
        )}
      </div>
    </div>
  );
}

export default DescriptionTab;
