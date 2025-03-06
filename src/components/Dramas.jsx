import { dramas } from "../data";
function Dramas() {
  return (
    <div className="flex gap-x-10 overflow-scroll">
      {dramas.map((drama) => {
        return <Drama drama={drama} key={drama.id} />;
      })}
    </div>
  );
}

export default Dramas;

function Drama({ drama }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between p-3 shrink-0 w-[330px] sm:w-[420px] bg-white dark:bg-[#24152E] rounded-3xl">
      <div className="flex items-center gap-x-4 mb-2 sm:mb-0">
        <div className="w-[94px] h-[138px]">
          <img
            className="rounded-xl h-full"
            src={drama.imageUrl}
            alt="drama-image"
          />
        </div>
        <div className="space-y-3 text-xs font-semibold">
          <h3 className="text-lg font-bold dark:text-white">{drama.name}</h3>
          <div className="px-2 py-[6px] inline-block  dark:text-[#00FFFF] text-[#057E7E] bg-[#d6f8f2] dark:bg-[#1a2b2b] rounded-lg">
            زیرنویس قسمت {drama.latestSubtitle} اضافه شد
          </div>
          <div>
            <span className="text-[#777777] dark:text-white">
              تاریخ بروزرسانی :
            </span>
            <span className="dark:text-white"> {drama.lastUpdate}</span>
          </div>
          <div>
            <span className="text-[#777777] dark:text-white">آخرین قسمت :</span>
            <span className="dark:text-white"> {drama.latestEpisode}</span>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-col-reverse items-center sm:items-end justify-between">
        <button className="px-5 py-3 text-xs font-bold bg-[#F9F0FF] dark:bg-[#100617] dark:text-white rounded-xl cursor-pointer">
          تماشاو دانلود
        </button>
        <span className="rounded-xl w-[45px] h-[45px] flex justify-center items-center bg-yellow-primary font-bold text-white">
          {drama.imdb}
        </span>
      </div>
    </div>
  );
}
