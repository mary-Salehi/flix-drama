import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import MiniCard from "../../ui/MiniCard";
import { useLoadMore } from "../../hooks/useLoadMore";
import LoadMoreButton from "../../ui/LoadMoreButton";

function CastAndCrewTab() {
  const { state } = useLocation();
  const { data, error, isLoading } = useFetch(
    `https://api.jikan.moe/v4/anime/${state.mal_id}/characters`
  );

  const { visibleCount, loadMore, hasMore } = useLoadMore(8, 8);

  // Separate characters by role
  const mainCharacters = data.filter((item) => item.role === "Main");
  const supportingCharacters = data.filter((item) => item.role !== "Main");

  return (
    <div className="dark:text-white p-10">
      {isLoading && (
        <div className="dark:text-white textxl font-bold p-6">
          در حال بارگذاری کاراکترها
        </div>
      )}

      {error && (
        <div className="dark:text-white textxl font-bold p-6">
          خطا در دریافت اطلاعات کاراکترها
        </div>
      )}

      {!isLoading && !error && (
        <>
          <h1 className="dark:text-white text-xl font-bold mb-8">کاراکترها</h1>
          <div className="space-y-8">
            <div className="flex flex-wrap justify-center sm:justify-start gap-6">
              {mainCharacters.map((item) => {
                return (
                  <MiniCard item={item} key={item.character.mal_id} page="post">
                    {"کاراکتر اصلی"}
                  </MiniCard>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-6">
              {supportingCharacters
                .slice(0, visibleCount)
                .map((item) => {
                  return (
                    <MiniCard key={item.character.mal_id} item={item} page="post">
                        {"کاراکتر فرعی"}
                      </MiniCard>
                  );
                })}
            </div>
            <LoadMoreButton
              onClick={loadMore}
              hasMore={hasMore(supportingCharacters.length)}
              text="نمایش بیشتر"
              loadingText="در حال بارگذاری..."
            />
          </div>
        </>
      )}

      {mainCharacters.length === 0 && supportingCharacters.length === 0 && (
        <div className="text-center py-8 text-gray-500 dark:text-gray-400">
          کاراکتری برای نمایش وجود ندارد
        </div>
      )}
    </div>
  );
}

export default CastAndCrewTab;
