import { useParams } from "react-router-dom";
import useFetch, { API_BASE } from "../../../hooks/useFetch";
import AnimeThumbnail from "../../../ui/AnimeThumbnail";
import { useCharacterAnime } from "../context/CharacterAnimeContext";


function BiograghyTab() {
  const {characterId} = useParams();

  const {
      data: characterAnime,
      isLoading,
      error,
    } = useFetch(`${API_BASE}/characters/${characterId}/anime`);
  
    console.log('anime data is...' , characterAnime);
    

  return (
    <div className="flex flex-col lg:flex-row justify-center gap-16 px-6 py-10">
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
        {
          characterAnime.slice(0,3).map(item => {
            return(
              <AnimeThumbnail key={item.anime.mal_id} anime={item} page='singleCharacter'/>
            )
          })
        }
      </div>
    </div>
  );
}

export default BiograghyTab;
