import React from "react";

function DownloadTab() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 px-6 py-10">
      <div className="max-w-[520px] w-full space-y-4">
        <button className="cursor-pointer border border-slate-200 dark:border-0 w-full bg-white dark:bg-primary-1-dark p-4 flex justify-between items-center rounded-2xl dark:text-white">
          <div className="flex items-center gap-3">
            <img
              src="https://flix3drama.com/_app/immutable/assets/video-play-1727d4e9.svg"
              alt="icon"
            />
            <span className="font-bold">لینک های دانلود</span>
          </div>
          <div className="bg-[#7E27BB] font-bold text-white rounded-xl py-2 px-4">
            <span>10</span>
            <span>قسمت</span>
          </div>
        </button>
        <button className="cursor-pointer border border-slate-200 dark:border-0 w-full bg-white dark:bg-primary-1-dark p-4 flex justify-between items-center rounded-2xl dark:text-white">
          <div className="flex items-center gap-3">
            <img
              src="https://flix3drama.com/_app/immutable/assets/messages-2a7106f6.svg"
              alt="icon"
            />
            <span className="font-bold">زیرنویس فارسی</span>
          </div>
          <div className="bg-[#03DDBC] font-bold text-white rounded-xl py-2 px-4">
            <span>10</span>
            <span>قسمت</span>
          </div>
        </button>
      </div>
      <div className="max-w-[520px] w-full">
        <p className="font-bold text-lg text-center px-14 mt-4 text-[#474747] dark:text-white">
          چه فایلی را میخواهید دانلود کنید؟ از بخش  <span className="lg:inline-block hidden">سمت راست</span><span className="lg:hidden">بالا</span> نوع فایل را
          انتخاب کنید تا محتواها باز شوند
        </p>
      </div>
    </div>
  );
}

export default DownloadTab;

function downloadLink() {
  return (
    <button className="cursor-pointer w-full bg-white dark:bg-primary-1-dark p-4 flex justify-between items-center rounded-2xl dark:text-white">
      <div className="flex items-center gap-3">
        <img
          src="https://flix3drama.com/_app/immutable/assets/video-play-1727d4e9.svg"
          alt="icon"
        />
        <span className="font-bold">لینک های دانلود</span>
      </div>
      <div className="bg-[#7E27BB] font-bold text-white rounded-xl py-2 px-4 cursor-pointer">
        <span>10</span>
        <span>قسمت</span>
      </div>
    </button>
  );
}
