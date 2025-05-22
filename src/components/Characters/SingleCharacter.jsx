import { Link } from "react-router-dom";
import truncateText from '../../utils/truncateText'

function SingleCharacter({ character }) {
  
  return (
    <div className="flex justify-between w-[250px] h-[165px] bg-white dark:bg-primary-1-dark p-5 rounded-3xl">
      <div className="flex flex-col justify-between">
        <div className="bg-[#6200E3] font-bold rounded-2xl flex w-[50px] h-[50px] items-center justify-center text-white">
          {character.mal_id}
        </div>
        <Link
          to={{
            pathname: `/character/${character.mal_id}`,
            state: {
              characterId: character.mal_id
            },
          }}
          className="dark:text-white text-xs"
        >
          مشاهده
        </Link>
      </div>
      <Link
        to={{
          pathname: `/character/${character.mal_id}`,
          state: {
            characterId: character.mal_id
          },
        }}
        className="flex flex-col justify-between items-end"
      >
        <div>
          <img
            crossOrigin="anonymous"
            className="w-[75px] h-[75px] rounded-3xl object-cover"
            src={character.images.webp.image_url}
            alt={character.name}
          />
        </div>
        <div className="font-bold dark:text-white">{truncateText(character.name,15)}</div>
      </Link>
    </div>
  );
}

export default SingleCharacter;
