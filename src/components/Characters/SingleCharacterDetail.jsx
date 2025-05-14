import { data, useLocation, useParams } from "react-router-dom";
import BackgroundPoster from "../../ui/BackgroundPoster";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import SmallPoster from "../../ui/SmallPoster";
import TitleWithActions from "../../ui/TitleWithActions";
import FavoriteButton from "../../ui/FavoriteButton";
import NotificationButton from "../../ui/NotificationButton";
import CharacterTabbedInterface from "./CharacterTabs/CharacterTabbedInterface";

function SingleCharacterDetail() {
  const { characterId } = useParams();
  console.log("the id is...", characterId);

  const {
    data: charactersAnime,
    isLoading,
    error,
  } = useFetch(`${API_BASE}/characters/${characterId}/anime`);
  console.log(charactersAnime[0]?.anime?.images.webp.large_image_url);

  const { data: character } = useFetch(`${API_BASE}/characters/${characterId}`);
  console.log(character);
  console.log(charactersAnime);

  return (
    <div className="">
      <BackgroundPoster
        image={charactersAnime[0]?.anime.images.webp.large_image_url}
      />
      <div className="w-full relative -top-32 lg:-top-20 flex flex-col lg:flex-row items-center lg:items-start gap-8 px-8 pt-5">
        <SmallPoster data={character} isLoading={isLoading} />
        <div className="flex-1 w-full pt-18">
          <TitleWithActions
            title={character.name_kanji}
            subTitle={character.name}
          >
            <FavoriteButton />
          </TitleWithActions>
          <hr className="border-b border-gray-200 dark:border-[#24152E] mt-4" />
          {/* played anime */}
          <div className="py-8 space-y-8 lg:scroll-py-4">
            <p className="text-xl font-bold text-black/90 dark:text-white lg:text-start text-center">
              لیست انیمه ها :
            </p>
            <div className="flex flex-col gap-3 dark:text-gray-300 text-gray-800 text-end">
              {charactersAnime.map((item, index) => {
                return (
                  <div key={index} className="flex justify-end gap-2">
                    <span>{item.anime.title}</span>
                    <span>({(index + 1).toString().padStart(2, "0")}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CharacterTabbedInterface />
      </div>
    </div>
  );
}

export default SingleCharacterDetail;
