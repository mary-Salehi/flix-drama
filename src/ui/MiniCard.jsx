import { UserCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";


function MiniCard({ item, page, children }) {
  // data structure based on page type
  const data = page === "post" ? item.character : item.anime;

  const imageUrl =
    page === "post"
      ? data?.images?.webp?.image_url // Character image
      : data?.images?.webp?.large_image_url; // Anime image

  const id = data?.mal_id;
  const title = page === "post" ? data?.name : data?.title;
  const linkPath =
    page === "post" ? `/character/${id}` : `/post/${encodeURIComponent(title)}`;

  return (
    <div className="flex flex-col w-[140px] rounded-3xl overflow-hidden bg-white dark:bg-primary-1-dark shadow-md hover:scale-105 transition-transform duration-200">
      {/* Image Section */}
      <div className="w-full !h-[150px] flex items-center justify-center bg-purple-800">
        {imageUrl ? (
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title || "Image"}
            loading="lazy"
          />
        ) : (
          <UserCircleIcon className="w-20 text-white" />
        )}
      </div>

      {/* Content Section */}
      <Link
        to={linkPath}
        state={{
            mal_id: id,
          }}
        className="flex flex-col items-center justify-center px-2 py-4"
      >
        <span className="font-bold dark:text-white text-center mb-2 line-clamp-2">
          {title}
        </span>
        <span className="text-[#858585] dark:text-[#DEDEDE]">
          {children}
        </span>
      </Link>
    </div>
  );
}

export default MiniCard;
