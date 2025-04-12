import Dramas, { Drama } from "./Dramas";
import HomePageAnimeSwiper from "./Swiper/HomePageSwiper";

const dramasCategory = [
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
  // {
  //   category: 'popular',
  //   title: 'Current Season',
  //   endpoint: 'https://api.jikan.moe/v4/top/anime?filter=bypopularity'
  // },
  // {
  //   category: 'popular-dramas',
  //   title: 'Popular Dramas',
  //   endpoint: 'https://api.jikan.moe/v4/anime?genres=8&order_by=popularity'
  // },
  // {
  //   category: 'highest-rated',
  //   title: 'Highest Rated',
  //   endpoint: 'https://api.jikan.moe/v4/top/anime?filter=bypopularity'
  // }
];

function DramasContainer() {
  return (
    <div className="space-y-10">
      {dramasCategory.map((category) => (
        <HomePageAnimeSwiper key={category.category} category={category.category} title={category.title} endpoint={category.endpoint} query={category.query}/>
      ))}
    </div>
  );
}

export default DramasContainer;
