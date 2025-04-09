import { Link } from "react-router-dom";

function PostsPlaylist() {
  return (
    <div className="w-full flex justify-center gap-2 mb-5">
      <Link className="w-full">
        <div className="h-[136px] w-full rounded-3xl overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src="https://flix3drama.com/_app/immutable/assets/archive_banner1-62555a79.webp"
            alt=""
          />
          <div className="w-full h-full absolute top-0 opacity-80 bg-gradient-to-r from-purple-800 to-blue-400"></div>
          <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-full">
            <span className="inline-block w-1/2 text-center text-white font-black text-wrap text-sm">
              جدیدترین سریال های کره ای
            </span>
          </div>
        </div>
      </Link>

      <Link className="w-full">
        <div className="h-[136px] w-full rounded-3xl overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src="https://flix3drama.com/_app/immutable/assets/archive_banner2-1dd74ced.webp"
            alt=""
          />
          <div className="w-full h-full absolute top-0 opacity-80 bg-gradient-to-r from-orange-500 to-amber-300"></div>
          <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-full">
            <span className="inline-block w-1/2 text-center text-white font-black text-wrap text-sm">
              جدیدترین سریال های چینی
            </span>
          </div>
        </div>
      </Link>

      <Link className="w-full">
        <div className="h-[136px] w-full rounded-3xl overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src="https://flix3drama.com/_app/immutable/assets/archive_banner3-5f9c70a6.webp"
            alt=""
          />
          <div className="w-full h-full absolute top-0 opacity-80 bg-gradient-to-r from-pink-600 to-purple-600"></div>
          <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 w-full">
            <span className="inline-block w-1/2 text-center text-white font-black text-wrap text-sm">
              جدیدترین فیلم های کره ای
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PostsPlaylist;
