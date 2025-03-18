import { dramas } from "../data";
function Dramas({ page }) {
  const getClasses = () => {
    switch (page) {
      case "home":
        return "flex gap-x-10 overflow-scroll";
      case "posts":
        return "flex flex-col gap-y-7";
    }
  };
  return (
    <div className={`${getClasses()}`}>
      {dramas.map((drama) => {
        return <Drama drama={drama} key={drama.id} page={page} />;
      })}
    </div>
  );
}

export default Dramas;

export function Drama({ drama, page }) {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between p-3 shrink-0  bg-white dark:bg-[#24152E] rounded-3xl ${
        page === "posts" ? "w-full gap-x-8" : "w-[330px] sm:w-[420px]"
      } `}
    >
      <div className="flex items-center gap-x-4 mb-2 sm:mb-0 w-full">
        <div className="w-[94px] h-[138px]">
          <img
            className="rounded-xl h-full"
            src={drama.imageUrl}
            alt="drama-image"
          />
        </div>
        <div
          className={`space-y-3 text-xs font-semibold ${
            page === "posts" ? "w-full" : ""
          }`}
        >
          <h3 className="text-lg font-bold dark:text-white">{drama.name}</h3>
          <div className="w-full px-2 py-[6px] inline-block  dark:text-[#00FFFF] text-[#057E7E] bg-[#d6f8f2] dark:bg-[#1a2b2b] rounded-lg">
            زیرنویس قسمت {drama.latestSubtitle} اضافه شد
          </div>
          <div className="flex justify-between">
            <div>
              <span className="text-[#777777] dark:text-white">
                تاریخ بروزرسانی :
              </span>
              <span className="dark:text-white"> {drama.lastUpdate}</span>
            </div>
            <div className={`${page === "home" ? "hidden" : "block"}`}>
              <span className="text-[#777777] dark:text-white">
                آخرین قسمت :
              </span>
              <span className="dark:text-white"> {drama.latestEpisode}</span>
            </div>
          </div>
          <div className={`${page === "posts" ? "hidden" : "block"}`}>
            <span className="text-[#777777] dark:text-white">آخرین قسمت :</span>
            <span className="dark:text-white"> {drama.latestEpisode}</span>
          </div>
          <div className={`${page === "home" ? "hidden" : "block"}`}>
            <span className="text-[#777777] dark:text-white">آخرین قسمت :</span>
            <span className="dark:text-white"> {drama.latestEpisode}</span>
          </div>
          <div className={`${page === "home" ? "hidden" : "block"}`}>
          <span className="text-[#777777] dark:text-white">آخرین قسمت :</span>
          <span className="dark:text-white"> {drama.summary}</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse items-center sm:items-end justify-between min-w-fit">
        <button className="px-5 py-3 text-xs font-bold bg-[#F9F0FF] dark:bg-[#100617] dark:text-white rounded-xl cursor-pointer">
          تماشاو دانلود
        </button>
        <span className={`rounded-xl w-[45px] h-[45px] flex justify-center items-center bg-yellow-primary font-bold ${page === 'home' ? 'text-white' : 'text-black'}`}>
          {drama.imdb}
        </span>
      </div>
    </div>
  );
}
