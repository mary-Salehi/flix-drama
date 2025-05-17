import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function VerticalSwiper({ data, slidesPerView, renderItem }) {
  return (
    <div className="flex flex-col mx-auto w-full max-w-[430px] h-[340px]">
      <Swiper
        direction={"vertical"}
        slidesPerView={slidesPerView}
        spaceBetween={0}
        navigation={{
          nextEl: ".down-arrow",
          prevEl: ".up-arrow",
        }}
        modules={[Navigation]}
        className="h-full w-full"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id || index}>{renderItem(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default VerticalSwiper;

