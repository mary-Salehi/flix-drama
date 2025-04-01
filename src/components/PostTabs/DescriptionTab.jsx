import React from "react";
import VerticalSwiper from "../VerticalSwiper";

function DescriptionTab() {
  return (
    <div className="flex flex-col lg:flex-row gap-5 px-6 py-10">
      <div className="">
        <p className="font-extrabold mb-8 dark:text-white">توضیحات سریال</p>
        <div className="px-7 pt-7 pb-16 border border-[#e9e5e5] dark:border-[#24152E] rounded-3xl dark:text-white">
          کیم یو هان (Kang Ha Neul) کارآموز قضایی است که وارد شدنش به یک پرونده،
          منجر به زندانی شدن او می گردد و …
        </div>
      </div>
      <div>
        <VerticalSwiper />
      </div>
    </div>
  );
}

export default DescriptionTab;
