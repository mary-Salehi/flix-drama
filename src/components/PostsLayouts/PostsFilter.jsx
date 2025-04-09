import { useState } from "react";


function PostsFilter() {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
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
                  <input type="checkbox" id="history" className="peer hidden" />
                  <label
                    htmlFor="history"
                    className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                  >
                    <span className=" text-sm font-semibold">تاریخی</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="romance" className="peer hidden" />
                  <label
                    htmlFor="romance"
                    className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                  >
                    <span className=" text-sm font-semibold">عاشقانه</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="fantasy" className="peer hidden" />
                  <label
                    htmlFor="fantasy"
                    className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                  >
                    <span className=" text-sm font-semibold">فانتزی</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="drama" className="peer hidden" />
                  <label
                    htmlFor="drama"
                    className="px-4 py-2 bg-[#EBEBEB] dark:bg-primary-1-dark rounded-xl dark:text-white peer-checked:bg-purple-btn peer-checked:text-white cursor-pointer"
                  >
                    <span className=" text-sm font-semibold">درام</span>
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="comedy" className="peer hidden" />
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
                  <input type="checkbox" id="action" className="peer hidden" />
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
  );
}

export default PostsFilter;
