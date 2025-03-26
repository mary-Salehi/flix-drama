import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function HeaderSwiper() {
  const slides = [
    {
      id: 1,
      image:
        "https://uploadcenter.flix3drama.com/images/slides/KT9hJmAAwn.webp",
      title: "دشمن عزیز من",
      subtitle: "My Dearest Nemesis",
    },
    {
      id: 2,
      image:
        "https://uploadcenter.flix3drama.com/images/slides/bqENS5KrVQ.webp",
      title: "وقتی زندگی به تو نارنگی می‌دهد",
      subtitle: "When Life Gives You Tangarine",
    },
    {
      id: 3,
      image:
        "https://uploadcenter.flix3drama.com/images/slides/Km3memqLSR.webp",
      title: "دبیرستان مخفی",
      subtitle: "Undercover Highschool",
    },
    {
      id: 4,
      image:
        "https://uploadcenter.flix3drama.com/images/slides/nQs5X8gaYi.webp",
      title: "قلب‌های مدفون",
      subtitle: "Buried Hearts",
    },
  ];

  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="w-full h-[240px] relative rounded-4xl overflow-hidden"
        dir="rtl"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                className="h-full w-full object-cover"
                src={slide.image}
                alt={slide.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-purple-900 opacity-60"></div>
              <div className="absolute top-10 right-10 space-y-6 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.1em]">
                  {slide.title}
                </h2>
                <p className="text-xl sm:text-lg">{slide.subtitle}</p>
                <button className="bg-white rounded-xl px-4 py-2 hover:bg-opacity-90 transition">
                  <a className="text-[#451169] font-semibold" href="#">
                    دانلود و پخش آنلاین
                  </a>
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
