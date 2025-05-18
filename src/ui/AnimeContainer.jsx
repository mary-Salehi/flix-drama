import HomePageAnimeSwiper from "../components/Swiper/HomePageSwiper";

const animeCategory = [
  {
    category: 'airing',
    title: 'top airing',
    endpoint: 'https://api.jikan.moe/v4/top/anime?filter=airing'
  },
  {
    category: 'upcoming',
    title: 'top upcoming',
    endpoint: 'https://api.jikan.moe/v4/top/anime?filter=upcoming'
  },
  {
    category: 'top-tv',
    title: 'top tv',
    endpoint: 'https://api.jikan.moe/v4/top/anime?filter=bypopularity'
  },
];

function AnimeContainer() {
  return (
    <div className="space-y-10">
      {animeCategory.map((category) => (
        <HomePageAnimeSwiper key={category.category} category={category.category} title={category.title} endpoint={category.endpoint} query={category.query}/>
      ))}
    </div>
  );
}

export default AnimeContainer;
