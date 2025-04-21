import React from "react";

function PostDetails({ data, isLoading }) {
  if (isLoading)
    return <div className="bg-red-300 p-4 text-black">loading data</div>;
  return (
    <div className="w-full flex flex-col gap-8 lg:pt-10">
      <div className="flex items-center justify-between">
        <div>
          <span className="md:text-2xl text-xl font-bold dark:text-white">
            {data?.title_japanese}
          </span>
          <p className="text-[#9E9E9E] text-lg">{data?.title_english}</p>
        </div>
        <div className="flex gap-2">
          <button className="cursor-pointer">
            <span className="w-[38px] h-[38px] rounded-lg flex justify-center items-center  bg-[#EFD8FF] dark:bg-[#260A3A]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1902 14.06L19.0602 12.18C18.8102 11.77 18.5902 10.98 18.5902 10.5V8.63005C18.5902 5.00005 15.6402 2.05005 12.0202 2.05005C8.3902 2.06005 5.4402 5.00005 5.4402 8.63005V10.49C5.4402 10.97 5.2202 11.76 4.9802 12.17L3.8502 14.05C3.4202 14.78 3.3202 15.61 3.5902 16.33C3.8602 17.06 4.4702 17.64 5.2702 17.9C6.3502 18.26 7.4402 18.52 8.5502 18.71C8.6602 18.73 8.7702 18.74 8.8802 18.76C9.0202 18.7801 9.1702 18.8 9.3202 18.82C9.5802 18.8601 9.8402 18.89 10.1102 18.91C10.7402 18.97 11.3802 19 12.0202 19C12.6502 19 13.2802 18.97 13.9002 18.91C14.1302 18.89 14.3602 18.8701 14.5802 18.84C14.7602 18.82 14.9402 18.8001 15.1202 18.7701C15.2302 18.76 15.3402 18.74 15.4502 18.72C16.5702 18.54 17.6802 18.26 18.7602 17.9C19.5302 17.64 20.1202 17.06 20.4002 16.32C20.6802 15.57 20.6002 14.75 20.1902 14.06ZM12.7502 10C12.7502 10.42 12.4102 10.76 11.9902 10.76C11.5702 10.76 11.2302 10.42 11.2302 10V6.90005C11.2302 6.48005 11.5702 6.14005 11.9902 6.14005C12.4102 6.14005 12.7502 6.48005 12.7502 6.90005V10Z"
                  fill="#9600FF"
                ></path>
                <path
                  d="M14.8302 20.01C14.4102 21.17 13.3002 22 12.0002 22C11.2102 22 10.4302 21.68 9.88018 21.11C9.56018 20.81 9.32018 20.41 9.18018 20C9.31018 20.02 9.44018 20.03 9.58018 20.05C9.81018 20.08 10.0502 20.11 10.2902 20.13C10.8602 20.18 11.4402 20.21 12.0202 20.21C12.5902 20.21 13.1602 20.18 13.7202 20.13C13.9302 20.11 14.1402 20.1 14.3402 20.07C14.5002 20.05 14.6602 20.03 14.8302 20.01Z"
                  fill="#9600FF"
                ></path>
              </svg>
            </span>
          </button>
          <button className="cursor-pointer">
            <span className="w-[38px] h-[38px] rounded-lg flex justify-center items-center  bg-[#F7DFEF] dark:bg-[#2F112A] ">
              <svg
                width="20"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"
                  fill="#E9485B"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
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
            <div className="bg-[#7C03D0] text-sm text-center text-white px-3 py-2 rounded-md font-bold">
              {genre.name}
            </div>
          ))}
          
          {/* <div className="font-bold text-[#787878] dark:text-[#C7C7C7] ml-2">
            ژانر
          </div>
          <div className="bg-[#7C03D0] text-sm text-center text-white px-3 py-2 rounded-md font-bold ">
            عاشقانه
          </div>
          <div className="bg-[#E9485B] text-sm text-center text-white px-3 py-2 rounded-md font-bold ">
            فانتزی
          </div>
          <div className="bg-[#1CA7F5] text-sm text-center text-white px-3 py-2 rounded-md font-bold ">
            اکشن
          </div> */}
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
