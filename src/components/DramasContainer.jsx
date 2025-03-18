import Dramas from "./Dramas";

const dramasCategory = [
  {
    id: 1,
    name: "جدیدترین سریال های کره ای",
  },
  {
    id: 2,
    name: "جدیدترین سریال های چینی",
  },
  {
    id: 3,
    name: "جدیدترین سریال های ژاپنی",
  },
  {
    id: 4,
    name: "جدیدترین سریال های تایلندی",
  },
  {
    id: 5,
    name: "جدیدترین فیلم های کره ای",
  },
  {
    id: 6,
    name: "جدیدترین برنامه های کره ای",
  },
  {
    id: 7,
    name: "سریال های کره ای روزانه",
  },
];

function DramasContainer() {
  return (
    <div className="space-y-10">
      {dramasCategory.map((category) => (
        <div key={category.id} className="flex flex-col gap-y-10">
          <div className="flex items-center justify-between">
            <div className="font-bold text-lg dark:text-white">
              {category.name}
            </div>
            <a
              className="text-sm text-[#5F5F5F] dark:text-white font-semibold"
              href="#"
            >
              مشاهده
            </a>
          </div>
          <Dramas page='home' />
        </div>
      ))}
    </div>
  );
}

export default DramasContainer;
