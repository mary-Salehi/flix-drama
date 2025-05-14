import AnimeThumbnail from "../../../ui/AnimeThumbnail";

const anime = "ji";

function BiograghyTab() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 py-10">
      <div className="space-y-8 w-full max-w-[600px]">
        <p className="font-black dark:text-white">بیوگرافی کاراکتر</p>
        <div className="px-7 font-semibold pt-7 pb-12 border-[1.35px] border-[#D7D7D7] dark:border-[#24152E] rounded-3xl">
          <p className="text-black/80 dark:text-white text-sm">
            این بخش به زودی فعال می شود
          </p>
        </div>
      </div>

      <div className="w-full flex-1/3 space-y-8 mx-auto flex  flex-col justify-center items-center">
        <p className="dark:text-white font-bold">
          جدیدترین انیمه های این کاراکتر
        </p>
        <AnimeThumbnail anime={anime} />
      </div>
    </div>
  );
}

export default BiograghyTab;
