
function PostDetails() {
  return (
    <div className="w-[210px] shrink-0 space-y-5">
      <div className="overflow-hidden">
        <img
          className="w-[210px] h-[330px] object-cover rounded-3xl"
          src="https://uploadcenter.flix3drama.com/images/posters/Z6WJk955V8.webp"
          alt="drama-img"
        />
      </div>
      <button className="bg-yellow-primary text-white py-3 rounded-xl font-bold w-full cursor-pointer">
        مشخصات کامل پست
      </button>
    </div>
  );
}

export default PostDetails;
