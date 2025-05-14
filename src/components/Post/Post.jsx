import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import PostDetailsModal from "./PostDetailsModal";
import PostDetails from "./PostDetails";
import useFetch, { API_BASE } from "../../hooks/useFetch";
import BackgroundPoster from "../../ui/BackgroundPoster";
import PostTabbedInterface from "./PostTabbedInterface";


function Post() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const {state} = useLocation();
  console.log(title);
  console.log("location state: ", state);

  const { data, error, isLoading } = useFetch(
    `${API_BASE}/anime/${state.mal_id}/full`
  );
  console.log('loding single post: ',isLoading);
  console.log('single anime ', data);
  
  

  if (isLoading) return <h1 className="text-black/50 dark:text-white text-4xl text-center pt-5">در حال بارگذاری</h1>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>محتوا یافت نشد</div>;

  return (
    <div className="min-h-screen">
      <div className="relative flex flex-col items-center">
        <BackgroundPoster image={data.images?.webp?.large_image_url} isLoading={isLoading} error={error}/>
        <div className="w-full relative -top-32 lg:-top-20 flex flex-col lg:flex-row items-center  gap-8 px-8 pt-5">
          <PostDetailsModal data={data} isLoading={isLoading} />
          <PostDetails data={data} isLoading={isLoading} />
        </div>
      </div>
      <PostTabbedInterface/>
      {/* <TabbedInterface /> */}
    </div>
  );
}

export default Post;
