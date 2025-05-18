import Loader from "./Loader";

function BackgroundPoster({isLoading,image}) {
  console.log(image);
  
  // if(isLoading) return <div className="w-full bg-gradient-to-r from-purple-400 to-purple-700">loading</div>
  return (
    <div className="w-full [mask-image:linear-gradient(to_top,transparent_0%,white)] dark:[mask-image:linear-gradient(to_top,transparent_0%,yellow-70%)]">
      {isLoading ? (
        <div className="flex justify-center w-full h-[240px] bg-gradient-to-r from-purple-400 to-purple-700">
          <Loader text="در حال بارگذاری عکس"/>
        </div>
      ) : (
        <img
          className="w-full h-[240px] object-cover"
          src={image}
          alt="drama-img"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b dark:from-primary-2-dark opacity-0"></div>
    </div>
  );
}

export default BackgroundPoster

//{images?.webp?.large_image_url}