
import FavoriteButton from "../../ui/FavoriteButton";
import NotificationButton from "../../ui/NotificationButton";
import TitleWithActions from "../../ui/TitleWithActions";

function PostDetails({ data, isLoading }) {
  if (isLoading)
    return <div className=" p-4 text-black">loading data</div>;
  return (
    <div className="w-full flex flex-col gap-8 lg:pt-10">
      <TitleWithActions title={data?.title_japanese} subTitle={data?.title_english}>
        <NotificationButton/>
        <FavoriteButton/>
      </TitleWithActions>
      {/* brod */}
      <div className="text-xs font-semibold md:text-sm lg:text-base flex justify-between">
        <div className=" flex gap-2 md:gap-5 lg:gap-8">
          <div className="flex flex-col justify-between items-center gap-y-5">
            <span className="font-bold text-center text-[#787878] dark:text-[#C7C7C7]">
              سال تولید
            </span>
            <span className="font-bold text-center dark:text-white">
              {data?.aired?.prop?.from?.year || "__"}
            </span>
          </div>
          <div className="flex flex-col justify-between items-center gap-y-5">
            <span className="font-bold text-center text-[#787878] dark:text-[#C7C7C7]">
              تعداد قسمت
            </span>
            <span className="font-bold text-center dark:text-white">
              {data?.episodes || "__"}
            </span>
          </div>
          <div className="flex flex-col justify-between items-center gap-y-5">
            <span className="font-bold text-center text-[#787878] dark:text-[#C7C7C7]">
              امتیاز
            </span>
            <span className="font-bold text-center dark:text-white">
              {data?.score || "__"}
            </span>
          </div>
          <div className="flex flex-col justify-between items-center gap-y-5">
            <span className="font-bold text-center text-[#787878] dark:text-[#C7C7C7]">
              تعداد رای دهندگان
            </span>
            <span className="font-bold text-center dark:text-white">
              {data?.scored_by || "__"}
            </span>
          </div>
        </div>
        <div className="space-y-5">
          <p className="font-bold text-center text-[#787878] dark:text-[#C7C7C7]">
            روزهای پخش
          </p>
          <div className="font-bold text-center dark:text-white">
            {data?.broadcast?.day || "نامشخص"}{" "}
            {data?.broadcast?.time || "نامشخص"}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 justify-between items-start">
        <div className="flex items-center gap-x-3">
          <div className="font-bold text-[#787878] dark:text-[#C7C7C7] ml-2">
            ژانر
          </div>
          {data?.genres?.map((genre) => (
            <div key={genre.name} className="bg-[#7C03D0] text-sm text-center text-white px-3 py-2 rounded-md font-bold">
              {genre.name}
            </div>
          ))}
        </div>

        <div className="text-sm  flex flex-col gap-2">
          <div className="px-4 py-3 rounded-lg text-[#047F87] bg-[#00ADB8]/10 font-semibold">
            زیرنویس فارسی قسمت 8 اضافه شد
          </div>
          <div className="px-4 py-3 rounded-lg text-[#E94878] bg-[#E94878]/10 font-bold">
            قسمت 8 اضافه شد
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
