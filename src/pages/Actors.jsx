import { Link } from "react-router-dom";

const actors = [
  {
    id: 1,
    name: "Ji Chang Wook",
    imageUrl: "https://uploadcenter.flix3drama.com/images/actors/ZyyEJ_5f.webp",
  },
  {
    id: 2,
    name: "Song Joong Ki",
    imageUrl: "https://uploadcenter.flix3drama.com/images/actors/1kymd_5f.webp",
  },
  {
    id: 3,
    name: "Lee Ji Eun",
    imageUrl: "https://uploadcenter.flix3drama.com/images/actors/vK4lp_5f.webp",
  },
  {
    id: 4,
    name: "Park Bo Gum",
    imageUrl: "https://uploadcenter.flix3drama.com/images/actors/p3Qx8_5f.webp",
  },
];
function Actors() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {actors.map((actor) => {
        return (
          <div className="flex justify-between w-[250px] h-[165px] bg-white dark:bg-primary-1-dark p-5 rounded-3xl">
            <div className="flex flex-col justify-between">
              <div className="bg-[#6200E3] font-bold rounded-2xl flex w-[50px] h-[50px] items-center justify-center text-white">
                {actor.id}
              </div>
              <Link className="dark:text-white text-xs">مشاهده</Link>
            </div>
            <div className="flex flex-col justify-between items-end">
              <Link>
                <img className="w-[75px] h-[75px] rounded-3xl object-cover" src={actor.imageUrl} alt="" />
              </Link>
              <Link className="font-bold dark:text-white">{actor.name}</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Actors;
