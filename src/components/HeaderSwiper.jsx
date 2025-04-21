import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import useFetch, { API_BASE } from "../hooks/useFetch";
import { Link } from "react-router-dom";

function HeaderSwiper() {
  // const slides = [
  //   {
  //     id: 1,
  //     image:
  //       "https://uploadcenter.flix3drama.com/images/slides/KT9hJmAAwn.webp",
  //     title: "دشمن عزیز من",
  //     subtitle: "My Dearest Nemesis",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://uploadcenter.flix3drama.com/images/slides/bqENS5KrVQ.webp",
  //     title: "وقتی زندگی به تو نارنگی می‌دهد",
  //     subtitle: "When Life Gives You Tangarine",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://uploadcenter.flix3drama.com/images/slides/Km3memqLSR.webp",
  //     title: "دبیرستان مخفی",
  //     subtitle: "Undercover Highschool",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://uploadcenter.flix3drama.com/images/slides/nQs5X8gaYi.webp",
  //     title: "قلب‌های مدفون",
  //     subtitle: "Buried Hearts",
  //   },
  // ];
  
  const {isLoading, data} = useFetch(`${API_BASE}/anime`,'')

  return (
    <div>
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
            {isLoading && <div className="w-full h-full flex items-center justify-center dark:text-white text-3xl font-bold">در حال بارگزاری</div>}
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
