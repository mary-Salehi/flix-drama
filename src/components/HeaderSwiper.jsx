import React from "react";

function HeaderSwiper() {
  return (
    <div className="w-full h-[240px] relative rounded-4xl bg-blue-200 overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="https://uploadcenter.flix3drama.com/images/slides/KT9hJmAAwn.webp"
        alt=""
      />
      <div className="absolute inset-0 bg-gradient-to-l from-purple-900 opacity-60"></div>
      <div className="absolute top-10 right-10 space-y-6 text-white ">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.1em]">دشمن عزیز من</h2>
        <p className="text-xl sm:text-lg">My Dearest Nemesis</p>
        <button className="bg-white rounded-xl px-4 py-2">
          <a className="text-[#451169] font-semibold" href="">
            دانلود و پخش آنلاین
          </a>
        </button>
      </div>
    </div>
  );
}

export default HeaderSwiper;
