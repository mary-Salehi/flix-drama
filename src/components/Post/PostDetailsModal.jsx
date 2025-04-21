
function PostDetailsModal({data, isLoading}) {
  if(isLoading) return <div>loading image...</div>
  return (
    <div className="w-[210px] shrink-0 space-y-5">
      <div className="overflow-hidden">
        <img
          className="w-[210px] h-[330px] object-cover rounded-3xl"
          src={data?.images?.webp?.large_image_url}
          alt="anime-img"
        />
      </div>
      <button className="bg-yellow-primary text-white py-3 rounded-xl font-bold w-full cursor-pointer">
        مشخصات کامل پست
      </button>
    </div>
  );
}

export default PostDetailsModal;
