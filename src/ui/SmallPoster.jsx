import Spinner from "./Spinner";

function SmallPoster({data,isLoading}) {
  return (
    <div className="w-[210px] h-[330px] bg-gray-300 rounded-3xl overflow-hidden">
      {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner size="lg" color="purple-700" borderSize={4}/>
        </div>
      ) : (
        <img
          className="w-full h-full object-cover"
          src={data?.images?.webp?.large_image_url || data?.images?.webp?.image_url}
          alt="anime-img"
        />
      )}
    </div>
  );
}

export default SmallPoster;
