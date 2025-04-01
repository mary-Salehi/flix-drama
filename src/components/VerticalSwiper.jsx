import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function VerticalSwiper() {
  return (
    <div className="flex flex-col mx-auto w-[430px] h-[380px]">
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

      <Swiper
        direction={"vertical"}
        slidesPerView={3}
        spaceBetween={12}
        navigation={{
          nextEl: ".down-arrow",
          prevEl: ".up-arrow",
        }}
        modules={[Navigation]}
        className="h-full w-full"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item}>
            <div className="flex items-center justify-center !h-[95px] flex-grow-0 rounded-[20px] bg-[#FFFFFF] dark:bg-[#24152E] mx-4 border border-gray-100 dark:border-0 overflow-hidden">
              <img className="h-full w-[90px] object-cover" src="https://uploadcenter.flix3drama.com/images/posters/ATDmXuiTfh.webp" alt="again 18" />
              <div className="flex justify-between items-center sm:text-sm w-full gap-1 px-5">
                <div>
                  <div className="font-bold dark:text-white">دوباره هجده سالگی</div>
                  <div className="font-medium text-[#9C9C9C]">Again 18</div>
                </div>
                <Link className="font-semibold px-3 py-2 bg-[#7C03D0] rounded-lg text-white">مشاهده</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VerticalSwiper;
