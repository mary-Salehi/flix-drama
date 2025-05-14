function PostDetailsModal({ data, isLoading }) {
  return (
    <div className="w-[210px] shrink-0 space-y-5">
      <div className="w-[210px] h-[330px] bg-gray-300 rounded-3xl overflow-hidden">
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-5 border-b-4 border-b-transparent border-purple-700"></div>
          </div>
        ) : (
          <img
            className="w-full h-full object-cover"
            src={data?.images?.webp?.large_image_url}
            alt="anime-img"
          />
        )}
      </div>
      <button className="bg-yellow-primary text-white py-3 rounded-xl font-bold w-full cursor-pointer">
        مشخصات کامل پست
      </button>
      
    </div>
  );
}

export default PostDetailsModal;
