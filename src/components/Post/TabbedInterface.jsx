import { useState } from "react";
import CastAndCrewTab from "../PostTabs/CastAndCrewTab";
import CommentsTab from "../PostTabs/CommentsTab";
import DescriptionTab from "../PostTabs/DescriptionTab";
import DownloadTab from "../PostTabs/DownloadTab";

const tabs = [
  {
    id: "description",
    name: "توضیحات",
    component: <DescriptionTab />,
  },
  {
    id: "download",
    name: "دانلود",
    component: <DownloadTab />,
  },
  {
    id: "cast",
    name: "عوامل",
    component: <CastAndCrewTab />,
  },
  {
    id: "comments",
    name: "نظرات",
    component: <CommentsTab />,
  },
];

function TabbedInterface() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <div className="flex items-center justify-center border-b border-gray-200 dark:border-[#24152E]">
        {tabs.map((tab) => {
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-2 py-3 dark:text-white text-[#24152E] font-semibold whitespace-nowrap cursor-pointer box-border ${
                activeTab === tab.id
                  ? "font-black border-b-4 border-purple-btn pb-2"
                  : "pb-3"
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* tab content area */}
      <div className="">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
}

export default TabbedInterface