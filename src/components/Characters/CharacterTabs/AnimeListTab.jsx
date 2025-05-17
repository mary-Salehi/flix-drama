import { useParams } from "react-router-dom";
import MiniCard from "../../../ui/MiniCard"
import useFetch, { API_BASE } from "../../../hooks/useFetch";

function AnimeListTab() {
  const {characterId} = useParams();

  const {
      data: characterAnime,
      isLoading,
      error,
    } = useFetch(`${API_BASE}/characters/${characterId}/anime`);


  return (
    <div className="flex flex-wrap justify-center sm:justify-start gap-6 p-6">
      {characterAnime.map(anime => {
        return(
          <MiniCard key={anime.anime.mal_id} item={anime} page='singleCharacter'/>
        )
      })}
    </div>
  )
}

export default AnimeListTab