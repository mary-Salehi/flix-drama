import React from "react";
import { useState } from "react";
import Dramas from "../components/Dramas";
import { Link } from "react-router-dom";

function Posts() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-start">
      <div className=" lg:bg-white lg:dark:bg-primary-2-dark rounded-[40px] self-stretch flex flex-col justify-center items-center lg:justify-start gap-x-6">
        <div>
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="lg:hidden bg-white dark:bg-primary-2-dark dark:text-white font-bold px-10 py-6 rounded-xl mb-5 lg:mb-0 cursor-pointer"
          >
            {isFiltersOpen ? "مخفی کردن  فیلتر ها" : "نشان دادن  فیلتر ها"}
          </button>
        </div>
        <div
          className={`${isFiltersOpen === true ? "block" : "hidden"} lg:block`}
        >
          <div className="w-[320px] lg:w-[240px] px-3 pt-6 pb-8 mb-4 lg:mb-0 lg:h-full bg-white dark:bg-primary-2-dark rounded-[40px]">
            <div className="h-1 rounded-2xl w-1/3 bg-[#dedede] mb-5 mx-auto"></div>
            <form>
              <div className="flex flex-col gap-y-5 mb-8">
                <span className="font-bold dark:text-white self-center lg:text-sm">
                  دسته بندی پست ها
                </span>
                <div className="flex flex-col gap-5 pr-4">
                  <div className="">
                    <label
                      htmlFor="chinese-series"
                      className="text-[#363636] dark:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        id="chinese-series"
                        type="checkbox"
                        className="peer hidden"
                      />
                      <div className="w-3 h-3 peer-checked:bg-[#03D0D0] rounded bg-[#EBEBEB]"></div>
                      <span className="peer-checked:font-black peer-checked:text-black dark:peer-checked:text-white">
                        سریال چینی
                      </span>
                    </label>
                  </div>
                  <div className="">
                    <label
                      htmlFor="chines-series"
                      className="text-[#363636] dark:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        id="chines-series"
                        type="checkbox"
                        className="peer hidden"
                      />
                      <div className="w-3 h-3 peer-checked:bg-[#03D0D0] rounded bg-[#EBEBEB]"></div>
                      <span className="peer-checked:font-black peer-checked:text-black dark:peer-checked:text-white">
                        سریال چینی
                      </span>
                    </label>
                  </div>
                  <div className="">
                    <label
                      htmlFor="japanese-series"
                      className="text-[#363636] dark:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        id="japanese-series"
                        type="radio"
                        className="peer hidden"
                      />
                      <div className="w-3 h-3 peer-checked:bg-[#03D0D0] rounded bg-[#EBEBEB]"></div>
                      <span className="peer-checked:font-black peer-checked:text-black dark:peer-checked:text-white">
                        سریال ژاپنی
                      </span>
                    </label>
                  </div>
                  <div className="">
                    <label
                      htmlFor="thi-series"
                      className="text-[#363636] dark:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        id="thi-series"
                        type="radio"
                        className="peer hidden"
                      />
                      <div className="w-3 h-3 peer-checked:bg-[#03D0D0] rounded bg-[#EBEBEB]"></div>
                      <span className="peer-checked:font-black peer-checked:text-black dark:peer-checked:text-white">
                        سریال تایلندی
                      </span>
                    </label>
                  </div>
                  <div className="">
                    <label
                      htmlFor="korean-series"
                      className="text-[#363636] dark:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        id="korean-series"
                        type="radio"
                        className="peer hidden"
                      />
                      <div className="w-3 h-3 peer-checked:bg-[#03D0D0] rounded bg-[#EBEBEB]"></div>
                      <span className="peer-checked:font-black peer-checked:text-black dark:peer-checked:text-white">
                        سریال کره‌ای
                      </span>
                    </label>
                  </div>
                  <div className="">
                    <label
                      htmlFor="korean-movie"
                      className="text-[#363636] dark:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        id="korean-movie"
                        type="radio"
                        className="peer hidden"
                      />
                      <div className="w-3 h-3 peer-checked:bg-[#03D0D0] rounded bg-[#EBEBEB]"></div>
                      <span className="peer-checked:font-black peer-checked:text-black dark:peer-checked:text-white">
                        فیلم کره‌ای
                      </span>
                    </label>
                  </div>
                  <div className="">
                    <label
                      htmlFor="korean-show"
                      className="text-[#363636] dark:text-white text-sm font-semibold flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        id="korean-show"
                        type="radio"
                        className="peer hidden"
                      />
                      <div className="w-3 h-3 peer-checked:bg-[#03D0D0] rounded bg-[#EBEBEB]"></div>
                      <span className="peer-checked:font-black peer-checked:text-black dark:peer-checked:text-white">
                        برنامه کره‌ای
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-8 mb-8">
                <span className="font-bold dark:text-white self-center lg:text-sm">
                  انتخاب ژانر
                </span>
                <div className="flex flex-wrap items-center justify-center gap-y-5 gap-x-2">
                  <div>
                    <input
                      type="checkbox"
                      id="history"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="history"
                      className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                    >
                      <span className=" text-sm font-semibold">تاریخی</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="romance"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="romance"
                      className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                    >
                      <span className=" text-sm font-semibold">عاشقانه</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="fantasy"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="fantasy"
                      className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                    >
                      <span className=" text-sm font-semibold">فانتزی</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="drama"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="drama"
                      className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                    >
                      <span className=" text-sm font-semibold">درام</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="comedy"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="comedy"
                      className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                    >
                      <span className=" text-sm font-semibold">کمدی</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="politics"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="politics"
                      className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                    >
                      <span className=" text-sm font-semibold">سیاسی</span>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="action"
                      className="peer hidden"
                    />
                    <label
                      htmlFor="action"
                      className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                    >
                      <span className=" text-sm font-semibold">اکشن</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-5">
                <span className="font-bold dark:text-white self-center lg:text-sm">
                  سال انتشار
                </span>
                <div>
                  <label
                    htmlFor="year-range-slider"
                    className="block text-sm font-medium"
                  ></label>
                  <input
                    dir="ltr"
                    type="range"
                    id="year-range-slider"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="w-full h-2 cursor-pointer appearance-auto accent-purple-btn"
                  />
                  <div>
                    current value : <span>{sliderValue}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-y-5">
                <span className="font-bold dark:text-white self-center lg:text-sm">
                  امتیاز
                </span>
                <div>
                  <label
                    htmlFor="year-range-slider"
                    className="block text-sm font-medium"
                  ></label>
                  <input
                    dir="ltr"
                    type="range"
                    id="year-range-slider"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="w-full h-2 cursor-pointer appearance-auto accent-purple-btn"
                  />
                  <div>
                    current value : <span>{sliderValue}</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full p-4">
        <div className="w-full flex justify-center gap-2 mb-5">
          <Link className="w-full">
            <div className="h-[136px] w-full rounded-3xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src="https://flix3drama.com/_app/immutable/assets/archive_banner1-62555a79.webp"
                alt=""
              />
              <div className="w-full h-full absolute top-0 opacity-80 bg-gradient-to-r from-purple-800 to-blue-400"></div>
              <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-full">
                <span className="inline-block w-1/2 text-center text-white font-black text-wrap text-sm">
                  جدیدترین سریال های کره ای
                </span>
              </div>
            </div>
          </Link>

          <Link className="w-full">
            <div className="h-[136px] w-full rounded-3xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src="https://flix3drama.com/_app/immutable/assets/archive_banner2-1dd74ced.webp"
                alt=""
              />
              <div className="w-full h-full absolute top-0 opacity-80 bg-gradient-to-r from-orange-500 to-amber-300"></div>
              <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-full">
                <span className="inline-block w-1/2 text-center text-white font-black text-wrap text-sm">
                  جدیدترین سریال های چینی
                </span>
              </div>
            </div>
          </Link>

          <Link className="w-full">
            <div className="h-[136px] w-full rounded-3xl overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src="https://flix3drama.com/_app/immutable/assets/archive_banner3-5f9c70a6.webp"
                alt=""
              />
              <div className="w-full h-full absolute top-0 opacity-80 bg-gradient-to-r from-pink-600 to-purple-600"></div>
              <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-full">
                <span className="inline-block w-1/2 text-center text-white font-black text-wrap text-sm">
                  جدیدترین فیلم های کره ای
                </span>
              </div>
            </div>
          </Link>
        </div>
        <div className="px-5">
          <Dramas page="posts" />
        </div>
      </div>
    </div>
  );
}

export default Posts;

// const DualThumbRangeSlider = () => {
//   const [minValue, setMinValue] = useState(0);
//   const [maxValue, setMaxValue] = useState(100);

//   const handleMinChange = (event) => {
//     const newMinValue = Math.min(Number(event.target.value), maxValue - 1);
//     setMinValue(newMinValue);
//   };

//   const handleMaxChange = (event) => {
//     const newMaxValue = Math.max(Number(event.target.value), minValue + 1);
//     setMaxValue(newMaxValue);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto">
//       {/* Slider Label */}
//       <label
//         htmlFor="dual-thumb-slider"
//         className="block text-sm font-medium text-gray-700"
//       >
//         Dual-Thumb Range Slider
//       </label>

//       {/* Slider Container */}
//       <div className="relative">
//         {/* Track */}
//         <div className="absolute h-2 bg-gray-200 rounded-full w-full"></div>

//         {/* Active Range */}
//         <div
//           className="absolute h-2 bg-blue-500 rounded-full"
//           style={{
//             left: `${minValue}%`,
//             width: `${maxValue - minValue}%`,
//           }}
//         ></div>

//         {/* Min Thumb */}
//         <input
//           type="range"
//           min="1960"
//           max="2025"
//           value={minValue}
//           onChange={handleMinChange}
//           className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
//           style={{
//             zIndex: minValue > maxValue - 10 ? 10 : 5, // Ensure min thumb is above max thumb when close
//           }}
//         />

//         {/* Max Thumb */}
//         <input
//           type="range"
//           min="0"
//           max="100"
//           value={maxValue}
//           onChange={handleMaxChange}
//           className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
//           style={{
//             zIndex: 5,
//           }}
//         />
//       </div>

//       {/* Display Values */}
//       <div className="mt-4 flex justify-between text-sm text-gray-600">
//         <span>Min: {minValue}</span>
//         <span>Max: {maxValue}</span>
//       </div>
//     </div>
//   );
// };
