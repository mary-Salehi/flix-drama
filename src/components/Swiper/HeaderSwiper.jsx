import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import useFetch, { API_BASE } from "../../hooks/useFetch";

function HeaderSwiper() {
  
  const {isLoading, data , error} = useFetch(`${API_BASE}/anime`,'')
  console.log('loading',isLoading);
  

  return (
    <div className="">
      {isLoading && <div className="w-full min-h-full flex justify-center items-center pt-24 text-black/40 dark:text-white text-3xl font-bold">در حال بارگذاری...</div>}
      {error && <div className="w-full min-h-full flex justify-center items-center pt-24 text-black/40 dark:text-white text-2xl font-bold">خطای بارگزاری اطلاعات</div>}
      <Swiper
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        loop={false}
        className="w-full h-[240px] relative rounded-4xl overflow-hidden"
        dir="rtl"
      >
        {data.slice(8,12).map((slide) => (
          <SwiperSlide key={slide.mal_id}>
            <div className="relative h-full w-full">
              <img
                className="h-full w-full object-cover bg-gradient-to-r from-purple-400 to-purple-700"
                src={slide.images.optimized_url}
                alt={slide.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-purple-900 opacity-60"></div>
              <div className="absolute top-10 right-10 space-y-6 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold ">
                  {slide.title}
                </h2>
                <p className="text-xl sm:text-lg">{slide.title_japanese}</p>
                <button className="bg-white rounded-xl px-4 py-2 hover:bg-opacity-90 transition">
                  <Link to={`/post/${encodeURIComponent(slide.title)}`} state={{mal_id: slide.mal_id}} className="text-[#451169] font-semibold" href="#">
                    دانلود و پخش آنلاین
                  </Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeaderSwiper;
