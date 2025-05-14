import TabbedInterface from "../../../ui/TabbedInterface";
import AnimeListTab from "./AnimeListTab";
import BiograghyTab from "./BiograghyTab";

const characterTabs = [
  {
    id: "biography",
    name: "بیوگرافی",
    component: <BiograghyTab />,
  },
  {
    id: "animeList",
    name: "انیمه ها",
    component: <AnimeListTab />,
  },
];

function CharacterTabbedInterface() {
  return (
    <div className="">
      <TabbedInterface tabs={characterTabs}/>
    </div>
  );
}

export default CharacterTabbedInterface;
