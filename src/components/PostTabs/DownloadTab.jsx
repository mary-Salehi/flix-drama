import React, { Component, useState } from "react";

function DownloadTab() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-5 px-6 py-10">
      <ContentDelivery />
    </div>
  );
}

export default DownloadTab;

const ContentDeliveryTabs = [
  {
    id: 1,
    icon: "https://flix3drama.com/_app/immutable/assets/video-play-1727d4e9.svg",
    name: "لینک های دانلود",
    button: "قسمت",
    component: <DownloadLinks />,
  },
  {
    id: 2,
    icon: "https://flix3drama.com/_app/immutable/assets/messages-2a7106f6.svg",
    name: "زیرنویس فارسی",
    button: "قسمت",
    component: <SubtitleLinks />,
  },
  {
    id: 3,
    icon: "https://flix3drama.com/_app/immutable/assets/stream-ba0b0f55.svg",
    name: "تماشای آنلاین از فلیکس استریم",
    button: "تماشا",
  },
];

function ContentDeliveryTab({ setActiveTab, item }) {
  return (
    <button
      onClick={() => setActiveTab(item.id)}
      className="cursor-pointer w-full bg-white dark:bg-primary-1-dark p-4 flex justify-between items-center rounded-2xl dark:text-white"
    >
      <div className="flex items-center gap-3">
        <img className="w-8 h-8" src={item.icon} alt="icon" />
        <span className="font-bold">{item.name}</span>
      </div>
      <div
        className={` ${
          item.id === 1
            ? "bg-[#7E27BB]"
            : item.id === 2
            ? "bg-[#03DDBC]"
            : "bg-[#DE3163]"
        } font-bold text-white rounded-xl py-2 px-4 cursor-pointer`}
      >
        <span>{item.button}</span>
      </div>
    </button>
  );
}

function ContentDelivery() {
  const [activeTab, setActiveTab] = useState();
  return (
    <div className="flex flex-col lg:flex-row items-start w-full gap-10 px-6 py-10">
      <div className="flex flex-col w-full gap-y-4">
        {ContentDeliveryTabs.map((item) => {
          return (
            <ContentDeliveryTab
              setActiveTab={setActiveTab}
              item={item}
              key={item.id}
            />
          );
        })}
      </div>

      {/* content */}
      <div className="max-w-[520px] w-full">
        {!activeTab && (
          <p className="font-black text-base leading-8 text-center px-14 mt-4 text-[#474747] dark:text-white">
            چه فایلی را میخواهید دانلود کنید؟ از بخش{" "}
            <span className="lg:inline-block hidden">سمت راست</span>
            <span className="lg:hidden">بالا</span> نوع فایل را انتخاب کنید تا
            محتواها باز شوند
          </p>
        )}
        {ContentDeliveryTabs.find((item) => item.id === activeTab)?.component}
      </div>
    </div>
  );
}

function DownloadLinks() {
  return (
    <div className="flex flex-col gap-8 dark:text-white">
      <div className="flex items-center justify-between font-bold dark:text-white">
        <p>این سریال را تماشا کرده اید؟</p>
        <button className="flex gap-2 items-center bg-white dark:bg-primary-1-dark py-3 px-4 font-bold dark:text-white rounded-xl cursor-pointer">
          <span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:text-white dark:fill-white"
            >
              <path
                d="M17.7084 7.62506C15.7834 4.60006 12.9667 2.8584 10.0001 2.8584C8.51675 2.8584 7.07508 3.29173 5.75841 4.10007C4.44175 4.91673 3.25841 6.1084 2.29175 7.62506C1.45841 8.9334 1.45841 11.0584 2.29175 12.3667C4.21675 15.4001 7.03341 17.1334 10.0001 17.1334C11.4834 17.1334 12.9251 16.7001 14.2417 15.8917C15.5584 15.0751 16.7417 13.8834 17.7084 12.3667C18.5417 11.0667 18.5417 8.9334 17.7084 7.62506ZM10.0001 13.3667C8.13341 13.3667 6.63341 11.8584 6.63341 10.0001C6.63341 8.14173 8.13341 6.6334 10.0001 6.6334C11.8667 6.6334 13.3667 8.14173 13.3667 10.0001C13.3667 11.8584 11.8667 13.3667 10.0001 13.3667Z"
                fill="#604A75"
                className="dark:text-white dark:fill-white"
              ></path>
              <path
                d="M10 7.6167C8.69167 7.6167 7.625 8.68337 7.625 10C7.625 11.3084 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3084 12.3833 10C12.3833 8.6917 11.3083 7.6167 10 7.6167Z"
                fill="#604A75"
                className="dark:text-white dark:fill-white"
              ></path>
            </svg>
          </span>
          <span>مشاهده همه</span>
        </button>
      </div>
      <div>
        <div className="w-full bg-white dark:bg-primary-1-dark p-4 flex justify-between items-center rounded-2xl cursor-pointer">
          <div className="flex items-center gap-3 font-bold">
            <img
              src="https://flix3drama.com/_app/immutable/assets/video-octagon-d95ac983.svg"
              alt=""
            />
            <span>دانلود قسمت </span>
          </div>
          <div className="font-bold bg-[#EFE2F5] bg-opacity-40 dark:bg-[#2E1F38] text-white flex gap-2 items-center rounded-xl py-3 px-4 cursor-pointer z-20">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:text-white dark:fill-white"
              >
                <path
                  d="M17.7084 7.62506C15.7834 4.60006 12.9667 2.8584 10.0001 2.8584C8.51675 2.8584 7.07508 3.29173 5.75841 4.10007C4.44175 4.91673 3.25841 6.1084 2.29175 7.62506C1.45841 8.9334 1.45841 11.0584 2.29175 12.3667C4.21675 15.4001 7.03341 17.1334 10.0001 17.1334C11.4834 17.1334 12.9251 16.7001 14.2417 15.8917C15.5584 15.0751 16.7417 13.8834 17.7084 12.3667C18.5417 11.0667 18.5417 8.9334 17.7084 7.62506ZM10.0001 13.3667C8.13341 13.3667 6.63341 11.8584 6.63341 10.0001C6.63341 8.14173 8.13341 6.6334 10.0001 6.6334C11.8667 6.6334 13.3667 8.14173 13.3667 10.0001C13.3667 11.8584 11.8667 13.3667 10.0001 13.3667Z"
                  fill="#604A75"
                  className="dark:text-white dark:fill-white"
                ></path>
                <path
                  d="M10 7.6167C8.69167 7.6167 7.625 8.68337 7.625 10C7.625 11.3084 8.69167 12.375 10 12.375C11.3083 12.375 12.3833 11.3084 12.3833 10C12.3833 8.6917 11.3083 7.6167 10 7.6167Z"
                  fill="#604A75"
                  className="dark:text-white dark:fill-white"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function SubtitleLinks() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex w-full items-center gap-1 bg-[#1BC173] dark:bg-[#1BC173] font-medium rounded-lg p-2 text-white">
        <img
          src="https://flix3drama.com/_app/immutable/assets/sync-275383f0.svg"
          alt="icon"
        />
        <p className="text-center text-sm font-light">
          لینک های <b className="font-bold">مستقیم</b> توسط خود ما چک میشن و با
          نسخه داخل سایت هماهنگ هستند. درصورتی که هماهنگ نبود توی نظرات اعلام
          کنید
        </p>
      </div>
      <div className="w-full dark:text-white bg-white dark:bg-primary-1-dark p-4 flex justify-between items-center rounded-2xl cursor-pointer">
        <div className="flex items-center gap-3 font-bold">
          <span>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.9"
                d="M21.5868 2.6665H10.4134C5.56008 2.6665 2.66675 5.55984 2.66675 10.4132V21.5732C2.66675 26.4398 5.56008 29.3332 10.4134 29.3332H21.5734C26.4268 29.3332 29.3201 26.4398 29.3201 21.5865V10.4132C29.3334 5.55984 26.4401 2.6665 21.5868 2.6665Z"
                fill="url(#paint0_linear_39_1017)"
              ></path>
              <path
                d="M23.3334 23.7734H20.8667C20.32 23.7734 19.8667 23.3201 19.8667 22.7734C19.8667 22.2268 20.32 21.7734 20.8667 21.7734H23.3334C23.88 21.7734 24.3334 22.2268 24.3334 22.7734C24.3334 23.3201 23.88 23.7734 23.3334 23.7734Z"
                fill="white"
              ></path>
              <path
                d="M17.2934 23.7734H8.66675C8.12008 23.7734 7.66675 23.3201 7.66675 22.7734C7.66675 22.2268 8.12008 21.7734 8.66675 21.7734H17.2934C17.8401 21.7734 18.2934 22.2268 18.2934 22.7734C18.2934 23.3201 17.8534 23.7734 17.2934 23.7734Z"
                fill="white"
              ></path>
              <path
                d="M23.3333 18.7598H15.96C15.4133 18.7598 14.96 18.3064 14.96 17.7598C14.96 17.2131 15.4133 16.7598 15.96 16.7598H23.3333C23.88 16.7598 24.3333 17.2131 24.3333 17.7598C24.3333 18.3064 23.88 18.7598 23.3333 18.7598Z"
                fill="white"
              ></path>
              <path
                d="M12.3601 18.7598H8.66675C8.12008 18.7598 7.66675 18.3064 7.66675 17.7598C7.66675 17.2131 8.12008 16.7598 8.66675 16.7598H12.3601C12.9067 16.7598 13.3601 17.2131 13.3601 17.7598C13.3601 18.3064 12.9067 18.7598 12.3601 18.7598Z"
                fill="white"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_39_1017"
                  x1="15.9934"
                  y1="2.6665"
                  x2="15.9934"
                  y2="29.3332"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFAA06" stop-opacity="0.6"></stop>
                  <stop offset="1" stop-color="#FF6A2B"></stop>
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span>زیرنویس قسمت </span>
        </div>
      </div>
    </div>
  );
}
